import React, { forwardRef, useState } from 'react';
import { View, type ViewProps, PanResponder } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';

export interface SliderProps extends Omit<ViewProps, 'value'> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export const Slider = forwardRef<React.ElementRef<typeof View>, SliderProps>(
  (
    {
      className,
      value: valueProp,
      defaultValue = 0,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      style,
      ...props
    },
    ref
  ) => {
    const triggerHaptic = useHaptics();
    const springConfig = useSpring('snappy');
    const { theme } = useThemeContext();

    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange,
    });

    const [width, setWidth] = useState(0);
    const isInteracting = useSharedValue(false);

    // Ensure value is within bounds
    const clampedValue = Math.min(Math.max(value, min), max);
    const percentage = ((clampedValue - min) / (max - min)) * 100;

    const handleValueChange = (newPercentage: number) => {
      const rawValue = (newPercentage / 100) * (max - min) + min;
      const steppedValue = Math.round(rawValue / step) * step;
      const finalValue = Math.min(Math.max(steppedValue, min), max);
      
      if (finalValue !== value) {
        // Trigger haptic if we crossed a step
        if (step > 0 && finalValue % step === 0) {
          triggerHaptic('selection');
        }
        setValue(finalValue);
      }
    };

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onPanResponderGrant: (evt) => {
        isInteracting.value = true;
        triggerHaptic('light');
        if (width > 0) {
          const newPercentage = (evt.nativeEvent.locationX / width) * 100;
          handleValueChange(newPercentage);
        }
      },
      onPanResponderMove: (evt, gestureState) => {
        if (width > 0) {
          // Adjust based on the initial touch + drag distance
          const newPercentage = ((evt.nativeEvent.locationX) / width) * 100;
          handleValueChange(newPercentage);
        }
      },
      onPanResponderRelease: () => {
        isInteracting.value = false;
        triggerHaptic('light');
      },
    });

    const trackAnimatedStyle = useAnimatedStyle(() => {
      return {
        width: withSpring(`${percentage}%`, springConfig),
      };
    }, [percentage, springConfig]);

    const thumbAnimatedStyle = useAnimatedStyle(() => {
      return {
        left: withSpring(`${percentage}%`, springConfig),
        transform: [
          { translateX: -10 }, // Half of thumb width
          { scale: withSpring(isInteracting.value ? 1.2 : 1, springConfig) }
        ]
      };
    }, [percentage, isInteracting.value, springConfig]);

    return (
      <View
        ref={ref}
        className={cn(
          'relative flex w-full touch-none select-none items-center justify-center py-4',
          disabled && 'opacity-50',
          className
        )}
        style={style}
        accessibilityRole="adjustable"
        accessibilityValue={{ min, max, now: clampedValue }}
        {...props}
      >
        <View 
          className="relative h-2 w-full overflow-hidden rounded-full bg-secondary"
          onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
          {...panResponder.panHandlers}
        >
          <Animated.View
            className="absolute h-full bg-primary"
            style={trackAnimatedStyle}
          />
        </View>

        <Animated.View
          className="absolute h-5 w-5 rounded-full border-2 border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          style={thumbAnimatedStyle}
          pointerEvents="none"
        />
      </View>
    );
  }
);
Slider.displayName = 'Slider';
