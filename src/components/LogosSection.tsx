import React from 'react';

const LogosSection: React.FC = () => {
  const sectors = [
    'Enterprise Advisory', 'Healthcare & BioTech', 'Agritech & Food Systems', 'Custom Software Studios',
    'B2B SaaS Platforms', 'Commercial Real Estate', 'Global Logistics & Supply Chain', 'FinTech & Capital Markets',
    'Specialized Legal Services', 'Private Equity Portfolios', 'Advanced Manufacturing', 'Renewable Energy Infrastructure',
    'Executive Coaching & Leadership', 'Professional Services Groups', 'Venture-Backed Technology'
  ];

  return (
    <section className="logos-sec" style={{ padding: '36px 0', background: 'var(--w1)', borderBottom: '1px solid rgba(12,12,11,0.08)', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--sub)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          BUILDING INFRASTRUCTURE & SCALING REVENUE ACROSS HIGH-VALUE COMMERCIAL SECTORS
        </span>
      </div>
      <div className="logos-track-outer">
        <div className="logos-track">
          {[...sectors, ...sectors].map((sector, index) => (
            <div key={`${sector}-${index}`} className="logo-item" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', padding: '0 24px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1641F5', display: 'inline-block' }} />
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
