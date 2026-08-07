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
      title: 'Operational Capacity Ceilings',
      desc: 'Revenue plateaus when operational systems fail to support scale. We identify and resolve the structural bottlenecks capping organizational growth.'
    },
    {
      num: '02',
      title: 'Inefficient Resource Allocation',
      desc: 'High-value human capital is often wasted on repetitive follow-up and data entry. We deploy autonomous systems to maximize workforce efficiency.'
    },
    {
      num: '03',
      title: 'Executive Time Misallocation',
      desc: 'When leadership is mired in operational labor and manual pipeline management, strategic growth initiatives suffer. We engineer systems that return executive time.'
    },
    {
      num: '04',
      title: 'Suboptimal CAC and Pipeline Friction',
      desc: 'Structural flaws in the conversion journey inflate Customer Acquisition Cost (CAC). We streamline the pipeline to maximize ROI on acquisition capital.'
    },
    {
      num: '05',
      title: 'Fragmented Technology Stacks',
      desc: 'Disjointed software deployments create data silos and require manual intervention. We architect centralized, autonomous ecosystems.'
    }
  ];

  return (
    <section id="problem">
      <div className="problem-layout">
        <div>
          <div className="section-chip reveal">The Problem</div>
          <h2 className="problem-title reveal d1">
            Internal Systems Cannot Bear the Weight of <em>Their Own Ambition.</em>
          </h2>
          <p className="problem-desc reveal d2 desktop-only">
            Most businesses that fail to scale do not fail because the market rejected them. They fail because their internal systems create structural friction that consumes executive time and acquisition capital. Irtiqa AI identifies where this friction occurs and engineers the infrastructure to eliminate it.
          </p>
          <p className="problem-desc reveal d2 mobile-only">
            Structural friction consumes executive time and acquisition capital.
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
              <div className="cost-title" style={{ margin: 0, color: 'var(--ink)' }}>Friction Cost Calculator</div>
              
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
              <div className="cost-title">Calculated Operational Friction</div>
              
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
                <span className="cost-total-label">Total Est. Monthly Friction</span>
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
