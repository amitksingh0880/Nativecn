import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { useHaptics } from '../../hooks/use-haptics';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export interface HapticPressableProps extends PressableProps {
  hapticStyle?: 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error';
  scaleOnPress?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const HapticPressable = React.forwardRef<React.ElementRef<typeof Pressable>, HapticPressableProps>(
  ({ onPress, onPressIn, onPressOut, hapticStyle = 'light', scaleOnPress = true, style, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const scale = useSharedValue(1);

    const handlePress = (e: any) => {
      triggerHaptic(hapticStyle);
      onPress?.(e);
    };

    const handlePressIn = (e: any) => {
      if (scaleOnPress) {
        scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
      }
      onPressIn?.(e);
    };

    const handlePressOut = (e: any) => {
      if (scaleOnPress) {
        scale.value = withSpring(1, { damping: 15, stiffness: 300 });
      }
      onPressOut?.(e);
    };

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    return (
      <AnimatedPressable
        ref={ref as any}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[scaleOnPress ? animatedStyle : undefined, style]}
        {...props}
      />
    );
  }
);
HapticPressable.displayName = 'HapticPressable';
