"use client";

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface PeopleAlsoAskProps {
  faqs: FAQItem[];
}

const PeopleAlsoAsk: React.FC<PeopleAlsoAskProps> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({
    0: true, // Keep the first FAQ open by default for immediate engagement (and to guide users)
  });

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="irtiqa-paa-section">
      <h2 className="irtiqa-paa-heading">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--b)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
        People Also Ask
      </h2>
      
      <div className="irtiqa-paa-list">
        {faqs.map((faq, index) => {
          const isOpen = !!openIndexes[index];
          return (
            <div 
              key={index} 
              className={`irtiqa-paa-item ${isOpen ? 'is-open' : ''}`}
            >
              <button 
                type="button"
                className="irtiqa-paa-trigger" 
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
              >
                <span className="irtiqa-paa-question">
                  <span className="irtiqa-paa-prefix">Q:</span> {faq.question}
                </span>
                <span className="irtiqa-paa-icon-wrapper">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`irtiqa-paa-icon ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              
              <div 
                className="irtiqa-paa-content-wrapper"
                style={{ 
                  maxHeight: isOpen ? '250px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in'
                }}
              >
                <div className="irtiqa-paa-content">
                  <p className="irtiqa-paa-answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .irtiqa-paa-section {
          margin-top: 64px;
          border-top: 1px solid var(--rule);
          padding-top: 48px;
          marginBottom: 48px;
          font-family: var(--ui);
        }
        .irtiqa-paa-heading {
          font-family: var(--serif);
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 28px;
          color: var(--ink);
          display: flex;
          align-items: center;
        }
        .irtiqa-paa-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .irtiqa-paa-item {
          background-color: var(--w2);
          border: 1px solid var(--rule);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .irtiqa-paa-item:hover {
          border-color: rgba(22, 65, 245, 0.25);
          box-shadow: 0 4px 12px rgba(22, 65, 245, 0.02);
        }
        .irtiqa-paa-item.is-open {
          border-color: var(--b);
          background-color: var(--w2);
        }
        .irtiqa-paa-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          color: var(--ink);
          font-family: var(--ui);
          font-weight: 600;
          font-size: 1.05rem;
          outline: none;
          transition: color 0.2s ease;
        }
        .irtiqa-paa-trigger:focus-visible {
          box-shadow: inset 0 0 0 2px var(--b);
        }
        .irtiqa-paa-prefix {
          color: var(--b);
          margin-right: 6px;
          font-weight: 700;
        }
        .irtiqa-paa-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--w3);
          color: var(--sub);
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .irtiqa-paa-item.is-open .irtiqa-paa-icon-wrapper {
          background-color: var(--b-lo);
          color: var(--b);
        }
        .irtiqa-paa-icon {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .irtiqa-paa-icon.rotate-180 {
          transform: rotate(180deg);
        }
        .irtiqa-paa-content-wrapper {
          overflow: hidden;
        }
        .irtiqa-paa-content {
          padding: 0 24px 20px 24px;
        }
        .irtiqa-paa-answer {
          color: var(--sub);
          font-size: 0.96rem;
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default PeopleAlsoAsk;
