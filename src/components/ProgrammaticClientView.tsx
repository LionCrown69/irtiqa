"use client";

import React, { useEffect, useState } from 'react';
import { getCitiesByCountry, industries } from '../data/programmatic-seo';

import Navigation from './Navigation';
import Hero from './Hero';
import LogosSection from './LogosSection';
import ProblemSection from './ProblemSection';
import ServicesSection from './ServicesSection';
import ResultsSection from './ResultsSection';
import ProcessSection from './ProcessSection';
import WhySection from './WhySection';
import TestimonialsSection from './TestimonialsSection';
import BookSection from './BookSection';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import useScrollReveal from '../hooks/useScrollReveal';
import useMobileLenis from '../hooks/useMobileLenis';
import useLuxuryMotion from '../hooks/useLuxuryMotion';

interface ProgrammaticClientViewProps {
  industry: {
    slug: string;
    name: string;
    title: string;
    painPoint: string;
  };
  location: {
    slug: string;
    name: string;
    state: string;
    country: string;
  };
}

export default function ProgrammaticClientView({ industry, location }: ProgrammaticClientViewProps) {
  const [navHeight, setNavHeight] = useState(68);
  
  useEffect(() => {
    const handleScroll = () => {
      const newHeight = window.scrollY > 60 ? 58 : 68;
      setNavHeight(newHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useScrollReveal();
  useMobileLenis(); // Native smooth scroll
  useLuxuryMotion(); // 3D tilt effects

  return (
    <div className="App">
      <ProgressBar />
      <Navigation navHeight={navHeight} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.irtiqaaiagency.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Directory",
                "item": "https://www.irtiqaaiagency.com/directory"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": location.country,
                "item": `https://www.irtiqaaiagency.com/directory/${location.country.toLowerCase()}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": location.name,
                "item": `https://www.irtiqaaiagency.com/directory/${location.country.toLowerCase()}/${location.slug}`
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": industry.name,
                "item": `https://www.irtiqaaiagency.com/use-cases/${industry.slug}/${location.slug}`
              }
            ]
          })
        }}
      />

      <main className="lux-main">
        {/* Semantic Breadcrumbs for Programmatic SEO */}
        <div style={{
          padding: '110px 24px 0',
          maxWidth: '1200px',
          margin: '0 auto',
          fontSize: '0.8rem',
          color: 'var(--sub)',
          fontFamily: 'var(--sans)',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          opacity: 0.7
        }} className="desktop-only">
          <a href="/" style={{ color: 'var(--sub)', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="/directory" style={{ color: 'var(--sub)', textDecoration: 'none' }}>Directory</a>
          <span>/</span>
          <a href={`/directory/${location.country.toLowerCase()}`} style={{ color: 'var(--sub)', textDecoration: 'none' }}>{location.country}</a>
          <span>/</span>
          <a href={`/directory/${location.country.toLowerCase()}/${location.slug}`} style={{ color: 'var(--sub)', textDecoration: 'none' }}>{location.name}</a>
          <span>/</span>
          <span style={{ color: 'var(--ink)' }}>{industry.name}</span>
        </div>

        <Hero industry={industry} location={location} />
        <LogosSection />
        <ProblemSection industry={industry} location={location} />
        <ServicesSection industry={industry} location={location} />
        <ResultsSection />
        <ProcessSection />
        <WhySection />
        <TestimonialsSection />
        <BookSection />
      </main>
      <Footer />
    </div>
  );
}
