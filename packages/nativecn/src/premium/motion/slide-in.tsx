import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';

export interface SlideInProps extends ViewProps {
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  children: React.ReactNode;
}

export const SlideIn = React.forwardRef<React.ElementRef<typeof View>, SlideInProps>(
  ({ className, delay = 0, direction = 'left', distance = 50, children, style, ...props }, ref) => {
    const translation = useSharedValue(distance);
    
    // Determine the axis and sign
    const isX = direction === 'left' || direction === 'right';
    const initialTranslate = (direction === 'left' || direction === 'up') ? distance : -distance;

    useEffect(() => {
      translation.value = initialTranslate;
      translation.value = withDelay(delay, withSpring(0, { damping: 20, stiffness: 150 }));
    }, [delay, direction, distance]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        isX ? { translateX: translation.value } : { translateY: translation.value }
      ],
    }));

    return (
      <Animated.View ref={ref as any} style={[animatedStyle, style]} className={className} {...props}>
        {children}
      </Animated.View>
    );
  }
);
SlideIn.displayName = 'SlideIn';
