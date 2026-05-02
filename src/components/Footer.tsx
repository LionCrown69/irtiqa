import React from 'react';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const platformLinks = [
    { label: 'Infrastructure', href: '/#services' },
    { label: 'Results', href: '/#results' },
    { label: 'How It Works', href: '/#process' },
    { label: 'Enterprise Audit', href: '/audit' }
  ];

  const companyLinks = [
    { label: 'Why Irtiqa', href: '/#why' },
    { label: 'Client Results', href: '/#testimonials' },
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
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      text: 'hello@irtiqaaiagency.com',
      href: 'mailto:hello@irtiqaaiagency.com',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      text: 'connect@irtiqaaiagency.com',
      href: 'mailto:connect@irtiqaaiagency.com',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12 19.79 19.79 0 0 1 1.13 3.4a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.15 1.07.435 2.12.83 3.13a2 2 0 0 1-.45 2.11L7 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c1.01.395 2.06.68 3.13.83A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      text: 'Book a Discovery Call',
      href: '#book',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/irtiqaai/',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      text: 'Instagram',
      href: 'https://www.instagram.com/irtiqaai/',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      text: 'Remote-first · Worldwide',
      href: '#',
    },
  ];

  return (
    <footer className="footer-new">
      <div className="footer-new-inner">

        {/* Top grid */}
        <div className="footer-new-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <BrandLogo size="sm" showWordmark={true} showArabic={true} lightText={true} />
            </div>
            <p className="footer-tagline">
              Clear operational systems that help service businesses respond faster, convert more leads, and scale without adding headcount.
            </p>
            <div className="footer-contact-list">
              {contactInfo.map(({ icon, text, href }) => (
                <a key={text} href={href} className="footer-contact-item" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="footer-contact-icon">{icon}</span>
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="footer-nav-col">
            <div className="footer-col-title">Platform</div>
            <ul className="footer-links">
              {platformLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-nav-col">
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              {companyLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div className="footer-nav-col">
            <div className="footer-col-title">Markets</div>
            <ul className="footer-links">
              {marketLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-new-bottom">
          <span className="footer-copy">© {year} Irtiqa AI Agency. All rights reserved.</span>
          <span className="footer-slogan">Operational intelligence for service businesses that need to grow without adding friction.</span>
          <a
            href="/audit"
            className="footer-bottom-cta"
          >
            Book Free Audit
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
