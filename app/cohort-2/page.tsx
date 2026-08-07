"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './waitlist.module.css';
import BrandLogo from '../../src/components/BrandLogo';

export default function CohortWaitlist() {
  const [formData, setFormData] = useState({ fullName: '', email: '', linkedin: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/cohort2-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Failed to connect to the server.');
    }
  };

  return (
    <div className={styles.pageContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />
      
      <div className={styles.navBar}>
        <a href="/" className={styles.navLogo}>
          <BrandLogo size="sm" showWordmark={true} />
        </a>
      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '600px', padding: '24px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.glassCard}
          style={{ width: '100%', margin: '0 auto' }}
        >
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.formHeader}>
                  <span className={styles.eyebrow}>Strictly Limited Access</span>
                  <h1 className={styles.formTitle}>IRTIQA <span className={styles.gradientText}>COHORT 02</span></h1>
                  <p className={styles.formDesc}>
                    We operate with concentrated expertise. Join the waitlist for priority review when Cohort 02 allocation opens.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.formGroup} style={{ marginTop: '32px' }}>
                  <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel}>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className={styles.inputField} 
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel}>Work Email</label>
                    <input 
                      type="email" 
                      required 
                      className={styles.inputField} 
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel}>LinkedIn Profile (Optional)</label>
                    <input 
                      type="url" 
                      className={styles.inputField} 
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedin}
                      onChange={e => setFormData({...formData, linkedin: e.target.value})}
                      disabled={status === 'loading'}
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center', marginTop: '8px' }}>
                      {errorMsg}
                    </div>
                  )}

                  <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Join the Waitlist'}
                    {status !== 'loading' && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 7h10M7 2l5 5-5 5" />
                      </svg>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successState}
              >
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2 className={styles.successTitle}>Position Secured</h2>
                <p className={styles.successText}>
                  You have been added to the priority waitlist for Cohort 02. Our leadership team will contact you directly when allocation opens.
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className={styles.submitBtn} 
                  style={{ marginTop: '32px', background: 'rgba(0,0,0,0.05)', color: 'var(--ink)', border: '1px solid rgba(0,0,0,0.1)' }}
                >
                  Return to Homepage
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
