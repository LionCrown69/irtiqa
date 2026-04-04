import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './lib/firebase-db'  // Initialize Firebase & Firestore
import { initializeSlots } from './lib/firebase-bookings'
import './index.css'
import './mobile-native.css'

// Initialize slots on startup
initializeSlots().catch(console.error);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
