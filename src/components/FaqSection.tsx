import React from 'react';

const faqItems = [
  {
    q: 'What does Irtiqa AI Agency do?',
    a: 'Irtiqa AI Agency designs and deploys AI operations systems for service businesses, including lead response automation, follow-up workflows, booking logic, and reporting layers.'
  },
  {
    q: 'Who is Irtiqa AI best for?',
    a: 'Irtiqa AI is built for agencies, consultants, clinics, legal teams, finance firms, and local service businesses that need faster response speed and better lead-to-call conversion.'
  },
  {
    q: 'Can Irtiqa AI work with my current tools and CRM?',
    a: 'Yes. Irtiqa AI systems are designed to integrate with your current lead forms, CRM, calendar, and communication stack so your team does not need to rebuild everything from scratch.'
  },
  {
    q: 'How fast can implementation start?',
    a: 'Most projects start with a growth audit and implementation roadmap. Deployment speed depends on your stack, but the first operational automation layer is typically delivered in phases.'
  },
  {
    q: 'Do we need a large internal team to run this?',
    a: 'No. The goal of Irtiqa AI Agency is to reduce manual dependency by building process layers that continue operating with minimal day-to-day intervention.'
  },
  {
    q: 'How do we get started with Irtiqa AI Agency?',
    a: 'Book a free audit call through the website. Irtiqa maps current bottlenecks, defines high-impact automations, and recommends a rollout plan aligned to revenue goals.'
  }
];

const FaqSection: React.FC = () => {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="faq-shell">
        <div className="faq-head">
          <span className="faq-chip">Irtiqa AI FAQ</span>
          <h2 id="faq-title">Questions teams ask before they scale with Irtiqa AI</h2>
          <p>
            This section covers how Irtiqa AI Agency handles AI automation for service businesses,
            lead management workflows, and revenue operations systems.
          </p>
        </div>

        <div className="faq-grid">
          {faqItems.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div className="faq-intent-links" aria-label="Service pages">
          <a href="/ai-automation-services.html">AI Automation Services</a>
          <a href="/lead-follow-up-automation.html">Lead Follow-Up Automation</a>
          <a href="/revenue-operations-ai.html">AI Revenue Operations</a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
