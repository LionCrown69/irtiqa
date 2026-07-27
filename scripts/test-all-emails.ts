import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from '../src/lib/email.js';
import { getConfirmationEmailHtmlLight } from '../src/emails/templates.js';
import { getReminderEmailHtml12hr, getReminderEmailHtml5min, getAuthorityEmailHtml48hr } from '../src/emails/reminder-templates.js';
import { getShadowAuditEmailHtml } from '../src/emails/shadow-audit-template.js';
import { getRejectionEmailHtml } from '../src/emails/rejection-template.js';

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

const TARGET_EMAIL = "lioncrown077@gmail.com";

async function testAllEmails() {
  console.log(`📤 Sending all 3 test emails to ${TARGET_EMAIL}...`);

  // Creating personalized test data
  const props = {
    emailDate: new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }),
    firstName: "Alok",
    meetingDate: "Wednesday, June 17",
    meetingTime: "10:00 AM",
    timezone: "EST",
    meetingLink: "https://calendly.com/events/123/join",
    companyName: "Test Company LLC",
    refId: "TEST-ABC",
    fullName: "Alok Mishra",
    companyWebsite: "https://irtiqaaiagency.com",
    companyWebsiteDisplay: "irtiqaaiagency.com",
    companySummary: "Revenue audit call booked.",
    surveyLink: "https://irtiqaaiagency.com/audit-prep",
    rescheduleLink: "https://calendly.com/reschedule/123",
    unsubscribeLink: "https://calendly.com/cancel/123",
    clientEmail: TARGET_EMAIL
  };

  try {
    // 1. Initial Confirmation Email
    console.log("1. Sending Confirmation Email...");
    const html1 = getConfirmationEmailHtmlLight(props);
    await sendEmail({ to: TARGET_EMAIL, subject: "Your Revenue Audit is Confirmed — Irtiqa AI (TEST)", html: html1 });

    // 2. 48-Hour Authority Drip
    console.log("2. Sending 48-Hour Authority Drip Email...");
    const html2 = getAuthorityEmailHtml48hr(props, "Founder is bottleneck");
    await sendEmail({ to: TARGET_EMAIL, subject: "Private Breakdown: Scaling Your Operations — Irtiqa AI (TEST)", html: html2 });

    // 3. 24-Hour Shadow Audit Drip
    console.log("3. Sending 24-Hour Shadow Audit Email...");
    const auditResults = { hasPixel: false, hasAnalytics: false, hasClearCta: false, titleOptimized: false, loadSpeedStatus: "Analyzed" };
    const html3 = getShadowAuditEmailHtml("Alok", "test-agency.com", auditResults);
    await sendEmail({ to: TARGET_EMAIL, subject: "We just audited your website — Irtiqa AI (TEST)", html: html3 });

    // 4. 12-Hour Reminder
    console.log("4. Sending 12-Hour Reminder Email...");
    const html4 = getReminderEmailHtml12hr(props);
    await sendEmail({ to: TARGET_EMAIL, subject: "Action Required: Prep for your Audit Call — Irtiqa AI (TEST)", html: html4 });

    // 5. 5-Minute Reminder
    console.log("5. Sending 5-Minute Reminder Email...");
    const html5 = getReminderEmailHtml5min(props);
    await sendEmail({ to: TARGET_EMAIL, subject: "Starting Now: Your Revenue Audit (TEST)", html: html5 });

    // 6. Rejection Email (For leads under $5k/mo)
    console.log("6. Sending Rejection Email...");
    const html6 = getRejectionEmailHtml("Alok");
    await sendEmail({ to: TARGET_EMAIL, subject: "Regarding your application for Irtiqa AI (TEST)", html: html6 });

    console.log("✅ All 6 test emails sent successfully!");

  } catch (error) {
    console.error("❌ Error sending test emails:", error);
  }
}

testAllEmails();
