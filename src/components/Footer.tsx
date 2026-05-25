import React, { useState } from 'react';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    
    // Simulate database/API registration
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setEmail('');
    }, 1200);
  };

  const platformLinks = [
    { label: 'Infrastructure', href: '/#services' },
    { label: 'Results', href: '/#results' },
    { label: 'How It Works', href: '/#process' },
    { label: 'Audit Call', href: '/audit' }
  ];

  const companyLinks = [
    { label: 'Why Irtiqa', href: '/#why' },
    { label: 'Founder', href: '/founder' },
    { label: 'Insights (Blog)', href: '/blog' },
    { label: 'Contact', href: '/#book' }
  ];

  const marketLinks = [
    { label: 'Agencies & Consultants', href: '#problem' },
    { label: 'Healthcare & Clinics', href: '#testimonials' },
    { label: 'Law & Finance Firms', href: '#results' },
    { label: 'Local Service Business', href: '#services' },
  ];

  const contactInfo = [
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      text: 'hello@irtiqaaiagency.com',
      href: 'mailto:hello@irtiqaaiagency.com',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      text: 'connect@irtiqaaiagency.com',
      href: 'mailto:connect@irtiqaaiagency.com',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12 19.79 19.79 0 0 1 1.13 3.4a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.15 1.07.435 2.12.83 3.13a2 2 0 0 1-.45 2.11L7 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c1.01.395 2.06.68 3.13.83A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      text: 'Book a Discovery Call',
      href: '#book',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/irtiqaai/',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      text: 'Instagram',
      href: 'https://www.instagram.com/irtiqaai/',
    },
  ];

  return (
    <footer className="irtiqa-footer">
      <div className="irtiqa-footer-inner">
        
        {/* Footer Top Grid */}
        <div className="irtiqa-footer-grid">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="irtiqa-footer-brand-col">
            <div className="irtiqa-footer-logo">
              <BrandLogo size="sm" showWordmark={true} showArabic={true} lightText={false} />
            </div>
            <p className="irtiqa-footer-tagline">
              We design, build, and operate revenue operations infrastructure and agentic AI systems that stop silent revenue leakage.
            </p>
            
            {/* Newsletter form */}
            <div className="irtiqa-footer-newsletter">
              <h4 className="irtiqa-newsletter-title">Subscribe to Insights</h4>
              <p className="irtiqa-newsletter-sub">Weekly frameworks on automation and revenue infrastructure.</p>
              
              {submitted ? (
                <div className="irtiqa-newsletter-success">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Thank you! You are now subscribed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="irtiqa-newsletter-form">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitting}
                    className="irtiqa-newsletter-input"
                  />
                  <button type="submit" disabled={submitting} className="irtiqa-newsletter-btn">
                    {submitting ? '...' : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="irtiqa-footer-nav-col">
            <h4 className="irtiqa-footer-col-title">Platform</h4>
            <ul className="irtiqa-footer-links">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="irtiqa-footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="irtiqa-footer-nav-col">
            <h4 className="irtiqa-footer-col-title">Company</h4>
            <ul className="irtiqa-footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="irtiqa-footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="irtiqa-footer-nav-col irtiqa-footer-contact-col">
            <h4 className="irtiqa-footer-col-title">Connect</h4>
            <ul className="irtiqa-footer-contact-list">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="irtiqa-footer-contact-link"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    <span className="irtiqa-footer-contact-icon">{info.icon}</span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="irtiqa-footer-bottom">
          <div className="irtiqa-footer-bottom-info">
            <span className="irtiqa-footer-copy">© {year} Irtiqa AI. All rights reserved.</span>
            <span className="irtiqa-footer-slogan">Operational intelligence for service businesses.</span>
          </div>
          
          <a href="/audit" className="irtiqa-footer-audit-cta">
            Book Free Audit Call
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Styled block containing responsive overrides and theme-adaptive variables */}
      <style>{`
        .irtiqa-footer {
          background-color: var(--w2);
          color: var(--ink);
          border-top: 1px solid var(--rule);
          padding: 80px 24px 48px;
          font-family: var(--ui);
          position: relative;
          z-index: 10;
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .irtiqa-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .irtiqa-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 64px;
        }
        .irtiqa-footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .irtiqa-footer-logo {
          opacity: 0.95;
        }
        .irtiqa-footer-tagline {
          font-size: 14px;
          line-height: 1.6;
          color: var(--sub);
          max-width: 320px;
        }
        
        /* Newsletter */
        .irtiqa-footer-newsletter {
          margin-top: 16px;
          max-width: 320px;
        }
        .irtiqa-newsletter-title {
          font-size: 12.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .irtiqa-newsletter-sub {
          font-size: 12px;
          color: var(--sub);
          margin-bottom: 12px;
        }
        .irtiqa-newsletter-form {
          display: flex;
          position: relative;
          width: 100%;
        }
        .irtiqa-newsletter-input {
          background-color: var(--w);
          color: var(--ink);
          border: 1px solid var(--rule);
          padding: 12px 48px 12px 16px;
          border-radius: 8px;
          font-size: 13.5px;
          font-family: var(--ui);
          width: 100%;
          outline: none;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .irtiqa-newsletter-input:focus {
          border-color: var(--b);
        }
        .irtiqa-newsletter-btn {
          position: absolute;
          right: 4px;
          top: 4px;
          bottom: 4px;
          background-color: var(--b);
          color: #ffffff;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          alignItems: center;
          justifyContent: center;
          transition: opacity 0.2s ease;
        }
        .irtiqa-newsletter-btn:hover {
          opacity: 0.9;
        }
        .irtiqa-newsletter-success {
          font-size: 13px;
          color: var(--b);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background-color: var(--b-lo);
          border: 1px solid rgba(22, 65, 245, 0.2);
          border-radius: 6px;
        }

        /* Nav links */
        .irtiqa-footer-col-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--ink);
          margin-bottom: 24px;
        }
        .irtiqa-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .irtiqa-footer-link {
          font-size: 13.5px;
          color: var(--sub);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .irtiqa-footer-link:hover {
          color: var(--b);
        }

        /* Contact Col */
        .irtiqa-footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .irtiqa-footer-contact-link {
          font-size: 13.5px;
          color: var(--sub);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s ease;
        }
        .irtiqa-footer-contact-link:hover {
          color: var(--b);
        }
        .irtiqa-footer-contact-icon {
          display: flex;
          align-items: center;
          opacity: 0.7;
          color: var(--ink);
        }

        /* Bottom Bar */
        .irtiqa-footer-bottom {
          border-top: 1px solid var(--rule);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .irtiqa-footer-bottom-info {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .irtiqa-footer-copy {
          font-size: 13px;
          color: var(--sub);
        }
        .irtiqa-footer-slogan {
          font-size: 13px;
          color: var(--sub);
          opacity: 0.7;
        }
        .irtiqa-footer-audit-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--b);
          text-decoration: none;
          border-bottom: 1.5px solid rgba(22, 65, 245, 0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s ease;
        }
        .irtiqa-footer-audit-cta:hover {
          border-color: var(--b);
        }

        @media (max-width: 900px) {
          .irtiqa-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .irtiqa-footer-brand-col {
            grid-column: span 2;
            max-width: 100%;
          }
          .irtiqa-footer-newsletter {
            max-width: 100%;
          }
        }

        @media (max-width: 500px) {
          .irtiqa-footer {
            padding: 60px 16px 36px;
          }
          .irtiqa-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .irtiqa-footer-brand-col {
            grid-column: span 1;
          }
          .irtiqa-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .irtiqa-footer-bottom-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
