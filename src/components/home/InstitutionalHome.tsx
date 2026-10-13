'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { initializeAttribution, AttributionData } from '../../lib/attribution';

interface InteractiveChallenge {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  architecture: string[];
  pillarsInvolved: string[];
  rationale: string;
}

const CHALLENGES: InteractiveChallenge[] = [
  {
    id: 'market-entry',
    title: 'Entering a New International Market',
    tagline: 'Cross-Border Jurisdiction Expansion',
    problem: 'Companies attempting cross-border expansion routinely fail by hiring local sales agents before establishing regulatory, supply chain, and operating infrastructure.',
    architecture: ['Strategy', 'Market Intelligence', 'Market Access', 'Local Partnerships', 'Operations', 'Revenue Development', 'Technology'],
    pillarsInvolved: ['Strategy', 'Operations', 'Revenue', 'Technology'],
    rationale: 'Requires economic intelligence, regulatory structuring, partner origination, and localized commercial systems working in sync.'
  },
  {
    id: 'scale-prep',
    title: 'Preparing a Company for Scale',
    tagline: 'Eliminating Operational & Revenue Drag Prior to Capitalization',
    problem: 'High-growth companies often stall when revenue outpaces operational capacity, compressing gross margins and diluting enterprise valuation.',
    architecture: ['Strategy', 'Operating Model Design', 'Revenue Architecture', 'Technology Infrastructure', 'Capital Strategy'],
    pillarsInvolved: ['Strategy', 'Operations', 'Revenue', 'Technology'],
    rationale: 'Aligns growth trajectory with hardened operational workflows and automated systems before capital deployment.'
  },
  {
    id: 'supply-chain',
    title: 'Building a Resilient International Supply Chain',
    tagline: 'Cross-Border Sourcing, Trade & Logistics Optimization',
    problem: 'Supply chains built on ad-hoc vendor agreements create extreme counterparty vulnerability and working-capital inefficiencies.',
    architecture: ['Market Intelligence', 'Supplier Development', 'Trade & Sourcing', 'Logistics Infrastructure', 'Operations', 'Technology'],
    pillarsInvolved: ['Operations', 'Technology', 'Strategy'],
    rationale: 'Constructs verified supplier networks, customs clearance frameworks, and inventory tracking architecture.'
  },
  {
    id: 'commercial-acceleration',
    title: 'Accelerating Commercial Performance & Revenue Flow',
    tagline: 'Remediating Pipeline Attrition & Sales Conversion Fragility',
    problem: 'Enterprises suffer revenue leakage when sales outreach is decoupled from delivery operations and customer value measurement.',
    architecture: ['Revenue Architecture', 'Commercial Strategy', 'Operations', 'Sales Infrastructure', 'Technology & Automation'],
    pillarsInvolved: ['Revenue', 'Operations', 'Technology'],
    rationale: 'Re-engineers the commercial engine from lead origination through setter-closer qualification to delivered contract value.'
  },
  {
    id: 'capital-formation',
    title: 'Capital Formation & Transaction Structuring',
    tagline: 'Strategic Investment Readiness & Institutional Advisory',
    problem: 'Companies seeking growth capital or recapitalization enter negotiations without audited commercial metrics or structured transaction packages.',
    architecture: ['Capital Strategy', 'Investment Structuring', 'Strategic Investor Relations', 'Corporate Governance', 'M&A Advisory Support'],
    pillarsInvolved: ['Strategy', 'Revenue', 'Operations'],
    rationale: 'Develops institutional transaction briefs, investor narratives, and capital-formation architecture (subject to applicable authorizations).'
  }
];

export default function InstitutionalHome() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>('market-entry');
  const [activeTab, setActiveTab] = useState<'mandate' | 'partner'>('mandate');
  const [attribution, setAttribution] = useState<AttributionData | null>(null);

  // Mandate Form State
  const [mandateName, setMandateName] = useState('');
  const [mandateCompany, setMandateCompany] = useState('');
  const [mandateEmail, setMandateEmail] = useState('');
  const [mandatePillars, setMandatePillars] = useState<string[]>(['Strategy', 'Revenue']);
  const [mandateSummary, setMandateSummary] = useState('');
  const [mandateSubmitted, setMandateSubmitted] = useState(false);
  const [mandateCalendlyUrl, setMandateCalendlyUrl] = useState('');

  // Partner Form State
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerGeo, setPartnerGeo] = useState('UK & Europe');
  const [partnerNetworks, setPartnerNetworks] = useState('');
  const [partnerOrigination, setPartnerOrigination] = useState('');
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerReference, setPartnerReference] = useState('');
  const [partnerCalendlyUrl, setPartnerCalendlyUrl] = useState('');

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

  const handlePillarToggle = (pillar: string) => {
    if (mandatePillars.includes(pillar)) {
      setMandatePillars(mandatePillars.filter(p => p !== pillar));
    } else {
      setMandatePillars([...mandatePillars, pillar]);
    }
  };

  const handleMandateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://calendly.com/irtiqaaiagency/audit-call?name=${encodeURIComponent(mandateName)}&email=${encodeURIComponent(mandateEmail)}&a1=${encodeURIComponent(mandateCompany)}`;
    setMandateCalendlyUrl(url);
    setMandateSubmitted(true);
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitting(true);
    try {
      const res = await fetch('/api/partners/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          partnerFullName: partnerName,
          partnerEmail,
          partnerPhone,
          geography: partnerGeo,
          industries: partnerNetworks,
          experience: 'Direct Partner Dossier Submission',
          origination: partnerOrigination,
          availability: 'FULL_TIME',
          attribution_ref: attribution?.partnerRef || 'DIRECT',
          utm_source: attribution?.utmSource || 'direct',
          utm_campaign: attribution?.utmCampaign || 'homepage'
        })
      });
      const data = await res.json();
      if (data.success) {
        setPartnerReference(data.referenceId);
        setPartnerCalendlyUrl(data.calendlyUrl);
        setPartnerSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPartnerSubmitting(false);
    }
  };

  const currentChallengeObj = CHALLENGES.find(c => c.id === selectedChallenge) || CHALLENGES[0];

  return (
    <div className="mckinsey-institutional-root" style={{ background: '#FFFFFF', color: '#111111' }}>
      
      {/* 1. TOP INSTITUTIONAL MASTHEAD & NAVIGATION */}
      <header className="ap-masthead" style={{ borderBottom: '1px solid var(--color-hairline)', background: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="ap-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--color-blue-deep)' }}>
                IRTIQA
              </span>
            </Link>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.85rem' }}>|</span>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-graphite)', fontWeight: 600 }}>
              Strategic Growth &amp; Transformation
            </span>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#thesis" className="link-gold" style={{ fontSize: '0.875rem' }}>The Thesis</a>
            <a href="#pillars" className="link-gold" style={{ fontSize: '0.875rem' }}>Pillars</a>
            <a href="#matrix" className="link-gold" style={{ fontSize: '0.875rem' }}>Capability Matrix</a>
            <a href="#revenue-opportunities" className="link-gold" style={{ fontSize: '0.875rem', color: 'var(--color-gold)', fontWeight: 700 }}>Revenue Opportunities</a>
            <a href="#engagements" className="link-gold" style={{ fontSize: '0.875rem' }}>Engagements</a>
            <a href="#intake" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
              Executive Mandate
            </a>
          </nav>
        </div>
      </header>

      {/* 2. EDITORIAL HERO (McKinsey / BlackRock Style) */}
      <section style={{ padding: '5.5rem 0 4.5rem 0', borderBottom: '1px solid var(--color-hairline)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-8">
              <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }} />
                Institutional Strategy &amp; Transformation Architecture
              </span>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
                Irtiqa helps businesses transform Strategy, Operations, Revenue and Technology into scalable growth.
              </h1>

              <p className="lead" style={{ maxWidth: '720px', marginBottom: '2.5rem', fontSize: '1.1875rem', color: 'var(--color-graphite)' }}>
                A multidisciplinary strategic institution built for enterprises and leaders confronting interconnected constraints. We diagnose the binding constraint, architect the intervention, and mobilize the operational, commercial, capital, and technical capabilities required to execute.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
                <a href="#intake" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.9375rem' }}>
                  Submit Executive Mandate
                </a>
                <a href="#revenue-opportunities" className="btn btn-gold" style={{ padding: '0.85rem 1.75rem', fontSize: '0.9375rem' }}>
                  Explore Commercial Revenue Opportunities &rarr;
                </a>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', padding: '2.25rem', borderLeftColor: 'var(--color-blue-deep)', boxShadow: '0 10px 30px rgba(12, 35, 64, 0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="status-badge current">Executive Charter</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-gold)' }}>SEPT 2026</span>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-blue-deep)' }}>
                  A More Complete Model
                </h3>
                
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Traditional strategy houses stop at diagnostics and slides. Point-solution agencies sell tactical tools without governance. Irtiqa unites corporate diagnosis with direct commercial execution, international market access, and a scaled partner network.
                </p>

                <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)' }}>
                    Commercial Engine
                  </span>
                  <Link href="/partners" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-gold)', textDecoration: 'none' }}>
                    R/30 Network Active &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED PROOF LAYER (Institutional Editorial Numerals) */}
      <section style={{ padding: '2.75rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div>
              <span className="editorial-numeral editorial-numeral-lg" style={{ color: 'var(--color-blue-deep)' }}>
                10
              </span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-deep)', marginTop: '0.25rem' }}>
                Capability Families
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', marginTop: '0.2rem' }}>
                Families A through J Architecture
              </div>
            </div>

            <div>
              <span className="editorial-numeral editorial-numeral-lg" style={{ color: 'var(--color-blue-deep)' }}>
                04
              </span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-deep)', marginTop: '0.25rem' }}>
                Strategic Pillars
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', marginTop: '0.2rem' }}>
                Strategy &bull; Operations &bull; Revenue &bull; Tech
              </div>
            </div>

            <div>
              <span className="editorial-numeral editorial-numeral-lg" style={{ color: 'var(--color-gold)' }}>
                08
              </span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-deep)', marginTop: '0.25rem' }}>
                Engagement Models
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', marginTop: '0.2rem' }}>
                Advisory to Joint Ventures &amp; Capital
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="status-badge proposed">R/30 NETWORK</span>
              </div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-blue-deep)' }}>
                Global Revenue Partners
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', marginTop: '0.2rem' }}>
                Active Setter &amp; Closer Origination
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE IRTIQA THESIS */}
      <section id="thesis" style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">01</span>
            <span className="eyebrow">Operating Principle</span>
            <h2>The Interconnected Business Thesis</h2>
            <p className="lead" style={{ maxWidth: '840px' }}>
              Businesses rarely fail because of one isolated problem. A single organization simultaneously faces strategic uncertainty, operational friction, capital limitations, revenue inefficiency, market-access barriers, and technology gaps.
            </p>
          </div>

          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-6">
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-ink)' }}>
                Most consulting engagements treat symptoms rather than systemic architecture. When an enterprise attempts to scale, marketing outpaces operating capacity, tech implementations detach from commercial priorities, and strategy reports gather dust.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-ink)' }}>
                Irtiqa treats the enterprise as an interconnected system. We assemble only the exact capabilities the client&apos;s binding constraint requires — drawing selectively across strategy, execution, capital, markets, revenue, and technology.
              </p>

              <div className="pullquote-institutional" style={{ margin: '2rem 0' }}>
                &ldquo;Irtiqa works at the intersection of strategy, execution, capital, markets, revenue and technology to help businesses build what comes next.&rdquo;
              </div>
            </div>

            <div className="ap-col-6">
              <div className="panel-tinted" style={{ padding: '2.5rem', background: '#FAFAF8', border: '1px solid var(--color-hairline)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>The Disciplined Sequence</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
                  Diagnose to Execution Architecture
                </h3>
                
                <div className="diagram-flow-vertical" style={{ margin: '0' }}>
                  <div className="diagram-node">1. Diagnose the Business</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node">2. Architect the Solution</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node">3. Mobilize the Capability</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node">4. Execute the Transformation</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node" style={{ borderColor: 'var(--color-gold)', background: '#FAF6ED', color: '#8C6B32' }}>
                    5. Build the Next Stage of Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FOUR STRATEGIC PILLARS */}
      <section id="pillars" style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">02</span>
            <span className="eyebrow">Diagnostic Architecture</span>
            <h2>The Four Strategic Pillars</h2>
            <p className="lead">
              The four pillars provide Irtiqa&apos;s architectural foundation — the four questions through which every engagement is framed.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>01</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>STRATEGY</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  Where should the business go?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--color-ink)' }}>
                  <li>&bull; Corporate &amp; Growth Strategy</li>
                  <li>&bull; Business Model Advisory</li>
                  <li>&bull; Market &amp; Competitive Intelligence</li>
                  <li>&bull; Market Entry &amp; Expansion</li>
                  <li>&bull; Economic Advisory</li>
                  <li>&bull; Investment &amp; Capital Strategy</li>
                </ul>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>02</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>OPERATIONS</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  How should the business work?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--color-ink)' }}>
                  <li>&bull; Operating Model Design</li>
                  <li>&bull; Process Transformation</li>
                  <li>&bull; Project Management Systems</li>
                  <li>&bull; Organizational Infrastructure</li>
                  <li>&bull; Performance Management</li>
                  <li>&bull; Supply Chain &amp; Logistics</li>
                </ul>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>03</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>REVENUE</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  How does it create commercial value?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--color-ink)' }}>
                  <li>&bull; Revenue Architecture</li>
                  <li>&bull; Commercial Strategy</li>
                  <li>&bull; Business Development Infrastructure</li>
                  <li>&bull; Sales Force Development</li>
                  <li>&bull; Customer Acquisition Systems</li>
                  <li>&bull; Strategic Partnerships &amp; R/30</li>
                </ul>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>04</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--color-blue-deep)' }}>TECHNOLOGY</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  How does technology create leverage?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--color-ink)' }}>
                  <li>&bull; Technology &amp; AI Strategy</li>
                  <li>&bull; AI Transformation &amp; Integration</li>
                  <li>&bull; Intelligent Workflows &amp; Automation</li>
                  <li>&bull; Enterprise Data &amp; Intelligence</li>
                  <li>&bull; Digital Transformation</li>
                  <li>&bull; Business Systems Architecture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Institutional Non-Negotiable Rule */}
          <div className="panel-tinted" style={{ marginTop: '2.5rem', borderLeft: '3px solid var(--color-blue-deep)', background: '#F8FAFC' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
              <span className="eyebrow" style={{ marginBottom: 0, color: 'var(--color-blue-deep)' }}>Positioning Rule</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
              <strong>Irtiqa is never reduced to &ldquo;an AI company.&rdquo;</strong> Artificial intelligence is one specialized capability inside Technology, deployed strictly because it resolves a proven enterprise constraint, never sold as isolated novelty.
            </p>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE CLIENT CHALLENGE MATRIX */}
      <section id="matrix" style={{ padding: '5.5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">03</span>
            <span className="eyebrow">Applied Methodology</span>
            <h2>Client Challenge &rarr; Capability Matrix</h2>
            <p className="lead">
              Select an executive challenge to examine how Irtiqa mobilizes cross-disciplinary capabilities into a unified transformation architecture.
            </p>
          </div>

          {/* Interactive Challenge Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {CHALLENGES.map(ch => (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChallenge(ch.id)}
                style={{
                  padding: '0.75rem 1.25rem',
                  border: '1px solid',
                  borderColor: selectedChallenge === ch.id ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                  background: selectedChallenge === ch.id ? 'var(--color-blue-deep)' : '#FFFFFF',
                  color: selectedChallenge === ch.id ? '#FFFFFF' : 'var(--color-blue-deep)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {ch.title}
              </button>
            ))}
          </div>

          {/* Matrix Card Display */}
          <div className="card-authoritative" style={{ background: '#FFFFFF', padding: '2.5rem', borderLeftColor: 'var(--color-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '0.25rem' }}>{currentChallengeObj.tagline}</span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-blue-deep)', margin: 0 }}>
                  {currentChallengeObj.title}
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {currentChallengeObj.pillarsInvolved.map(p => (
                  <span key={p} className="status-badge current">{p}</span>
                ))}
              </div>
            </div>

            <div className="ap-grid-12">
              <div className="ap-col-6">
                <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginBottom: '0.5rem' }}>
                  The Diagnostic Constraint
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {currentChallengeObj.problem}
                </p>

                <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginBottom: '0.5rem' }}>
                  Strategic Rationale
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  {currentChallengeObj.rationale}
                </p>
              </div>

              <div className="ap-col-6">
                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}>
                  <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-deep)', marginBottom: '1rem' }}>
                    Assembled Multi-Disciplinary Architecture
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentChallengeObj.architecture.map((cap, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>
                        <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>&rarr;</span>
                        <span style={{ fontWeight: 600 }}>{cap}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid var(--color-hairline)', marginTop: '1.25rem', paddingTop: '1rem' }}>
                    <a href="#intake" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.875rem' }}>
                      Inquire on this Specific Mandate &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVENUE OPPORTUNITIES FOR PEOPLE (R/30 Monetization Engine) */}
      <section id="revenue-opportunities" style={{ padding: '6rem 0', background: '#FAFAF8', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener" style={{ borderBottomColor: 'var(--color-gold)' }}>
            <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>04</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="r30-badge">Monetisation Engine &bull; R/30 Sub-Brand</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-blue-deep)' }}>
              Commercial Opportunities: Where Relationships Become Revenue
            </h2>
            <p className="lead" style={{ maxWidth: '820px' }}>
              Irtiqa is built on an institutional partnership model. Through the R/30 Revenue Partner Program, commercial executives, brokers, industry leaders, and setters/closers partner with Irtiqa to capture high-value revenue from qualified enterprise mandates.
            </p>
          </div>

          {/* The 8 Commercial Models Grid */}
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-blue-deep)' }}>Eight Commercial Models</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
              Multiple Structures to Monetize Business Relationships
            </h3>

            <div className="ap-grid-12">
              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%' }}>
                  <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>Model 01</span>
                  <h4>Advisory &amp; Project Fees</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Fixed or milestone-based fees for discrete strategic advisory and diagnostic mandates.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%' }}>
                  <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>Model 02</span>
                  <h4>Implementation Fees</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Retained fees tied to multi-month execution and operational delivery phases.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%' }}>
                  <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>Model 03</span>
                  <h4>Continuity Retainers</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Predictable recurring commercial arrangements sustaining operational transformation.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%', borderLeftColor: 'var(--color-gold)' }}>
                  <span className="status-badge proposed" style={{ marginBottom: '0.5rem' }}>Model 04</span>
                  <h4>Performance Economics</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Bespoke structures tied to verified commercial milestones and revenue acceleration.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%', borderLeftColor: 'var(--color-gold)' }}>
                  <span className="status-badge proposed" style={{ marginBottom: '0.5rem' }}>Model 05</span>
                  <h4>Revenue Sharing</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Economics aligned to top-line commercial growth generated through partner originations.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%' }}>
                  <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>Model 06</span>
                  <h4>Strategic Partnership Economics</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Joint venture and co-development terms evaluated case-by-case for key partners.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%' }}>
                  <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>Model 07</span>
                  <h4>Market Development Fees</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Fees associated with cross-border territory expansion and localized origination.
                  </p>
                </div>
              </div>

              <div className="ap-col-3">
                <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%', borderLeftColor: 'var(--color-gold)' }}>
                  <span className="status-badge proposed" style={{ marginBottom: '0.5rem' }}>Model 08</span>
                  <h4>Equity Participation</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                    Ownership participation where legally, regulatory, and commercially appropriate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traceability Pipeline & Partner Support Box */}
          <div className="panel-navy" style={{ padding: '3rem' }}>
            <div className="ap-grid-12" style={{ alignItems: 'center' }}>
              <div className="ap-col-7">
                <span className="eyebrow" style={{ color: 'var(--color-gold-pale)' }}>No Invisible Handoffs</span>
                <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Setter-to-Closer End-to-End Traceability
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Partners originate opportunities through executive discovery questions. Every lead is tracked through appointment, closer assignment, proposal delivery, and closed revenue. Full attribution ensures partners receive their transparent share upon contract execution.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.8125rem', color: '#FFFFFF' }}>
                  <span style={{ padding: '0.35rem 0.65rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>Lead</span> &rarr;
                  <span style={{ padding: '0.35rem 0.65rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>Partner</span> &rarr;
                  <span style={{ padding: '0.35rem 0.65rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>Appointment</span> &rarr;
                  <span style={{ padding: '0.35rem 0.65rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>Closer</span> &rarr;
                  <span style={{ padding: '0.35rem 0.65rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>Proposal</span> &rarr;
                  <span style={{ padding: '0.35rem 0.65rem', background: 'rgba(173,138,77,0.3)', border: '1px solid var(--color-gold)', borderRadius: '2px', color: 'var(--color-gold-pale)', fontWeight: 700 }}>Commission</span>
                </div>
              </div>

              <div className="ap-col-5" style={{ textAlign: 'right' }}>
                <Link href="/partners" className="btn btn-gold" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                  Apply as Revenue Partner &rarr;
                </Link>
                <div style={{ fontSize: '0.75rem', color: '#9EB0C5', marginTop: '0.75rem' }}>
                  Onboarding SLA: 24&ndash;48 Hours [PROPOSED SLA]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE 10 CAPABILITY FAMILIES PLATFORM (A through J) */}
      <section style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">05</span>
            <span className="eyebrow">Institutional Scope</span>
            <h2>Integrated Capability Platform (Families A&ndash;J)</h2>
            <p className="lead">
              Organized into ten corporate capability families rather than a flat service catalog.
            </p>
          </div>

          <div className="table-responsive">
            <table className="institutional-table">
              <thead>
                <tr>
                  <th style={{ width: '8%' }}>Code</th>
                  <th style={{ width: '30%' }}>Capability Family</th>
                  <th style={{ width: '47%' }}>Institutional Scope</th>
                  <th style={{ width: '15%' }}>Primary Pillar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>A</strong></td>
                  <td><strong>Strategic &amp; Economic Advisory</strong></td>
                  <td>Corporate strategy, business model advisory, market intelligence, and expansion strategy.</td>
                  <td><span className="status-badge current">Strategy</span></td>
                </tr>
                <tr>
                  <td><strong>B</strong></td>
                  <td><strong>Risk Advisory</strong></td>
                  <td>Strategic, operational, commercial, and market risk review to support resilient decision-making.</td>
                  <td><span className="status-badge current">Strategy</span></td>
                </tr>
                <tr>
                  <td><strong>C</strong></td>
                  <td><strong>Capital &amp; Investment Advisory</strong></td>
                  <td>Capital strategy, capital formation, transaction advisory, M&amp;A support, and structuring.</td>
                  <td><span className="status-badge current">Strategy</span></td>
                </tr>
                <tr>
                  <td><strong>D</strong></td>
                  <td><strong>Market Access &amp; International Expansion</strong></td>
                  <td>Cross-border commercial development, distribution channels, and strategic market access.</td>
                  <td><span className="status-badge current">Strategy</span></td>
                </tr>
                <tr>
                  <td><strong>E</strong></td>
                  <td><strong>Corporate &amp; Commercial Development</strong></td>
                  <td>Pipeline architecture, sales force development, commercial operations, and alliances.</td>
                  <td><span className="status-badge current">Revenue</span></td>
                </tr>
                <tr>
                  <td><strong>F</strong></td>
                  <td><strong>Operations &amp; Transformation</strong></td>
                  <td>Operating model design, process transformation, organizational infrastructure, and logistics.</td>
                  <td><span className="status-badge current">Operations</span></td>
                </tr>
                <tr>
                  <td><strong>G</strong></td>
                  <td><strong>Technology, AI &amp; Intelligence</strong></td>
                  <td>Technology advisory, AI transformation, workflow automation, and enterprise system architecture.</td>
                  <td><span className="status-badge current">Technology</span></td>
                </tr>
                <tr>
                  <td><strong>H</strong></td>
                  <td><strong>Trade, Sourcing &amp; Supply</strong></td>
                  <td>Strategic procurement, supplier development, trade development, and distribution infrastructure.</td>
                  <td><span className="status-badge current">Operations</span></td>
                </tr>
                <tr>
                  <td><strong>I</strong></td>
                  <td><strong>Partnerships, Joint Ventures &amp; Collaboration</strong></td>
                  <td>Strategic alliances, business partnerships, venture co-investment, and commercial JVs.</td>
                  <td><span className="status-badge current">Revenue</span></td>
                </tr>
                <tr>
                  <td><strong>J</strong></td>
                  <td><strong>Projects &amp; Special Situations</strong></td>
                  <td>Discrete, time-bound mandates mobilized for special strategic or commercial situations.</td>
                  <td><span className="status-badge current">Operations</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. ENGAGEMENT ARCHITECTURE & COMPOUNDING MODEL */}
      <section id="engagements" style={{ padding: '5.5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">06</span>
            <span className="eyebrow">Client Compounding Model</span>
            <h2>Do Not Sell a Service Once. Build Relationships That Compound.</h2>
            <p className="lead">
              Engagements deepen as the client&apos;s corporate requirements evolve. This is an architectural possibility, not a rigid sequence.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-7">
              <div className="card-authoritative" style={{ background: '#FFFFFF', padding: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-blue-deep)' }}>
                  The Nine Compounding Stages
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <div className="diagram-pipeline-step">01. Advisory</div>
                  <div className="diagram-pipeline-step">02. Strategic Project</div>
                  <div className="diagram-pipeline-step">03. Implementation</div>
                  <div className="diagram-pipeline-step">04. Operational Support</div>
                  <div className="diagram-pipeline-step">05. Market Access</div>
                  <div className="diagram-pipeline-step">06. Revenue Development</div>
                  <div className="diagram-pipeline-step">07. Strategic Partnership</div>
                  <div className="diagram-pipeline-step">08. Capital Opportunity</div>
                </div>
                <div className="diagram-pipeline-step" style={{ marginTop: '0.75rem', borderLeftColor: 'var(--color-blue-deep)', background: '#EBF1FA', fontWeight: 600 }}>
                  09. Global Expansion &amp; Long-Term Ecosystem Growth
                </div>
              </div>
            </div>

            <div className="ap-col-5">
              <div className="card-authoritative" style={{ background: '#FFFFFF', height: '100%', borderLeftColor: 'var(--color-gold)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Strategic Rationale</span>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Why Compounding Works</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  Once the binding operational or strategic constraint is diagnosed and resolved, the enterprise unlocks capacity to pursue international markets, commercial scaling, and strategic capitalization.
                </p>
                <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '1rem', marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-blue-deep)' }}>
                  Relationships deepen naturally based on demonstrated results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STRUCTURED INTAKE & DIRECT MEETING SCHEDULER */}
      <section id="intake" style={{ padding: '6rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">07</span>
            <span className="eyebrow">Executive Engagement</span>
            <h2>Initiate an Engagement or Partner Onboarding</h2>
            <p className="lead">
              Direct access for enterprise leadership seeking strategic advisory, and for prospective revenue partners looking to join the R/30 network.
            </p>
          </div>

          {/* Tab Selector */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              onClick={() => setActiveTab('mandate')}
              style={{
                padding: '0.9rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeTab === 'mandate' ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                background: activeTab === 'mandate' ? 'var(--color-blue-deep)' : '#FFFFFF',
                color: activeTab === 'mandate' ? '#FFFFFF' : 'var(--color-blue-deep)',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              Option A: Corporate Client Mandate
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('partner')}
              style={{
                padding: '0.9rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeTab === 'partner' ? 'var(--color-gold)' : 'var(--color-hairline)',
                background: activeTab === 'partner' ? 'var(--color-gold)' : '#FFFFFF',
                color: activeTab === 'partner' ? '#FFFFFF' : 'var(--color-blue-deep)',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              Option B: R/30 Revenue Partner Application
            </button>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-8">
              {activeTab === 'mandate' ? (
                /* MANDATE FORM */
                mandateSubmitted ? (
                  <div className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF', borderLeft: '3px solid var(--color-blue-deep)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem' }}>
                      <div>
                        <span className="status-badge current">MANDATE LOGGED</span>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', color: 'var(--color-blue-deep)' }}>
                          Schedule Your Executive Mandate Session
                        </h3>
                      </div>
                      <a href={mandateCalendlyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Open Full Window &rarr;
                      </a>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', marginBottom: '1.5rem' }}>
                      Select a confidential time slot directly on the practice calendar below to review your organization&apos;s strategic objectives with an Irtiqa principal.
                    </p>
                    <div style={{ minHeight: '680px', width: '100%', border: '1px solid var(--color-hairline)', borderRadius: '4px', overflow: 'hidden' }}>
                      <iframe
                        src={mandateCalendlyUrl}
                        width="100%"
                        height="700"
                        frameBorder="0"
                        title="Book Executive Mandate Consultation"
                      />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleMandateSubmit} className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
                      Corporate Mandate Qualification
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="m_name">Full Name <span className="required">*</span></label>
                        <input type="text" id="m_name" required value={mandateName} onChange={e => setMandateName(e.target.value)} className="form-input" placeholder="e.g. Alistair Vance" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="m_company">Organization <span className="required">*</span></label>
                        <input type="text" id="m_company" required value={mandateCompany} onChange={e => setMandateCompany(e.target.value)} className="form-input" placeholder="e.g. Meridian Holdings" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="m_email">Corporate Work Email <span className="required">*</span></label>
                      <input type="email" id="m_email" required value={mandateEmail} onChange={e => setMandateEmail(e.target.value)} className="form-input" placeholder="name@company.com" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Strategic Pillars of Concern</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {['Strategy', 'Operations', 'Revenue', 'Technology', 'Capital', 'Market Access'].map(p => (
                          <label key={p} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                              type="checkbox"
                              checked={mandatePillars.includes(p)}
                              onChange={() => handlePillarToggle(p)}
                            />
                            {p}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="m_summary">The Strategic Bottleneck in Brief <span className="required">*</span></label>
                      <textarea id="m_summary" rows={4} required value={mandateSummary} onChange={e => setMandateSummary(e.target.value)} className="form-textarea" placeholder="Describe the current constraint, growth goals, and target timeline." />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}>
                      Submit Mandate &amp; Select Meeting Time &rarr;
                    </button>
                    <span className="form-helper" style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                      Strict institutional non-disclosure applies to all communications.
                    </span>
                  </form>
                )
              ) : (
                /* PARTNER FORM */
                partnerSubmitted ? (
                  <div className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF', borderLeft: '3px solid var(--color-gold)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem' }}>
                      <div>
                        <span className="status-badge proposed">DOSSIER RECEIVED</span>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', color: 'var(--color-blue-deep)' }}>
                          Welcome to R/30, {partnerName}
                        </h3>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                          Reference ID: <strong>{partnerReference}</strong>
                        </div>
                      </div>
                      <a href={partnerCalendlyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                        Open Full Window &rarr;
                      </a>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', marginBottom: '1.5rem' }}>
                      Please select an onboarding briefing slot directly below with our practice directors to formalize your commercial origination pathway.
                    </p>
                    <div style={{ minHeight: '680px', width: '100%', border: '1px solid var(--color-hairline)', borderRadius: '4px', overflow: 'hidden' }}>
                      <iframe
                        src={partnerCalendlyUrl}
                        width="100%"
                        height="700"
                        frameBorder="0"
                        title="Book R/30 Partner Qualification"
                      />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="r30-badge">R/30 Application</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
                      Revenue Partner Dossier Intake
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="p_name">Full Legal Name <span className="required">*</span></label>
                        <input type="text" id="p_name" required value={partnerName} onChange={e => setPartnerName(e.target.value)} className="form-input" placeholder="e.g. Marcus Thorne" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="p_email">Professional Email <span className="required">*</span></label>
                        <input type="email" id="p_email" required value={partnerEmail} onChange={e => setPartnerEmail(e.target.value)} className="form-input" placeholder="name@domain.com" />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="p_phone">Direct Phone / WhatsApp <span className="required">*</span></label>
                        <input type="tel" id="p_phone" required value={partnerPhone} onChange={e => setPartnerPhone(e.target.value)} className="form-input" placeholder="+44 20 7946 0912" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="p_geo">Operating Geography <span className="required">*</span></label>
                        <select id="p_geo" value={partnerGeo} onChange={e => setPartnerGeo(e.target.value)} className="form-select">
                          <option value="UK & Europe">United Kingdom &amp; Europe</option>
                          <option value="North America">North America (US &amp; Canada)</option>
                          <option value="Middle East & GCC">Middle East &amp; GCC</option>
                          <option value="Asia-Pacific">Asia-Pacific</option>
                          <option value="Cross-Border Global">Cross-Border Global</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="p_networks">Target Industries &amp; Executive Networks <span className="required">*</span></label>
                      <input type="text" id="p_networks" required value={partnerNetworks} onChange={e => setPartnerNetworks(e.target.value)} className="form-input" placeholder="e.g. Private Equity, Industrial Logistics, Enterprise SaaS" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="p_orig">Origination Strategy <span className="required">*</span></label>
                      <textarea id="p_orig" rows={3} required value={partnerOrigination} onChange={e => setPartnerOrigination(e.target.value)} className="form-textarea" placeholder="How will you introduce and qualify corporate mandates into Irtiqa?" />
                    </div>

                    <button type="submit" disabled={partnerSubmitting} className="btn btn-gold" style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}>
                      {partnerSubmitting ? 'Transmitting Dossier...' : 'Submit Dossier & Book Briefing Call &rarr;'}
                    </button>
                  </form>
                )
              )}
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', marginBottom: '1.5rem', borderLeftColor: 'var(--color-blue-deep)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-deep)' }}>Institutional Standard</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No Generic Pitches</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  Whether discussing a corporate mandate or evaluating an R/30 partnership, you speak directly with experienced practice leads equipped with full commercial authority.
                </p>
              </div>

              <div className="card-authoritative" style={{ background: '#FAF9F6', borderLeftColor: 'var(--color-gold)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Operational Commitment</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>24&ndash;48 Hour Turnaround</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  Target response SLA for all submitted mandates and partner candidate reviews.
                </p>
                <span className="status-badge proposed">PROPOSED SLA / INTERNAL TARGET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLOSING INSTITUTIONAL STATEMENT */}
      <section style={{ padding: '5.5rem 0', background: '#FAFAF8', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue-deep)', marginBottom: '1rem', letterSpacing: '0.02em' }}>
            IRTIQA
          </div>
          <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '2rem' }}>
            STRATEGIC GROWTH &amp; TRANSFORMATION
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontStyle: 'italic', color: 'var(--color-blue-deep)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            &ldquo;Irtiqa works at the intersection of strategy, execution, capital, markets, revenue and technology to help businesses build what comes next.&rdquo;
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#intake" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>Initiate Mandate</a>
            <Link href="/partners" className="btn btn-gold" style={{ padding: '0.85rem 1.75rem' }}>Join R/30 Partner Network</Link>
          </div>
        </div>
      </section>

      {/* 12. INSTITUTIONAL FOOTER WITH MANDATORY REGULATORY NOTICE */}
      <footer style={{ background: '#0C2340', color: '#FFFFFF', padding: '5rem 0 2.5rem 0' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="ap-col-4">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, letterSpacing: '0.04em', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                IRTIQA
              </div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-gold-pale)', marginBottom: '1.25rem' }}>
                Strategic Growth &amp; Transformation
              </div>
              <p style={{ fontSize: '0.875rem', color: '#9EB0C5', lineHeight: 1.65 }}>
                A multidisciplinary strategic institution working at the intersection of strategy, operations, revenue, technology, capital, and markets.
              </p>
            </div>

            <div className="ap-col-2">
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 700 }}>
                Architecture
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 2.1, color: '#C8D4E2' }}>
                <li><a href="#thesis" style={{ color: 'inherit', textDecoration: 'none' }}>The Thesis</a></li>
                <li><a href="#pillars" style={{ color: 'inherit', textDecoration: 'none' }}>Four Pillars</a></li>
                <li><a href="#matrix" style={{ color: 'inherit', textDecoration: 'none' }}>Capability Matrix</a></li>
                <li><a href="#engagements" style={{ color: 'inherit', textDecoration: 'none' }}>Compounding Model</a></li>
              </ul>
            </div>

            <div className="ap-col-3">
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 700 }}>
                Commercial Programs
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 2.1, color: '#C8D4E2' }}>
                <li><Link href="/partners" style={{ color: 'inherit', textDecoration: 'none' }}>R/30 Revenue Partners</Link></li>
                <li><a href="#revenue-opportunities" style={{ color: 'inherit', textDecoration: 'none' }}>8 Commercial Models</a></li>
                <li><a href="#intake" style={{ color: 'inherit', textDecoration: 'none' }}>Strategic Alliances &amp; JV</a></li>
                <li><a href="#intake" style={{ color: 'inherit', textDecoration: 'none' }}>Special Situations</a></li>
              </ul>
            </div>

            <div className="ap-col-3">
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 700 }}>
                Governance &amp; Clearance
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#9EB0C5', lineHeight: 1.7 }}>
                <div>Entity: IRTIQA GROUP</div>
                <div>Status: <span className="status-badge tbc" style={{ background: 'rgba(255,255,255,0.08)', color: '#C8D4E2', border: '1px solid rgba(255,255,255,0.2)' }}>TO BE CONFIRMED</span></div>
                <div style={{ marginTop: '0.5rem' }}>Release: Master Institutional Architecture</div>
              </div>
            </div>
          </div>

          {/* Mandatory Non-Negotiable Regulatory Disclaimer */}
          <div style={{ paddingTop: '2.5rem', fontSize: '0.8125rem', color: '#8899AC', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '1.25rem' }}>
              <strong>REGULATORY NOTICE:</strong> Irtiqa provides strategic advisory, capital-formation support, transaction support and investment structuring support. Irtiqa is NOT represented as a regulated investment adviser, broker, fund manager, securities intermediary or investment bank unless authorization is explicitly verified. No communications or materials provided herein constitute an offer to buy or sell securities, nor financial, legal, or investment advice. Irtiqa does not guarantee financial returns, capital funding, or commercial outcomes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', color: '#6A7D94' }}>
              <div>&copy; {new Date().getFullYear()} IRTIQA. All rights reserved. Strictly confidential &amp; proprietary.</div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <span>Privacy Policy</span>
                <span>Terms of Engagement</span>
                <span>Regulatory Notice</span>
                <span>Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
