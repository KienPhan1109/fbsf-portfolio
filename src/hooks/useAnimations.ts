import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Triggers CSS animation class toggle.
 */
export function useInView(
  options: IntersectionObserverInit = {},
  once: boolean = true
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.15, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, options.threshold, options.rootMargin]);

  return [ref, isVisible];
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

  // easeOutExpo easing function
  const easeOutExpo = useCallback((t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }, []);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

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
  }, [target, duration, shouldStart, easeOutExpo]);

  return count;
}

/**
 * Custom hook for scroll spy — detects which section is currently active.
 */
export function useScrollSpy(
  sectionIds: string[],
  offset: number = 100
): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId(sectionIds[0] || '');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

/**
 * Custom hook for navbar scroll behavior (background change on scroll).
 */
export function useScrolled(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
