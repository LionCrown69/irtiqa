import React from 'react';
import { motion } from 'framer-motion';

const EcosystemCard = ({ title, subtitle, description, link, delay }: { title: string, subtitle: string, description: string, link: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="ecosystem-card"
      style={{
        background: 'linear-gradient(180deg, rgba(22,65,245,0.03) 0%, rgba(12,12,11,1) 100%)',
        border: '1px solid var(--rule)',
        borderRadius: '24px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(22,65,245,0.5), transparent)' }} />
      
      <span style={{ color: 'var(--b)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', display: 'block' }}>
        {subtitle}
      </span>
      <h3 style={{ fontSize: '2rem', fontFamily: 'var(--serif)', marginBottom: '20px', lineHeight: 1.1, color: 'var(--w)' }}>
        {title}
      </h3>
      <p style={{ opacity: 0.7, fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '40px', flexGrow: 1 }}>
        {description}
      </p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--w)', 
          fontWeight: 500,
          textDecoration: 'none',
          fontSize: '0.95rem',
          borderBottom: '1px solid rgba(253,253,252,0.3)',
          paddingBottom: '4px',
          alignSelf: 'flex-start',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--b)'}
        onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(253,253,252,0.3)'}
      >
        Explore Capabilities
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    </motion.div>
  );
};

const ProprietaryEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" style={{ padding: '120px 20px', background: '#0c0c0b', color: '#fdfdfc', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            The Technology Advantage
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '24px' }}
          >
            Proprietary Infrastructure Engines
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Unlike generic consultants, we don't just hand you a PDF report. We deploy our own battle-tested, Sovereign SaaS engines directly into your business to seal revenue leakage and guarantee execution.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <EcosystemCard 
            subtitle="Irtiqa Financial Automation"
            title="BillEase Enterprise"
            description="Closed-loop, global tax-compliant (GST/VAT) financial routing and enterprise invoicing infrastructure designed for seamless cash flow recovery."
            link="https://irtiqahub.com/billease/"
            delay={0.1}
          />
          <EcosystemCard 
            subtitle="Irtiqa Predictive Supply Chain"
            title="Inventra Systems"
            description="AI-driven inventory forecasting and automated procurement pipelines built to eliminate operational shrinkage and stockouts."
            link="https://irtiqahub.com/inventra/"
            delay={0.2}
          />
          <EcosystemCard 
            subtitle="Irtiqa Asset Intelligence"
            title="TeamHub Governance"
            description="Centralized digital governance for IT infrastructure, complex licensing compliance, and internal workflow playbooks."
            link="https://irtiqahub.com/teamhub/"
            delay={0.3}
          />
        </div>

      </div>
    </section>
  );
};

export default ProprietaryEcosystem;
