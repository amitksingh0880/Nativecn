import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import { useHaptics } from '../../hooks/use-haptics';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;

export interface SwipeableCardStackProps {
  data: any[];
  renderCard: (item: any, index: number) => React.ReactNode;
  onSwipedLeft?: (item: any) => void;
  onSwipedRight?: (item: any) => void;
  onSwipedAll?: () => void;
}

export const SwipeableCardStack = ({ data, renderCard, onSwipedLeft, onSwipedRight, onSwipedAll }: SwipeableCardStackProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const triggerHaptic = useHaptics();

  const handleSwipeComplete = (direction: 'left' | 'right') => {
    const item = data[currentIndex];
    if (direction === 'left') onSwipedLeft?.(item);
    if (direction === 'right') onSwipedRight?.(item);
    
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= data.length) {
        onSwipedAll?.();
      }
      return next;
    });
    
    translateX.value = 0;
    translateY.value = 0;
  };

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
        // Swiped off screen
        const isRight = event.translationX > 0;
        runOnJS(triggerHaptic)('success');
        translateX.value = withSpring(isRight ? SCREEN_WIDTH : -SCREEN_WIDTH, { velocity: event.velocityX }, () => {
          runOnJS(handleSwipeComplete)(isRight ? 'right' : 'left');
        });
      } else {
        // Return to center
        runOnJS(triggerHaptic)('light');
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedCardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(translateX.value, [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2], [-10, 0, 10], Extrapolate.CLAMP);
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotate}deg` },
      ],
    };
  });

  if (currentIndex >= data.length) {
    return null; // or a finished state
  }

  return (
    <View style={styles.container}>
      {/* Next Card (Background) */}
      {currentIndex + 1 < data.length && (
        <Animated.View style={[styles.card, { transform: [{ scale: 0.95 }, { translateY: 20 }] }]}>
          {renderCard(data[currentIndex + 1], currentIndex + 1)}
        </Animated.View>
      )}

      {/* Current Card (Foreground) */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, animatedCardStyle]}>
          {renderCard(data[currentIndex], currentIndex)}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
});
