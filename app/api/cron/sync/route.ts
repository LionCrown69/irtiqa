import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendEmail } from '@/lib/email';
import { getConfirmationEmailHtmlLight } from '@/emails/templates';
import { getReminderEmailHtml12hr, getReminderEmailHtml5min, getAuthorityEmailHtml48hr } from '@/emails/reminder-templates';
import { performShadowAudit } from '@/lib/shadow-audit';
import { getShadowAuditEmailHtml } from '@/emails/shadow-audit-template';
import { Redis } from '@upstash/redis';
import { enrichCompanyData } from '@/lib/company-enrichment';

// Safe Redis initialization
let redis: Redis | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = Redis.fromEnv();
  }
} catch (e) {
  console.warn("⚠️ Redis client initialization skipped:", e);
}

// Local file fallback
const localFilePath = path.join(process.cwd(), 'data', 'processed-events.json');

function getLocalProcessedEvents(): Record<string, any> {
  try {
    if (fs.existsSync(localFilePath)) {
      const content = fs.readFileSync(localFilePath, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        const map: Record<string, any> = {};
        parsed.forEach(uri => {
          map[uri] = { confirmed: true, reminded_48hr: true, reminded_24hr: true, reminded_12hr: true, reminded_5min: true };
        });
        return map;
      }
      return parsed;
    }
  } catch (err) {
    console.warn("⚠️ Could not read data/processed-events.json fallback:", err);
  }
  return {};
}

function saveLocalProcessedEvents(data: Record<string, any>) {
  try {
    const dir = path.dirname(localFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn("⚠️ Could not save data/processed-events.json fallback:", err);
  }
}

// Ensure this runs securely using a secret key
const CRON_SECRET = process.env.CRON_SECRET || 'dev-secret';

// Helper to fetch JSON from Calendly
async function fetchCalendly(url: string, token: string) {
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error(`Calendly API error: ${await res.text()}`);
  }
  return res.json();
}

export async function GET(req: Request) {
  // Security check for cron job
  const authHeader = req.headers.get('authorization');
  const url = new URL(req.url);
  const secretQuery = url.searchParams.get('secret');

  if (authHeader !== `Bearer ${CRON_SECRET}` && secretQuery !== CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = process.env.CALENDLY_PAT;
  if (!token) {
    return NextResponse.json({ error: 'CALENDLY_PAT not configured' }, { status: 500 });
  }

  // State tracking: record which emails each invitee has received
  let processedEvents: Record<string, { confirmed: boolean, reminded_48hr: boolean, reminded_24hr: boolean, reminded_12hr: boolean, reminded_5min: boolean }> = {};
  let redisAvailable = false;

  if (redis) {
    try {
      const raw = await redis.get('processed_events');
      if (raw) {
        if (Array.isArray(raw)) {
          raw.forEach(uri => {
            processedEvents[uri] = { confirmed: true, reminded_48hr: true, reminded_24hr: true, reminded_12hr: true, reminded_5min: true };
          });
        } else {
          processedEvents = raw as Record<string, { confirmed: boolean, reminded_48hr: boolean, reminded_24hr: boolean, reminded_12hr: boolean, reminded_5min: boolean }>;
        }
      }
      redisAvailable = true;
    } catch(e) {
      console.warn("⚠️ Redis fetch failed, using local fallback:", (e as any)?.message);
    }
  }

  // Merge with local fallback
  const localEvents = getLocalProcessedEvents();
  processedEvents = { ...localEvents, ...processedEvents };

  try {
    // 1. Get User URI
    const userRes = await fetchCalendly('https://api.calendly.com/users/me', token);
    const userUri = userRes.resource.uri;

    // 2. Get Active Scheduled Events
    const yesterdayIso = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const eventsRes = await fetchCalendly(`https://api.calendly.com/scheduled_events?user=${userUri}&status=active&min_start_time=${yesterdayIso}&sort=start_time:desc&count=100`, token);
    const events = eventsRes.collection || [];

    let sentCount = 0;

    // 3. Process each event
    for (const event of events) {
      const eventUri = event.uri;

      const d = new Date(event.start_time);
      const now = Date.now();
      if (d.getTime() < now) {
         continue;
      }
      
      const inviteesRes = await fetchCalendly(`${eventUri}/invitees`, token);
      const invitees = inviteesRes.collection || [];

      for (const invitee of invitees) {
        const inviteeUri = invitee.uri;
        let state = processedEvents[inviteeUri] || { confirmed: false, reminded_48hr: false, reminded_24hr: false, reminded_12hr: false, reminded_5min: false };

        const createdDate = new Date(event.created_at);
        const hoursSinceBooking = (now - createdDate.getTime()) / (1000 * 60 * 60);
        if (hoursSinceBooking > 3 && !state.confirmed) {
            state.confirmed = true;
        }

        const inviteeEmail = invitee.email;
        const inviteeName = invitee.name;
        
        let rawCompanyName = "";
        let rawCompanyWebsite = "";
        let refId = invitee.tracking?.utm_campaign || Math.random().toString(36).substring(2, 8).toUpperCase();
        
        if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
          for (const qa of invitee.questions_and_answers) {
            const q = qa.question.toLowerCase();
            if (q.includes("company") && !q.includes("website")) rawCompanyName = qa.answer;
            if (q.includes("website") || q.includes("url")) rawCompanyWebsite = qa.answer;
          }
        }

        const { companyName, companyWebsite, companyWebsiteDisplay } = enrichCompanyData(
          inviteeName,
          inviteeEmail,
          rawCompanyName,
          rawCompanyWebsite
        );

        const timeZone = invitee.timezone || "UTC";
        const meetingDateStr = new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(d);
        const meetingTimeStr = new Intl.DateTimeFormat('en-US', { timeZone, hour: '2-digit', minute: '2-digit' }).format(d);

        const locationData = event.location;
        const joinUrl = locationData?.join_url || invitee.join_url || "https://calendly.com/irtiqa";
        const rescheduleUrl = invitee.reschedule_url || "#";
        const cancelUrl = invitee.cancel_url || "#";

        const props = {
          emailDate: new Date().toLocaleDateString(),
          firstName: inviteeName.split(' ')[0] || inviteeName,
          meetingDate: meetingDateStr, 
          meetingTime: meetingTimeStr, 
          timezone: invitee.timezone || "UTC",
          meetingLink: joinUrl,
          companyName: companyName,
          refId: refId,
          fullName: inviteeName,
          companyWebsite: companyWebsite,
          companyWebsiteDisplay: companyWebsiteDisplay, 
          companySummary: "Revenue audit call booked.",
          surveyLink: "https://irtiqaaiagency.com/audit-prep", 
          rescheduleLink: rescheduleUrl,
          unsubscribeLink: cancelUrl,
          clientEmail: inviteeEmail
        };

        const timeUntilMeetingMs = d.getTime() - now;
        const hoursUntilMeeting = timeUntilMeetingMs / (1000 * 60 * 60);

        // 1. Initial Confirmation Email
        if (!state.confirmed) {
          console.log(`Sending initial confirmation to: ${inviteeEmail}`);
          const html = getConfirmationEmailHtmlLight(props);
          await sendEmail({ to: inviteeEmail, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });
          state.confirmed = true;
          sentCount++;
        }

        // 2. 48-Hour Authority Drip
        if (state.confirmed && !state.reminded_48hr && hoursUntilMeeting <= 48.1 && hoursUntilMeeting > 47) {
          console.log(`📧 Sending 48-hour authority drip to: ${inviteeEmail}`);
          let challenge = "";
          if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
            for (const qa of invitee.questions_and_answers) {
              const q = qa.question.toLowerCase();
              if (q.includes("revenue") || q.includes("challenge") || q.includes("bottleneck")) challenge += qa.answer + " ";
            }
          }
          const html = getAuthorityEmailHtml48hr(props, challenge);
          await sendEmail({ to: inviteeEmail, subject: "Private Breakdown: Scaling Your Operations — Irtiqa AI", html });
          state.reminded_48hr = true;
          sentCount++;
        }

        // 3. 24-Hour Shadow Audit Drip
        if (state.confirmed && !state.reminded_24hr && hoursUntilMeeting <= 24.1 && hoursUntilMeeting > 23) {
          console.log(`🔍 Running Shadow Audit for: ${inviteeEmail}`);
          let website = "";
          if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
            for (const qa of invitee.questions_and_answers) {
              if (qa.question.toLowerCase().includes("website") || qa.question.toLowerCase().includes("url")) {
                website = qa.answer;
              }
            }
          }
          const auditResults = await performShadowAudit(website);
          const html = getShadowAuditEmailHtml(props.firstName, website, auditResults);
          await sendEmail({ to: inviteeEmail, subject: "We just audited your website — Irtiqa AI", html });
          state.reminded_24hr = true;
          sentCount++;
        }

        // 4. 12-Hour Reminder Email
        if (state.confirmed && !state.reminded_12hr && hoursUntilMeeting <= 12.1 && hoursUntilMeeting > 11) {
          console.log(`Sending 12-hour reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml12hr(props);
          await sendEmail({ to: inviteeEmail, subject: "Action Required: Prep for your Audit Call — Irtiqa AI", html });
          state.reminded_12hr = true;
          sentCount++;
        }

        // 5. 5-Minute Reminder Email
        if (state.confirmed && !state.reminded_5min && hoursUntilMeeting <= (15 / 60) && hoursUntilMeeting > 0) {
          console.log(`Sending 5-minute reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml5min(props);
          await sendEmail({ to: inviteeEmail, subject: "Starting Now: Your Revenue Audit", html });
          state.reminded_5min = true;
          sentCount++;
        }

        processedEvents[inviteeUri] = state;
      }
    }

    // 4. Save to local fallback file
    saveLocalProcessedEvents(processedEvents);

    // 5. Save to Redis if available
    if (redis && redisAvailable) {
      try {
        await redis.set('processed_events', processedEvents);
      } catch (err) {
        console.warn("⚠️ Redis write skipped:", (err as any)?.message);
      }
    }

    return NextResponse.json({ success: true, newEmailsSent: sentCount, timestamp: new Date().toISOString() });

  } catch (error) {
    console.error("Sync Error:", error);
    return NextResponse.json({ error: 'Sync Error', details: (error as any)?.message }, { status: 500 });
  }
}
