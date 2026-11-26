import { useEffect, useRef, useState } from 'react';

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
