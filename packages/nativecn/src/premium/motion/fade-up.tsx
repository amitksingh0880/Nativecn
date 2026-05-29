import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

export interface FadeUpProps extends ViewProps {
  delay?: number;
  duration?: number;
  distance?: number;
  children: React.ReactNode;
}

export const FadeUp = React.forwardRef<React.ElementRef<typeof View>, FadeUpProps>(
  ({ className, delay = 0, duration = 500, distance = 20, children, style, ...props }, ref) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(distance);

    useEffect(() => {
      opacity.value = withDelay(delay, withTiming(1, { duration }));
      translateY.value = withDelay(delay, withSpring(0, { damping: 20, stiffness: 100 }));
    }, [delay, duration, distance]);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    }));

    return (
      <Animated.View ref={ref as any} style={[animatedStyle, style]} className={className} {...props}>
        {children}
      </Animated.View>
    );
  }
);
FadeUp.displayName = 'FadeUp';
