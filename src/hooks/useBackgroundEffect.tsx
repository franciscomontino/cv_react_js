import { useEffect } from 'react';

export const useBackgroundEffect = (
  reference: any,
  setVisible: any,
  set: boolean = true,
  threshold: number = 0.43,
  rootMargin: string = '0px',
) => {

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setVisible(set);
      } else {
        setVisible(!set);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: rootMargin,
      threshold: threshold
    });

    if (reference.current) {
      observer.observe(reference.current);
    }

    return () => {
      if (reference.current) {
        observer.unobserve(reference.current);
      }
    };
  }, []);
}