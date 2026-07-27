import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from '../src/lib/email.js';

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

const targetEmails = [
  "info@designsbykenny.com",
  "lioncrown077@gmail.com",
  "amaantses@gmail.com",
  "nandankuumar@cnsdfinance.com"
];

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Inter', Arial, sans-serif; background-color: #FAFAF8; color: #1A1A18; margin: 0; padding: 40px 20px; }
  .container { max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #ECEAE2; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
  h2 { font-size: 18px; margin-top: 0; }
  p { font-size: 14px; line-height: 1.6; color: #6B6B67; }
</style>
</head>
<body>
  <div class="container">
    <h2>System Upgrade Notice</h2>
    <p>Hi there,</p>
    <p>You may have just received an automated "12 Hours to Go" reminder email from us. Please completely disregard it.</p>
    <p>We are currently upgrading our backend infrastructure to a new system, and a test script accidentally sent that reminder out to a small handful of our upcoming bookings.</p>
    <p><strong>Your Revenue Audit is still locked in for the exact date and time you originally selected.</strong> No action is needed on your part.</p>
    <p>Looking forward to speaking with you on the call!</p>
    <p style="margin-bottom: 0;">— The Irtiqa Team</p>
  </div>
</body>
</html>
`;

async function sendCorrections() {
  console.log("📤 Sending correction emails to affected users...");
  for (const email of targetEmails) {
    try {
      await sendEmail({
        to: email,
        subject: "Disregard Previous Email — Irtiqa AI System Test",
        html: htmlContent
      });
      console.log(`✅ Correction sent to ${email}`);
    } catch (e) {
      console.error(`❌ Failed to send to ${email}:`, e);
    }
  }
  console.log("Done.");
}

sendCorrections();
