/**
 * Pushes new lead data to a Google Sheet via a Google Apps Script Web App URL.
 * To set this up, deploy a Google Apps Script with the `doPost` function provided in the setup instructions,
 * and add the resulting URL to your .env file as GOOGLE_SHEETS_WEBHOOK_URL.
 */
export async function pushToGoogleSheet(data: {
  name: string;
  email: string;
  companyName?: string;
  companyWebsite?: string;
  meetingDate?: string;
  meetingTime?: string;
  refId?: string;
  source?: string;
}) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not defined. Skipping Google Sheets push.");
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to push to Google Sheet:", await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error pushing to Google Sheet:", error);
    return false;
  }
}
