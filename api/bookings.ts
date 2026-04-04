// Simple in-memory booking system
// Later this can be replaced with a database

interface BookingSlot {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24-hour)
  booked: boolean;
  bookedBy?: {
    name: string;
    email: string;
    company: string;
  };
  bookedAt?: string; // ISO timestamp
}

// Define available time slots per day (5 slots per day)
const AVAILABLE_TIMES = ['10:00', '11:30', '13:00', '14:30', '16:00'];

// Store bookings in memory (will reset on server restart - upgrade to DB later)
let bookings: BookingSlot[] = [];

// Initialize 30 days of slots
function initializeSlots() {
  if (bookings.length > 0) return; // Already initialized

  const today = new Date();
  today.setDate(today.getDate() + 1); // Start from tomorrow

  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);

    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    const dateStr = date.toISOString().split('T')[0];

    AVAILABLE_TIMES.forEach((time) => {
      bookings.push({
        date: dateStr,
        time,
        booked: false
      });
    });
  }
}

// Find next available slot
export function findNextAvailableSlot(): BookingSlot | null {
  initializeSlots();

  const now = new Date();
  const nextSlot = bookings.find(
    (slot) =>
      !slot.booked &&
      new Date(`${slot.date}T${slot.time}:00`) > now
  );

  return nextSlot || null;
}

// Book a slot
export function bookSlot(
  slot: BookingSlot,
  userData: { name: string; email: string; company: string }
): BookingSlot {
  const slotIndex = bookings.findIndex(
    (s) => s.date === slot.date && s.time === slot.time
  );

  if (slotIndex === -1) {
    throw new Error('Slot not found');
  }

  bookings[slotIndex].booked = true;
  bookings[slotIndex].bookedBy = userData;
  bookings[slotIndex].bookedAt = new Date().toISOString();

  return bookings[slotIndex];
}

// Get formatted display time
export function formatBookingTime(slot: BookingSlot): string {
  const date = new Date(`${slot.date}T${slot.time}:00`);
  return date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}
