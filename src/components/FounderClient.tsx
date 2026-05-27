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
        {/* ─── HERO SECTION ─── */}
        <section id="founder-hero" style={{ padding: '180px 24px 100px', position: 'relative', overflow: 'hidden', background: 'var(--w)' }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(22,65,245,0.04) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="reveal" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 14px',
              border: '1px solid var(--rule)',
              borderRadius: '20px',
              fontSize: '10.5px',
              fontWeight: 700,
              color: 'var(--b)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '28px',
              backgroundColor: 'var(--w2)'
            }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--b)', borderRadius: '50%' }}></span>
              Personal Profile
            </div>
            
            <h1 style={{ 
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.5rem, 5.5vw, 5.2rem)', 
              fontWeight: 400,
              lineHeight: 1.08, 
              letterSpacing: '-0.025em',
              marginBottom: '32px',
              color: 'var(--ink)'
            }}>
              I don’t look at companies as logos. <br />
              I look at them as <em style={{ color: 'var(--b)', fontStyle: 'italic' }}>operating systems</em>.
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', 
              maxWidth: '680px', 
              lineHeight: 1.65, 
              color: 'var(--sub)', 
              fontFamily: 'var(--ui)',
              marginBottom: '48px',
              fontWeight: 300
            }}>
              I’m Alok Mishra. I spent the last few years launching ventures, experimenting with media models, and designing digital storefronts. What I realized is that most businesses don't fail because they lack demand — they fail because their plumbing is broken.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="https://www.linkedin.com/in/alokmishra-" 
                className="btn-fill" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', fontWeight: 600 }}
              >
                Connect on LinkedIn
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="/audit" 
                className="btn-outline"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', fontWeight: 600 }}
              >
                Book a Free Audit
              </a>
            </div>
          </div>
        </section>

        {/* ─── THE SPARK ─── */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid var(--rule)', background: 'var(--w2)' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            <div className="reveal">
              <span className="section-label" style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sub)', marginBottom: '16px' }}>
                The Catalyst
              </span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ink)', marginBottom: '28px' }}>
                Growth is a plumbing problem.
              </h2>
            </div>
            
            <div className="reveal" style={{ display: 'grid', gap: '24px', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--sub)', fontFamily: 'var(--ui)', fontWeight: 300 }}>
              <p>
                My realization about systems did not happen in a corporate boardroom or during a trendy AI conference. It came from building, failing, and scaling a variety of ventures where I kept watching the exact same invisible issue destroy growth from the inside.
              </p>
              
              <p>
                I was launching creator platforms, creative agencies, and e-commerce setups: <strong>Tracr</strong>, <strong>Hasten Studio</strong>, <strong>Chalice Marketing</strong>, and storefronts like <strong>Animize Store</strong>. I built newsletter concepts and designed audience-growth ecosystems. 
              </p>

              <blockquote style={{ 
                borderLeft: '3px solid var(--b)', 
                padding: '16px 24px', 
                margin: '20px 0', 
                fontFamily: 'var(--serif)', 
                fontSize: '1.35rem', 
                fontStyle: 'italic', 
                color: 'var(--ink)',
                background: 'var(--w)',
                borderRadius: '0 8px 8px 0',
                borderRight: '1px solid var(--rule)',
                borderTop: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)'
              }}>
                "Across all of them, the lesson was clear: most companies don't lose because they lack demand — they lose because their internal piping is weak."
              </blockquote>

              <p>
                Founders were spending thousands on ads, yet taking four hours to reply to inbound leads. Teams were coordinating sales manually across messy personal WhatsApp chats. CRMs sat empty, and follow-ups were handled entirely by human memory. Every time sales increased, the first response was to hire more operators, which just piled more chaos on top of a broken structure.
              </p>
              
              <p>
                That’s when I stopped seeing businesses as "brands" and started seeing them as software layouts. The companies that scaled sustainably weren't just better at marketing — they had better infrastructure, faster response times, and automated operational intelligence. 
              </p>

              <p>
                That is why I started <a href="https://irtiqa.ai" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--b)', textDecoration: 'underline', fontWeight: 500 }}>Irtiqa AI</a>. Not to sell basic chatbot setups or template Zapier scripts, but to compile robust revenue operations infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* ─── BACKGROUND ─── */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid var(--rule)', background: 'var(--w)' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '48px' }}>
              <span className="section-label" style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sub)', marginBottom: '16px' }}>
                The Trajectory
              </span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ink)' }}>
                Unconventional by design.
              </h2>
            </div>

            <div className="reveal" style={{ display: 'grid', gap: '28px', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--sub)', fontFamily: 'var(--ui)', fontWeight: 300 }}>
              <p>
                I was never interested in following a linear career path. I spent my time studying digital influence, testing branding narratives, building newsletters, and launching ventures from zero.
              </p>
              
              <p>
                Over time, I naturally gravitated toward systems strategy. My strength was never just "writing code" or "building tools"—it was understanding how human behavior, communication channels, database updates, and growth systems link together.
              </p>

              <p>
                I became deeply obsessed with **leverage**. I wanted to find out how a lean team of 2-3 people, supported by the right automation architecture, could process lead flows and scale operations that typically require a staff of 20.
              </p>
            </div>
          </div>
        </section>

        {/* ─── PHILOSOPHY ─── */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid var(--rule)', background: 'var(--w2)' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            <div className="reveal">
              <span className="section-label" style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sub)', marginBottom: '16px' }}>
                The Stance
              </span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ink)', marginBottom: '24px' }}>
                Headcount is a lagging indicator of system health.
              </h2>
            </div>

            <div className="reveal" style={{ display: 'grid', gap: '24px', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--sub)', fontFamily: 'var(--ui)', fontWeight: 300 }}>
              <p>
                Adding more operators onto a weak workflow doesn’t make it scalable; it just makes it louder.
              </p>
              
              <p>
                The businesses that scale cleanly over the next decade are the ones that think like software. We let code absorb the boring, repetitive tasks—qualifying leads, updating pipelines, sending SMS notifications, and syncing schedules. 
              </p>

              <p>
                This leaves humans free to do the high-value work: creative strategy, relationship building, leadership, and making the actual commercial decisions. The future belongs to teams that leverage systems, not just manpower.
              </p>
            </div>
          </div>
        </section>

        {/* ─── BEYOND Startups ─── */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid var(--rule)', background: 'var(--w)' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '48px' }}>
              <span className="section-label" style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sub)', marginBottom: '16px' }}>
                Worldview
              </span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--ink)' }}>
                Pattern recognition.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }} className="reveal">
              <div style={{ padding: '24px', borderLeft: '2px solid var(--rule)' }}>
                <h4 style={{ fontSize: '13.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--b)', marginBottom: '12px' }}>
                  Psychology & Mindsets
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--sub)', margin: 0 }}>
                  I study how people think and how culture shifts. Systems should be designed around human psychology and natural workflows, not the other way around.
                </p>
              </div>

              <div style={{ padding: '24px', borderLeft: '2px solid var(--rule)' }}>
                <h4 style={{ fontSize: '13.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--b)', marginBottom: '12px' }}>
                  Cinematic Worldbuilding
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--sub)', margin: 0 }}>
                  I love creating narrative universes and emotional concepts. Storytelling is the ultimate form of leverage in a crowded digital space.
                </p>
              </div>

              <div style={{ padding: '24px', borderLeft: '2px solid var(--rule)' }}>
                <h4 style={{ fontSize: '13.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--b)', marginBottom: '12px' }}>
                  Matrices & Connections
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--sub)', margin: 0 }}>
                  I view operations as an interconnected matrix. By finding patterns early, I can usually spot exactly where a company is losing prospects in under ten minutes.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ textAlign: 'center', marginTop: '80px', paddingTop: '56px', borderTop: '1px solid var(--rule)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', fontStyle: 'italic', color: 'var(--ink)', maxWidth: '680px', margin: '0 auto 40px', lineHeight: 1.45 }}>
                "Technology shouldn't remove humanity from business — it should remove friction so humans can actually be human."
              </p>
              <a 
                href="/audit" 
                className="btn-fill"
                style={{ display: 'inline-flex', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12.5px', padding: '16px 36px' }}
              >
                Let’s audit your system
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
