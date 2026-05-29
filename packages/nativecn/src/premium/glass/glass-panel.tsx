import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import { BlurView, type BlurViewProps } from 'expo-blur';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';

export interface GlassPanelProps extends BlurViewProps {
  children?: React.ReactNode;
}

export const GlassPanel = React.forwardRef<React.ElementRef<typeof BlurView>, GlassPanelProps>(
  ({ className, tint = 'default', intensity = 60, children, style, ...props }, ref) => {
    const { isDark } = useThemeContext();

    const resolvedTint = tint === 'default' ? (isDark ? 'dark' : 'light') : tint;

    return (
      <View className={cn('overflow-hidden rounded-2xl border border-white/20 shadow-xl', className)} style={style}>
        <BlurView
          ref={ref}
          intensity={intensity}
          tint={resolvedTint}
          className="flex-1"
          {...props}
        >
          {children}
        </BlurView>
      </View>
    );
  }
);
GlassPanel.displayName = 'GlassPanel';
