import { useEffect, useState } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogosSection from './components/LogosSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';
import ProcessSection from './components/ProcessSection';
import WhySection from './components/WhySection';
import TestimonialsSection from './components/TestimonialsSection';
import BookSection from './components/BookSection';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import useScrollReveal from './hooks/useScrollReveal';
import useMobileLenis from './hooks/useMobileLenis';
import useLuxuryMotion from './hooks/useLuxuryMotion';

function App() {
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
  useMobileLenis(); // Native smooth scroll (disabled on mobile via media query)
  useLuxuryMotion(); // 3D tilt effects on desktop (disabled on mobile via media query)

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
        <BookSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
