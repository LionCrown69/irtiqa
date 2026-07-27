import React from 'react';
import { motion } from 'framer-motion';

const WhySection: React.FC = () => {
  return (
    <section id="partnerships" style={{ padding: '120px 24px', background: 'var(--w1)', borderBottom: '1px solid rgba(12,12,11,0.08)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              04 / OPERATING PARTNERSHIPS
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: '1.2', marginBottom: '24px' }}>
              An Operating Growth Partner.<br />
              <span style={{ color: '#1641F5' }}>Not a Vendor.</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--sub)', lineHeight: '1.7', marginBottom: '20px' }}>
              We could remain an external consulting and AI infrastructure firm. But the businesses we believe in most create a different opportunity.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--sub)', lineHeight: '1.7', marginBottom: '32px' }}>
              Instead of optimizing for the value of a short-term engagement, we align ourselves with the long-term value of the company. Instead of thinking like a vendor, we think alongside the people building the business.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/cohort-02" className="btn-fill" style={{ fontSize: '14px', padding: '14px 28px' }}>
                Apply to Cohort 02 ↗
              </a>
              <a href="#work-with-irtiqa" className="btn-outline" style={{ fontSize: '14px', padding: '14px 28px' }}>
                Standard Engagement ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div whileHover={{ x: 6 }} style={{ background: 'var(--w2)', padding: '32px', borderRadius: '12px', border: '1px solid rgba(12,12,11,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                ALIGNMENT PRINCIPLE 01
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
                Extension of the Founding Team
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--sub)', lineHeight: '1.7', margin: 0 }}>
                We work alongside management across strategy, revenue optimization, sales systems, AI infrastructure, and organizational structure. We do not replace founders; we strengthen the institutional capability around them.
              </p>
            </motion.div>

            <motion.div whileHover={{ x: 6 }} style={{ background: 'var(--w2)', padding: '32px', borderRadius: '12px', border: '1px solid rgba(12,12,11,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                ALIGNMENT PRINCIPLE 02
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
                Customized Equity & Upside Structures
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--sub)', lineHeight: '1.7', margin: 0 }}>
                We do not enforce a rigid universal percentage or present ourselves as a conventional venture fund. For companies where shared ownership is appropriate, terms are structured individually based on stage, scope of involvement, and long-term synergy.
              </p>
            </motion.div>

            <motion.div whileHover={{ x: 6 }} style={{ background: 'var(--w2)', padding: '32px', borderRadius: '12px', border: '1px solid rgba(12,12,11,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                ALIGNMENT PRINCIPLE 03
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
                A Builder Philosophy That Stays
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--sub)', lineHeight: '1.7', margin: 0 }}>
                Traditional vendors build a deliverable and walk away. Because our operating partnerships align our success with yours, when new operational bottlenecks emerge as the company scales, we remain embedded to solve them.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
