import React from 'react';
import { View, StyleSheet, type ViewProps, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { cn } from '../../lib/utils';

export interface MeteorsProps extends ViewProps {
  number?: number;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const Meteors = React.forwardRef<React.ElementRef<typeof View>, MeteorsProps>(
  ({ className, number = 20, style, ...props }, ref) => {
    
    return (
      <View
        ref={ref}
        className={cn('absolute inset-0 overflow-hidden', className)}
        style={style}
        pointerEvents="none"
        {...props}
      >
        {Array.from({ length: number }).map((_, idx) => (
          <Meteor key={idx} />
        ))}
      </View>
    );
  }
);
Meteors.displayName = 'Meteors';

const Meteor = () => {
  const animatedValue = useSharedValue(0);

  // Randomize initial properties
  const top = Math.random() * SCREEN_HEIGHT * 0.5 - 100;
  const left = Math.random() * SCREEN_WIDTH * 1.5 - SCREEN_WIDTH * 0.2;
  const delay = Math.random() * 5000;
  const duration = Math.random() * 2000 + 1500;

  React.useEffect(() => {
    setTimeout(() => {
      animatedValue.value = withRepeat(
        withTiming(1, { duration, easing: Easing.linear }),
        -1,
        false
      );
    }, delay);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 1], [0, -SCREEN_WIDTH * 1.5]);
    const translateY = interpolate(animatedValue.value, [0, 1], [0, SCREEN_WIDTH * 1.5]);
    const opacity = interpolate(animatedValue.value, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

    return {
      transform: [
        { translateX },
        { translateY },
        { rotate: '-45deg' },
      ],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top,
          left,
          width: 100,
          height: 2,
        },
        animatedStyle,
      ]}
    >
      <LinearGradient
        colors={['rgba(255,255,255,0.8)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
};
