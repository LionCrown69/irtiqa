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
      tag: 'Find the Leaks',
      title: 'We audit where revenue is leaving your business',
      desc: 'We go through your entire lead journey — how inquiries arrive, how they are handled, where they go cold. We find every point where money is quietly walking out.',
      metrics: ['Lead journey mapping', 'Leakage identification', 'Impact reports']
    },
    {
      num: '02',
      tag: 'Fix the Gaps',
      title: 'We design the systems that close them',
      desc: 'Once we know where the leakage is, we design the specific infrastructure to fix it. Every recommendation is built around your business — not a template.',
      metrics: ['Custom solution design', 'Technology scoping', 'Workflow mapping']
    },
    {
      num: '03',
      tag: 'Build the Infrastructure',
      title: 'We deploy it and make it run',
      desc: 'We build and integrate everything ourselves. You do not manage vendors or navigate tools. We own the delivery from design to live system.',
      metrics: ['API engineering', 'CRM & pipeline setup', 'End-to-end testing']
    },
    {
      num: '04',
      tag: 'Stay and Operate',
      title: 'We remain your partner as the business evolves',
      desc: 'We do not hand over and disappear. We monitor, optimise, and evolve the infrastructure alongside your business. First month always included.',
      metrics: ['Proactive optimization', 'Continuous support', 'First month included']
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
        <h2 className="infra-title">The Irtiqa Revenue Operations Model™ {industry ? `for ${industry.title}` : ''}</h2>
        <p className="infra-sub desktop-only">Four connected pillars that take a stranger to a loyal client — automatically, intelligently, and at scale{location ? ` in ${location.name}` : ''}.</p>
        <p className="infra-sub mobile-only">Four connected pillars that automate your lead-to-client pipeline{location ? ` in ${location.name}` : ''}.</p>
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
        <a href="#book" className="btn-fill">Book Free Audit Call</a>
        <span className="cta-note">Audit call → Growth Report in 24 hours → build roadmap.</span>
      </div>
    </section>
  );
};

export default ServicesSection;
