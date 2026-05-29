import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface NotificationBadgeProps extends ViewProps {
  count?: number;
  maxCount?: number;
  showZero?: boolean;
}

export const NotificationBadge = React.forwardRef<React.ElementRef<typeof View>, NotificationBadgeProps>(
  ({ className, count = 0, maxCount = 99, showZero = false, style, ...props }, ref) => {
    const scale = useSharedValue(0);
    const displayCount = count > maxCount ? `${maxCount}+` : count.toString();
    const shouldShow = count > 0 || showZero;

    useEffect(() => {
      if (shouldShow) {
        // Pop in animation
        scale.value = withSequence(
          withSpring(1.2, { damping: 12, stiffness: 200 }),
          withSpring(1, { damping: 15, stiffness: 300 })
        );
      } else {
        // Shrink out
        scale.value = withSpring(0);
      }
    }, [count, shouldShow]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    if (!shouldShow && scale.value === 0) return null;

    return (
      <Animated.View
        ref={ref as any}
        style={[animatedStyle, style]}
        className={cn(
          'absolute -right-2 -top-2 z-10 flex min-h-[20px] min-w-[20px] items-center justify-center rounded-full bg-destructive px-1 ring-2 ring-background',
          className
        )}
        {...props}
      >
        <Text className="text-[10px] font-bold text-destructive-foreground leading-none">
          {displayCount}
        </Text>
      </Animated.View>
    );
  }
);
NotificationBadge.displayName = 'NotificationBadge';
