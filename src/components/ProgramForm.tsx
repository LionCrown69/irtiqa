"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProgramForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for the demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        style={{ padding: '60px 40px', border: '1px solid var(--rule)', borderRadius: '16px', background: 'var(--w2)', textAlign: 'center' }}
      >
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--b)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 400, marginBottom: '16px', color: 'var(--ink)' }}>
          Application Received
        </h3>
        <p style={{ fontSize: '15px', color: 'var(--sub)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>
          Thank you for requesting an invitation. Our team will review your application and contact you if you are selected for the next stage.
        </p>
      </motion.div>
    );
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--rule)',
    padding: '12px 0',
    fontSize: '15px',
    color: 'var(--ink)',
    fontFamily: 'var(--ui)',
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: '32px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--dim)',
    marginBottom: '8px'
  };

  const sectionTitleStyle = {
    fontFamily: 'var(--serif)',
    fontSize: '24px',
    fontWeight: 400,
    color: 'var(--ink)',
    marginBottom: '32px',
    borderBottom: '1px solid var(--rule)',
    paddingBottom: '16px'
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="program-form"
      style={{
        background: 'var(--w2)',
        padding: '64px 48px',
        borderRadius: '24px',
        border: '1px solid var(--rule)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '42px', fontWeight: 400, color: 'var(--ink)' }}>
          Request an Invitation
        </h2>
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h4 style={sectionTitleStyle}>1. Personal Information</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input required type="text" style={inputStyle} placeholder="Jane Doe" />
          </div>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input required type="email" style={inputStyle} placeholder="jane@example.com" />
          </div>
          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <input required type="tel" style={inputStyle} placeholder="+1 (555) 000-0000" />
          </div>
          <div>
            <label style={labelStyle}>Country & Time Zone</label>
            <input required type="text" style={inputStyle} placeholder="USA, EST" />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>LinkedIn URL (Optional)</label>
            <input type="url" style={inputStyle} placeholder="https://linkedin.com/in/..." />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h4 style={sectionTitleStyle}>2. Professional Background</h4>
        <div>
          <label style={labelStyle}>Current Occupation</label>
          <input required type="text" style={inputStyle} placeholder="What do you do right now?" />
        </div>
        <div>
          <label style={labelStyle}>Languages You Speak</label>
          <input required type="text" style={inputStyle} placeholder="English, Spanish, etc." />
        </div>
        <div>
          <label style={labelStyle}>Sales / Business Development Experience</label>
          <textarea required style={{...inputStyle, resize: 'vertical', minHeight: '80px'}} placeholder="Briefly describe your experience..."></textarea>
        </div>
        <div>
          <label style={labelStyle}>Have you worked remotely before?</label>
          <select required style={{...inputStyle, appearance: 'auto', background: 'transparent'}}>
            <option value="" disabled selected>Select an option</option>
            <option value="yes">Yes, extensively</option>
            <option value="some">Some experience</option>
            <option value="no">No, this would be my first time</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h4 style={sectionTitleStyle}>3. Thinking & Character</h4>
        <div>
          <label style={labelStyle}>Why do you want to join this program?</label>
          <textarea required style={{...inputStyle, resize: 'vertical', minHeight: '100px'}}></textarea>
        </div>
        <div>
          <label style={labelStyle}>Describe a time you convinced someone of an idea.</label>
          <textarea required style={{...inputStyle, resize: 'vertical', minHeight: '100px'}}></textarea>
        </div>
        <div>
          <label style={labelStyle}>What does "ownership" mean to you?</label>
          <textarea required style={{...inputStyle, resize: 'vertical', minHeight: '100px'}}></textarea>
        </div>
        <div>
          <label style={labelStyle}>What book, founder, or business has influenced you the most?</label>
          <input required type="text" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>If you had to build a business with $100, what would you do first?</label>
          <textarea required style={{...inputStyle, resize: 'vertical', minHeight: '100px'}}></textarea>
        </div>
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h4 style={sectionTitleStyle}>4. Commitment</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
          <div>
            <label style={labelStyle}>Hours available per week</label>
            <input required type="text" style={inputStyle} placeholder="e.g., 20 hours" />
          </div>
          <div>
            <label style={labelStyle}>Internet Quality</label>
            <select required style={{...inputStyle, appearance: 'auto'}}>
              <option value="" disabled selected>Select an option</option>
              <option value="excellent">Excellent (Stable high-speed)</option>
              <option value="good">Good (Occasional drops)</option>
              <option value="poor">Poor (Unreliable)</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Laptop/Desktop available?</label>
            <select required style={{...inputStyle, appearance: 'auto'}}>
              <option value="" disabled selected>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Commit to 30-day evaluation?</label>
            <select required style={{...inputStyle, appearance: 'auto'}}>
              <option value="" disabled selected>Select an option</option>
              <option value="yes">Yes, absolutely</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '64px' }}>
        <h4 style={sectionTitleStyle}>5. Final Thoughts</h4>
        <div>
          <label style={labelStyle}>Why should we select you over every other applicant?</label>
          <textarea required style={{...inputStyle, resize: 'vertical', minHeight: '120px'}} placeholder="Your final pitch..."></textarea>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        style={{
          width: '100%',
          padding: '20px',
          background: 'var(--ink)',
          color: 'var(--w)',
          border: 'none',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: isSubmitting ? 'wait' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1,
          transition: 'all 0.3s'
        }}
      >
        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
      </button>
      
      <style>{`
        .program-form input:focus, .program-form textarea:focus, .program-form select:focus {
          border-bottom-color: var(--b) !important;
        }
        @media (max-width: 640px) {
          .program-form {
            padding: 40px 24px !important;
          }
          .program-form > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.form>
  );
}
