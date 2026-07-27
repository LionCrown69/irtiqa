import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface HeroProps {
  industry?: {
    slug: string;
    name: string;
    title: string;
    painPoint: string;
  };
  location?: {
    slug: string;
    name: string;
    state: string;
    country: string;
  };
}

const Hero: React.FC<HeroProps> = ({ industry, location }) => {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacityGrid = useTransform(scrollY, [0, 400], [0.35, 0]);

  const mobileHighlights = [
    { label: 'Advisory', value: 'Strategy & Growth' },
    { label: 'Infrastructure', value: 'AI & Revenue Systems' },
    { label: 'Partnerships', value: 'Long-Term Alignment' }
  ] as const;

  const mobileStoryCards = [
    {
      step: '01',
      title: 'Strategic Assessment',
      body: 'Diagnosing operational constraints across strategy, technology, and commercial systems.'
    },
    {
      step: '02',
      title: 'Infrastructure & AI Deployment',
      body: 'Engineering autonomous revenue architectures and internal tools that scale.'
    },
    {
      step: '03',
      title: 'Long-Term Operating Alignment',
      body: 'Partnering alongside management to execute growth and build institutional value.'
    }
  ] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring", stiffness: 60, damping: 14
      }
    }
  };

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '40px' }}>
      {/* Dynamic Background Effects */}
      <motion.div
        className="hero-grid"
        aria-hidden="true"
        style={{ y: yBg, opacity: opacityGrid }}
      >
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="hgrid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M72 0H0V72" fill="none" stroke="rgba(12,12,11,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1440" height="900" fill="url(#hgrid)" />
          <line x1="0" y1="900" x2="400" y2="0" stroke="rgba(22,65,245,0.04)" strokeWidth="1" />
          <line x1="200" y1="900" x2="600" y2="0" stroke="rgba(22,65,245,0.04)" strokeWidth="1" />
          <line x1="1440" y1="0" x2="1040" y2="900" stroke="rgba(22,65,245,0.04)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Ambient Glow */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              width: '800px',
              height: '600px',
              background: 'radial-gradient(ellipse at center, rgba(22,65,245,0.08) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(22,65,245,0.1) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
        </>
      )}

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >
        <motion.div variants={itemVariants} className="hero-eyebrow" style={{ opacity: 1, animation: 'none', marginBottom: '32px', letterSpacing: '0.08em', fontSize: '0.75rem', fontWeight: 700, color: '#1641F5', background: 'rgba(22,65,245,0.06)', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(22,65,245,0.15)' }}>
          <motion.span
            className="hero-eyebrow-dot"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#1641F5',
              marginRight: '8px',
              boxShadow: '0 0 0 3px rgba(22,65,245,0.15)',
            }}
          />
          IRTIQA // CONSULTING • AI INFRASTRUCTURE • OPERATING GROWTH PARTNERSHIPS
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-h1" style={{ opacity: 1, animation: 'none', textAlign: 'center', maxWidth: '1050px', marginBottom: '24px' }}>
          {industry || location ? (
            <>
              <span className="hero-h1-line hero-h1-line-main">
                {industry ? `Building ${industry.name} Infrastructure` : 'Building the infrastructure'}
              </span>
              <em className="hero-h1-accent">
                {location ? `in ${location.name}.` : 'behind ambitious companies.'}
              </em>
            </>
          ) : (
            <>
              <span className="hero-h1-line hero-h1-line-main">Building the infrastructure</span>
              <em className="hero-h1-accent" style={{ display: 'block', fontStyle: 'normal', color: '#1641F5' }}>behind ambitious companies.</em>
            </>
          )}
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-sub" style={{ opacity: 1, animation: 'none', textAlign: 'center', maxWidth: '720px', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--sub)', margin: '0 auto 36px' }}>
          Irtiqa works with founders and businesses to solve growth constraints across strategy, technology, revenue and operations.<br/><br/>
          <strong style={{ color: 'var(--ink)' }}>We advise. We build. And with selected companies, we partner for the long term.</strong>
        </motion.p>

        <motion.div variants={itemVariants} className="hero-ctas" style={{ opacity: 1, animation: 'none', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
          <motion.a
            whileHover={{ scale: 1.04, y: -2, boxShadow: "0 14px 48px rgba(22,65,245,0.35)" }}
            whileTap={{ scale: 0.98 }}
            href="#work-with-irtiqa"
            className="btn-fill primary-cta"
            style={{ transition: 'none', padding: '14px 28px', fontSize: '15px', fontWeight: 600 }}
          >
            Work With Irtiqa
            <motion.svg
              whileHover={{ x: 4 }}
              width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ marginLeft: '8px' }}
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </motion.svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, backgroundColor: "rgba(22,65,245,0.08)", borderColor: "rgba(22,65,245,0.4)" }}
            whileTap={{ scale: 0.98 }}
            href="/cohort-02"
            className="btn-outline"
            style={{ transition: 'none', padding: '14px 28px', fontSize: '15px', fontWeight: 600, borderColor: 'rgba(22,65,245,0.25)', color: '#1641F5', background: 'transparent' }}
          >
            Apply to Cohort 02 ↗
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-mobile-proof" style={{ opacity: 1, animation: 'none', letterSpacing: '0.12em', fontSize: '0.75rem', fontWeight: 700, color: 'var(--sub)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '32px' }}>
          STRATEGY • TECHNOLOGY • COMMERCIAL SYSTEMS • LONG-TERM ALIGNMENT
        </motion.div>

        {/* Keeping original mobile layout to maintain their mobile experience */}
        <motion.div variants={itemVariants} className="hero-mobile-immersive" style={{ opacity: 1, animation: 'none', width: '100%', maxWidth: '900px' }}>
          <div className="hero-mobile-panel">
            <div className="hero-mobile-panel-top">
              <span>Institutional Involvement</span>
              <strong>Built to scale businesses</strong>
            </div>
            <div className="hero-mobile-highlights">
              {mobileHighlights.map((item) => (
                <div key={item.label} className="hero-mobile-highlight">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="hero-mobile-panel-note">
              Scroll to explore our three commercial modes of engagement.
            </div>
          </div>
          <div className="hero-mobile-story">
            {mobileStoryCards.map((card, index) => (
              <article key={card.step} className={`hero-mobile-story-card reveal d${index + 1}`}>
                <span className="hero-mobile-story-step">Mode {card.step}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-stats"
          style={{ opacity: 1, animation: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', width: '100%', maxWidth: '1080px', marginTop: '20px' }}
        >
          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)", borderColor: "rgba(12,12,11,0.15)" }} style={{ padding: '24px 20px', border: '1px solid rgba(12,12,11,0.08)', borderRadius: '8px', background: 'var(--w2)', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>01 / Advisory</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>Strategy & Growth</div>
            <div style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.5' }}>Commercial architecture, revenue modeling, and operational problem-solving.</div>
          </motion.div>

          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)", borderColor: "rgba(12,12,11,0.15)" }} style={{ padding: '24px 20px', border: '1px solid rgba(12,12,11,0.08)', borderRadius: '8px', background: 'var(--w2)', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>02 / Infrastructure</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>AI & Systems Build</div>
            <div style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.5' }}>Autonomous AI workflows, custom revenue technology, and operational automation.</div>
          </motion.div>

          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)", borderColor: "rgba(12,12,11,0.15)" }} style={{ padding: '24px 20px', border: '1px solid rgba(12,12,11,0.08)', borderRadius: '8px', background: 'var(--w2)', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>03 / Partnerships</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>Operating Alignment</div>
            <div style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.5' }}>Long-term involvement and shared ownership where we materially influence growth.</div>
          </motion.div>

          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)", borderColor: "rgba(12,12,11,0.15)" }} style={{ padding: '24px 20px', border: '1px solid rgba(12,12,11,0.08)', borderRadius: '8px', background: 'var(--w2)', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1641F5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>04 / Cohort 02</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>Selective Selection</div>
            <div style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.5' }}>A structured company-building initiative for founders scaling credible businesses.</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
