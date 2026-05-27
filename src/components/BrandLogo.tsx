import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md';
  showWordmark?: boolean;
  showArabic?: boolean;
  lightText?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showWordmark = true,
  showArabic = false,
  lightText = false
}) => {
  const markLogoSrc = '/irtiqa-logo-transparent.png';
  const altText = showArabic ? 'Irtiqa AI logo with Arabic wordmark' : 'Irtiqa logo';

  return (
    <span className={`brand-logo brand-logo-${size} ${lightText ? 'light' : ''}`}>
      <img className="brand-mark-image" src={markLogoSrc} alt={altText} />
      {showWordmark && (
        <span className="brand-word">
          <span className="brand-name">irtiqa</span>
          {showArabic && <span className="brand-ar">الذكاء الاصطناعي</span>}
        </span>
      )}
    </span>
  );
};

export default BrandLogo;
