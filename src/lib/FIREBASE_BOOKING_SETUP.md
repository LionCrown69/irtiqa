/**
 * Firebase Booking System Setup Guide
 * ====================================
 * 
 * This file documents the Firebase integration for the booking system.
 * 
 * SETUP STEPS:
 * 
 * 1. Go to Firebase Console: https://console.firebase.google.com/
 * 2. Select project: irtiqa-4a015
 * 3. Go to Firestore Database
 * 4. Click "Create Database" and choose production mode
 * 5. Set location to closest to your users
 * 
 * 6. CREATE FIRESTORE SECURITY RULES:
 *    Go to Firestore > Rules and replace with:
 * 
 *    rules_version = '2';
 *    service cloud.firestore {
 *      match /databases/{database}/documents {
 *        // Booking slots - public read, authenticated write
 *        match /booking_slots/{document=**} {
 *          allow read: if true;
 *          allow write: if request.auth != null;
 *        }
 *        
 *        // Bookings - public read by reference, authenticated write
 *        match /bookings/{document=**} {
 *          allow read: if request.query.where('reference', '==', request.resource.data.reference);
 *          allow write: if request.auth != null;
 *        }
 *      }
 *    }
 * 
 * 7. Enable Authentication (optional for future enhancements):
 *    Go to Authentication and enable anonymous or email/password
 * 
 * COLLECTIONS:
 * 
 * collection: booking_slots
 *   - date: string (YYYY-MM-DD)
 *   - time: string (HH:MM)
 *   - booked: boolean
 *   - bookedBy: { name, email, company }
 *   - reference: string (AUDIT-{timestamp})
 *   - createdAt: timestamp
 *   - updatedAt: timestamp
 * 
 * collection: bookings
 *   - reference: string (AUDIT-{timestamp})
 *   - date: string (YYYY-MM-DD)
 *   - time: string (HH:MM)
 *   - bookedBy: { name, email, company }
 *   - status: string (confirmed, completed, cancelled)
 *   - createdAt: timestamp
 * 
 * BACKEND API INTEGRATION:
 * 
 * The /api/book-audit endpoint currently uses file-based storage.
 * To migrate to Firebase:
 * 
 * Option A (Recommended): Use client-side Firestore
 * - Import firebase-bookings.ts in BookSection.tsx
 * - Call bookSlot directly from client
 * - Keep API for webhook notifications
 * 
 * Option B: Use Firebase Admin SDK (requires backend)
 * - Install: npm install firebase-admin
 * - Update /api/book-audit to import Firebase Admin
 * 
 * For now, both systems can coexist:
 * - API uses file storage for speed
 * - Firestore syncs for analytics/admin view
 */

export {};
