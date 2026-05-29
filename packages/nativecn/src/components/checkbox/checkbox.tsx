import React, { forwardRef } from 'react';
import { Pressable, type PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, interpolate } from 'react-native-reanimated';
import { Check as CheckIcon } from 'lucide-react-native';
import { useControllableState } from '../../hooks/use-controllable';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';

export interface CheckboxProps extends Omit<PressableProps, 'value'> {
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Checkbox = forwardRef<React.ElementRef<typeof Pressable>, CheckboxProps>(
  ({ className, checked: checkedProp, defaultChecked, onCheckedChange, disabled, style, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const springConfig = useSpring('snappy');
    const { theme } = useThemeContext();

    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked || false,
      onChange: onCheckedChange,
    });

    const isChecked = checked === true;
    const isIndeterminate = checked === 'indeterminate';

    const handlePress = () => {
      if (disabled) return;
      triggerHaptic('selection');
      if (isIndeterminate) {
        setChecked(true);
      } else {
        setChecked(!checked);
      }
    };

    const containerStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: (isChecked || isIndeterminate) ? theme.primary.DEFAULT : 'transparent',
        borderColor: (isChecked || isIndeterminate) ? theme.primary.DEFAULT : theme.primary.DEFAULT,
      };
    }, [isChecked, isIndeterminate, theme]);

    const iconStyle = useAnimatedStyle(() => {
      const scale = withSpring(isChecked || isIndeterminate ? 1 : 0, springConfig);
      const opacity = withSpring(isChecked || isIndeterminate ? 1 : 0, springConfig);
      return {
        transform: [{ scale }],
        opacity,
      };
    }, [isChecked, isIndeterminate, springConfig]);

    return (
      <AnimatedPressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: isChecked, disabled }}
        className={cn(
          'peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 justify-center items-center',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        style={[containerStyle, style]}
        {...props}
      >
        <Animated.View style={iconStyle} className="flex items-center justify-center text-current">
          {isIndeterminate ? (
            <Animated.View className="h-0.5 w-2.5 bg-primary-foreground rounded-full" />
          ) : (
            <CheckIcon size={14} color={theme.primary.foreground as string} strokeWidth={3} />
          )}
        </Animated.View>
      </AnimatedPressable>
    );
  }
);
Checkbox.displayName = 'Checkbox';
