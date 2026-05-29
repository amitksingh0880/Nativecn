import React, { useEffect } from 'react';
import { View, Pressable, StyleSheet, type PressableProps, type GestureResponderEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useHaptics } from '../../hooks/use-haptics';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface ShinyButtonProps extends PressableProps {
  label: string;
  className?: string;
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ShinyButton = React.forwardRef<React.ElementRef<typeof Pressable>, ShinyButtonProps>(
  ({ className, label, style, onPress, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const animatedValue = useSharedValue(0);

    useEffect(() => {
      animatedValue.value = withRepeat(
        withTiming(1, { duration: 3000, easing: Easing.linear }),
        -1,
        false
      );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
      const translateX = interpolate(animatedValue.value, [0, 1], [-200, 200]);
      return {
        transform: [{ translateX }],
      };
    });

    return (
      <AnimatedPressable
        ref={ref as any}
        onPress={(e: GestureResponderEvent) => {
          triggerHaptic('light');
          onPress?.(e);
        }}
        className={cn('relative overflow-hidden rounded-full bg-primary px-6 py-3 shadow-md', className)}
        style={style}
        {...props}
      >
        <Text className="text-center font-semibold text-primary-foreground">{label}</Text>
        
        {/* Shine Effect */}
        <Animated.View style={[StyleSheet.absoluteFill, animatedStyle, { width: 100, opacity: 0.3 }]}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,1)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </AnimatedPressable>
    );
  }
);
ShinyButton.displayName = 'ShinyButton';
