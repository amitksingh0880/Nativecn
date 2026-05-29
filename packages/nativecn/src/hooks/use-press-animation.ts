import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSpring } from './use-spring';
import { pressScales, type PressScaleKey, type SpringPreset } from '../tokens/motion';

export interface UsePressAnimationProps {
  scale?: PressScaleKey;
  springConfig?: SpringPreset;
}

/**
 * Hook to handle scaling animations for pressable components (Buttons, Cards, etc.)
 */
export function usePressAnimation({
  scale = 'normal',
  springConfig = 'snappy',
}: UsePressAnimationProps = {}) {
  const pressed = useSharedValue(0);
  const spring = useSpring(springConfig);
  const scaleTarget = pressScales[scale];

  const handlePressIn = () => {
    pressed.value = 1;
  };

  const handlePressOut = () => {
    pressed.value = 0;
  };

  const animatedStyle = useAnimatedStyle(() => {
    const currentScale = pressed.value === 1 ? scaleTarget : 1;
    return {
      transform: [
        {
          scale: withSpring(currentScale, spring),
        },
      ],
    };
  });

  return {
    handlePressIn,
    handlePressOut,
    animatedStyle,
  };
}
