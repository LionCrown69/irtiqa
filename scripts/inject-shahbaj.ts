import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Redis } from '@upstash/redis';
import { sendEmail } from '../src/lib/email.js';
import { getConfirmationEmailHtmlLight } from '../src/emails/templates.js';

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

const redis = Redis.fromEnv();
const STATIC_MEETING_LINK = "https://meet.google.com/zoo-rgko-adk";

async function injectShahbaj() {
  const name = "Shahbaj";
  const email = "same79973@gmail.com";
  const company = "SocialMitr";
  const challenge = "Founder is the bottleneck for sales/ops";
  const bookingId = "AUDIT-1781699890569";
  const timezone = "Asia/Calcutta"; // IST

  // Date and Time from Web3Forms
  const dateStr = "2026-06-18";
  const timeStr = "17:30";

  // Build the UTC start_time
  const d = new Date(dateStr);
  const [hours, minutes] = timeStr.split(':');
  d.setHours(parseInt(hours, 10));
  d.setMinutes(parseInt(minutes, 10));
  d.setSeconds(0);
  
  // Actually, since the user booked in IST, the date 'd' parsing depends on local system timezone if we just do setHours.
  // We want d to represent exactly 17:30 IST.
  // IST is UTC+5:30.
  // 17:30 IST = 12:00 UTC.
  const utcDate = new Date(Date.UTC(2026, 5, 18, 12, 0, 0)); // Month is 0-indexed (5 = June)

  const bookingData = {
    id: bookingId,
    name,
    email,
    company,
    challenge,
    start_time: utcDate.toISOString(),
    timezone,
    join_url: STATIC_MEETING_LINK,
    status: 'active',
    created_at: new Date().toISOString(),
    confirmed: true,
    reminded_12hr: false,
    reminded_5min: false
  };

  console.log("Saving Shahbaj's booking to Upstash Redis...");
  await redis.sadd('native_bookings_set', bookingId);
  await redis.set(`native_booking:${bookingId}`, bookingData);
  console.log("✅ Saved.");

  console.log("Sending initial confirmation email...");
  const meetingDateStr = new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(utcDate);
  const formattedTime = new Intl.DateTimeFormat('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour12: true }).format(utcDate);

  const emailProps = {
    emailDate: new Date().toLocaleDateString(),
    firstName: "Shahbaj",
    meetingDate: meetingDateStr,
    meetingTime: formattedTime,
    timezone: "IST",
    meetingLink: STATIC_MEETING_LINK,
    companyName: company,
    refId: bookingId,
    fullName: name,
    companyWebsite: "Not Provided",
    companyWebsiteDisplay: "Not Provided",
    companySummary: challenge,
    surveyLink: "https://irtiqaaiagency.com/audit-prep",
    rescheduleLink: "https://irtiqaaiagency.com",
    unsubscribeLink: "https://irtiqaaiagency.com",
    clientEmail: email
  };

  const html = getConfirmationEmailHtmlLight(emailProps);
  await sendEmail({ to: email, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });
  console.log("✅ Confirmation sent to same79973@gmail.com!");
  
  process.exit(0);
}

injectShahbaj();
