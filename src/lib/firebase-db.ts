import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

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
export const analytics = getAnalytics(app);
export { app };

