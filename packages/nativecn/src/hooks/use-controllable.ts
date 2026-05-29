import { useState, useCallback } from 'react';

export interface UseControllableStateParams<T> {
  prop?: T;
  defaultProp?: T;
  onChange?: (state: T) => void;
}

/**
 * A hook that allows a component to be both controlled and uncontrolled.
 */
export function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => {},
}: UseControllableStateParams<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useState<T | undefined>(defaultProp);
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = useCallback(
    (nextValue: T | ((prev: T) => T)) => {
      if (isControlled) {
        const setter = nextValue as (prev: T) => T;
        const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
        if (value !== prop) onChange(value);
      } else {
        setUncontrolledProp((prevValue) => {
          const setter = nextValue as (prev: T | undefined) => T;
          const value = typeof nextValue === 'function' ? setter(prevValue) : nextValue;
          if (value !== prevValue) onChange(value);
          return value;
        });
      }
    },
    [isControlled, prop, onChange]
  );

  return [value as T, setValue] as const;
}
