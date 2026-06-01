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
            Free, One Hour, Maximum Depth
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '24px' }}
          >
            Identify Silent Revenue Leakage.<br />
            <em style={{ color: 'var(--b)', fontStyle: 'italic' }}>Fix it with revenue operations infrastructure.</em>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6 }}
          >
            Our complimentary audit call maps your full revenue journey — from first contact to retention — and isolates the root causes behind missed leads, slow follow-up, and broken handoffs. Within 24 hours, you receive a personalized Growth Report with the minimum viable infrastructure to fix it.
          </motion.p>
        </section>

        {/* DELIVERABLES SHOWCASE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: '100px' }}
        >
          <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--serif)', textAlign: 'center', marginBottom: '48px', color: '#fdfdfc' }}>
            What you receive in the <em style={{ color: 'var(--b)', fontStyle: 'italic' }}>Growth Report</em>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                num: '01',
                title: 'Commercial Leakage Model',
                desc: 'A complete financial audit mapping slow response speeds, manual data entry points, and missing follow-up sequences back to actual missed pipeline value.',
                points: ['Response speed impact estimates', 'Manual admin cost calculations', 'Handoff drop-off mapping']
              },
              {
                num: '02',
                title: 'Systems Infrastructure Blueprint',
                desc: 'A customized architectural design of your future revenue stack — showing exactly how CRM pipelines, routing logic, and AI agents should connect.',
                points: ['Custom pipeline layout', 'Routing & ownership flows', 'AI agent integration map']
              },
              {
                num: '03',
                title: 'Execution Roadmap',
                desc: 'A phased implementation plan detailing the minimum viable infrastructure to deploy first, and the optimization steps needed to scale capacity.',
                points: ['Immediate high-impact fixes', 'Phased build roadmap', 'Resource & tech stack scoping']
              }
            ].map((d) => (
              <div key={d.num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }} className="deliverable-card">
                <span style={{ color: 'var(--b)', fontSize: '0.9rem', fontWeight: 600, display: 'inline-block', padding: '4px 10px', background: 'rgba(22,65,245,0.1)', borderRadius: '999px', marginBottom: '20px' }}>
                  {d.num}
                </span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', fontWeight: 500, color: '#fdfdfc' }}>{d.title}</h3>
                <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>{d.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {d.points.map((p, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', opacity: 0.85 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--b)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <style>{`
          @media (max-width: 640px) {
            .audit-page main {
              padding: 92px 16px 48px !important;
            }
            .audit-page h1 {
              font-size: 2.2rem !important;
              line-height: 1.15 !important;
              margin-bottom: 16px !important;
            }
            .audit-page p {
              font-size: 1.05rem !important;
            }
            .deliverable-card {
              padding: 24px 20px !important;
            }
          }
        `}</style>

        {/* THE METHODOLOGY (GEO OPTIMIZATION) */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--serif)', textAlign: 'center', marginBottom: '60px' }}>The 3-Phase Engagement</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', title: 'Audit Call', desc: 'We map your revenue journey end-to-end and diagnose where leads stall, disappear, or churn — across channels, handoffs, and workflow steps.' },
              { step: '02', title: 'Growth Report (24h)', desc: 'You receive a clear breakdown of root causes, commercial impact estimates, and the minimum viable infrastructure to move conversion and retention.' },
              { step: '03', title: 'Build + Operate', desc: 'We design and deploy the required systems — multi-agent workflows, automations, and integrations — then monitor and optimize as your operation scales.' }
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
            Book your audit call. You’ll leave with clarity on what to build, what to cut, and what will move revenue fastest.
          </p>
          <a href="/#book" style={{ display: 'inline-block', background: 'var(--w)', color: 'var(--b)', padding: '16px 40px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
            Book Free Audit Call
          </a>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default RevenueLeakageAudit;
