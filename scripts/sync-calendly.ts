import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from '../src/lib/email.js';
import { getConfirmationEmailHtmlLight } from '../src/emails/templates.js';
import { getReminderEmailHtml12hr, getReminderEmailHtml5min } from '../src/emails/reminder-templates.js';
import { Redis } from '@upstash/redis';

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
let redis: Redis | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = Redis.fromEnv();
  } catch (e) {
    console.warn("⚠️ Could not initialize Redis client, using local file storage fallback.");
  }
}

if (!token) {
  console.error("❌ ERROR: CALENDLY_PAT not found in .env");
  process.exit(1);
}

// Local file fallback path
const dataDir = path.resolve(__dirname, '../data');
const processedEventsFilePath = path.join(dataDir, 'processed-events.json');

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function loadLocalProcessedEvents(): Record<string, { confirmed: boolean, reminded_12hr: boolean, reminded_5min: boolean }> {
  try {
    ensureDataDir();
    if (fs.existsSync(processedEventsFilePath)) {
      const raw = fs.readFileSync(processedEventsFilePath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const map: Record<string, any> = {};
        parsed.forEach(uri => {
          map[uri] = { confirmed: true, reminded_12hr: false, reminded_5min: false };
        });
        return map;
      }
      return parsed;
    }
  } catch (err) {
    console.warn("⚠️ Error reading local processed-events.json fallback:", err);
  }
  return {};
}

function saveLocalProcessedEvents(data: Record<string, any>) {
  try {
    ensureDataDir();
    fs.writeFileSync(processedEventsFilePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log("💾 Processed events persisted locally to data/processed-events.json");
  } catch (err) {
    console.error("❌ Error writing local processed-events.json:", err);
  }
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
  let redisAvailable = false;

  if (redis) {
    try {
      const raw = await redis.get('processed_events');
      if (raw) {
        if (Array.isArray(raw)) {
          raw.forEach(uri => {
            processedEvents[uri] = { confirmed: true, reminded_12hr: false, reminded_5min: false };
          });
        } else {
          processedEvents = raw as Record<string, { confirmed: boolean, reminded_12hr: boolean, reminded_5min: boolean }>;
        }
      }
      redisAvailable = true;
    } catch(e) {
      console.warn("⚠️ Warning: Upstash Redis unreachable. Falling back to local file storage.", (e as any)?.message);
    }
  }

  // Merge with local storage fallback if Redis was empty or failed
  const localEvents = loadLocalProcessedEvents();
  processedEvents = { ...localEvents, ...processedEvents };

  try {
    // 2. Get User URI
    const userRes = await fetchCalendly('https://api.calendly.com/users/me');
    const userUri = userRes.resource.uri;

    // 3. Get Active Scheduled Events
    const yesterdayIso = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const eventsRes = await fetchCalendly(`https://api.calendly.com/scheduled_events?user=${userUri}&status=active&min_start_time=${yesterdayIso}&sort=start_time:desc&count=100`);
    const events = eventsRes.collection;

    console.log(`📅 Found ${events.length} active events on Calendly.`);

    let sentCount = 0;

    // 4. Process each event
    for (const event of events) {
      const eventUri = event.uri;
      
      const d = new Date(event.start_time);
      const now = Date.now();
      if (d.getTime() < now) {
         continue;
      }

      // Fetch Invitees for this event
      const inviteesRes = await fetchCalendly(`${eventUri}/invitees`);
      const invitees = inviteesRes.collection;

      for (const invitee of invitees) {
        const inviteeUri = invitee.uri;
        let state = processedEvents[inviteeUri] || { confirmed: false, reminded_12hr: false, reminded_5min: false };

        const createdDate = new Date(event.created_at);
        const hoursSinceBooking = (now - createdDate.getTime()) / (1000 * 60 * 60);
        if (hoursSinceBooking > 3 && !state.confirmed) {
            state.confirmed = true;
        }

        const inviteeEmail = invitee.email;
        const inviteeName = invitee.name;
        
        let companyName = "Your Company";
        let companyWebsite = "Not Provided";
        let refId = invitee.tracking?.utm_campaign || Math.random().toString(36).substring(2, 8).toUpperCase();
        
        if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
          for (const qa of invitee.questions_and_answers) {
            const q = qa.question.toLowerCase();
            if (q.includes("company") && !q.includes("website")) companyName = qa.answer;
            if (q.includes("website") || q.includes("url")) companyWebsite = qa.answer;
          }
        }

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
          companyWebsiteDisplay: companyWebsite !== "#" ? companyWebsite.replace(/^https?:\/\//, '') : "Not Provided", 
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
          console.log(`📧 Sending initial confirmation to: ${inviteeEmail}`);
          const html = getConfirmationEmailHtmlLight(props);
          await sendEmail({ to: inviteeEmail, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });
          state.confirmed = true;
          sentCount++;
        }

        // 2. 12-Hour Reminder Email
        if (state.confirmed && !state.reminded_12hr && hoursUntilMeeting <= 12.1 && hoursUntilMeeting > 11) {
          console.log(`📧 Sending 12-hour reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml12hr(props);
          await sendEmail({ to: inviteeEmail, subject: "Action Required: Prep for your Audit Call — Irtiqa AI", html });
          state.reminded_12hr = true;
          sentCount++;
        }

        // 3. 5-Minute Reminder Email
        if (state.confirmed && !state.reminded_5min && hoursUntilMeeting <= (15 / 60) && hoursUntilMeeting > 0) {
          console.log(`📧 Sending 5-minute reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml5min(props);
          await sendEmail({ to: inviteeEmail, subject: "Starting Now: Your Revenue Audit", html });
          state.reminded_5min = true;
          sentCount++;
        }

        processedEvents[inviteeUri] = state;
      }
    }

    // 5. Always persist to local file
    saveLocalProcessedEvents(processedEvents);

    // 6. Try saving to Redis if available
    if (redis && redisAvailable) {
      try {
        await redis.set('processed_events', processedEvents);
      } catch (err) {
        console.warn("⚠️ Could not write to Redis, local file backup retained:", (err as any)?.message);
      }
    }

    console.log(`\n✅ Sync complete. Sent ${sentCount} new emails.`);

  } catch (error) {
    console.error("❌ Error during sync:", error);
    process.exit(1);
  }
}

syncCalendlyEvents();
