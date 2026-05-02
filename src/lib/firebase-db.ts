import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA4nUpkRWpJcrdfcN0JDTCb-64ulKT094c",
  authDomain: "irtiqa-4a015.firebaseapp.com",
  projectId: "irtiqa-4a015",
  storageBucket: "irtiqa-4a015.firebasestorage.app",
  messagingSenderId: "330223755946",
  appId: "1:330223755946:web:2343a8bc64f252b0d366d3",
  measurementId: "G-Z77ZGJ6YNR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export let analytics: Analytics | null = null;

if (typeof window !== 'undefined') {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {
      analytics = null;
    });
}
export { app };

