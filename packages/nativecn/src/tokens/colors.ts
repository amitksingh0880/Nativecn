/**
 * Nativecn Color Tokens
 * HSL-based design tokens compatible with shadcn/ui defaults.
 * Extended with success, warning, info, glass, and overlay layers.
 */

/** A raw HSL string e.g. "221.2 83.2% 53.3%" (no 'hsl()' wrapper). */
export type HslValue = string;

export interface ColorScale {
  DEFAULT: HslValue;
  foreground: HslValue;
}

export interface SemanticColors {
  background: HslValue;
  foreground: HslValue;
  card: ColorScale;
  popover: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  muted: ColorScale;
  accent: ColorScale;
  destructive: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  info: ColorScale;
  border: HslValue;
  input: HslValue;
  ring: HslValue;
  /** Glassmorphism base — semi-transparent white/black */
  glass: string;
  glassBorder: string;
  overlay: string;
  shimmer: string;
}

export const lightColors: SemanticColors = {
  background: '0 0% 100%',
  foreground: '222.2 84% 4.9%',
  card: { DEFAULT: '0 0% 100%', foreground: '222.2 84% 4.9%' },
  popover: { DEFAULT: '0 0% 100%', foreground: '222.2 84% 4.9%' },
  primary: { DEFAULT: '221.2 83.2% 53.3%', foreground: '210 40% 98%' },
  secondary: { DEFAULT: '210 40% 96.1%', foreground: '222.2 47.4% 11.2%' },
  muted: { DEFAULT: '210 40% 96.1%', foreground: '215.4 16.3% 46.9%' },
  accent: { DEFAULT: '210 40% 96.1%', foreground: '222.2 47.4% 11.2%' },
  destructive: { DEFAULT: '0 84.2% 60.2%', foreground: '210 40% 98%' },
  success: { DEFAULT: '142.1 76.2% 36.3%', foreground: '210 40% 98%' },
  warning: { DEFAULT: '38 92% 50%', foreground: '0 0% 100%' },
  info: { DEFAULT: '199 89% 48%', foreground: '0 0% 100%' },
  border: '214.3 31.8% 91.4%',
  input: '214.3 31.8% 91.4%',
  ring: '221.2 83.2% 53.3%',
  glass: 'rgba(255, 255, 255, 0.12)',
  glassBorder: 'rgba(255, 255, 255, 0.20)',
  overlay: 'rgba(0, 0, 0, 0.60)',
  shimmer: 'rgba(255, 255, 255, 0.60)',
};

export const darkColors: SemanticColors = {
  background: '222.2 84% 4.9%',
  foreground: '210 40% 98%',
  card: { DEFAULT: '222.2 84% 4.9%', foreground: '210 40% 98%' },
  popover: { DEFAULT: '222.2 84% 4.9%', foreground: '210 40% 98%' },
  primary: { DEFAULT: '217.2 91.2% 59.8%', foreground: '222.2 47.4% 11.2%' },
  secondary: { DEFAULT: '217.2 32.6% 17.5%', foreground: '210 40% 98%' },
  muted: { DEFAULT: '217.2 32.6% 17.5%', foreground: '215 20.2% 65.1%' },
  accent: { DEFAULT: '217.2 32.6% 17.5%', foreground: '210 40% 98%' },
  destructive: { DEFAULT: '0 62.8% 30.6%', foreground: '210 40% 98%' },
  success: { DEFAULT: '142.1 70.6% 45.3%', foreground: '0 0% 100%' },
  warning: { DEFAULT: '38 92% 55%', foreground: '0 0% 100%' },
  info: { DEFAULT: '199 89% 52%', foreground: '0 0% 100%' },
  border: '217.2 32.6% 17.5%',
  input: '217.2 32.6% 17.5%',
  ring: '224.3 76.3% 48%',
  glass: 'rgba(0, 0, 0, 0.25)',
  glassBorder: 'rgba(255, 255, 255, 0.10)',
  overlay: 'rgba(0, 0, 0, 0.75)',
  shimmer: 'rgba(255, 255, 255, 0.08)',
};

/** Convert an HSL token to a full CSS hsl() string */
export const hsl = (value: HslValue): string => `hsl(${value})`;
