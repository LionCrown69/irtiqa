import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  Timestamp,
  writeBatch,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from './firebase-db';

const TIMEOUT_MS = 1500; // 1.5s timeout for fast real-time UI

async function withTimeout<T>(promise: Promise<T>, message: string): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Timeout: ${message}`)), TIMEOUT_MS)
  );
  return Promise.race([promise, timeoutPromise]);
}


export interface BookingSlot {
  id?: string;
  date: string;
  time: string;
  booked: boolean;
  bookedBy?: {
    name: string;
    email: string;
    company: string;
  };
  revenue?: string;
  challenge?: string;
  reference?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface BookingRequest {
  name: string;
  email: string;
  company: string;
  revenue: string;
  challenge: string;
}

const SLOTS_COLLECTION = 'booking_slots';
const BOOKINGS_COLLECTION = 'bookings';
const BOOKING_TIMES = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

// --- FALLBACK LOGIC FOR FAST UI ---
function generateFallbackDates(): string[] {
  const dates = [];
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(currentDate.getDate() + 1); // Start tomorrow

  let attempts = 0;
  while (dates.length < 15 && attempts < 60) {
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      dates.push(currentDate.toISOString().split('T')[0]);
    }
    currentDate.setDate(currentDate.getDate() + 1);
    attempts++;
  }
  return dates;
}

function generateFallbackSlots(date: string): BookingSlot[] {
  return BOOKING_TIMES.map((time, idx) => ({
    id: `fallback-${date}-${idx}`,
    date,
    time,
    booked: false,
  }));
}

// Initialize 30 days of slots if they don't exist
export async function initializeSlots(): Promise<void> {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if slots already exist for today
    const q = query(
      collection(db, SLOTS_COLLECTION),
      where('date', '>=', today.toISOString().split('T')[0])
    );

    const snapshot = await withTimeout(getDocs(q), 'checking existing slots');
    if (snapshot.size > 0) {
      console.log('Firebase: Booking slots already initialized.');
      return;
    }

    console.log('Firebase: No slots found. Initializing 30-day window...');
    const batch = writeBatch(db);
    const slotsRef = collection(db, SLOTS_COLLECTION);

    // Generate 30 days of slots starting from tomorrow
    for (let day = 1; day <= 30; day++) {
      const slotDate = new Date(today);
      slotDate.setDate(slotDate.getDate() + day);

      // Skip weekends
      if (slotDate.getDay() === 0 || slotDate.getDay() === 6) {
        continue;
      }

      const dateStr = slotDate.toISOString().split('T')[0];

      for (const time of BOOKING_TIMES) {
        const docRef = doc(slotsRef);
        batch.set(docRef, {
          date: dateStr,
          time,
          booked: false,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
    }

    await batch.commit();
  } catch (error) {
    console.error('Error initializing slots:', error);
  }
}

// Find next available slot
export async function findNextAvailableSlot(): Promise<BookingSlot | null> {
  try {
    const q = query(
      collection(db, SLOTS_COLLECTION),
      where('booked', '==', false)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.warn('Firebase: No available slots for booking.');
      return null;
    }

    // Get all available slots and sort by date/time
    const slots: BookingSlot[] = [];
    snapshot.forEach((doc: QueryDocumentSnapshot) => {
      slots.push({
        id: doc.id,
        ...(doc.data() as Omit<BookingSlot, 'id'>)
      });
    });

    console.log(`Firebase: Found ${slots.length} available slots.`);

    // Sort by date and time
    slots.sort((a, b) => {
      const dateCompare = a.date.localeCompare(b.date);
      if (dateCompare !== 0) return dateCompare;
      return a.time.localeCompare(b.time);
    });

    return slots[0] || null;
  } catch (error) {
    console.error('Firebase Error (findNextAvailableSlot):', error);
    throw error; // Rethrow to be caught by UI
  }
}

// Book a slot
export async function bookSlot(
  slot: BookingSlot,
  userData: {
    name: string;
    email: string;
    company: string;
    revenue: string;
    challenge: string;
  }
): Promise<{ reference: string; slot: BookingSlot } | null> {
  try {
    if (!slot.id) return null;

    const reference = `AUDIT-${Date.now()}`;

    // Update the slot as booked
    const slotRef = doc(db, SLOTS_COLLECTION, slot.id);
    console.log('Firebase: Updating slot...', slot.id);
    await withTimeout(updateDoc(slotRef, {
      booked: true,
      bookedBy: {
        name: userData.name,
        email: userData.email,
        company: userData.company
      },
      revenue: userData.revenue,
      challenge: userData.challenge,
      reference,
      updatedAt: serverTimestamp()
    }), 'updating slot table');

    // Create booking record
    console.log('Firebase: Creating booking record...');
    await withTimeout(addDoc(collection(db, BOOKINGS_COLLECTION), {
      reference,
      date: slot.date,
      time: slot.time,
      bookedBy: {
        name: userData.name,
        email: userData.email,
        company: userData.company
      },
      revenue: userData.revenue,
      challenge: userData.challenge,
      status: 'confirmed',
      createdAt: serverTimestamp()
    }), 'creating booking record');





    console.log('Firebase: Booking confirmed successfully.', reference);

    return {
      reference,
      slot: {
        ...slot,
        booked: true,
        bookedBy: userData,
        reference
      }
    };
  } catch (error) {
    console.warn('Firebase Error (bookSlot) - using offline fallback:', error);
    const reference = `AUDIT-${Date.now()}`;
    return {
      reference,
      slot: {
        ...slot,
        booked: true,
        bookedBy: userData,
        reference
      }
    };
  }
}

// Format booking time for display
export function formatBookingTime(slot: BookingSlot): string {
  try {
    const date = new Date(`${slot.date}T${slot.time}`);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return `${slot.date} at ${slot.time}`;
  }
}

// Get available dates (strictly next 15 business days)
export async function getAvailableDates(): Promise<string[]> {
  try {
    const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1); // Disallow same-day booking

    const q = query(
      collection(db, SLOTS_COLLECTION),
      where('booked', '==', false),
      where('date', '>=', tomorrow.toISOString().split('T')[0])
    );

    const snapshot = await withTimeout(getDocs(q), 'getting available dates');
    const dates = new Set<string>();

    snapshot.forEach((doc: QueryDocumentSnapshot) => {
      const data = doc.data() as BookingSlot;
      dates.add(data.date);
    });

    // Return exactly the next 15 available unique dates
    const availableDates = Array.from(dates).sort().slice(0, 15);
    return availableDates.length > 0 ? availableDates : generateFallbackDates();
  } catch (error) {
    console.warn('Firebase Error getting available dates (falling back):', error);
    return generateFallbackDates();
  }
}

// Get available slots for a specific date
export async function getAvailableSlotsForDate(date: string): Promise<BookingSlot[]> {
  try {
    const q = query(
      collection(db, SLOTS_COLLECTION),
      where('date', '==', date),
      where('booked', '==', false)
    );

    const snapshot = await withTimeout(getDocs(q), 'getting available slots for date');
    const slots: BookingSlot[] = [];

    snapshot.forEach((doc: QueryDocumentSnapshot) => {
      slots.push({
        id: doc.id,
        ...(doc.data() as Omit<BookingSlot, 'id'>)
      });
    });

    return slots.sort((a, b) => a.time.localeCompare(b.time));
  } catch (error) {
    console.warn('Firebase Error getting available slots (falling back):', error);
    return generateFallbackSlots(date);
  }
}

// Keep the old name for compatibility if needed, but it's better to use getAvailableSlotsForDate
export async function getAvailableTimesForDate(date: string): Promise<string[]> {
  const slots = await getAvailableSlotsForDate(date);
  return slots.map(s => s.time);
}

// Get booking by reference
export async function getBookingByReference(reference: string): Promise<BookingSlot | null> {
  try {
    const q = query(
      collection(db, SLOTS_COLLECTION),
      where('reference', '==', reference)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...(doc.data() as Omit<BookingSlot, 'id'>)
    };
  } catch (error) {
    console.error('Error getting booking:', error);
    return null;
  }
}
