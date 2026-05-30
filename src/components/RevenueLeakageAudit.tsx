import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const RevenueLeakageAudit: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="audit-page" style={{ backgroundColor: '#0c0c0b', color: '#fdfdfc', minHeight: '100vh' }}>
      <Navigation navHeight={68} />
      
      <main className="audit-content" style={{ paddingTop: '80px', paddingBottom: '40px', maxWidth: '1200px', margin: '0 auto', padding: '100px 20px 40px' }}>
        
        {/* HERO SECTION */}
        <section className="audit-hero" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
            style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              border: '1px solid rgba(22,65,245,0.3)', 
              borderRadius: '20px',
              color: 'var(--b)',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Free, One Hour, Maximum Depth
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '20px' }}
          >
            Identify Silent Revenue Leakage.<br />
            <em style={{ color: 'var(--b)', fontStyle: 'italic' }}>Fix it with revenue operations infrastructure.</em>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-sub"
            style={{ fontSize: '1.1rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto 30px', lineHeight: 1.5 }}
          >
            Our complimentary audit call maps your full revenue journey and isolates root causes behind missed leads. Get a personalized Growth Report with the minimum viable infrastructure to fix it.
          </motion.p>
        </section>

        {/* VEO VIDEO PLACEHOLDER - Hidden on mobile */}
        <motion.section 
          className="video-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginBottom: '60px', display: 'none' }}
        >
          <div style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            background: 'linear-gradient(145deg, rgba(22,65,245,0.1) 0%, rgba(12,12,11,1) 100%)',
            border: '1px solid var(--rule)',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--b)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', cursor: 'pointer', boxShadow: '0 0 40px rgba(22,65,245,0.4)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--w)" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 style={{ fontSize: '1rem', fontFamily: 'var(--ui)', fontWeight: 500 }}>Watch: How We Audit</h3>
            </div>
          </div>
        </motion.section>

        {/* THE METHODOLOGY */}
        <section className="methodology" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--serif)', textAlign: 'center', marginBottom: '40px' }}>The 3-Phase Engagement</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Audit Call', desc: 'Map your revenue journey end-to-end to diagnose leaks.' },
              { step: '02', title: 'Growth Report', desc: 'Receive root cause analysis and infrastructure blueprints.' },
              { step: '03', title: 'Build + Operate', desc: 'Deploy optimized workflows and scale your operation.' }
            ].map((phase) => (
              <div key={phase.step} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '24px' }}>
                <span style={{ color: 'var(--b)', fontSize: '1rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>Phase {phase.step}</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{phase.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.5, fontSize: '0.95rem' }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section" style={{ textAlign: 'center', background: 'var(--b)', borderRadius: '16px', padding: '50px 20px', color: 'var(--w)' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--serif)', marginBottom: '16px' }}>Ready to Stop the Leakage?</h2>
          <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '500px', margin: '0 auto 30px' }}>
            Book your audit call to get clarity on what to build and what to fix.
          </p>
          <a href="/#book" style={{ display: 'inline-block', background: 'var(--w)', color: 'var(--b)', padding: '14px 30px', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
            Book Free Audit Call
          </a>
        </section>

      </main>
      
      <Footer />
      <style>{`
        @media (min-width: 768px) {
          .video-section { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default RevenueLeakageAudit;
