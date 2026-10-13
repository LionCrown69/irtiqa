'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InstitutionalHeader from '../layout/InstitutionalHeader';
import InstitutionalFooter from '../layout/InstitutionalFooter';
import { initializeAttribution, AttributionData } from '../../lib/attribution';

type InquiryChannel = 'MANDATE' | 'PARTNER' | 'ALLIANCE' | 'GENERAL';

export default function ContactPage() {
  const [activeChannel, setActiveChannel] = useState<InquiryChannel>('MANDATE');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('');
  const [attribution, setAttribution] = useState<AttributionData | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      name,
      email,
      a1: company || 'Not Specified',
      a2: `Channel: ${activeChannel}`
    });
    setCalendlyUrl(`https://calendly.com/irtiqaaiagency/audit-call?${query.toString()}`);
    setSubmitted(true);
  };

  return (
    <div className="contact-page-root" style={{ background: '#FFFFFF', color: '#111111' }}>
      <InstitutionalHeader />

      {/* Hero Header */}
      <section style={{ padding: '5.5rem 0 3.5rem 0', borderBottom: '1px solid var(--color-hairline)', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)' }}>
        <div className="ap-container">
          <span className="eyebrow">Start a Conversation</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
            Discuss a Mandate with Irtiqa
          </h1>
          <p className="lead" style={{ maxWidth: '820px', fontSize: '1.2rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
            Direct engagement channels for enterprise leadership exploring transformation mandates, prospective commercial partners joining R/30, and institutional joint-venture counterparties.
          </p>
        </div>
      </section>

      {/* Channel Selector & Form */}
      <section style={{ padding: '5rem 0' }}>
        <div className="ap-container">
          <div className="ap-grid-12">
            <div className="ap-col-8">
              {/* Channel Switcher */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem', marginBottom: '2.5rem' }}>
                <button
                  type="button"
                  onClick={() => setActiveChannel('MANDATE')}
                  style={{
                    padding: '0.85rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: activeChannel === 'MANDATE' ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                    background: activeChannel === 'MANDATE' ? 'var(--color-blue-deep)' : '#FFFFFF',
                    color: activeChannel === 'MANDATE' ? '#FFFFFF' : 'var(--color-blue-deep)',
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  Corporate Mandate
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel('PARTNER')}
                  style={{
                    padding: '0.85rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: activeChannel === 'PARTNER' ? 'var(--color-gold)' : 'var(--color-hairline)',
                    background: activeChannel === 'PARTNER' ? 'var(--color-gold)' : '#FFFFFF',
                    color: activeChannel === 'PARTNER' ? '#FFFFFF' : 'var(--color-blue-deep)',
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  R/30 Revenue Partner
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel('ALLIANCE')}
                  style={{
                    padding: '0.85rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: activeChannel === 'ALLIANCE' ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                    background: activeChannel === 'ALLIANCE' ? 'var(--color-blue-deep)' : '#FFFFFF',
                    color: activeChannel === 'ALLIANCE' ? '#FFFFFF' : 'var(--color-blue-deep)',
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  Strategic Alliance / JV
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel('GENERAL')}
                  style={{
                    padding: '0.85rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: activeChannel === 'GENERAL' ? 'var(--color-blue-deep)' : 'var(--color-hairline)',
                    background: activeChannel === 'GENERAL' ? 'var(--color-blue-deep)' : '#FFFFFF',
                    color: activeChannel === 'GENERAL' ? '#FFFFFF' : 'var(--color-blue-deep)',
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  General / Media
                </button>
              </div>

              {submitted ? (
                /* LIVE SCHEDULER VIEW */
                <div className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF', borderLeft: '3px solid var(--color-blue-deep)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <span className="status-badge current" style={{ marginBottom: '0.5rem' }}>MANDATE INTAKE LOGGED</span>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-deep)', margin: 0 }}>
                        Welcome, {name}
                      </h3>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', marginTop: '0.25rem' }}>
                        Channel: <strong>{activeChannel}</strong>
                      </div>
                    </div>
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.875rem' }}>
                      Open Full Window &rarr;
                    </a>
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', marginBottom: '1.5rem' }}>
                    Please select an executive consultation time slot directly on the calendar below with our practice leadership.
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
                /* FORM */
                <form onSubmit={handleSubmit} className="panel-tinted" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>
                    {activeChannel === 'MANDATE' && 'Corporate Mandate Assessment'}
                    {activeChannel === 'PARTNER' && 'R/30 Revenue Partner Intake'}
                    {activeChannel === 'ALLIANCE' && 'Strategic Alliance / Joint Venture Proposal'}
                    {activeChannel === 'GENERAL' && 'General & Media Inquiry'}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name <span className="required">*</span></label>
                      <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} className="form-input" placeholder="e.g. Alistair Vance" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company / Organization <span className="required">*</span></label>
                      <input type="text" id="company" required value={company} onChange={e => setCompany(e.target.value)} className="form-input" placeholder="e.g. Meridian Global Holdings" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Corporate Work Email <span className="required">*</span></label>
                      <input type="email" id="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-input" placeholder="name@company.com" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Direct Contact Number</label>
                      <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="form-input" placeholder="+44 20 7946 0912" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Mandate Summary / Discussion Scope <span className="required">*</span></label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required 
                      value={message} 
                      onChange={e => setMessage(e.target.value)} 
                      className="form-textarea" 
                      placeholder="Outline the primary strategic constraint, commercial objective, or partnership structure under consideration." 
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}>
                    Submit Inquiry &amp; Launch Calendar Scheduler &rarr;
                  </button>

                  <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', textAlign: 'center', marginTop: '1rem' }}>
                    Institutional Non-Disclosure: All communications, corporate metrics, and candidate profiles are treated with absolute discretion.
                  </div>
                </form>
              )}
            </div>

            <div className="ap-col-4">
              <div className="card-authoritative" style={{ background: '#FFFFFF', marginBottom: '1.5rem', borderLeftColor: 'var(--color-blue-deep)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-blue-deep)' }}>Direct Access</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Principal-Level Engagement</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  You will speak directly with senior practice principals who lead execution across Strategy, Operations, Revenue, and Technology.
                </p>
              </div>

              <div className="card-authoritative" style={{ background: '#FAF9F6', marginBottom: '1.5rem', borderLeftColor: 'var(--color-gold)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Turnaround Standard</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Response Commitment</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  Target response SLA for all qualified corporate mandates and partner dossiers.
                </p>
                <span className="status-badge proposed">TARGET: 24–48 HOURS</span>
              </div>

              <div className="panel-tinted">
                <span className="eyebrow" style={{ color: 'var(--color-graphite)' }}>Direct Practice Inquiries</span>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-blue-deep)', fontWeight: 600 }}>
                  Email: <a href="mailto:office@irtiqaaiagency.com" style={{ color: 'inherit' }}>office@irtiqaaiagency.com</a>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>
                  Operating Hubs: London &bull; Dubai &bull; Global
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstitutionalFooter />
    </div>
  );
}
