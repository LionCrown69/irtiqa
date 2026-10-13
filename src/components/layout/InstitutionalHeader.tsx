'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function InstitutionalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Our Approach', href: '/#approach' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Markets & Alliances', href: '/markets' },
    { label: 'Insights', href: '/blog' },
    { label: 'R/30 Partners', href: '/partners', badge: 'R/30' },
  ];

  return (
    <header className="ap-masthead" style={{ borderBottom: '1px solid var(--color-hairline)', background: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="ap-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '82px' }}>
        {/* Brand Logo & Descriptor */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--color-blue-deep)' }}>
              IRTIQA
            </span>
          </Link>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.85rem' }}>|</span>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-graphite)', fontWeight: 600 }}>
            Strategic Growth &amp; Transformation
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.label}
                href={link.href}
                className="link-gold"
                style={{ 
                  fontSize: '0.875rem', 
                  color: link.badge ? 'var(--color-gold)' : (isActive ? 'var(--color-blue-deep)' : 'var(--color-ink)'),
                  fontWeight: link.badge || isActive ? 700 : 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {link.label}
                {link.badge && (
                  <span style={{ fontSize: '0.625rem', padding: '0.15rem 0.4rem', border: '1px solid var(--color-gold)', borderRadius: '2px', textTransform: 'uppercase', color: '#8C6B32' }}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
            Discuss a Mandate
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-deep)" strokeWidth="2" strokeLinecap="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#FFFFFF', borderBottom: '2px solid var(--color-blue-deep)', padding: '1.5rem 1.5rem 2rem 1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-blue-deep)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--color-hairline)',
                  paddingBottom: '0.75rem'
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: '#FAF6ED', border: '1px solid var(--color-gold)', color: '#8C6B32', borderRadius: '2px' }}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
            >
              Discuss a Mandate &rarr;
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 980px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
