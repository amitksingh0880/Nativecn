import React, { useEffect } from 'react';
import { View, Pressable, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { useThemeContext } from '../../context/theme-context';
import { useHaptics } from '../../hooks/use-haptics';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface PulsatingButtonProps extends Omit<PressableProps, 'style'> {
  label: string;
  pulseColor?: string;
  style?: StyleProp<ViewStyle>;
  className?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const PulsatingButton = React.forwardRef<React.ElementRef<typeof Pressable>, PulsatingButtonProps>(
  ({ className, label, pulseColor, onPress, style, ...props }, ref) => {
    const { theme } = useThemeContext();
    const triggerHaptic = useHaptics();
    const pulseScale = useSharedValue(1);
    const pulseOpacity = useSharedValue(0.5);
    const pressScale = useSharedValue(1);

    const actualPulseColor = pulseColor || theme.primary.DEFAULT;

    useEffect(() => {
      pulseScale.value = withRepeat(
        withTiming(1.5, { duration: 1500, easing: Easing.out(Easing.ease) }),
        -1,
        false
      );
      pulseOpacity.value = withRepeat(
        withTiming(0, { duration: 1500, easing: Easing.out(Easing.ease) }),
        -1,
        false
      );
    }, []);

    const ringStyle = useAnimatedStyle(() => ({
      transform: [{ scale: pulseScale.value }],
      opacity: pulseOpacity.value,
    }));

    const buttonStyle = useAnimatedStyle(() => ({
      transform: [{ scale: pressScale.value }],
    }));

    const handlePressIn = () => {
      pressScale.value = withSpring(0.95);
    };

    const handlePressOut = () => {
      pressScale.value = withSpring(1);
    };

    return (
      <View className={cn('relative items-center justify-center', className)} style={style}>
        {/* Pulsating Ring */}
        <Animated.View
          style={[
            { backgroundColor: actualPulseColor },
            ringStyle,
          ]}
          className="absolute inset-0 rounded-full"
        />

        {/* Actual Button */}
        <AnimatedPressable
          ref={ref as any}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={(e) => {
            triggerHaptic('selection');
            onPress?.(e);
          }}
          className="rounded-full bg-primary px-6 py-3 shadow-lg flex-row items-center justify-center z-10"
          style={buttonStyle}
          {...props}
        >
          <Text className="text-primary-foreground font-semibold text-base">{label}</Text>
        </AnimatedPressable>
      </View>
    );
  }
);
PulsatingButton.displayName = 'PulsatingButton';
