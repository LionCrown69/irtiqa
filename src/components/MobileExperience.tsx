import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const systemCards = [
  {
    label: 'Lead Capture',
    title: 'Catch intent instantly',
    body: 'Inbound leads are qualified and routed before the momentum drops.',
  },
  {
    label: 'Follow-Up',
    title: 'Keep the conversation alive',
    body: 'Reminder logic, nurture flows, and recovery sequences move prospects toward the call.',
  },
  {
    label: 'Visibility',
    title: 'Know what is working',
    body: 'Reporting stays tied to response time, show-up quality, and pipeline recovery.',
  },
] as const;

const processSteps = [
  {
    step: '01',
    title: 'Audit',
    body: 'We identify where revenue is leaking and where speed matters most.',
  },
  {
    step: '02',
    title: 'Design',
    body: 'We map the system around your lead flow, team, and booking process.',
  },
  {
    step: '03',
    title: 'Deploy',
    body: 'We launch the automation stack and shape it around real usage.',
  },
  {
    step: '04',
    title: 'Compound',
    body: 'Performance improves over time through testing, tuning, and iteration.',
  },
] as const;

const proofCards = [
  {
    value: '37%',
    label: 'faster lead response',
  },
  {
    value: '42%',
    label: 'less manual admin',
  },
  {
    value: '28%',
    label: 'more booked calls',
  },
  {
    value: '24/7',
    label: 'automated coverage',
  },
] as const;

const ideaPoints = [
  'Respond in minutes, not hours',
  'Automate follow-up across the booking path',
  'Turn operations into a revenue system',
] as const;

const MobileExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.22,
  });
  const heroProgress = useSpring(heroScrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  const orbY = useTransform(smooth, [0, 1], [0, 180]);
  const orbScale = useTransform(smooth, [0, 1], [1, 1.18]);
  const progressScale = useTransform(smooth, [0, 1], [0.08, 1]);
  const heroHeadlineY = useTransform(heroProgress, [0, 0.28, 1], [0, -16, -44]);
  const heroHeadlineOpacity = useTransform(heroProgress, [0, 0.48, 1], [1, 1, 0.34]);
  const heroSubY = useTransform(heroProgress, [0, 0.34, 1], [0, -12, -26]);
  const heroSubOpacity = useTransform(heroProgress, [0, 0.24, 0.56, 1], [1, 1, 0.64, 0.16]);
  const heroCtaY = useTransform(heroProgress, [0.46, 0.72, 1], [24, 0, 0]);
  const heroCtaOpacity = useTransform(heroProgress, [0.46, 0.72, 1], [0, 1, 1]);
  const heroStageY = useTransform(heroProgress, [0, 1], [36, -68]);
  const heroStageRotate = useTransform(heroProgress, [0, 1], [8, -4]);
  const heroStageScale = useTransform(heroProgress, [0, 0.6, 1], [0.94, 1, 0.98]);
  const heroSurfaceY = useTransform(heroProgress, [0, 1], [28, -36]);
  const heroSurfaceOpacity = useTransform(heroProgress, [0.1, 0.35, 1], [0, 1, 1]);
  const heroDockY = useTransform(heroProgress, [0.42, 1], [42, 0]);
  const heroDockOpacity = useTransform(heroProgress, [0.42, 0.72, 1], [0, 0.92, 1]);

  return (
    <section id="mobile-experience" ref={sectionRef} aria-label="Irtiqa mobile experience">
      <motion.div
        aria-hidden="true"
        className="mox-orb"
        style={{ y: orbY, scale: orbScale }}
      />

      <div className="mox-shell">
        <section className="mox-screen mox-hero" ref={heroRef}>
          <div className="mox-hero-scroll">
            <div className="mox-hero-sticky">
              <div className="mox-hero-copy">
                <span className="mox-chip">Irtiqa Systems</span>
                <motion.h2 style={{ y: heroHeadlineY, opacity: heroHeadlineOpacity }}>
                  AI systems that increase revenue.
                </motion.h2>
                <motion.p style={{ y: heroSubY, opacity: heroSubOpacity }}>
                  Faster replies, stronger follow-up, and more qualified appointments without extra
                  manual workload.
                </motion.p>

                <motion.div className="mox-hero-cta" style={{ y: heroCtaY, opacity: heroCtaOpacity }}>
                  <a
                    href="#book"
                    className="mox-btn mox-btn-primary"
                  >
                    Book Audit Call
                  </a>
                  <a href="#mobile-systems" className="mox-btn mox-btn-secondary">
                    See Systems
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="mox-hero-stage"
                style={{ y: heroStageY, rotate: heroStageRotate, scale: heroStageScale }}
              >
                <div className="mox-hero-stage-base"></div>
                <div className="mox-hero-visual">
                  <div className="mox-hero-visual-top">
                    <span>Revenue System</span>
                    <strong>Live</strong>
                  </div>
                  <div className="mox-hero-rail">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mox-hero-grid">
                    <div>
                      <small>Reply speed</small>
                      <strong>&lt; 5 min</strong>
                    </div>
                    <div>
                      <small>Booking path</small>
                      <strong>Automated</strong>
                    </div>
                    <div>
                      <small>Coverage</small>
                      <strong>24/7</strong>
                    </div>
                    <div>
                      <small>Primary goal</small>
                      <strong>Appointments</strong>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mox-hero-surface"
                style={{ y: heroSurfaceY, opacity: heroSurfaceOpacity }}
              >
                <div className="mox-hero-surface-top">
                  <span>Glide flow</span>
                  <strong>Revenue, not noise</strong>
                </div>
                <div className="mox-hero-surface-metrics">
                  <article>
                    <small>Lead intent</small>
                    <strong>Captured</strong>
                  </article>
                  <article>
                    <small>Follow-up</small>
                    <strong>Automated</strong>
                  </article>
                  <article>
                    <small>Bookings</small>
                    <strong>Qualified</strong>
                  </article>
                </div>
                <div className="mox-hero-surface-copy">
                  Mobile should feel like a product walkthrough: one promise, one glide, one next step.
                </div>
              </motion.div>

              <motion.div className="mox-hero-endnote" style={{ y: heroDockY, opacity: heroDockOpacity }}>
                <span>Scroll into the system</span>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mox-screen mox-idea">
          <motion.div
            className="mox-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mox-kicker">What we do</span>
            <h3>We turn slow lead handling into a booking system.</h3>
            <p>
              On mobile, every screen should answer one question clearly: why this matters, why
              Irtiqa, and what happens next.
            </p>
            <div className="mox-idea-list">
              {ideaPoints.map((point) => (
                <div key={point} className="mox-idea-pill">
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="mobile-systems" className="mox-screen mox-systems">
          <div className="mox-panel">
            <span className="mox-kicker">Systems</span>
            <h3>Three layers that move leads toward revenue.</h3>
            <div className="mox-card-stack">
              {systemCards.map((card, index) => (
                <motion.article
                  key={card.label}
                  className="mox-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span>{card.label}</span>
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="mobile-process" className="mox-screen mox-process">
          <div className="mox-panel">
            <div className="mox-process-head">
              <span className="mox-kicker">How it works</span>
              <div className="mox-progress">
                <motion.span style={{ scaleX: progressScale, transformOrigin: '0% 50%' }} />
              </div>
            </div>
            <h3>One clear motion path from audit to live deployment.</h3>
            <div className="mox-step-list">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.step}
                  className="mox-step"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <strong>{step.step}</strong>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mox-screen mox-proof">
          <div className="mox-panel">
            <span className="mox-kicker">Proof</span>
            <h3>Built to feel premium and convert with clarity.</h3>
            <div className="mox-proof-grid">
              {proofCards.map((card, index) => (
                <motion.article
                  key={card.label}
                  className="mox-proof-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <strong>{card.value}</strong>
                  <span>{card.label}</span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mox-screen mox-cta-screen">
          <motion.div
            className="mox-cta-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mox-kicker">What happens next</span>
            <h3>Book the audit call and we map the revenue leaks.</h3>
            <p>
              We review your current flow, identify friction, and show where automation should
              drive appointments and follow-up.
            </p>
            <a
              href="#book"
              className="mox-btn mox-btn-primary mox-btn-full"
            >
              Book 30-Min Discovery Call
            </a>
          </motion.div>
        </section>
      </div>

      <div className="mox-dock">
        <div className="mox-dock-copy">
          <span>Book the audit</span>
          <small>See where revenue is leaking</small>
        </div>
        <a
          href="#book"
          className="mox-dock-btn"
        >
          Book
        </a>
      </div>
    </section>
  );
};

export default MobileExperience;
