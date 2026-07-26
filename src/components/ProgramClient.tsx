"use client";

import { FormEvent, useState } from 'react';
import Footer from './Footer';
import styles from './ProgramClient.module.css';

const timeline = [
  ['01', 'Selection', 'Application, profile review, interview and decision.'],
  ['02', 'Activation', 'Orientation, resources, Partner OS access and initial allocation.'],
  ['03', 'Execution', 'Research, outreach, qualification, appointments, reporting and iteration.'],
  ['04', 'Review', 'Weekly performance review, feedback, enablement and analysis.'],
  ['05', 'Evaluation', '30-day review, contribution assessment and progression decision.'],
];

const resources = [
  ['01', 'Opportunities', 'Approximately 100 advanced leads can be allocated weekly within the current programme structure.'],
  ['02', 'Infrastructure', 'Selected partners receive access to Irtiqa’s private Revenue Partner Operating System after selection.'],
  ['03', 'Enablement', 'Commercial resources, sales frameworks, objection handling, training sessions and ongoing guidance.'],
  ['04', 'Feedback', 'Performance is reviewed so partners understand where execution is strong and where improvement is required.'],
  ['05', 'Environment', 'Work within a growing commercial organisation rather than practising sales through simulations.'],
  ['06', 'Upside', 'Performance-linked commission and potential access to expanded responsibilities.'],
];

const measures = [
  ['Activity', 'Are you consistently executing?'],
  ['Quality', 'Are conversations and appointments commercially relevant?'],
  ['Communication', 'Can the team depend on you?'],
  ['Professionalism', 'How do you represent Irtiqa?'],
  ['Consistency', 'Can performance be sustained?'],
  ['Contribution', 'Are you improving the organisation around you?'],
  ['Commercial ability', 'Can you recognise and progress opportunity?'],
  ['Judgement', 'Do you make decisions that move work forward?'],
];

const faqs = [
  ['Is this an employment role?', 'No. The Revenue Growth Partner Programme is a performance-based commercial programme. Final commercial terms are outlined in the agreement provided to selected candidates.'],
  ['Is the programme remote?', 'The programme is designed for remote commercial execution. Specific operating expectations and availability requirements are discussed during selection.'],
  ['Are leads guaranteed?', 'Lead allocation follows the current programme structure and may change according to operations, fit and performance. It is not a guarantee of a fixed volume or income.'],
  ['How is performance evaluated?', 'Performance is assessed holistically, including activity, consistency, communication, professionalism, appointment quality, commercial execution and contribution.'],
  ['Does the programme guarantee leadership progression?', 'No. Exceptional performers may be considered for expanded responsibilities and future leadership opportunities as the programme grows. Leadership is earned through sustained contribution.'],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function ProgramClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

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
      <a className={styles.skip} href="#rgp-content">Skip to programme content</a>

      <header className={styles.nav}>
        <a className={styles.brand} href="/" aria-label="Return to Irtiqa AI home">
          <span className={styles.brandMark}>R/30</span>
          <span>
            <strong>IRTIQA AI</strong>
            <small>Revenue Growth Partner Programme</small>
          </span>
        </a>
        <nav className={styles.links} aria-label="Programme navigation">
          <a href="#programme">Programme</a>
          <a href="#thirty-days">30 Days</a>
          <a href="#opportunity">Opportunity</a>
          <a href="#selection">Selection</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.navActions}>
          <a className={styles.partnerAccess} href="PARTNER_OS_URL" target="_blank" rel="noopener noreferrer">Partner Access ↗</a>
          <a className={styles.navApply} href="#apply">Apply</a>
        </div>
      </header>

      <main id="rgp-content">
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroMeta}>
            <span>IRTIQA AI / REVENUE</span>
            <span className={styles.status}>Applications Open</span>
            <span>Edition 2026 / Cohort 01</span>
          </div>

          <div className={styles.heroContent}>
            <h1><span>Revenue</span><span>Growth</span><em>Partner</em></h1>
            <div className={styles.heroSide}>
              <p>A performance-based commercial programme for individuals ready to work with real business opportunities and demonstrate what they can execute.</p>
              <a href="#apply" className={styles.primaryButton}>Apply for the programme <Arrow /></a>
            </div>
          </div>

          <div className={styles.heroFoot}>
            <div><span>Remote / Global</span><span>Initial cycle / 30 days</span><span>Performance-based</span></div>
            <a href="#programme">Explore ↓</a>
          </div>
        </section>

        <section className={`${styles.manifesto} ${styles.section}`} id="programme">
          <div className={styles.code}>01 / Programme</div>
          <h2>This is not <em>an internship.</em></h2>
          <p>Revenue Growth Partners operate inside Irtiqa AI’s commercial ecosystem. Real conversations. Real qualification. Meaningful contribution to revenue generation.</p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>A commercial institution</span>
            <h2 className={styles.editorialTitle}>The next generation of commercial leaders will not be built in classrooms alone.</h2>
          </div>
          <div className={styles.introGrid}>
            <div className={styles.copy}>
              <p>Sales, business development, negotiation and commercial judgement are built through exposure, repetition, responsibility and feedback.</p>
              <p>The Revenue Growth Partner Programme creates a structured environment where selected individuals can develop these capabilities while contributing to Irtiqa AI’s commercial organisation.</p>
            </div>
            <p className={styles.pullQuote}>We provide the infrastructure.<br />You provide the execution.</p>
          </div>
        </section>

        <section className={`${styles.days} ${styles.section}`} id="thirty-days">
          <span className={styles.watermark} aria-hidden="true">30</span>
          <div className={styles.sectionTop}>
            <span className={styles.code}>02 / Structure</span>
            <h2 className={styles.title}>Your first<br />30 days.</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map(([number, title, copy]) => (
              <article key={number}>
                <span>{`Stage ${number}`}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.flowSection} ${styles.section}`} id="opportunity">
          <div className={styles.sectionTop}>
            <span className={styles.code}>03 / Commercial flow</span>
            <h2 className={styles.title}>The work<br />in sequence.</h2>
          </div>
          <div className={styles.flow}>
            {[
              ['01', 'Contact', 'Initiate professional conversations with assigned business opportunities.'],
              ['02', 'Qualify', 'Understand the business, identify relevance, and establish a meaningful commercial conversation.'],
              ['03', 'Book', 'Convert qualified interest into an appointment with Irtiqa.'],
              ['04', 'Convert', 'Where capable and appropriate, progress opportunities through the commercial process.'],
            ].map(([number, title, copy]) => (
              <article key={title}>
                <span>{number} / {title === 'Convert' ? '↗' : '→'}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>04 / Resources</span>
            <h2 className={styles.title}>Irtiqa brings<br />the <em>infrastructure.</em></h2>
          </div>
          <div className={styles.ledger}>
            {resources.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.standard} ${styles.section}`}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>05 / Partner standard</span>
            <h2 className={styles.title}>You bring<br />the standard.</h2>
          </div>
          <p className={styles.wordLine}><span>Consistency</span><em>Discipline</em><span>Communication</span><em>Curiosity</em><span>Resilience</span></p>
          <p className={styles.standardCopy}>We are not searching for perfect résumés. We are searching for people who can communicate, learn, execute and take responsibility. Previous commercial experience is valuable. Potential backed by execution matters more.</p>
        </section>

        <section className={`${styles.commercialTerms} ${styles.section}`}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>06 / Commercial terms</span>
            <h2 className={styles.title}>Performance<br />creates upside.</h2>
          </div>
          <div className={styles.commissionGrid}>
            <article><strong>20%</strong><h3>Appointment → Irtiqa close</h3><p>When an opportunity generated through your appointment results in a successfully closed deal by Irtiqa, the current programme structure provides a 20% commission.</p></article>
            <article><strong>30%</strong><h3>Source → Close</h3><p>When you successfully progress and personally close the opportunity, the current programme structure provides a 30% commission.</p></article>
          </div>
          <p className={styles.finePrint}>Commission eligibility, calculation basis, payment timing, attribution rules, cancellations, refunds and other commercial terms are governed by the Revenue Growth Partner agreement provided to selected candidates. No income is guaranteed.</p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>07 / Performance</span>
            <h2 className={styles.title}>We measure<br />more than numbers.</h2>
          </div>
          <div className={styles.measureGrid}>
            {measures.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className={`${styles.leadership} ${styles.section}`}>
          <div className={styles.leadershipGrid}>
            <div>
              <span className={styles.code}>08 / Opportunity</span>
              <h2 className={styles.title}>Performance<br />opens doors.</h2>
              <p className={styles.copy}>The programme is designed to identify people capable of carrying greater commercial responsibility. As Irtiqa’s commercial organisation expands, exceptional performers may be considered for future leadership opportunities.</p>
              <ul>{['Team leadership', 'Regional responsibility', 'Mentoring and Revenue Pod leadership', 'Advanced campaigns', 'Expanded commercial responsibility'].map((item) => <li key={item}>{item} <span>↗</span></li>)}</ul>
            </div>
            <p className={styles.leadershipStatement}>At Irtiqa,<br />leadership is not assigned.<br /><em>It is earned.</em></p>
          </div>
          <div className={styles.pods}>
            <span>Revenue pods / illustrative</span>
            <div><div className={styles.podLine}><b>Lead</b><i>R1</i><i>R2</i><i>R3</i><i>R4</i><i>R5</i></div><p>Regional structures may operate through Revenue Pods, with approximately five Revenue Partners forming a pod. Expanded responsibilities are considered through merit, not promised on a timetable.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <span className={styles.code}>09 / Qualification</span>
            <h2 className={styles.title}>Consider<br />the fit.</h2>
          </div>
          <div className={styles.fitGrid}>
            <div className={styles.goodFit}><h3>This may be for you if</h3><ul>{['You are willing to work with real commercial conversations.', 'You value feedback and can apply it quickly.', 'You can communicate with clarity and professionalism.', 'You are comfortable being accountable for your work.', 'You are interested in commercial capability, not just a title.'].map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className={styles.badFit}><h3>This may not be for you if</h3><ul>{['You are looking for a passive learning experience.', 'You need guaranteed outcomes before you begin.', 'You are unwilling to follow a structured operating process.', 'You prefer simulations to real business exposure.', 'You are not ready to own your execution.'].map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>

        <section className={`${styles.selectionSection} ${styles.section}`} id="selection">
          <div className={styles.sectionTop}>
            <span className={styles.code}>10 / Selection</span>
            <h2 className={styles.title}>A considered<br />process.</h2>
          </div>
          <div className={styles.selectionGrid}>
            {[
              ['01', 'Application', 'Tell us about your background, availability and motivation.'],
              ['02', 'Review', 'We review fit, communication and relevant commercial potential.'],
              ['03', 'Interview', 'Shortlisted candidates are invited to schedule a conversation.'],
              ['04', 'Decision', 'Selected partners receive next steps for activation and access.'],
            ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.sectionTop}>
            <span className={styles.code}>11 / FAQ</span>
            <h2 className={styles.title}>Before you<br />apply.</h2>
          </div>
          <div className={styles.faqs}>
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? styles.faqOpen : ''} key={question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>
                <div><p>{answer}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.application} ${styles.section}`} id="apply">
          <div className={styles.applicationInner}>
            <div className={styles.sectionTop}>
              <span className={styles.code}>12 / Application</span>
              <h2 className={styles.title}>Put yourself<br />forward.</h2>
            </div>
            <p className={styles.applicationIntro}>This application begins a selection process. Complete it carefully; clarity and intent matter.</p>

            {submitted ? (
              <div className={styles.confirmation} aria-live="polite">
                <div>✓</div><h3>Application received.</h3><p>Your information has entered the RGP / 30 selection process. If your profile is shortlisted, you will receive an invitation to schedule an interview.</p>
                <a className={styles.primaryButton} href="INTERVIEW_SCHEDULING_URL" target="_blank" rel="noopener noreferrer">Interview scheduling ↗</a>
              </div>
            ) : (
              <form className={styles.form} onSubmit={submitApplication}>
                <div className={styles.progress} aria-label={`Application step ${step} of 3`}><span className={step >= 1 ? styles.active : ''}/><span className={step >= 2 ? styles.active : ''}/><span className={step >= 3 ? styles.active : ''}/></div>

                <fieldset className={step === 1 ? styles.formStep : styles.hiddenStep} data-form-step="1">
                  <legend>Your details</legend><p>Start with the essentials.</p>
                  <div className={styles.formGrid}>
                    <label>Full name<input required name="name" autoComplete="name" /></label>
                    <label>Email address<input required type="email" name="email" autoComplete="email" /></label>
                    <label>Phone / WhatsApp<input required name="phone" autoComplete="tel" /></label>
                    <label>Country / region<input required name="country" autoComplete="country-name" /></label>
                  </div>
                  <div className={styles.formActions}><span /><button className={styles.primaryButton} type="button" onClick={nextStep}>Continue <Arrow /></button></div>
                </fieldset>

                <fieldset className={step === 2 ? styles.formStep : styles.hiddenStep} data-form-step="2">
                  <legend>Your context</legend><p>Help us understand your commercial experience.</p>
                  <div className={styles.formGrid}>
                    <label>Current occupation<input required name="occupation" /></label>
                    <label>Commercial experience<select required name="experience" defaultValue=""><option value="" disabled>Select one</option><option>New to commercial work</option><option>Some relevant experience</option><option>1–3 years</option><option>3+ years</option></select></label>
                    <label className={styles.full}>What sales, business development or client-facing work have you done?<textarea required name="background" /></label>
                  </div>
                  <div className={styles.formActions}><button className={styles.secondaryButton} type="button" onClick={() => setStep(1)}>← Back</button><button className={styles.primaryButton} type="button" onClick={nextStep}>Continue <Arrow /></button></div>
                </fieldset>

                <fieldset className={step === 3 ? styles.formStep : styles.hiddenStep} data-form-step="3">
                  <legend>Your intent</legend><p>We are interested in how you think about the work.</p>
                  <div className={styles.formGrid}>
                    <label className={styles.full}>Why are you applying to the Revenue Growth Partner Programme?<textarea required name="motivation" /></label>
                    <label className={styles.full}>What does commercial ownership mean to you?<textarea required name="ownership" /></label>
                    <label className={`${styles.full} ${styles.consent}`}><input required type="checkbox" name="consent" /><span>I understand that this is a performance-based commercial programme, not an offer of employment or guaranteed income, and I consent to Irtiqa AI reviewing my application.</span></label>
                  </div>
                  <div className={styles.formActions}><button className={styles.secondaryButton} type="button" onClick={() => setStep(2)}>← Back</button><button className={styles.primaryButton} type="submit">Submit application ↗</button></div>
                </fieldset>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

