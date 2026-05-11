import fs from 'fs';
import path from 'path';

const BOOKINGS_FILE = path.join(process.cwd(), 'bookings-data.json');

interface BookingSlot {
  date: string;
  time: string;
  booked: boolean;
  bookedBy?: {
    name: string;
    email: string;
    company: string;
  };
  reference?: string;
}

// Load bookings from file
function loadBookings(): BookingSlot[] {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('Error loading bookings:', error);
  }
  return [];
}

// Save bookings to file
function saveBookings(bookings: BookingSlot[]): void {
  try {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
  } catch (error) {
    console.error('Error saving bookings:', error);
  }
}

// Initialize slots (run once if file doesn't exist)
function initializeSlots(): BookingSlot[] {
  let bookings = loadBookings();
  
  if (bookings.length === 0) {
    bookings = [];
    const today = new Date();
    
    // Generate 30 days of slots
    for (let day = 1; day <= 30; day++) {
      const slotDate = new Date(today);
      slotDate.setDate(slotDate.getDate() + day);
      
      // Skip weekends
      if (slotDate.getDay() === 0 || slotDate.getDay() === 6) continue;
      
      const dateStr = slotDate.toISOString().split('T')[0];
      
      // 5 slots per day
      const times = ['10:00', '11:30', '13:00', '14:30', '16:00'];
      
      times.forEach(time => {
        bookings.push({
          date: dateStr,
          time: time,
          booked: false
        });
      });
    }
    
    saveBookings(bookings);
  }
  
  return bookings;
}

// Find next available slot
function findNextAvailableSlot(): BookingSlot | null {
  const bookings = loadBookings();
  
  if (bookings.length === 0) {
    return initializeSlots()[0] || null;
  }
  
  const availableSlot = bookings.find(slot => !slot.booked);
  return availableSlot || null;
}

// Book a slot
function bookSlot(slot: BookingSlot, userData: { name: string; email: string; company: string }): void {
  let bookings = loadBookings();
  const slotIndex = bookings.findIndex(b => b.date === slot.date && b.time === slot.time);
  
  if (slotIndex !== -1) {
    bookings[slotIndex].booked = true;
    bookings[slotIndex].bookedBy = userData;
    bookings[slotIndex].reference = `AUDIT-${Date.now().toString().slice(-8)}`;
    saveBookings(bookings);
  }
}

// Format time for display
function formatBookingTime(slot: BookingSlot): string {
  const date = new Date(slot.date + 'T00:00:00');
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  const time = new Date(`2000-01-01T${slot.time}`).toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  return `${dayName}, ${monthDay}, ${time}`;
}

export { initializeSlots, findNextAvailableSlot, bookSlot, formatBookingTime, loadBookings, saveBookings };
