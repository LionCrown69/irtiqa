"use client";

import React, { useEffect, useState } from 'react';

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
import useScrollReveal from '../../hooks/useScrollReveal';
import useMobileLenis from '../../hooks/useMobileLenis';
import useLuxuryMotion from '../../hooks/useLuxuryMotion';

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
      <main className="lux-main">
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
