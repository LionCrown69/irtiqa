import React, { useState } from 'react';

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
  const [dealValue, setDealValue] = useState(1500);
  const [leadsCount, setLeadsCount] = useState(50);
  const [responseTime, setResponseTime] = useState('30-120mins');

  // Response time leakage factor
  const getLeakFactor = (time: string) => {
    switch (time) {
      case '<5mins': return 0.03;
      case '5-30mins': return 0.12;
      case '30-120mins': return 0.25;
      case '2+hours': return 0.42;
      case 'nextday': return 0.58;
      default: return 0.25;
    }
  };

  const leakFactor = getLeakFactor(responseTime);
  const missedLeads = Math.round(leadsCount * dealValue * leakFactor);
  const adminHours = Math.round((leadsCount * 0.4) * 45); // Assuming 0.4 hours admin per lead at $45/hour
  const noShows = Math.round(leadsCount * 0.25 * 0.12 * dealValue); // Assuming 25% book a call, 12% no-show without follow-up reminders
  const churn = Math.round(leadsCount * 0.035 * dealValue); // 3.5% churn due to slow manual handoff
  const totalLeakage = missedLeads + adminHours + noShows + churn;

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
            {/* Interactive Calculator Inputs */}
            <div className="calculator-panel">
              <div className="cost-title" style={{ margin: 0, color: 'var(--ink)' }}>Leakage Calculator</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>
                  <span>Avg Client Value</span>
                  <strong style={{ color: 'var(--b)' }}>${dealValue.toLocaleString()}</strong>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="15000" 
                  step="100" 
                  value={dealValue} 
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--b)', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>
                  <span>New Leads / Month</span>
                  <strong style={{ color: 'var(--b)' }}>{leadsCount}</strong>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="300" 
                  step="5" 
                  value={leadsCount} 
                  onChange={(e) => setLeadsCount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--b)', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>Avg Response Time</label>
                <select
                  value={responseTime}
                  onChange={(e) => setResponseTime(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--rule)',
                    background: 'var(--w)',
                    color: 'var(--ink)',
                    fontSize: '13px',
                    fontFamily: 'var(--ui)',
                    fontWeight: 500,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="<5mins">Under 5 Minutes</option>
                  <option value="5-30mins">5 - 30 Minutes</option>
                  <option value="30-120mins">30 - 120 Minutes</option>
                  <option value="2+hours">2+ Hours</option>
                  <option value="nextday">Next Day / Slower</option>
                </select>
              </div>
            </div>

            {/* Dynamic Results Display */}
            <div className="cost-visual">
              <div className="cost-title">Calculated Monthly Leakage</div>
              
              <div className="cost-row">
                <div>
                  <div className="cost-item-name">Missed / Delayed Leads</div>
                  <div className="cost-item-sub">Leads lost to slow response speed</div>
                </div>
                <div className="cost-item-val">−${missedLeads.toLocaleString()}</div>
              </div>
              
              <div className="cost-row">
                <div>
                  <div className="cost-item-name">Manual Admin Hours</div>
                  <div className="cost-item-sub">Routing, data entry & CRM updates</div>
                </div>
                <div className="cost-item-val">−${adminHours.toLocaleString()}</div>
              </div>

              <div className="cost-row">
                <div>
                  <div className="cost-item-name">No-Shows & Lost Calls</div>
                  <div className="cost-item-sub">Appointments lost without recovery reminders</div>
                </div>
                <div className="cost-item-val">−${noShows.toLocaleString()}</div>
              </div>

              <div className="cost-row">
                <div>
                  <div className="cost-item-name">Handoff & Follow-Up Churn</div>
                  <div className="cost-item-sub">Warm conversations going cold silently</div>
                </div>
                <div className="cost-item-val">−${churn.toLocaleString()}</div>
              </div>

              <div className="cost-total">
                <span className="cost-total-label">Total Est. Monthly Leakage</span>
                <span className="cost-total-val">−${totalLeakage.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
