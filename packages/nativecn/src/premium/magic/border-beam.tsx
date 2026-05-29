import React, { useEffect } from 'react';
import { View, StyleSheet, type ViewProps, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export interface BorderBeamProps extends ViewProps {
  duration?: number;
  color?: string;
  size?: number;
}

export const BorderBeam = React.forwardRef<React.ElementRef<typeof View>, BorderBeamProps>(
  ({ className, duration = 4000, color = 'hsl(var(--primary))', size = 50, style, ...props }, ref) => {
    const perimeter = useSharedValue(0);

    useEffect(() => {
      perimeter.value = withRepeat(
        withTiming(1, { duration, easing: Easing.linear }),
        -1,
        false
      );
    }, [duration]);

    // This is a simplified border beam using a rotating gradient mask approach
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${interpolate(perimeter.value, [0, 1], [0, 360])}deg` }],
    }));

    return (
      <View
        ref={ref}
        className="absolute inset-0 z-10 overflow-hidden rounded-[inherit] pointer-events-none"
        style={style}
        {...props}
      >
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
            },
            animatedStyle,
          ]}
        >
           {/* The beam is a conic/linear sweep. Linear works reasonably well when masked by borders. */}
          <LinearGradient
            colors={[color, 'transparent', 'transparent']}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <View className="absolute inset-[2px] rounded-[inherit] bg-background" />
      </View>
    );
  }
);
BorderBeam.displayName = 'BorderBeam';
