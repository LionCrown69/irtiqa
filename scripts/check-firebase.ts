import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

async function getNativeBookings() {
  if (!firebaseConfig.projectId) {
    console.error("Firebase env vars not found.");
    return;
  }
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  console.log("Fetching native website bookings from Firebase...");
  const q = query(collection(db, 'bookings'));
  const snapshot = await getDocs(q);
  
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
  console.log(`Found ${snapshot.size} native bookings.`);
  process.exit(0);
}

getNativeBookings();
