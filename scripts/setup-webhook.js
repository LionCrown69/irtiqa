import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env variables manually since we are running a raw node script
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

const token = process.env.CALENDLY_PAT;
if (!token) {
  console.error("❌ ERROR: CALENDLY_PAT not found in .env");
  process.exit(1);
}

const webhookUrl = process.argv[2];

if (!webhookUrl) {
  console.error("❌ ERROR: Please provide the public URL of your webhook.");
  console.error("Usage: node scripts/setup-webhook.js https://your-domain.com/api/webhooks/calendly");
  process.exit(1);
}

async function setupWebhook() {
  console.log("Fetching user details from Calendly...");
  
  try {
    // 1. Get current user
    const userRes = await fetch('https://api.calendly.com/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!userRes.ok) {
      const err = await userRes.text();
      console.error("Failed to fetch user details:", err);
      process.exit(1);
    }

    const userData = await userRes.json();
    const userUri = userData.resource.uri;
    const organizationUri = userData.resource.current_organization;

    console.log(`✅ Found User: ${userUri}`);
    console.log(`✅ Found Organization: ${organizationUri}`);
    console.log(`\nCreating webhook subscription for: ${webhookUrl}`);

    // 2. Create Webhook Subscription
    const webhookPayload = {
      url: webhookUrl,
      events: ["invitee.created", "invitee.canceled"],
      organization: organizationUri,
      user: userUri,
      scope: "organization" // Can be 'user' or 'organization'
    };

    const createRes = await fetch('https://api.calendly.com/webhook_subscriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookPayload)
    });

    if (!createRes.ok) {
      const err = await createRes.text();
      console.error("❌ Failed to create webhook:", err);
      process.exit(1);
    }

    const createData = await createRes.json();
    console.log("✅ Webhook successfully created!");
    console.log(createData);

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

setupWebhook();
