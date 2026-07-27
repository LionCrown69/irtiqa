import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do" style={{ padding: '120px 24px', background: 'var(--w1)', borderBottom: '1px solid rgba(12,12,11,0.08)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              01 / WHAT IRTIQA IS
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: '1.2', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '24px' }}>
              We build systems.<br />
              We scale businesses.<br />
              <span style={{ color: '#1641F5' }}>We partner for the long term.</span>
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--sub)', marginBottom: '24px' }}>
              <strong>Irtiqa is a consulting and AI infrastructure firm</strong> that works with businesses at critical stages of growth — building the strategy, technology, commercial systems and operating infrastructure required to scale.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--sub)' }}>
              For selected companies, our involvement goes further.<br />
              <strong>We become an operating growth partner, aligning through long-term partnerships and, where appropriate, ownership.</strong>
            </p>
          </div>

          <div style={{ background: 'var(--w2)', padding: '40px', borderRadius: '12px', border: '1px solid rgba(12,12,11,0.08)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '20px', letterSpacing: '-0.01em' }}>
              The Company Building Philosophy
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--sub)', marginBottom: '20px' }}>
              Most professional services businesses are paid to complete a defined scope and walk away. Most investors primarily contribute capital and portfolio support without building operational architecture.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--sub)', marginBottom: '28px' }}>
              Irtiqa is structured differently. We combine senior strategic advisory, institutional AI engineering, and commercial execution into a single operating firm. We do not replace founders; we build the systems and infrastructure around them so they can scale without operational constraints.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#services" className="btn-fill" style={{ fontSize: '13px', padding: '10px 20px' }}>
                Explore Capabilities ↓
              </a>
              <a href="/cohort-02" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px', borderColor: 'rgba(22,65,245,0.3)', color: '#1641F5' }}>
                Cohort 02 Partnership ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
