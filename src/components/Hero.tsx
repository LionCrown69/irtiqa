import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, animate, Variants } from 'framer-motion';

const Counter = ({ from, to, delay, animateValue = true }: { from: number; to: number; delay: number; animateValue?: boolean }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!animateValue) {
      if (nodeRef.current) {
        nodeRef.current.textContent = to.toString();
      }
      return;
    }

    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration: 2.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // ease out cubic
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [from, to, delay, animateValue]);

  return <span className="count-h" ref={nodeRef}>{from}</span>;
};

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
    { label: 'Reply speed', value: '< 5 min' },
    { label: 'Coverage', value: '24/7' },
    { label: 'Delivery path', value: 'Audit to Build' }
  ] as const;

  const mobileStoryCards = [
    {
      step: '01',
      title: 'A lead lands on the page',
      body: 'Leads are captured, qualified, and routed instantly.'
    },
    {
      step: '02',
      title: 'Momentum keeps moving',
      body: 'Follow-up and reminders keep intent active.'
    },
    {
      step: '03',
      title: 'The discovery call gets booked',
      body: 'Qualified prospects book without manual chasing.'
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
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>

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


        <motion.div variants={itemVariants} className="hero-eyebrow" style={{ opacity: 1, animation: 'none', marginBottom: '32px' }}>
          <motion.span
            className="hero-eyebrow-dot"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              boxShadow: '0 0 0 3px rgba(22,65,245,0.15)',
            }}
          />
          Built for {industry ? `${industry.title} operations in ${location?.name || 'your region'}` : 'Mid-Market and Enterprise Organizations'}
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-h1" style={{ opacity: 1, animation: 'none' }}>
          {industry || location ? (
            <>
              <span className="hero-h1-line hero-h1-line-main">
                {industry ? `Autonomous ${industry.name} Infrastructure` : 'Deploying Autonomous Revenue'}
              </span>
              <em className="hero-h1-accent">
                {location ? `in ${location.name}.` : 'Infrastructure.'}
              </em>
              <span className="hero-h1-line hero-h1-line-main h1-muted-compact">
                Engineered for Scale.
              </span>
            </>
          ) : (
            <>
              <span className="hero-h1-line hero-h1-line-main">Deploying Autonomous Revenue</span>
              <em className="hero-h1-accent">Infrastructure.</em>
              <span className="hero-h1-line hero-h1-line-main h1-muted-compact">Engineered for Scale.</span>
            </>
          )}
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-sub desktop-only" style={{ opacity: 1, animation: 'none' }}>
          <strong>We engineer, integrate, and manage autonomous operational systems.</strong><br/>
          We deploy custom AI architectures that maximize pipeline velocity, ensure SLA compliance, and reduce manual overhead across your organization. {industry ? `Optimizing ${industry.name}.` : ''}
        </motion.p>

        <motion.p variants={itemVariants} className="hero-sub mobile-only" style={{ opacity: 1, animation: 'none' }}>
          <strong>We engineer, integrate, and manage autonomous operational systems.</strong><br/>
          We deploy custom AI architectures to maximize pipeline velocity and reduce manual overhead.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-ctas" style={{ opacity: 1, animation: 'none' }}>
          <motion.a
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 14px 48px rgba(22,65,245,0.35)" }}
            whileTap={{ scale: 0.98 }}
            href="#book"
            className="btn-fill primary-cta"
            style={{ transition: 'none' }} // Disabled CSS transition to favor framer
          >
            Book Free Audit Call
            <motion.svg
              whileHover={{ x: 4 }}
              width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </motion.svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, backgroundColor: "var(--w2)", borderColor: "rgba(12,12,11,0.2)", color: "var(--ink)" }}
            whileTap={{ scale: 0.98 }}
            href="#process"
            className="btn-outline"
            style={{ transition: 'none' }}
          >
            See How It Works
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, borderColor: "var(--b)", color: "var(--b)" }}
            whileTap={{ scale: 0.98 }}
            href="/program"
            className="btn-outline"
            style={{ transition: 'none' }}
          >
            Revenue Partners Programme
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-mobile-proof" style={{ opacity: 1, animation: 'none' }}>
          37% faster response | 42% less admin | 28% more bookings
        </motion.div>

        {/* Keeping original mobile layout to maintain their mobile experience */}
        <motion.div variants={itemVariants} className="hero-mobile-immersive" style={{ opacity: 1, animation: 'none' }}>
          <div className="hero-mobile-panel">
            <div className="hero-mobile-panel-top">
              <span>Mobile booking flow</span>
              <strong>Built to guide the reader</strong>
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
              Scroll to see how intent turns into booked calls.
            </div>
          </div>
          <div className="hero-mobile-story">
            {mobileStoryCards.map((card, index) => (
              <article key={card.step} className={`hero-mobile-story-card reveal d${index + 1}`}>
                <span className="hero-mobile-story-step">Step {card.step}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-stats"
          style={{ opacity: 1, animation: 'none' }}
        >
          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)" }}>
            <div className="hstat-val">
              <Counter from={30} to={37} delay={0.6} animateValue={!isMobile} />
              <span className="hstat-unit">%</span>
            </div>
            <div className="hstat-label">Faster Lead Response</div>
          </motion.div>
          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)" }}>
            <div className="hstat-val">
              <Counter from={35} to={42} delay={0.78} animateValue={!isMobile} />
              <span className="hstat-unit">%</span>
            </div>
            <div className="hstat-label">Less Manual Admin</div>
          </motion.div>
          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)" }}>
            <div className="hstat-val">
              <Counter from={22} to={28} delay={0.96} animateValue={!isMobile} />
              <span className="hstat-unit">%</span>
            </div>
            <div className="hstat-label">More Conversions</div>
          </motion.div>
          <motion.div className="hstat" whileHover={{ backgroundColor: "var(--w3)" }}>
            <div className="hstat-val" style={{ fontSize: '28px', letterSpacing: '-.01em' }}>24/7</div>
            <div className="hstat-label">Operational Coverage</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

