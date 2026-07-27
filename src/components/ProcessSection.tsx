import React from 'react';
import RoadmapCard from './ui/roadmap-card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      quarter: 'Phase 01',
      title: 'Initial Systems Consultation',
      description: 'A comprehensive operational review with our lead architects. We analyze your existing software ecosystem, quantify manual overhead, and identify pipeline friction.',
      status: 'done' as const
    },
    {
      quarter: 'Phase 02',
      title: 'Technical Architecture Proposal',
      description: 'Within 24 hours, you receive a detailed technical schematic. This outlines the specific AI integrations, API deployments, and workflow automations required to optimize your operations.',
      status: 'in-progress' as const
    },
    {
      quarter: 'Phase 03',
      title: 'Implementation & Integration',
      description: 'Our engineering team executes the deployment. We handle API bridging, CRM data synchronization, and autonomous workflow implementation without disrupting your live operations.',
      status: 'upcoming' as const
    },
    {
      quarter: 'Phase 04',
      title: 'Managed Services',
      description: 'We provide continuous SLA monitoring, performance tuning, and systemic optimization to ensure your infrastructure scales dynamically with your enterprise requirements.',
      status: 'upcoming' as const
    }
  ];

  return (
    <section id="process" className="process-v6">
      <div className="process-v6-wrap">
        <div className="process-header reveal">
          <div className="process-kicker">Integration Methodology</div>
          <h2 className="process-title">From analysis to <em>deployment.</em></h2>
          <p className="process-sub">A structured, risk-mitigated approach to systems engineering.</p>
        </div>

        <div className="process-v6-shell reveal d2">
          <RoadmapCard
            title="Systems Integration Roadmap"
            description="Our structured methodology ensures seamless deployment and continuous operational continuity."
            items={steps}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
