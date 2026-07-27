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
    { label: 'What We Do', href: '/#what-we-do' },
    { label: 'Partnerships', href: '/#partnerships' },
    { label: 'Cohort 02', href: '/cohort-02' },
    { label: 'Companies', href: '/#companies' },
    { label: 'Insights', href: '/blog' },
    { label: 'About', href: '/founder' }
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
        <a href="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <BrandLogo size="sm" showWordmark={true} />
        </a>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="nav-btn-desktop">
            <a href="/cohort-02" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none', padding: '8px 14px', border: '1px solid rgba(12,12,11,0.15)', borderRadius: '4px', transition: 'all 0.2s ease' }}>
              Apply to Cohort 02
            </a>
            <a href="/#work-with-irtiqa" className="nav-btn">
              <span className="nav-btn-dot" style={{ backgroundColor: '#1641F5', boxShadow: '0 0 8px #1641F5' }}></span>
              Work With Irtiqa
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
                <a href="/cohort-02" className="btn-outline" style={{ width: '100%', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                  Apply to Cohort 02
                </a>
                <a href="/#work-with-irtiqa" className="btn-fill mobile-drawer-cta" onClick={() => setMobileMenuOpen(false)}>
                  Work With Irtiqa
                </a>
                <span style={{ fontSize: '10px', color: 'var(--sub)', letterSpacing: '0.04em', textAlign: 'center' }}>
                  Consulting · AI Infrastructure · Operating Partnerships
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
