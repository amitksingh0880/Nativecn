import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];

export const Confetti = ({ count = 50, duration = 3000, onComplete }: { count?: number; duration?: number; onComplete?: () => void }) => {
  const [pieces, setPieces] = useState<any[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * SCREEN_WIDTH,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 500,
      size: Math.random() * 10 + 5,
    }));
    setPieces(newPieces);
  }, [count]);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {pieces.map((p, i) => (
        <ConfettiPiece
          key={p.id}
          x={p.x}
          color={p.color}
          delay={p.delay}
          size={p.size}
          duration={duration}
          onComplete={i === pieces.length - 1 ? onComplete : undefined}
        />
      ))}
    </View>
  );
};

const ConfettiPiece = ({ x, color, delay, size, duration, onComplete }: any) => {
  const translateY = useSharedValue(-50);
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming(SCREEN_HEIGHT + 50, { duration, easing: Easing.linear }, (finished) => {
        if (finished && onComplete) {
          runOnJS(onComplete)();
        }
      })
    );

    rotateX.value = withDelay(delay, withTiming(Math.random() * 720, { duration, easing: Easing.linear }));
    rotateY.value = withDelay(delay, withTiming(Math.random() * 720, { duration, easing: Easing.linear }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { rotateX: `${rotateX.value}deg` },
      { rotateY: `${rotateY.value}deg` },
    ],
  }));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: x,
          width: size,
          height: size,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};
