import { useEffect, useRef } from 'react';

/**
 * Returns the previous state/value from the last render.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined);
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}
