import React, { useState } from 'react';

const WhySection: React.FC = () => {
  const capabilities = [
    {
      title: 'Systems-first architecture',
      note: 'Built as an operating system, not disconnected automations.',
      impact: 'Reduces process failure points by design.'
    },
    {
      title: 'Commercial problem first',
      note: 'We diagnose where money is being left on the table before choosing tools or models.',
      impact: 'Fixes root causes, not symptoms.'
    },
    {
      title: 'Multi-agent AI systems',
      note: 'Specialized agents coordinate to handle multi-step workflows end-to-end.',
      impact: 'Turns whole operational functions into autonomous systems.'
    },
    {
      title: 'Multi-model AI infrastructure',
      note: 'We deploy the right model for the right task — speed, accuracy, and cost-efficiency.',
      impact: 'Higher performance without overpaying for every action.'
    },
    {
      title: 'Full-stack integration',
      note: 'Intake, CRM, follow-up, booking, onboarding, and reporting work together.',
      impact: 'Prevents blind spots and silent revenue leakage.'
    },
    {
      title: 'Operated, not just built',
      note: 'We monitor, optimize, and evolve systems from live performance — not a one-time setup.',
      impact: 'Keeps infrastructure aligned as the business changes.'
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why">
      <div className="why-layout">
        <div>
          <div className="section-chip reveal">Why Irtiqa</div>
          <h2 className="why-title reveal d1">Infrastructure, not <em>tools.</em></h2>
          <p className="why-desc reveal d2">We build and operate revenue operations infrastructure that stops leakage, improves conversion, and scales without chaos.</p>
          <div className="why-slogan reveal d3">Built to support your team, not replace your business identity.</div>
          <a href="#book" className="btn-fill reveal d4" style={{ width: 'fit-content', marginTop: '22px' }}>Book Free Audit Call</a>
        </div>

        <div className="reveal d2">
          <div className="comp-table">
            <div className="ct-head">
              <span>Capability</span>
              <span>Irtiqa</span>
              <span>Others</span>
            </div>
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`ct-row ${activeIndex === i ? 'is-active' : ''}`}
                role="button"
                tabIndex={0}
                aria-pressed={activeIndex === i}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(i);
                  }
                }}
              >
                <div className="ct-cell">{cap.title}</div>
                <div className="ct-cell">
                  <div className="ct-yes">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                </div>
                <div className="ct-cell">
                  <div className="ct-no">
                    <svg viewBox="0 0 10 10">
                      <line x1="2" y1="2" x2="8" y2="8" />
                      <line x1="8" y1="2" x2="2" y2="8" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ct-insight" aria-live="polite">
            <div className="ct-insight-label">Selected capability</div>
            <div className="ct-insight-title">{capabilities[activeIndex].title}</div>
            <p className="ct-insight-note">{capabilities[activeIndex].note}</p>
            <p className="ct-insight-impact">{capabilities[activeIndex].impact}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
