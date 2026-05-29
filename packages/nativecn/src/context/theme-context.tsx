import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import { defaultTheme } from '../tokens/themes/default';
import { darkTheme } from '../tokens/themes/dark';
import type { SemanticColors } from '../tokens/colors';

export type ColorScheme = 'light' | 'dark' | 'system';
export type ThemeName = 'default' | 'ocean' | 'rose'; // Extend as we add more themes

export interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  isDark: boolean;
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
  theme: SemanticColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultColorScheme?: ColorScheme;
  defaultThemeName?: ThemeName;
}

// Map theme names to their light/dark color definitions
const themes: Record<ThemeName, { light: SemanticColors; dark: SemanticColors }> = {
  default: { light: defaultTheme, dark: darkTheme },
  ocean: {
    light: require('../tokens/themes/ocean').oceanThemeLight,
    dark: require('../tokens/themes/ocean').oceanThemeDark,
  },
  rose: {
    light: require('../tokens/themes/rose').roseThemeLight,
    dark: require('../tokens/themes/rose').roseThemeDark,
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorScheme = 'system',
  defaultThemeName = 'default',
}) => {
  const nativeColorScheme = useNativeColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme);
  const [themeName, setThemeName] = useState<ThemeName>(defaultThemeName);

  const isDark =
    colorScheme === 'system'
      ? nativeColorScheme === 'dark'
      : colorScheme === 'dark';

  const theme = isDark ? themes[themeName].dark : themes[themeName].light;

  const value = useMemo(
    () => ({
      colorScheme,
      setColorScheme,
      isDark,
      themeName,
      setThemeName,
      theme,
    }),
    [colorScheme, isDark, themeName, theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
