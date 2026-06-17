import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { getConfirmationEmailHtmlLight } from '@/emails/templates';

// NOTE: You'll need to set your Calendly Webhook Signing Key in your environment variables.
const CALENDLY_WEBHOOK_SIGNING_KEY = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;

export async function POST(req: Request) {
  try {
    const signature = req.headers.get('calendly-webhook-signature');
    const bodyText = await req.text();

    // 1. (Optional but recommended) Verify Webhook Signature here 
    // to ensure the request actually comes from Calendly.
    if (!signature && process.env.NODE_ENV === 'production') {
       console.warn("No calendly signature found.");
       // return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // Parse the body
    const body = JSON.parse(bodyText);
    const { event, payload } = body;

    // We only care about invitee.created (for confirmations) 
    // and potentially invitee.canceled.
    if (event === 'invitee.created') {
      const inviteeEmail = payload.email;
      const inviteeName = payload.name;
      
      // 1. Extract Custom Questions
      let companyName = "Your Company";
      let companyWebsite = "#";
      let refId = payload.tracking?.utm_campaign || Math.random().toString(36).substring(2, 8).toUpperCase();
      
      if (payload.questions_and_answers && Array.isArray(payload.questions_and_answers)) {
        for (const qa of payload.questions_and_answers) {
          const q = qa.question.toLowerCase();
          if (q.includes("company") && !q.includes("website")) companyName = qa.answer;
          if (q.includes("website") || q.includes("url")) companyWebsite = qa.answer;
        }
      }

      // 2. Extract Event Time
      let meetingDateStr = new Date().toLocaleDateString();
      let meetingTimeStr = "TBD";
      
      // Calendly v2 payloads usually nest the time in scheduled_event
      const startTime = payload.scheduled_event?.start_time || payload.event?.start_time;
      if (startTime) {
        const d = new Date(startTime);
        meetingDateStr = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        meetingTimeStr = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
      }

      // 3. URLs
      const locationData = payload.scheduled_event?.location;
      const joinUrl = locationData?.join_url || payload.join_url || "https://calendly.com/irtiqa";
      const rescheduleUrl = payload.reschedule_url || "#";
      const cancelUrl = payload.cancel_url || "#";
      
      // Send the Confirmation Email immediately
      const html = getConfirmationEmailHtmlLight({
        emailDate: new Date().toLocaleDateString(),
        firstName: inviteeName.split(' ')[0] || inviteeName,
        meetingDate: meetingDateStr, 
        meetingTime: meetingTimeStr, 
        timezone: payload.timezone || "UTC",
        meetingLink: joinUrl,
        companyName: companyName,
        refId: refId,
        fullName: inviteeName,
        companyWebsite: companyWebsite,
        companyWebsiteDisplay: companyWebsite !== "#" ? companyWebsite.replace(/^https?:\/\//, '') : "Not Provided", 
        companySummary: "Revenue audit call booked.",
        surveyLink: "https://irtiqaaiagency.com/audit-prep", // Optional: link to your prep form
        rescheduleLink: rescheduleUrl,
        unsubscribeLink: cancelUrl,
        clientEmail: inviteeEmail
      });
      
      await sendEmail({
        to: inviteeEmail,
        subject: "Your Revenue Audit is Confirmed — Irtiqa AI",
        html,
      });

      // --- REMINDER SCHEDULING ---
      // If using QStash (Serverless Scheduling)
      // fetch('https://qstash.upstash.io/v2/publish/https://your-domain.com/api/webhooks/reminder', {
      //   method: 'POST',
      //   headers: { 'Authorization': \`Bearer \${process.env.QSTASH_TOKEN}\`, 'Upstash-Delay': '24h' },
      //   body: JSON.stringify({ email: inviteeEmail, name: inviteeName, joinUrl })
      // })

      // If using Database (Supabase/Firebase)
      // await supabase.from('bookings').insert({ email: inviteeEmail, name: inviteeName, time: payload.scheduled_event.start_time });

      return NextResponse.json({ success: true, message: "Confirmation sent" });
    }

    // Handle cancellations
    if (event === 'invitee.canceled') {
      // Logic for cancellation (e.g. remove from database so they don't get reminders)
      return NextResponse.json({ success: true, message: "Cancellation processed" });
    }

    return NextResponse.json({ success: true, message: "Event ignored" });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
