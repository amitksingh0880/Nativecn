import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { useThemeContext } from '../../context/theme-context';

export interface SkeletonProps extends ViewProps {
  /** Uses true wave-like shimmer animation instead of opacity pulse */
  shimmer?: boolean;
}

export const Skeleton = React.forwardRef<React.ElementRef<typeof View>, SkeletonProps>(
  ({ className, shimmer = true, style, ...props }, ref) => {
    const { theme } = useThemeContext();
    const progress = useSharedValue(0);

    useEffect(() => {
      progress.value = withRepeat(
        withTiming(1, { duration: 1200 }),
        -1,
        false
      );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
      if (!shimmer) {
        // Fallback to simple opacity pulse if shimmer is false
        return {
          opacity: interpolate(progress.value, [0, 0.5, 1], [0.5, 1, 0.5]),
        };
      }

      // We translate the shimmer layer across the background
      return {};
    });

    return (
      <View
        ref={ref}
        className={cn('animate-pulse rounded-md bg-muted overflow-hidden relative', className)}
        style={style}
        {...props}
      >
        {shimmer && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: theme.shimmer,
                width: '200%', // wider to sweep across
              },
              useAnimatedStyle(() => ({
                transform: [
                  {
                    translateX: interpolate(
                      progress.value,
                      [0, 1],
                      [-200, 200], // Translate across the screen
                      Extrapolate.CLAMP
                    ),
                  },
                ],
              })),
            ]}
          />
        )}
      </View>
    );
  }
);
Skeleton.displayName = 'Skeleton';

import { StyleSheet } from 'react-native';
