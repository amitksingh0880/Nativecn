import type { SemanticColors } from '../colors';
import { lightColors } from '../colors';

/**
 * Rose theme (Light)
 */
export const roseThemeLight: SemanticColors = {
  ...lightColors,
  primary: { DEFAULT: '346.8 77.2% 49.8%', foreground: '355.7 100% 97.3%' }, // Rose primary
  ring: '346.8 77.2% 49.8%',
};

/**
 * Rose theme (Dark)
 */
export const roseThemeDark: SemanticColors = {
  ...roseThemeLight,
  background: '20 14.3% 4.1%',
  foreground: '0 0% 95%',
  card: { DEFAULT: '24 9.8% 10%', foreground: '0 0% 95%' },
  popover: { DEFAULT: '20 14.3% 4.1%', foreground: '0 0% 95%' },
  primary: { DEFAULT: '346.8 77.2% 49.8%', foreground: '355.7 100% 97.3%' },
  secondary: { DEFAULT: '12 6.5% 15.1%', foreground: '0 0% 98%' },
  muted: { DEFAULT: '12 6.5% 15.1%', foreground: '24 5.4% 63.9%' },
  accent: { DEFAULT: '12 6.5% 15.1%', foreground: '0 0% 98%' },
  destructive: { DEFAULT: '0 62.8% 30.6%', foreground: '0 85.7% 97.3%' },
  border: '12 6.5% 15.1%',
  input: '12 6.5% 15.1%',
};
