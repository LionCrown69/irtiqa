import { useEffect } from 'react';

type Cleanup = () => void;

const TARGET_SELECTOR = [
  '#results .rcard',
  '#results .chart-card',
  '#problem .cost-visual',
  '#problem .cost-mini',
  '#services .layer'
].join(',');

const SECTION_SELECTOR = [
  '#hero',
  '#problem',
  '#services',
  '#results',
  '#process',
  '#why',
  '#testimonials',
  '#book'
].join(',');

const useLuxuryMotion = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileViewport = window.matchMedia('(max-width: 768px)').matches;
    if (reduceMotion || mobileViewport) {
      return;
    }

    const cleanups: Cleanup[] = [];
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
    const targets = Array.from(document.querySelectorAll<HTMLElement>(TARGET_SELECTOR));
    const hero = document.querySelector<HTMLElement>('#hero');

    targets.forEach((el, i) => {
      const depth = 12 + (i % 4) * 4;
      el.classList.add('tilt-card');
      el.style.setProperty('--depth', `${depth}px`);

      let raf = 0;
      let active = false;
      let rx = 0;
      let ry = 0;
      let mx = 0;
      let my = 0;
      let lift = 0;
      let tz = 0;

      const applyTransform = () => {
        el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translate3d(${mx.toFixed(2)}px,${(my + lift).toFixed(2)}px,${tz.toFixed(2)}px)`;
      };

      const onMove = (ev: PointerEvent) => {
        active = true;
        const rect = el.getBoundingClientRect();
        const x = (ev.clientX - rect.left) / rect.width - 0.5;
        const y = (ev.clientY - rect.top) / rect.height - 0.5;
        rx = -y * 7;
        ry = x * 9;
        mx = x * 16;
        my = y * 16;

        if (raf) {
          cancelAnimationFrame(raf);
        }

        raf = window.requestAnimationFrame(() => {
          applyTransform();
        });
      };

      const onEnter = () => {
        active = true;
        lift = -6;
        tz = depth;
        applyTransform();
      };

      const reset = () => {
        active = false;
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        rx = 0;
        ry = 0;
        mx = 0;
        my = 0;
        lift = 0;
        tz = 0;
        applyTransform();
      };

      const onLeave = () => reset();
      const onCancel = () => reset();
      const onMouseLeave = () => reset();
      const onBlur = () => reset();
      const onPointerOut = (ev: PointerEvent) => {
        const next = ev.relatedTarget as Node | null;
        if (!next || !el.contains(next)) {
          reset();
        }
      };

      el.addEventListener('pointermove', onMove, { passive: true });
      el.addEventListener('pointerenter', onEnter, { passive: true });
      el.addEventListener('pointerleave', onLeave, { passive: true });
      el.addEventListener('pointercancel', onCancel, { passive: true });
      el.addEventListener('pointerout', onPointerOut, { passive: true });
      el.addEventListener('mouseleave', onMouseLeave, { passive: true });
      window.addEventListener('blur', onBlur);

      cleanups.push(() => {
        if (raf) {
          cancelAnimationFrame(raf);
        }
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerenter', onEnter);
        el.removeEventListener('pointerleave', onLeave);
        el.removeEventListener('pointercancel', onCancel);
        el.removeEventListener('pointerout', onPointerOut);
        el.removeEventListener('mouseleave', onMouseLeave);
        window.removeEventListener('blur', onBlur);
        if (active) {
          reset();
        }
        el.style.transform = '';
      });
    });

    let sectionCache: { el: HTMLElement; top: number; height: number }[] = [];
    let heroCache: { top: number; height: number } | null = null;
    let vh = 1;

    const cachePositions = () => {
      vh = window.innerHeight || 1;
      const scrollY = window.scrollY;

      sectionCache = sections.map(el => {
        const rect = el.getBoundingClientRect();
        return { el, top: rect.top + scrollY, height: rect.height };
      });

      if (hero) {
        const rect = hero.getBoundingClientRect();
        heroCache = { top: rect.top + scrollY, height: rect.height };
      }
    };

    const updateSectionParallax = () => {
      const scrollY = window.scrollY;
      
      sectionCache.forEach((cache) => {
        const currentTop = cache.top - scrollY;
        const center = currentTop + cache.height * 0.5;
        const offset = (center - vh * 0.5) / vh;
        cache.el.style.setProperty('--section-shift', `${(-offset * 28).toFixed(2)}px`);
      });

      if (hero && heroCache) {
        const currentTop = heroCache.top - scrollY;
        const heroProgress = Math.max(0, Math.min(1, -currentTop / Math.max(heroCache.height, 1)));
        hero.style.setProperty('--hero-progress', heroProgress.toFixed(3));
        hero.style.setProperty('--hero-lift', `${(-heroProgress * 36).toFixed(2)}px`);
        hero.style.setProperty('--hero-fade', `${(1 - heroProgress * 0.55).toFixed(3)}`);
        hero.style.setProperty('--hero-orbit-spin', `${(heroProgress * 18).toFixed(2)}deg`);
      }
    };

    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) {
        return;
      }
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = 0;
        updateSectionParallax();
      });
    };

    const onResize = () => {
      cachePositions();
      updateSectionParallax();
    };

    cachePositions();
    updateSectionParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Re-cache once after fonts/images load
    setTimeout(cachePositions, 500);
    setTimeout(cachePositions, 2000);

    cleanups.push(() => {
      if (scrollRaf) {
        cancelAnimationFrame(scrollRaf);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
};

export default useLuxuryMotion;
