import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4nUpkRWpJcrdfcN0JDTCb-64ulKT094c",
  authDomain: "irtiqa-4a015.firebaseapp.com",
  projectId: "irtiqa-4a015",
  storageBucket: "irtiqa-4a015.firebasestorage.app",
  messagingSenderId: "330223755946",
  appId: "1:330223755946:web:2343a8bc64f252b0d366d3",
  measurementId: "G-Z77ZGJ6YNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: Analytics | null = null;

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

export { app, analytics };
