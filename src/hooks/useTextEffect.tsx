import { useEffect, useState } from 'react';
import textEffect from '../utils/TextEffect';

export const useTextEffect = (reference: any, strings: any) => {
  const [hasExecuted, setHasExecuted] = useState(false);

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting && !hasExecuted) {
        textEffect(strings);
        setHasExecuted(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    if (reference.current) {
      observer.observe(reference.current);
    }

    return () => {
      if (reference.current) {
        observer.unobserve(reference.current);
      }
    };
  }, [hasExecuted]);
}