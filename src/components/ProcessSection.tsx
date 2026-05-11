import React from 'react';
import RoadmapCard from './ui/roadmap-card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      quarter: 'Step 01',
      title: 'Audit Call',
      description: 'Free, one hour, maximum depth: map your revenue journey and identify the leakage points blocking growth.',
      status: 'done' as const
    },
    {
      quarter: 'Step 02',
      title: 'Growth Report',
      description: 'Within 24 hours: findings, commercial impact estimates, and the minimum viable infrastructure to fix root causes.',
      status: 'in-progress' as const
    },
    {
      quarter: 'Step 03',
      title: 'Build',
      description: 'Design the architecture, then implement in phases — systems, integrations, agents, and workflows — tested before handover.',
      status: 'upcoming' as const
    },
    {
      quarter: 'Step 04',
      title: 'Operate',
      description: 'Ongoing partnership: monitor, optimize, and evolve the system as the business evolves. First month is free.',
      status: 'upcoming' as const
    }
  ];

  return (
    <section id="process" className="process-v6">
      <div className="process-v6-wrap">
        <div className="process-header reveal">
          <div className="process-kicker">Deployment Process</div>
          <h2 className="process-title">From audit to <em>infrastructure.</em></h2>
          <p className="process-sub">A clear path from diagnosis to a live revenue operations system your team can run.</p>
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
