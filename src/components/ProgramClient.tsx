"use client";

import React, { FormEvent, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import styles from './ProgramClient.module.css';

/* -------------------------------------------------------------------------- */
/*                     INTERACTIVE MATRIX CANVAS BACKGROUND                   */
/* -------------------------------------------------------------------------- */
const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZRGP30IRTIQA$%¥€£+-*/=>~#&01010101';
    const charArray = chars.split('');
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    const initDrops = () => {
      drops = [];
      columns = Math.floor(width / fontSize);
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // random start above screen
      }
    };

    initDrops();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDrops();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Semi-transparent black background to create trail effect
      ctx.fillStyle = 'rgba(5, 5, 8, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Calculate distance from cursor for interactive glow
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          // Cursor proximity: bright white/cyan glow & larger font
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00f0ff';
        } else if (drops[i] * fontSize > height - 100) {
          // Fading at the bottom
          ctx.fillStyle = 'rgba(0, 240, 255, 0.3)';
          ctx.shadowBlur = 0;
        } else if (Math.random() > 0.85) {
          // Random highlights in bright cyan
          ctx.fillStyle = '#00f0ff';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#00f0ff';
        } else {
          // Standard Matrix green/cyan stream
          ctx.fillStyle = i % 3 === 0 ? '#00ff66' : '#00a8ff';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Reset drop to top randomly after leaving screen
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.matrixCanvas} />;
};

/* -------------------------------------------------------------------------- */
/*                     INTERACTIVE COMMISSION ESTIMATOR                       */
/* -------------------------------------------------------------------------- */
const CommissionCalculator: React.FC = () => {
  const [dealVolume, setDealVolume] = useState<number>(50000);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  const commission20 = dealVolume * 0.20;
  const commission30 = dealVolume * 0.30;

  return (
    <motion.div 
      className={styles.calcBox}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.calcHeader}>
        <span className={styles.code}>Interactive Estimator</span>
        <h3>Project Your Earnings</h3>
        <p>Adjust the slider to see your potential revenue share based on monthly closed deal volume.</p>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderLabel}>
          <span>Monthly Closed Deal Volume:</span>
          <span className={styles.sliderValue}>{formatCurrency(dealVolume)}</span>
        </div>
        <input 
          type="range" 
          min="10000" 
          max="250000" 
          step="5000"
          value={dealVolume} 
          onChange={(e) => setDealVolume(Number(e.target.value))} 
          className={styles.sliderInput} 
        />
      </div>

      <div className={styles.commissionGrid}>
        <article>
          <motion.strong
            key={commission20}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {formatCurrency(commission20)}
          </motion.strong>
          <h3>20% — Appointment → Irtiqa Close</h3>
          <p>When you generate the qualified appointment and our senior commercial team closes the agreement.</p>
        </article>

        <article>
          <motion.strong
            key={commission30}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{ color: 'var(--rgp-cyan)' }}
          >
            {formatCurrency(commission30)}
          </motion.strong>
          <h3>30% — Full Source → Close</h3>
          <p>When you independently source, progress, and close the client opportunity end-to-end.</p>
        </article>
      </div>

      <p className={styles.finePrint}>
        * Estimates are illustrative based on current programme structure (20% to 30% commission tiers). Actual earnings depend on deal size, client retention, and attribution terms defined in the Revenue Growth Partner agreement.
      </p>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              PROGRAMME DATA                                */
/* -------------------------------------------------------------------------- */
const timeline = [
  ['01', 'Selection', 'Application, thorough profile review, executive interview, and admission decision.'],
  ['02', 'Activation', 'Comprehensive orientation, Partner OS portal access, and initial lead allocation.'],
  ['03', 'Execution', 'Deep market research, strategic outreach, qualification, appointments, and reporting.'],
  ['04', 'Review', 'Weekly performance analysis, 1-on-1 feedback, commercial enablement, and iteration.'],
  ['05', 'Evaluation', '30-day review milestone, revenue contribution assessment, and progression decision.'],
];

const resources = [
  ['01', 'Opportunities', 'Up to 100 high-intent, targeted business leads allocated weekly within our active commercial ecosystem.'],
  ['02', 'Infrastructure', 'Full license to Irtiqa’s proprietary Revenue Partner Operating System (Partner OS) after selection.'],
  ['03', 'Enablement', 'Battle-tested sales frameworks, objection handling scripts, AI workflow tools, and live guidance.'],
  ['04', 'Feedback', 'Rigorous weekly reviews to pinpoint exactly where execution excels and where adjustment is needed.'],
  ['05', 'Environment', 'Operate inside a fast-growing AI engineering agency rather than practicing in artificial simulations.'],
  ['06', 'Upside', 'Lucrative performance-linked commissions with direct pathways to leadership and pod management.'],
];

const measures = [
  ['Activity', 'Are you consistently executing required outreach and follow-ups?'],
  ['Quality', 'Are your appointments and conversations commercially relevant and qualified?'],
  ['Communication', 'Is your reporting proactive, transparent, and dependable?'],
  ['Professionalism', 'How immaculately do you represent Irtiqa AI in the market?'],
  ['Consistency', 'Can your high-performance habits be sustained week over week?'],
  ['Contribution', 'Are your ideas and energy elevating the commercial team around you?'],
  ['Commercial ability', 'Can you accurately recognize, nurture, and advance real revenue opportunity?'],
  ['Judgement', 'Do you make decisive, sound choices that move deals forward?'],
];

const faqs = [
  ['Is this an employment role?', 'No. The Revenue Growth Partner Programme is a performance-based commercial partnership. Final terms, commission schedules, and attribution rules are detailed in the partner agreement upon admission.'],
  ['Is the programme remote?', 'Yes, 100% remote. The programme is architected for global commercial execution. Specific operating schedules, timezone overlap, and availability expectations are aligned during your interview.'],
  ['Are leads guaranteed?', 'Lead allocation follows our active campaign structure and scales with your demonstrated performance and closing velocity. It is an meritocratic system designed to reward high performers.'],
  ['How is performance evaluated?', 'We evaluate partners holistically across activity volume, communication discipline, appointment quality, commercial judgement, and revenue contribution.'],
  ['Does the programme guarantee leadership progression?', 'No. Leadership is earned through sustained excellence. Top performers are considered for Revenue Pod leadership, regional director roles, and expanded commercial authority as our operations scale.'],
];

function Arrow() {
  return <span aria-hidden="true" style={{ display: 'inline-block', transition: 'transform 0.2s' }}>→</span>;
}

/* -------------------------------------------------------------------------- */
/*                            MAIN CLIENT COMPONENT                           */
/* -------------------------------------------------------------------------- */
export default function ProgramClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [portalModalOpen, setPortalModalOpen] = useState<boolean>(false);

  const nextStep = () => {
    const current = document.querySelector<HTMLElement>(`[data-form-step="${step}"]`);
    const inputs = current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input[required], textarea[required], select[required]') ?? [];
    const firstInvalid = Array.from(inputs).find((input) => !input.checkValidity());

    if (firstInvalid) {
      firstInvalid.reportValidity();
      firstInvalid.focus();
      return;
    }

    setStep((value) => Math.min(value + 1, 3));
  };

  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const current = document.querySelector<HTMLElement>('[data-form-step="3"]');
    const inputs = current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required]') ?? [];
    const firstInvalid = Array.from(inputs).find((input) => !input.checkValidity());

    if (firstInvalid) {
      firstInvalid.reportValidity();
      firstInvalid.focus();
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <MatrixBackground />
      
      <a className={styles.skip} href="#rgp-content">Skip to programme content</a>

      {/* Navigation Header */}
      <header className={styles.nav}>
        <a className={styles.brand} href="/" aria-label="Return to Irtiqa AI home">
          <span className={styles.brandMark}>R/30</span>
          <span>
            <strong>IRTIQA AI</strong>
            <small>Revenue Partner Command</small>
          </span>
        </a>
        <nav className={styles.links} aria-label="Programme navigation">
          <a href="#programme">Programme</a>
          <a href="#thirty-days">30 Days</a>
          <a href="#opportunity">Opportunity</a>
          <a href="#estimator">Estimator</a>
          <a href="#selection">Selection</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.navActions}>
          <button 
            type="button"
            className={styles.partnerAccess} 
            onClick={() => setPortalModalOpen(true)}
          >
            Partner Access ↗
          </button>
          <a className={styles.navApply} href="#apply">Apply Now</a>
        </div>
      </header>

      {/* Partner OS Portal Modal */}
      <AnimatePresence>
        {portalModalOpen && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPortalModalOpen(false)}
          >
            <motion.div 
              className={styles.modalBox}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={() => setPortalModalOpen(false)}>×</button>
              <div style={{ width: 50, height: 50, borderRadius: '12px', background: 'rgba(0,240,255,0.1)', border: '1px solid var(--rgp-cyan)', display: 'grid', placeItems: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>🔐</div>
              <h3>Partner OS Portal Protected</h3>
              <p>Access to the Revenue Partner Operating System (Partner OS) is strictly restricted to active Cohort 01 members with verified cryptographic credentials.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--rgp-cyan)', marginBottom: '1.5rem' }}>To gain access, please complete your application below.</p>
              <a 
                href="#apply" 
                className={styles.primaryButton} 
                onClick={() => setPortalModalOpen(false)}
                style={{ width: '100%' }}
              >
                Proceed to Application <Arrow />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="rgp-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>IRTIQA AI / REVENUE DIVISION</span>
            <span className={styles.status}>Applications Open — 2026 Cohort 01</span>
            <span>Global Remote / Performance Based</span>
          </div>

          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                <span>Revenue</span>
                <span>Growth</span>
                <em>Partner</em>
              </h1>
            </motion.div>

            <motion.div 
              className={styles.heroSide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>An elite, performance-driven commercial programme for ambitious strategists ready to operate with real market opportunities, build practical revenue capability, and demonstrate undeniable execution.</p>
              <a href="#apply" className={styles.primaryButton}>Apply for Cohort 01 <Arrow /></a>
            </motion.div>
          </div>

          <div className={styles.heroFoot}>
            <div>
              <span>⚡ 30-Day Evaluation Sprint</span>
              <span>💼 Real Enterprise Deals</span>
              <span>📈 20%–30% Revenue Share</span>
            </div>
            <a href="#programme">Explore Command Structure ↓</a>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className={styles.manifesto} id="programme">
          <div className={styles.code}>01 / Manifesto</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This is not <em>an internship.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Revenue Growth Partners operate inside Irtiqa AI’s live commercial engine. Real executive conversations. Real pipeline qualification. Meaningful, measurable contribution to enterprise AI revenue generation.
          </motion.p>
        </section>

        {/* Institution Section */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>A Commercial Institution</span>
            <h2 className={styles.title}>The next generation of commercial leaders will not be built in classrooms alone.</h2>
          </div>
          <div className={styles.introGrid}>
            <div className={styles.copy}>
              <p>Sales mastery, deal structuring, high-stakes negotiation, and commercial intuition are forged exclusively through market exposure, repetition, responsibility, and real-time feedback.</p>
              <p>The Revenue Growth Partner Programme provides the exact technological architecture, AI workflows, and lead infrastructure required for you to accelerate your commercial mastery while driving growth for an elite AI engineering agency.</p>
            </div>
            <motion.p 
              className={styles.pullQuote}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              We bring the infrastructure.<br />
              <span style={{ color: 'var(--rgp-cyan)' }}>You bring the execution.</span>
            </motion.p>
          </div>
        </section>

        {/* 30 Days Timeline Section */}
        <section className={styles.section} id="thirty-days">
          <div className={styles.sectionTop}>
            <span className={styles.code}>02 / Structure</span>
            <h2 className={styles.title}>Your First <em>30 Days.</em></h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map(([number, title, copy], idx) => (
              <motion.article 
                key={number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span>{`Stage // ${number}`}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Commercial Flow */}
        <section className={styles.section} id="opportunity">
          <div className={styles.sectionTop}>
            <span className={styles.code}>03 / Sequence</span>
            <h2 className={styles.title}>The Work in <em>Motion.</em></h2>
          </div>
          <div className={styles.flow}>
            {[
              ['01', 'Contact', 'Initiate high-level strategic conversations with assigned enterprise leads and inbound opportunities.'],
              ['02', 'Qualify', 'Evaluate business challenges, identify AI automation relevance, and establish commercial urgency.'],
              ['03', 'Book', 'Convert qualified executive interest into a confirmed discovery consultation with Irtiqa’s senior team.'],
              ['04', 'Convert', 'Where capable and proven, progress opportunities independently through the closing cycle.'],
            ].map(([number, title, copy], idx) => (
              <motion.article 
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span>{number} / {title === 'Convert' ? '↗' : '→'}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Interactive Commission Estimator Section */}
        <section className={styles.section} id="estimator">
          <div className={styles.sectionTop}>
            <span className={styles.code}>04 / Commercial Terms</span>
            <h2 className={styles.title}>Performance <em>Creates Upside.</em></h2>
          </div>
          <CommissionCalculator />
        </section>

        {/* Resources / Infrastructure */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>05 / Infrastructure</span>
            <h2 className={styles.title}>What Irtiqa <em>Provides.</em></h2>
          </div>
          <div className={styles.ledger}>
            {resources.map(([number, title, copy], idx) => (
              <motion.article 
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <span>{number} // RESOURCE</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Performance Measures */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>06 / Evaluation</span>
            <h2 className={styles.title}>We Measure <em>More Than Numbers.</em></h2>
          </div>
          <div className={styles.measureGrid}>
            {measures.map(([title, copy], index) => (
              <motion.article 
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span>{String(index + 1).padStart(2, '0')} // METRIC</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Fit / Qualification */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>07 / Alignment</span>
            <h2 className={styles.title}>Consider <em>The Fit.</em></h2>
          </div>
          <div className={styles.fitGrid}>
            <div className={styles.goodFit}>
              <h3>This Is For You If</h3>
              <ul>
                {['You thrive in real commercial conversations and executive engagement.', 'You actively seek constructive feedback and apply it immediately.', 'You communicate with undeniable clarity, precision, and polish.', 'You take total personal ownership of your output and results.', 'You are hungry for real revenue capability, not just a passive title.'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={styles.badFit}>
              <h3>This Is Not For You If</h3>
              <ul>
                {['You are looking for an easy, passive classroom internship.', 'You require guaranteed salaries before putting in any work.', 'You resist following structured CRM workflows and operating discipline.', 'You prefer artificial sales simulations over real market feedback.', 'You make excuses rather than taking ownership of your numbers.'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className={styles.section} id="selection">
          <div className={styles.sectionTop}>
            <span className={styles.code}>08 / Roadmap</span>
            <h2 className={styles.title}>Selection <em>Process.</em></h2>
          </div>
          <div className={styles.selectionGrid}>
            {[
              ['01', 'Application', 'Submit your detailed profile, commercial background, and intent below.'],
              ['02', 'Review', 'Our executive team evaluates your communication, resilience, and market fit.'],
              ['03', 'Interview', 'Shortlisted candidates are invited to a live strategic interview with leadership.'],
              ['04', 'Activation', 'Admitted partners receive immediate Partner OS credentials and lead allocation.'],
            ].map(([number, title, copy], idx) => (
              <motion.article 
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span>STAGE // {number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section} id="faq">
          <div className={styles.sectionTop}>
            <span className={styles.code}>09 / Knowledge</span>
            <h2 className={styles.title}>Frequently Asked <em>Questions.</em></h2>
          </div>
          <div className={styles.faqs}>
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`} key={question}>
                  <button 
                    type="button" 
                    className={styles.faqButton}
                    onClick={() => setOpenFaq(isOpen ? null : index)} 
                    aria-expanded={isOpen}
                  >
                    <span>{question}</span>
                    <b>{isOpen ? '−' : '+'}</b>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className={styles.faqAnswer}>
                          <p>{answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Application Command Center */}
        <section className={styles.section} id="apply">
          <motion.div 
            className={styles.applicationBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.sectionTop} style={{ marginBottom: '2rem' }}>
              <span className={styles.code}>10 / Command Entry</span>
              <h2 className={styles.title}>Apply For <em>Cohort 01.</em></h2>
            </div>
            <p className={styles.applicationIntro}>This application initiates our rigorous selection process. Answer thoughtfully; executive clarity and intent are our primary filters.</p>

            {submitted ? (
              <motion.div 
                className={styles.confirmation}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                aria-live="polite"
              >
                <div className={styles.confirmIcon}>✓</div>
                <h3>Application Registered.</h3>
                <p>Your profile has been logged into the Revenue Partner Cohort 01 evaluation queue. If your commercial background and intent meet our threshold, you will receive an invitation to schedule your executive interview.</p>
                
                <div style={{ maxWidth: 400, margin: '0 auto', display: 'grid', gap: '1rem' }}>
                  <a 
                    className={styles.primaryButton} 
                    href="https://calendly.com/irtiqa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Schedule Interview Now ↗
                  </a>
                  <button 
                    type="button" 
                    className={styles.secondaryButton}
                    onClick={() => { setSubmitted(false); setStep(1); }}
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={submitApplication}>
                <div className={styles.progress} aria-label={`Application step ${step} of 3`}>
                  <span className={step >= 1 ? styles.active : ''} />
                  <span className={step >= 2 ? styles.active : ''} />
                  <span className={step >= 3 ? styles.active : ''} />
                </div>

                {/* Step 1: Details */}
                {step === 1 && (
                  <motion.fieldset 
                    data-form-step="1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    style={{ border: 'none', padding: 0, margin: 0 }}
                  >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Step 1 // Personal Credentials</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.9rem' }}>Enter your core contact details for portal registration.</p>
                    
                    <div className={styles.formGrid}>
                      <label>Full Name *<input required name="name" autoComplete="name" placeholder="Alok Sharma" /></label>
                      <label>Email Address *<input required type="email" name="email" autoComplete="email" placeholder="alok@example.com" /></label>
                      <label>Phone / WhatsApp *<input required name="phone" autoComplete="tel" placeholder="+1 (555) 000-0000" /></label>
                      <label>Country / Timezone *<input required name="country" autoComplete="country-name" placeholder="United States (EST)" /></label>
                      <label className={styles.full}>LinkedIn Profile URL (Recommended)<input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" /></label>
                    </div>

                    <div className={styles.formActions}>
                      <span />
                      <button className={styles.primaryButton} type="button" onClick={nextStep} style={{ width: 'auto', minWidth: 200 }}>
                        Continue to Background <Arrow />
                      </button>
                    </div>
                  </motion.fieldset>
                )}

                {/* Step 2: Experience */}
                {step === 2 && (
                  <motion.fieldset 
                    data-form-step="2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    style={{ border: 'none', padding: 0, margin: 0 }}
                  >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Step 2 // Commercial Track Record</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.9rem' }}>Help us evaluate your past market exposure and closing experience.</p>
                    
                    <div className={styles.formGrid}>
                      <label>Current Occupation / Role *<input required name="occupation" placeholder="e.g., Account Executive / Founder / Consultant" /></label>
                      <label>Commercial Experience *
                        <select required name="experience" defaultValue="">
                          <option value="" disabled>Select experience tier</option>
                          <option>New to high-ticket commercial work</option>
                          <option>1–2 years in B2B sales / BD</option>
                          <option>3–5 years in closing / enterprise sales</option>
                          <option>5+ years (Senior Commercial Leader)</option>
                        </select>
                      </label>
                      <label className={styles.full}>What specific sales, business development, or client-closing work have you executed? *
                        <textarea required name="background" placeholder="Describe the deal sizes, industries, or outreach channels you have worked with..." />
                      </label>
                    </div>

                    <div className={styles.formActions}>
                      <button className={styles.secondaryButton} type="button" onClick={() => setStep(1)} style={{ width: 'auto' }}>
                        ← Back
                      </button>
                      <button className={styles.primaryButton} type="button" onClick={nextStep} style={{ width: 'auto', minWidth: 200 }}>
                        Continue to Intent <Arrow />
                      </button>
                    </div>
                  </motion.fieldset>
                )}

                {/* Step 3: Intent */}
                {step === 3 && (
                  <motion.fieldset 
                    data-form-step="3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    style={{ border: 'none', padding: 0, margin: 0 }}
                  >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Step 3 // Intent & Alignment</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.9rem' }}>We evaluate how you think about accountability, leadership, and execution.</p>
                    
                    <div className={styles.formGrid}>
                      <label className={styles.full}>Why are you specifically applying to Irtiqa AI’s Revenue Growth Partner Programme? *
                        <textarea required name="motivation" placeholder="What drives you to partner with an AI engineering agency at this stage of your career?" />
                      </label>
                      <label className={styles.full}>What does total personal commercial ownership mean to you in practice? *
                        <textarea required name="ownership" placeholder="How do you handle targets, setbacks, and market feedback?" />
                      </label>
                      <label className={`${styles.full} ${styles.consent}`}>
                        <input required type="checkbox" name="consent" />
                        <span>I understand and agree that this is an elite performance-based commercial partnership (providing 20%–30% commissions on closed revenue), not a salaried employment offer or guaranteed income, and I consent to Irtiqa AI evaluating my credentials.</span>
                      </label>
                    </div>

                    <div className={styles.formActions}>
                      <button className={styles.secondaryButton} type="button" onClick={() => setStep(2)} style={{ width: 'auto' }}>
                        ← Back
                      </button>
                      <button className={styles.primaryButton} type="submit" style={{ width: 'auto', minWidth: 240 }}>
                        Submit Application ↗
                      </button>
                    </div>
                  </motion.fieldset>
                )}
              </form>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
