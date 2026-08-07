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
      tag: 'Strategy',
      title: 'Business & Growth Strategy',
      desc: 'Growth stalls without defined direction. We assess market position, clarify the revenue model, and map the precise sequence of initiatives required to compound capital.',
      metrics: ['Market Positioning', 'Unit Economic Modeling', 'Resource Allocation']
    },
    {
      num: '02',
      tag: 'Infrastructure',
      title: 'Commercial Infrastructure',
      desc: 'Demand is frequently lost to internal friction. We map the buyer journey and construct operational workflows that capture, qualify, and route intent without manual intervention.',
      metrics: ['CRM Architecture', 'Routing Logic', 'Pipeline Velocity']
    },
    {
      num: '03',
      tag: 'Operations',
      title: 'Operational Excellence',
      desc: 'Processes dependent on human memory break at scale. We eliminate capacity ceilings by centralizing data, standardizing handoffs, and deploying systems that return executive time.',
      metrics: ['Process Mapping', 'Handoff Standardization', 'SOP Formalization']
    },
    {
      num: '04',
      tag: 'Automation',
      title: 'AI Infrastructure',
      desc: 'Technology follows strategy. We integrate auditable, deterministic artificial intelligence architectures to handle repetitive analysis and process execution.',
      metrics: ['Deterministic Workflows', 'Data Extraction', 'Custom API Integration']
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
        <div className="infra-kicker-line">Capabilities Overview</div>
      </div>

      <div className="infra-header reveal">
        <h2 className="infra-title">Comprehensive Execution Architecture</h2>
        <p className="infra-sub desktop-only">Four core pillars engineered to resolve structural friction and scale operations.</p>
        <p className="infra-sub mobile-only">Four core pillars engineered to scale operations.</p>
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
        <a href="#book" className="btn-fill">Start a Conversation</a>
      </div>
    </section>
  );
};

export default ServicesSection;
