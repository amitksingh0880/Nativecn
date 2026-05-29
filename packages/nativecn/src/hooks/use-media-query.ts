import { useWindowDimensions } from 'react-native';

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * Hook for responsive layout based on screen width.
 */
export function useMediaQuery() {
  const { width } = useWindowDimensions();

  return {
    isSm: width >= breakpoints.sm,
    isMd: width >= breakpoints.md,
    isLg: width >= breakpoints.lg,
    isXl: width >= breakpoints.xl,
    is2Xl: width >= breakpoints['2xl'],
    width,
  };
}
