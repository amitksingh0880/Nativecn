import React, { useEffect } from 'react';
import { View, type ViewProps, type TextStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface AnimatedNumberProps extends ViewProps {
  value: number;
  fontSize?: number;
  textStyle?: TextStyle | string;
}

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Renders a single digit column that slides up/down
 */
const AnimatedDigit = ({ digit, fontSize = 32, textStyle }: { digit: number, fontSize?: number, textStyle?: any }) => {
  const translateY = useSharedValue(0);
  const springConfig = useSpring('bouncy');

  useEffect(() => {
    translateY.value = withSpring(-digit * fontSize, springConfig);
  }, [digit, fontSize, springConfig]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={{ height: fontSize, overflow: 'hidden' }}>
      <Animated.View style={rStyle}>
        {NUMBERS.map((num) => (
          <Text
            key={num}
            style={[{ height: fontSize, lineHeight: fontSize, fontSize }, typeof textStyle === 'object' ? textStyle : {}]}
            className={cn('text-center font-bold font-mono tracking-tighter', typeof textStyle === 'string' ? textStyle : '')}
          >
            {num}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
};

/**
 * A Magic UI inspired Animated Number component.
 * Rolls the digits into place like a slot machine when the value changes.
 */
export const AnimatedNumber = React.forwardRef<React.ElementRef<typeof View>, AnimatedNumberProps>(
  ({ value, fontSize = 48, textStyle, className, style, ...props }, ref) => {
    const valueStr = Math.abs(value).toString();
    const isNegative = value < 0;

    return (
      <View
        ref={ref}
        className={cn('flex-row items-center overflow-hidden', className)}
        style={style}
        {...props}
      >
        {isNegative && (
          <Text
            style={[{ fontSize, lineHeight: fontSize }, typeof textStyle === 'object' ? textStyle : {}]}
            className={cn('font-bold font-mono tracking-tighter', typeof textStyle === 'string' ? textStyle : '')}
          >
            -
          </Text>
        )}
        {valueStr.split('').map((char, index) => {
          if (char === '.') {
            return (
              <Text
                key={`dot-${index}`}
                style={[{ fontSize, lineHeight: fontSize }, typeof textStyle === 'object' ? textStyle : {}]}
                className={cn('font-bold font-mono tracking-tighter', typeof textStyle === 'string' ? textStyle : '')}
              >
                .
              </Text>
            );
          }
          return (
            <AnimatedDigit
              key={`${index}-${valueStr.length}`}
              digit={parseInt(char, 10)}
              fontSize={fontSize}
              textStyle={textStyle}
            />
          );
        })}
      </View>
    );
  }
);
AnimatedNumber.displayName = 'AnimatedNumber';
