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

  return (
    <div className="App" style={{ backgroundColor: 'var(--w)', color: 'var(--ink)' }}>
      <ProgressBar />
      <Navigation navHeight={navHeight} />
      
      <main className="lux-main">
        {/* ─── HERO SECTION ─── */}
        <section id="founder-hero" style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(22,65,245,0.06) 0%, rgba(124,58,237,0.03) 50%, transparent 70%)',
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
              Founder & Revenue Architect
            </div>
            
            <h1 className="hero-h1" style={{ 
              fontSize: 'clamp(44px, 7.5vw, 92px)', 
              margin: '0 auto 24px', 
              lineHeight: 1.02, 
              fontFamily: 'var(--serif)', 
              fontWeight: 400, 
              color: 'var(--ink)',
              letterSpacing: '-0.025em'
            }}>
              Alok Mishra
            </h1>
            
            <p className="hero-sub" style={{ 
              fontSize: 'clamp(16px, 1.8vw, 20px)', 
              maxWidth: '680px', 
              lineHeight: 1.65, 
              margin: '0 auto 48px', 
              color: 'var(--sub)', 
              fontFamily: 'var(--ui)',
              fontWeight: 300
            }}>
              Building the infrastructure serious businesses rely on to eliminate silent revenue leakage, optimize operations, and scale without chaos.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://www.linkedin.com/in/alokmishra-" 
                className="btn-fill" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600 }}
              >
                Connect on LinkedIn
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="/audit" 
                className="btn-outline"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600 }}
              >
                Book Growth Audit
              </a>
            </div>
          </div>
        </section>

        {/* ─── PHILOSOPHY SECTION ─── */}
        <section id="founder-philosophy" style={{ padding: '120px 24px', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--w2)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="founder-grid-container">
            <div className="reveal d1 left-col">
              <h2 className="problem-title" style={{ 
                fontSize: 'clamp(32px, 4vw, 48px)', 
                lineHeight: 1.1, 
                fontFamily: 'var(--serif)', 
                fontWeight: 400, 
                color: 'var(--ink)',
                margin: 0,
                position: 'sticky',
                top: '120px'
              }}>
                The Philosophy: <br/>
                <span style={{ fontStyle: 'italic', color: 'var(--b)' }}>No Fluff. No Templates.</span>
              </h2>
            </div>
            
            <div className="reveal d2 right-col" style={{ display: 'grid', gap: '28px', fontSize: '15.5px', lineHeight: 1.8, color: 'var(--sub)', fontWeight: 300, fontFamily: 'var(--ui)' }}>
              <p>
                In the era of AI hype, most service providers offer simple chatbot setups or cookie-cutter Zapier templates. They treat the symptoms of growth friction while ignoring the underlying cause: <strong>broken revenue machinery</strong>.
              </p>
              
              <p>
                As the founder of Irtiqa AI, my mission is to build true <strong>Revenue Operations Infrastructure</strong>. This means designing and operating multi-agent AI ecosystems that seamlessly integrate with your CRM, automate lead intake, route tasks intelligently, and monitor pipeline health. 
              </p>
              
              <p>
                We look at your commercial metrics first. Before writing a line of code or deploying a single model, we identify exactly where leads are falling through the cracks, where your team is wasting manual effort, and where conversion rates are lagging. 
              </p>
              
              <blockquote style={{ 
                borderLeft: '4px solid var(--b)', 
                padding: '24px 32px', 
                margin: '24px 0', 
                fontFamily: 'var(--serif)', 
                fontSize: '24px', 
                fontStyle: 'italic', 
                color: 'var(--ink)',
                background: 'var(--w)',
                borderRadius: '0 12px 12px 0',
                boxShadow: '0 4px 20px rgba(12, 12, 11, 0.02)',
                borderRight: '1px solid var(--rule)',
                borderTop: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)'
              }}>
                "We don't sell tools. We build the infrastructure that allows businesses to double their capacity without doubling their headcount."
              </blockquote>
              
              <p>
                Whether you are running a high-ticket legal practice, a specialized medical clinic, a B2B SaaS platform, or a growing real estate development firm, we build the custom engine that keeps your momentum moving 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* ─── STATS SECTION ─── */}
        <section id="founder-stats" style={{ padding: '100px 24px', background: 'var(--w)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '24px' 
            }}>
              <div className="reveal d1 stat-card">
                <div className="stat-val">5+</div>
                <div className="stat-desc">Years Architecture</div>
              </div>
              <div className="reveal d2 stat-card">
                <div className="stat-val">$10M+</div>
                <div className="stat-desc">Leaked Revenue Tracked</div>
              </div>
              <div className="reveal d3 stat-card">
                <div className="stat-val">100%</div>
                <div className="stat-desc">Operated Infrastructure</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .founder-grid-container {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          gap: 64px;
        }
        
        .stat-card {
          padding: 36px 24px;
          background: var(--w2);
          border-radius: 16px;
          border: 1px solid var(--rule);
          text-align: center;
          transition: transform 0.3s var(--ease), border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
          cursor: default;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(22, 65, 245, 0.2);
          box-shadow: 0 20px 48px rgba(12, 12, 11, 0.04);
        }
        
        .stat-val {
          font-size: 56px;
          font-family: var(--serif);
          font-weight: 400;
          color: var(--b);
          line-height: 1;
          margin-bottom: 12px;
        }
        
        .stat-desc {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--sub);
          font-family: var(--ui);
        }

        @media (max-width: 868px) {
          .founder-grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .problem-title {
            position: relative !important;
            top: 0 !important;
          }
        }
        
        @media (max-width: 640px) {
          #founder-hero {
            padding: 100px 16px 48px !important;
          }
          #founder-philosophy {
            padding: 60px 16px !important;
          }
          #founder-stats {
            padding: 48px 16px !important;
          }
          .founder-grid-container {
            gap: 28px !important;
          }
          .stat-card {
            padding: 24px 16px !important;
            border-radius: 12px !important;
          }
          .stat-val {
            font-size: 40px !important;
            margin-bottom: 8px !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}
