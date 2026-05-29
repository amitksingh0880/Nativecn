/**
 * Nativecn Typography Tokens
 * All font sizes, weights, line heights, and font families.
 */
import type { TextStyle } from 'react-native';

export const fontFamilies = {
  sans: 'Inter',
  mono: 'JetBrains Mono',
  /** Fallback: uses the system default */
  system: undefined,
} as const;

export const fontSizes = {
  display: 48,
  h1: 36,
  h2: 30,
  h3: 24,
  h4: 20,
  lg: 18,
  base: 16,
  sm: 14,
  xs: 12,
  '2xs': 10,
} as const;

export type FontSizeKey = keyof typeof fontSizes;

export const fontWeights = {
  thin: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const satisfies Record<string, TextStyle['fontWeight']>;

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const letterSpacings = {
  tighter: -0.8,
  tight: -0.4,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.6,
} as const;

/** Pre-composed text style sets for semantic typography components */
export const textStyles = {
  display: {
    fontSize: fontSizes.display,
    fontWeight: fontWeights.bold,
    lineHeight: fontSizes.display * lineHeights.tight,
    letterSpacing: letterSpacings.tight,
  },
  h1: {
    fontSize: fontSizes.h1,
    fontWeight: fontWeights.bold,
    lineHeight: fontSizes.h1 * lineHeights.tight,
    letterSpacing: letterSpacings.tight,
  },
  h2: {
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.semibold,
    lineHeight: fontSizes.h2 * lineHeights.snug,
    letterSpacing: letterSpacings.tight,
  },
  h3: {
    fontSize: fontSizes.h3,
    fontWeight: fontWeights.semibold,
    lineHeight: fontSizes.h3 * lineHeights.snug,
    letterSpacing: letterSpacings.normal,
  },
  h4: {
    fontSize: fontSizes.h4,
    fontWeight: fontWeights.semibold,
    lineHeight: fontSizes.h4 * lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
  bodyLg: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: fontSizes.lg * lineHeights.relaxed,
    letterSpacing: letterSpacings.normal,
  },
  body: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: fontSizes.base * lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
  bodySm: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: fontSizes.sm * lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: fontSizes.xs * lineHeights.normal,
    letterSpacing: letterSpacings.wide,
  },
  code: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    fontFamily: fontFamilies.mono,
    lineHeight: fontSizes.sm * lineHeights.relaxed,
    letterSpacing: letterSpacings.normal,
  },
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: fontSizes.sm * lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
} as const satisfies Record<string, TextStyle>;
