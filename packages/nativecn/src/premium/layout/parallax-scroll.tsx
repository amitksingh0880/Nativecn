import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';

export interface ParallaxScrollProps {
  headerImage: React.ReactNode;
  headerHeight?: number;
  children: React.ReactNode;
  className?: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const ParallaxScroll = React.forwardRef<React.ElementRef<typeof Animated.ScrollView>, ParallaxScrollProps>(
  ({ className, headerImage, headerHeight = 300, children, ...props }, ref) => {
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
        scrollY.value = event.contentOffset.y;
      },
    });

    const headerAnimatedStyle = useAnimatedStyle(() => {
      const translateY = interpolate(
        scrollY.value,
        [-headerHeight, 0, headerHeight],
        [-headerHeight / 2, 0, headerHeight * 0.5],
        Extrapolate.CLAMP
      );
      const scale = interpolate(
        scrollY.value,
        [-headerHeight, 0],
        [2, 1],
        Extrapolate.CLAMP
      );

      return {
        transform: [{ translateY }, { scale }],
      };
    });

    return (
      <View className={cn('flex-1 bg-background', className)}>
        <Animated.View style={[styles.header, { height: headerHeight }, headerAnimatedStyle]}>
          {headerImage}
        </Animated.View>
        <Animated.ScrollView
          ref={ref as any}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: headerHeight }}
          {...props}
        >
          <View className="bg-background min-h-screen rounded-t-3xl -mt-6 p-6">
            {children}
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
);
ParallaxScroll.displayName = 'ParallaxScroll';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: SCREEN_WIDTH,
    overflow: 'hidden',
  },
});
