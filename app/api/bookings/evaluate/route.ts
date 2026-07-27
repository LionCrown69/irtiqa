import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { sendEmail } from '@/lib/email';
import { getRejectionEmailHtml } from '@/emails/rejection-template';

const redis = Redis.fromEnv();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, revenue, challenge } = body;

    if (revenue && revenue.includes("Under $5k/mo")) {
      console.log(`❌ Rejecting unqualified lead: ${email} (${revenue})`);
      
      const rejectedId = `rejected_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      await redis.set(`rejected_booking:${rejectedId}`, {
        id: rejectedId,
        name,
        email,
        company,
        revenue,
        challenge,
        rejected_at: new Date().toISOString(),
      });

      const html = getRejectionEmailHtml(name.split(' ')[0]);
      await sendEmail({
        to: email,
        subject: "Regarding your application for Irtiqa AI",
        html
      });

      return NextResponse.json({ success: true, status: "rejected" });
    }

    return NextResponse.json({ success: true, status: "accepted" });
  } catch (error) {
    console.error("Evaluation Error:", error);
    return NextResponse.json({ success: false, status: "error" }, { status: 500 });
  }
}
