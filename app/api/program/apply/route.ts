import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate required fields
    const {
      full_name,
      email,
      whatsapp,
      country,
      city,
      linkedin,
      current_role,
      timezone,
      languages,
      sales_experience,
      weekly_availability,
      work_or_study_status,
      commercial_experience,
      motivation_answer,
      consent
    } = body;

    if (!full_name || !email || !whatsapp || !country || !motivation_answer || !consent) {
      return NextResponse.json({ success: false, error: "Missing required application fields." }, { status: 400 });
    }

    // Generate reference code: RGP-26-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const reference = `RGP-26-${randomDigits}`;

    const applicationData = {
      application_id: reference,
      created_at: new Date().toISOString(),
      status: 'under_review',
      full_name,
      email,
      whatsapp,
      country,
      city: city || 'Not Specified',
      linkedin: linkedin || 'Not Provided',
      current_role,
      timezone: timezone || 'Not Specified',
      languages: languages || 'English',
      sales_experience,
      weekly_availability,
      work_or_study_status,
      commercial_experience: commercial_experience || 'Not Specified',
      motivation_answer,
      consent
    };

    // Attempt to store in Upstash Redis if configured
    try {
      const redis = Redis.fromEnv();
      await redis.set(`program_app:${reference}`, applicationData);
      await redis.lpush('program_apps_list', reference);
    } catch (redisErr) {
      console.warn("Redis not available for storing programme application, proceeding with email log:", redisErr);
    }

    // Email notification to leadership
    try {
      const ownerHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #111; max-width: 650px;">
          <div style="border-bottom: 2px solid #1641f5; padding-bottom: 12px; margin-bottom: 20px;">
            <span style="font-family: monospace; font-size: 12px; font-weight: bold; color: #1641f5; letter-spacing: 1px;">IRTIQA AI / REVENUE DIVISION</span>
            <h2 style="margin: 4px 0 0; font-size: 22px; text-transform: uppercase;">New RGP Application: ${reference}</h2>
          </div>
          <p><strong>Candidate:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email} | <strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Location:</strong> ${city}, ${country} (${timezone})</p>
          <p><strong>Current Role:</strong> ${current_role} | <strong>Status:</strong> ${work_or_study_status}</p>
          <p><strong>LinkedIn:</strong> <a href="${linkedin || '#'}" target="_blank">${linkedin || 'Not Provided'}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="font-size: 14px; text-transform: uppercase; color: #666; margin-bottom: 8px;">Commercial Track Record</h3>
          <p><strong>Experience Tier:</strong> ${sales_experience}</p>
          <p><strong>Weekly Availability:</strong> ${weekly_availability}</p>
          <p style="background: #f4f3ee; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.5;">${commercial_experience}</p>
          <h3 style="font-size: 14px; text-transform: uppercase; color: #666; margin: 20px 0 8px;">Signature Application Question</h3>
          <p style="background: #f4f3ee; padding: 12px; border-left: 3px solid #1641f5; border-radius: 4px; font-size: 14px; line-height: 1.5;">${motivation_answer}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Status: <strong>UNDER REVIEW</strong>. Do NOT send interview scheduling link until shortlisted.</p>
        </div>
      `;

      await sendEmail({
        to: "lioncrown077@gmail.com",
        subject: `[RGP COHORT 01] Application Received: ${full_name} (${reference})`,
        html: ownerHtml
      });
    } catch (emailErr) {
      console.error("Failed to send RGP application email notification:", emailErr);
    }

    return NextResponse.json({ success: true, reference });
  } catch (error) {
    console.error("Programme application error:", error);
    return NextResponse.json({ success: false, error: "Internal server error processing application." }, { status: 500 });
  }
}
