import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendEmail } from '@/lib/email';
import { getConfirmationEmailHtmlLight } from '@/emails/templates';
import { getReminderEmailHtml12hr, getReminderEmailHtml5min } from '@/emails/reminder-templates';
import { kv } from '@vercel/kv';

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
    // 1. Get User URI
    const userRes = await fetchCalendly('https://api.calendly.com/users/me', token);
    const userUri = userRes.resource.uri;

    // 2. Get Active Scheduled Events
    const eventsRes = await fetchCalendly(`https://api.calendly.com/scheduled_events?user=${userUri}&status=active&sort=start_time:desc`, token);
    const events = eventsRes.collection;

    let sentCount = 0;

    // 3. Process each event
    for (const event of events) {
      const eventUri = event.uri;

      // Strict safety lock: Only process events booked in the last 24 hours
      const createdDate = new Date(event.created_at);
      const cutoffDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
      if (createdDate < cutoffDate) {
         continue;
      }
      
      const inviteesRes = await fetchCalendly(`${eventUri}/invitees`, token);
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
          console.log(`Sending initial confirmation to: ${inviteeEmail}`);
          const html = getConfirmationEmailHtmlLight(props);
          await sendEmail({ to: inviteeEmail, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });
          state.confirmed = true;
          sentCount++;
        }

        // 2. 12-Hour Reminder Email
        if (state.confirmed && !state.reminded_12hr && hoursUntilMeeting <= 12 && hoursUntilMeeting > 0) {
          console.log(`Sending 12-hour reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml12hr(props);
          await sendEmail({ to: inviteeEmail, subject: "Action Required: Prep for your Audit Call — Irtiqa AI", html });
          state.reminded_12hr = true;
          sentCount++;
        }

        // 3. 5-Minute Reminder Email
        if (state.confirmed && !state.reminded_5min && hoursUntilMeeting <= (5 / 60) && hoursUntilMeeting > 0) {
          console.log(`Sending 5-minute reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml5min(props);
          await sendEmail({ to: inviteeEmail, subject: "Starting Now: Your Revenue Audit", html });
          state.reminded_5min = true;
          sentCount++;
        }

        processedEvents[inviteeUri] = state;
      }
    }

    // 4. Save updated processed list back to KV
    await kv.set('processed_events', processedEvents);

    return NextResponse.json({ success: true, newEmailsSent: sentCount });

  } catch (error) {
    console.error("Sync Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
