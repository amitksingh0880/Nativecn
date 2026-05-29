import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';
import Animated, { useAnimatedStyle, interpolate, Extrapolate, type SharedValue } from 'react-native-reanimated';

export interface GlassHeaderProps extends ViewProps {
  scrollY?: SharedValue<number>;
  collapsedHeight?: number;
}

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export const GlassHeader = React.forwardRef<React.ElementRef<typeof View>, GlassHeaderProps>(
  ({ className, children, scrollY, collapsedHeight = 100, style, ...props }, ref) => {
    const { isDark } = useThemeContext();

    const animatedStyle = useAnimatedStyle(() => {
      if (!scrollY) return { opacity: 1 };
      
      const opacity = interpolate(
        scrollY.value,
        [0, collapsedHeight / 2, collapsedHeight],
        [0, 0.5, 1],
        Extrapolate.CLAMP
      );
      
      return { opacity };
    });

    return (
      <View
        ref={ref}
        className={cn('absolute top-0 w-full z-50 overflow-hidden', className)}
        style={[{ height: collapsedHeight }, style]}
        {...props}
      >
        {scrollY ? (
          <AnimatedBlurView
            intensity={80}
            tint={isDark ? 'dark' : 'light'}
            style={[StyleSheet.absoluteFill, animatedStyle]}
          />
        ) : (
          <BlurView
            intensity={80}
            tint={isDark ? 'dark' : 'light'}
            style={StyleSheet.absoluteFill}
          />
        )}
        
        {/* Safe Area Padding / Content */}
        <View className="flex-1 justify-end pb-4 px-4">
          {children}
        </View>
      </View>
    );
  }
);
GlassHeader.displayName = 'GlassHeader';
