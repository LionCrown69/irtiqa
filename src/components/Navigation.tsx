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
            <li key={link.label}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="nav-btn-desktop">
            <a href="#book" className="nav-btn">
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
                <a href="#book" className="btn-fill mobile-drawer-cta" onClick={() => setMobileMenuOpen(false)}>
                  Start a Conversation
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
