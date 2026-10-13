'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { initializeAttribution, AttributionData } from '../../lib/attribution';
import InstitutionalHeader from '../layout/InstitutionalHeader';
import InstitutionalFooter from '../layout/InstitutionalFooter';

interface PracticeArea {
  number: string;
  title: string;
  tagline: string;
  scope: string;
  capabilities: string[];
  primaryPillar: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    number: '01',
    title: 'Strategy & Economic Advisory',
    tagline: 'Define direction. Identify opportunities. Allocate resources.',
    scope: 'Advisory engagements designed to clarify corporate direction, evaluate market dynamics, identify binding constraints, and establish the strategic architecture required for sustainable expansion.',
    capabilities: [
      'Corporate & Growth Strategy',
      'Business Model Advisory',
      'Strategic Planning & Capital Allocation',
      'Market & Competitive Intelligence',
      'Economic Research & Advisory',
      'Corporate Development & Transformation'
    ],
    primaryPillar: 'Strategy'
  },
  {
    number: '02',
    title: 'Operations & Transformation',
    tagline: 'Design the operating model. Improve execution. Build capacity.',
    scope: 'Operating models and execution systems that translate corporate strategy into consistent organizational delivery at scale, eliminating frictional drag and margin compression.',
    capabilities: [
      'Operating Model Design',
      'Process & Operational Transformation',
      'Project & Mandate Management',
      'Organizational Infrastructure',
      'Performance Management Systems',
      'Supply Chain & Logistics Architecture'
    ],
    primaryPillar: 'Operations'
  },
  {
    number: '03',
    title: 'Revenue & Commercial Development',
    tagline: 'Develop commercial architecture, partnerships and revenue channels.',
    scope: 'Commercial infrastructure that converts strategy into predictable pipeline, high-converting sales motions, and long-term revenue partnerships.',
    capabilities: [
      'Revenue Architecture & Optimization',
      'Commercial Go-To-Market Strategy',
      'Sales Force & Pipeline Infrastructure',
      'Direct Business Development Systems',
      'Customer Acquisition Frameworks',
      'Strategic Revenue Partnerships (R/30)'
    ],
    primaryPillar: 'Revenue'
  },
  {
    number: '04',
    title: 'Technology, AI & Intelligence',
    tagline: 'Apply AI, data and systems where they create business value.',
    scope: 'Technology advisory and systems deployment wherein artificial intelligence and intelligent automation are utilized strictly to resolve verified enterprise constraints, not sold for novelty.',
    capabilities: [
      'Technology Strategy & Architecture',
      'AI Advisory & Transformation',
      'Intelligent Automation & Workflows',
      'Data Systems & Business Intelligence',
      'Enterprise Digital Transformation',
      'Modern Business Operating Systems'
    ],
    primaryPillar: 'Technology'
  },
  {
    number: '05',
    title: 'Market Access, Trade & Expansion',
    tagline: 'Establish reach. Build supplier networks. Access new jurisdictions.',
    scope: 'Cross-border commercial architecture supporting enterprises entering, developing, and scaling within target international markets through intelligence, supplier channels, and local networks.',
    capabilities: [
      'Market-Entry Strategy & Scoping',
      'Cross-Border Commercial Development',
      'Supplier & Procurement Development',
      'Trade & Distribution Infrastructure',
      'Local Counterparty Identification',
      'International Territory Expansion'
    ],
    primaryPillar: 'Strategy / Operations'
  },
  {
    number: '06',
    title: 'Capital, Investment & Strategic Partnerships',
    tagline: 'Structure transactions. Form alliances. Prepare for capitalization.',
    scope: 'Advisory and structuring support for capital strategy, joint ventures, strategic alliances, and investment readiness—subject to applicable mandates and legal authorizations.',
    capabilities: [
      'Capital Strategy & Formation Support',
      'Investment Structuring Advisory',
      'Strategic Investor Relations Briefs',
      'M&A & Transaction Support',
      'Commercial Joint Ventures',
      'Strategic Co-Development Structures'
    ],
    primaryPillar: 'Strategy / Revenue'
  }
];

export default function InstitutionalHome() {
  const [selectedPractice, setSelectedPractice] = useState<number>(0);
  const [attribution, setAttribution] = useState<AttributionData | null>(null);

  // Mandate Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>(['Strategy', 'Operations']);
  const [challengeDescription, setChallengeDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('');

  useEffect(() => {
    const data = initializeAttribution();
    setAttribution(data);

    // Preload Calendly embed script
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const handleAreaToggle = (areaTitle: string) => {
    if (selectedAreas.includes(areaTitle)) {
      setSelectedAreas(selectedAreas.filter(a => a !== areaTitle));
    } else {
      setSelectedAreas([...selectedAreas, areaTitle]);
    }
  };

  const handleMandateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      name,
      email,
      a1: company,
      a2: selectedAreas.join(', ')
    });
    setCalendlyUrl(`https://calendly.com/irtiqaaiagency/audit-call?${query.toString()}`);
    setIsSubmitted(true);
  };

  const activePractice = PRACTICE_AREAS[selectedPractice];

  return (
    <div className="institutional-site-root" style={{ background: '#FFFFFF', color: '#111111' }}>
      
      {/* 1. INSTITUTIONAL MASTHEAD & GLOBAL NAVIGATION */}
      <InstitutionalHeader />

      {/* 2. EDITORIAL HERO (BCG / Blackstone / McKinsey Authority) */}
      <section style={{ padding: '6rem 0 5rem 0', borderBottom: '1px solid var(--color-hairline)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-8">
              <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }} />
                STRATEGY &bull; EXECUTION &bull; GROWTH
              </span>
              
              <h1 style={{ fontSize: 'clamp(2.75rem, 5.25vw, 4.25rem)', lineHeight: 1.12, marginBottom: '1.75rem', color: 'var(--color-blue-deep)', letterSpacing: '-0.02em' }}>
                Build the next stage of your business.
              </h1>

              <p className="lead" style={{ maxWidth: '740px', marginBottom: '2.5rem', fontSize: '1.2rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                Irtiqa works with businesses to address complex strategic and operational challenges, develop commercial opportunities, and build the capabilities required for sustained growth.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
                <a href="#mandate" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem', fontSize: '0.9375rem' }}>
                  Discuss a Mandate
                </a>
                <a href="#practice-areas" className="btn btn-secondary" style={{ padding: '0.9rem 1.85rem', fontSize: '0.9375rem' }}>
                  Explore Capabilities &rarr;
                </a>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderLeftColor: 'var(--color-gold)', boxShadow: '0 12px 32px rgba(12, 35, 64, 0.05)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  The Core Proposition
                </div>
                
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-blue-deep)', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                  The Architecture of What Comes Next.
                </h3>
                
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Irtiqa works with businesses to clarify strategic direction, strengthen operating models, develop commercial opportunities, and deploy technology to support sustained growth.
                </p>

                <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--color-graphite)' }}>Commercial Network</span>
                    <Link href="/partners" style={{ color: 'var(--color-blue-primary)', fontWeight: 600, textDecoration: 'none' }}>
                      R/30 Partner Program &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 01: OUR APPROACH (One business. Interconnected decisions.) */}
      <section id="approach" style={{ padding: '6rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">01</span>
            <span className="eyebrow">Our Approach</span>
            <h2>One business. Interconnected decisions.</h2>
            <p className="lead" style={{ maxWidth: '840px' }}>
              Growth rarely depends on a single function. Strategy must translate into operations. Operations must support commercial performance. Technology must strengthen the entire system.
            </p>
          </div>

          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-ink)', lineHeight: 1.7, maxWidth: '860px' }}>
              Irtiqa brings these dimensions together around the business problem that matters most. Rather than selling disconnected advisory decks or narrow tactical tools, we treat the enterprise as an interconnected system.
            </p>
          </div>

          {/* Four Strategic Pillars Grid */}
          <div className="ap-grid-12">
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>01</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>Strategy</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  Set the direction.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                  Define direction. Identify strategic opportunities. Allocate capital and organizational resources where leverage is highest.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>02</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>Operations</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  Build the operating model.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                  Design the operating model. Improve process execution. Build delivery capacity, organizational infrastructure, and supply chain resilience.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>03</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>Revenue</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  Develop commercial value.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                  Develop commercial architecture, pipeline infrastructure, strategic partnerships, and sustainable cross-border revenue channels.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>04</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>Technology</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  Create leverage.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                  Apply AI, intelligent workflows, modern data architectures, and business systems strictly where they create measurable enterprise value.
                </p>
              </div>
            </div>
          </div>

          {/* Strict Positioning Principle */}
          <div className="panel-tinted" style={{ marginTop: '3rem', borderLeft: '3px solid var(--color-blue-deep)', background: '#F8FAFC' }}>
            <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
              <strong>Institutional Positioning:</strong> Irtiqa is never reduced to an AI company. Artificial intelligence is one specialized capability within Technology, deployed strictly because it resolves an audited business constraint, never sold for its own sake.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION 02: THE SIX PRACTICE AREAS (Consolidated Architecture) */}
      <section id="practice-areas" style={{ padding: '6rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">02</span>
            <span className="eyebrow">Practice Areas</span>
            <h2>Six Consolidated Capabilities</h2>
            <p className="lead">
              Our wider corporate capability platform organized into six clear client-facing practice areas.
            </p>
          </div>

          {/* Practice Area Selector Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {PRACTICE_AREAS.map((p, idx) => (
              <button
                key={p.number}
                type="button"
                onClick={() => setSelectedPractice(idx)}
                style={{
                  padding: '0.85rem 1rem',
                  border: '1px solid',
                  borderColor: selectedPractice === idx ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                  background: selectedPractice === idx ? 'var(--color-blue-deep)' : '#FFFFFF',
                  color: selectedPractice === idx ? '#FFFFFF' : 'var(--color-blue-deep)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8, marginBottom: '0.2rem' }}>
                  Practice {p.number}
                </div>
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {p.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Practice Area Showcase */}
          <div className="card-authoritative" style={{ background: '#FFFFFF', padding: '3rem', borderLeftColor: 'var(--color-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '0.25rem' }}>{activePractice.tagline}</span>
                <h3 style={{ fontSize: '1.85rem', color: 'var(--color-blue-deep)', margin: 0 }}>
                  {activePractice.number} &bull; {activePractice.title}
                </h3>
              </div>
              <span className="status-badge current">Pillar: {activePractice.primaryPillar}</span>
            </div>

            <div className="ap-grid-12">
              <div className="ap-col-6">
                <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginBottom: '0.75rem' }}>
                  Practice Scope
                </h4>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {activePractice.scope}
                </p>

                <div style={{ background: '#FAF9F6', padding: '1.25rem', borderLeft: '3px solid var(--color-gold)', borderRadius: '2px' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Specialist Mandates
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                    Risk advisory and special situation projects are mobilized selectively under this practice area where client requirements dictate.
                  </div>
                </div>
              </div>

              <div className="ap-col-6">
                <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}>
                  <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-deep)', marginBottom: '1.25rem' }}>
                    Core Practice Capabilities
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {activePractice.capabilities.map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-blue-deep)' }}>
                        <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>&rarr;</span>
                        <span style={{ fontWeight: 600 }}>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-hairline)', marginTop: '2rem', paddingTop: '1.25rem' }}>
                    <a href="#mandate" className="btn btn-primary" style={{ width: '100%', fontSize: '0.875rem' }}>
                      Inquire on this Practice Area &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 03: HOW WE WORK (From diagnosis to execution.) */}
      <section id="how-we-work" style={{ padding: '6rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">03</span>
            <span className="eyebrow">Delivery Model</span>
            <h2>How We Work: From diagnosis to execution.</h2>
            <p className="lead" style={{ maxWidth: '820px' }}>
              We do not leave strategy on a whiteboard. Every engagement follows a disciplined five-stage progression connecting diagnostic clarity directly to operational execution.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-12">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
                <div className="pathway-step">
                  <div className="pathway-number">01</div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Diagnose</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
                    Understand the business, its binding constraints, and the strategic opportunity through rigorous operational and commercial review.
                  </p>
                </div>

                <div className="pathway-step">
                  <div className="pathway-number">02</div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Design</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
                    Establish the strategic direction and intervention plan. Structure the exact multidisciplinary capability architecture required.
                  </p>
                </div>

                <div className="pathway-step">
                  <div className="pathway-number">03</div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Mobilize</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
                    Assemble the capabilities, technical systems, and capital/commercial resources necessary to support the mandate.
                  </p>
                </div>

                <div className="pathway-step">
                  <div className="pathway-number">04</div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Execute</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
                    Implement the agreed initiatives and operating changes alongside client leadership, embedding durable capability.
                  </p>
                </div>

                <div className="pathway-step" style={{ borderLeftColor: 'var(--color-gold)' }}>
                  <div className="pathway-number" style={{ color: 'var(--color-blue-deep)' }}>05</div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Measure</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
                    Evaluate progress against agreed objectives, audit performance milestones, and determine the next stage of compounding growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 04: MARKETS & STRATEGIC ALLIANCES */}
      <section id="markets" style={{ padding: '5.5rem 0', background: 'var(--color-blue-deep)', color: '#FFFFFF' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-8">
              <span className="eyebrow" style={{ color: 'var(--color-gold-pale)', marginBottom: '0.75rem' }}>
                Global Reach &bull; Strategic Alliances
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.25rem' }}>
                International Expansion, Market Access &amp; Capital Relationships
              </h2>
              <p style={{ color: '#C8D4E2', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '720px', marginBottom: '1.75rem' }}>
                We structure specialized cross-border market entry, procurement distribution, and capital-formation vehicles with qualified institutional partners globally. All alliance structures are evaluated case-by-case on strategic and commercial alignment.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#mandate" className="btn btn-gold" style={{ padding: '0.75rem 1.5rem' }}>
                  Inquire on Strategic Alliances
                </a>
                <Link href="/partners" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
                  Explore Partner Origination &rarr;
                </Link>
              </div>
            </div>

            <div className="ap-col-4">
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', padding: '2rem', borderRadius: '4px' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Relationship Compounding
                </div>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.4 }}>
                  &ldquo;Do not sell a service once. Build relationships that compound.&rdquo;
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#9EB0C5', lineHeight: 1.6 }}>
                  From initial advisory to operational transformation, international market access, and strategic capital collaboration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 05: COMMERCIAL MONETIZATION & R/30 PARTNER PROGRAM */}
      <section style={{ padding: '6rem 0', background: '#FAFAF8', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>04</span>
            <span className="r30-badge" style={{ marginBottom: '0.5rem' }}>Commercial Engine &bull; R/30</span>
            <h2>Where Relationships Become Revenue</h2>
            <p className="lead" style={{ maxWidth: '820px' }}>
              Irtiqa operates a dedicated commercial monetization engine through the R/30 Revenue Partner Program. We partner with commercial executives, brokers, industry leaders, and setters/closers to originate and monetize qualified enterprise mandates.
            </p>
          </div>

          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-7">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-blue-deep)', marginBottom: '1rem' }}>
                Institutional Setter-to-Closer Traceability
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                No invisible handoffs. Every introduction is tracked from lead qualification to proposal delivery, verified revenue, and transparent fee distribution:
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center', fontSize: '0.8125rem', marginBottom: '2rem' }}>
                <span className="status-badge current">Lead</span> &rarr;
                <span className="status-badge current">Partner</span> &rarr;
                <span className="status-badge current">Appointment</span> &rarr;
                <span className="status-badge current">Closer</span> &rarr;
                <span className="status-badge current">Proposal</span> &rarr;
                <span className="status-badge proposed">Revenue</span> &rarr;
                <span className="status-badge proposed" style={{ border: '1px solid var(--color-gold)', color: '#8C6B32' }}>Commission</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/partners" className="btn btn-gold">
                  Explore R/30 Revenue Partner Program &rarr;
                </Link>
              </div>
            </div>

            <div className="ap-col-5">
              <div className="card-authoritative" style={{ background: '#FFFFFF', padding: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-blue-deep)' }}>
                  Partner Enablement Infrastructure
                </h4>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Complete Service, Tier &amp; Pricing Briefs</li>
                  <li>&bull; Enterprise Calling &amp; Communication Systems</li>
                  <li>&bull; Dedicated Company Email (@domain)</li>
                  <li>&bull; Transparent Shared CRM Opportunity Tracking</li>
                  <li>&bull; Rapid Onboarding SLA (24&ndash;48h Target)</li>
                </ul>
                <div style={{ marginTop: '1rem', borderTop: '1px solid var(--color-hairline)', paddingTop: '0.75rem', fontSize: '0.75rem', color: 'var(--color-graphite)' }}>
                  Status: Active Selection for Cohort Expansion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 06: EXECUTIVE MANDATE INTAKE ("Discuss a Mandate") */}
      <section id="mandate" style={{ padding: '6.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">05</span>
            <span className="eyebrow">Start an Engagement</span>
            <h2>The next stage begins with a conversation.</h2>
            <p className="lead" style={{ maxWidth: '820px' }}>
              Tell us about the business challenge, strategic opportunity or transformation you are considering. We will assess whether there is a fit for an engagement.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-8">
              {isSubmitted ? (
                /* LIVE MEETING SCHEDULER VIEW */
                <div className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF', borderLeft: '3px solid var(--color-blue-deep)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>MANDATE RECEIVED</span>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>
                        Welcome, {name} ({company})
                      </h3>
                    </div>
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.875rem' }}>
                      Open in Full Window &rarr;
                    </a>
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', marginBottom: '1.5rem' }}>
                    Select a confidential briefing slot directly below with an Irtiqa practice principal. Your mandate parameters have been pre-filled.
                  </p>

                  <div style={{ minHeight: '680px', width: '100%', border: '1px solid var(--color-hairline)', borderRadius: '4px', overflow: 'hidden' }}>
                    <iframe
                      src={calendlyUrl}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Schedule Executive Consultation"
                    />
                  </div>
                </div>
              ) : (
                /* MANDATE FORM */
                <form onSubmit={handleMandateSubmit} className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="clientName">Full Name <span className="required">*</span></label>
                      <input 
                        type="text" 
                        id="clientName" 
                        required 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        className="form-input" 
                        placeholder="e.g. Alistair Vance" 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="clientCompany">Company / Organization <span className="required">*</span></label>
                      <input 
                        type="text" 
                        id="clientCompany" 
                        required 
                        value={company} 
                        onChange={e => setCompany(e.target.value)} 
                        className="form-input" 
                        placeholder="e.g. Meridian Global Holdings" 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="clientEmail">Corporate Work Email <span className="required">*</span></label>
                    <input 
                      type="email" 
                      id="clientEmail" 
                      required 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      className="form-input" 
                      placeholder="name@company.com" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Practice Areas of Concern</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', marginTop: '0.5rem' }}>
                      {PRACTICE_AREAS.map(p => (
                        <label key={p.title} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={selectedAreas.includes(p.title)}
                            onChange={() => handleAreaToggle(p.title)}
                          />
                          {p.title}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="clientChallenge">The Business Challenge or Strategic Opportunity <span className="required">*</span></label>
                    <textarea 
                      id="clientChallenge" 
                      rows={4} 
                      required 
                      value={challengeDescription} 
                      onChange={e => setChallengeDescription(e.target.value)} 
                      className="form-textarea" 
                      placeholder="Summarize the primary strategic constraint, growth goals, or operational transformation under consideration." 
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}>
                    Submit Mandate &amp; Select Consultation Time &rarr;
                  </button>
                  <span className="form-helper" style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                    All communications and corporate information are treated under strict institutional confidentiality.
                  </span>
                </form>
              )}
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', marginBottom: '1.5rem', borderLeftColor: 'var(--color-blue-deep)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-deep)' }}>Direct Engagement</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No Generic Sales Calls</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  Initial discussions are held directly with experienced practice principals capable of evaluating strategic, operational, and commercial architecture.
                </p>
              </div>

              <div className="card-authoritative" style={{ background: '#FAF9F6', borderLeftColor: 'var(--color-gold)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Operating Standard</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Mandate Assessment</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  We evaluate engagements on structural alignment, resource capacity, and mutual commitment to execution.
                </p>
                <span className="status-badge proposed">RESPONSE TARGET: 24–48 HOURS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSTITUTIONAL FOOTER & MANDATORY REGULATORY NOTICE */}
      <InstitutionalFooter />
    </div>
  );
}
