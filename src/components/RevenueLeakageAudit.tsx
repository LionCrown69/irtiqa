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
      
      <main style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 80px' }}>
        
        {/* HERO SECTION */}
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              border: '1px solid rgba(22,65,245,0.3)', 
              borderRadius: '20px',
              color: 'var(--b)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            For Mid-to-Large Corporations & MNCs
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '24px' }}
          >
            Identify Your Revenue Leakage.<br />
            <em style={{ color: 'var(--b)', fontStyle: 'italic' }}>Seal it with Autonomous Infrastructure.</em>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6 }}
          >
            Our complimentary, deep-dive operations audit uncovers exactly where your sales and support workflows are losing capital. Then, we deploy the Sovereign AI systems to fix it.
          </motion.p>
        </section>

        {/* VEO VIDEO PLACEHOLDER */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginBottom: '100px' }}
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
              <div style={{ width: '80px', height: '80px', background: 'var(--b)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', cursor: 'pointer', boxShadow: '0 0 40px rgba(22,65,245,0.4)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--w)" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--ui)', fontWeight: 500 }}>Watch: How We Audit Enterprise Revenue</h3>
            </div>
          </div>
        </motion.section>

        {/* THE METHODOLOGY (GEO OPTIMIZATION) */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--serif)', textAlign: 'center', marginBottom: '60px' }}>Our 3-Phase Audit Methodology</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', title: 'Data Pipeline Analysis', desc: 'We integrate with your CRM (Salesforce, HubSpot) to map the lifecycle of every lead, identifying exact drop-off points and response-time delays.' },
              { step: '02', title: 'The Leakage Report', desc: 'You receive a comprehensive financial breakdown of capital lost to manual friction, missed follow-ups, and operational inefficiencies.' },
              { step: '03', title: 'Infrastructure Deployment', desc: 'We architect and deploy the private AI infrastructure required to automate those specific bottlenecks, creating a closed-loop revenue system.' }
            ].map((phase) => (
              <div key={phase.step} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--rule)', borderRadius: '16px', padding: '40px' }}>
                <span style={{ color: 'var(--b)', fontSize: '1.2rem', fontWeight: 600, display: 'block', marginBottom: '16px' }}>Phase {phase.step}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{phase.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ textAlign: 'center', background: 'var(--b)', borderRadius: '24px', padding: '80px 20px', color: 'var(--w)' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--serif)', marginBottom: '24px' }}>Ready to Stop the Leakage?</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px' }}>
            Book your confidential strategy session today. We only take on 4 enterprise audits per month to ensure deep analytical rigor.
          </p>
          <a href="https://calendly.com/irtiqaaiagency/30-min-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'var(--w)', color: 'var(--b)', padding: '16px 40px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
            Request Free Audit
          </a>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default RevenueLeakageAudit;
