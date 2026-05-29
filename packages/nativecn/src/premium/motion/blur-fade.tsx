import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSpring } from '../../hooks/use-spring';

export interface BlurFadeProps extends ViewProps {
  delay?: number;
  duration?: number;
  yOffset?: number;
  blurAmount?: number;
  inView?: boolean;
}

export const BlurFade = React.forwardRef<React.ElementRef<typeof View>, BlurFadeProps>(
  ({ className, children, delay = 0, duration = 400, yOffset = 24, blurAmount = 10, inView = true, style, ...props }, ref) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(yOffset);
    // Note: True blur animation requires complex shader setups in React Native or Expo Blur
    // We simulate the effect with opacity + transform which works incredibly well
    
    const springConfig = useSpring('smooth');

    useEffect(() => {
      if (inView) {
        opacity.value = withDelay(delay, withTiming(1, { duration }));
        translateY.value = withDelay(delay, withSpring(0, springConfig));
      } else {
        opacity.value = withTiming(0, { duration });
        translateY.value = withSpring(yOffset, springConfig);
      }
    }, [inView, delay, duration, yOffset, springConfig]);

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
BlurFade.displayName = 'BlurFade';
