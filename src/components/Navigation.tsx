"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import BrandLogo from './BrandLogo';

interface NavigationProps {
  navHeight?: number;
}

const Navigation: React.FC<NavigationProps> = ({ navHeight: initialNavHeight = 68 }) => {
  const [navHeight, setNavHeight] = useState(initialNavHeight);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const q = window.matchMedia('(max-width: 640px)');
    const sync = () => setIsMobile(q.matches);
    sync();
    q.addEventListener('change', sync);
    return () => q.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight = window.scrollY > 60 ? 58 : initialNavHeight;
      setNavHeight(newHeight);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialNavHeight]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (mobileMenuOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
      html.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Infrastructure', href: '/#services' },
    { label: 'How It Works', href: '/#process' },
    { label: 'Cohort 02', href: '/cohort-2' },
    { label: 'Results', href: '/#results' },
    { label: 'Proof', href: '/#testimonials' },
    { label: 'Insights', href: '/blog' }
  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, y: '-10%', pointerEvents: 'none' },
    open: { opacity: 1, y: '0%', pointerEvents: 'auto', transition: { type: 'spring', damping: 24, stiffness: 200 } }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1, x: 0, transition: { delay: i * 0.08 + 0.1, type: 'spring', damping: 20 }
    })
  };

  return (
    <>
      <nav style={{ height: `${navHeight}px`, zIndex: 100 }}>
        <a href="#" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <BrandLogo size="sm" showWordmark={true} />
        </a>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.label === 'Cohort 02' ? (
                <a href={link.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="orangeStar" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#fbd38d" />
                      </linearGradient>
                    </defs>
                    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="url(#orangeStar)" />
                  </svg>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #f97316 0%, #fbd38d 100%)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700
                  }}>
                    {link.label}
                  </span>
                </a>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
        
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="nav-btn-desktop">
            <a href="https://irtiqa-revenue-partner-workspace.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sub)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--ink)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--sub)'}>
              Partner OS ↗
            </a>
            <a href="/#book" className="nav-btn">
              <span className="nav-btn-dot" style={{ backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }}></span>
              Start a Conversation
            </a>
          </div>
        )}

        <button 
          className="nav-hamburger" 
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div animate={mobileMenuOpen ? 'open' : 'closed'} className="hamburger-box">
             <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }} className="hamburger-line"></motion.span>
             <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="hamburger-line"></motion.span>
             <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }} className="hamburger-line"></motion.span>
          </motion.div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mobile-drawer-overlay"
          >
            <div className="mobile-drawer-inner">
              <ul className="mobile-drawer-links">
                {navLinks.map((link, i) => (
                  <motion.li key={link.label} custom={i} variants={linkVariants}>
                    <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className="mobile-drawer-footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}
              >
                <a href="/#book" className="btn-fill mobile-drawer-cta" onClick={() => setMobileMenuOpen(false)}>
                  Start a Conversation
                </a>
                <a href="https://irtiqa-revenue-partner-workspace.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sub)', textDecoration: 'none', marginTop: '8px' }} onClick={() => setMobileMenuOpen(false)}>
                  Partner OS ↗
                </a>
                <span style={{ fontSize: '10px', color: 'var(--sub)', letterSpacing: '0.04em', textAlign: 'center' }}>
                  No commitment · 1 hour · Revenue map included
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
