import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Triggers CSS animation class toggle.
 */
/**
 * Custom hook to detect when an element enters or leaves the viewport.
 * Triggers CSS animation class toggle for both entrance and exit transitions.
 */
export function useInView(
  options: IntersectionObserverInit = {},
  once: boolean = false
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const threshold = options.threshold ?? 0.08;
  const rootMargin = options.rootMargin ?? '0px 0px -30px 0px';
  const root = options.root;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin, root]);

  return [ref, isVisible];
}

/**
 * Custom hook to track window scroll progress from 0 to 100%.
 * Throttled using requestAnimationFrame for buttery-smooth 60/120fps performance.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      setProgress(Math.round(scrolled * 100)); // 0 to 100%
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScroll);
        ticking = true;
      }
    };

    calculateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return progress;
}

/**
 * Custom hook for animating a number from 0 to target.
 * Uses requestAnimationFrame for smooth animation.
 */
export function useCountUp(
  target: number,
  duration: number = 2000,
  shouldStart: boolean = false
): number {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // easeOutCubic provides a smooth, visible roll throughout the animation
  const easeOutCubic = useCallback((t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  }, []);

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [target, duration, shouldStart, easeOutCubic]);

  return shouldStart ? count : 0;
}

/**
 * Custom hook for scroll spy — detects which section is currently active.
 * Throttled via requestAnimationFrame to ensure buttery-smooth 60/120fps scrolling.
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  offset: number = 120
): string {
  const [activeId, setActiveId] = useState<string>('');
  const activeIdRef = useRef<string>('');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + offset;

          let current = sectionIds[0] || '';
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const element = document.getElementById(sectionIds[i]);
            if (element && element.offsetTop <= scrollPos) {
              current = sectionIds[i];
              break;
            }
          }

          if (current !== activeIdRef.current) {
            activeIdRef.current = current;
            setActiveId(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

/**
 * Custom hook for navbar scroll behavior.
 * Throttled via requestAnimationFrame and only triggers re-render on state change.
 */
export function useScrolled(threshold: number = 40): boolean {
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > threshold;
          if (scrolled !== prevScrolledRef.current) {
            prevScrolledRef.current = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
