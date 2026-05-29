import React, { useRef, useState } from 'react';
import { View, TextInput, Pressable, type ViewProps, type TextInputProps, Keyboard } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { useHaptics } from '../../hooks/use-haptics';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface OtpInputProps extends ViewProps {
  length?: number;
  value: string;
  onChangeText: (value: string) => void;
  onComplete?: (value: string) => void;
}

export const OtpInput = React.forwardRef<React.ElementRef<typeof View>, OtpInputProps>(
  ({ className, length = 4, value, onChangeText, onComplete, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const triggerHaptic = useHaptics();

    // Shake animation for error state (could be exposed via props)
    const shakeOffset = useSharedValue(0);

    const handlePress = () => {
      inputRef.current?.focus();
    };

    const handleChange = (text: string) => {
      // Keep only numeric (or alphanumeric depending on use case)
      const cleanText = text.replace(/[^0-9]/g, '').slice(0, length);
      if (cleanText !== value) {
        triggerHaptic('light');
        onChangeText(cleanText);
        if (cleanText.length === length) {
          triggerHaptic('success');
          Keyboard.dismiss();
          onComplete?.(cleanText);
        }
      }
    };

    const shakeStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: shakeOffset.value }],
    }));

    return (
      <View ref={ref} className={cn('w-full', className)} {...props}>
        <Pressable onPress={handlePress} className="flex-row items-center justify-between gap-2">
          {Array.from({ length }).map((_, index) => {
            const char = value[index] || '';
            const isActive = isFocused && value.length === index;
            const isFilled = value.length > index;

            return (
              <Animated.View
                key={index}
                style={shakeStyle}
                className={cn(
                  'flex h-14 w-12 items-center justify-center rounded-md border text-center transition-all',
                  isActive ? 'border-primary ring-2 ring-primary/20' : 'border-input',
                  isFilled ? 'bg-accent/50' : 'bg-background'
                )}
              >
                <Text className="text-xl font-semibold">
                  {char}
                </Text>
                {isActive && (
                  <View className="absolute bottom-2 h-[2px] w-4 bg-primary animate-pulse" />
                )}
              </Animated.View>
            );
          })}
        </Pressable>

        {/* Hidden Input to capture native keyboard events easily */}
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleChange}
          maxLength={length}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="one-time-code"
          className="absolute opacity-0 w-0 h-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    );
  }
);
OtpInput.displayName = 'OtpInput';
