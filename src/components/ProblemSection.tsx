import React, { useEffect, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 640px)');
    const sync = () => setIsMobile(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

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
            Revenue leaks at routing, follow-up, and booking{location ? ` in ${location.name}` : ''}.
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
                  <span>{isMobile ? 'Avg deal value' : 'Avg Client Value'}</span>
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
                  <span>{isMobile ? 'Leads / month' : 'New Leads / Month'}</span>
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

              <div className="calculator-field">
                <label className="calculator-field-title">{isMobile ? 'Response speed' : 'Avg Response Time'}</label>
                <select
                  className="calculator-select"
                  value={responseTime}
                  onChange={(e) => setResponseTime(e.target.value)}
                >
                  <option value="<5mins">{isMobile ? '< 5 min' : 'Under 5 Minutes'}</option>
                  <option value="5-30mins">{isMobile ? '5 - 30 min' : '5 - 30 Minutes'}</option>
                  <option value="30-120mins">{isMobile ? '30 - 120 min' : '30 - 120 Minutes'}</option>
                  <option value="2+hours">{isMobile ? '2+ hours' : '2+ Hours'}</option>
                  <option value="nextday">{isMobile ? 'Next day+' : 'Next Day / Slower'}</option>
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
      <style dangerouslySetInnerHTML={{ __html: `
        .calculator-panel {
          background: rgba(244, 243, 230, 0.4) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: 1px solid var(--rule) !important;
          border-radius: 14px !important;
          padding: 24px !important;
        }
        .cost-stack input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: var(--w3) !important;
          height: 6px !important;
          border-radius: 3px !important;
          outline: none !important;
          width: 100% !important;
          margin: 10px 0 !important;
        }
        .cost-stack input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px !important;
          height: 18px !important;
          border-radius: 50% !important;
          background: var(--b) !important;
          cursor: pointer !important;
          border: 2px solid var(--w) !important;
          transition: transform 0.1s ease, background-color 0.2s !important;
          box-shadow: 0 2px 8px rgba(22, 65, 245, 0.35) !important;
        }
        .cost-stack input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.25);
          background: var(--b2) !important;
        }
        .cost-stack input[type="range"]::-moz-range-thumb {
          width: 18px !important;
          height: 18px !important;
          border-radius: 50% !important;
          background: var(--b) !important;
          cursor: pointer !important;
          border: 2px solid var(--w) !important;
          transition: transform 0.1s ease, background-color 0.2s !important;
          box-shadow: 0 2px 8px rgba(22, 65, 245, 0.35) !important;
        }
        .cost-stack input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.25);
          background: var(--b2) !important;
        }
        .calculator-select {
          background: var(--w) !important;
          border: 1px solid var(--rule) !important;
          border-radius: 8px !important;
          padding: 10px 14px !important;
          font-family: var(--ui) !important;
          font-size: 13.5px !important;
          color: var(--ink) !important;
          outline: none !important;
          cursor: pointer !important;
          transition: border-color 0.2s !important;
          width: 100% !important;
          margin-top: 6px !important;
        }
        .calculator-select:focus {
          border-color: var(--b) !important;
        }
        .cost-visual {
          transition: all 0.3s var(--ease) !important;
        }
        .cost-row {
          transition: background-color 0.2s ease !important;
        }
        .cost-row:hover {
          background: rgba(22, 65, 245, 0.02) !important;
        }
      ` }} />
    </section>
  );
};

export default ProblemSection;
