import React, { forwardRef } from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';

export interface SwitchProps extends Omit<PressableProps, 'value'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Switch = forwardRef<React.ElementRef<typeof Pressable>, SwitchProps>(
  ({ className, checked: checkedProp, defaultChecked, onCheckedChange, disabled, style, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const springConfig = useSpring('snappy');
    const { theme } = useThemeContext();

    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked || false,
      onChange: onCheckedChange,
    });

    const handlePress = () => {
      if (disabled) return;
      triggerHaptic('light');
      setChecked(!checked);
    };

    const trackStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        checked ? 1 : 0,
        [0, 1],
        [theme.input, theme.primary.DEFAULT]
      );
      return { backgroundColor };
    }, [checked, theme]);

    const thumbStyle = useAnimatedStyle(() => {
      const translateX = withSpring(checked ? 20 : 0, springConfig);
      return { transform: [{ translateX }] };
    }, [checked, springConfig]);

    return (
      <AnimatedPressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="switch"
        accessibilityState={{ checked, disabled }}
        className={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        style={[trackStyle, style]}
        {...props}
      >
        <Animated.View
          className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform"
          style={thumbStyle}
        />
      </AnimatedPressable>
    );
  }
);
Switch.displayName = 'Switch';
