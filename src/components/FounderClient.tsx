"use client";

import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import useScrollReveal from '../hooks/useScrollReveal';
import useMobileLenis from '../hooks/useMobileLenis';
import useLuxuryMotion from '../hooks/useLuxuryMotion';

export default function FounderClient() {
  const [navHeight, setNavHeight] = useState(68);
  
  useEffect(() => {
    const handleScroll = () => {
      const newHeight = window.scrollY > 60 ? 58 : 68;
      setNavHeight(newHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useScrollReveal();
  useMobileLenis();
  useLuxuryMotion();

  const ventures = [
    "Revenue Infrastructure",
    "Agentic Automation",
    "Creative Direction",
    "Film Production",
    "Digital Brand Strategy",
    "E-Commerce Ventures",
    "Media & Publishing",
    "Systems Architecture",
    "Product Strategy"
  ];

  return (
    <div className="App" style={{ backgroundColor: 'var(--w)', color: 'var(--ink)' }}>
      <ProgressBar />
      <Navigation navHeight={navHeight} />
      
      <main className="lux-main">
        {/* ─── HERO SECTION ─── */}
        <section id="founder-hero" style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(22,65,245,0.04) 0%, rgba(124,58,237,0.01) 50%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              border: '1px solid var(--rule)',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--b)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '24px',
              backgroundColor: 'var(--w2)'
            }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--b)', borderRadius: '50%' }}></span>
              Co-Founder Profiles
            </div>
            
            <h1 className="hero-h1" style={{ 
              fontSize: 'clamp(44px, 7.5vw, 84px)', 
              margin: '0 auto 20px', 
              lineHeight: 1.02, 
              fontFamily: 'var(--serif)', 
              fontWeight: 400, 
              color: 'var(--ink)',
              letterSpacing: '-0.025em'
            }}>
              The Founders
            </h1>
            
            <p className="hero-sub" style={{ 
              fontSize: 'clamp(15px, 1.6vw, 18px)', 
              maxWidth: '600px', 
              lineHeight: 1.65, 
              margin: '0 auto 40px', 
              color: 'var(--sub)', 
              fontFamily: 'var(--ui)',
              fontWeight: 300
            }}>
              We combine startup builder experience with deep business consulting expertise to design and deploy operations infrastructure that stops silent revenue leakage.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#founders" 
                className="btn-fill" 
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', fontWeight: 600 }}
              >
                Meet the Founders
              </a>
              <a 
                href="/audit" 
                className="btn-outline"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', fontWeight: 600 }}
              >
                Book An Audit
              </a>
            </div>
          </div>
        </section>

        {/* ─── CO-FOUNDERS SECTION ─── */}
        <section id="founders" style={{ padding: '40px 24px 120px', borderTop: '1px solid var(--rule)', background: 'var(--w)' }}>
          <div className="founder-grid-container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Card 1: Alok Mishra */}
            <div className="reveal d1" style={{
              background: 'rgba(244, 243, 238, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(12, 12, 11, 0.08)',
              borderRadius: '16px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: '0 8px 32px rgba(12, 12, 11, 0.015)'
            }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--b)', background: 'rgba(22,65,245,0.08)', padding: '4px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px' }}>Operations & Business</span>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '4px' }}>Alok Mishra</h2>
                <span style={{ fontSize: '13px', color: 'var(--sub)' }}>Co-Founder & Operations</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '16px 0', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--sub)' }}>Age</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>19 Years</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--sub)' }}>Startup Experience</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>9 Previous Ventures</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--sub)' }}>Location</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>New Delhi, India</span>
                </div>
              </div>

              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--sub)', fontWeight: 300 }}>
                Alok designs custom operations infrastructure, database automations, and CRM pipelines. His background building 9 previous ventures helps translate business needs into production software.
              </p>

              <a 
                href="https://www.linkedin.com/in/alokmishra-" 
                className="btn-outline" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginTop: 'auto', padding: '10px 16px', fontSize: '11px', textAlign: 'center', justifyContent: 'center', width: '100%' }}
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Card 2: Georgy Steponav */}
            <div className="reveal d2" style={{
              background: 'rgba(244, 243, 238, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(12, 12, 11, 0.08)',
              borderRadius: '16px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: '0 8px 32px rgba(12, 12, 11, 0.015)'
            }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--b)', background: 'rgba(22,65,245,0.08)', padding: '4px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px' }}>Consultation & Audits</span>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '4px' }}>Georgy Steponav</h2>
                <span style={{ fontSize: '13px', color: 'var(--sub)' }}>Co-Founder & Consultation</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '16px 0', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--sub)' }}>Age</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>19 Years</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--sub)' }}>Consulting Experience</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>100+ Businesses Audited</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--sub)' }}>Location</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Global / Remote</span>
                </div>
              </div>

              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--sub)', fontWeight: 300 }}>
                Georgy handles client consultation and runs our complimentary audit calls. He has personally consulted for 100+ businesses, diagnosing pipeline friction points at scale.
              </p>

              <a 
                href="#book" 
                className="btn-fill" 
                style={{ marginTop: 'auto', padding: '10px 16px', fontSize: '11px', textAlign: 'center', justifyContent: 'center', width: '100%' }}
              >
                Book Audit With Georgy
              </a>
            </div>

          </div>
        </section>

        {/* ─── VENTURES GRID SECTION ─── */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid var(--rule)', background: 'var(--w2)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="reveal" style={{ 
              fontFamily: 'var(--serif)', 
              fontSize: 'clamp(28px, 3.5vw, 44px)', 
              fontWeight: 400, 
              color: 'var(--ink)',
              marginBottom: '40px'
            }}>
              Areas of Operation & Building
            </h2>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {ventures.map((venture, i) => (
                <div 
                  key={i} 
                  style={{
                    padding: '10px 20px',
                    background: 'var(--w)',
                    border: '1px solid var(--rule)',
                    borderRadius: '30px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--sub)',
                    transition: 'all 0.3s var(--ease)',
                    cursor: 'default'
                  }}
                  className="venture-chip"
                >
                  {venture}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .founder-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }
        
        .venture-chip:hover {
          color: var(--b);
          border-color: rgba(22, 65, 245, 0.25);
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22, 65, 245, 0.05);
        }

        @media (max-width: 868px) {
          .founder-grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        @media (max-width: 640px) {
          .founder-grid-container {
            gap: 32px !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}
