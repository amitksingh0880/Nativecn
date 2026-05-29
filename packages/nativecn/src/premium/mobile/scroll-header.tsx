import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
  type SharedValue
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';

export interface ScrollHeaderProps extends ViewProps {
  scrollY: SharedValue<number>;
  headerHeight?: number;
  children: React.ReactNode;
}

export const ScrollHeader = React.forwardRef<React.ElementRef<typeof View>, ScrollHeaderProps>(
  ({ className, scrollY, headerHeight = 100, children, style, ...props }, ref) => {
    
    const animatedStyle = useAnimatedStyle(() => {
      const translateY = interpolate(
        scrollY.value,
        [0, headerHeight],
        [0, -headerHeight],
        Extrapolate.CLAMP
      );
      
      const opacity = interpolate(
        scrollY.value,
        [0, headerHeight * 0.8],
        [1, 0],
        Extrapolate.CLAMP
      );

      return {
        transform: [{ translateY }],
        opacity,
      };
    });

    return (
      <Animated.View
        ref={ref as any}
        className={cn('absolute top-0 left-0 right-0 z-50 bg-background border-b border-border pt-safe', className)}
        style={[{ height: headerHeight }, animatedStyle, style]}
        {...props}
      >
        <View className="flex-1 justify-end pb-4 px-4">
          {children}
        </View>
      </Animated.View>
    );
  }
);
ScrollHeader.displayName = 'ScrollHeader';
