import { useCallback, useEffect, useRef } from 'react';

export const useMount = (onMount) => {
  const isMount = useRef(false);
  const mountCount = useRef(0);

  const isMountHandler = useCallback(() => {
    return isMount.current;
  }, []);

  useEffect(() => {
    isMount.current = true;
    mountCount.current += 1;

    if (mountCount.current === 1) {
      onMount && onMount();
    }

    return () => {
      isMount.current = false;
    };
  }, [onMount]);

  return [isMountHandler];
};
