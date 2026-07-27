import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env
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

async function fetchCalendly(url: string) {
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error(`Calendly API error: ${await res.text()}`);
  return res.json();
}

async function listEvents() {
  console.log(`\n📅 Today's Date: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
  console.log("---------------------------------------------------");

  try {
    const userRes = await fetchCalendly('https://api.calendly.com/users/me');
    const userUri = userRes.resource.uri;

    const nowIso = new Date().toISOString();
    const eventsRes = await fetchCalendly(`https://api.calendly.com/scheduled_events?user=${userUri}&status=active&min_start_time=${nowIso}&sort=start_time:asc&count=100`);
    const events = eventsRes.collection;

    console.log(`📊 You have ${events.length} active upcoming call(s):\n`);

    for (const event of events) {
      const inviteesRes = await fetchCalendly(`${event.uri}/invitees`);
      const invitees = inviteesRes.collection;

      for (const invitee of invitees) {
        const d = new Date(event.start_time);
        
        // Format time in Invitee's timezone
        const timeZone = invitee.timezone || "UTC";
        const meetingDateStr = new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'short', month: 'short', day: 'numeric' }).format(d);
        const meetingTimeStr = new Intl.DateTimeFormat('en-US', { timeZone, hour: '2-digit', minute: '2-digit' }).format(d);

        const now = Date.now();
        const timeUntilMeetingMs = d.getTime() - now;
        const hoursUntilMeeting = timeUntilMeetingMs / (1000 * 60 * 60);

        console.log(`👤 Name: ${invitee.name} (${invitee.email})`);
        console.log(`⏰ Time: ${meetingDateStr} @ ${meetingTimeStr} (${timeZone})`);
        
        if (hoursUntilMeeting < 0) {
           console.log(`⏳ Status: ALREADY HAPPENED`);
        } else {
           console.log(`⏳ Status: in ${hoursUntilMeeting.toFixed(1)} hours`);
        }
        
        const createdDate = new Date(event.created_at);
        const hoursSinceBooking = (now - createdDate.getTime()) / (1000 * 60 * 60);
        console.log(`📅 Booked: ${hoursSinceBooking.toFixed(1)} hours ago`);
        console.log("---------------------------------------------------");
      }
    }
  } catch (err) {
    console.error(err);
  }
}

listEvents();
