import { useColorScheme as useNativeColorScheme } from 'react-native';

/**
 * Hook to get the current system color scheme.
 * This is native 'light' | 'dark', unaware of Nativecn's ThemeProvider.
 * For most use cases, you should use `useTheme().isDark` instead.
 */
export function useColorScheme() {
  return useNativeColorScheme() ?? 'light';
}
