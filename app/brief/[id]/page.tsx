import React from 'react';
import { Redis } from '@upstash/redis';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BriefPage({ params }: { params: { id: string } }) {
  const redis = Redis.fromEnv();
  
  // Try to find the booking. First natively:
  let booking: any = null;
  const nativeStr = await redis.get(`native_booking:${params.id}`);
  if (nativeStr) {
    booking = typeof nativeStr === 'string' ? JSON.parse(nativeStr) : nativeStr;
  }

  // If not native, maybe we stored it another way?
  // We'll proceed with basic data if missing, or show a beautiful 404
  if (!booking) {
    // For Calendly bookings, we might not have a Redis object saved unless we explicitly do.
    // For now, we will fallback beautifully.
    booking = {
      name: "Valued Partner",
      company: "Your Organization",
      challenge: "Optimizing Revenue Systems"
    };
  }

  return (
    <div className="min-h-screen bg-[#0C0C0B] text-[#FAFAF8] font-sans selection:bg-[#EBE7D6] selection:text-[#0C0C0B]">
      
      {/* Top Bar */}
      <header className="border-b border-[#242422] bg-[#0C0C0B]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tighter" style={{ fontFamily: 'var(--display)' }}>
            IRTIQA<span className="text-[#888884]">.AI</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EBE7D6] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EBE7D6]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#888884]">Live Session</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Psychological Framing */}
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A18] border border-[#242422] text-xs font-medium text-[#888884] mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            ID: {params.id.substring(0, 8).toUpperCase()}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--display)' }}>
            Pre-Call Analysis: <br/>
            <span className="text-[#888884]">{booking.company}</span>
          </h1>
          
          <p className="text-[#888884] text-lg leading-relaxed">
            Welcome, {booking.name.split(' ')[0]}. We see your primary objective is <strong className="text-[#FAFAF8] font-medium">{booking.challenge.toLowerCase()}</strong>. Our systems are currently evaluating your baseline data. 
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#1A1A18] rounded-xl p-6 border border-[#242422] mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-end mb-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#FAFAF8]">Analysis Status</div>
            <div className="text-xs text-[#888884]">40% Complete</div>
          </div>
          <div className="w-full bg-[#0C0C0B] h-2 rounded-full overflow-hidden border border-[#242422]">
            <div className="bg-[#EBE7D6] h-full rounded-full w-[40%] transition-all duration-1000 ease-out"></div>
          </div>
          <p className="text-xs text-[#888884] mt-3">
            <span className="text-[#EBE7D6]">Awaiting Input:</span> We require 3 final data points to complete our architecture review before the call.
          </p>
        </div>

        {/* The Brief Form */}
        <form className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} action="/api/brief/submit" method="POST">
          <input type="hidden" name="bookingId" value={params.id} />
          <input type="hidden" name="clientEmail" value={booking.email || 'unknown'} />
          <input type="hidden" name="clientName" value={booking.name} />

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#FAFAF8]">1. Current Monthly Revenue Baseline</label>
            <p className="text-xs text-[#888884]">We need exact figures to calculate compound growth potential.</p>
            <input type="text" name="revenue" required placeholder="e.g. $15k/mo" className="w-full bg-[#0C0C0B] border border-[#242422] rounded-lg px-4 py-3 text-[#FAFAF8] placeholder-[#4A4A46] focus:outline-none focus:border-[#EBE7D6] transition-colors" />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#FAFAF8]">2. Current Tech & Tool Stack</label>
            <p className="text-xs text-[#888884]">What CRM, booking, and marketing software are you currently paying for?</p>
            <textarea name="stack" required rows={3} placeholder="Hubspot, Calendly, Zapier..." className="w-full bg-[#0C0C0B] border border-[#242422] rounded-lg px-4 py-3 text-[#FAFAF8] placeholder-[#4A4A46] focus:outline-none focus:border-[#EBE7D6] transition-colors"></textarea>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#FAFAF8]">3. The 12-Month Target</label>
            <p className="text-xs text-[#888884]">If we implement a fully autonomous system, where does revenue need to be in 12 months for this to be a massive success?</p>
            <input type="text" name="target" required placeholder="e.g. $50k/mo" className="w-full bg-[#0C0C0B] border border-[#242422] rounded-lg px-4 py-3 text-[#FAFAF8] placeholder-[#4A4A46] focus:outline-none focus:border-[#EBE7D6] transition-colors" />
          </div>

          <button type="submit" className="w-full bg-[#FAFAF8] text-[#0C0C0B] font-bold py-4 rounded-lg hover:bg-[#EBE7D6] transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(250,250,248,0.1)]">
            Finalize My Audit Brief →
          </button>
        </form>

      </main>
    </div>
  );
}
