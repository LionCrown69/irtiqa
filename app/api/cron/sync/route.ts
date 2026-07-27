import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendEmail } from '@/lib/email';
import { getConfirmationEmailHtmlLight } from '@/emails/templates';
import { getReminderEmailHtml12hr, getReminderEmailHtml5min, getAuthorityEmailHtml48hr } from '@/emails/reminder-templates';
import { performShadowAudit } from '@/lib/shadow-audit';
import { getShadowAuditEmailHtml } from '@/emails/shadow-audit-template';
import { Redis } from '@upstash/redis';
import { enrichCompanyData } from '@/lib/company-enrichment';

const redis = Redis.fromEnv();

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
  let processedEvents: Record<string, { confirmed: boolean, reminded_48hr: boolean, reminded_24hr: boolean, reminded_12hr: boolean, reminded_5min: boolean }> = {};
  
  try {
    const raw = await redis.get('processed_events');
    if (raw) {
      if (Array.isArray(raw)) {
        raw.forEach(uri => {
          processedEvents[uri] = { confirmed: true, reminded_48hr: true, reminded_24hr: true, reminded_12hr: true, reminded_5min: true }; // Legacy data assumes completely processed to avoid accidental spam
        });
      } else {
        processedEvents = raw as Record<string, { confirmed: boolean, reminded_48hr: boolean, reminded_24hr: boolean, reminded_12hr: boolean, reminded_5min: boolean }>;
      }
    }
  } catch(e) {
    console.error("Error fetching processed events from Redis", e);
  }

  try {
    // 1. Get User URI
    const userRes = await fetchCalendly('https://api.calendly.com/users/me', token);
    const userUri = userRes.resource.uri;

    // 2. Get Active Scheduled Events
    const yesterdayIso = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const eventsRes = await fetchCalendly(`https://api.calendly.com/scheduled_events?user=${userUri}&status=active&min_start_time=${yesterdayIso}&sort=start_time:desc&count=100`, token);
    const events = eventsRes.collection;

    let sentCount = 0;

    // 3. Process each event
    for (const event of events) {
      const eventUri = event.uri;

      // We only skip events that have already happened
      const d = new Date(event.start_time);
      const now = Date.now();
      if (d.getTime() < now) {
         continue;
      }
      
      const inviteesRes = await fetchCalendly(`${eventUri}/invitees`, token);
      const invitees = inviteesRes.collection;

      for (const invitee of invitees) {
        const inviteeUri = invitee.uri;
        let state = processedEvents[inviteeUri] || { confirmed: false, reminded_48hr: false, reminded_24hr: false, reminded_12hr: false, reminded_5min: false };

        // ANTI-SPAM SAFEGUARD: If this person booked more than 3 hours ago, we assume they 
        // already received their confirmation from the old system. We silently mark them as 
        // confirmed so we don't spam them with a duplicate, but we STILL process them for reminders!
        const createdDate = new Date(event.created_at);
        const hoursSinceBooking = (now - createdDate.getTime()) / (1000 * 60 * 60);
        if (hoursSinceBooking > 3 && !state.confirmed) {
            state.confirmed = true;
        }

        const inviteeEmail = invitee.email;
        const inviteeName = invitee.name;
        
        let rawCompanyName = "";
        let rawCompanyWebsite = "";
        let refId = invitee.tracking?.utm_campaign || Math.random().toString(36).substring(2, 8).toUpperCase();
        
        if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
          for (const qa of invitee.questions_and_answers) {
            const q = qa.question.toLowerCase();
            if (q.includes("company") && !q.includes("website")) rawCompanyName = qa.answer;
            if (q.includes("website") || q.includes("url")) rawCompanyWebsite = qa.answer;
          }
        }

        const { companyName, companyWebsite, companyWebsiteDisplay } = enrichCompanyData(
          inviteeName,
          inviteeEmail,
          rawCompanyName,
          rawCompanyWebsite
        );

        const d = new Date(event.start_time);
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
          companyWebsiteDisplay: companyWebsiteDisplay, 
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
          console.log(`Sending initial confirmation to: ${inviteeEmail}`);
          const html = getConfirmationEmailHtmlLight(props);
          await sendEmail({ to: inviteeEmail, subject: "Your Revenue Audit is Confirmed — Irtiqa AI", html });
          state.confirmed = true;
          sentCount++;
        }

        // 2. 48-Hour Authority Drip (Strictly only send if between 47 and 48.1 hours away)
        if (state.confirmed && !state.reminded_48hr && hoursUntilMeeting <= 48.1 && hoursUntilMeeting > 47) {
          console.log(`📧 Sending 48-hour authority drip to: ${inviteeEmail}`);
          let challenge = "";
          if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
            for (const qa of invitee.questions_and_answers) {
              const q = qa.question.toLowerCase();
              if (q.includes("revenue") || q.includes("challenge") || q.includes("bottleneck")) challenge += qa.answer + " ";
            }
          }
          const html = getAuthorityEmailHtml48hr(props, challenge);
          await sendEmail({ to: inviteeEmail, subject: "Private Breakdown: Scaling Your Operations — Irtiqa AI", html });
          state.reminded_48hr = true;
          sentCount++;
        }

        // 3. 24-Hour Shadow Audit Drip (Autonomous Scraper)
        if (state.confirmed && !state.reminded_24hr && hoursUntilMeeting <= 24.1 && hoursUntilMeeting > 23) {
          console.log(`🔍 Running Shadow Audit for: ${inviteeEmail}`);
          
          let website = "";
          if (invitee.questions_and_answers && Array.isArray(invitee.questions_and_answers)) {
            for (const qa of invitee.questions_and_answers) {
              if (qa.question.toLowerCase().includes("website") || qa.question.toLowerCase().includes("url")) {
                website = qa.answer;
              }
            }
          }
          
          const auditResults = await performShadowAudit(website);
          const html = getShadowAuditEmailHtml(props.firstName, website, auditResults);
          
          await sendEmail({ to: inviteeEmail, subject: "We just audited your website — Irtiqa AI", html });
          state.reminded_24hr = true;
          sentCount++;
        }

        // 4. 12-Hour Reminder Email (Strictly only send if between 11 and 12.1 hours away)
        if (state.confirmed && !state.reminded_12hr && hoursUntilMeeting <= 12.1 && hoursUntilMeeting > 11) {
          console.log(`Sending 12-hour reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml12hr(props);
          await sendEmail({ to: inviteeEmail, subject: "Action Required: Prep for your Audit Call — Irtiqa AI", html });
          state.reminded_12hr = true;
          sentCount++;
        }

        // 3. 5-Minute Reminder Email (Strictly only send if between 0 and 15 minutes away)
        if (state.confirmed && !state.reminded_5min && hoursUntilMeeting <= (15 / 60) && hoursUntilMeeting > 0) {
          console.log(`Sending 5-minute reminder to: ${inviteeEmail}`);
          const html = getReminderEmailHtml5min(props);
          await sendEmail({ to: inviteeEmail, subject: "Starting Now: Your Revenue Audit", html });
          state.reminded_5min = true;
          sentCount++;
        }

        processedEvents[inviteeUri] = state;
      }
    }

    // 4. Process Native Website Bookings
    const nativeBookingIds = await redis.smembers('native_bookings_set');
    if (nativeBookingIds && nativeBookingIds.length > 0) {
      for (const id of nativeBookingIds) {
        const booking: any = await redis.get(`native_booking:${id}`);
        if (!booking) continue;

        const d = new Date(booking.start_time);
        const now = Date.now();
        
        // Skip past events
        if (d.getTime() < now) continue;

        const timeUntilMeetingMs = d.getTime() - now;
        const hoursUntilMeeting = timeUntilMeetingMs / (1000 * 60 * 60);

        const emailProps = {
          emailDate: new Date().toLocaleDateString(),
          firstName: booking.name.split(' ')[0] || booking.name,
          meetingDate: new Intl.DateTimeFormat('en-US', { timeZone: booking.timezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(d),
          meetingTime: new Intl.DateTimeFormat('en-US', { timeZone: booking.timezone, hour: '2-digit', minute: '2-digit' }).format(d),
          timezone: booking.timezone,
          meetingLink: booking.join_url,
          companyName: booking.company || "Your Company",
          refId: booking.id,
          fullName: booking.name,
          companyWebsite: "Not Provided",
          companyWebsiteDisplay: "Not Provided",
          companySummary: "Revenue audit call booked via Native Website Form.",
          surveyLink: "https://irtiqaaiagency.com/audit-prep",
          rescheduleLink: "https://irtiqaaiagency.com",
          unsubscribeLink: "https://irtiqaaiagency.com",
          clientEmail: booking.email
        };

        let updated = false;

        // Note: Initial confirmation is handled directly in the API route instantly upon booking.
        // We only handle reminders here.

        // 48-Hour Authority Drip
        if (booking.confirmed && !booking.reminded_48hr && hoursUntilMeeting <= 48.1 && hoursUntilMeeting > 47) {
          console.log(`[Native] Sending 48-hour authority drip to: ${booking.email}`);
          const html = getAuthorityEmailHtml48hr(emailProps, booking.challenge);
          await sendEmail({ to: booking.email, subject: "Private Breakdown: Scaling Your Operations — Irtiqa AI", html });
          booking.reminded_48hr = true;
          updated = true;
          sentCount++;
        }

        // 24-Hour Shadow Audit Drip
        if (booking.confirmed && !booking.reminded_24hr && hoursUntilMeeting <= 24.1 && hoursUntilMeeting > 23) {
          console.log(`[Native] Running Shadow Audit for: ${booking.email}`);
          // Attempt to extract website from company name or email domain if not provided explicitly
          let website = booking.company || booking.email.split('@')[1];
          const auditResults = await performShadowAudit(website);
          const html = getShadowAuditEmailHtml(emailProps.firstName, website, auditResults);
          
          await sendEmail({ to: booking.email, subject: "We just audited your website — Irtiqa AI", html });
          booking.reminded_24hr = true;
          updated = true;
          sentCount++;
        }

        // 12-Hour Reminder
        if (booking.confirmed && !booking.reminded_12hr && hoursUntilMeeting <= 12.1 && hoursUntilMeeting > 11) {
          console.log(`[Native] Sending 12-hour reminder to: ${booking.email}`);
          const html = getReminderEmailHtml12hr(emailProps);
          await sendEmail({ to: booking.email, subject: "Action Required: Prep for your Audit Call — Irtiqa AI", html });
          booking.reminded_12hr = true;
          updated = true;
          sentCount++;
        }

        // 5-Minute Reminder
        if (booking.confirmed && !booking.reminded_5min && hoursUntilMeeting <= (15 / 60) && hoursUntilMeeting > 0) {
          console.log(`[Native] Sending 5-minute reminder to: ${booking.email}`);
          const html = getReminderEmailHtml5min(emailProps);
          await sendEmail({ to: booking.email, subject: "Starting Now: Your Revenue Audit", html });
          booking.reminded_5min = true;
          updated = true;
          sentCount++;
        }

        if (updated) {
          await redis.set(`native_booking:${id}`, booking);
        }
      }
    }

    // 5. Save updated Calendly processed list back to Redis
    await redis.set('processed_events', processedEvents);

    return NextResponse.json({ success: true, newEmailsSent: sentCount });

  } catch (error) {
    console.error("Sync Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
