import { useEffect } from 'react';
import Lenis from 'lenis';

const MOBILE_QUERY = '(max-width: 640px)';

const useMobileLenis = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(MOBILE_QUERY);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Keep native scrolling on mobile to avoid lag/stuck interactions.
    if (media.matches || prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
};

export default useMobileLenis;
