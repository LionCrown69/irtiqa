import React, { useEffect } from 'react';

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
  const layers = [
    {
      num: '01',
      tag: 'Operational Auditing',
      title: 'We analyze systemic friction across the revenue pipeline',
      desc: 'We conduct a comprehensive audit of your client acquisition and retention workflows to quantify manual overhead and identify precise points of SLA degradation.',
      metrics: ['Systems Architecture Mapping', 'SLA Compliance Review', 'Overhead Quantification']
    },
    {
      num: '02',
      tag: 'Custom AI Architecture',
      title: 'We engineer integrated automation frameworks',
      desc: 'We design custom autonomous systems tailored to your specific operational constraints. Our architectures are built for security, scalability, and seamless data synchronization.',
      metrics: ['Integration Architecture Design', 'Security & Compliance Scoping', 'Workflow Automation Schematics']
    },
    {
      num: '03',
      tag: 'System Deployment',
      title: 'We execute end-to-end technical implementation',
      desc: 'We handle the complete development and integration of the autonomous infrastructure. We deliver a fully centralized, live operational system without relying on third-party vendors.',
      metrics: ['Custom API Engineering', 'CRM Centralization', 'Quality Assurance Testing']
    },
    {
      num: '04',
      tag: 'Managed Services',
      title: 'We provide ongoing optimization and SLA management',
      desc: 'We do not simply hand over code. We actively monitor, maintain, and optimize your revenue infrastructure to ensure continuous performance and system reliability.',
      metrics: ['Performance Monitoring', 'SLA Management', 'Continuous System Optimization']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const layersElements = document.querySelectorAll('.infra-pillar-grid .layer');
            layersElements.forEach((layer, i) => {
              setTimeout(() => layer.classList.add('active'), i * 180);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sec = document.querySelector('#services');
    if (sec) observer.observe(sec);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services">
      <div className="infra-top reveal">
        <div className="infra-kicker-line">Revenue Infrastructure</div>
      </div>

      <div className="infra-header reveal">
        <h2 className="infra-title">The Irtiqa Operations Framework™ {industry ? `for ${industry.title}` : ''}</h2>
        <p className="infra-sub desktop-only">A comprehensive methodology for engineering, integrating, and managing autonomous revenue systems{location ? ` across ${location.name}` : ''}.</p>
        <p className="infra-sub mobile-only">A comprehensive framework for autonomous system integration{location ? ` across ${location.name}` : ''}.</p>
        <div className="infra-status" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          System Status: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10B981', fontWeight: 600 }}>
            <span className="status-dot-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }}></span>
            Active
          </span> • Coverage: <span>24/7</span> • Automation Depth: <span>Full</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes statusPulse {
          0% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .status-dot-pulse {
          animation: statusPulse 2s infinite;
        }
        .infra-pillar-grid .layer {
          transition: all 0.4s var(--ease);
        }
        .infra-pillar-grid .layer:hover {
          transform: translateY(-4px);
          border-color: rgba(22, 65, 245, 0.2);
          box-shadow: 0 12px 30px rgba(12, 12, 11, 0.04);
        }
      ` }} />

      <div className="infra-pillar-grid reveal d1">
        {layers.map(({ num, tag, title, desc, metrics }) => (
          <article key={num} className="layer reveal d1" data-num={num}>
            <div className="layer-num">{num}</div>
            <div className="layer-tag">{tag}</div>
            <h3 className="layer-title">{title}</h3>
            <p className="layer-desc">{desc}</p>
            <div className="layer-metrics">
              {metrics.map((metric, i) => (
                <span key={i}>{metric}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="infra-cta reveal d4">
        <a href="#book" className="btn-fill">Request an Operations Assessment</a>
        <span className="cta-note">Initial Consultation → Technical Proposal in 24 hours → Implementation.</span>
      </div>
    </section>
  );
};

export default ServicesSection;
