import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import { BlurView, type BlurViewProps } from 'expo-blur';
import { cva, type VariantProps } from '../../lib/variants';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';

const glassVariants = cva(
  'overflow-hidden rounded-xl border',
  {
    variants: {
      intensity: {
        light: 'border-white/20 bg-white/10',
        medium: 'border-white/30 bg-white/20',
        heavy: 'border-white/40 bg-white/30',
      },
    },
    defaultVariants: {
      intensity: 'medium',
    },
  }
);

export interface GlassCardProps extends Omit<BlurViewProps, 'intensity'>, VariantProps<typeof glassVariants> {
  children?: React.ReactNode;
}

export const GlassCard = React.forwardRef<React.ElementRef<typeof BlurView>, GlassCardProps>(
  ({ className, intensity, tint = 'default', children, style, ...props }, ref) => {
    const { theme, isDark } = useThemeContext();

    // In dark mode, we generally want a dark tint unless specified
    const resolvedTint = tint === 'default' ? (isDark ? 'dark' : 'light') : tint;

    return (
      <BlurView
        ref={ref}
        intensity={intensity === 'light' ? 20 : intensity === 'medium' ? 50 : 80}
        tint={resolvedTint}
        className={cn(glassVariants({ intensity, className }))}
        style={[style]}
        {...props}
      >
        <View className="flex-1 p-6">
          {children}
        </View>
      </BlurView>
    );
  }
);
GlassCard.displayName = 'GlassCard';
