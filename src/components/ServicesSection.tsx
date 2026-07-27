import React from 'react';
import { motion } from 'framer-motion';

interface ServicesProps {
  industry?: {
    slug: string;
    name: string;
    title: string;
    painPoint: string;
  };
  location?: {
    slug: string;
    name: string;
    state: string;
    country: string;
  };
}

const ServicesSection: React.FC<ServicesProps> = ({ industry, location }) => {
  const modes = [
    {
      num: '01',
      tag: 'Advisory',
      title: 'Strategy, growth, commercial architecture and operational problem-solving.',
      desc: 'Companies engage Irtiqa to diagnose operational constraints, model commercial economics, and design scalable business architectures. We provide executive-level clarity on market positioning, customer acquisition economics, and internal team structuring.',
      capabilities: ['Commercial Strategy & Positioning', 'Revenue Pipeline Diagnosis', 'Organisational & Operational Design', 'Executive Growth Advisory']
    },
    {
      num: '02',
      tag: 'Infrastructure',
      title: 'AI systems, automation, revenue infrastructure and custom operational technology.',
      desc: 'We engineer and deploy autonomous operational tools that remove manual friction. From AI-driven client acquisition engines and instant intake routing to custom CRM centralization, we build the proprietary technology required to scale without overhead.',
      capabilities: ['Custom AI Architecture & Agents', 'Autonomous Revenue Intake Systems', 'CRM & Data Centralization', 'Custom Internal Operational Software']
    },
    {
      num: '03',
      tag: 'Operating Partnerships',
      title: 'Long-term involvement with selected companies where Irtiqa can materially influence growth.',
      desc: 'For businesses where deeper involvement makes sense, Irtiqa works alongside management as an extension of the founding team across strategy, growth, operations, technology, and organisational development—aligning through shared equity or revenue upside.',
      capabilities: ['Embedded Commercial Execution', 'Co-Building Technical Roadmap', 'Shared Equity / Upside Alignment', 'Direct Access via Cohort 02 Selection']
    }
  ];

  return (
    <section id="services" style={{ padding: '120px 24px', background: 'var(--w2)', borderBottom: '1px solid rgba(12,12,11,0.08)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'left', marginBottom: '64px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            02 / HOW WE WORK
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            One firm. Different levels of involvement.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--sub)', maxWidth: '700px', lineHeight: '1.7' }}>
            We adapt our engagement structure to the specific stage and priorities of your business—whether you require targeted strategic advisory, custom infrastructure engineering, or an embedded operating growth partner.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {modes.map((mode) => (
            <motion.div
              key={mode.num}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(12,12,11,0.06)', borderColor: 'rgba(22,65,245,0.3)' }}
              style={{
                background: 'var(--w1)',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', background: 'rgba(22,65,245,0.08)', padding: '6px 12px', borderRadius: '100px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {mode.tag}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--sub)' }}>{mode.num}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px', lineHeight: '1.4', letterSpacing: '-0.01em' }}>
                  {mode.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--sub)', lineHeight: '1.7', marginBottom: '28px' }}>
                  {mode.desc}
                </p>
              </div>

              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', borderTop: '1px solid rgba(12,12,11,0.08)', paddingTop: '16px' }}>
                  Core Capabilities
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {mode.capabilities.map((cap) => (
                    <li key={cap} style={{ fontSize: '13px', color: 'var(--sub)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#1641F5', flexShrink: 0 }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '56px', padding: '32px', background: 'var(--w1)', borderRadius: '12px', border: '1px solid rgba(12,12,11,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
              Ready to explore an Operating Partnership?
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--sub)', margin: 0 }}>
              Periodically, Irtiqa selects a limited number of companies for structured evaluation and potential long-term operating partnerships via Cohort 02.
            </p>
          </div>
          <a href="/cohort-02" className="btn-fill" style={{ fontSize: '14px', padding: '12px 24px', flexShrink: 0 }}>
            Explore Cohort 02 Selection ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
