import React from 'react';
import RoadmapCard from './ui/roadmap-card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      quarter: 'Step 01',
      title: 'Audit Call',
      description: 'One focused session to map exactly where revenue leakage is happening in your current flow.',
      status: 'done' as const,
    },
    {
      quarter: 'Step 02',
      title: 'Growth Report',
      description: 'Within 24 hours, you receive a clear report with leakage points, impact, and build priorities.',
      status: 'in-progress' as const,
    },
    {
      quarter: 'Step 03',
      title: 'Build',
      description: 'We design and deploy approved systems, integrations, and workflows in controlled phases.',
      status: 'upcoming' as const,
    },
    {
      quarter: 'Step 04',
      title: 'Partner',
      description: 'We stay involved to optimize, monitor, and compound outcomes over time.',
      status: 'upcoming' as const,
    },
  ];

  return (
    <section id="process" className="process-v6">
      <div className="process-v6-wrap">
        <div className="process-header reveal">
          <div className="process-kicker">Deployment Process</div>
          <h2 className="process-title">
            From audit to <em>infrastructure.</em>
          </h2>
          <p className="process-sub">A clear path from diagnosis to a live system.</p>
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
