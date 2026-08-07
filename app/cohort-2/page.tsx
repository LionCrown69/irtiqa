"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './waitlist.module.css';
import BrandLogo from '../../src/components/BrandLogo';

export default function CohortWaitlist() {
  const [formData, setFormData] = useState({ fullName: '', email: '', linkedin: '', companyUrl: '', description: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/cohort2-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Failed to connect to the server.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />
      
      <div className={styles.navBar}>
        <a href="/" className={styles.navLogo}>
          <BrandLogo size="sm" showWordmark={true} />
        </a>
      </div>

      <main className={styles.mainContent}>
        
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <span className={styles.eyebrow}>Selective Operating Partnership</span>
          <h1 className={styles.heroTitle}>
            IRTIQA <span className={styles.gradientText}>COHORT 02</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A selective company-building initiative for founders who have moved beyond the idea alone and are building businesses with credible potential for substantial long-term value.
          </p>
          <a href="#apply" className={styles.heroScrollBtn}>
            Apply for Selection
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2v10M2 7l5 5 5-5" />
            </svg>
          </a>
        </section>

        {/* WHAT COHORT 02 IS */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeader}>What Cohort 02 is</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionText}>
            <p>Most professional services businesses are paid to complete a defined scope. Most accelerators provide a standard programme to a group of companies. Most investors primarily contribute capital and portfolio support.</p>
            <p><strong>Irtiqa Cohort 02 is structured differently.</strong></p>
            <p>We select businesses where we believe Irtiqa can become materially useful to the company's development. Once selected, we work with the founders to understand the business, establish the priorities that matter most, and determine where Irtiqa's capabilities can create the greatest leverage.</p>
            <ul className={styles.bulletList}>
              <li>That could mean helping a company build its commercial function.</li>
              <li>For another company, the priority may be distribution, partnerships, positioning, organisational design or operational discipline.</li>
              <li>For another, it may be AI infrastructure, automation or internal systems.</li>
            </ul>
            <p>The engagement is therefore company-specific rather than curriculum-driven. Our existing partnership philosophy is straightforward: we do not replace founders. We strengthen the business around them so they can remain focused on the product and the vision.</p>
          </div>
        </section>

        {/* BUILDING COMPANIES */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeader}>Building companies, not running classes.</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionText}>
            <p>Cohort 02 should not be understood as a course. There are no generic lessons every founder must sit through simply because they are part of the cohort. There is no predetermined list of deliverables applied indiscriminately to every business. There is no assumption that every company has the same problem.</p>
            <p><strong>Each company enters with different circumstances, and Irtiqa's involvement is shaped accordingly.</strong></p>
            <p>A founder may need to rebuild the commercial model before increasing acquisition. Another may already have demand but lack the operating structure required to scale it. Another may have a strong product but weak market positioning. Another may require technology infrastructure that removes operational constraints.</p>
            <p>The work begins with the company — not with a template.</p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeader}>How Cohort 02 Works</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.processGrid}>
            
            <div className={styles.processCard}>
              <span className={styles.processNum}>01 / Application</span>
              <h3 className={styles.processTitle}>Founders submit their company.</h3>
              <p className={styles.processDesc}>The application is designed to understand the business rather than simply collect a pitch: what the company does, who it serves, what has been built, current traction, revenue model, market opportunity, team, competitive position, current constraints and what the founders intend to build next. Applying does not guarantee admission.</p>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processNum}>02 / Company Review</span>
              <h3 className={styles.processTitle}>Business-building perspective.</h3>
              <p className={styles.processDesc}>We are interested in the underlying quality of the opportunity, but also in something equally important: Can Irtiqa materially improve the trajectory of this company? A good company is not automatically a good Irtiqa partnership.</p>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processNum}>03 / Founder Conversation</span>
              <h3 className={styles.processTitle}>Speaking directly.</h3>
              <p className={styles.processDesc}>Shortlisted founders are invited to speak directly with the Irtiqa team. This is not intended to be a ceremonial interview. We want to understand how the founders think, where the business is struggling and what they believe the company could become.</p>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processNum}>04 / Business Assessment</span>
              <h3 className={styles.processTitle}>Establishing the baseline.</h3>
              <p className={styles.processDesc}>For companies progressing beyond the conversation, Irtiqa conducts a deeper assessment of the commercial model, acquisition, operations, positioning, technology, and constraints to establish where Irtiqa can create meaningful value.</p>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processNum}>05 / Selection</span>
              <h3 className={styles.processTitle}>The beginning of the relationship.</h3>
              <p className={styles.processDesc}>A limited number of companies are invited into Cohort 02. Selection means Irtiqa has concluded that there is sufficient alignment between the company, its founders, the opportunity and Irtiqa's ability to contribute.</p>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processNum}>06 / Operating Partnership</span>
              <h3 className={styles.processTitle}>Execution begins.</h3>
              <p className={styles.processDesc}>Irtiqa and the founding team establish the priorities and begin execution. Our role is an extension of the founding team rather than an external consultant, contributing across strategy, business growth, operations and technology.</p>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processNum}>07 / Long-Term Alignment</span>
              <h3 className={styles.processTitle}>Ownership & Equity.</h3>
              <p className={styles.processDesc}>Where appropriate, Irtiqa may establish an ownership position. This is not presented as a standard equity-for-services transaction. Partnership terms are determined individually based on the company, expected contribution, risk and long-term alignment.</p>
            </div>

          </div>
        </section>

        {/* WHAT IRTIQA BRINGS */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeader}>What Irtiqa Brings</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionText}>
            <p><strong>More than advice. Advice can identify what should happen. Operating capability helps make it happen.</strong></p>
            <p>Depending on what a selected company requires, Irtiqa can contribute across commercial strategy, revenue architecture, business development, strategic partnerships, sales systems, positioning, marketing direction, operational design, organisational structure, founder advisory, AI infrastructure, automation, customer journey optimisation, hiring and performance tracking.</p>
            <p>Not every company will use every capability. That is intentional. The question is not what Irtiqa can sell to the company. The question is what the company needs to become stronger.</p>
          </div>
        </section>

        {/* WHO WE ARE LOOKING FOR */}
        <section className={styles.sectionBlock} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <h2 className={styles.sectionHeader}>Who we are looking for</h2>
            <div className={styles.sectionDivider} />
            <div className={styles.sectionText}>
              <p>Cohort 02 is built for founders with ambition backed by evidence of execution. You do not need to have built a large company already. You do need to demonstrate that you are building seriously.</p>
              <p>We are looking for substance, not pitch-deck theatre. Traction matters, but traction can take different forms:</p>
              <ul className={styles.bulletList}>
                <li>Revenue is evidence.</li>
                <li>Customers are evidence.</li>
                <li>Usage or Distribution is evidence.</li>
                <li>A product people genuinely want is evidence.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className={styles.sectionHeader}>What we are not looking for</h2>
            <div className={styles.sectionDivider} />
            <div className={styles.sectionText}>
              <p>Cohort 02 is not designed for founders looking for a passive advisor, outsourced agency, free execution team, certificate, networking club or prestige programme.</p>
              <p>Nor should founders apply simply because they want Irtiqa associated with their company. The relationship requires access, transparency and execution from both sides.</p>
              <p><strong>Irtiqa cannot care about building the company more than its founders do.</strong></p>
            </div>
          </div>
        </section>

        {/* OWNERSHIP */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeader}>Ownership & Alignment</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionText}>
            <p><strong>Alignment matters. Irtiqa's partnership model is built around the belief that long-term work deserves long-term alignment.</strong></p>
            <p>For selected companies where an ownership partnership is appropriate, the structure is discussed privately with the founders after evaluation. There is no public standard percentage for Cohort 02. There is no automatic equity requirement merely for submitting an application. And there should be no implication that Irtiqa is making a cash investment unless a specific agreement actually provides for one.</p>
            <p>Irtiqa contributes strategic, operational, technological and commercial capability rather than presenting itself as an investment fund. Every company is different. Every partnership should reflect that.</p>
          </div>
        </section>

        {/* AFTER THE COHORT & WHY */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeader}>After the Cohort</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionText}>
            <p>Cohort 02 should not end with a certificate. For companies where Irtiqa and the founders establish a long-term partnership, completion of the initial cohort period becomes the beginning of the next stage. Companies may continue working with Irtiqa through an ongoing operating partnership.</p>
            <p><strong>Why Irtiqa does this:</strong> We could remain an external consulting firm. But the businesses we believe in most create a different opportunity. Instead of optimising for the value of an engagement, we can align ourselves with the value of the company. Instead of thinking like a vendor, we can think alongside the people building the business.</p>
            <p>We are not looking for companies that simply need help. We are looking for companies where the combination of the founders, the opportunity and Irtiqa's operating capabilities can create something meaningfully larger. Both answers need to be yes.</p>
          </div>
        </section>

        {/* WAITLIST FORM SECTION */}
        <section id="apply" className={styles.waitlistSection}>
          <div className={styles.glassCard}>
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.formHeader}>
                    <span className={styles.eyebrow}>Apply to</span>
                    <h2 className={styles.formTitle}>IRTIQA <span className={styles.gradientText}>COHORT 02</span></h2>
                    <p className={styles.formDesc}>
                      Applications are reviewed on a rolling basis until the cohort is filled. Submitting an application does not guarantee selection.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.formGroup} style={{ marginTop: '32px' }}>
                    <div className={styles.inputWrapper}>
                      <label className={styles.inputLabel}>Founder Name</label>
                      <input 
                        type="text" 
                        required 
                        className={styles.inputField} 
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className={styles.inputWrapper}>
                      <label className={styles.inputLabel}>Work Email</label>
                      <input 
                        type="email" 
                        required 
                        className={styles.inputField} 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className={styles.inputWrapper}>
                      <label className={styles.inputLabel}>Company URL / LinkedIn</label>
                      <input 
                        type="url" 
                        required
                        className={styles.inputField} 
                        placeholder="https://company.com"
                        value={formData.companyUrl}
                        onChange={e => setFormData({...formData, companyUrl: e.target.value})}
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className={styles.inputWrapper}>
                      <label className={styles.inputLabel}>Briefly tell us about your business</label>
                      <textarea 
                        required
                        className={styles.inputField} 
                        placeholder="What have you built? What is the current traction? What are the immediate constraints?"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        disabled={status === 'loading'}
                      />
                    </div>

                    {status === 'error' && (
                      <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center' }}>
                        {errorMsg}
                      </div>
                    )}

                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                      {status === 'loading' ? 'Submitting Application...' : 'Apply for Selection'}
                      {status !== 'loading' && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 7h10M7 2l5 5-5 5" />
                        </svg>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.successState}
                >
                  <div className={styles.successIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className={styles.successTitle}>Application Received</h2>
                  <p className={styles.successText}>
                    Your application for Irtiqa Cohort 02 has been successfully submitted. Shortlisted founders will be contacted directly regarding the next stage of evaluation.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className={styles.submitBtn} 
                    style={{ marginTop: '32px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>
    </div>
  );
}
