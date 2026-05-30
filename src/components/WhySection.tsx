import React, { useState } from 'react';

const WhySection: React.FC = () => {
  const capabilities = [
    {
      title: 'Systems-first architecture',
      note: 'Built as an operating system, not disconnected automations.',
      impact: 'Reduces process failure points by design.',
    },
    {
      title: 'Revenue-mapped outcomes',
      note: 'Every workflow is tied to a measurable revenue objective.',
      impact: 'Keeps execution focused on ROI, not vanity metrics.',
    },
    {
      title: 'Full-stack integration',
      note: 'Intake, CRM, follow-up, reminders, and reporting work together.',
      impact: 'Prevents data leakage and operational blind spots.',
    },
    {
      title: 'Built for scale, not demos',
      note: 'Production-ready workflows that hold under growing volume.',
      impact: 'Avoids frequent rebuilds as the business expands.',
    },
    {
      title: 'Ongoing optimization',
      note: 'Continuous tuning from live operational feedback loops.',
      impact: 'Compounds performance month over month.',
    },
    {
      title: 'No hidden tool dependencies',
      note: 'Transparent stack decisions with clear ownership boundaries.',
      impact: 'Reduces vendor lock-in and surprise recurring costs.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why">
      <div className="why-layout">
        <div>
          <div className="section-chip reveal">Why Irtiqa</div>
          <h2 className="why-title reveal d1">
            Simple systems that <em>actually run.</em>
          </h2>
          <p className="why-desc reveal d2 desktop-only">
            We build reliable infrastructure that improves response speed, follow-up quality, and booking consistency.
          </p>
          <p className="why-desc reveal d2 mobile-only">
            Clarity first. Systems second. Revenue outcomes always.
          </p>
          <div className="why-slogan reveal d3">Built to support your team, not replace your business identity.</div>
          <a href="#book" className="btn-fill reveal d4" style={{ width: 'fit-content', marginTop: '22px' }}>
            Get My Audit
          </a>
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
