import React, { useEffect } from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { cn } from '../../lib/utils';

export interface MagicCardProps extends ViewProps {
  children: React.ReactNode;
}

export const MagicCard = React.forwardRef<React.ElementRef<typeof View>, MagicCardProps>(
  ({ className, children, style, ...props }, ref) => {
    const rotation = useSharedValue(0);

    useEffect(() => {
      rotation.value = withRepeat(
        withTiming(360, { duration: 4000, easing: Easing.linear }),
        -1,
        false
      );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotation.value}deg` }],
    }));

    return (
      <View
        ref={ref}
        className={cn('relative overflow-hidden rounded-2xl bg-card p-[1px]', className)}
        style={style}
        {...props}
      >
        {/* The rotating gradient background behind the inner card */}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { width: '200%', height: '200%', top: '-50%', left: '-50%' },
            animatedStyle,
          ]}
        >
          <LinearGradient
            colors={['transparent', 'hsl(var(--primary))', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        {/* Inner Card content */}
        <View className="relative h-full w-full rounded-[15px] bg-card p-6">
          {children}
        </View>
      </View>
    );
  }
);
MagicCard.displayName = 'MagicCard';
