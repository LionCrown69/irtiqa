import React from 'react';
import { TestimonialsColumn, type TestimonialsColumnItem } from './ui/testimonials-columns-1';

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialsColumnItem[] = [
    {
      text: 'What surprised me most was how much thinking went into understanding our business before anything was built. The audit alone changed how I understood where we were losing revenue. The systems came after — and they work — but the clarity from the process was the real value.',
      name: 'Marcus K.',
      role: 'Founder, Enterprise Advisory Group'
    },
    {
      text: 'Before Irtiqa, replies sat for hours and we leaked high-intent leads daily. After launch, first-response speed and appointment quality improved in the same month.',
      name: 'Ayaan K.',
      role: 'Founder, Growth Advisory'
    },
    {
      text: 'What changed most was consistency. Every lead now gets the same clean journey from inquiry to booking without depending on team memory.',
      name: 'Nour A.',
      role: 'Operations Director, Real Estate Group'
    },
    {
      text: 'We stopped buying more traffic to fix a follow-up problem. Irtiqa fixed the pipeline first, and revenue per lead started moving upward.',
      name: 'Tariq M.',
      role: 'Managing Partner, B2B Consultancy'
    },
    {
      text: 'Our front desk used to chase confirmations manually. Now reminders and reactivation run in the background, and no-shows are no longer a weekly fire drill.',
      name: 'Laila N.',
      role: 'Clinic Director, Multi-Specialty Practice'
    },
    {
      text: 'The handoff between inbox, CRM, and calendar used to break every day. Irtiqa connected the stack so the team can focus on actual client work.',
      name: 'Daniel T.',
      role: 'COO, Premium Service Brand'
    },
    {
      text: 'We finally have visibility across every stage. It is clear where leads are, what triggered, and where money would have leaked before.',
      name: 'Amna S.',
      role: 'Operations Lead, Advisory Firm'
    },
    {
      text: 'Most vendors sold automation tasks. Irtiqa designed operating logic around revenue goals, which is why outcomes felt different from week one.',
      name: 'Hassan T.',
      role: 'Managing Director, Growth Studio'
    },
    {
      text: 'Our team no longer waits for someone to remember the next step. The system drives follow-through automatically and bookings stay stable.',
      name: 'Nadia R.',
      role: 'Client Success Director, Private Clinic Group'
    },
    {
      text: 'We expected better admin efficiency. We got that plus stronger conversion flow, cleaner attribution, and better calendar utilization.',
      name: 'Faris M.',
      role: 'Founder, Service Business Portfolio'
    },
    {
      text: 'The biggest win is confidence. We can scale lead volume now without fearing operational breakdown in qualification and follow-up.',
      name: 'Samar R.',
      role: 'Head of Revenue Operations'
    },
    {
      text: 'Instead of adding more coordinators, we fixed process sequencing and message timing. That single change improved close quality noticeably.',
      name: 'Imran H.',
      role: 'Director, Appointment Team'
    },
    {
      text: 'It feels like moving from a manual office to a productized operation. Fewer misses, faster action, and clearer reporting.',
      name: 'Yusra F.',
      role: 'COO, Multi-Location Services'
    }
  ];

  const firstColumn = testimonials.slice(0, 4);
  const secondColumn = testimonials.slice(4, 8);
  const thirdColumn = testimonials.slice(8, 12);

  return (
    <section id="testimonials">
      <div className="testi-header testi-columns-header reveal">
        <div className="section-chip" style={{ justifyContent: 'center', display: 'flex' }}>Client Results</div>
        <h2 className="testi-title">What operators <em>actually say.</em></h2>
        <p className="testi-columns-sub">
          Real feedback from teams that replaced manual follow-up with systemized operations.
        </p>
      </div>

      <div className="testi-columns-wrap reveal d1" aria-label="Client testimonials rolling cards">
        <div className="testi-columns-mask">
          <TestimonialsColumn testimonials={firstColumn} duration={58} />
          <TestimonialsColumn testimonials={secondColumn} className="testi-columns-mid" duration={64} reverse />
          <TestimonialsColumn testimonials={thirdColumn} className="testi-columns-last" duration={70} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
