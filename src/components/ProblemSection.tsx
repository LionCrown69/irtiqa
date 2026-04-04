import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Every missed call is a missed contract',
      desc: 'Prospects call once. If your intake isn\'t instant and intelligent, they\'ve already called your competitor by the time you pick up.'
    },
    {
      num: '02',
      title: 'Speed is conversion. You\'re too slow.',
      desc: 'Studies show responding within 5 minutes increases conversion by 9×. Most businesses respond in hours — or days.'
    },
    {
      num: '03',
      title: 'Your team is doing work automation should own',
      desc: 'Scheduling, data entry, follow-ups, intake, CRM updates — every hour your team spends on these is an hour not generating revenue.'
    },
    {
      num: '04',
      title: 'Hiring is not a scaling strategy',
      desc: 'Every new hire increases fragility. Operations that rely on people will always hit a ceiling. Infrastructure removes the ceiling entirely.'
    },
    {
      num: '05',
      title: 'Inconsistency destroys premium positioning',
      desc: 'A chaotic client experience signals an untrustworthy business. Automation doesn\'t just save time — it makes you look elite.'
    }
  ];

  return (
    <section id="problem">
      <div className="problem-layout">
        <div>
          <div className="section-chip reveal">The Problem</div>
          <h2 className="problem-title reveal d1">
            Right now, your business is <em>bleeding revenue</em> — silently.
          </h2>
          <p className="problem-desc reveal d2">
            Most service businesses lose revenue through slow response and broken follow-up, not lack of demand.
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
