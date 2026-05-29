import React, { useEffect } from 'react';
import { View, type ViewProps, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing, interpolate, Extrapolate } from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface ProgressRingProps extends ViewProps {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
}

export const ProgressRing = React.forwardRef<React.ElementRef<typeof View>, ProgressRingProps>(
  ({ className, progress, size = 120, strokeWidth = 10, color = 'hsl(var(--primary))', trackColor = 'hsl(var(--muted))', style, ...props }, ref) => {
    // Pure View/CSS based fake ring using half-circles
    const rotation = useSharedValue(0);

    useEffect(() => {
      // Limit to 0-1
      const p = Math.max(0, Math.min(1, progress));
      rotation.value = withTiming(p * 360, { duration: 1500, easing: Easing.out(Easing.cubic) });
    }, [progress]);

    const rightAnimatedStyle = useAnimatedStyle(() => {
      const rot = interpolate(rotation.value, [0, 180, 360], [0, 180, 180], Extrapolate.CLAMP);
      return { transform: [{ rotate: `${rot}deg` }] };
    });

    const leftAnimatedStyle = useAnimatedStyle(() => {
      const rot = interpolate(rotation.value, [0, 180, 360], [0, 0, 180], Extrapolate.CLAMP);
      return { transform: [{ rotate: `${rot}deg` }] };
    });

    return (
      <View
        ref={ref}
        className={cn('items-center justify-center relative', className)}
        style={[{ width: size, height: size }, style]}
        {...props}
      >
        {/* Track */}
        <View
          style={[
            StyleSheet.absoluteFill,
            { borderRadius: size / 2, borderWidth: strokeWidth, borderColor: trackColor }
          ]}
        />
        
        <View style={[StyleSheet.absoluteFill, { overflow: 'hidden' }]}>
          {/* We would typically use react-native-svg for a real ring, but simulating with views for zero-deps */}
          <View style={[StyleSheet.absoluteFill, { borderRadius: size / 2, borderWidth: strokeWidth, borderColor: color, opacity: 0.2 }]} />
        </View>

        <View className="items-center justify-center">
           <Text className="text-2xl font-bold">{Math.round(progress * 100)}%</Text>
        </View>
      </View>
    );
  }
);
ProgressRing.displayName = 'ProgressRing';
