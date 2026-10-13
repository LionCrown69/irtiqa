import React from 'react';
import Link from 'next/link';

export default function InstitutionalHome() {
  return (
    <div className="institutional-site">
      {/* Institutional Top Navigation */}
      <header className="ap-nav" style={{ borderBottom: '1px solid var(--color-hairline)', background: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="ap-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--color-blue-deep)' }}>
                IRTIQA
              </span>
            </Link>
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-graphite)', fontWeight: 600 }}>
              Strategic Growth &amp; Transformation
            </span>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#thesis" className="link-gold" style={{ fontSize: '0.875rem' }}>Thesis</a>
            <a href="#pillars" className="link-gold" style={{ fontSize: '0.875rem' }}>Pillars</a>
            <a href="#capabilities" className="link-gold" style={{ fontSize: '0.875rem' }}>Capabilities</a>
            <a href="#engagements" className="link-gold" style={{ fontSize: '0.875rem' }}>Engagements</a>
            <Link href="/partners" className="link-gold" style={{ fontSize: '0.875rem' }}>R/30 Partners</Link>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.875rem' }}>
              Start a Conversation
            </a>
          </nav>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section style={{ padding: '5.5rem 0 4rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="ap-grid-12">
            <div className="ap-col-8">
              <span className="eyebrow">Institutional Architecture</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.85rem)', lineHeight: 1.15, marginBottom: '1.75rem' }}>
                Irtiqa helps businesses transform Strategy, Operations, Revenue and Technology into scalable growth.
              </h1>
              <p className="lead" style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
                A multidisciplinary strategic institution built for companies confronting interconnected constraints. We diagnose the binding constraint, architect the intervention, and mobilize the operational, commercial, capital and technical capabilities required to execute.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a href="#contact" className="btn btn-primary">
                  Start an Executive Conversation
                </a>
                <Link href="/partners" className="btn btn-secondary">
                  R/30 Revenue Partner Program
                </Link>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--color-panel-tint)' }}>
                <div>
                  <span className="status-badge current" style={{ marginBottom: '1rem' }}>Operating Mandate</span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-blue-deep)' }}>
                    Diagnose to Execution
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.55 }}>
                    We do not sell isolated services or advisory reports left on a shelf. Every engagement connects corporate diagnosis directly to operational mobilization and commercial accountability.
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '1rem', marginTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)' }}>
                    Current Release
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-blue-deep)', fontWeight: 600 }}>
                    September 2026 Master Framework
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED PROOF LAYER (Strict Scale Facts Block) */}
      <section style={{ padding: '2.5rem 0', background: '#FAFAFA', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div>
              <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-blue-deep)' }}>
                10
              </span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>
                Capability Families
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>
                Families A through J Architecture
              </div>
            </div>

            <div>
              <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-blue-deep)' }}>
                04
              </span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>
                Strategic Pillars
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>
                Strategy · Operations · Revenue · Tech
              </div>
            </div>

            <div>
              <span className="editorial-numeral editorial-numeral-md" style={{ color: 'var(--color-gold)' }}>
                08
              </span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>
                Engagement Models
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>
                Advisory to Capital Structuring
              </div>
            </div>

            <div>
              <span className="status-badge tbc" style={{ marginBottom: '0.5rem' }}>TO BE CONFIRMED</span>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)' }}>
                Client Mandates Delivered
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>
                Awaiting Executive Registry Clearance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE IRTIQA THESIS */}
      <section id="thesis" style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">01</span>
            <span className="eyebrow">The Core Thesis</span>
            <h2>Businesses rarely fail because of one isolated problem.</h2>
            <p className="lead" style={{ maxWidth: '820px' }}>
              Most organizations do not face a single constraint in isolation. Growth is restricted by a combination of strategic uncertainty, operational friction, capital limitations, revenue inefficiency, market-access barriers and technology gaps — occurring simultaneously and compounding each other.
            </p>
          </div>

          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-6">
              <p>
                Traditional consulting delivers advisory slides without implementation capability. Agencies offer specialized tactics without business-wide architecture.
              </p>
              <p>
                Irtiqa treats the business as an interconnected system. We assemble only the capabilities the client's actual constraint requires — drawing across strategy, execution, capital, markets, revenue and technology. Not every engagement uses every capability.
              </p>

              <div className="pullquote-institutional">
                &ldquo;Irtiqa works at the intersection of strategy, execution, capital, markets, revenue and technology to help businesses build what comes next.&rdquo;
              </div>
            </div>

            <div className="ap-col-6">
              <div className="panel-tinted" style={{ padding: '2.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>Operating Principle</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>The Disciplined Execution Sequence</h3>
                
                <div className="diagram-flow-vertical" style={{ margin: '0' }}>
                  <div className="diagram-node">Diagnose the Business</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node">Architect the Solution</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node">Mobilize the Capability</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node">Execute the Transformation</div>
                  <div className="diagram-arrow">&darr;</div>
                  <div className="diagram-node" style={{ borderColor: 'var(--color-gold)', background: '#FAF6ED' }}>Build the Next Stage of Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FOUR STRATEGIC PILLARS */}
      <section id="pillars" style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">02</span>
            <span className="eyebrow">Strategic Architecture</span>
            <h2>Four Pillars. One Integrated Lens.</h2>
            <p className="lead">
              The four pillars are Irtiqa's strategic architecture — the diagnostic lens through which every engagement is framed.
            </p>
          </div>

          <div className="ap-grid-12">
            {/* Pillar 01 */}
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>01</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>STRATEGY</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  Where should the business go?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Corporate &amp; Growth Strategy</li>
                  <li>&bull; Business Model Advisory</li>
                  <li>&bull; Market &amp; Competitive Intelligence</li>
                  <li>&bull; Market Entry &amp; Expansion</li>
                  <li>&bull; Economic Advisory</li>
                  <li>&bull; Investment &amp; Capital Strategy</li>
                </ul>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>02</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>OPERATIONS</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  How should the business work?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Operating Model Design</li>
                  <li>&bull; Process Transformation</li>
                  <li>&bull; Project Management</li>
                  <li>&bull; Organizational Infrastructure</li>
                  <li>&bull; Performance Systems</li>
                  <li>&bull; Supply Chain &amp; Logistics</li>
                </ul>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>03</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>REVENUE</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  How does it create commercial value?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Revenue Architecture</li>
                  <li>&bull; Commercial Strategy</li>
                  <li>&bull; Business Development</li>
                  <li>&bull; Sales Infrastructure</li>
                  <li>&bull; Customer Acquisition</li>
                  <li>&bull; Strategic Partnerships</li>
                </ul>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ height: '100%' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>04</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>TECHNOLOGY</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  How does technology create leverage?
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Technology &amp; AI Strategy</li>
                  <li>&bull; AI Transformation &amp; Implementation</li>
                  <li>&bull; Automation &amp; Intelligent Workflows</li>
                  <li>&bull; Data &amp; Intelligence Systems</li>
                  <li>&bull; Digital Transformation</li>
                  <li>&bull; Business Systems Architecture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Negotiable Positioning Notice */}
          <div className="panel-tinted" style={{ marginTop: '2.5rem', borderLeft: '3px solid var(--color-blue-deep)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
              <span className="eyebrow" style={{ marginBottom: 0, color: 'var(--color-blue-deep)' }}>Positioning Principle</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-graphite)' }}>
              <strong>Irtiqa is never reduced to &ldquo;an AI company.&rdquo;</strong> Artificial intelligence is one specialized capability inside our Technology pillar, deployed strictly because it resolves a verified business bottleneck — never sold as novelty for its own sake.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PROBLEM TO CAPABILITY MATRIX */}
      <section id="capabilities" style={{ padding: '5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">03</span>
            <span className="eyebrow">Applied Model</span>
            <h2>Client Challenge &rarr; Capability Architecture</h2>
            <p className="lead">
              One business problem rarely maps to one siloed service. We assemble capabilities across pillars around the client&apos;s real challenge.
            </p>
          </div>

          <div className="table-responsive">
            <table className="institutional-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Client Challenge</th>
                  <th style={{ width: '65%' }}>Potential Multi-Disciplinary Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Entering a new international market</strong>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                      Expansion into unserved cross-border jurisdictions
                    </div>
                  </td>
                  <td>
                    <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Strategy</span> + Market Intelligence + Market Access + Local Partnerships + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Operations</span> + Revenue Development + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Technology</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Preparing a company for scale</strong>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                      Eliminating operational drag prior to capitalization
                    </div>
                  </td>
                  <td>
                    <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Strategy</span> + Operating Model + Revenue Architecture + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Technology</span> + Capital Strategy
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Building an international supply chain</strong>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                      Resilient cross-border procurement and logistics
                    </div>
                  </td>
                  <td>
                    Market Intelligence + Supplier Development + Trade + Logistics + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Operations</span> + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Technology</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Improving commercial performance</strong>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                      Remediating sales funnel attrition and conversion
                    </div>
                  </td>
                  <td>
                    <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Revenue</span> + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Operations</span> + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Technology</span> + <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Strategy</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT ARCHITECTURE & COMPOUNDING MODEL */}
      <section id="engagements" style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">04</span>
            <span className="eyebrow">Commercial Architecture</span>
            <h2>How Engagements Are Structured</h2>
            <p className="lead">
              Eight formal engagement categories define how Irtiqa works with a client. Not every client follows the same path; we do not sell a service once, but build relationships that compound.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-8">
              <div className="table-responsive" style={{ margin: 0 }}>
                <table className="institutional-table">
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>#</th>
                      <th style={{ width: '35%' }}>Category</th>
                      <th style={{ width: '40%' }}>Nature of Engagement</th>
                      <th style={{ width: '15%' }}>Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td><strong>Advisory</strong></td>
                      <td>Diagnostic and strategic guidance for a defined question</td>
                      <td><span className="status-badge current">Standard</span></td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td><strong>Strategic Projects</strong></td>
                      <td>Bounded initiatives with defined objectives and outputs</td>
                      <td><span className="status-badge current">Standard</span></td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td><strong>Transformation</strong></td>
                      <td>Multi-workstream change across strategy, operations, revenue or technology</td>
                      <td><span className="status-badge current">Standard</span></td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td><strong>Implementation</strong></td>
                      <td>Hands-on execution of agreed initiatives alongside the client</td>
                      <td><span className="status-badge current">Standard</span></td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td><strong>Continuity / Retainer</strong></td>
                      <td>Ongoing support that sustains and extends progress</td>
                      <td><span className="status-badge current">Standard</span></td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td><strong>Strategic Partnership</strong></td>
                      <td>Long-term collaboration around shared commercial objectives</td>
                      <td><span className="status-badge proposed">Case by Case</span></td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td><strong>Joint Venture / Co-Dev</strong></td>
                      <td>Structured collaboration around shared development and ownership</td>
                      <td><span className="status-badge proposed">Qualified</span></td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td><strong>Capital / Investment</strong></td>
                      <td>Engagements touching capital strategy, structuring or transactions</td>
                      <td><span className="status-badge proposed">Subject to Auth</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ height: '100%', background: '#FAF8F4', borderLeftColor: 'var(--color-gold)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Compounding Model</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Relationship Deepening Sequence</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  An architectural possibility, not a mandatory progression:
                </p>
                <div style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-blue-deep)', fontWeight: 500 }}>
                  <div className="diagram-pipeline-step">01. Advisory</div>
                  <div className="diagram-pipeline-step">02. Strategic Project</div>
                  <div className="diagram-pipeline-step">03. Implementation</div>
                  <div className="diagram-pipeline-step">04. Operational Support</div>
                  <div className="diagram-pipeline-step">05. Market Access</div>
                  <div className="diagram-pipeline-step">06. Revenue Development</div>
                  <div className="diagram-pipeline-step">07. Strategic Partnership</div>
                  <div className="diagram-pipeline-step">08. Capital Opportunity</div>
                  <div className="diagram-pipeline-step" style={{ borderLeftColor: 'var(--color-blue-deep)', background: '#EBF1FA' }}>09. Expansion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. R/30 SUB-BRAND TEASER BAND */}
      <section className="r30-section" style={{ padding: '4.5rem 0' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-8">
              <span className="r30-badge" style={{ marginBottom: '1rem' }}>
                Monetisation Sub-Brand &bull; R/30
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem' }}>
                Where Relationships Become Revenue.
              </h2>
              <p className="lead" style={{ maxWidth: '640px', marginBottom: '1.75rem' }}>
                The R/30 Revenue Partner Program connects high-caliber business developers, sector specialists and commercial leaders directly to Irtiqa&apos;s ten capability families. Clear qualification, setter-to-closer attribution, and structured economics.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link href="/partners" className="btn btn-gold">
                  Explore R/30 Revenue Partner Program
                </Link>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)' }}>
                  Onboarding SLA: 24&ndash;48 Hours <span className="status-badge proposed" style={{ marginLeft: '4px' }}>PROPOSED SLA</span>
                </span>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', borderLeftColor: 'var(--color-gold)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>
                  Traceable Deal Pipeline
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  No invisible handoffs. Every opportunity is logged with partner attribution:
                </p>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-blue-deep)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div>&bull; Lead &rarr; Partner &rarr; Appointment</div>
                  <div>&bull; Closer &rarr; Proposal &rarr; Outcome</div>
                  <div style={{ fontWeight: 700, color: 'var(--color-gold)' }}>&bull; Verified Revenue &rarr; Commission</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STRATEGIC PARTNERS & ALLIANCES BAND */}
      <section style={{ padding: '4.5rem 0', background: 'var(--color-blue-deep)', color: '#FFFFFF' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-8">
              <span className="eyebrow" style={{ color: 'var(--color-gold-pale)' }}>Institutional Alliances</span>
              <h2 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                Strategic Alliances, Joint Ventures &amp; Capital Relationships
              </h2>
              <p style={{ color: '#C8D4E2', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '720px' }}>
                We structure specialized co-development, market-entry distribution, and capital-formation vehicles with qualified institutional partners globally. Every partnership is evaluated on structural alignment and balance-sheet integrity.
              </p>
            </div>
            <div className="ap-col-4" style={{ textAlign: 'right' }}>
              <a href="#contact" className="btn btn-secondary" style={{ borderColor: 'var(--color-gold-pale)', color: '#FFFFFF' }}>
                Inquire on Strategic Alliances
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STRUCTURED EXECUTIVE INTAKE (Client Mandate Funnel) */}
      <section id="contact" style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">05</span>
            <span className="eyebrow">Mandate Intake</span>
            <h2>Initiate an Executive Mandate Conversation</h2>
            <p className="lead">
              Direct qualification for corporate leadership and investors. Inquiries are routed immediately to the appropriate practice lead.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-7">
              <form action="/api/mandate-intake" method="POST" className="panel-tinted" style={{ padding: '2.5rem' }}>
                {/* Attribution Hidden Fields */}
                <input type="hidden" name="ref_partner" id="home_ref_partner" value="" />
                <input type="hidden" name="utm_source" id="home_utm_source" value="" />
                <input type="hidden" name="utm_campaign" id="home_utm_campaign" value="" />

                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name <span className="required">*</span></label>
                  <input type="text" id="fullName" name="fullName" required className="form-input" placeholder="e.g. Alistair Vance" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company / Organization <span className="required">*</span></label>
                    <input type="text" id="company" name="company" required className="form-input" placeholder="e.g. Meridian Capital Ltd." />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="role">Executive Role <span className="required">*</span></label>
                    <input type="text" id="role" name="role" required className="form-input" placeholder="e.g. Chief Executive Officer" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="workEmail">Corporate Email <span className="required">*</span></label>
                  <input type="email" id="workEmail" name="workEmail" required className="form-input" placeholder="name@company.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Pillars of Primary Concern <span className="required">*</span></label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" name="pillars" value="Strategy" /> Strategy &amp; Expansion
                    </label>
                    <label style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" name="pillars" value="Operations" /> Operations &amp; Supply Chain
                    </label>
                    <label style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" name="pillars" value="Revenue" /> Revenue &amp; Commercial
                    </label>
                    <label style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" name="pillars" value="Technology" /> Technology &amp; AI
                    </label>
                    <label style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" name="pillars" value="Capital" /> Capital &amp; Structuring
                    </label>
                    <label style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" name="pillars" value="Partnerships" /> Strategic Alliances / JV
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="problemSummary">The Strategic Constraint in Brief <span className="required">*</span></label>
                  <textarea id="problemSummary" name="problemSummary" rows={4} required className="form-textarea" placeholder="Outline the primary bottleneck, targeted outcome, and current operating timeline." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  Submit Mandate for Assessment
                </button>
                <span className="form-helper" style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                  Inquiries are treated under strict institutional confidentiality.
                </span>
              </form>
            </div>

            <div className="ap-col-5">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="card-authoritative">
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Direct Partner Routing</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: 0 }}>
                    Are you introducing a business through an active R/30 Revenue Partner? Referral tags are automatically persisted and credited end to end.
                  </p>
                </div>

                <div className="card-authoritative" style={{ borderLeftColor: 'var(--color-gold)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Institutional Standards</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', marginBottom: 0 }}>
                    We do not engage in generic sales calls. Initial conversations are held directly with senior practice principals capable of evaluating operational and commercial architecture.
                  </p>
                </div>

                <div className="panel-tinted">
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-graphite)', marginBottom: '0.25rem' }}>
                    Registered Entity &amp; Jurisdiction
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-blue-deep)' }}>
                    IRTIQA GROUP <span className="status-badge tbc" style={{ marginLeft: '6px' }}>TO BE CONFIRMED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLOSING INSTITUTIONAL STATEMENT */}
      <section style={{ padding: '5rem 0', background: '#FAFAFA', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue-deep)', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
            IRTIQA
          </div>
          <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '2rem' }}>
            STRATEGIC GROWTH &amp; TRANSFORMATION
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--color-blue-deep)', lineHeight: 1.6, marginBottom: '2rem' }}>
            &ldquo;Irtiqa works at the intersection of strategy, execution, capital, markets, revenue and technology to help businesses build what comes next.&rdquo;
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary">Start a Conversation</a>
            <Link href="/partners" className="btn btn-secondary">Join R/30 Partner Network</Link>
          </div>
        </div>
      </section>

      {/* 11. INSTITUTIONAL FOOTER WITH MANDATORY REGULATORY NOTICE */}
      <footer style={{ background: '#0C2340', color: '#FFFFFF', padding: '4.5rem 0 2.5rem 0' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="ap-col-4">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.04em', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                IRTIQA
              </div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-pale)', marginBottom: '1.25rem' }}>
                Strategic Growth &amp; Transformation
              </div>
              <p style={{ fontSize: '0.875rem', color: '#9EB0C5', lineHeight: 1.6 }}>
                Diagnosing constraints, designing architecture, and mobilizing multi-disciplinary execution capabilities across global markets.
              </p>
            </div>

            <div className="ap-col-2">
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 600 }}>
                Architecture
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 2, color: '#C8D4E2' }}>
                <li><a href="#thesis" style={{ color: 'inherit', textDecoration: 'none' }}>The Thesis</a></li>
                <li><a href="#pillars" style={{ color: 'inherit', textDecoration: 'none' }}>Four Pillars</a></li>
                <li><a href="#capabilities" style={{ color: 'inherit', textDecoration: 'none' }}>Capability Matrix</a></li>
                <li><a href="#engagements" style={{ color: 'inherit', textDecoration: 'none' }}>Engagements</a></li>
              </ul>
            </div>

            <div className="ap-col-3">
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 600 }}>
                Commercial Programs
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 2, color: '#C8D4E2' }}>
                <li><Link href="/partners" style={{ color: 'inherit', textDecoration: 'none' }}>R/30 Revenue Partners</Link></li>
                <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Strategic Alliances &amp; JV</a></li>
                <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Special Situations</a></li>
              </ul>
            </div>

            <div className="ap-col-3">
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold-pale)', marginBottom: '1rem', fontWeight: 600 }}>
                Governance &amp; Status
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#9EB0C5', lineHeight: 1.6 }}>
                <div>Entity: IRTIQA GROUP</div>
                <div>Status: <span className="status-badge tbc" style={{ background: 'rgba(255,255,255,0.08)', color: '#C8D4E2', border: '1px solid rgba(255,255,255,0.2)' }}>TO BE CONFIRMED</span></div>
                <div style={{ marginTop: '0.5rem' }}>Release: Internal / Partner Review</div>
              </div>
            </div>
          </div>

          {/* Mandatory Non-Negotiable Regulatory Notice */}
          <div style={{ paddingTop: '2.5rem', fontSize: '0.8125rem', color: '#8899AC', lineHeight: 1.65 }}>
            <p style={{ marginBottom: '1rem' }}>
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
