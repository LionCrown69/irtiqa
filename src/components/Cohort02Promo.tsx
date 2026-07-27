import React from 'react';
import { motion } from 'framer-motion';

const Cohort02Promo: React.FC = () => {
  return (
    <section id="cohort-02-promo" style={{ padding: '140px 24px', background: '#0C0C0B', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glowing background accents */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(22,65,245,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(22,65,245,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, color: '#60A5FA', background: 'rgba(96,165,250,0.12)', padding: '6px 14px', borderRadius: '100px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', border: '1px solid rgba(96,165,250,0.25)' }}>
              06 / SELECTIVE OPERATING PARTNERSHIP
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: '1.15', color: '#fff', letterSpacing: '-0.03em', marginBottom: '24px' }}>
              IRTIQA COHORT 02
            </h2>
            <p style={{ fontSize: '1.3rem', color: '#E5E7EB', lineHeight: '1.6', fontWeight: 500, marginBottom: '20px' }}>
              A selective operating partnership for companies ready to build their next stage.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#9CA3AF', lineHeight: '1.7', marginBottom: '36px' }}>
              Irtiqa Cohort 02 is a selective company-building initiative for founders who have moved beyond the idea alone and are building businesses with credible potential for substantial long-term value. We select selectively because we intend to contribute meaningfully as an operating growth partner.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="/cohort-02"
                style={{
                  background: '#1641F5',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 12px 36px rgba(22,65,245,0.4)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                Apply to Cohort 02
                <span style={{ fontSize: '18px' }}>→</span>
              </a>
              <span style={{ fontSize: '13px', color: '#9CA3AF' }}>
                Rolling admissions · Structured selection
              </span>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '20px', letterSpacing: '-0.01em' }}>
              Building Companies. Not Running Classes.
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(96,165,250,0.15)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Company-Specific Involvement</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5', display: 'block' }}>There is no generic curriculum or predetermined list of deliverables. Our involvement is shaped by what your specific business requires to scale.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(96,165,250,0.15)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Embedded Execution</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5', display: 'block' }}>We work as an extension of your founding team across commercial strategy, AI infrastructure, revenue optimization, and operational design.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(96,165,250,0.15)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Long-Term Alignment</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5', display: 'block' }}>Where appropriate, we establish an ownership position—aligning our incentives as co-builders rather than external vendors.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cohort02Promo;
