import { useEffect, useState, useCallback } from "react";

const useInView = (id, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  const observerCallback = useCallback(
    ([entry]) => setIsInView(entry.isIntersecting),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold });
    const element = document.getElementById(id);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id, threshold, observerCallback]);

  return isInView;
};

export default useInView;
