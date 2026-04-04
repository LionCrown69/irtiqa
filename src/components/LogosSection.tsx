import React from 'react';

const LogosSection: React.FC = () => {
  const categories = [
    'Medical Clinics', 'Dental Practices', 'Law Firms', 'Accounting Firms', 'Tax Consultants',
    'Insurance Agencies', 'Mortgage Brokers', 'Real Estate Teams', 'Property Managers', 'Construction Companies',
    'Solar Companies', 'Roofing Companies', 'HVAC Services', 'Plumbing Services', 'Electrical Contractors',
    'Home Renovation Firms', 'Interior Designers', 'Architectural Studios', 'Landscaping Services', 'Pest Control Services',
    'Cleaning Services', 'Moving Companies', 'Logistics Providers', 'Freight Brokers', 'Auto Repair Shops',
    'Car Dealerships', 'Tire Centers', 'Bike Shops', 'Gyms', 'Yoga Studios',
    'Personal Trainers', 'Physiotherapy Centers', 'Chiropractic Clinics', 'Wellness Centers', 'Nutrition Coaches',
    'Beauty Salons', 'Barbershops', 'Skincare Clinics', 'Spa Centers', 'Cosmetic Clinics',
    'Recruitment Firms', 'HR Agencies', 'Staffing Agencies', 'Executive Search Firms', 'Career Coaching Services',
    'Marketing Agencies', 'Creative Studios', 'Branding Agencies', 'PR Agencies', 'Media Buying Agencies',
    'Web Design Agencies', 'Software Agencies', 'App Development Firms', 'IT Service Providers', 'Managed Service Providers',
    'Cybersecurity Firms', 'Cloud Consulting Firms', 'Data Analytics Firms', 'AI Consulting Firms', 'Automation Agencies',
    'Business Consultants', 'Management Consultants', 'Operations Consultants', 'Sales Consulting Firms', 'Revenue Operations Firms',
    'B2B Service Firms', 'SaaS Startups', 'Ecommerce Brands', 'D2C Brands', 'Retail Chains',
    'Franchise Businesses', 'Hospitality Groups', 'Hotels', 'Travel Agencies', 'Event Management Companies',
    'Wedding Planners', 'Photography Studios', 'Videography Studios', 'Content Production Houses', 'Podcast Studios',
    'Education Institutes', 'Coaching Centers', 'Online Academies', 'Tutoring Services', 'Training Companies',
    'Language Schools', 'Music Schools', 'Sports Academies', 'Nonprofit Organizations', 'Community Foundations',
    'Financial Advisors', 'Wealth Advisors', 'Investment Firms', 'Venture Studios', 'Private Equity Firms',
    'Import Export Companies', 'Manufacturing Units', 'Packaging Companies', 'Food Processing Companies', 'Farm Services',
    'Veterinary Clinics', 'Pet Grooming Services', 'Pet Boarding Services', 'Childcare Centers', 'Elder Care Services',
    'Security Companies', 'Facility Management Firms', 'Coworking Spaces', 'Legal Process Outsourcing Firms', 'Translation Agencies'
  ];

  const mid = Math.ceil(categories.length / 2);
  const row1 = categories.slice(0, mid);
  const row2 = categories.slice(mid);
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  return (
    <section id="logos" aria-label="Industries Irtiqa works with" className="logos-section-wrap">
      <div className="logos-header">
        <span className="logos-eyebrow">Built for teams like these</span>
      </div>

      <div className="logos-marquee-container">
        <div className="logos-row" aria-hidden="false">
          <div className="logos-rail logos-rail-fwd">
            {row1Items.map((item, i) => (
              <span key={`r1-${i}`} className="logo-item-text">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="logos-row" aria-hidden="true">
          <div className="logos-rail logos-rail-rev">
            {row2Items.map((item, i) => (
              <span key={`r2-${i}`} className="logo-item-text">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
