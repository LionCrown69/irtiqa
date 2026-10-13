'use client';

import React from 'react';
import Link from 'next/link';
import InstitutionalHeader from '../layout/InstitutionalHeader';
import InstitutionalFooter from '../layout/InstitutionalFooter';

interface EngagementModel {
  number: string;
  category: string;
  nature: string;
  condition: string;
  typicalDuration: string;
}

const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    number: '01',
    category: 'Advisory',
    nature: 'Diagnostic and strategic guidance for a defined corporate question, strategic constraint, or growth decision.',
    condition: 'Standard Engagement',
    typicalDuration: '4–8 Weeks'
  },
  {
    number: '02',
    category: 'Strategic Projects',
    nature: 'Bounded initiatives with defined objectives, specific deliverables, and dedicated sprint execution milestones.',
    condition: 'Standard Engagement',
    typicalDuration: '2–4 Months'
  },
  {
    number: '03',
    category: 'Transformation',
    nature: 'Multi-workstream organizational change across strategy, operations, revenue, or technology architecture.',
    condition: 'Standard Engagement',
    typicalDuration: '6–18 Months'
  },
  {
    number: '04',
    category: 'Implementation',
    nature: 'Hands-on execution of agreed initiatives alongside client leadership to eliminate operational friction.',
    condition: 'Standard Engagement',
    typicalDuration: '3–9 Months'
  },
  {
    number: '05',
    category: 'Continuity / Retainer',
    nature: 'Ongoing commercial support that sustains progress, maintains momentum, and supports leadership decision-making.',
    condition: 'Standard Engagement',
    typicalDuration: 'Annual / Recurring'
  },
  {
    number: '06',
    category: 'Strategic Partnership',
    nature: 'Long-term commercial collaboration structured around shared commercial targets and territory expansion.',
    condition: 'Case-by-case Evaluation',
    typicalDuration: 'Multi-Year'
  },
  {
    number: '07',
    category: 'Joint Venture / Co-Development',
    nature: 'Structured commercial collaboration around shared market development, IP co-development, and mutual ownership.',
    condition: 'Qualified Partners Only',
    typicalDuration: 'Strategic Vehicle'
  },
  {
    number: '08',
    category: 'Capital / Investment-Related Advisory',
    nature: 'Engagements touching capital strategy, transaction structuring, investor readiness, or strategic financing.',
    condition: 'Subject to Applicable Authorizations',
    typicalDuration: 'Mandate-Based'
  }
];

export default function HowWeWorkPage() {
  return (
    <div className="how-we-work-page-root" style={{ background: '#FFFFFF', color: '#111111' }}>
      <InstitutionalHeader />

      {/* Hero Section */}
      <section style={{ padding: '5.5rem 0 4rem 0', borderBottom: '1px solid var(--color-hairline)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)' }}>
        <div className="ap-container">
          <span className="eyebrow">Operating Method</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
            From Diagnosis to Execution
          </h1>
          <p className="lead" style={{ maxWidth: '820px', fontSize: '1.2rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
            Irtiqa is built on a simple conviction: strategy that cannot be mobilized into operational execution is useless. We diagnose the binding constraint, architect the intervention, and work alongside leadership to deliver measurable results.
          </p>
        </div>
      </section>

      {/* 5-Stage Methodology Deep Dive */}
      <section style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">01</span>
            <span className="eyebrow">The Five-Stage Sequence</span>
            <h2>The Mandate Delivery Pathway</h2>
            <p className="lead">
              Every client engagement progresses through a rigorous five-stage sequence designed to maintain clarity, accountability, and commercial compounding.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Step 1 */}
            <div className="card-authoritative" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>01</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>Diagnose the Business</h3>
                </div>
                <span className="status-badge current">Stage 01 &bull; Diagnostic Phase</span>
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We conduct an executive diagnostic across Strategy, Operations, Revenue, and Technology to identify the root cause constraint. Growth is rarely bottlenecked by a single isolated variable; we map how strategic friction, operational capacity, and commercial conversion interact.
              </p>
              <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '4px', fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                <strong>Key Deliverables:</strong> Enterprise Diagnostic Memo &bull; Constraint Mapping &bull; Executive Mandate Scope Brief.
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-authoritative" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>02</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>Architect the Solution</h3>
                </div>
                <span className="status-badge current">Stage 02 &bull; Architectural Phase</span>
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Rather than proposing generic software or standard consultancy decks, we design a customized capability architecture. We specify the exact operating models, commercial structures, technological workflows, and market channels required to resolve the constraint.
              </p>
              <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '4px', fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                <strong>Key Deliverables:</strong> Architectural Blueprint &bull; Workstream Governance Specification &bull; Milestone Roadmap.
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-authoritative" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>03</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>Mobilize the Capability</h3>
                </div>
                <span className="status-badge current">Stage 03 &bull; Mobilization Phase</span>
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Irtiqa mobilizes the precise multidisciplinary capabilities necessary for delivery. Whether requiring cross-border market intelligence, automated business infrastructure, capital structuring, or revenue development via R/30, resources are activated without unnecessary overhead.
              </p>
              <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '4px', fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                <strong>Key Deliverables:</strong> Practice Team Activation &bull; Technical Systems Environment &bull; Partner Network Routing.
              </div>
            </div>

            {/* Step 4 */}
            <div className="card-authoritative" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>04</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>Execute the Transformation</h3>
                </div>
                <span className="status-badge current">Stage 04 &bull; Execution Phase</span>
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We execute alongside client leadership. We embed operating changes, re-engineer pipeline infrastructure, deploy automated technology, and eliminate friction directly inside daily business workflows.
              </p>
              <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '4px', fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                <strong>Key Deliverables:</strong> Operational Cutover &bull; Commercial Systems Deployment &bull; Leadership Knowledge Transfer.
              </div>
            </div>

            {/* Step 5 */}
            <div className="card-authoritative" style={{ padding: '2.5rem', background: '#FAF9F6', borderLeftColor: 'var(--color-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-blue-deep)' }}>05</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>Measure &amp; Compound</h3>
                </div>
                <span className="status-badge proposed">Stage 05 &bull; Compounding Growth</span>
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We evaluate progress against agreed milestones. As the primary operational bottleneck is eliminated, the relationship compounds into subsequent growth phases: international expansion, strategic capitalization, or joint venture co-development.
              </p>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '4px', border: '1px solid var(--color-hairline)', fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                <strong>Key Deliverables:</strong> Value Realization Audit &bull; Next-Stage Growth Architecture &bull; Long-Term Continuity Charter.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Engagement Categories */}
      <section style={{ padding: '5.5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">02</span>
            <span className="eyebrow">Engagement Structures</span>
            <h2>Eight Engagement Architectures</h2>
            <p className="lead">
              Formal categories describing how Irtiqa works with a client. The categories describe how mandates can be structured, not a rigid mandatory sequence.
            </p>
          </div>

          <div className="table-responsive">
            <table className="institutional-table">
              <thead>
                <tr>
                  <th style={{ width: '8%' }}>#</th>
                  <th style={{ width: '28%' }}>Category</th>
                  <th style={{ width: '44%' }}>Nature of Engagement</th>
                  <th style={{ width: '20%' }}>Condition &amp; Horizon</th>
                </tr>
              </thead>
              <tbody>
                {ENGAGEMENT_MODELS.map((m) => (
                  <tr key={m.number}>
                    <td><strong>{m.number}</strong></td>
                    <td><strong>{m.category}</strong></td>
                    <td style={{ lineHeight: 1.6 }}>{m.nature}</td>
                    <td>
                      <div>
                        <span className="status-badge current">{m.condition}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>
                        {m.typicalDuration}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Relationship Compounding Philosophy */}
      <section style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">03</span>
            <span className="eyebrow">Compounding Model</span>
            <h2>Do not sell a service once. Build relationships that compound.</h2>
            <p className="lead">
              An Irtiqa relationship deepens as the client&apos;s corporate requirements evolve. An architectural progression from initial diagnostic clarity to global market expansion.
            </p>
          </div>

          <div className="panel-tinted" style={{ padding: '3rem', background: '#FFFFFF', border: '1px solid var(--color-hairline)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div className="diagram-pipeline-step">01. Advisory</div>
              <div className="diagram-pipeline-step">02. Strategic Project</div>
              <div className="diagram-pipeline-step">03. Implementation</div>
              <div className="diagram-pipeline-step">04. Operational Support</div>
              <div className="diagram-pipeline-step">05. Market Access</div>
              <div className="diagram-pipeline-step">06. Revenue Development</div>
              <div className="diagram-pipeline-step">07. Strategic Partnership</div>
              <div className="diagram-pipeline-step">08. Capital Opportunity</div>
            </div>
            <div className="diagram-pipeline-step" style={{ marginTop: '1.25rem', borderLeftColor: 'var(--color-blue-deep)', background: '#EBF1FA', fontWeight: 700, textAlign: 'center', justifyContent: 'center' }}>
              09. Sustainable Global Expansion &amp; Ecosystem Leadership
            </div>
          </div>

          {/* CTA Box */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-blue-deep)', marginBottom: '1rem' }}>
              Initiate a Strategic Mandate Assessment
            </h3>
            <p style={{ color: 'var(--color-graphite)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
              Discuss your organization&apos;s strategic objectives with an Irtiqa practice principal.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Discuss a Mandate &rarr;
            </Link>
          </div>
        </div>
      </section>

      <InstitutionalFooter />
    </div>
  );
}
