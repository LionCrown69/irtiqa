"use client";

import { useEffect, useState } from 'react';

import Navigation from '../src/components/Navigation';
import Hero from '../src/components/Hero';
import LogosSection from '../src/components/LogosSection';
import ProblemSection from '../src/components/ProblemSection';
import ServicesSection from '../src/components/ServicesSection';
import ResultsSection from '../src/components/ResultsSection';
import ProcessSection from '../src/components/ProcessSection';
import WhySection from '../src/components/WhySection';
import TestimonialsSection from '../src/components/TestimonialsSection';
import RecentBlogsSection from '../src/components/RecentBlogsSection';
import BookSection from '../src/components/BookSection';
import Footer from '../src/components/Footer';
import ProgressBar from '../src/components/ProgressBar';
import useScrollReveal from '../src/hooks/useScrollReveal';
import useMobileLenis from '../src/hooks/useMobileLenis';
import useLuxuryMotion from '../src/hooks/useLuxuryMotion';

export default function Home() {
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
        <Hero />
        <LogosSection />
        <ProblemSection />
        <ServicesSection />
        <ResultsSection />
        <ProcessSection />
        <WhySection />
        <TestimonialsSection />
        <RecentBlogsSection />
        <BookSection />
      </main>
      <Footer />
    </div>
  );
}
