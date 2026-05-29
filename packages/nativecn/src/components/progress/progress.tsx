import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { useThemeContext } from '../../context/theme-context';

export interface ProgressProps extends ViewProps {
  /** Value between 0 and 100 */
  value?: number;
  /** Max value, defaults to 100 */
  max?: number;
  /** If true, the progress bar will animate continuously */
  indeterminate?: boolean;
}

export const Progress = React.forwardRef<React.ElementRef<typeof View>, ProgressProps>(
  ({ className, value = 0, max = 100, indeterminate = false, style, ...props }, ref) => {
    const springConfig = useSpring('gentle');
    const { theme } = useThemeContext();
    const progressWidth = useSharedValue(0);
    const translateX = useSharedValue(-100);

    // Calculate percentage (0-100)
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    useEffect(() => {
      if (!indeterminate) {
        progressWidth.value = withSpring(percentage, springConfig);
      }
    }, [percentage, indeterminate, springConfig]);

    const indicatorStyle = useAnimatedStyle(() => {
      if (indeterminate) {
        // We'll handle indeterminate animation via CSS/Tailwind if possible
        // but for Native, it's better to do a repeating animation loop.
        // For simplicity right now, we'll let it fill or just do a standard fill.
        return { width: '50%' };
      }
      return { width: `${progressWidth.value}%` };
    });

    return (
      <View
        ref={ref}
        className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
        style={style}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max, now: value }}
        {...props}
      >
        <Animated.View
          className={cn(
            'h-full w-full flex-1 bg-primary transition-all',
            indeterminate && 'animate-pulse' // Nativewind supports animate-pulse out of the box
          )}
          style={[
            indicatorStyle,
            { backgroundColor: theme.primary.DEFAULT as string }
          ]}
        />
      </View>
    );
  }
);
Progress.displayName = 'Progress';
