import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { sendEmail } from '@/lib/email';

const redis = Redis.fromEnv();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const bookingId = formData.get('bookingId') as string;
    const clientEmail = formData.get('clientEmail') as string;
    const clientName = formData.get('clientName') as string;
    const revenue = formData.get('revenue') as string;
    const stack = formData.get('stack') as string;
    const target = formData.get('target') as string;

    // 1. Save brief to Upstash Redis
    const briefData = {
      bookingId,
      clientEmail,
      clientName,
      revenue,
      stack,
      target,
      submittedAt: new Date().toISOString()
    };
    await redis.set(`brief:${bookingId}`, briefData);

    // 2. Email the founder so they have it before the call!
    const ownerHtml = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>📋 Pre-Audit Brief Submitted!</h2>
        <p><strong>Client:</strong> ${clientName} (${clientEmail})</p>
        <hr/>
        <p><strong>1. Current Revenue:</strong><br/>${revenue}</p>
        <p><strong>2. Current Tech Stack:</strong><br/>${stack}</p>
        <p><strong>3. 12-Month Target:</strong><br/>${target}</p>
        <hr/>
        <p><a href="https://irtiqaaiagency.com/admin/bookings">View all bookings in Admin Dashboard</a></p>
      </div>
    `;

    await sendEmail({
      to: "lioncrown077@gmail.com",
      subject: `[ACTION REQUIRED] ${clientName} submitted their Pre-Audit Brief`,
      html: ownerHtml
    });

    // 3. Redirect back to website with a success state
    return NextResponse.redirect(new URL('/brief-success', req.url), 303);

  } catch (error) {
    console.error("Brief submission error:", error);
    return NextResponse.redirect(new URL('/?error=brief_failed', req.url), 303);
  }
}
