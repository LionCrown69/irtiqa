'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InstitutionalHeader from '../layout/InstitutionalHeader';
import InstitutionalFooter from '../layout/InstitutionalFooter';

interface CapabilityFamily {
  letter: string;
  name: string;
  pillar: string;
  definition: string;
  capabilities: string[];
  engagementTypes: string[];
  status: 'CURRENT' | 'PROPOSED' | 'PLANNED';
}

const FAMILIES: CapabilityFamily[] = [
  {
    letter: 'A',
    name: 'Strategic & Economic Advisory',
    pillar: 'Strategy',
    definition: 'Advisory engagements designed to clarify strategic direction, evaluate opportunities, identify constraints and establish the architecture required for sustainable growth.',
    capabilities: [
      'Corporate Strategy', 'Growth Strategy', 'Business Model Advisory',
      'Strategic Planning', 'Market Intelligence', 'Competitive Intelligence',
      'Market Entry Strategy', 'Expansion Strategy', 'Corporate Development',
      'Economic Advisory & Research', 'Strategic Transformation'
    ],
    engagementTypes: ['Advisory', 'Strategic Project', 'Continuity'],
    status: 'CURRENT'
  },
  {
    letter: 'B',
    name: 'Risk Advisory',
    pillar: 'Strategy / Operations',
    definition: 'Strategic, operational, commercial and market risk review to support resilient decision-making across volatile cross-border markets.',
    capabilities: [
      'Strategic Risk Assessment', 'Operational Risk Review', 'Commercial Risk Review',
      'Market Risk Assessment', 'Business Continuity Advisory', 'Risk Mitigation Architecture'
    ],
    engagementTypes: ['Advisory', 'Project', 'Continuity'],
    status: 'PROPOSED'
  },
  {
    letter: 'C',
    name: 'Capital & Investment Advisory',
    pillar: 'Strategy / Revenue',
    definition: 'Strategic advisory, capital-formation support, transaction support and investment structuring support. Subject to applicable regulatory mandates.',
    capabilities: [
      'Capital Strategy', 'Capital Establishment', 'Capital Formation Support',
      'Capital-Raising Advisory', 'Investment Structuring', 'Investment Portfolio Structuring',
      'Strategic Investor Relations', 'Transaction Advisory', 'M&A Advisory Support', 'Co-Investment Structures'
    ],
    engagementTypes: ['Advisory', 'Capital-Investment Engagement (where legally authorized)'],
    status: 'CURRENT'
  },
  {
    letter: 'D',
    name: 'Market Access & International Expansion',
    pillar: 'Strategy / Operations',
    definition: 'Irtiqa supports businesses entering, developing and scaling within strategic international markets through intelligence, relationships, commercial architecture and execution support.',
    capabilities: [
      'Market Access', 'Market Entry Strategy', 'International Expansion',
      'Business Relocation', 'Cross-Border Commercial Development', 'Distribution Development',
      'Local Partner Identification', 'Strategic Market Development'
    ],
    engagementTypes: ['Advisory', 'Strategic Project', 'Implementation', 'Strategic Partnership'],
    status: 'CURRENT'
  },
  {
    letter: 'E',
    name: 'Corporate & Commercial Development',
    pillar: 'Revenue',
    definition: 'Capabilities that build and expand a client’s commercial engine — from pipeline architecture through to strategic alliance development.',
    capabilities: [
      'Business Development Architecture', 'Direct Business Development', 'Commercial Strategy',
      'Revenue Architecture', 'Sales Infrastructure', 'Sales Force Development',
      'Commercial Operations', 'Strategic Alliances', 'Revenue Partnerships (R/30)'
    ],
    engagementTypes: ['Advisory', 'Implementation', 'Continuity', 'Strategic Partnership'],
    status: 'CURRENT'
  },
  {
    letter: 'F',
    name: 'Operations & Transformation',
    pillar: 'Operations',
    definition: 'Capabilities that build the operating machine behind a strategy — process, organization, performance and supply-chain infrastructure.',
    capabilities: [
      'Operating Model Design', 'Process Transformation', 'Operational Strategy',
      'Project Management', 'Organizational Infrastructure', 'Workflow Architecture',
      'Total Quality Management', 'Performance Systems', 'Supply Chain Development', 'Logistics & Warehousing'
    ],
    engagementTypes: ['Advisory', 'Transformation', 'Implementation', 'Continuity'],
    status: 'CURRENT'
  },
  {
    letter: 'G',
    name: 'Technology, AI & Intelligence',
    pillar: 'Technology',
    definition: 'Technology deployed because it solves a verified business problem — never sold for its own sake. AI is one capability within this family, not a definition of Irtiqa.',
    capabilities: [
      'Technology Strategy & Advisory', 'AI Strategy', 'AI Transformation & Implementation',
      'Workflow Automation', 'Enterprise Data & Intelligence', 'LLM Advisory & Governance',
      'Digital Transformation', 'Technology Architecture', 'Intelligent Business Systems'
    ],
    engagementTypes: ['Advisory', 'Implementation', 'Continuity'],
    status: 'CURRENT'
  },
  {
    letter: 'H',
    name: 'Trade, Sourcing & Supply',
    pillar: 'Operations',
    definition: 'Capabilities that build resilient sourcing, procurement and distribution infrastructure for cross-border commercial operations.',
    capabilities: [
      'Product & Market Research', 'Strategic Product Sourcing', 'Procurement Strategy',
      'Supplier Development', 'Supplier Network Development', 'Trade Development',
      'Export Promotion', 'Distribution Infrastructure', 'Cross-Border Logistics'
    ],
    engagementTypes: ['Advisory', 'Strategic Project', 'Implementation', 'Continuity'],
    status: 'CURRENT'
  },
  {
    letter: 'I',
    name: 'Partnerships, Joint Ventures & Collaboration',
    pillar: 'Revenue / Strategy',
    definition: 'Presented as potential engagement structures, not guaranteed offerings. Structures are evaluated case by case according to strategic and commercial fit.',
    capabilities: [
      'Strategic Partnerships', 'Business Alliances', 'Joint Ventures',
      'Venture Partnerships', 'Co-Investment Structures', 'Revenue Partnerships',
      'Growth Partnerships', 'Long-Term Commercial Partnerships'
    ],
    engagementTypes: ['Strategic Partnership', 'Joint Venture / Co-Development (Qualified)'],
    status: 'PROPOSED'
  },
  {
    letter: 'J',
    name: 'Projects & Special Situations',
    pillar: 'Operations',
    definition: 'Discrete, time-bound mandates that sit outside standard engagement categories, mobilized for specific strategic or commercial situations.',
    capabilities: [
      'Project Management', 'Special Projects Delivery', 'Transformation Programs',
      'Market Development Projects', 'Strategic Initiatives', 'Cross-Border Mandates',
      'Special Situations Advisory'
    ],
    engagementTypes: ['Strategic Project', 'Transformation', 'Implementation'],
    status: 'CURRENT'
  }
];

export default function CapabilitiesPage() {
  const [filterPillar, setFilterPillar] = useState<string>('ALL');

  const filteredFamilies = filterPillar === 'ALL'
    ? FAMILIES
    : FAMILIES.filter(f => f.pillar.includes(filterPillar));

  return (
    <div className="capabilities-page-root" style={{ background: '#FFFFFF', color: '#111111' }}>
      <InstitutionalHeader />

      {/* Hero Banner */}
      <section style={{ padding: '5.5rem 0 4rem 0', borderBottom: '1px solid var(--color-hairline)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)' }}>
        <div className="ap-container">
          <span className="eyebrow">Institutional Architecture</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
            Integrated Capability Platform
          </h1>
          <p className="lead" style={{ maxWidth: '820px', fontSize: '1.2rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
            The four strategic pillars provide Irtiqa&apos;s architectural foundation. The capability platform provides the depth beneath it — organized into ten institutional families rather than a flat service list.
          </p>
        </div>
      </section>

      {/* Pillar Filter Bar */}
      <section style={{ padding: '1.5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginRight: '0.5rem' }}>
              Filter by Pillar:
            </span>
            {['ALL', 'Strategy', 'Operations', 'Revenue', 'Technology'].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setFilterPillar(p)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: filterPillar === p ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                  background: filterPillar === p ? 'var(--color-blue-deep)' : '#FFFFFF',
                  color: filterPillar === p ? '#FFFFFF' : 'var(--color-blue-deep)',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              >
                {p === 'ALL' ? 'All Capability Families (10)' : p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Families Catalog */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="ap-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filteredFamilies.map((fam) => (
              <div 
                key={fam.letter}
                id={`family-${fam.letter}`}
                className="card-authoritative"
                style={{ padding: '2.5rem', background: '#FFFFFF', borderLeftColor: fam.status === 'CURRENT' ? 'var(--color-blue-primary)' : 'var(--color-gold)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                    <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>
                      {fam.letter}
                    </span>
                    <div>
                      <h2 style={{ fontSize: '1.75rem', color: 'var(--color-blue-deep)', margin: 0 }}>
                        {fam.name}
                      </h2>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                        Primary Pillar: <strong>{fam.pillar}</strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className={`status-badge ${fam.status === 'CURRENT' ? 'current' : 'proposed'}`}>
                      {fam.status}
                    </span>
                  </div>
                </div>

                <div className="ap-grid-12">
                  <div className="ap-col-6">
                    <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginBottom: '0.75rem' }}>
                      Institutional Definition
                    </h4>
                    <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                      {fam.definition}
                    </p>

                    <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginBottom: '0.75rem' }}>
                      Potential Engagement Models
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {fam.engagementTypes.map((eng, idx) => (
                        <span key={idx} style={{ padding: '0.35rem 0.75rem', background: 'var(--color-panel-tint)', border: '1px solid var(--color-hairline)', fontSize: '0.8125rem', color: 'var(--color-blue-deep)' }}>
                          {eng}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="ap-col-6">
                    <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}>
                      <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-deep)', marginBottom: '1rem' }}>
                        Illustrative Capabilities ({fam.capabilities.length})
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                        {fam.capabilities.map((cap, idx) => (
                          <div key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>&bull;</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mandate Consultation Box */}
          <div className="panel-navy" style={{ marginTop: '4.5rem', textAlign: 'center', padding: '3.5rem 2rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold-pale)' }}>Engagement Scoping</span>
            <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Assemble the Capabilities for Your Specific Mandate
            </h3>
            <p style={{ color: '#C8D4E2', fontSize: '1.0625rem', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Not every engagement draws on every family. We diagnose your binding constraint first, then mobilize the precise capabilities required to execute.
            </p>
            <Link href="/contact" className="btn btn-gold" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              Discuss a Mandate with Practice Leadership &rarr;
            </Link>
          </div>
        </div>
      </section>

      <InstitutionalFooter />
    </div>
  );
}
