import React from 'react';
import { View, Dimensions, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface SwipeRowProps extends ViewProps {
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
  leftThreshold?: number;
  rightThreshold?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  actionWidth?: number;
}

export const SwipeRow = React.forwardRef<React.ElementRef<typeof View>, SwipeRowProps>(
  (
    {
      className,
      children,
      leftActions,
      rightActions,
      leftThreshold = SCREEN_WIDTH * 0.3,
      rightThreshold = SCREEN_WIDTH * 0.3,
      onSwipeLeft,
      onSwipeRight,
      actionWidth = 80,
      style,
      ...props
    },
    ref
  ) => {
    const translateX = useSharedValue(0);
    const triggerHaptic = useHaptics();
    const springConfig = useSpring('snappy');

    const handleRelease = (currentX: number) => {
      'worklet';
      if (rightActions && currentX < -rightThreshold) {
        if (onSwipeLeft) runOnJS(onSwipeLeft)();
        runOnJS(triggerHaptic)('success');
        translateX.value = withSpring(-actionWidth, springConfig);
      } else if (leftActions && currentX > leftThreshold) {
        if (onSwipeRight) runOnJS(onSwipeRight)();
        runOnJS(triggerHaptic)('success');
        translateX.value = withSpring(actionWidth, springConfig);
      } else {
        translateX.value = withSpring(0, springConfig);
      }
    };

    const panGestureEvent = (event: PanGestureHandlerGestureEvent) => {
      'worklet';
      const translationX = event.nativeEvent.translationX;
      
      // Limit swipe directions based on available actions
      if (!leftActions && translationX > 0) return;
      if (!rightActions && translationX < 0) return;

      // Apply resistance when swiping past threshold
      let newX = translationX;
      if (translationX > leftThreshold) {
        newX = leftThreshold + (translationX - leftThreshold) * 0.3;
      } else if (translationX < -rightThreshold) {
        newX = -rightThreshold + (translationX + rightThreshold) * 0.3;
      }
      
      translateX.value = newX;

      if (event.nativeEvent.state === 5 || event.nativeEvent.state === 3) {
        handleRelease(translationX);
      }
    };

    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: translateX.value }],
      };
    });

    const leftActionStyle = useAnimatedStyle(() => {
      return {
        opacity: translateX.value > 0 ? 1 : 0,
        transform: [{ translateX: (translateX.value - actionWidth) / 2 }],
      };
    });

    const rightActionStyle = useAnimatedStyle(() => {
      return {
        opacity: translateX.value < 0 ? 1 : 0,
        transform: [{ translateX: (translateX.value + actionWidth) / 2 }],
      };
    });

    return (
      <View ref={ref} className={cn('relative w-full overflow-hidden', className)} style={style} {...props}>
        {/* Background Actions Layer */}
        <View className="absolute inset-0 flex-row justify-between">
          <Animated.View style={[{ width: actionWidth, height: '100%' }, leftActionStyle]}>
            {leftActions}
          </Animated.View>
          <Animated.View style={[{ width: actionWidth, height: '100%' }, rightActionStyle]}>
            {rightActions}
          </Animated.View>
        </View>

        {/* Foreground Content Layer */}
        <PanGestureHandler onGestureEvent={panGestureEvent as any}>
          <Animated.View style={[rStyle, { width: '100%' }]} className="bg-background">
            {children}
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
);
SwipeRow.displayName = 'SwipeRow';
