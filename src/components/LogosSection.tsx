import React from 'react';

const LogosSection: React.FC = () => {
  const categories = [
    'Medical Clinics', 'Dental Practices', 'Law Firms', 'Accounting Firms', 'Tax Consultants',
    'Insurance Agencies', 'Mortgage Brokers', 'Real Estate Teams', 'Wealth Management Firms',
    'HVAC Services', 'Solar Companies', 'Plumbing Services', 'Home Renovation Firms',
    'Recruitment Agencies', 'B2B Service Firms', 'Managed Service Providers', 'Marketing Agencies',
    'Software Studios', 'Event Management Companies', 'Physical Therapy Centers', 'Veterinary Clinics',
    'Property Managers', 'Construction Companies', 'Roofing Companies', 'Electrical Contractors',
    'Interior Designers', 'Architectural Studios', 'Landscaping Services', 'Pest Control Services',
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
    'Security Companies', 'Facility Management Firms', 'Coworking Spaces', 'Legal Process Outsourcing Firms', 'Translation Agencies',
    'Digital Agencies', 'SaaS Vendors', 'Local Handyman Services', 'Catering Services', 'Speech Therapy Practices',
    'Occupational Therapy Clinics', 'Mental Health Practices', 'Psychiatry Clinics', 'Pediatric Practices', 'Dermatology Clinics',
    'Optometry Clinics', 'Orthodontic Practices', 'Audiology Clinics', 'Podiatry Practices', 'Acupuncture Clinics',
    'Fertility Clinics', 'Osteopath Clinics', 'Massage Therapy Practices', 'Pilates Studios', 'Dance Academies',
    'Martial Arts Schools', 'Gymnastics Centers', 'CrossFit Boxes', 'Swim Schools', 'Tennis Clubs',
    'Golf Academies', 'Personal Styling Services', 'Tailoring Shops', 'Dry Cleaning Services', 'Pet Training Services',
    'Dog Walking Agencies', 'House Sitting Agencies', 'Locksmith Services', 'Appliance Repair Shops', 'Garage Door Services',
    'Window Cleaning Services', 'Gutter Cleaning Services', 'Pressure Washing Services', 'Chimney Sweep Services', 'Fireplace Shops',
    'Flooring Contractors', 'Painting Contractors', 'Drywall Contractors', 'Masonry Contractors', 'Concrete Contractors',
    'Fencing Companies', 'Deck Builders', 'Excavation Companies', 'Demolition Contractors', 'Paving Contractors',
    'Septic Services', 'Water Damage Restoration', 'Mold Remediation Firms', 'Fire Damage Restoration', 'Junk Removal Services',
    'Storage Facilities', 'Car detailing Services', 'Towing Services', 'Windshield Repair Shops', 'Car Rental Agencies',
    'Limo Services', 'Charter Bus Companies', 'Valet Parking Services', 'Parking Lot Management', 'Security Guard Services',
    'Private Investigation Agencies', 'Courier Services', 'Messenger Services', 'Copywriting Agencies', 'Translation Services',
    'Transcription Services', 'Voiceover Studios', 'Illustrator Studios', 'Animator Studios', 'Game Development Studios',
    'UI/UX Design Studios', 'Product Design Firms', 'Patent Law Firms', 'IP Attorneys', 'Family Law Practices',
    'Criminal Defense Firms', 'Personal Injury Lawyers', 'Immigration Law Firms', 'Estate Planning Attorneys', 'Bankruptcy Lawyers',
    'Corporate Law Firms', 'Employment Lawyers', 'Arbitration Services', 'Notary Public Services', 'Bookkeeping Services',
    'Payroll Providers', 'Auditing Firms', 'Financial Planning Practices', 'Business Valuation Advisors', 'Merger Advisory Firms',
    'Outsourced CFO Services', 'Virtual Assistant Agencies', 'Online Business Managers', 'Customer Support Agencies', 'Call Center Services',
    'Answering Services', 'Telemarketing Agencies', 'Lead Gen Agencies', 'SEO Agencies', 'Social Media Agencies',
    'Content Marketing Firms', 'Influencer Marketing Agencies', 'Email Marketing Providers', 'Affiliate Management Agencies', 'Event Planning Firms',
    'Corporate Event Organizers', 'Party Rental Companies', 'AV Rental Providers', 'Stage Design Firms', 'Florist Shops',
    'Bakery Shops', 'Custom Cake Designers', 'Event Catering Firms', 'Food Truck Businesses', 'Meal Prep Services',
    'Nutritionists', 'Dietitians', 'Functional Medicine Clinics', 'Naturophathic Clinics', 'Homeopathic Practices',
    'Life Coaches', 'Executive Coaches', 'Career Counselors', 'Public Speaking Coaches', 'Communication Advisors',
    'PR Consultants', 'Brand Strategists', 'Copywriters', 'Ghostwriters', 'Technical Writers',
    'SEO Content Strategists', 'Videographers', 'Photographers', 'Drone Photo Services', 'Photo Editors',
    'Video Editors', 'Colorists', 'Sound Designers', 'Voice Actors', 'Audio Engineers',
    'Music Producers', 'Mixing Engineers', 'Mastering Engineers', 'Podcast Producers', 'Podcast Editors',
    'SaaS Copywriters', 'Conversion Copywriters', 'Email Copywriters', 'Launch Copywriters', 'B2B Copywriters'
  ];

  const mid = Math.ceil(categories.length / 2);
  const row1 = categories.slice(0, mid);
  const row2 = categories.slice(mid);
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  return (
    <section id="logos" aria-label="Industries Irtiqa works with" className="logos-section-wrap">
      <div className="logos-header" style={{ paddingBottom: '24px' }}>
        <span className="logos-eyebrow">Built for teams like these</span>
        <p className="logos-subheading" style={{ marginTop: '12px', fontSize: '14px', color: 'var(--sub)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6', fontWeight: 300 }}>
          We work best with service-based businesses where revenue depends on speed, follow-up, and operational consistency.
        </p>
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
