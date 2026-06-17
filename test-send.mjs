import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dns from 'node:dns';

// Ensure we compile TS if needed or use a mock (since test-send is .mjs and imports a .ts file without a compiler)
// Actually, since we can't easily import .ts into .mjs without tsx, I'll update test-preview.html manually first.

// Force IPv4 to prevent ENETUNREACH errors with Zoho
dns.setDefaultResultOrder('ipv4first');

// The user's requested test email
const TARGET_EMAIL = "14050spsalokmishra@gmail.com";

async function runTest() {
  console.log("Checking SMTP configuration...");

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.error("❌ ERROR: SMTP credentials missing in your .env file!");
    console.log("Please create a .env file with the following variables:");
    console.log("SMTP_HOST=your-smtp-host.com");
    console.log("SMTP_PORT=587");
    console.log("SMTP_SECURE=false");
    console.log("SMTP_USER=your_email");
    console.log("SMTP_PASS=your_password");
    console.log("SMTP_FROM_EMAIL=your_email");
    process.exit(1);
  }

  // Read the preview HTML we generated
  const htmlContent = fs.readFileSync(path.resolve('./test-preview.html'), 'utf-8');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log(`Sending test email to ${TARGET_EMAIL}...`);

  try {
    const info = await transporter.sendMail({
      from: `"Irtiqa Audits" <${process.env.SMTP_FROM_EMAIL}>`,
      to: TARGET_EMAIL,
      subject: "Your Revenue Audit is Confirmed — Irtiqa AI (TEST)",
      html: htmlContent,
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    console.error("Check your SMTP credentials and try again.");
  }
}

runTest();
