'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InstitutionalHeader from '../layout/InstitutionalHeader';
import InstitutionalFooter from '../layout/InstitutionalFooter';

export default function MarketsPage() {
  const [partnerType, setPartnerType] = useState('ALLIANCE');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('EMEA');
  const [narrative, setNarrative] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="markets-page-root" style={{ background: '#FFFFFF', color: '#111111' }}>
      <InstitutionalHeader />

      {/* Hero Banner */}
      <section style={{ padding: '5.5rem 0 4rem 0', borderBottom: '1px solid var(--color-hairline)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)' }}>
        <div className="ap-container">
          <span className="eyebrow">International Reach</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
            Markets, Trade &amp; Strategic Alliances
          </h1>
          <p className="lead" style={{ maxWidth: '820px', fontSize: '1.2rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
            Irtiqa supports enterprises entering, developing, and scaling within strategic international markets through economic intelligence, verified supplier networks, cross-border commercial architecture, and long-term joint-venture vehicles.
          </p>
        </div>
      </section>

      {/* 3 Pillars of Global Expansion */}
      <section style={{ padding: '5.5rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">01</span>
            <span className="eyebrow">Cross-Border Architecture</span>
            <h2>Three Dimensions of Global Expansion</h2>
            <p className="lead">
              We eliminate the friction of international expansion by combining local regulatory intelligence with commercial distribution and resilient trade networks.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-4">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>01</span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-blue-deep)', marginBottom: '0.75rem' }}>
                  Market Access &amp; Entry
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Strategic scoping and market intelligence for businesses seeking expansion into unserved cross-border jurisdictions without premature capital commitment.
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Regulatory &amp; Jurisdiction Scoping</li>
                  <li>&bull; Local Partner Identification</li>
                  <li>&bull; Commercial Relocation Architecture</li>
                  <li>&bull; Go-to-Market Feasibility Audits</li>
                </ul>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>02</span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-blue-deep)', marginBottom: '0.75rem' }}>
                  Trade &amp; Sourcing Networks
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Building hardened, compliant procurement and logistics infrastructure that resists geopolitical and supply-chain disruption.
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Strategic Product Sourcing</li>
                  <li>&bull; Supplier Network Verification</li>
                  <li>&bull; Cross-Border Customs &amp; Logistics</li>
                  <li>&bull; International Distribution Pipelines</li>
                </ul>
              </div>
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ height: '100%', background: '#FFFFFF', borderLeftColor: 'var(--color-gold)' }}>
                <span className="editorial-numeral" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>03</span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-blue-deep)', marginBottom: '0.75rem' }}>
                  Joint Ventures &amp; Alliances
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Structuring aligned commercial joint ventures, co-development agreements, and distribution relationships with verified regional leaders.
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-ink)' }}>
                  <li>&bull; Commercial Joint Ventures</li>
                  <li>&bull; Co-Development Structures</li>
                  <li>&bull; Strategic Territory Alliances</li>
                  <li>&bull; Long-Term Ecosystem Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus Hubs */}
      <section style={{ padding: '5.5rem 0', background: 'var(--color-panel-tint)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">02</span>
            <span className="eyebrow">Operating Hubs</span>
            <h2>Regional Focus &amp; Cross-Border Corridors</h2>
            <p className="lead">
              Active coverage across established financial centers and high-growth commercial jurisdictions.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-3">
              <div className="card-authoritative" style={{ background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>United Kingdom &amp; Europe</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0, lineHeight: 1.6 }}>
                  London institutional advisory, corporate restructuring, enterprise commercial architectures, and European trade networks.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Middle East &amp; GCC</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0, lineHeight: 1.6 }}>
                  Dubai commercial gateway, regional market entry, infrastructure mobilization, and sovereign transformation initiatives.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>North America</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0, lineHeight: 1.6 }}>
                  Corporate development, technology systems architecture, and expansion advisory across primary US and Canadian commercial corridors.
                </p>
              </div>
            </div>

            <div className="ap-col-3">
              <div className="card-authoritative" style={{ background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>Asia-Pacific</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0, lineHeight: 1.6 }}>
                  Strategic procurement, cross-border supply chain verification, manufacturing partnerships, and regional distribution networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance & Partnership Intake */}
      <section id="alliance-intake" style={{ padding: '6rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="ap-container">
          <div className="section-opener">
            <span className="editorial-numeral editorial-numeral-md">03</span>
            <span className="eyebrow">Institutional Intake</span>
            <h2>Propose a Strategic Alliance or Market Partnership</h2>
            <p className="lead">
              We evaluate joint venture, distribution, and cross-border commercial relationships on strategic alignment and structural integrity.
            </p>
          </div>

          <div className="ap-grid-12">
            <div className="ap-col-8">
              {submitted ? (
                <div className="panel-tinted" style={{ padding: '3rem', textAlign: 'center', borderLeft: '3px solid var(--color-gold)', background: '#FFFFFF' }}>
                  <span className="editorial-numeral editorial-numeral-md" style={{ marginBottom: '1rem' }}>&check;</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', marginBottom: '0.75rem' }}>Alliance Briefing Received</h3>
                  <p style={{ maxWidth: '560px', margin: '0 auto 1.5rem auto', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                    Your strategic partnership dossier has been routed to our Executive Alliances Committee. A representative will contact you within our 24–48 hour review window.
                  </p>
                  <Link href="/contact" className="btn btn-primary">Schedule Discussion &rarr;</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Organization Name <span className="required">*</span></label>
                      <input type="text" required value={orgName} onChange={e => setOrgName(e.target.value)} className="form-input" placeholder="e.g. Atlas Maritime Group" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Executive Contact Name <span className="required">*</span></label>
                      <input type="text" required value={contactName} onChange={e => setContactName(e.target.value)} className="form-input" placeholder="e.g. Helena Vance" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Corporate Email <span className="required">*</span></label>
                      <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-input" placeholder="h.vance@atlas.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Partnership Nature <span className="required">*</span></label>
                      <select value={partnerType} onChange={e => setPartnerType(e.target.value)} className="form-select">
                        <option value="ALLIANCE">Strategic Commercial Alliance</option>
                        <option value="JV">Joint Venture / Co-Development</option>
                        <option value="DISTRIBUTION">Distribution / Channel Partnership</option>
                        <option value="SUPPLY_CHAIN">Procurement &amp; Trade Infrastructure</option>
                        <option value="CAPITAL">Capital &amp; Investment Relationship</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Jurisdictions / Corridors</label>
                    <select value={region} onChange={e => setRegion(e.target.value)} className="form-select">
                      <option value="EMEA">UK &amp; European Economic Area</option>
                      <option value="GCC">Middle East &amp; GCC Corridors</option>
                      <option value="NA">North America (US / Canada)</option>
                      <option value="APAC">Asia-Pacific Supply Chain</option>
                      <option value="GLOBAL">Multi-Jurisdictional Cross-Border</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Strategic Fit &amp; Proposed Structure <span className="required">*</span></label>
                    <textarea rows={4} required value={narrative} onChange={e => setNarrative(e.target.value)} className="form-textarea" placeholder="Outline your organization's footprint, proposed commercial structure, and mutual strategic objectives." />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem' }}>
                    Submit Alliance Proposal for Review &rarr;
                  </button>
                </form>
              )}
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', marginBottom: '1.5rem', borderLeftColor: 'var(--color-gold)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Governance Rule</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Case-by-Case Evaluation</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  Joint ventures and commercial alliances are evaluated individually based on operational alignment, counterparty solvency, and clear commercial accountability.
                </p>
              </div>

              <div className="panel-tinted">
                <span className="eyebrow" style={{ color: 'var(--color-blue-deep)' }}>R/30 Partner Program</span>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Individual Commercial Partners</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-graphite)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Are you an independent commercial executive or dealmaker seeking to originate opportunities?
                </p>
                <Link href="/partners" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.8125rem', textAlign: 'center' }}>
                  Explore R/30 Program &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstitutionalFooter />
    </div>
  );
}
