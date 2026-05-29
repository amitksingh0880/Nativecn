import { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

export interface UseScrollHeaderProps {
  maxHeight?: number;
  minHeight?: number;
}

/**
 * Hook to create collapsing header animations on scroll.
 */
export function useScrollHeader({ maxHeight = 200, minHeight = 80 }: UseScrollHeaderProps = {}) {
  const scrollY = useSharedValue(0);
  const scrollDistance = maxHeight - minHeight;

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, scrollDistance],
      [maxHeight, minHeight],
      Extrapolate.CLAMP
    );

    return { height };
  });

  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, scrollDistance / 2, scrollDistance],
      [1, 0.5, 0],
      Extrapolate.CLAMP
    );
    
    return { opacity };
  });

  return { onScroll, scrollY, headerStyle, titleStyle };
}
