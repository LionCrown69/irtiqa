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
    <div className="App">
      <ProgressBar />
      <Navigation navHeight={navHeight} />
      
      <main className="lux-main">
        <section id="founder-hero" style={{ padding: '140px 24px 80px', position: 'relative', overflow: 'hidden', background: 'var(--w)' }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(22,65,245,0.06) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div className="section-chip" style={{ display: 'inline-flex', marginBottom: '24px' }}>Founder & Revenue Systems Architect</div>
            
            <h1 className="hero-h1" style={{ fontSize: 'clamp(44px, 7vw, 90px)', margin: '0 auto 28px', lineHeight: 1.05, fontFamily: 'var(--serif)', fontWeight: 400, color: 'var(--ink)' }}>
              Alok Mishra
            </h1>
            
            <p className="hero-sub" style={{ fontSize: 'clamp(15px, 1.8vw, 19px)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '40px', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
              Building the infrastructure serious businesses rely on to eliminate silent revenue leakage, optimize operations, and scale without chaos.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://www.linkedin.com/in/alokmishra-" 
                className="btn-fill" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Connect on LinkedIn
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="/audit" 
                className="btn-outline"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Book Growth Audit
              </a>
            </div>
          </div>
        </section>

        <section id="founder-philosophy" style={{ padding: '80px 24px', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--w2)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="reveal d1">
              <h2 className="problem-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '32px', textAlign: 'left', fontFamily: 'var(--serif)', fontWeight: 400, color: 'var(--ink)' }}>
                The Philosophy: <br/><em>No Fluff. No Templates.</em>
              </h2>
            </div>
            
            <div className="reveal d2" style={{ display: 'grid', gap: '28px', fontSize: '15px', lineHeight: 1.8, color: 'var(--sub)', fontWeight: 300, fontFamily: 'var(--ui)' }}>
              <p>
                In the era of AI hype, most service providers offer simple chatbot setups or cookie-cutter Zapier templates. They treat the symptoms of growth friction while ignoring the underlying cause: **broken revenue machinery**.
              </p>
              
              <p>
                As the founder of Irtiqa AI, my mission is to build true **Revenue Operations Infrastructure**. This means designing and operating multi-agent AI ecosystems that seamlessly integrate with your CRM, automate lead intake, route tasks intelligently, and monitor pipeline health. 
              </p>
              
              <p>
                We look at your commercial metrics first. Before writing a line of code or deploying a single model, we identify exactly where leads are falling through the cracks, where your team is wasting manual effort, and where conversion rates are lagging. 
              </p>
              
              <blockquote style={{ borderLeft: '3px solid var(--b)', paddingLeft: '24px', margin: '24px 0', fontFamily: 'var(--serif)', fontSize: '22px', fontStyle: 'italic', color: 'var(--ink)' }}>
                "We don't sell tools. We build the infrastructure that allows businesses to double their capacity without doubling their headcount."
              </blockquote>
              
              <p>
                Whether you are running a high-ticket legal practice, a specialized medical clinic, a B2B SaaS platform, or a growing real estate development firm, we build the custom engine that keeps your momentum moving 24/7.
              </p>
            </div>
          </div>
        </section>

        <section id="founder-stats" style={{ padding: '80px 24px', background: 'var(--w)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div className="reveal d1" style={{ padding: '24px', background: 'var(--w2)', borderRadius: '12px', border: '1px solid var(--rule)', textAlign: 'center' }}>
              <div className="rcard-val" style={{ fontSize: '48px', color: 'var(--b)' }}>5+</div>
              <div className="rcard-desc" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '8px' }}>Years Architecture</div>
            </div>
            <div className="reveal d2" style={{ padding: '24px', background: 'var(--w2)', borderRadius: '12px', border: '1px solid var(--rule)', textAlign: 'center' }}>
              <div className="rcard-val" style={{ fontSize: '48px', color: 'var(--b)' }}>$10M+</div>
              <div className="rcard-desc" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '8px' }}>Leaked Revenue Tracked</div>
            </div>
            <div className="reveal d3" style={{ padding: '24px', background: 'var(--w2)', borderRadius: '12px', border: '1px solid var(--rule)', textAlign: 'center' }}>
              <div className="rcard-val" style={{ fontSize: '48px', color: 'var(--b)' }}>100%</div>
              <div className="rcard-desc" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '8px' }}>Operated Infrastructure</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
