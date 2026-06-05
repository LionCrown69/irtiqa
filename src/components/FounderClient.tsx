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
              Founding Leadership
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

        {/* ─── LEADERSHIP SECTION ─── */}
        <section id="founders" style={{ padding: '40px 24px 120px', borderTop: '1px solid var(--rule)', background: 'var(--w)' }}>
          <div className="founder-grid-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Card 1: Alok Mishra */}
            <div className="founder-card reveal d1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="founder-avatar" style={{ background: 'linear-gradient(135deg, var(--ink) 0%, var(--b) 100%)' }}>
                  AM
                </div>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--b)', background: 'var(--b-lo)', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '6px' }}>Management & Process</span>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '2px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>Alok Mishra</h2>
                  <span style={{ fontSize: '13px', color: 'var(--sub)', fontWeight: 500 }}>Founder & Executive Director</span>
                </div>
              </div>
              
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--sub)', fontWeight: 300 }}>
                Alok handles executive management, business operations, and client process SOPs at Irtiqa. A founder of 9 previous ventures, he evaluates workflows, makes strategic decisions, and coordinates our growing, fluid team of 50+ specialists to ensure seamless client delivery.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', marginBottom: '8px' }}>
                <span className="founder-pill active">
                  <span style={{ width: '4px', height: '4px', background: 'var(--b)', borderRadius: '50%' }}></span>
                  9 Startups Built
                </span>
                <span className="founder-pill active">
                  <span style={{ width: '4px', height: '4px', background: 'var(--b)', borderRadius: '50%' }}></span>
                  50+ Fluid Team
                </span>
                <span className="founder-pill">
                  New Delhi
                </span>
              </div>

              <a 
                href="https://www.linkedin.com/in/alokmishra-" 
                className="btn-outline" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '12px 16px', fontSize: '11px', textAlign: 'center', justifyContent: 'center', width: '100%', borderRadius: '8px' }}
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Card 2: Georgy Steponav */}
            <div className="founder-card reveal d2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="founder-avatar" style={{ background: 'linear-gradient(135deg, var(--sub) 0%, var(--ink) 100%)' }}>
                  GS
                </div>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--b)', background: 'var(--b-lo)', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '6px' }}>Research & Consultation</span>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '2px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>Georgy Steponav</h2>
                  <span style={{ fontSize: '13px', color: 'var(--sub)', fontWeight: 500 }}>Co-founder & Strategic Director</span>
                </div>
              </div>
              
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--sub)', fontWeight: 300 }}>
                Georgy drives Irtiqa’s strategic research and business consultations. Having diagnosed bottlenecks and consulted for over 100 companies, he leads our audit discovery calls and investigates market processes to craft custom growth blueprints.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', marginBottom: '8px' }}>
                <span className="founder-pill active">
                  <span style={{ width: '4px', height: '4px', background: 'var(--b)', borderRadius: '50%' }}></span>
                  100+ Audited Firms
                </span>
                <span className="founder-pill active">
                  <span style={{ width: '4px', height: '4px', background: 'var(--b)', borderRadius: '50%' }}></span>
                  Poland
                </span>
                <span className="founder-pill">
                  19 y/o
                </span>
              </div>

              <a 
                href="#book" 
                className="btn-fill" 
                style={{ padding: '12px 16px', fontSize: '11px', textAlign: 'center', justifyContent: 'center', width: '100%', borderRadius: '8px' }}
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
        
        .founder-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 250, 248, 0.6) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(12, 12, 11, 0.05);
          border-radius: 20px;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 32px rgba(12, 12, 11, 0.02),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        
        .founder-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--b) 0%, #7c3aed 100%);
          opacity: 0;
          transition: opacity 0.4s var(--ease);
        }
        
        .founder-card:hover {
          transform: translateY(-6px);
          border-color: rgba(22, 65, 245, 0.15);
          box-shadow: 0 24px 48px -12px rgba(22, 65, 245, 0.06),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        
        .founder-card:hover::before {
          opacity: 1;
        }

        .founder-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--w);
          font-family: var(--ui);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 12px rgba(12, 12, 11, 0.08);
          position: relative;
          flex-shrink: 0;
        }

        .founder-avatar::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 1px solid rgba(22, 65, 245, 0.12);
          pointer-events: none;
        }

        .founder-pill {
          font-size: 11px;
          font-weight: 500;
          color: var(--sub);
          background: rgba(236, 234, 226, 0.4);
          border: 1px solid rgba(12, 12, 11, 0.04);
          padding: 5px 12px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s var(--ease);
        }
        
        .founder-pill.active {
          color: var(--b);
          background: var(--b-lo);
          border-color: rgba(22, 65, 245, 0.1);
        }
        
        .founder-card:hover .founder-pill.active {
          background: rgba(22, 65, 245, 0.08);
          border-color: rgba(22, 65, 245, 0.18);
          transform: translateY(-1px);
        }
        
        .founder-card:hover .founder-pill:not(.active) {
          background: rgba(236, 234, 226, 0.75);
          border-color: rgba(12, 12, 11, 0.06);
          color: var(--ink);
          transform: translateY(-1px);
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
