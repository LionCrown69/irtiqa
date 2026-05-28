import React from 'react';
import RoadmapCard from './ui/roadmap-card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      quarter: 'Step 01',
      title: 'Audit Call',
      description: 'One hour with our team. No pitch. We ask the right questions, listen to how your business actually runs, and map exactly where revenue is being lost.',
      status: 'done' as const
    },
    {
      quarter: 'Step 02',
      title: 'Growth Report',
      description: 'Within 24 hours you receive a written report — specific to your business, not a template. It tells you exactly what is leaking, what it is costing you, and what we recommend building to fix it.',
      status: 'in-progress' as const
    },
    {
      quarter: 'Step 03',
      title: 'Build',
      description: 'Design the architecture, then implement in phases — systems, integrations, agents, and workflows. You approve everything before we build anything.',
      status: 'upcoming' as const
    },
    {
      quarter: 'Step 04',
      title: 'Partner',
      description: 'This is where Irtiqa becomes a long-term part of your business — not a vendor you manage but a partner who is invested in your results.',
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
