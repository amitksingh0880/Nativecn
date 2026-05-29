import React, { useEffect, useState } from 'react';
import { View, type ViewProps, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';

export interface MarqueeProps extends ViewProps {
  duration?: number;
  direction?: 'left' | 'right';
  reverse?: boolean;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const Marquee = React.forwardRef<React.ElementRef<typeof View>, MarqueeProps>(
  ({ className, children, duration = 10000, direction = 'left', reverse = false, ...props }, ref) => {
    const [contentWidth, setContentWidth] = useState(0);
    const translateX = useSharedValue(0);

    const actualDirection = reverse ? (direction === 'left' ? 'right' : 'left') : direction;

    useEffect(() => {
      if (contentWidth > 0) {
        // Reset translation
        translateX.value = actualDirection === 'left' ? 0 : -contentWidth;

        translateX.value = withRepeat(
          withTiming(actualDirection === 'left' ? -contentWidth : 0, {
            duration: duration,
            easing: Easing.linear,
          }),
          -1, // Infinite loop
          false // No reverse
        );
      }
      return () => cancelAnimation(translateX);
    }, [contentWidth, actualDirection, duration]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }));

    return (
      <View ref={ref} className={cn('flex-row overflow-hidden w-full', className)} {...props}>
        <Animated.View
          style={[animatedStyle, { flexDirection: 'row' }]}
          onLayout={(e) => setContentWidth(e.nativeEvent.layout.width)}
        >
          {children}
        </Animated.View>
        {/* Render a duplicate so it loops seamlessly */}
        {contentWidth > 0 && (
          <Animated.View style={[animatedStyle, { flexDirection: 'row', position: 'absolute', left: contentWidth }]}>
            {children}
          </Animated.View>
        )}
      </View>
    );
  }
);
Marquee.displayName = 'Marquee';
