import React from 'react';
import { View, type ViewProps, type NativeSyntheticEvent, type NativeScrollEvent, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { RefreshCw } from 'lucide-react-native';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';

export interface PullToRefreshProps extends ViewProps {
  isRefreshing: boolean;
  onRefresh: () => void;
  /** Pass the Y scroll offset from your ScrollView/FlatList here */
  scrollY: SharedValue<number>;
  threshold?: number;
}

export const PullToRefresh = ({ isRefreshing, onRefresh, scrollY, threshold = 80, ...props }: PullToRefreshProps) => {
  const triggerHaptic = useHaptics();
  const hasTriggeredHaptic = useSharedValue(false);
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    if (isRefreshing) {
      rotation.value = withTiming(rotation.value + 360, { duration: 1000 }, () => {
        // Simple loop if still refreshing
        if (isRefreshing) rotation.value += 360; 
      });
    }
  }, [isRefreshing]);

  const animatedStyle = useAnimatedStyle(() => {
    const pullDistance = Math.max(0, -scrollY.value);
    
    // Trigger haptic once when crossing threshold
    if (pullDistance >= threshold && !hasTriggeredHaptic.value && !isRefreshing) {
      hasTriggeredHaptic.value = true;
      runOnJS(triggerHaptic)('success');
    } else if (pullDistance < threshold) {
      hasTriggeredHaptic.value = false;
    }

    const scale = interpolate(pullDistance, [0, threshold], [0.5, 1], Extrapolate.CLAMP);
    const opacity = interpolate(pullDistance, [0, threshold / 2, threshold], [0, 0.5, 1], Extrapolate.CLAMP);

    return {
      opacity: isRefreshing ? 1 : opacity,
      transform: [
        { scale: isRefreshing ? 1 : scale },
        { translateY: isRefreshing ? threshold / 2 : Math.min(pullDistance, threshold) / 2 },
      ],
    };
  });

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        { height: threshold, alignItems: 'center', justifyContent: 'center' },
        animatedStyle,
      ]}
      pointerEvents="none"
      {...props}
    >
      <View className="h-10 w-10 items-center justify-center rounded-full bg-background shadow-md border border-border">
        <Animated.View style={iconStyle}>
          <RefreshCw size={20} className="text-primary" />
        </Animated.View>
      </View>
    </Animated.View>
  );
};
PullToRefresh.displayName = 'PullToRefresh';
