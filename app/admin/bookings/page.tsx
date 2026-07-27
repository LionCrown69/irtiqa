"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch('/api/admin/bookings');
        const data = await res.json();
        if (data.success) {
          setBookings(data.bookings);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', color: '#E5E5E5', fontFamily: 'system-ui, sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>Native Booking Automation</h1>
            <p style={{ color: '#888', marginTop: '8px', fontSize: '14px' }}>Live overview of Upstash bookings and email statuses.</p>
          </div>
          <Link href="/" style={{ padding: '8px 16px', backgroundColor: '#1A1A1A', color: '#FFF', textDecoration: 'none', borderRadius: '6px', fontSize: '14px', border: '1px solid #333' }}>
            ← Back to Site
          </Link>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px', color: '#888' }}>Loading database...</div>
        ) : (
          <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #222', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #222', backgroundColor: '#161616' }}>
                  <th style={{ padding: '16px 24px', fontSize: '12px', color: '#888', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '1px' }}>Client</th>
                  <th style={{ padding: '16px 24px', fontSize: '12px', color: '#888', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '1px' }}>Meeting Time</th>
                  <th style={{ padding: '16px 24px', fontSize: '12px', color: '#888', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '1px' }}>Challenge</th>
                  <th style={{ padding: '16px 24px', fontSize: '12px', color: '#888', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '1px', textAlign: 'center' }}>Initial</th>
                  <th style={{ padding: '16px 24px', fontSize: '12px', color: '#888', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '1px', textAlign: 'center' }}>12-Hour</th>
                  <th style={{ padding: '16px 24px', fontSize: '12px', color: '#888', textTransform: 'uppercase', fontWeight: 500, letterSpacing: '1px', textAlign: 'center' }}>5-Min</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#666' }}>No native bookings found.</td>
                  </tr>
                ) : (
                  bookings.map((b: any, idx) => {
                    const meetingDate = new Date(b.start_time);
                    const formattedDate = new Intl.DateTimeFormat('en-US', { timeZone: b.timezone, month: 'short', day: 'numeric' }).format(meetingDate);
                    const formattedTime = new Intl.DateTimeFormat('en-US', { timeZone: b.timezone, hour: '2-digit', minute: '2-digit' }).format(meetingDate);
                    
                    return (
                      <tr key={b.id || idx} style={{ borderBottom: '1px solid #222' }}>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ fontWeight: 500, color: '#FFF' }}>{b.name}</div>
                          <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>{b.company} • {b.email}</div>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ color: '#E5E5E5' }}>{formattedDate} @ {formattedTime}</div>
                          <div style={{ fontSize: '12px', color: '#888', marginTop: '4px', backgroundColor: '#222', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>{b.timezone}</div>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ fontSize: '13px', color: '#AAA', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={b.challenge}>
                            {b.challenge || "N/A"}
                          </div>
                        </td>
                        <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                          {b.confirmed ? <span style={{ color: '#10B981' }}>✅</span> : <span style={{ color: '#444' }}>—</span>}
                        </td>
                        <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                          {b.reminded_12hr ? <span style={{ color: '#10B981' }}>✅</span> : <span style={{ color: '#444' }}>—</span>}
                        </td>
                        <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                          {b.reminded_5min ? <span style={{ color: '#10B981' }}>✅</span> : <span style={{ color: '#444' }}>—</span>}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
