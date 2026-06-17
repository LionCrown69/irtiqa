import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from '../src/lib/email.js';
import { getConfirmationEmailHtmlLight } from '../src/emails/templates.js';
import { getReminderEmailHtml12hr, getReminderEmailHtml5min } from '../src/emails/reminder-templates.js';
import { kv } from '@vercel/kv';

// Load .env since this runs outside Next.js
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../.env');

if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf-8').split('\n');
  envConfig.forEach(line => {
    if (line.includes('=')) {
      const [key, ...val] = line.split('=');
      if (key && val) {
        process.env[key.trim()] = val.join('=').trim().replace(/^"|"$/g, '');
      }
    }
  });
}

const token = process.env.CALENDLY_PAT;

if (!token) {
  console.error("❌ ERROR: CALENDLY_PAT not found in .env");
  process.exit(1);
}

// Helper to fetch JSON from Calendly
async function fetchCalendly(url: string) {
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

async function syncCalendlyEvents() {
  console.log("🔄 Starting Calendly Sync...");

  // State tracking: record which emails each invitee has received
  let processedEvents: Record<string, { confirmed: boolean, reminded_12hr: boolean, reminded_5min: boolean }> = {};
  
  try {
    const raw = await kv.get('processed_events');
    if (raw) {
      if (Array.isArray(raw)) {
        raw.forEach(uri => {
          processedEvents[uri] = { confirmed: true, reminded_12hr: false, reminded_5min: false };
        });
      } else {
        processedEvents = raw as Record<string, { confirmed: boolean, reminded_12hr: boolean, reminded_5min: boolean }>;
      }
    }
  } catch(e) {
    console.error("Error fetching processed events from KV", e);
  }

  try {
    // 2. Get User URI
    const userRes = await fetchCalendly('https://api.calendly.com/users/me');
    const userUri = userRes.resource.uri;

    // 3. Get Active Scheduled Events
    // Note: status=active ensures we don't email canceled events
    // sort=start_time:desc gets the most recent ones first
    const eventsRes = await fetchCalendly(`https://api.calendly.com/scheduled_events?user=${userUri}&status=active&sort=start_time:desc`);
    const events = eventsRes.collection;

    console.log(`Found ${events.length} active events.`);

    let sentCount = 0;

    // 4. Process each event
    for (const event of events) {
      const eventUri = event.uri;
      
      // If we already sent an email for this event, skip it.
      // Note: An event can have multiple invitees (if it's a group event), 
      // but for 1-on-1s, processing the event once is sufficient.
      // To be strictly safe, we track invitee URIs instead of event URIs.
      
      // Strict safety lock: Only process events booked in the last 24 hours
      const createdDate = new Date(event.created_at);
      const cutoffDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
      if (createdDate < cutoffDate) {
         continue;
      }

      // Fetch Invitees for this event
      const inviteesRes = await fetchCalendly(`${eventUri}/invitees`);
      const invitees = inviteesRes.collection;

      for (const invitee of invitees) {
        const inviteeUri = invitee.uri;
        let state = processedEvents[inviteeUri] || { confirmed: false, reminded_12hr: false, reminded_5min: false };

        const inviteeEmail = invitee.email;
        const inviteeName = invitee.name;
        
        let companyName = "Your Company";
        let companyWebsite = "#";
        let refId = invitee.tracking?.utm_campaign || Math.random().toString(36).substring(2, 8).toUpperCase();
        
        if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
          for (const qa of invitee.questions_and_answers) {
            const q = qa.question.toLowerCase();
            if (q.includes("company") && !q.includes("website")) companyName = qa.answer;
            if (q.includes("website") || q.includes("url")) companyWebsite = qa.answer;
          }
        }

        const d = new Date(event.start_time);
        const meetingDateStr = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const meetingTimeStr = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

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
          companyWebsiteDisplay: companyWebsite !== "#" ? companyWebsite.replace(/^https?:\/\//, '') : "Not Provided", 
          companySummary: "Revenue audit call booked.",
          surveyLink: "https://irtiqaaiagency.com/audit-prep", 
          rescheduleLink: rescheduleUrl,
          unsubscribeLink: cancelUrl,
          clientEmail: inviteeEmail
        };

        const now = Date.now();
        const timeUntilMeetingMs = d.getTime() - now;
        const hoursUntilMeeting = timeUntilMeetingMs / (1000 * 60 * 60);

        // 1. Initial Confirmation Email
        if (!state.confirmed) {
          console.log(`📧 Sending initial confirmation to: ${inviteeEmail}`);
          const html = getConfirmationEmailHtmlLight(props);
          await sendEmail({ to: inviteeEmail, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });
          state.confirmed = true;
          sentCount++;
        }

        // 2. 12-Hour Reminder Email
        if (state.confirmed && !state.reminded_12hr && hoursUntilMeeting <= 12 && hoursUntilMeeting > 0) {
          console.log(`📧 Sending 12-hour reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml12hr(props);
          await sendEmail({ to: inviteeEmail, subject: "Action Required: Prep for your Audit Call — Irtiqa AI", html });
          state.reminded_12hr = true;
          sentCount++;
        }

        // 3. 5-Minute Reminder Email
        if (state.confirmed && !state.reminded_5min && hoursUntilMeeting <= (5 / 60) && hoursUntilMeeting > 0) {
          console.log(`📧 Sending 5-minute reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml5min(props);
          await sendEmail({ to: inviteeEmail, subject: "Starting Now: Your Revenue Audit", html });
          state.reminded_5min = true;
          sentCount++;
        }

        processedEvents[inviteeUri] = state;
      }
    }

    // 5. Save updated processed list back to KV
    await kv.set('processed_events', processedEvents);

    console.log(`\n✅ Sync complete. Sent ${sentCount} new emails.`);

  } catch (error) {
    console.error("❌ Error during sync:", error);
    process.exit(1);
  }
}

syncCalendlyEvents();
