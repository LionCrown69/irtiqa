import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate required fields
    const { fullName, email, companyUrl, description } = body;

    if (!fullName || !email || !companyUrl || !description) {
      return NextResponse.json({ success: false, error: "Please fill out all required fields." }, { status: 400 });
    }

    // Generate waitlist reference code: CW2-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const reference = `CW2-${randomDigits}`;

    const waitlistData = {
      reference,
      created_at: new Date().toISOString(),
      fullName,
      email,
      companyUrl,
      description
    };

    // Attempt to store in Upstash Redis if configured
    try {
      const redis = Redis.fromEnv();
      await redis.set(`cohort2_waitlist:${reference}`, waitlistData);
      await redis.lpush('cohort2_waitlist_list', reference);
    } catch (redisErr) {
      console.warn("Redis not available for storing waitlist, proceeding with email log:", redisErr);
    }

    // Email notification to leadership
    try {
      const ownerHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #111; max-width: 600px; background-color: #0c0c0b; color: #ffffff;">
          <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 24px;">
            <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #10B981; letter-spacing: 1px; text-transform: uppercase;">IRTIQA AI / COHORT 2 WAITLIST</span>
            <h2 style="margin: 8px 0 0; font-size: 20px; font-weight: 500;">New Waitlist Entry: ${reference}</h2>
          </div>
          
          <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0 0 12px; font-size: 15px;"><strong style="color: #a3a3a3; font-weight: 500; display: inline-block; width: 120px;">Name:</strong> ${fullName}</p>
            <p style="margin: 0 0 12px; font-size: 15px;"><strong style="color: #a3a3a3; font-weight: 500; display: inline-block; width: 120px;">Email:</strong> ${email}</p>
            <p style="margin: 0 0 12px; font-size: 15px;"><strong style="color: #a3a3a3; font-weight: 500; display: inline-block; width: 120px;">Company URL:</strong> <a href="${companyUrl}" target="_blank" style="color: #1641f5;">${companyUrl}</a></p>
          </div>
          
          <h3 style="margin: 24px 0 12px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #10B981;">Business Details</h3>
          <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border-left: 3px solid #1641f5; font-size: 14px; line-height: 1.6; color: #d1d5db;">
            ${description.replace(/\n/g, '<br/>')}
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 32px; font-family: monospace;">Entry recorded at ${new Date().toUTCString()}</p>
        </div>
      `;

      await sendEmail({
        to: "connect@irtiqaaiagency.com",
        subject: `[COHORT 2] New Waitlist: ${fullName}`,
        html: ownerHtml
      });
    } catch (emailErr) {
      console.error("Failed to send Cohort 2 waitlist email notification:", emailErr);
    }

    return NextResponse.json({ success: true, reference });

  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
