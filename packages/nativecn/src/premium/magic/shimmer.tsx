import React, { useEffect } from 'react';
import { View, StyleSheet, type ViewProps, type DimensionValue } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export interface ShimmerProps extends ViewProps {
  duration?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
}

export const Shimmer = React.forwardRef<React.ElementRef<typeof View>, ShimmerProps>(
  ({ className, duration = 1500, width = '100%', height = 20, borderRadius = 8, style, ...props }, ref) => {
    const animatedValue = useSharedValue(0);

    useEffect(() => {
      animatedValue.value = withRepeat(
        withTiming(1, { duration, easing: Easing.linear }),
        -1,
        false
      );
    }, [duration]);

    const animatedStyle = useAnimatedStyle(() => {
      const translateX = interpolate(animatedValue.value, [0, 1], [-500, 500]); // Rough estimate, ideally measure width
      return {
        transform: [{ translateX }],
      };
    });

    return (
      <View
        ref={ref}
        style={[{ width, height, borderRadius, backgroundColor: '#E2E8F0', overflow: 'hidden' }, style]}
        className={className}
        {...props}
      >
        <Animated.View style={[StyleSheet.absoluteFill, animatedStyle, { width: 1000 }]}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.6)', 'transparent']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>
    );
  }
);
Shimmer.displayName = 'Shimmer';
