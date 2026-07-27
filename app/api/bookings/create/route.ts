import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { sendEmail } from '@/lib/email';
import { getConfirmationEmailHtmlLight } from '@/emails/templates';
import { getRejectionEmailHtml } from '@/emails/rejection-template';
import { enrichCompanyData } from '@/lib/company-enrichment';

const redis = Redis.fromEnv();

// The user's static meeting link
const STATIC_MEETING_LINK = "https://meet.google.com/zoo-rgko-adk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, date, time, timezone, challenge, reference, revenue } = body;

    // 1. APPLICATION EVALUATION (Strict Qualification)
    // If the user selected "Under $5k/mo", we automatically reject them.
    if (revenue && revenue.includes("Under $5k/mo")) {
      console.log(`❌ Rejecting unqualified lead: ${email} (${revenue})`);
      
      // Store in a rejected set for analytics, but do NOT put in main active set
      const rejectedId = `rejected_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      await redis.set(`rejected_booking:${rejectedId}`, {
        id: rejectedId,
        name,
        email,
        company,
        revenue,
        challenge,
        rejected_at: new Date().toISOString(),
      });

      // Send the Rejection Email instead of Confirmation
      const html = getRejectionEmailHtml(name.split(' ')[0]);
      await sendEmail({
        to: email,
        subject: "Regarding your application for Irtiqa AI",
        html
      });

      return NextResponse.json({ success: true, status: "rejected" });
    }

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Create Native Booking Record
    const bookingId = reference || `AUDIT-${Date.now()}`;
    
    // Parse the date and time.
    // The website UI sends date as "YYYY-MM-DD" and time as "HH:mm" (24hr).
    // The user stated the times on the website are natively considered IST unless otherwise converted.
    // However, the timezone provided by the browser is what we'll use to format their email.
    
    const meetingDateStr = new Intl.DateTimeFormat('en-US', { timeZone: timezone || "Asia/Calcutta", weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
    
    // We parse the time directly
    const [hours, minutes] = time.split(':');
    const d = new Date(date);
    d.setHours(parseInt(hours, 10));
    d.setMinutes(parseInt(minutes, 10));
    d.setSeconds(0);
    
    // Convert to ISO string so the cron job can compare times easily
    const startTimeIso = d.toISOString();

    const { companyName, companyWebsite, companyWebsiteDisplay } = enrichCompanyData(
      name,
      email,
      company
    );

    const bookingData = {
      id: bookingId,
      name,
      email,
      company: companyName,
      companyWebsite,
      challenge,
      start_time: startTimeIso,
      timezone: timezone || "Asia/Calcutta",
      join_url: STATIC_MEETING_LINK,
      status: 'active',
      created_at: new Date().toISOString(),
      confirmed: true,
      reminded_12hr: false,
      reminded_5min: false
    };

    // 2. Save to Upstash Redis
    // We maintain a list of all native booking IDs, and store the actual data in a hash.
    await redis.sadd('native_bookings_set', bookingId);
    await redis.set(`native_booking:${bookingId}`, bookingData);

    // 3. Send Initial Confirmation to the Client Instantly
    const firstName = name.split(' ')[0] || name;
    
    // Format meeting time
    let formattedTime = "12:00 PM";
    try {
        const timeD = new Date();
        timeD.setHours(parseInt(hours, 10));
        timeD.setMinutes(parseInt(minutes, 10));
        formattedTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(timeD);
    } catch(e) {}

    const emailProps = {
      emailDate: new Date().toLocaleDateString(),
      firstName: firstName,
      meetingDate: meetingDateStr,
      meetingTime: formattedTime,
      timezone: timezone || "IST",
      meetingLink: STATIC_MEETING_LINK,
      companyName: companyName,
      refId: bookingId,
      fullName: name,
      companyWebsite: companyWebsite,
      companyWebsiteDisplay: companyWebsiteDisplay,
      companySummary: "Revenue audit call booked via Native Website Form.",
      surveyLink: "https://irtiqaaiagency.com/audit-prep",
      rescheduleLink: "https://irtiqaaiagency.com", 
      unsubscribeLink: "https://irtiqaaiagency.com",
      clientEmail: email
    };

    console.log(`[Native API] Sending confirmation email to: ${email}`);
    const html = getConfirmationEmailHtmlLight(emailProps);
    await sendEmail({ to: email, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });

    // 4. Send Notification to Agency Owner (replaces Web3Forms)
    const ownerEmailHtml = `
      <h2>New Native Website Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Challenge:</strong> ${challenge}</p>
      <p><strong>Date/Time:</strong> ${date} at ${time} (Timezone: ${timezone})</p>
      <p><strong>Meeting Link:</strong> ${STATIC_MEETING_LINK}</p>
    `;
    await sendEmail({ to: "lioncrown077@gmail.com", subject: `New Growth Audit Booked: ${company}`, html: ownerEmailHtml });

    return NextResponse.json({ success: true, bookingId });

  } catch (error) {
    console.error('Error creating native booking:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
