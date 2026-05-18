import React from 'react';

interface ProblemProps {
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

const ProblemSection: React.FC<ProblemProps> = ({ industry, location }) => {
  const problems = [
    {
      num: '01',
      title: 'Silent Revenue Leakage',
      desc: 'Most businesses don\'t lose revenue dramatically. They lose it quietly when leads vanish due to unclear routing and ownership.'
    },
    {
      num: '02',
      title: 'Follow-up breaks when it matters most',
      desc: 'Warm conversations go cold because the internal machinery to follow up consistently doesn\'t exist. Money is left on the table.'
    },
    {
      num: '03',
      title: 'Your team is doing work systems should own',
      desc: 'Scheduling, data entry, qualification, CRM updates, handoffs — hours spent here are hours not spent on revenue-generating activities.'
    },
    {
      num: '04',
      title: 'More leads into a broken machine is waste',
      desc: 'If the revenue journey is inefficient, extra traffic just increases your cost of acquisition while leakage stays exactly the same.'
    },
    {
      num: '05',
      title: 'The founder becomes the bottleneck',
      desc: 'When one person carries sales, ops, delivery, and strategy, growth stalls — not because demand is low, but because infrastructure is missing.'
    }
  ];

  return (
    <section id="problem">
      <div className="problem-layout">
        <div>
          <div className="section-chip reveal">The Problem</div>
          <h2 className="problem-title reveal d1">
            Most {industry ? industry.title.toLowerCase() : 'businesses'} don’t lose revenue dramatically. They lose it <em>quietly.</em>
          </h2>
          <p className="problem-desc reveal d2 desktop-only">
            The real issue is rarely marketing. It’s revenue operations infrastructure: routing, follow-up, qualification, booking, onboarding, and retention — disconnected, manual, or nonexistent{location ? ` in ${location.name}` : ''}.
          </p>
          <p className="problem-desc reveal d2 mobile-only">
            Revenue leaks at routing, follow-up, booking, and onboarding{location ? ` in ${location.name}` : ''}.
          </p>

          <div className="problem-points reveal d3">
            {problems.map(({ num, title, desc }) => (
              <div key={num} className="pp">
                <span className="pp-num">{num}</span>
                <div className="pp-body">
                  <div className="pp-title">{title}</div>
                  <div className="pp-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal d2">
          <div className="cost-stack">
            <div className="cost-visual">
              <div className="cost-title">Estimated Monthly Revenue Leakage</div>
              <div className="cost-row">
                <div>
                  <div className="cost-item-name">Missed / Delayed Leads</div>
                  <div className="cost-item-sub">≈ 3–5 missed prospects/month @ avg deal value</div>
                </div>
                <div className="cost-item-val">−$4,200</div>
              </div>
              <div className="cost-row">
                <div>
                  <div className="cost-item-name">Manual Admin Hours</div>
                  <div className="cost-item-sub">20 hrs/week × $40 opportunity cost</div>
                </div>
                <div className="cost-item-val">−$3,200</div>
              </div>
              <div className="cost-row">
                <div>
                  <div className="cost-item-name">No-Shows & Lost Appointments</div>
                  <div className="cost-item-sub">No automated reminder or recovery system</div>
                </div>
                <div className="cost-item-val">−$1,800</div>
              </div>
              <div className="cost-row">
                <div>
                  <div className="cost-item-name">Churn from Slow Follow-Up</div>
                  <div className="cost-item-sub">Warm leads going cold, retainers not renewed</div>
                </div>
                <div className="cost-item-val">−$2,600</div>
              </div>
              <div className="cost-total">
                <span className="cost-total-label">Total Monthly Leakage</span>
                <span className="cost-total-val">−$11,800+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
