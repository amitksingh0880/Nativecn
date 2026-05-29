import React from 'react';
import { ThemeProvider, type ThemeProviderProps } from './theme-context';
import { ToastProvider } from './toast-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export interface NativecnProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * The root provider for the Nativecn library.
 * Wraps your application with all required contexts (Theme, Toast, SafeArea, GestureHandler).
 */
export const NativecnProvider: React.FC<NativecnProviderProps> = ({
  children,
  defaultColorScheme,
  defaultThemeName,
}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider
          defaultColorScheme={defaultColorScheme}
          defaultThemeName={defaultThemeName}
        >
          <ToastProvider>
            {/* The ToastRenderer would go here to automatically render toasts */}
            {children}
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
