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
import KnowledgeDirectory from '../src/components/KnowledgeDirectory';
import BookSection from '../src/components/BookSection';
import Footer from '../src/components/Footer';
import ProgressBar from '../src/components/ProgressBar';
import useScrollReveal from '../src/hooks/useScrollReveal';
import useMobileLenis from '../src/hooks/useMobileLenis';
import useLuxuryMotion from '../src/hooks/useLuxuryMotion';

export default function Home() {

  useScrollReveal();
  useMobileLenis(); // Native smooth scroll
  useLuxuryMotion(); // 3D tilt effects

  return (
    <div className="App">
      <ProgressBar />
      <Navigation />
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
        <KnowledgeDirectory />
        <BookSection />
      </main>
      <Footer />
    </div>
  );
}
