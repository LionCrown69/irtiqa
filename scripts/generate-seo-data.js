const fs = require('fs');
const path = require('path');

// 100 High-Value B2B Industries
const industries = [
  // Legal
  { name: 'Corporate Law', title: 'Corporate Law Firms', painPoint: 'missing urgent M&A consultations' },
  { name: 'Immigration Law', title: 'Corporate Immigration Law Firms', painPoint: 'leaking high-value visa applications' },
  { name: 'Family Law', title: 'Family Law Firms', painPoint: 'missing emotional initial consultations' },
  { name: 'Intellectual Property Law', title: 'IP Law Firms', painPoint: 'delayed responses to patent inquiries' },
  { name: 'Personal Injury Law', title: 'Personal Injury Law Firms', painPoint: 'losing high-settlement cases to competitors' },
  { name: 'Real Estate Law', title: 'Real Estate Law Firms', painPoint: 'missing commercial closing inquiries' },
  { name: 'Tax Law', title: 'Tax Law Firms', painPoint: 'losing urgent audit defense cases' },
  { name: 'Employment Law', title: 'Employment Law Firms', painPoint: 'missing corporate defense consultations' },
  { name: 'Criminal Defense', title: 'Criminal Defense Firms', painPoint: 'missing urgent arrest calls' },
  { name: 'Bankruptcy Law', title: 'Bankruptcy Law Firms', painPoint: 'leaking restructuring inquiries' },

  // Healthcare & Medical
  { name: 'Specialized Medical', title: 'High-End Medical Clinics', painPoint: 'leaking premium patient intakes' },
  { name: 'Plastic Surgery', title: 'Plastic Surgery Clinics', painPoint: 'losing high-ticket cosmetic consultations' },
  { name: 'Med Spas', title: 'Medical Spas', painPoint: 'high-ticket leads slipping through the cracks' },
  { name: 'Dentists', title: 'Dental Practices', painPoint: 'missed patient calls and empty chairs' },
  { name: 'Orthodontics', title: 'Orthodontic Clinics', painPoint: 'missing expensive treatment inquiries' },
  { name: 'Chiropractors', title: 'Chiropractic Clinics', painPoint: 'losing new patient bookings' },
  { name: 'Fertility Clinics', title: 'Fertility Clinics', painPoint: 'delayed follow-up on sensitive inquiries' },
  { name: 'Concierge Medicine', title: 'Concierge Medical Practices', painPoint: 'losing high-net-worth patients' },
  { name: 'Veterinarians', title: 'Veterinary Clinics', painPoint: 'missing emergency pet care calls' },
  { name: 'Physical Therapy', title: 'Physical Therapy Clinics', painPoint: 'leaking rehabilitation referrals' },

  // Financial Services
  { name: 'Wealth Management', title: 'Wealth Management Firms', painPoint: 'slow follow-up with HNW individuals' },
  { name: 'Investment Banking', title: 'Investment Banks', painPoint: 'leaking high-net-worth introductions' },
  { name: 'Venture Capital', title: 'Venture Capital Firms', painPoint: 'missing deal flow from hot startups' },
  { name: 'Private Equity', title: 'Private Equity Firms', painPoint: 'delayed response to acquisition targets' },
  { name: 'Accounting', title: 'Accounting Firms', painPoint: 'spending too much time on scheduling instead of billing' },
  { name: 'Tax Preparation', title: 'Tax Preparation Services', painPoint: 'missing busy season appointments' },
  { name: 'Financial Planning', title: 'Financial Planning Firms', painPoint: 'losing retirement consultation leads' },
  { name: 'Insurance Agencies', title: 'Commercial Insurance Agencies', painPoint: 'missing high-premium policy quotes' },
  { name: 'Mortgage Brokerages', title: 'Mortgage Brokerages', painPoint: 'losing urgent pre-approval requests' },
  { name: 'FinTech', title: 'Financial Technology Platforms', painPoint: 'friction in institutional onboarding' },

  // Real Estate & Property
  { name: 'Luxury Real Estate', title: 'Luxury Real Estate Brokerages', painPoint: 'losing multi-million dollar listings' },
  { name: 'Commercial Real Estate', title: 'Commercial Real Estate Agencies', painPoint: 'missing massive leasing opportunities' },
  { name: 'Property Management', title: 'Property Management Companies', painPoint: 'delayed responses to high-end tenants' },
  { name: 'Real Estate Development', title: 'Real Estate Development Firms', painPoint: 'leaking investor inquiries' },
  { name: 'Architecture', title: 'Architecture Firms', painPoint: 'missing commercial design proposals' },
  { name: 'Interior Design', title: 'Luxury Interior Design Studios', painPoint: 'losing high-end residential projects' },
  { name: 'Construction', title: 'Commercial Construction Firms', painPoint: 'missing lucrative bidding opportunities' },
  { name: 'Home Builders', title: 'Custom Home Builders', painPoint: 'leaking multi-million dollar contracts' },
  { name: 'Title Companies', title: 'Title & Escrow Companies', painPoint: 'delayed responses closing delays' },
  { name: 'Appraisal Services', title: 'Real Estate Appraisal Services', painPoint: 'missing urgent commercial appraisals' },

  // Technology & IT
  { name: 'Enterprise SaaS', title: 'Enterprise Software Companies', painPoint: 'high-value demo drop-offs' },
  { name: 'Cybersecurity', title: 'Cybersecurity Firms', painPoint: 'delayed response to security audits' },
  { name: 'Managed IT', title: 'Managed IT Service Providers (MSPs)', painPoint: 'missing critical downtime alerts' },
  { name: 'Custom Software', title: 'Custom Software Development Firms', painPoint: 'losing six-figure project inquiries' },
  { name: 'Cloud Consulting', title: 'Cloud Consulting Firms', painPoint: 'leaking enterprise migration leads' },
  { name: 'Data Analytics', title: 'Data Analytics Agencies', painPoint: 'missing big data consulting requests' },
  { name: 'AI Solutions', title: 'AI Implementation Agencies', painPoint: 'delayed follow-up on automation inquiries' },
  { name: 'Web3 Development', title: 'Blockchain Development Firms', painPoint: 'losing high-budget smart contract projects' },
  { name: 'IT Staffing', title: 'IT Staffing Agencies', painPoint: 'missing top-tier engineering talent' },
  { name: 'Hardware Resellers', title: 'Enterprise Hardware Resellers', painPoint: 'leaking massive procurement orders' },

  // Business Services & Consulting
  { name: 'Management Consulting', title: 'Management Consulting Firms', painPoint: 'missing executive discovery calls' },
  { name: 'B2B Agencies', title: 'B2B Marketing & Dev Agencies', painPoint: 'losing six-figure retainers to slow follow-up' },
  { name: 'PR Agencies', title: 'Public Relations Agencies', painPoint: 'missing crisis management leads' },
  { name: 'Executive Search', title: 'Executive Recruiting Firms', painPoint: 'losing top-tier candidates' },
  { name: 'HR Consulting', title: 'HR Consulting Firms', painPoint: 'missing enterprise compliance audits' },
  { name: 'Logistics', title: '3PL & Logistics Companies', painPoint: 'delayed response to supply chain contracts' },
  { name: 'Event Management', title: 'Corporate Event Management Agencies', painPoint: 'losing massive conference contracts' },
  { name: 'Corporate Training', title: 'Corporate Training Providers', painPoint: 'missing enterprise workshop bookings' },
  { name: 'Franchise Consulting', title: 'Franchise Consulting Firms', painPoint: 'leaking potential franchisee leads' },
  { name: 'Business Coaching', title: 'Executive Business Coaching', painPoint: 'losing high-ticket coaching clients' },

  // Home Services (High Ticket)
  { name: 'HVAC', title: 'Commercial HVAC Businesses', painPoint: 'missing dispatch calls during peak seasons' },
  { name: 'Plumbers', title: 'Commercial Plumbing Services', painPoint: 'losing emergency jobs to competitors' },
  { name: 'Roofing', title: 'Commercial Roofing Companies', painPoint: 'missing massive replacement contracts' },
  { name: 'Solar Installation', title: 'Solar Installation Companies', painPoint: 'leaking high-value residential leads' },
  { name: 'Landscaping', title: 'Commercial Landscaping Firms', painPoint: 'missing massive HOA contracts' },
  { name: 'Pool Construction', title: 'Custom Pool Builders', painPoint: 'losing six-figure backyard projects' },
  { name: 'Foundation Repair', title: 'Foundation Repair Services', painPoint: 'missing urgent structural assessments' },
  { name: 'Remodeling', title: 'High-End Remodeling Contractors', painPoint: 'leaking luxury renovation inquiries' },
  { name: 'Pest Control', title: 'Commercial Pest Control Services', painPoint: 'missing restaurant and warehouse contracts' },
  { name: 'Security Systems', title: 'Commercial Security Installers', painPoint: 'delayed response to enterprise security needs' },

  // Specialized & Niche
  { name: 'Private Aviation', title: 'Private Jet Charters', painPoint: 'losing urgent flight bookings' },
  { name: 'Yacht Brokers', title: 'Luxury Yacht Brokers', painPoint: 'missing multi-million dollar inquiries' },
  { name: 'Fine Art', title: 'Fine Art Galleries & Appraisers', painPoint: 'leaking high-net-worth collector leads' },
  { name: 'Auto Dealerships', title: 'Luxury Auto Dealerships', painPoint: 'losing high-end vehicle test drives' },
  { name: 'Marine Services', title: 'Commercial Marine Services', painPoint: 'missing massive shipping contracts' },
  { name: 'Aviation Maintenance', title: 'Aviation Maintenance Facilities', painPoint: 'delayed responses for critical repairs' },
  { name: 'Environmental Consulting', title: 'Environmental Consulting Firms', painPoint: 'missing major site assessment contracts' },
  { name: 'Manufacturing', title: 'Custom Manufacturing Facilities', painPoint: 'leaking massive production orders' },
  { name: 'Engineering', title: 'Civil Engineering Firms', painPoint: 'missing infrastructure project bids' },
  { name: 'Acoustic Consulting', title: 'Acoustic Engineering Firms', painPoint: 'losing commercial soundproofing contracts' },

  // Personal Services (High Ticket)
  { name: 'Salons', title: 'High-End Hair & Beauty Salons', painPoint: 'double bookings and no-shows' },
  { name: 'Personal Trainers', title: 'Elite Personal Training Studios', painPoint: 'missing high-ticket client onboarding' },
  { name: 'Matchmaking', title: 'Executive Matchmaking Services', painPoint: 'delayed response to exclusive clientele' },
  { name: 'Private Tutors', title: 'Elite Private Tutoring Services', painPoint: 'losing wealthy family contracts' },
  { name: 'Security Details', title: 'Executive Protection Agencies', painPoint: 'missing urgent VIP security requests' },
  { name: 'Private Chefs', title: 'Private Chef Placement Agencies', painPoint: 'leaking high-net-worth household leads' },
  { name: 'Nannies', title: 'Elite Nanny Agencies', painPoint: 'missing desperate family placement requests' },
  { name: 'Interior Decorators', title: 'Luxury Interior Decorators', painPoint: 'losing premium residential projects' },
  { name: 'Event Planners', title: 'Luxury Wedding & Event Planners', painPoint: 'missing six-figure event inquiries' },
  { name: 'Life Coaching', title: 'Premium Life Coaching Services', painPoint: 'leaking high-ticket mastermind applications' }
].map(ind => ({ ...ind, slug: ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }));

// 100 Top Global Cities (US, UK, EU, Aus, Can, UAE)
const citiesRaw = [
  // USA (60)
  ['New York', 'NY', 'USA'], ['Los Angeles', 'CA', 'USA'], ['Chicago', 'IL', 'USA'], ['Houston', 'TX', 'USA'], ['Phoenix', 'AZ', 'USA'],
  ['Philadelphia', 'PA', 'USA'], ['San Antonio', 'TX', 'USA'], ['San Diego', 'CA', 'USA'], ['Dallas', 'TX', 'USA'], ['Austin', 'TX', 'USA'],
  ['San Jose', 'CA', 'USA'], ['Fort Worth', 'TX', 'USA'], ['Jacksonville', 'FL', 'USA'], ['Columbus', 'OH', 'USA'], ['Charlotte', 'NC', 'USA'],
  ['Indianapolis', 'IN', 'USA'], ['San Francisco', 'CA', 'USA'], ['Seattle', 'WA', 'USA'], ['Denver', 'CO', 'USA'], ['Washington', 'DC', 'USA'],
  ['Boston', 'MA', 'USA'], ['El Paso', 'TX', 'USA'], ['Nashville', 'TN', 'USA'], ['Detroit', 'MI', 'USA'], ['Portland', 'OR', 'USA'],
  ['Las Vegas', 'NV', 'USA'], ['Memphis', 'TN', 'USA'], ['Louisville', 'KY', 'USA'], ['Baltimore', 'MD', 'USA'], ['Milwaukee', 'WI', 'USA'],
  ['Albuquerque', 'NM', 'USA'], ['Tucson', 'AZ', 'USA'], ['Fresno', 'CA', 'USA'], ['Sacramento', 'CA', 'USA'], ['Mesa', 'AZ', 'USA'],
  ['Kansas City', 'MO', 'USA'], ['Atlanta', 'GA', 'USA'], ['Colorado Springs', 'CO', 'USA'], ['Omaha', 'NE', 'USA'], ['Raleigh', 'NC', 'USA'],
  ['Miami', 'FL', 'USA'], ['Virginia Beach', 'VA', 'USA'], ['Oakland', 'CA', 'USA'], ['Minneapolis', 'MN', 'USA'], ['Tulsa', 'OK', 'USA'],
  ['Arlington', 'TX', 'USA'], ['Bakersfield', 'CA', 'USA'], ['Tampa', 'FL', 'USA'], ['Aurora', 'CO', 'USA'], ['Honolulu', 'HI', 'USA'],
  ['Anaheim', 'CA', 'USA'], ['Santa Ana', 'CA', 'USA'], ['Corpus Christi', 'TX', 'USA'], ['Riverside', 'CA', 'USA'], ['Lexington', 'KY', 'USA'],
  ['St. Louis', 'MO', 'USA'], ['Stockton', 'CA', 'USA'], ['Pittsburgh', 'PA', 'USA'], ['Saint Paul', 'MN', 'USA'], ['Cincinnati', 'OH', 'USA'],

  // UK (15)
  ['London', 'ENG', 'UK'], ['Manchester', 'ENG', 'UK'], ['Birmingham', 'ENG', 'UK'], ['Leeds', 'ENG', 'UK'], ['Glasgow', 'SCT', 'UK'],
  ['Southampton', 'ENG', 'UK'], ['Liverpool', 'ENG', 'UK'], ['Newcastle', 'ENG', 'UK'], ['Nottingham', 'ENG', 'UK'], ['Sheffield', 'ENG', 'UK'],
  ['Bristol', 'ENG', 'UK'], ['Belfast', 'NIR', 'UK'], ['Edinburgh', 'SCT', 'UK'], ['Leicester', 'ENG', 'UK'], ['Cardiff', 'WAL', 'UK'],

  // Canada (7)
  ['Toronto', 'ON', 'Canada'], ['Montreal', 'QC', 'Canada'], ['Vancouver', 'BC', 'Canada'], ['Calgary', 'AB', 'Canada'],
  ['Edmonton', 'AB', 'Canada'], ['Ottawa', 'ON', 'Canada'], ['Winnipeg', 'MB', 'Canada'],

  // Australia (5)
  ['Sydney', 'NSW', 'Australia'], ['Melbourne', 'VIC', 'Australia'], ['Brisbane', 'QLD', 'Australia'], ['Perth', 'WA', 'Australia'], ['Adelaide', 'SA', 'Australia'],

  // Europe & Global Hubs (13)
  ['Paris', 'IDF', 'France'], ['Berlin', 'BE', 'Germany'], ['Madrid', 'MD', 'Spain'], ['Rome', 'LAZ', 'Italy'],
  ['Amsterdam', 'NH', 'Netherlands'], ['Dublin', 'L', 'Ireland'], ['Zurich', 'ZH', 'Switzerland'], ['Geneva', 'GE', 'Switzerland'],
  ['Frankfurt', 'HE', 'Germany'], ['Munich', 'BY', 'Germany'], ['Stockholm', 'AB', 'Sweden'], ['Dubai', 'DU', 'UAE'], ['Singapore', 'SG', 'Singapore']
];

const locations = citiesRaw.map(([name, state, country]) => ({
  name,
  state,
  country,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}));

const data = {
  industries,
  locations
};

// Ensure data dir exists
const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(path.join(dataDir, 'seo-dataset.json'), JSON.stringify(data, null, 2));

console.log(`Generated exactly ${industries.length} industries and ${locations.length} cities.`);
console.log(`Total Combinations: ${industries.length * locations.length}`);
