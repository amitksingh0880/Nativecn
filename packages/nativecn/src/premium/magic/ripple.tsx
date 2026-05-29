import React, { useEffect } from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';

export interface RippleProps extends ViewProps {
  color?: string;
  numRipples?: number;
}

export const Ripple = React.forwardRef<React.ElementRef<typeof View>, RippleProps>(
  ({ className, color = 'rgba(0, 0, 0, 0.1)', numRipples = 3, style, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('items-center justify-center overflow-hidden', className)}
        style={style}
        {...props}
      >
        {Array.from({ length: numRipples }).map((_, i) => (
          <RippleCircle key={i} delay={i * 1000} color={color} />
        ))}
      </View>
    );
  }
);
Ripple.displayName = 'Ripple';

const RippleCircle = ({ delay, color }: { delay: number; color: string }) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scale.value = withDelay(
      delay,
      withRepeat(withTiming(4, { duration: 3000, easing: Easing.out(Easing.ease) }), -1, false)
    );
    opacity.value = withDelay(
      delay,
      withRepeat(withTiming(0, { duration: 3000, easing: Easing.out(Easing.ease) }), -1, false)
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};
