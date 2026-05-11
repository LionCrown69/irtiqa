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
      tag: 'Intake Layer',
      title: 'Generate & Capture Demand',
      desc: 'We build the infrastructure that generates leads and catches every signal the moment intent appears.',
      metrics: ['lead generation', '24/7 capture', 'instant qualification']
    },
    {
      num: '02',
      tag: 'Routing Engine',
      title: 'Route with Precision',
      desc: 'Every lead is scored, structured, and sent into the right motion path automatically.',
      metrics: ['smart scoring', 'clean routing', 'pipeline integrity']
    },
    {
      num: '03',
      tag: 'Engagement System',
      title: 'Nurture & Reactivate',
      desc: 'Automated follow-ups move active prospects and recover cold opportunities.',
      metrics: ['sequence automation', 'reactivation loops', 'conversion lift']
    },
    {
      num: '04',
      tag: 'Control Framework',
      title: 'Govern & Scale',
      desc: 'Data governance, trigger logic, and live visibility keep growth predictable.',
      metrics: ['data hygiene', 'live reporting', 'scalable controls']
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
        <div className="infra-kicker-line">Operational Model</div>
      </div>

      <div className="infra-header reveal">
        <h2 className="infra-title">The Irtiqa Operational Model™ {industry ? `for ${industry.title}` : ''}</h2>
        <p className="infra-sub">Four connected pillars that capture demand, route intent, and turn follow-up into booked revenue {location ? `in ${location.name}` : ''}.</p>
        <div className="infra-status">
          System Status: <span>Active</span> • Coverage: <span>24/7</span> • Automation Depth: <span>Full</span>
        </div>
      </div>

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
        <a href="#book" className="btn-fill">Get My Audit</a>
        <span className="cta-note">Blueprint + timeline + deployment scope in one call.</span>
      </div>
    </section>
  );
};

export default ServicesSection;
