import type { SemanticColors } from '../colors';
import { lightColors } from '../colors';

/**
 * Ocean theme (Light)
 * A deep blue/teal aesthetic.
 */
export const oceanThemeLight: SemanticColors = {
  ...lightColors,
  primary: { DEFAULT: '199 89% 48%', foreground: '0 0% 100%' }, // Cyan/Ocean primary
  ring: '199 89% 48%',
  background: '210 20% 98%', // Very slightly blue-tinted background
  foreground: '222 47% 11%',
};

/**
 * Ocean theme (Dark)
 */
export const oceanThemeDark: SemanticColors = {
  ...oceanThemeLight,
  background: '222 47% 11%', // Deep navy background
  foreground: '210 20% 98%',
  card: { DEFAULT: '222 47% 11%', foreground: '210 20% 98%' },
  popover: { DEFAULT: '222 47% 11%', foreground: '210 20% 98%' },
  muted: { DEFAULT: '217.2 32.6% 17.5%', foreground: '215 20.2% 65.1%' },
  border: '217.2 32.6% 17.5%',
  input: '217.2 32.6% 17.5%',
};
