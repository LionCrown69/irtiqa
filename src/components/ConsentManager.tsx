"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ConsentManager() {
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();
  
  // Basic geo-detection via Next.js locale routing
  const isEU = pathname.startsWith('/en-gb') || pathname.startsWith('/en-eu');

  useEffect(() => {
    const consent = localStorage.getItem('irtiqa_consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'granted') {
      // Initialize analytics scripts here
      // initAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('irtiqa_consent', 'granted');
    setShowBanner(false);
    // initAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('irtiqa_consent', 'denied');
    setShowBanner(false);
    // Hard block on all trackers
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '400px',
      background: '#111',
      border: '1px solid var(--rule)',
      borderRadius: '12px',
      padding: '24px',
      zIndex: 9999,
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--w)' }}>
        {isEU ? "Strict Privacy Enforcement" : "Cookie Preferences"}
      </h3>
      <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '20px', lineHeight: 1.5 }}>
        {isEU 
          ? "We enforce strict GDPR compliance. We do not load any tracking scripts without your explicit consent."
          : "We use essential cookies to run this site. We also use analytics to improve our content."}
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={handleAccept} style={{ flex: 1, padding: '10px', background: 'var(--w)', color: 'var(--ink)', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
          Accept
        </button>
        <button onClick={handleDecline} style={{ flex: 1, padding: '10px', background: 'transparent', color: 'var(--w)', border: '1px solid var(--rule)', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
          {isEU ? "Deny All" : "Decline Optional"}
        </button>
      </div>
    </div>
  );
}
