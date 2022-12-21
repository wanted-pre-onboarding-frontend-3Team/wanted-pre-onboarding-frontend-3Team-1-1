import { useCallback, useEffect, useRef } from 'react';

export const useMount = (onMount) => {
  const mountRef = useRef(false);
  const mountCount = useRef(0);

  const isMount = useCallback(() => {
    return mountRef.current;
  }, []);

  useEffect(() => {
    mountRef.current = true;
    mountCount.current += 1;

    if (mountCount.current === 1) {
      onMount && onMount();
    }

    return () => {
      mountRef.current = false;
    };
  }, [onMount]);

  return [isMount];
};
