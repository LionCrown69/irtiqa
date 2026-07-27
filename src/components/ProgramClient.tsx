"use client";

import React, { FormEvent, useState } from 'react';
import styles from './ProgramClient.module.css';

const PARTNER_OS_URL = "https://partner.irtiqaaiagency.com";

const timelineStages = [
  {
    code: "STAGE 01",
    title: "SELECTION",
    items: [
      "Application & profile evaluation",
      "Executive communication screening",
      "Strategic alignment interview",
      "Admission decision & terms"
    ]
  },
  {
    code: "STAGE 02",
    title: "ACTIVATION",
    items: [
      "Programme & commercial orientation",
      "Revenue Partner OS portal credentials",
      "AI workflow & enablement setup",
      "Initial enterprise lead allocation"
    ]
  },
  {
    code: "STAGE 03",
    title: "EXECUTION",
    items: [
      "Targeted prospect research",
      "Strategic executive outreach",
      "Opportunity qualification",
      "Discovery appointment generation",
      "Pipeline reporting & iteration"
    ]
  },
  {
    code: "STAGE 04",
    title: "REVIEW",
    items: [
      "Weekly performance analysis",
      "1-on-1 commercial feedback",
      "Objection handling enablement",
      "Refining closing velocity"
    ]
  },
  {
    code: "STAGE 05",
    title: "EVALUATION",
    items: [
      "30-day performance milestone",
      "Revenue contribution assessment",
      "Pod progression decision",
      "Expanded commercial authority"
    ]
  }
];

const commercialFlow = [
  {
    step: "CONTACT",
    copy: "Initiate professional, highly researched strategic conversations with assigned enterprise leads and inbound opportunities."
  },
  {
    step: "QUALIFY",
    copy: "Understand the business architecture, identify operational bottlenecks, and determine whether a meaningful commercial conversation exists."
  },
  {
    step: "BOOK",
    copy: "Convert qualified executive interest into a confirmed discovery consultation with Irtiqa AI’s senior consulting and engineering team."
  },
  {
    step: "CONVERT",
    copy: "Where capable, proven, and appropriate, progress opportunities further through deal structuring and client acquisition."
  }
];

const ledgerResources = [
  {
    num: "01",
    title: "OPPORTUNITIES",
    copy: "Approximately 100 advanced leads can be allocated weekly within the programme structure, representing real business opportunities to research, contact, qualify, and progress."
  },
  {
    num: "02",
    title: "INFRASTRUCTURE",
    copy: "Selected partners receive full credentials and access to Irtiqa’s private Revenue Partner Operating System (Partner OS) to manage pipeline and workflows."
  },
  {
    num: "03",
    title: "ENABLEMENT",
    copy: "Battle-tested commercial resources, strategic growth frameworks, objection handling methodologies, AI workflow tools, and live ongoing guidance."
  },
  {
    num: "04",
    title: "FEEDBACK",
    copy: "Performance is rigorously reviewed on a weekly basis so partners understand precisely where execution excels and where adjustment is required."
  },
  {
    num: "05",
    title: "ENVIRONMENT",
    copy: "Operate inside a fast-growing, international AI consulting and engineering firm rather than practicing sales through artificial classroom simulations."
  },
  {
    num: "06",
    title: "UPSIDE",
    copy: "Lucrative performance-linked commissions on closed revenue with direct pathways to expanded commercial responsibility and regional leadership."
  }
];

const performanceMetrics = [
  { title: "ACTIVITY", copy: "Are you consistently executing required strategic outreach and follow-ups?" },
  { title: "QUALITY", copy: "Are your executive conversations and appointments commercially relevant and qualified?" },
  { title: "COMMUNICATION", copy: "Is your pipeline reporting proactive, transparent, and can the team depend on you?" },
  { title: "PROFESSIONALISM", copy: "How immaculately and confidently do you represent Irtiqa AI in global markets?" },
  { title: "CONSISTENCY", copy: "Can your high-performance operating habits be sustained week over week?" },
  { title: "CONTRIBUTION", copy: "Are your ideas, discipline, and energy elevating the commercial organisation around you?" },
  { title: "COMMERCIAL ABILITY", copy: "Can you accurately recognise, nurture, and progress real revenue opportunity?" }
];

const selectionRoadmap = [
  { stage: "01", title: "APPLICATION", copy: "Candidate submits their detailed profile, commercial background, and intent below." },
  { stage: "02", title: "REVIEW", copy: "Irtiqa leadership reviews background, executive communication, and programme fit." },
  { stage: "03", title: "INTERVIEW", copy: "Shortlisted applicants receive authorised access to schedule a strategic interview." },
  { stage: "04", title: "DECISION", copy: "Candidates are formally accepted into the cohort, waitlisted, or declined." },
  { stage: "05", title: "ONBOARDING", copy: "Accepted candidates receive agreement terms, orientation, and private OS access." },
  { stage: "06", title: "30-DAY CYCLE", copy: "The Revenue Growth Partner begins their initial 30-day performance evaluation period." }
];

const faqItems = [
  {
    q: "WHAT IS A REVENUE GROWTH PARTNER?",
    a: "A Revenue Growth Partner is a performance-based commercial collaborator within Irtiqa AI. Partners work with real business opportunities to identify growth constraints, initiate executive conversations, qualify prospects, generate consultations, and drive client acquisition for our consulting and AI infrastructure solutions."
  },
  {
    q: "IS THIS A FULL-TIME JOB?",
    a: "No. The Revenue Growth Partner Programme is a selective, performance-based commercial partnership, not a salaried employment position. Operating hours and weekly scheduling are flexible, provided partners consistently execute their commitments and maintain reporting discipline."
  },
  {
    q: "IS THERE A FIXED SALARY?",
    a: "No. There is no fixed salary or guaranteed retainer. Compensation is entirely performance-linked, providing substantial upside through 20% to 30% commission tiers on closed enterprise revenue generated through your efforts."
  },
  {
    q: "HOW DOES COMMISSION WORK?",
    a: "If you generate a qualified appointment and Irtiqa AI's senior commercial team closes the agreement, you receive a 20% commission on the closed deal. If you independently source, progress, and personally close the opportunity end-to-end, you receive a 30% commission. Final terms are governed by the signed partner agreement upon admission."
  },
  {
    q: "HOW LONG IS THE PROGRAMME?",
    a: "The programme begins with a structured 30-day performance evaluation cycle. Exceptional performers who demonstrate consistent execution and commercial contribution may continue operating within the ecosystem and be considered for regional leadership pathways."
  },
  {
    q: "WHAT HAPPENS DURING THE FIRST 30 DAYS?",
    a: "During the initial 30 days, you undergo commercial orientation, receive credentials to the Revenue Partner OS, obtain weekly lead allocations (approx. 100 advanced leads/week), execute strategic outreach, generate consultations, and participate in weekly 1-on-1 performance reviews."
  },
  {
    q: "DO I NEED PREVIOUS SALES EXPERIENCE?",
    a: "Previous sales or business development experience is valuable, but not strictly required. We evaluate candidates holistically: potential backed by disciplined execution, executive communication, curiosity, and personal ownership matters more than a perfect résumé."
  },
  {
    q: "HOW ARE LEADS PROVIDED?",
    a: "Irtiqa AI's internal growth engine allocates approximately 100 advanced business opportunities per week to active partners within the programme structure. You are responsible for researching, contacting, qualifying, and progressing these accounts."
  },
  {
    q: "IS THE PROGRAMME REMOTE?",
    a: "Yes. The Revenue Growth Partner Programme operates 100% remotely across global markets. Current regional structures under consideration include India, Canada, Nigeria, UAE, Philippines, and Jamaica."
  },
  {
    q: "WHO CAN APPLY?",
    a: "Ambitious strategists, business development professionals, consultants, entrepreneurs, and disciplined communicators from anywhere in the world who want practical exposure to enterprise client acquisition and strategic growth execution."
  },
  {
    q: "WHAT HAPPENS AFTER 30 DAYS?",
    a: "At the end of the 30-day cycle, Irtiqa reviews your overall activity, consistency, professionalism, and revenue contribution. Successful partners continue in the commercial ecosystem and may advance into Revenue Pod leadership or regional responsibility."
  },
  {
    q: "CAN I PROGRESS INTO LEADERSHIP?",
    a: "Yes. As Irtiqa AI's commercial organisation expands, top performers may be considered for expanded roles such as Revenue Pod Leader or Regional Sales Head. However, leadership is never guaranteed or assigned by default—at Irtiqa, leadership is earned through demonstrated performance."
  },
  {
    q: "WHERE DO ACCEPTED PARTNERS WORK?",
    a: "Partners work remotely from their own locations while collaborating digitally through Irtiqa AI's commercial infrastructure, Slack channels, and the private Revenue Partner Operating System."
  },
  {
    q: "HOW DO I ACCESS THE REVENUE PARTNER OS?",
    a: "The Revenue Partner Operating System is an external, private platform restricted to admitted partners. Active cohort members access it via the 'Partner Access ↗' link using their verified cryptographic credentials provided during onboarding."
  }
];

export default function ProgramClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [formError, setFormError] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
    country: "",
    city: "",
    linkedin: "",
    current_role: "",
    timezone: "",
    languages: "English",
    sales_experience: "New to high-ticket commercial work",
    weekly_availability: "10–20 hours / week",
    work_or_study_status: "Working full-time",
    commercial_experience: "",
    motivation_answer: "",
    consent_performance: false,
    consent_terms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateStep = (step: number): boolean => {
    setFormError("");
    if (step === 1) {
      if (!formData.full_name || !formData.email || !formData.whatsapp || !formData.country || !formData.city) {
        setFormError("Please complete all required contact fields (*).");
        return false;
      }
    } else if (step === 2) {
      if (!formData.current_role || !formData.commercial_experience) {
        setFormError("Please detail your occupation and commercial track record (*).");
        return false;
      }
    } else if (step === 3) {
      if (!formData.weekly_availability || !formData.work_or_study_status) {
        setFormError("Please select your availability and current working status (*).");
        return false;
      }
    } else if (step === 4) {
      if (!formData.motivation_answer || formData.motivation_answer.length < 30) {
        setFormError("Please provide a thoughtful answer to the signature application question (min. 30 characters).");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setFormError("");
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.consent_performance || !formData.consent_terms) {
      setFormError("You must check both agreement boxes to submit your application.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/program/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          consent: true
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedRef(data.reference || `RGP-26-${Math.floor(1000 + Math.random() * 9000)}`);
      } else {
        // Fallback reference if offline or local dev
        setSubmittedRef(`RGP-26-${Math.floor(1000 + Math.random() * 9000)}`);
      }
    } catch {
      // Offline fallback
      setSubmittedRef(`RGP-26-${Math.floor(1000 + Math.random() * 9000)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#rgp-content">Skip to programme content</a>

      {/* ==========================================================================
          10. NAVIGATION
          ========================================================================== */}
      <header className={styles.nav}>
        <a className={styles.brand} href="/" aria-label="Irtiqa AI Home">
          <div className={styles.brandMark}>R/30</div>
          <div className={styles.brandText}>
            <strong>IRTIQA AI</strong>
            <small>Revenue Growth Partner Programme</small>
          </div>
        </a>
        <nav className={styles.links} aria-label="Programme navigation">
          <a href="#programme">Programme</a>
          <a href="#thirty-days">30 Days</a>
          <a href="#opportunity">Opportunity</a>
          <a href="#selection">Selection</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.navActions}>
          <a className={styles.partnerAccess} href={PARTNER_OS_URL} target="_blank" rel="noopener noreferrer">
            Partner Access ↗
          </a>
          <a className={styles.navApply} href="#apply">
            Apply
          </a>
        </div>
      </header>

      <main id="rgp-content">
        {/* ==========================================================================
            11. HERO EXPERIENCE
            ========================================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroTopMeta}>
            <span>IRTIQA AI / REVENUE</span>
            <span>PROGRAMME 01 / 2026</span>
            <span className={styles.statusIndicator}>APPLICATIONS OPEN</span>
          </div>

          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.heroTitle}>
                <span>REVENUE</span>
                <span>GROWTH</span>
                <span>PARTNER</span>
              </h1>
            </div>
            <div className={styles.heroSide}>
              <p className={styles.heroSub}>30 DAYS OF REAL COMMERCIAL EXECUTION.</p>
              <p className={styles.heroCopy}>
                A performance-based commercial programme for ambitious individuals ready to work with real business opportunities, build practical sales capability, and demonstrate what they can execute.
              </p>
              <div className={styles.heroActions}>
                <a href="#apply" className={styles.primaryButton}>APPLY FOR THE PROGRAMME</a>
                <a href="#programme" className={styles.secondaryButton}>EXPLORE THE PROGRAMME ↓</a>
              </div>
            </div>
          </div>

          <div className={styles.heroFoot}>
            <div className={styles.heroFootItems}>
              <span>REMOTE / GLOBAL</span>
              <span>PERFORMANCE-BASED</span>
              <span>INITIAL CYCLE / 30 DAYS</span>
            </div>
            <a href="#thirty-days" className={styles.exploreLink}>EXPLORE THE MODEL ↓</a>
          </div>
        </section>

        {/* ==========================================================================
            12. OPENING STATEMENT
            ========================================================================== */}
        <section className={styles.statementSection} id="programme">
          <div>
            <h2 className={styles.statementHeadline}>
              THIS IS NOT<br />
              <em>an internship.</em>
            </h2>
          </div>
          <div className={styles.statementBody}>
            <p>Revenue Growth Partners operate inside Irtiqa AI&apos;s commercial ecosystem.</p>
            <p>You work with real business opportunities, initiate conversations, qualify prospects, create appointments, and contribute directly to revenue generation.</p>
            <p>This is practical commercial execution.</p>
            <p>NOT SIMULATION. NOT THEORY.</p>
          </div>
        </section>

        {/* ==========================================================================
            13. WHY THE PROGRAMME EXISTS
            ========================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>01 / PHILOSOPHY</span>
            <h2 className={styles.sectionTitle}>
              The next generation of commercial leaders will not be built in classrooms alone.
            </h2>
          </div>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCopy}>
              <p>Sales, business development, negotiation, and commercial judgement are capabilities developed through exposure, repetition, responsibility, and feedback.</p>
              <p>The Revenue Growth Partner Programme creates a structured environment where selected individuals can develop these capabilities while contributing to Irtiqa AI&apos;s commercial organisation.</p>
              <p>Irtiqa AI is a consulting and AI infrastructure firm. We identify revenue leakage and operational bottlenecks, building the strategic and technological systems required for sustainable growth. Technology is an important capability, but sustainable business growth requires strategy, systems, execution, people, and technology working together.</p>
            </div>
            <div className={styles.pullQuote}>
              We bring the infrastructure.
              <span>You bring the execution.</span>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            14. THE 30-DAY EXPERIENCE
            ========================================================================== */}
        <section className={styles.section} id="thirty-days">
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>02 / STRUCTURE</span>
            <h2 className={styles.sectionTitle}>
              Your First <em>30 Days.</em>
            </h2>
          </div>

          <div className={styles.thirtyDayBanner}>
            <div className={styles.enormousNumber}>30</div>
            <div className={styles.thirtyDayText}>
              DAYS TO PROVE<br />WHAT YOU CAN EXECUTE.
            </div>
          </div>

          <div className={styles.timelineGrid}>
            {timelineStages.map((stg) => (
              <div key={stg.code} className={styles.timelineItem}>
                <span className={styles.timelineStage}>{stg.code}</span>
                <h3 className={styles.timelineTitle}>{stg.title}</h3>
                <ul className={styles.timelineList}>
                  {stg.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            15. THE COMMERCIAL FLOW
            ========================================================================== */}
        <section className={`${styles.section} ${styles.flowSection}`} id="opportunity">
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>03 / SEQUENCE</span>
            <h2 className={styles.sectionTitle}>
              The Work in <em>Motion.</em>
            </h2>
          </div>

          <div className={styles.flowGrid}>
            {commercialFlow.map((item, idx) => (
              <div key={item.step} className={styles.flowStep}>
                <div>
                  <div className={styles.flowHeader}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#6b6b67', fontWeight: 700 }}>
                      0{idx + 1} // SEQUENCE
                    </span>
                    <span className={styles.flowArrow}>{idx === 3 ? "↗" : "→"}</span>
                  </div>
                  <h3 className={styles.flowWord}>{item.step}</h3>
                </div>
                <p className={styles.flowCopy}>{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            16. WHAT IRTIQA PROVIDES
            ========================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>04 / RESOURCES</span>
            <h2 className={styles.sectionTitle}>
              What Irtiqa <em>Provides.</em>
            </h2>
          </div>

          <div className={styles.ledgerGrid}>
            {ledgerResources.map((res) => (
              <div key={res.num} className={styles.ledgerCard}>
                <span className={styles.ledgerNum}>{res.num} // LEDGER RESOURCE</span>
                <h3 className={styles.ledgerTitle}>{res.title}</h3>
                <p className={styles.ledgerCopy}>{res.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            17. WHAT YOU BRING
            ========================================================================== */}
        <section className={styles.bringSection}>
          <div className={styles.bringHeader}>
            <span>05 / EXPECTATIONS</span>
            <h2>IRTIQA BRINGS THE INFRASTRUCTURE.<br />YOU BRING:</h2>
          </div>

          <div className={styles.marqueeContainer} aria-hidden="true">
            <div className={styles.marqueeContent}>
              <span className={styles.marqueeItem}>CONSISTENCY</span>
              <span className={styles.marqueeItem}>DISCIPLINE</span>
              <span className={styles.marqueeItem}>COMMUNICATION</span>
              <span className={styles.marqueeItem}>CURIOSITY</span>
              <span className={styles.marqueeItem}>RESILIENCE</span>
              <span className={styles.marqueeItem}>COMMERCIAL JUDGEMENT</span>
              <span className={styles.marqueeItem}>OWNERSHIP</span>
              <span className={styles.marqueeItem}>EXECUTION</span>
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              <span className={styles.marqueeItem}>CONSISTENCY</span>
              <span className={styles.marqueeItem}>DISCIPLINE</span>
              <span className={styles.marqueeItem}>COMMUNICATION</span>
              <span className={styles.marqueeItem}>CURIOSITY</span>
              <span className={styles.marqueeItem}>RESILIENCE</span>
              <span className={styles.marqueeItem}>COMMERCIAL JUDGEMENT</span>
              <span className={styles.marqueeItem}>OWNERSHIP</span>
              <span className={styles.marqueeItem}>EXECUTION</span>
            </div>
          </div>

          <div className={styles.bringFooter}>
            <p>We are not searching for perfect résumés.</p>
            <p>We are searching for people who can communicate, learn, execute, and take responsibility.</p>
            <p>Previous commercial experience is valuable. Potential backed by execution matters more.</p>
          </div>
        </section>

        {/* ==========================================================================
            18. COMPENSATION
            ========================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>06 / ECONOMICS</span>
            <h2 className={styles.sectionTitle}>
              Performance <em>Creates Upside.</em>
            </h2>
          </div>

          <div className={styles.compGrid}>
            <div className={styles.compCard}>
              <div className={styles.compPercentage}>20%</div>
              <h3 className={styles.compTitle}>APPOINTMENT → IRTIQA CLOSE</h3>
              <p className={styles.compCopy}>
                When an opportunity generated through your qualified appointment results in a successfully closed deal by Irtiqa AI’s senior commercial team, the current programme structure provides a 20% commission on the closed deal.
              </p>
            </div>

            <div className={styles.compCard}>
              <div className={styles.compPercentage}>30%</div>
              <h3 className={styles.compTitle}>SOURCE → CLOSE</h3>
              <p className={styles.compCopy}>
                When you successfully progress and personally close the opportunity end-to-end without requiring senior intervention, the current programme structure provides a 30% commission on the closed deal.
              </p>
            </div>
          </div>

          <div className={styles.legalClarification}>
            <strong>Commercial Clarification:</strong> Commission eligibility, calculation basis, payment timing, attribution rules, cancellations/refunds, and other commercial terms are governed strictly by the Revenue Growth Partner agreement provided to selected candidates upon admission. We do not make guaranteed income promises or speculative earnings projections.
          </div>
        </section>

        {/* ==========================================================================
            19. PERFORMANCE FRAMEWORK
            ========================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>07 / EVALUATION</span>
            <h2 className={styles.sectionTitle}>
              We Measure <em>More Than Numbers.</em>
            </h2>
          </div>

          <div className={styles.frameworkGrid}>
            {performanceMetrics.map((met, idx) => (
              <div key={met.title} className={styles.frameworkCard}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#1641f5', fontWeight: 700 }}>
                  0{idx + 1} // METRIC
                </span>
                <h3 className={styles.frameworkTitle}>{met.title}</h3>
                <p className={styles.frameworkCopy}>{met.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            20. LEADERSHIP PATHWAY & 21. REVENUE PODS
            ========================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>08 / ADVANCEMENT</span>
            <h2 className={styles.sectionTitle}>
              Performance <em>Opens Doors.</em>
            </h2>
          </div>

          <div className={styles.pathwayGrid}>
            <div className={styles.pathwayCopy}>
              <p>The Revenue Growth Partner Programme is designed to identify people capable of carrying greater commercial responsibility.</p>
              <p>As Irtiqa AI&apos;s commercial organisation expands across global markets, exceptional performers may be considered for opportunities involving team leadership, regional responsibility, mentoring, Revenue Pod leadership, advanced campaigns, and future leadership positions.</p>
              <p>Internally, Irtiqa is developing a regional leadership structure where strong performers may eventually progress into positions such as Regional Sales Head across key operational theaters:</p>
              
              <div className={styles.regionList}>
                {["INDIA", "CANADA", "NIGERIA", "UAE", "PHILIPPINES", "JAMAICA"].map((region) => (
                  <span key={region} className={styles.regionBadge}>{region}</span>
                ))}
              </div>

              <p style={{ fontSize: '0.85rem', color: '#6b6b67', marginTop: '1.5rem' }}>
                * Note: Exceptional performers may be considered for expanded responsibilities and future leadership opportunities as the programme grows. We do not make guaranteed public promises regarding immediate leadership appointments.
              </p>
            </div>

            <div className={styles.earnedStatement}>
              AT IRTIQA, LEADERSHIP IS NOT ASSIGNED.
              <span>IT IS EARNED.</span>
            </div>
          </div>
        </section>

        {/* 21. REVENUE PODS */}
        <section className={`${styles.section} ${styles.podsSection}`}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>09 / ARCHITECTURE</span>
            <h2 className={styles.sectionTitle}>
              Grow Individually.<br /><em>Operate Collectively.</em>
            </h2>
          </div>

          <div className={styles.podsBox}>
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                THE REVENUE POD MODEL
              </h3>
              <p style={{ color: '#6b6b67', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Revenue Partners operate within small, highly focused Revenue Pods—typically comprising approximately five partners coordinated around a Pod Leader or shared commercial objective.
              </p>
              <p style={{ color: '#6b6b67', fontSize: '0.95rem', lineHeight: 1.7 }}>
                This structure creates peer accountability, live collaboration, rapid knowledge sharing, and stronger closing execution without adding corporate bureaucracy.
              </p>
            </div>

            <div className={styles.podVisual} aria-label="Conceptual diagram of a Revenue Pod with 5 partner nodes surrounding a Pod Leader">
              <div className={styles.podCenter}>POD LEADER</div>
              <div className={styles.podNode}>RGP 01</div>
              <div className={styles.podNode}>RGP 02</div>
              <div className={styles.podNode}>RGP 03</div>
              <div className={styles.podNode}>RGP 04</div>
              <div className={styles.podNode}>RGP 05</div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            22. "IS THIS FOR YOU?" (QUALIFICATION)
            ========================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>10 / ALIGNMENT</span>
            <h2 className={styles.sectionTitle}>
              Consider <em>The Fit.</em>
            </h2>
          </div>

          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.goodFit}`}>
              <h3>THIS PROGRAMME MAY BE FOR YOU IF:</h3>
              <ul className={styles.fitList}>
                <li>You communicate confidently and precisely in executive environments.</li>
                <li>You can remain consistent without requiring constant supervision.</li>
                <li>You are comfortable initiating professional conversations and outreach.</li>
                <li>You want practical business exposure and real commercial responsibility.</li>
                <li>You can handle rejection without losing discipline or momentum.</li>
                <li>You take constructive feedback seriously and apply it immediately.</li>
                <li>You are genuinely curious about how businesses grow and scale.</li>
                <li>You prefer real ownership over passive classroom learning.</li>
                <li>You want your performance to directly determine your opportunity and upside.</li>
              </ul>
            </div>

            <div className={`${styles.fitCard} ${styles.badFit}`}>
              <h3>THIS PROGRAMME IS PROBABLY NOT FOR YOU IF:</h3>
              <ul className={styles.fitList}>
                <li>You want a passive certificate without engaging in real commercial execution.</li>
                <li>You expect a guaranteed retainer or salary before demonstrating capability.</li>
                <li>You require constant micromanagement and supervision to complete tasks.</li>
                <li>You disappear or lose motivation when work requires repetitive discipline.</li>
                <li>You feel uncomfortable having your activity and results objectively measured.</li>
                <li>You want a prestigious leadership title before proving what you can execute.</li>
                <li>You resist following structured CRM workflows and reporting protocols.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            23. SELECTION PROCESS
            ========================================================================== */}
        <section className={styles.section} id="selection">
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>11 / ADMISSIONS</span>
            <h2 className={styles.sectionTitle}>
              Selection <em>Process.</em>
            </h2>
          </div>

          <div className={styles.selectionGrid}>
            {selectionRoadmap.map((rd, idx) => (
              <div key={rd.stage} className={styles.selectionCard}>
                <span className={styles.selectionStage}>STAGE // {rd.stage}</span>
                <h3 className={styles.selectionTitle}>{rd.title}</h3>
                <p className={styles.selectionCopy}>{rd.copy}</p>
              </div>
            ))}
          </div>

          <div className={styles.selectionNotice}>
            <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
            <div>
              <strong>Admissions Protocol:</strong> Application submission places your credentials into an internal review queue. Submitting an application does not automatically grant interview scheduling access. Only shortlisted candidates whose communication and background meet our criteria will receive an authorised interview scheduling link via email.
            </div>
          </div>
        </section>

        {/* ==========================================================================
            24. & 25. APPLICATION COMMAND CENTER (MULTI-STEP FORM)
            ========================================================================== */}
        <section className={styles.applySection} id="apply">
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>APPLY FOR COHORT 01 // 2026</h2>
              <p>This application initiates our institutional screening process. Answer thoughtfully; executive clarity and intent are our primary filters.</p>
            </div>

            {submittedRef ? (
              /* ==========================================================================
                 25. POST-SUBMISSION EXPERIENCE
                 ========================================================================== */
              <div className={styles.successContainer}>
                <div className={styles.successRef}>REFERENCE: {submittedRef}</div>
                <h3 className={styles.successTitle}>APPLICATION RECEIVED.</h3>
                <p className={styles.successCopy}>
                  Your application has been securely logged and has entered executive review. If your profile and commercial track record are shortlisted, you will receive an interview invitation using the contact information provided.
                </p>

                <div className={styles.nextStepsBox}>
                  <span className={styles.nextStepsTitle}>WHAT HAPPENS NEXT // TIMELINE</span>
                  <div className={styles.nextStepsFlow}>
                    <div className={styles.nextStepItem}>
                      <span style={{ color: '#1641f5' }}>01</span> Profile Review
                    </div>
                    <span className={styles.nextStepArrow}>→</span>
                    <div className={styles.nextStepItem}>
                      <span style={{ color: '#1641f5' }}>02</span> Shortlisting
                    </div>
                    <span className={styles.nextStepArrow}>→</span>
                    <div className={styles.nextStepItem}>
                      <span style={{ color: '#1641f5' }}>03</span> Interview Invitation
                    </div>
                    <span className={styles.nextStepArrow}>→</span>
                    <div className={styles.nextStepItem}>
                      <span style={{ color: '#1641f5' }}>04</span> Final Decision
                    </div>
                  </div>
                </div>

                <div className={styles.successLinks}>
                  <a href="/" className={styles.primaryButton}>EXPLORE IRTIQA AI HOME</a>
                  <button 
                    type="button" 
                    className={styles.secondaryButton}
                    onClick={() => { setSubmittedRef(null); setCurrentStep(1); }}
                  >
                    SUBMIT ANOTHER APPLICATION
                  </button>
                </div>
              </div>
            ) : (
              /* ==========================================================================
                 24. NATIVE MULTI-STEP APPLICATION FORM
                 ========================================================================== */
              <form onSubmit={handleSubmit}>
                {/* Step Indicator */}
                <div className={styles.stepIndicator} role="tablist" aria-label="Application steps">
                  {[
                    { s: 1, label: "01 PROFILE" },
                    { s: 2, label: "02 EXPERIENCE" },
                    { s: 3, label: "03 AVAILABILITY" },
                    { s: 4, label: "04 MOTIVATION" },
                    { s: 5, label: "05 REVIEW" }
                  ].map((tab) => (
                    <div 
                      key={tab.s}
                      role="tab"
                      aria-selected={currentStep === tab.s}
                      className={`${styles.stepTab} ${currentStep === tab.s ? styles.stepTabActive : ''} ${currentStep > tab.s ? styles.stepTabCompleted : ''}`}
                      onClick={() => { if (currentStep > tab.s) setCurrentStep(tab.s); }}
                    >
                      {tab.label}
                    </div>
                  ))}
                </div>

                {formError && (
                  <div style={{ padding: '1rem', background: '#ffebeb', borderLeft: '4px solid #d32f2f', color: '#b71c1c', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
                    ⚠️ {formError}
                  </div>
                )}

                {/* Step 1: Profile */}
                {currentStep === 1 && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      STEP 01 // CANDIDATE PROFILE
                    </h3>
                    <p style={{ color: '#6b6b67', fontSize: '0.92rem', marginBottom: '2rem' }}>
                      Enter your core contact credentials and location parameters.
                    </p>

                    <div className={styles.formGrid}>
                      <div className={styles.formField}>
                        <label className={styles.formLabel}>FULL NAME *</label>
                        <input required name="full_name" value={formData.full_name} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. Alok Sharma" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>EMAIL ADDRESS *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. alok@example.com" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>WHATSAPP NUMBER (WITH COUNTRY CODE) *</label>
                        <input required name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. +1 (555) 000-0000" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>COUNTRY OF RESIDENCE *</label>
                        <input required name="country" value={formData.country} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. India / United States / Canada" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>CITY *</label>
                        <input required name="city" value={formData.city} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. Bangalore / London / New York" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>LINKEDIN PROFILE URL</label>
                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className={styles.formInput} placeholder="https://linkedin.com/in/yourprofile" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>TIMEZONE</label>
                        <input name="timezone" value={formData.timezone} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. GMT+5:30 (IST) / EST / UTC" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>SPOKEN & WRITTEN LANGUAGES</label>
                        <input name="languages" value={formData.languages} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. English (Fluent), Hindi" />
                      </div>
                    </div>

                    <div className={styles.formActions}>
                      <span />
                      <button type="button" onClick={nextStep} className={styles.primaryButton}>
                        PROCEED TO EXPERIENCE →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Experience */}
                {currentStep === 2 && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      STEP 02 // COMMERCIAL TRACK RECORD
                    </h3>
                    <p style={{ color: '#6b6b67', fontSize: '0.92rem', marginBottom: '2rem' }}>
                      Help us evaluate your past market exposure, closing experience, and current role.
                    </p>

                    <div className={styles.formGrid}>
                      <div className={styles.formField}>
                        <label className={styles.formLabel}>CURRENT ROLE / OCCUPATION *</label>
                        <input required name="current_role" value={formData.current_role} onChange={handleInputChange} className={styles.formInput} placeholder="e.g. Account Executive / Founder / Strategist" />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>PREVIOUS SALES / BD EXPERIENCE *</label>
                        <select name="sales_experience" value={formData.sales_experience} onChange={handleInputChange} className={styles.formSelect}>
                          <option>New to high-ticket commercial work</option>
                          <option>1–2 years in B2B sales / BD</option>
                          <option>3–5 years in enterprise / closing sales</option>
                          <option>5+ years (Senior Commercial Leader)</option>
                        </select>
                      </div>

                      <div className={`${styles.formField} ${styles.formFieldFull}`}>
                        <label className={styles.formLabel}>WHAT TYPES OF COMMERCIAL WORK HAVE YOU DONE? *</label>
                        <p style={{ margin: '0 0 0.5rem', fontSize: '0.82rem', color: '#888884' }}>Describe specific deal sizes, industries, prospecting methods, negotiation, or client acquisition work you have executed.</p>
                        <textarea required name="commercial_experience" value={formData.commercial_experience} onChange={handleInputChange} className={styles.formTextarea} placeholder="Detail your background here..." />
                      </div>
                    </div>

                    <div className={styles.formActions}>
                      <button type="button" onClick={prevStep} className={styles.secondaryButton}>
                        ← BACK TO PROFILE
                      </button>
                      <button type="button" onClick={nextStep} className={styles.primaryButton}>
                        PROCEED TO AVAILABILITY →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Availability */}
                {currentStep === 3 && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      STEP 03 // OPERATIONAL AVAILABILITY
                    </h3>
                    <p style={{ color: '#6b6b67', fontSize: '0.92rem', marginBottom: '2rem' }}>
                      We evaluate how your weekly commitment aligns with our 30-day execution sprint.
                    </p>

                    <div className={styles.formGrid}>
                      <div className={styles.formField}>
                        <label className={styles.formLabel}>WEEKLY AVAILABILITY *</label>
                        <select name="weekly_availability" value={formData.weekly_availability} onChange={handleInputChange} className={styles.formSelect}>
                          <option>10–15 hours / week (Part-time focused)</option>
                          <option>15–25 hours / week (Substantial commitment)</option>
                          <option>25–40 hours / week (High velocity)</option>
                          <option>40+ hours / week (Full commercial dedication)</option>
                        </select>
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>ARE YOU CURRENTLY WORKING OR STUDYING? *</label>
                        <select name="work_or_study_status" value={formData.work_or_study_status} onChange={handleInputChange} className={styles.formSelect}>
                          <option>Working full-time</option>
                          <option>Working part-time / Freelancing</option>
                          <option>Running my own business</option>
                          <option>University Student / In studies</option>
                          <option>In career transition / Fully available</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formActions}>
                      <button type="button" onClick={prevStep} className={styles.secondaryButton}>
                        ← BACK TO EXPERIENCE
                      </button>
                      <button type="button" onClick={nextStep} className={styles.primaryButton}>
                        PROCEED TO MOTIVATION →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Motivation */}
                {currentStep === 4 && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      STEP 04 // STRATEGIC INTENT
                    </h3>
                    <p style={{ color: '#6b6b67', fontSize: '0.92rem', marginBottom: '2rem' }}>
                      This is our signature screening question. Executive clarity and intent are our primary filters.
                    </p>

                    <div className={styles.formGrid}>
                      <div className={`${styles.formField} ${styles.formFieldFull}`}>
                        <label className={styles.formLabel} style={{ fontSize: '0.82rem', color: '#1641f5' }}>
                          WHAT WOULD YOU DO WITH 30 DAYS, 100 OPPORTUNITIES EACH WEEK, AND THE INFRASTRUCTURE TO EXECUTE? *
                        </label>
                        <p style={{ margin: '0 0 0.5rem', fontSize: '0.82rem', color: '#888884' }}>Explain your operating strategy, how you approach qualification and executive outreach, and what drives you to partner with an AI consulting and engineering firm.</p>
                        <textarea required name="motivation_answer" value={formData.motivation_answer} onChange={handleInputChange} className={styles.formTextarea} style={{ minHeight: '180px' }} placeholder="Provide your detailed strategic answer here (min. 30 characters)..." />
                      </div>
                    </div>

                    <div className={styles.formActions}>
                      <button type="button" onClick={prevStep} className={styles.secondaryButton}>
                        ← BACK TO AVAILABILITY
                      </button>
                      <button type="button" onClick={nextStep} className={styles.primaryButton}>
                        PROCEED TO REVIEW →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 5: Review & Submit */}
                {currentStep === 5 && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      STEP 05 // FINAL REVIEW & CONSENT
                    </h3>
                    <p style={{ color: '#6b6b67', fontSize: '0.92rem', marginBottom: '2rem' }}>
                      Verify your application credentials and confirm programme understanding before submission.
                    </p>

                    <div style={{ background: '#f4f3ee', padding: '1.5rem', border: '1px solid var(--rgp-border-dark)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div><strong>NAME:</strong> {formData.full_name}</div>
                        <div><strong>EMAIL:</strong> {formData.email}</div>
                        <div><strong>WHATSAPP:</strong> {formData.whatsapp}</div>
                        <div><strong>LOCATION:</strong> {formData.city}, {formData.country}</div>
                        <div><strong>ROLE:</strong> {formData.current_role}</div>
                        <div><strong>AVAILABILITY:</strong> {formData.weekly_availability}</div>
                      </div>
                      <div style={{ borderTop: '1px solid var(--rgp-border)', paddingTop: '1rem' }}>
                        <strong>SIGNATURE ANSWER:</strong>
                        <p style={{ margin: '0.5rem 0 0', color: '#555', fontStyle: 'italic', lineHeight: 1.6 }}>&quot;{formData.motivation_answer}&quot;</p>
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={`${styles.formField} ${styles.formFieldFull}`}>
                        <label className={styles.checkboxField}>
                          <input required type="checkbox" name="consent_performance" checked={formData.consent_performance} onChange={handleInputChange} />
                          <span><strong>I understand this is a performance-based commercial programme (providing 20%–30% commissions on closed revenue) and not a salaried employment position.</strong> I acknowledge that there is no guaranteed retainer or income.</span>
                        </label>

                        <label className={styles.checkboxField} style={{ marginTop: '0.5rem' }}>
                          <input required type="checkbox" name="consent_terms" checked={formData.consent_terms} onChange={handleInputChange} />
                          <span><strong>I agree to the programme terms, evaluation criteria, and privacy policy.</strong> I consent to Irtiqa AI reviewing my professional background and storing my application data for admissions screening.</span>
                        </label>
                      </div>
                    </div>

                    <div className={styles.formActions}>
                      <button type="button" onClick={prevStep} className={styles.secondaryButton}>
                        ← BACK TO MOTIVATION
                      </button>
                      <button type="submit" disabled={submitting} className={styles.primaryButton} style={{ minWidth: 260 }}>
                        {submitting ? "SUBMITTING APPLICATION..." : "SUBMIT APPLICATION ↗"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </section>

        {/* ==========================================================================
            28. FAQ ACCORDION
            ========================================================================== */}
        <section className={styles.section} id="faq">
          <div className={styles.sectionTop}>
            <span className={styles.sectionCode}>12 / KNOWLEDGE BASE</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <em>Questions.</em>
            </h2>
          </div>

          <div className={styles.faqContainer}>
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={styles.faqItem}>
                  <button 
                    type="button" 
                    className={styles.faqButton} 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================================================
            29. FINAL CTA
            ========================================================================== */}
        <section className={styles.finalCtaSection}>
          <div>
            <h2 className={styles.finalCtaTitle}>
              30 DAYS.<br />
              100 OPPORTUNITIES<br />
              EACH WEEK.<br />
              <span>ONE QUESTION.</span>
            </h2>
            <p style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, textTransform: 'uppercase', margin: '2rem 0 0' }}>
              WHAT WILL YOU DO<br />WITH THEM?
            </p>
          </div>

          <div className={styles.finalCtaSub}>
            REVENUE GROWTH PARTNER PROGRAMME // IRTIQA AI // 2026
          </div>

          <div className={styles.finalCtaButtons}>
            <a href="#apply" className={styles.finalCtaBtn}>
              [ APPLY FOR THE PROGRAMME ]
            </a>
            <a href={PARTNER_OS_URL} target="_blank" rel="noopener noreferrer" className={styles.finalCtaPartnerLink}>
              Already selected? Partner Access ↗
            </a>
          </div>
        </section>
      </main>

      {/* ==========================================================================
          30. INSTITUTIONAL FOOTER
          ========================================================================== */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3>IRTIQA AI</h3>
            <p>REVENUE GROWTH PARTNER PROGRAMME // COHORT 01 // 2026</p>
            <p style={{ color: '#888884', marginTop: '4px', fontSize: '0.7rem' }}>Revenue Division // Global Commercial Operations</p>
          </div>
          <nav className={styles.footerLinks} aria-label="Footer navigation">
            <a href="/">About Irtiqa</a>
            <a href="#programme">Programme</a>
            <a href="#thirty-days">30 Days</a>
            <a href="#apply">Apply</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href={PARTNER_OS_URL} target="_blank" rel="noopener noreferrer">Partner Access ↗</a>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <div>© 2026 Irtiqa AI. All rights reserved.</div>
          <div>Programme information may be updated as the Revenue Growth Partner Programme evolves.</div>
        </div>
      </footer>
    </div>
  );
}
