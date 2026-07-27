import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const nativeBookingIds = await redis.smembers('native_bookings_set');
    const bookings = [];

    if (nativeBookingIds && nativeBookingIds.length > 0) {
      for (const id of nativeBookingIds) {
        const booking = await redis.get(`native_booking:${id}`);
        if (booking) {
          bookings.push(booking);
        }
      }
    }

    // Sort bookings by start_time descending (newest first)
    bookings.sort((a: any, b: any) => {
      return new Date(b.start_time).getTime() - new Date(a.start_time).getTime();
    });

    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
