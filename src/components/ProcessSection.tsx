import React from 'react';
import RoadmapCard from './ui/roadmap-card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      quarter: 'Phase 01',
      title: 'Diagnostic',
      description: 'A structured review of strategy, operations, and commercial systems to quantify where value is being lost, ensuring we solve structural problems rather than treat symptoms.',
      status: 'done' as const
    },
    {
      quarter: 'Phase 02',
      title: 'Design',
      description: 'We map the specific sequence of strategic, operational, and technical interventions required, defining the architecture of the new systems and the logic of the workflows.',
      status: 'in-progress' as const
    },
    {
      quarter: 'Phase 03',
      title: 'Implementation',
      description: 'Our team works inside your operating rhythm to construct the approved architecture. We do not step back once a plan is approved; we build it.',
      status: 'upcoming' as const
    },
    {
      quarter: 'Phase 04',
      title: 'Continuity',
      description: 'We remain accountable for system performance after deployment. We actively monitor the infrastructure and adjust the logic to ensure the systems serve the commercial goals.',
      status: 'upcoming' as const
    }
  ];

  return (
    <section id="process" className="process-v6">
      <div className="process-v6-wrap">
        <div className="process-header reveal">
          <div className="process-kicker">Operating Model</div>
          <h2 className="process-title">How We <em>Work.</em></h2>
          <p className="process-sub">A structured sequence from diagnostic to continuity.</p>
        </div>

        <div className="process-v6-shell reveal d2">
          <RoadmapCard
            title="Engagement Sequence"
            description="Our operating model focuses on execution over recommendations and durability over completion."
            items={steps}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
