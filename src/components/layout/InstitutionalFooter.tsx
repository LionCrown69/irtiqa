import React from 'react';
import Link from 'next/link';

export default function InstitutionalFooter() {
  return (
    <footer style={{ background: '#0C2340', color: '#FFFFFF', padding: '5.5rem 0 2.5rem 0' }}>
      <div className="ap-container">
        {/* Main Footer Grid */}
        <div className="ap-grid-12" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="ap-col-4">
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 700, letterSpacing: '0.04em', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              IRTIQA
            </div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-gold-pale)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Strategic Growth &amp; Transformation
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9EB0C5', lineHeight: 1.7, maxWidth: '320px', marginBottom: '1.5rem' }}>
              A multidisciplinary strategic institution working at the intersection of strategy, execution, capital, markets, revenue, and technology.
            </p>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-gold-pale)', fontStyle: 'italic' }}>
              &ldquo;The architecture of what comes next.&rdquo;
            </div>
          </div>

          <div className="ap-col-2">
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 700 }}>
              Approach
            </div>
            <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 2.1, color: '#C8D4E2' }}>
              <li><Link href="/#approach" style={{ color: 'inherit', textDecoration: 'none' }}>The Four Pillars</Link></li>
              <li><Link href="/capabilities" style={{ color: 'inherit', textDecoration: 'none' }}>Practice Areas</Link></li>
              <li><Link href="/how-we-work" style={{ color: 'inherit', textDecoration: 'none' }}>How We Work</Link></li>
              <li><Link href="/markets" style={{ color: 'inherit', textDecoration: 'none' }}>Markets &amp; Trade</Link></li>
              <li><Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Executive Insights</Link></li>
            </ul>
          </div>

          <div className="ap-col-3">
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 700 }}>
              Commercial Programs
            </div>
            <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 2.1, color: '#C8D4E2' }}>
              <li>
                <Link href="/partners" style={{ color: 'inherit', textDecoration: 'none' }}>
                  R/30 Revenue Partners
                </Link>
              </li>
              <li><Link href="/markets" style={{ color: 'inherit', textDecoration: 'none' }}>Cross-Border Alliances</Link></li>
              <li><Link href="/how-we-work" style={{ color: 'inherit', textDecoration: 'none' }}>Relationship Compounding</Link></li>
              <li><Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Discuss a Mandate</Link></li>
            </ul>
          </div>

          <div className="ap-col-3">
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 700 }}>
              Governance &amp; Status
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#9EB0C5', lineHeight: 1.7 }}>
              <div>Corporate Entity: <strong>IRTIQA GROUP</strong></div>
              <div style={{ marginTop: '0.35rem' }}>
                Status: <span className="status-badge tbc" style={{ background: 'rgba(255,255,255,0.08)', color: '#C8D4E2', border: '1px solid rgba(255,255,255,0.2)' }}>TO BE CONFIRMED</span>
              </div>
              <div style={{ marginTop: '0.5rem' }}>Operating Hubs: London &bull; Dubai &bull; Global</div>
              <div style={{ marginTop: '0.5rem', color: '#6A7D94', fontSize: '0.75rem' }}>
                Release: September 2026 Master Service Architecture
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Non-Negotiable Regulatory Disclaimer */}
        <div style={{ paddingTop: '2.5rem', fontSize: '0.8125rem', color: '#8899AC', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '1.25rem' }}>
            <strong>REGULATORY NOTICE:</strong> Irtiqa provides strategic advisory, capital-formation support, transaction support and investment structuring support. Irtiqa is NOT represented as a regulated investment adviser, broker, fund manager, securities intermediary or investment bank unless authorization is explicitly verified. No communications or materials provided herein constitute an offer to buy or sell securities, nor financial, legal, or investment advice. Irtiqa does not guarantee financial returns, capital funding, or commercial outcomes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', color: '#6A7D94' }}>
            <div>&copy; {new Date().getFullYear()} IRTIQA. All rights reserved. Strictly confidential &amp; proprietary.</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Privacy Policy</span>
              <span>Terms of Engagement</span>
              <span>Regulatory Notice</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
