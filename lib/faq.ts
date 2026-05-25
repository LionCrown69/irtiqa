export interface FAQItem {
  question: string;
  answer: string;
}

const faqsByCategory: Record<string, FAQItem[]> = {
  'Revenue Leakage': [
    {
      question: 'What is silent revenue leakage?',
      answer: 'Silent revenue leakage is the uncaptured revenue lost through operational inefficiencies, such as slow response times to leads, broken follow-up sequences, manual admin overhead, and unoptimized customer retention systems.'
    },
    {
      question: 'How do you detect revenue leakage in a service business?',
      answer: 'You can detect leakage by performing a complete audit of your lead-to-client pipeline. Measure lead response times, trace where leads drop out of the sales funnel, track manual administrative hours, and calculate customer churn rates.'
    },
    {
      question: 'What is the fastest way to stop revenue leakage?',
      answer: 'The fastest way is to automate lead capture and follow-up. Replacing manual response steps with autonomous AI receptionist and booking infrastructure ensures that leads are engaged in under 5 minutes, 24/7.'
    }
  ],
  'AI Infrastructure': [
    {
      question: 'What is AI infrastructure for businesses?',
      answer: 'AI infrastructure refers to the set of automated tools, integrations, APIs, and database connectors that enable AI agents to perform complex, end-to-end business workflows like intake, CRM updates, and scheduling without human friction.'
    },
    {
      question: 'How does AI scaling differ from hiring human operators?',
      answer: 'AI infrastructure operates 24/7, responds to inquiries in under 5 minutes, handles unlimited concurrent calls and emails, and maintains 100% data entry consistency, all at a fraction of the cost of scaling human staff.'
    },
    {
      question: 'What platforms are best for business automation?',
      answer: 'For service businesses, platforms like Make (formerly Integromat) and self-hosted n8n offer the best balance of visual scenario building, complex conditional logic, and cost-effective execution at volume compared to Zapier.'
    }
  ],
  'Booking Systems': [
    {
      question: 'Why is a standard Calendly link not enough for high-ticket sales?',
      answer: 'Standard booking links introduce cognitive friction. High-ticket sales require smart qualification filters, automated routing to the right salesperson, and automated reminder sequences to maximize show-up rates.'
    },
    {
      question: 'How do you increase booking show-up rates?',
      answer: 'Show-up rates are maximized by deploying multi-channel reminder sequences (email and SMS) that contain personalized prep materials, a clear agenda, and direct calendar invite syncs.'
    }
  ],
  'CRM & Follow-Up': [
    {
      question: 'Why do most CRM implementations fail?',
      answer: 'Most implementations fail because they rely on manual entry by salespeople. Successful CRMs require autonomous pipeline updates, automated reminders, and database syncs that run in the background.'
    },
    {
      question: 'What is the optimal follow-up frequency for B2B leads?',
      answer: 'Research shows it takes 5 to 8 touchpoints to secure a response. An optimal B2B sequence spans 14 days, utilizing email, SMS, and LinkedIn outreach with varying content value to build trust.'
    }
  ],
  'Lead Generation': [
    {
      question: 'How does AI qualify inbound leads?',
      answer: 'AI uses Natural Language Processing (NLP) and qualification frameworks (like FRANT) to read prospect messages, extract company size, budget, timeline, and immediately route high-value leads.'
    },
    {
      question: 'What is Generative Engine Optimization (GEO)?',
      answer: 'Generative Engine Optimization (GEO) is the practice of formatting website content so it is easily crawled, understood, and cited by AI engines like ChatGPT, Gemini, and Perplexity Search.'
    }
  ],
  'Growth Consulting': [
    {
      question: 'What does a revenue growth audit involve?',
      answer: 'A growth audit maps your entire customer journey, identifies where leads are slipping through, estimates the monthly financial loss from leakage, and provides a customized systems blueprint.'
    },
    {
      question: 'What is the difference between marketing and revenue infrastructure?',
      answer: 'Marketing generates leads, while revenue infrastructure ensures those leads actually convert into clients by automating follow-up, booking, onboarding, and client database management.'
    }
  ],
  'Agentic AI': [
    {
      question: 'What is a multi-agent AI business system?',
      answer: 'Multi-agent AI systems consist of multiple specialized AI agents (e.g., researcher agent, outreach agent, classifier agent) collaborating to handle end-to-end tasks like booking a client or updating a CRM.'
    },
    {
      question: 'What is the role of voice agents in inbound handling?',
      answer: 'AI voice agents act as autonomous front desks. They answer phone calls instantly, qualify intent, answer FAQs, and directly book qualified appointments into sales calendars.'
    }
  ],
  'Operations': [
    {
      question: 'How do you automate operations without losing the human touch?',
      answer: 'You automate repetitive administrative tasks (data entry, calendar bookings, basic queries) while leaving key relationship building, high-touch consultation, and custom delivery to human operators.'
    },
    {
      question: 'What is the 90-day AI build process?',
      answer: 'The 90-day process starts with an audit call, followed by system mapping, database integrations, agent training, and gradual deployment, ensuring a stable infrastructure with zero downtime.'
    }
  ],
};

const defaultFaqs: FAQItem[] = [
  {
    question: 'How does Irtiqa AI help service businesses?',
    answer: 'Irtiqa AI builds and operates customized revenue operations infrastructure and agentic AI systems that capture leads, automate follow-up, and stop silent revenue leakage.'
  },
  {
    question: 'What industries does Irtiqa AI serve?',
    answer: 'We serve mid-market service businesses, including professional services, marketing agencies, healthcare clinics, legal firms, financial services, and local high-ticket service companies.'
  }
];

export function getFaqsForCategory(category: string): FAQItem[] {
  const faqs = faqsByCategory[category] || [];
  // Merge with default FAQs to ensure we always have 3-4 items for robust SEO
  return [...faqs, ...defaultFaqs].slice(0, 4);
}
