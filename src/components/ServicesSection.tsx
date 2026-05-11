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
      tag: 'Capture Layer',
      title: 'Lead Generation + Intake',
      desc: 'Autonomous lead gen plus always-on intake across web, calls, and WhatsApp — with instant qualification.',
      metrics: ['lead generation infrastructure', 'AI receptionist', 'instant qualification']
    },
    {
      num: '02',
      tag: 'Conversion Layer',
      title: 'Outreach + Booking',
      desc: 'Multi-channel outreach, intelligent follow-up, response handling, and booking automation that turns intent into calls.',
      metrics: ['autonomous outreach system', 'intelligent follow-up', 'appointment setting']
    },
    {
      num: '03',
      tag: 'Ops Layer',
      title: 'CRM + Pipeline Automation',
      desc: 'Custom CRM architecture, routing, stage automation, tasks, and reporting — built around how you actually sell.',
      metrics: ['AI powered CRM automation', 'pipeline governance', 'revenue dashboards']
    },
    {
      num: '04',
      tag: 'Lifecycle Layer',
      title: 'Onboard + Retain',
      desc: 'Automated onboarding, retention triggers, re-engagement, and referral activation — so growth compounds after the close.',
      metrics: ['client onboarding automation', 'retention systems', 're-engagement loops']
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
        <p className="infra-sub">Four connected pillars that take a stranger to a loyal client — automatically, intelligently, and at scale{location ? ` in ${location.name}` : ''}.</p>
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
        <a href="#book" className="btn-fill">Book Free Audit Call</a>
        <span className="cta-note">Audit call → Growth Report in 24 hours → build roadmap.</span>
      </div>
    </section>
  );
};

export default ServicesSection;
