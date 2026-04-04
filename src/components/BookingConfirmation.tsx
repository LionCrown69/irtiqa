import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface BookingConfirmationProps {
  formData: {
    name: string;
    email: string;
    company: string;
  };
  booking?: {
    date: string;
    time: string;
    formattedTime: string;
    reference: string;
  };
  onClose?: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ formData, booking }) => {
  useEffect(() => {
    // Scroll to top of section
    const section = document.getElementById('book');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="booking-confirmation compact-ticket"
    >
      <div className="confirmation-ticket">
        <div className="ticket-accent-top" />

        <motion.div
          className="confirmation-checkmark"
          initial={{ scale: 0 }}
          animate={{ scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '0.5rem' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="confirmation-content"
          style={{ textAlign: 'center' }}
        >
          <h2 className="confirmation-title" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Audit Scheduled!</h2>
          <p className="confirmation-body" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            We'll meet you then to map your revenue opportunity.
          </p>
        </motion.div>

        {booking && (
          <div className="booking-highlight highlight-compact">
            <div className="booking-highlight-time" style={{ fontSize: '1rem', padding: '0.75rem' }}>
              {booking.formattedTime}
            </div>
          </div>
        )}

        <div className="ticket-details details-compact">
          <div className="ticket-detail-row">
            <span className="ticket-label">Company</span>
            <strong className="ticket-value">{formData.company}</strong>
          </div>
          <div className="ticket-divider" />
          <div className="ticket-detail-row">
            <span className="ticket-label">Ref ID</span>
            <strong className="ticket-value" style={{ fontSize: '0.8rem' }}>{booking?.reference}</strong>
          </div>
        </div>

        <div className="ticket-perforated" />

        <div className="confirmation-cta cta-compact">
          <p className="cta-copy" style={{ fontSize: '0.8rem', margin: 0 }}>
            Invite sent to <strong>{formData.email}</strong>
          </p>
        </div>

        <div className="ticket-accent-bottom" />
      </div>
    </motion.div>
  );
};


export default BookingConfirmation;
