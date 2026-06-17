import nodemailer from 'nodemailer';
import dns from 'node:dns';

// Force IPv4 to prevent ENETUNREACH network errors with providers like Zoho
dns.setDefaultResultOrder('ipv4first');

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  if (!process.env.SMTP_HOST) {
    console.warn("SMTP_HOST is not set. Skipping email send.");
    return { success: false, error: "SMTP not configured" };
  }

  try {
    const mailer = getTransporter();
    const info = await mailer.sendMail({
      from: `"Irtiqa Audits" <${process.env.SMTP_FROM_EMAIL}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
