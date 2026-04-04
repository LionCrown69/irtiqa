import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  mode?: 'inline' | 'popup';
  height?: number;
  minWidth?: number;
  className?: string;
  buttonText?: string;
  buttonClassName?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  url, 
  mode = 'popup',
  height = 700, 
  minWidth = 320,
  className = '',
  buttonText = 'Open Calendar',
  buttonClassName = 'btn-fill'
}) => {
  useEffect(() => {
    // Load Calendly script only once globally
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handlePopupClick = () => {
    if (window.Calendly && window.Calendly.showPopupWidget) {
      window.Calendly.showPopupWidget(url);
    }
  };

  if (mode === 'popup') {
    return (
      <button 
        onClick={handlePopupClick}
        className={`calendly-popup-button ${buttonClassName}`}
      >
        {buttonText}
      </button>
    );
  }

  // Inline mode
  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{
        minWidth: `${minWidth}px`,
        height: `${height}px`
      }}
    />
  );
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: unknown) => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

export default CalendlyWidget;
