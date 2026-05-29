import React, { forwardRef, createContext, useContext } from 'react';
import { View, Pressable, type ViewProps, type PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const RadioGroupContext = createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

export interface RadioGroupProps extends ViewProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroup = forwardRef<React.ElementRef<typeof View>, RadioGroupProps>(
  ({ className, value: valueProp, defaultValue, onValueChange, children, ...props }, ref) => {
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue || '',
      onChange: onValueChange,
    });

    return (
      <RadioGroupContext.Provider value={{ value, onValueChange: setValue }}>
        <View ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
          {children}
        </View>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

export interface RadioGroupItemProps extends PressableProps {
  value: string;
  label?: string;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const RadioGroupItem = forwardRef<React.ElementRef<typeof Pressable>, RadioGroupItemProps>(
  ({ className, value, label, disabled, style, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    if (!context) throw new Error('RadioGroupItem must be used within a RadioGroup');

    const triggerHaptic = useHaptics();
    const springConfig = useSpring('snappy');
    const checked = context.value === value;

    const handlePress = () => {
      if (disabled) return;
      if (!checked) {
        triggerHaptic('selection');
        context.onValueChange(value);
      }
    };

    const indicatorStyle = useAnimatedStyle(() => {
      const scale = withSpring(checked ? 1 : 0, springConfig);
      return { transform: [{ scale }] };
    }, [checked, springConfig]);

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="radio"
        accessibilityState={{ checked, disabled: !!disabled }}
        className={cn('flex flex-row items-center space-x-2', disabled && 'opacity-50', className)}
        {...props}
      >
        <View className="aspect-square h-5 w-5 items-center justify-center rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <AnimatedView
            style={indicatorStyle}
            className="h-2.5 w-2.5 rounded-full bg-primary"
          />
        </View>
        {label && <Text className="text-sm font-medium leading-none">{label}</Text>}
      </Pressable>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';
