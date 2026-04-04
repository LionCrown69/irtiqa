import React from 'react';
import RoadmapCard from './ui/roadmap-card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      quarter: 'Step 01',
      title: 'Audit',
      description: 'Map leakage points across generation, capture, follow-up, qualification, and booking.',
      status: 'done' as const
    },
    {
      quarter: 'Step 02',
      title: 'Blueprint',
      description: 'Define the operating architecture, integrations, triggers, and scope before build starts.',
      status: 'in-progress' as const
    },
    {
      quarter: 'Step 03',
      title: 'Deploy',
      description: 'Launch, validate, and hand over the live infrastructure without breaking current lead flow.',
      status: 'upcoming' as const
    },
    {
      quarter: 'Step 04',
      title: 'Compound',
      description: 'Optimize what performs, expand capacity, and keep the system compounding from live data.',
      status: 'upcoming' as const
    }
  ];

  return (
    <section id="process" className="process-v6">
      <div className="process-v6-wrap">
        <div className="process-header reveal">
          <div className="process-kicker">Deployment Process</div>
          <h2 className="process-title">From audit to <em>operational.</em></h2>
          <p className="process-sub">A clear four-phase path from diagnosis to live, compounding operations.</p>
        </div>

        <div className="process-v6-shell reveal d2">
          <RoadmapCard
            title="Revenue Infrastructure Roadmap"
            description="Each stage moves from diagnosis to live deployment without losing operational clarity."
            items={steps}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
