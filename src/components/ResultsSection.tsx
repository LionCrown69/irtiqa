import React from 'react';
import { motion } from 'framer-motion';

const ResultsSection: React.FC = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Autonomous Revenue Intake & Qualification',
      desc: 'We engineer algorithmic routing systems that instantly engage executive inquiries, perform diagnostic qualification without robotic scripting, and book verified consultations directly into senior calendar workflows.',
      tags: ['Sub-5m Response Velocity', 'AI Qualification Agents', 'Calendar Integration']
    },
    {
      num: '02',
      title: 'CRM Centralization & Automated Handoffs',
      desc: 'We eliminate fragmented spreadsheets and manual data entry by building unified data pipelines that synchronize marketing intent, sales follow-up, and client onboarding across your existing technology stack.',
      tags: ['Zero Manual Admin', 'Data Synchronization', 'Cross-Platform API Build']
    },
    {
      num: '03',
      title: 'Pipeline Recovery & Reactivation',
      desc: 'Most service businesses lose 30% to 50% of their pipeline to slow follow-up and forgotten proposals. We deploy intelligent, multi-channel reactivation architectures that re-engage stalled executive opportunities.',
      tags: ['Pipeline Audit & Recovery', 'SLA Monitoring', 'Automated Nurture Flows']
    },
    {
      num: '04',
      title: 'Sovereign Internal Operational Tools',
      desc: 'We do not build on fragile third-party SaaS wrappers that break when pricing changes. We deploy custom, proprietary internal software and operating portals owned entirely by your organization.',
      tags: ['Sovereign Codebase', 'Custom Internal OS', 'Long-Term Maintainability']
    }
  ];

  return (
    <section id="capabilities" style={{ padding: '120px 24px', background: 'var(--w1)', borderBottom: '1px solid rgba(12,12,11,0.08)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'left', marginBottom: '64px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            03 / CAPABILITIES & REVENUE INFRASTRUCTURE
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Built for execution. Engineered for scale.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--sub)', maxWidth: '720px', lineHeight: '1.7' }}>
            Our technical implementations replace fragmented vendor tools with sovereign, institutional systems. We design, deploy, and manage custom operational infrastructure across four primary pillars.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px' }}>
          {capabilities.map((cap) => (
            <motion.div
              key={cap.num}
              whileHover={{ y: -4, borderColor: 'rgba(22,65,245,0.3)' }}
              style={{
                background: 'var(--w2)',
                padding: '40px',
                borderRadius: '12px',
                border: '1px solid rgba(12,12,11,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', marginBottom: '12px', letterSpacing: '0.08em' }}>
                  CAPABILITY // {cap.num}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px', letterSpacing: '-0.01em', lineHeight: '1.35' }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--sub)', lineHeight: '1.7', marginBottom: '24px' }}>
                  {cap.desc}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(12,12,11,0.08)', paddingTop: '20px' }}>
                {cap.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)', background: 'var(--w1)', padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(12,12,11,0.08)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '56px', padding: '40px', background: '#1641F5', borderRadius: '12px', color: '#fff', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px', boxShadow: '0 20px 48px rgba(22,65,245,0.25)' }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.15)', padding: '4px 10px', borderRadius: '100px', display: 'inline-block', marginBottom: '12px' }}>
              PROPRIETARY INTELLECTUAL PROPERTY
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '10px', letterSpacing: '-0.01em' }}>
              The Revenue Operations Model™
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', margin: 0 }}>
              Our diagnostic framework audits your existing lead-to-client pipeline to identify precise points of SLA degradation and revenue drop-off before a single line of code is written or system deployed.
            </p>
          </div>
          <a href="#problem-section" className="btn-fill" style={{ background: '#fff', color: '#1641F5', fontSize: '14px', fontWeight: 700, padding: '14px 28px', flexShrink: 0, textDecoration: 'none' }}>
            Explore Revenue Model ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
