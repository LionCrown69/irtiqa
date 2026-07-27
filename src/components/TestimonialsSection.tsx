import React from 'react';
import { TestimonialsColumn, type TestimonialsColumnItem } from './ui/testimonials-columns-1';

const TestimonialsSection: React.FC = () => {
  const scopes: TestimonialsColumnItem[] = [
    {
      text: 'Audited existing sales pipelines and engineered an autonomous qualification intake engine, replacing robotic SDR scripts with diagnostic executive routing.',
      name: 'B2B Advisory Firm',
      role: 'Commercial Architecture & Intake Scope'
    },
    {
      text: 'Deployed custom data synchronization and automated appointment scheduling across fragmented CRM tools, removing manual admin and improving SLA compliance.',
      name: 'Multi-Location Healthcare Practice',
      role: 'Infrastructure & SLA Automation Scope'
    },
    {
      text: 'Partnered alongside management to restructure the commercial model, optimize customer acquisition economics, and deploy sovereign internal operating tools.',
      name: 'Emerging Agritech Company',
      role: 'Operating Growth Partnership'
    },
    {
      text: 'Architected automated follow-up sequences and multi-channel reactivation workflows to recover stalled enterprise inquiries without adding sales headcount.',
      name: 'Custom Software Development Firm',
      role: 'Pipeline Recovery & Nurture Scope'
    },
    {
      text: 'Standardized lead qualification protocols and built centralized executive reporting dashboards, providing real-time attribution and pipeline clarity.',
      name: 'Commercial Real Estate Brokerage',
      role: 'Data Centralization & Systems Build'
    },
    {
      text: 'Engineered sovereign internal portals for executive collaboration, replacing third-party SaaS dependency with proprietary operational software.',
      name: 'Specialized Legal Advisory',
      role: 'Sovereign Technical Implementation'
    },
    {
      text: 'Executed comprehensive operational audit to map revenue leakage points, leading to a complete redesign of client intake and onboarding workflows.',
      name: 'Enterprise Consulting Studio',
      role: 'Operational Audit & Strategy Scope'
    },
    {
      text: 'Integrated automated voice and web intake agents with calendar dispatch systems, ensuring continuous 24/7 lead qualification across global time zones.',
      name: 'Logistics & Operations Group',
      role: 'Autonomous Systems Integration'
    }
  ];

  const col1 = scopes.slice(0, 3);
  const col2 = scopes.slice(3, 6);
  const col3 = scopes.slice(6, 8);

  return (
    <section id="companies" style={{ padding: '120px 24px', background: 'var(--w2)', borderBottom: '1px solid rgba(12,12,11,0.08)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'left', marginBottom: '64px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          05 / SELECTED COMPANIES & SCOPES OF WORK
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Building across sectors.<br />
          <em>Delivering concrete operational capability.</em>
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--sub)', maxWidth: '720px', lineHeight: '1.7' }}>
          Our protagonist is company building. Whether working on an agritech company, a service business, or a technology firm, we apply rigorous diagnostic principles and custom engineering to remove growth constraints.
        </p>
      </div>

      <div className="tc1-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <TestimonialsColumn testimonials={col1} duration={48} />
        <TestimonialsColumn testimonials={col2} duration={56} reverse={true} />
        <TestimonialsColumn testimonials={col3} duration={52} />
      </div>

      <div style={{ maxWidth: '1080px', margin: '56px auto 0', textAlign: 'center' }}>
        <div style={{ fontSize: '13px', color: 'var(--sub)', background: 'var(--w1)', padding: '16px 24px', borderRadius: '8px', border: '1px solid rgba(12,12,11,0.08)', display: 'inline-block' }}>
          Every implementation is custom-scoped. We do not use placeholder metrics or generic templates. <strong>We build for the company in front of us.</strong>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
