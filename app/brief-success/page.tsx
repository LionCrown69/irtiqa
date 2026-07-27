import React from 'react';
import Link from 'next/link';

export default function BriefSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0B] text-[#FAFAF8] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-[#1A1A18] border border-[#242422] flex items-center justify-center mb-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EBE7D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h1 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--display)' }}>Analysis Finalized.</h1>
      <p className="text-[#888884] text-lg max-w-md mb-8">
        Your operational data has been securely injected into our evaluation systems. We have everything we need to run your Revenue Audit.
      </p>
      <Link href="/" className="px-6 py-3 bg-[#1A1A18] text-[#FAFAF8] border border-[#242422] rounded-lg hover:bg-[#242422] transition-colors text-sm font-semibold">
        Return to Homepage
      </Link>
    </div>
  );
}
