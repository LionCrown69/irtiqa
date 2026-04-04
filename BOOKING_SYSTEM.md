# Irtiqa Booking System - Complete Setup

## Overview
Your booking system combines:
1. **Frontend**: React booking form (BookSection.tsx)
2. **API**: Express endpoint for slot assignment (`/api/book-audit`)
3. **Storage Options**:
   - File-based (current: `bookings-data.json`)
   - Firebase Firestore (optional: real-time sync & admin view)

## Current Status

✅ **Working Now:**
- Booking form at `#book` section
- Auto-slot assignment via API
- Persistent file storage
- Booking confirmation with reference ID
- Email contact fields integrated

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```

The site will be live at `http://localhost:5173`

### 3. Test Booking Flow
1. Scroll to "Book your free Growth Audit" section
2. Fill in the form (Name, Email, Company, Revenue Range, Challenge)
3. Click "Reserve Your Spot"
4. You should see a confirmation with your booking time & reference ID

## Firebase Integration (Optional but Recommended)

### Enable Firestore for Admin Dashboard

1. **Go to Firebase Console:**
   - https://console.firebase.google.com
   - Select project: `irtiqa-4a015`

2. **Create Firestore Database:**
   - Click "Build with Firestore"
   - Choose "Production mode"
   - Select region closest to your users

3. **Set Security Rules:**
   - Go to Firestore > Rules
   - Replace with these rules:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /booking_slots/{document=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
       match /bookings/{document=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

4. **Start Your App**
   ```bash
   npm run dev
   ```
   
   Firestore will auto-initialize 30 days of available slots on first load.

## File Structure

```
irtiqa-react/
├── api/
│   ├── book-audit.ts         # API endpoint for bookings
│   └── bookings-storage.ts   # File-based persistence
├── src/
│   ├── components/
│   │   ├── BookSection.tsx            # Booking form
│   │   ├── BookingConfirmation.tsx    # Confirmation screen
│   │   └── BookingsAdmin.tsx          # (NEW) View bookings from Firestore
│   └── lib/
│       ├── firebase.ts              # (OLD) Basic Firebase init
│       ├── firebase-db.ts           # (NEW) Firestore initialization
│       ├── firebase-bookings.ts     # (NEW) Firestore operations
│       └── FIREBASE_BOOKING_SETUP.md # Setup documentation
├── bookings-data.json         # Local file storage (auto-created)
└── package.json
```

## API Endpoint

### POST `/api/book-audit`

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "revenue": "$50k-$100k",
  "challenge": "Lead follow-up delays"
}
```

**Response:**
```json
{
  "ok": true,
  "booking": {
    "date": "2026-04-15",
    "time": "14:30",
    "formattedTime": "Tuesday, April 15, 2:30 PM",
    "reference": "AUDIT-1712123456"
  }
}
```

## Booking Slots Configuration

- **Duration**: 30 days from tomorrow
- **Days**: Weekdays only (Mon-Fri)
- **Times**: 10:00, 11:30, 13:00, 14:30, 16:00
- **Total Slots**: ~150 available

Edit in `api/bookings-storage.ts` or `src/lib/firebase-bookings.ts`

## Sending Booking Confirmations

### Option 1: Email (Manual)
Booking confirmations are shown in-app. Users can:
- See formatted time
- Get unique reference ID
- See "We'll send calendar invite to {email}"

### Option 2: Webhook (Set Environment Variable)
Add to `.env.local`:
```
LEAD_WEBHOOK_URL=https://your-webhook.com/bookings
```

The API will POST booking data to this URL.

### Option 3: Firebase Cloud Functions (Future)
You can set up Cloud Functions to:
- Send email via SendGrid/Mailgun
- Create Google Calendar events
- Send SMS reminders

## Testing the System

### Locally
```bash
npm run dev
# Visit http://localhost:5173
# Go to #book section
# Submit form → see confirmation
```

### Check Stored Bookings
**File-based** (current):
- Open `bookings-data.json` in project root

**Firebase** (if enabled):
- Go to Firebase Console > Firestore
- View `booking_slots` and `bookings` collections

## Troubleshooting

### "No available slots" error
- Slots are only created 1-30 days in future
- Only weekdays have slots
- All slots for that day might be booked

### Bookings not persisting
- Check `bookings-data.json` is writable
- Ensure `api/` folder is accessible to dev server
- Restart dev server: `npm run dev`

### Firebase not working
- Ensure Firestore database created in Firebase Console
- Check security rules allow read/write
- Open browser console for detailed errors
- Verify `firebase` package is installed: `npm list firebase`

## Next Steps

1. **Email Integration** - Send calendar invites via Zapier/Webhook
2. **Admin Dashboard** - Full view of all bookings (BookingsAdmin.tsx)
3. **SMS Reminders** - Send day-before reminders via Twilio
4. **Custom Availability** - Admin control of available time slots
5. **Cancellation** - Let users reschedule bookings

## Support

All booking-related files:
- `/api/book-audit.ts` - Main endpoint
- `/api/bookings-storage.ts` - Data persistence
- `/src/components/BookSection.tsx` - Form UI
- `/src/components/BookingConfirmation.tsx` - Confirmation UI
- `/src/lib/firebase-bookings.ts` - Firestore operations
- `/src/components/BookingsAdmin.tsx` - Admin view

Questions? Check the inline code comments in each file.
