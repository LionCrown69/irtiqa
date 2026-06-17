// generate-preview.ts
import fs from 'fs';
import { getConfirmationEmailHtmlLight } from '../src/emails/templates';

const dummyProps = {
  emailDate: new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }),
  firstName: "Michael",
  meetingDate: "Wednesday, June 17",
  meetingTime: "10:00 AM",
  timezone: "EST",
  meetingLink: "https://calendly.com/events/123/join",
  companyName: "Dunder Mifflin",
  refId: "AUDIT-5X92L",
  fullName: "Michael Scott",
  companyWebsite: "https://dundermifflin.com",
  companyWebsiteDisplay: "dundermifflin.com",
  companySummary: "Revenue audit call booked.",
  surveyLink: "https://irtiqaaiagency.com/audit-prep",
  rescheduleLink: "#",
  unsubscribeLink: "#",
  clientEmail: "michael.scott@dundermifflin.com"
};

const html = getConfirmationEmailHtmlLight(dummyProps);
fs.writeFileSync('test-preview.html', html);
console.log("test-preview.html generated!");
