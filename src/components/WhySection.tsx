import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section id="why">
      <div className="why-layout">
        <div>
          <div className="section-chip reveal">Why Irtiqa</div>
          <h2 className="why-title reveal d1">A partner. Not a <em>product.</em></h2>
          
          <p className="why-desc reveal d2 desktop-only">
            Most businesses that struggle with revenue leakage do not have a tool problem. They have a clarity problem — nobody has sat down with them and mapped exactly where the money is going.
          </p>
          <p className="why-desc reveal d2 mobile-only">
            Clarity first, tools second. We map exactly where your money is going before we build anything.
          </p>
          
          <div className="why-slogan reveal d3">
            That is what Irtiqa does first. Before we build anything, we audit. Before we recommend anything, we understand your specific situation.
          </div>
          
          <a href="#book" className="btn-fill reveal d4" style={{ width: 'fit-content', marginTop: '28px' }}>
            Book Free Audit Call
          </a>
        </div>

        <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Card 1 */}
          <div className="rebrand-card">
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '10px' }}>Custom Infrastructure</h3>
            <p style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.7' }}>Everything we build is specific to you. We do not install generic systems. We design infrastructure around how your business actually works, your clients, your team, and your commercial goals.</p>
          </div>
          
          {/* Card 2 */}
          <div className="rebrand-card">
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '10px' }}>A Partner Who Stays</h3>
            <p style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.7' }}>We know you have probably seen this before — tools that get built, handed over, and stop working the moment something changes. That is not what we do. We stay. We maintain. We are invested in the result because our model only works if yours does.</p>
          </div>

          {/* Card 3 (Case Study) */}
          <div className="rebrand-card rebrand-card-accent">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--b)', background: 'rgba(22,65,245,0.08)', padding: '2px 8px', borderRadius: '4px' }}>CASE STUDY</span>
            </div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '10px' }}>Missed Lead Recovery</h3>
            <p style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.7' }}>We partnered with a clinic leaking €11,000/mo through missed after-hours inquiries. Designed autonomous callback routing & follow-up recovery. Recovered <strong>€8,500 in booking value</strong> in the first 30 days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
