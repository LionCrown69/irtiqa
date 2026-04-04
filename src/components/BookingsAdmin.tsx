import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, Timestamp, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase-db';

interface Booking {
  id: string;
  reference: string;
  date: string;
  time: string;
  bookedBy?: {
    name: string;
    email: string;
    company: string;
  };
  status: string;
  createdAt?: Timestamp;
}

export const BookingsAdmin: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const q = query(
          collection(db, 'bookings'),
          where('status', '==', 'confirmed')
        );
        
        const snapshot = await getDocs(q);
        const bookingsList: Booking[] = [];
        
        snapshot.forEach((doc: QueryDocumentSnapshot) => {
          bookingsList.push({
            id: doc.id,
            ...(doc.data() as Omit<Booking, 'id'>)
          });
        });

        setBookings(bookingsList.sort((a, b) => a.date.localeCompare(b.date)));
        setLoading(false);
      } catch (error) {
        console.error('Error loading bookings:', error);
        setLoading(false);
      }
    };

    loadBookings();
  }, []);

  if (loading) {
    return <div>Loading bookings...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Bookings Admin</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>Reference</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Date</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Time</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Email</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Company</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{booking.reference}</td>
              <td style={{ padding: '10px' }}>{booking.date}</td>
              <td style={{ padding: '10px' }}>{booking.time}</td>
              <td style={{ padding: '10px' }}>{booking.bookedBy?.name}</td>
              <td style={{ padding: '10px' }}>{booking.bookedBy?.email}</td>
              <td style={{ padding: '10px' }}>{booking.bookedBy?.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {bookings.length === 0 && <p>No bookings yet.</p>}
    </div>
  );
};

export default BookingsAdmin;
