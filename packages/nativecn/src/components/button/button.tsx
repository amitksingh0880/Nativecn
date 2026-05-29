import React from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { createComponent } from '../../lib/create-component';
import { Text } from '../typography';
import { usePressAnimation } from '../../hooks/use-press-animation';
import { useHaptics } from '../../hooks/use-haptics';
import Animated from 'react-native-reanimated';

const buttonVariants = cva(
  'flex-row items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // Nativecn extensions
        gradient: 'bg-transparent', // Handled by a Gradient wrapper in Layer 3
        glass: 'bg-glass border border-glass-border',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Map variants to specific text styles to override inheritance issues in React Native
const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
      secondary: 'text-secondary-foreground',
      ghost: 'text-foreground',
      link: 'text-primary underline',
      gradient: 'text-primary-foreground',
      glass: 'text-foreground',
    },
    size: {
      default: 'text-sm font-medium',
      sm: 'text-xs font-medium',
      lg: 'text-base font-medium',
      icon: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof Pressable>,
    VariantProps<typeof buttonVariants> {
  haptic?: 'none' | 'selection' | 'light' | 'medium' | 'heavy';
  animated?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, haptic = 'selection', animated = true, children, onPressIn, onPressOut, onPress, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const { handlePressIn, handlePressOut, animatedStyle } = usePressAnimation({
      scale: 'normal',
      springConfig: 'snappy',
    });

    const onInternalPressIn = (e: any) => {
      if (animated) handlePressIn();
      onPressIn?.(e);
    };

    const onInternalPressOut = (e: any) => {
      if (animated) handlePressOut();
      onPressOut?.(e);
    };

    const onInternalPress = (e: any) => {
      if (haptic !== 'none') triggerHaptic(haptic);
      onPress?.(e);
    };

    const Container = animated ? AnimatedPressable : Pressable;
    const style = animated ? animatedStyle : undefined;

    return (
      <Container
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        onPressIn={onInternalPressIn}
        onPressOut={onInternalPressOut}
        onPress={onInternalPress}
        style={style}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text className={textVariants({ variant, size })}>{children}</Text>
        ) : (
          children
        )}
      </Container>
    );
  }
);
Button.displayName = 'Button';
