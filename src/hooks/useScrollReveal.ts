import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    // Filter nulls and observe
    const activeElements = elementsRef.current.filter(Boolean);
    activeElements.forEach((el) => {
      el.classList.add('reveal-item');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToReveal = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return { addToReveal };
}
