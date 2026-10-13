import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendEmail } from '@/lib/email';
import { Redis } from '@upstash/redis';

// Safe Redis client
let redis: Redis | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = Redis.fromEnv();
  }
} catch (e) {
  console.warn("⚠️ Redis initialization skipped for partner application route");
}

const dataDir = path.join(process.cwd(), 'data');
const partnerApplicationsFile = path.join(dataDir, 'partner-applications.json');

function saveApplicationLocally(application: any) {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    let list: any[] = [];
    if (fs.existsSync(partnerApplicationsFile)) {
      const raw = fs.readFileSync(partnerApplicationsFile, 'utf-8');
      list = JSON.parse(raw);
    }
    list.push(application);
    fs.writeFileSync(partnerApplicationsFile, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.warn("⚠️ Could not persist application to data/partner-applications.json:", err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      partnerFullName,
      partnerEmail,
      partnerPhone,
      geography,
      industries,
      experience,
      origination,
      availability,
      attribution_ref,
      utm_source,
      utm_campaign
    } = body;

    if (!partnerFullName || !partnerEmail || !partnerPhone) {
      return NextResponse.json(
        { success: false, error: "Full Name, Email, and Phone number are required." },
        { status: 400 }
      );
    }

    // Generate unique Partner Application Reference: R30-2026-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `R30-2026-${randomDigits}`;

    const applicationRecord = {
      referenceId,
      submittedAt: new Date().toISOString(),
      status: 'pending_interview',
      partnerFullName,
      partnerEmail,
      partnerPhone,
      geography: geography || 'Not Specified',
      industries: industries || 'Not Specified',
      experience: experience || 'Not Specified',
      origination: origination || 'Not Specified',
      availability: availability || 'FULL_TIME',
      attribution_ref: attribution_ref || 'DIRECT',
      utm_source: utm_source || 'organic',
      utm_campaign: utm_campaign || 'none'
    };

    // 1. Persist to local JSON fallback
    saveApplicationLocally(applicationRecord);

    // 2. Persist to Upstash Redis if available
    if (redis) {
      try {
        await redis.set(`r30_app:${referenceId}`, applicationRecord);
        await redis.lpush('r30_applications_list', referenceId);
      } catch (redisErr) {
        console.warn("⚠️ Redis write skipped, local record preserved:", (redisErr as any)?.message);
      }
    }

    // 3. Email Notification to Leadership
    try {
      const adminHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 28px; color: #111; max-width: 650px; background: #ffffff; border: 1px solid #e4e4e4;">
          <div style="border-bottom: 2px solid #14335E; padding-bottom: 12px; margin-bottom: 20px;">
            <span style="font-size: 11px; font-weight: 700; color: #AD8A4D; letter-spacing: 0.12em; text-transform: uppercase;">IRTIQA / R/30 REVENUE PARTNER PROGRAM</span>
            <h2 style="margin: 6px 0 0; font-size: 22px; color: #0C2340;">New Revenue Partner Dossier: ${referenceId}</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; color: #55595E; width: 35%;">Candidate:</td><td style="font-weight: 600; color: #111;">${partnerFullName}</td></tr>
            <tr><td style="padding: 6px 0; color: #55595E;">Email:</td><td><a href="mailto:${partnerEmail}">${partnerEmail}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #55595E;">Phone / WhatsApp:</td><td>${partnerPhone}</td></tr>
            <tr><td style="padding: 6px 0; color: #55595E;">Operating Region:</td><td>${geography}</td></tr>
            <tr><td style="padding: 6px 0; color: #55595E;">Weekly Allocation:</td><td>${availability}</td></tr>
            <tr><td style="padding: 6px 0; color: #55595E;">Referral Attribution:</td><td style="font-weight: 700; color: #AD8A4D;">${attribution_ref || 'DIRECT'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E4E4E4; margin: 16px 0;" />
          <h4 style="font-size: 13px; text-transform: uppercase; color: #14335E; margin-bottom: 6px;">Target Industries & Networks</h4>
          <p style="background: #F2F5F9; padding: 12px; border-radius: 4px; font-size: 14px; line-height: 1.5; margin: 0 0 16px 0;">${industries}</p>
          <h4 style="font-size: 13px; text-transform: uppercase; color: #14335E; margin-bottom: 6px;">Professional Track Record</h4>
          <p style="background: #F2F5F9; padding: 12px; border-radius: 4px; font-size: 14px; line-height: 1.5; margin: 0 0 16px 0;">${experience}</p>
          <h4 style="font-size: 13px; text-transform: uppercase; color: #14335E; margin-bottom: 6px;">Origination Strategy</h4>
          <p style="background: #FAF6ED; border-left: 3px solid #AD8A4D; padding: 12px; border-radius: 4px; font-size: 14px; line-height: 1.5; margin: 0 0 16px 0;">${origination}</p>
          <div style="font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 12px;">
            Candidate prompted to schedule qualification interview directly via Calendly.
          </div>
        </div>
      `;

      await sendEmail({
        to: process.env.SMTP_FROM_EMAIL || "office@irtiqaaiagency.com",
        subject: `[R/30 PARTNER DOSSIER] ${partnerFullName} (${referenceId})`,
        html: adminHtml
      });
    } catch (adminEmailErr) {
      console.warn("⚠️ Admin notification email failed:", adminEmailErr);
    }

    // 4. Candidate Auto-Confirmation Email with Interview Link
    try {
      const calendlyUrl = `https://calendly.com/irtiqaaiagency/audit-call?name=${encodeURIComponent(partnerFullName)}&email=${encodeURIComponent(partnerEmail)}&a1=${encodeURIComponent(referenceId)}`;
      
      const candidateHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 28px; color: #111; max-width: 600px; background: #ffffff; border: 1px solid #e4e4e4;">
          <div style="border-bottom: 2px solid #14335E; padding-bottom: 12px; margin-bottom: 20px;">
            <span style="font-size: 11px; font-weight: 700; color: #AD8A4D; letter-spacing: 0.12em; text-transform: uppercase;">IRTIQA / R/30 REVENUE PARTNER PROGRAM</span>
            <h2 style="margin: 6px 0 0; font-size: 22px; color: #0C2340;">Partner Dossier Received</h2>
          </div>
          <p>Dear ${partnerFullName.split(' ')[0] || partnerFullName},</p>
          <p>Thank you for submitting your dossier to join the R/30 Revenue Partner Network. Your application has been logged under reference code <strong>${referenceId}</strong>.</p>
          <p>As outlined in our operating charter, new candidate onboarding targets a 24–48 hour turnaround. To expedite your qualification, you are invited to select a 20-minute Partner Briefing call with our practice leadership:</p>
          <div style="text-align: center; margin: 28px 0;">
            <a href="${calendlyUrl}" style="background-color: #14335E; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: 600; font-size: 15px; border-radius: 3px; display: inline-block;">
              Schedule Partner Briefing Call &rarr;
            </a>
          </div>
          <p style="font-size: 13px; color: #55595E; line-height: 1.6;">
            During this briefing, we will review your sector focus, outline our setter-to-closer attribution protocols, and provide access to the Irtiqa capability briefs.
          </p>
          <hr style="border: none; border-top: 1px solid #E4E4E4; margin: 20px 0;" />
          <p style="font-size: 12px; color: #8899AC;">
            IRTIQA Strategic Growth &amp; Transformation &bull; R/30 Division<br />
            Strictly Confidential &bull; Reference: ${referenceId}
          </p>
        </div>
      `;

      await sendEmail({
        to: partnerEmail,
        subject: `R/30 Revenue Partner Program — Dossier Received (${referenceId})`,
        html: candidateHtml
      });
    } catch (candidateEmailErr) {
      console.warn("⚠️ Candidate confirmation email failed:", candidateEmailErr);
    }

    const baseCalendlyUrl = "https://calendly.com/irtiqaaiagency/audit-call";
    const parameterizedCalendlyUrl = `${baseCalendlyUrl}?name=${encodeURIComponent(partnerFullName)}&email=${encodeURIComponent(partnerEmail)}&a1=${encodeURIComponent(referenceId)}`;

    return NextResponse.json({
      success: true,
      referenceId,
      partnerFullName,
      partnerEmail,
      calendlyUrl: parameterizedCalendlyUrl
    });

  } catch (error) {
    console.error("Partner Application Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process application. Please try again." },
      { status: 500 }
    );
  }
}
