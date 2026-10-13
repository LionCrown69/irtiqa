'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { initializeAttribution, getAttribution, AttributionData } from '../../lib/attribution';

export default function R30PartnerPage() {
  const [attribution, setAttribution] = useState<AttributionData | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const data = initializeAttribution();
    setAttribution(data);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="r30-institutional-page">
      {/* Institutional Navigation Header */}
      <header className="ap-nav" style={{ borderBottom: '1px solid var(--color-hairline)', background: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="ap-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--color-blue-deep)' }}>
                IRTIQA
              </span>
            </Link>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem' }}>/</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-blue-primary)' }}>
              R/30
            </span>
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-graphite)', fontWeight: 600 }}>
              Revenue Partner Program
            </span>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <a href="#pipeline" className="link-gold" style={{ fontSize: '0.875rem' }}>Pipeline Traceability</a>
            <a href="#infrastructure" className="link-gold" style={{ fontSize: '0.875rem' }}>Partner Infrastructure</a>
            <a href="#scorecard" className="link-gold" style={{ fontSize: '0.875rem' }}>Scorecard</a>
            <a href="#apply" className="btn btn-gold" style={{ padding: '0.55rem 1.15rem', fontSize: '0.875rem' }}>
              Apply to the Network
            </a>
          </nav>
        </div>
      </header>

      {/* Attribution Indicator (If ?ref= parameter detected) */}
      {attribution?.partnerRef && (
        <div style={{ background: '#FAF6ED', borderBottom: '1px solid var(--color-gold)', padding: '0.5rem 0', fontSize: '0.8125rem', textAlign: 'center', color: '#8C6B32' }}>
          Referral Session Active &bull; Credited to Partner ID: <strong>{attribution.partnerRef}</strong>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section style={{ padding: '5rem 0 4rem 0', background: '#FAFAF8', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="ap-grid-12" style={{ alignItems: 'center' }}>
            <div className="ap-col-8">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="r30-badge">Institutional Sub-Brand</span>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-graphite)', fontWeight: 600 }}>
                  Endorsed by IRTIQA
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)', lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--color-blue-deep)' }}>
                Where Relationships Become Revenue.
              </h1>

              <p className="lead" style={{ maxWidth: '680px', marginBottom: '2rem' }}>
                A disciplined global network of senior revenue partners who identify strategic enterprise constraints, establish commercial relevance, and route qualified mandates into Irtiqa&apos;s multi-disciplinary execution engine.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a href="#apply" className="btn btn-gold">
                  Apply to Become a Revenue Partner
                </a>
                <a href="#infrastructure" className="btn btn-secondary">
                  Review Operating Infrastructure
                </a>
              </div>
            </div>

            <div className="ap-col-4">
              {/* R/30 Brand Mark SVG Container */}
              <div className="panel-tinted" style={{ textAlign: 'center', padding: '2.5rem 2rem', background: '#FFFFFF' }}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 1.5rem auto' }}>
                  {/* Outer Ring: Partnership */}
                  <circle cx="60" cy="60" r="50" stroke="#0F2A5F" strokeWidth="3" />
                  {/* Diagonal: Momentum (rising slash) */}
                  <line x1="26" y1="94" x2="94" y2="26" stroke="#0F2A5F" strokeWidth="3" strokeLinecap="round" />
                  {/* Node: Origin at start of diagonal */}
                  <circle cx="26" cy="94" r="5" fill="#0F2A5F" />
                  {/* Brass Diamond: Value at leading edge */}
                  <polygon points="94,18 102,26 94,34 86,26" fill="#B08D57" />
                </svg>

                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-blue-deep)', lineHeight: 1 }}>
                  R/30
                </div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', fontWeight: 600, marginTop: '0.5rem' }}>
                  Revenue Partner Program
                </div>
                <div style={{ borderTop: '1px solid var(--color-hairline)', marginTop: '1.25rem', paddingTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-graphite)' }}>
                  A selective network built on rigorous execution and clear credit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM POSITIONING & WHO IT IS FOR */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">01</span>
            <span className="eyebrow">Program Architecture</span>
            <h2>Structure, Standing and a Clear Share in Real Growth</h2>
            <p className="lead">
              R/30 is positioned as a private partnership network: part strategic consultancy, part elite commercial network, part transaction origination platform.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-6">
              <div className="card-authoritative" style={{ height: '100%' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-blue-deep)' }}>
                  What Revenue Partners Do
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  We work with professionals who already hold senior commercial relationships. Your role is not to invent generic pitches or sell tactical point-solutions.
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; <strong>Identify Enterprise Bottlenecks:</strong> Surface challenges across strategy, operations, revenue, technology or capital.</li>
                  <li>&bull; <strong>Establish Strategic Relevance:</strong> Connect executive needs to Irtiqa&apos;s ten corporate capability families.</li>
                  <li>&bull; <strong>Qualify Mandates:</strong> Confirm decision authority, operating scale, and commitment to transformation.</li>
                  <li>&bull; <strong>Facilitate Practice Hand-Offs:</strong> Introduce qualified leaders directly to senior practice closers.</li>
                </ul>
              </div>
            </div>

            <div className="ap-col-6">
              <div className="card-authoritative" style={{ height: '100%', borderLeftColor: 'var(--color-gold)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-blue-deep)' }}>
                  What R/30 Is Not
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', marginBottom: '1.25rem' }}>
                  R/30 maintains strict institutional integrity and zero tolerance for hype or aggressive tactics.
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; <strong>Never an Affiliate Scheme:</strong> No bulk link spamming, no fake urgency, no public discount codes.</li>
                  <li>&bull; <strong>Never Unqualified Advisory:</strong> Partners are not expected or permitted to give specialist legal, investment, or technical advice they are not credentialed to deliver.</li>
                  <li>&bull; <strong>Never Single-Product Pitching:</strong> Partners represent the full 10 capability families, not merely automated tools.</li>
                  <li>&bull; <strong>Zero Earnings Hype:</strong> Commercial economics are based strictly on contractually agreed delivered revenue.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SETTER-TO-CLOSER TRACEABILITY PIPELINE */}
      <section id="pipeline" style={{ padding: '5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">02</span>
            <span className="eyebrow">Attribution Architecture</span>
            <h2>Setter-to-Closer Traceability: No Invisible Handoffs</h2>
            <p className="lead">
              Every appointment and introduction is logged with indelible partner attribution from initial touch through to closed revenue and commission distribution.
            </p>
          </div>

          <div className="panel-tinted" style={{ background: '#FFFFFF', padding: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-hairline)', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-graphite)' }}>Step 01</div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>LEAD</strong>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-gold)' }}>&rarr;</div>

              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-hairline)', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-graphite)' }}>Step 02</div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>PARTNER</strong>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-gold)' }}>&rarr;</div>

              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-hairline)', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-graphite)' }}>Step 03</div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>APPOINTMENT</strong>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-gold)' }}>&rarr;</div>

              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-hairline)', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-graphite)' }}>Step 04</div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>CLOSER</strong>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-gold)' }}>&rarr;</div>

              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-hairline)', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-graphite)' }}>Step 05</div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>PROPOSAL</strong>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-gold)' }}>&rarr;</div>

              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-hairline)', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-graphite)' }}>Step 06</div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)' }}>OUTCOME</strong>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-gold)' }}>&rarr;</div>

              <div style={{ textAlign: 'center', padding: '0.75rem', border: '1px solid var(--color-gold)', background: '#FAF6ED' }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-gold)' }}>Step 07</div>
                <strong style={{ fontSize: '0.875rem', color: '#8C6B32' }}>COMMISSION</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIVE STRUCTURAL REQUIREMENTS (Internal Proposal Synthesis) */}
      <section id="infrastructure" style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">03</span>
            <span className="eyebrow">Partner Enablement</span>
            <h2>Institutional Infrastructure We Provide</h2>
            <p className="lead">
              Partners must never be left under-equipped. We provide dedicated corporate resources to support enterprise credibility.
            </p>
          </div>

          <div className="table-responsive">
            <table className="institutional-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Infrastructure Pillar</th>
                  <th style={{ width: '55%' }}>Specification &amp; Purpose</th>
                  <th style={{ width: '20%' }}>System Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>01. Service / Tier Brief</strong></td>
                  <td>Documented brief detailing engagement phases, deliverable catalogs, and pricing bounds so partners speak with authority.</td>
                  <td><span className="status-badge tbc">TO BE CONFIRMED</span></td>
                </tr>
                <tr>
                  <td><strong>02. Calling Infrastructure</strong></td>
                  <td>Approved company dialer / VOIP environment to prevent partner burn, spam carrier flagging, and lost call histories.</td>
                  <td><span className="status-badge proposed">PROPOSED</span></td>
                </tr>
                <tr>
                  <td><strong>03. Corporate Email</strong></td>
                  <td>Standardized enterprise address (e.g. <code>firstname@company.com</code>) to maintain enterprise trust and domain reputation.</td>
                  <td><span className="status-badge current">CURRENT</span></td>
                </tr>
                <tr>
                  <td><strong>04. Setter &rarr; Closer Tracker</strong></td>
                  <td>Transparent CRM pipeline visibility showing status from discovery to contract execution and fee distribution.</td>
                  <td><span className="status-badge proposed">PROPOSED</span></td>
                </tr>
                <tr>
                  <td><strong>05. Onboarding SLA</strong></td>
                  <td>Target turnaround of 24&ndash;48 hours from application acceptance to system provisioning and lead distribution.</td>
                  <td><span className="status-badge proposed">PROPOSED SLA</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. BALANCED SCORECARD & IRTIQA OS STATUS */}
      <section id="scorecard" style={{ padding: '5rem 0', background: '#FAFAFA', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">04</span>
            <span className="eyebrow">Performance Architecture</span>
            <h2>The Balanced Partner Scorecard</h2>
            <p className="lead">
              Performance is not judged on high-pressure volume. We evaluate partners on eight dimensions of quality, integrity, and commercial impact.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ marginBottom: '1.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>Dimension 01</span>
                <h4>Activity</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Consistency and disciplined cadence of executive outreach.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ marginBottom: '1.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>Dimension 02</span>
                <h4>Quality</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Strategic depth and institutional relevance of initial discovery.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ marginBottom: '1.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>Dimension 03</span>
                <h4>Qualified Opps</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Opportunities adhering strictly to Irtiqa qualification criteria.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ marginBottom: '1.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>Dimension 04</span>
                <h4>Appointments</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Securing formal strategic assessment appointments with leadership.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative">
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Dimension 05</span>
                <h4>Conversion</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Percentage movement of qualified mandates through to signed contracts.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative">
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Dimension 06</span>
                <h4>Revenue Contribution</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Net verified commercial value generated across the partner portfolio.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative">
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Dimension 07</span>
                <h4>Reporting Discipline</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Promptness and accuracy of CRM activity records and follow-ups.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative">
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Dimension 08</span>
                <h4>Pipeline Hygiene</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
                  Accuracy of account data, deal stages, and mutual feedback notes.
                </p>
              </div>
            </div>
          </div>

          {/* Irtiqa OS Platform Status Table */}
          <div style={{ marginTop: '3.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--color-blue-deep)' }}>
              Irtiqa OS &bull; Internal Platform Status Matrix
            </h3>
            <div className="table-responsive">
              <table className="institutional-table">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Platform Capability</th>
                    <th style={{ width: '30%' }}>Operational Level</th>
                    <th style={{ width: '30%' }}>Release Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lead Distribution &amp; Routing</td>
                    <td>Operational in core hubs</td>
                    <td><span className="status-badge current">CURRENT</span></td>
                  </tr>
                  <tr>
                    <td>Activity Tracking &amp; Logging</td>
                    <td>Active on central instances</td>
                    <td><span className="status-badge current">CURRENT</span></td>
                  </tr>
                  <tr>
                    <td>Qualification &amp; Appointments Engine</td>
                    <td>Verified across inbound / outbound</td>
                    <td><span className="status-badge current">CURRENT</span></td>
                  </tr>
                  <tr>
                    <td>Pipeline Management &amp; Stages</td>
                    <td>Internal deployment phase</td>
                    <td><span className="status-badge proposed">PROPOSED</span></td>
                  </tr>
                  <tr>
                    <td>Setter &rarr; Closer Digital Handoff</td>
                    <td>Architecture drafted</td>
                    <td><span className="status-badge proposed">PROPOSED</span></td>
                  </tr>
                  <tr>
                    <td>Opportunity Tracking &amp; Executive Reporting</td>
                    <td>In structured review</td>
                    <td><span className="status-badge proposed">PROPOSED</span></td>
                  </tr>
                  <tr>
                    <td>Commission Visibility &amp; Calculation Engine</td>
                    <td>Specification in progress</td>
                    <td><span className="status-badge planned">PLANNED</span></td>
                  </tr>
                  <tr>
                    <td>Enterprise Operational Visibility Dashboard</td>
                    <td>Planned for cohort expansion</td>
                    <td><span className="status-badge planned">PLANNED</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVENUE PARTNER APPLICATION FORM WITH ATTRIBUTION */}
      <section id="apply" style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">05</span>
            <span className="eyebrow">Selection &amp; Onboarding</span>
            <h2>Apply to the R/30 Revenue Partner Network</h2>
            <p className="lead">
              We review applications on a rolling basis. Onboarding target: 24&ndash;48 hours from acceptance.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-8">
              {submitted ? (
                <div className="panel-tinted" style={{ padding: '3rem', textAlign: 'center', borderLeft: '3px solid var(--color-gold)' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ marginBottom: '1rem' }}>&check;</span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Application Received</h3>
                  <p style={{ maxWidth: '540px', margin: '0 auto 1.5rem auto', color: 'var(--color-graphite)' }}>
                    Your dossier has been routed to our Partner Selection Committee. If your commercial profile aligns with our active industry clusters, an executive briefing will be scheduled within our 24&ndash;48 hour SLA window.
                  </p>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-blue-deep)' }}>
                    Reference Tag: <strong>{attribution?.partnerRef || 'DIRECT-APPLY'}</strong>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel-tinted" style={{ padding: '2.5rem' }}>
                  {/* Hidden Traceability Inputs */}
                  <input type="hidden" name="attribution_ref" value={attribution?.partnerRef || ''} />
                  <input type="hidden" name="utm_source" value={attribution?.utmSource || ''} />
                  <input type="hidden" name="utm_campaign" value={attribution?.utmCampaign || ''} />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="partnerFullName">Full Legal Name <span className="required">*</span></label>
                      <input type="text" id="partnerFullName" required className="form-input" placeholder="e.g. Marcus Thorne" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="partnerEmail">Professional Email <span className="required">*</span></label>
                      <input type="email" id="partnerEmail" required className="form-input" placeholder="name@domain.com" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="partnerPhone">Direct Contact Number <span className="required">*</span></label>
                      <input type="tel" id="partnerPhone" required className="form-input" placeholder="+44 20 7946 0912" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="geography">Primary Operating Geography <span className="required">*</span></label>
                      <select id="geography" required className="form-select">
                        <option value="">Select Primary Region</option>
                        <option value="UK_EUROPE">United Kingdom &amp; Europe</option>
                        <option value="NORTH_AMERICA">North America (US &amp; Canada)</option>
                        <option value="MIDDLE_EAST">Middle East &amp; GCC</option>
                        <option value="APAC">Asia-Pacific</option>
                        <option value="GLOBAL">Cross-Border / Multi-Regional</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="industries">Target Industries &amp; Executive Networks <span className="required">*</span></label>
                    <input type="text" id="industries" required className="form-input" placeholder="e.g. Private Equity, Industrial Supply, Enterprise SaaS, Cross-Border Logistics" />
                    <span className="form-helper">Specify where you currently possess active executive relationships.</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="experience">Professional Background &amp; Commercial Track Record <span className="required">*</span></label>
                    <textarea id="experience" rows={4} required className="form-textarea" placeholder="Detail your background in commercial development, advisory origination, enterprise sales, or executive leadership." />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="origination">Origination Strategy <span className="required">*</span></label>
                    <textarea id="origination" rows={3} required className="form-textarea" placeholder="How do you intend to identify and surface qualified enterprise mandates for Irtiqa?" />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="availability">Weekly Operating Allocation</label>
                    <select id="availability" className="form-select">
                      <option value="FULL_TIME">Full-Time Commercial Commitment (35+ hrs/wk)</option>
                      <option value="SUBSTANTIAL">Substantial Allocation (20-30 hrs/wk)</option>
                      <option value="STRATEGIC_ORIGINATION">Selective Strategic Origination / Non-Executive</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}>
                    Submit R/30 Partner Dossier
                  </button>

                  <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', textAlign: 'center', marginTop: '1rem' }}>
                    By submitting, you agree to treat all Irtiqa briefing materials, commercial architectures, and client case data under strict non-disclosure.
                  </div>
                </form>
              )}
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ borderLeftColor: 'var(--color-gold)', background: '#FAF9F6', marginBottom: '1.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Selection Standard</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Who Qualifies</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.55 }}>
                  We prioritize candidates with demonstrable records in corporate business development, investment banking origination, management consulting, or enterprise tech sales.
                </p>
              </div>

              <div className="card-authoritative" style={{ background: '#FFFFFF' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-primary)' }}>Internal SLA</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>24&ndash;48 Hours</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.55, marginBottom: '0.5rem' }}>
                  Target turnaround from approved interview to system credentials, corporate email issuance, and pipeline briefing.
                </p>
                <span className="status-badge proposed">PROPOSED SLA / INTERNAL TARGET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL FOOTER */}
      <footer style={{ background: '#0C2340', color: '#FFFFFF', padding: '3.5rem 0 2rem 0' }}>
        <div className="ap-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF' }}>IRTIQA</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-gold-pale)' }}>/</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-gold-pale)' }}>R/30</span>
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#9EB0C5' }}>
              R/30 is an endorsed commercial sub-brand of IRTIQA.
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6A7D94', lineHeight: 1.6 }}>
            Commercial models, commission parameters, and client engagements are governed by individual written partnership agreements. No income figures or financial guarantees are represented.
          </div>
        </div>
      </footer>
    </div>
  );
}
