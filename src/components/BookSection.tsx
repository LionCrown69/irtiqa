import React, { useState, useEffect } from 'react';
import BookingConfirmation from './BookingConfirmation';
import {
  bookSlot,
  getAvailableDates,
  getAvailableSlotsForDate,
  BookingSlot
} from '../lib/firebase-bookings';

type FormState = {
  name: string;
  email: string;
  company: string;
  revenue: string;
  challenge: string;
};

type BookingData = {
  date: string;
  time: string;
  formattedTime: string;
  reference: string;
};

const BookSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    revenue: '',
    challenge: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'rejected'>('idle');
  const [step, setStep] = useState<'details' | 'picker'>('details');
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  // UI for Rejection State
  if (status === 'rejected') {
    return (
      <section className="py-32 bg-[#0C0C0B] text-[#FAFAF8] relative overflow-hidden" id="book">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <div className="w-20 h-20 bg-[#1A1A18] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#242422]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EBE7D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--display)' }}>
            Application Reviewed
          </h2>
          <p className="text-xl text-[#888884] mb-8 leading-relaxed">
            Currently, our custom systems are engineered specifically for businesses generating $20k+/mo in baseline revenue.
          </p>
          <div className="p-6 bg-[#1A1A18] border border-[#242422] rounded-xl text-left max-w-xl mx-auto mb-10 shadow-lg">
            <h3 className="text-[#FAFAF8] font-bold mb-2">Next Steps</h3>
            <p className="text-[#888884] text-sm leading-relaxed">
              We have dispatched an email to <strong className="text-[#FAFAF8]">{formData.email}</strong> with a free roadmap outlining how to optimize your organic outbound and pipeline velocity to hit the threshold. 
            </p>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="px-8 py-4 bg-[#FAFAF8] text-[#0C0C0B] font-bold rounded-lg hover:bg-[#EBE7D6] transition-all"
          >
            Return to Homepage
          </button>
        </div>
      </section>
    );
  }

  // Picker state
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableSlots, setAvailableSlots] = useState<BookingSlot[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [challengeSelect, setChallengeSelect] = useState<string>('');
  const [userTimezone, setUserTimezone] = useState<string>('Asia/Calcutta');

  useEffect(() => {
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Calcutta");
  }, []);

  const handleChallengeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setChallengeSelect(val);
    if (val !== 'other') {
      setFormData(prev => ({
        ...prev,
        challenge: val
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        challenge: ''
      }));
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoToPicker = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingSlots(true);
    setErrorMessage('');

    try {
      const dates = await getAvailableDates();
      if (dates.length === 0) {
        throw new Error('No available dates found in the next 30 days.');
      }
      setAvailableDates(dates);
      setStep('picker');
      // Scroll to top of section
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error fetching dates:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Unable to load available dates.');
      setStatus('error');
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleDateSelect = async (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setIsLoadingSlots(true);

    try {
      const slots = await getAvailableSlotsForDate(date);
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error fetching slots:', error);
      setErrorMessage('Unable to load available slots for this date.');
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedSlot) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. APPLICATION EVALUATION (Backend Check)
      const evalRes = await fetch('/api/bookings/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const evalData = await evalRes.json();
      
      if (evalData.status === "rejected") {
        setStatus("rejected");
        return; // Halt the booking flow entirely
      }

      // 2. BLOCK CALENDAR SLOT (Passed Evaluation)
      console.log('Finalizing booking for:', selectedSlot.date, selectedSlot.time);
      const result = await bookSlot(selectedSlot, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        revenue: formData.revenue,
        challenge: formData.challenge
      });


      if (!result) {
        throw new Error('Failed to confirm your booking. Please try again.');
      }

      const dateObj = new Date(`${result.slot.date}T${result.slot.time}`);
      const formattedTime = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      setBookingData({
        date: result.slot.date,
        time: result.slot.time,
        formattedTime,
        reference: result.reference
      });

      // Native Booking API Dispatch (Replaces Web3Forms)
      try {
        await fetch('/api/bookings/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            revenue: formData.revenue,
            challenge: formData.challenge,
            date: result.slot.date,
            time: result.slot.time,
            timezone: userTimezone,
            reference: result.reference
          })
        });
      } catch (e) {
        console.warn('Native booking dispatch failed:', e);
      }

      setStatus('success');
    } catch (error) {
      console.error('Booking error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unable to confirm booking.');
    }
  };


  return (
    <section id="book">
      <div className="book-inner">
        {status === 'success' ? (
          <BookingConfirmation formData={formData} booking={bookingData || undefined} />
        ) : (
          <>
            <div className="reveal">
              <div className="section-chip" style={{ justifyContent: 'center', display: 'flex' }}>Operations Assessment</div>
              <h2 className="book-title">Request a Systems<br /><em>Consultation.</em></h2>
              <p className="book-sub desktop-only">A comprehensive 60-minute analysis of your current technical architecture. Our lead engineers will identify SLA degradation points and outline the autonomous integrations required to optimize your pipeline. Following the consultation, you will receive a formal Technical Architecture Proposal.</p>
              <p className="book-sub mobile-only">Schedule a 60-minute technical architecture analysis.</p>
            </div>

            {step === 'details' ? (
              <form className="book-form book-compact reveal d2" onSubmit={handleGoToPicker}>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Business Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Monthly Revenue Range</label>
                    <select
                      className="form-select"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select range</option>
                      <option>Under $5K/mo</option>
                      <option>$5K – $15K/mo</option>
                      <option>$15K – $50K/mo</option>
                      <option>$50K – $150K/mo</option>
                      <option>$150K+/mo</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label className="form-label">Biggest operational challenge right now</label>
                    <select
                      className="form-select"
                      name="challengeSelect"
                      value={challengeSelect}
                      onChange={handleChallengeSelectChange}
                      required
                    >
                      <option value="" disabled>Select your primary challenge</option>
                      <option value="Losing leads / slow response times">Losing leads / slow response times</option>
                      <option value="Too much manual admin / scheduling overhead">Too much manual admin / scheduling overhead</option>
                      <option value="Follow-up breaks on warm conversations">Follow-up breaks on warm conversations</option>
                      <option value="Founder is the bottleneck for sales/ops">Founder is the bottleneck for sales/ops</option>
                      <option value="Disconnected CRM / untracked pipeline">Disconnected CRM / untracked pipeline</option>
                      <option value="other">Other (Specify custom challenge...)</option>
                    </select>
                  </div>
                  {challengeSelect === 'other' && (
                    <div className="form-field full" style={{ marginTop: '1rem' }}>
                      <label className="form-label">Specify your challenge</label>
                      <input
                        className="form-input"
                        type="text"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        placeholder="e.g. We need custom API integrations..."
                        required
                      />
                    </div>
                  )}
                </div>
                <button type="submit" className="form-submit" disabled={isLoadingSlots}>
                  {isLoadingSlots ? 'Loading Calendar...' : "Schedule Systems Consultation →"}
                </button>

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem', fontFamily: 'var(--ui)' }}>- OR -</p>
                  <a href="https://calendly.com/irtiqaaiagency/audit-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', color: 'var(--ink)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '10px 20px', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s', background: 'transparent' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(12,12,11,0.05)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                    Book via Calendly
                  </a>
                </div>

                {status === 'error' && (
                  <div className="form-success form-error" style={{ marginTop: '1.5rem', padding: '1rem', borderLeft: '3px solid var(--r)' }}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--r)' }}>{errorMessage}</h3>
                  </div>
                )}
              </form>
            ) : (
              <div className="book-compact picker-view">
                <div className="picker-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                  <button onClick={() => setStep('details')} className="btn-back" style={{ width: 'auto', padding: '6px 12px', fontSize: '0.75rem' }}>← BACK TO DETAILS</button>
                  <div style={{ marginTop: '0.5rem' }}>
                    <h3>Select Date & Time</h3>
                    <p className="picker-subtitle">Anytime between 9:00 AM - 5:30 PM</p>
                  </div>
                </div>

                <div style={{ padding: '0 2rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>Your Timezone</label>
                  <select
                    className="form-select"
                    value={userTimezone}
                    onChange={(e) => setUserTimezone(e.target.value)}
                    style={{ padding: '0.5rem', fontSize: '0.9rem', marginBottom: '0.5rem', width: '100%', maxWidth: '300px' }}
                  >
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Europe/Berlin">Central Europe (CET)</option>
                    <option value="Asia/Dubai">Dubai (GST)</option>
                    <option value="Asia/Calcutta">India (IST)</option>
                    <option value="Asia/Singapore">Singapore (SGT)</option>
                    <option value="Australia/Sydney">Sydney (AEST)</option>
                  </select>
                </div>

                <div className="picker-calendly-layout">
                  {/* LEFT COLUMN: DATES */}
                  <div className="picker-left">
                    <label className="picker-label-desk">Select Date</label>
                    <div className="date-picker-scroll calendly-dates">
                      {availableDates.map(date => (
                        <button
                          key={date}
                          className={`date-chip ${selectedDate === date ? 'active' : ''}`}
                          onClick={() => handleDateSelect(date)}
                        >
                          <span className="day-name">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</span>
                          <span className="day-num">{new Date(date).getDate()}</span>
                          <span className="month-name" style={{ fontSize: '0.65rem', opacity: 0.5, textTransform: 'uppercase', marginTop: '2px', fontWeight: 600 }}>{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>

                        </button>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: TIMES */}
                  <div className="picker-right">
                    {selectedDate ? (
                      <div className="time-grid-wrapper">
                        <label className="picker-label-desk">
                          {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </label>
                        <div className="calendly-time-scroll">
                          {availableSlots.length > 0 ? (
                            availableSlots.map(slot => {
                              const isSelected = selectedSlot?.id === slot.id;
                              return (
                                <div key={slot.id || slot.time} className={`calendly-time-row ${isSelected ? 'expanded' : ''}`}>
                                  <button
                                    className={`calendly-time-btn ${isSelected ? 'active' : ''}`}
                                    onClick={() => setSelectedSlot(slot)}
                                  >
                                    {slot.time}
                                  </button>

                                  {isSelected && (
                                    <button
                                      className="calendly-confirm-btn"
                                      onClick={handleConfirmBooking}
                                      disabled={status === 'submitting'}
                                    >
                                      {status === 'submitting' ? '...' : 'Confirm'}
                                    </button>
                                  )}
                                </div>
                              );
                            })
                          ) : (
                            <p className="no-times">No slots available on this day.</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="picker-empty-state">
                        <p>Please select a date to view times.</p>
                      </div>
                    )}
                  </div>
                </div>

                {status === 'error' && (
                  <div className="form-error-compact">
                    <p>{errorMessage}</p>
                  </div>
                )}
              </div>
            )}

          </>
        )}
      </div>
    </section>
  );
};

export default BookSection;
