import React, { useState } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { Text } from '../typography';
import { useThemeContext } from '../../context/theme-context';
import Animated, { useAnimatedStyle, withSpring, useSharedValue, interpolateColor } from 'react-native-reanimated';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        glass: 'bg-glass border-glass-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps extends TextInputProps, VariantProps<typeof inputVariants> {
  label?: string;
  floatingLabel?: boolean;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, variant, label, floatingLabel, error, helperText, leftIcon, rightIcon, onFocus, onBlur, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const { theme } = useThemeContext();

    // Floating label animation state
    const floatingAnim = useSharedValue(value ? 1 : 0);

    const handleFocus = (e: any) => {
      setIsFocused(true);
      if (floatingLabel) floatingAnim.value = withSpring(1, { damping: 20, stiffness: 300 });
      onFocus?.(e);
    };

    const handleBlur = (e: any) => {
      setIsFocused(false);
      if (floatingLabel && !value) floatingAnim.value = withSpring(0, { damping: 20, stiffness: 300 });
      onBlur?.(e);
    };

    const labelStyle = useAnimatedStyle(() => {
      return {
        transform: [
          { translateY: floatingAnim.value === 1 ? -24 : 0 },
          { scale: floatingAnim.value === 1 ? 0.85 : 1 },
        ],
        opacity: floatingAnim.value === 1 ? 1 : 0.7,
      };
    });

    return (
      <View className="flex flex-col space-y-1.5 w-full relative">
        {label && !floatingLabel && (
          <Text className="text-sm font-medium text-foreground mb-1">{label}</Text>
        )}
        
        <View className="relative w-full justify-center">
          {leftIcon && (
            <View className="absolute left-3 z-10 justify-center h-full">
              {leftIcon}
            </View>
          )}

          {label && floatingLabel && (
            <Animated.Text
              style={[
                labelStyle,
                { position: 'absolute', left: leftIcon ? 36 : 12, top: 10 },
              ]}
              className="text-sm font-medium text-muted-foreground pointer-events-none z-10"
            >
              {label}
            </Animated.Text>
          )}

          <AnimatedTextInput
            ref={ref as any}
            className={inputVariants({ variant, className: [className, leftIcon && 'pl-10', rightIcon && 'pr-10', error && 'border-destructive focus-visible:ring-destructive'].filter(Boolean).join(' ') })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            placeholderTextColor={theme.muted.foreground}
            {...props}
          />

          {rightIcon && (
            <View className="absolute right-3 z-10 justify-center h-full">
              {rightIcon}
            </View>
          )}
        </View>

        {(helperText || error) && (
          <Text className={`text-sm ${error ? 'text-destructive' : 'text-muted-foreground'}`}>
            {error || helperText}
          </Text>
        )}
      </View>
    );
  }
);
Input.displayName = 'Input';
