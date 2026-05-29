import React, { forwardRef } from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { createComponent } from '../../lib/create-component';
import { Text } from '../typography';
import { useControllableState } from '../../hooks/use-controllable';
import { useHaptics } from '../../hooks/use-haptics';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
      pressed: {
        true: '',
        false: '',
      }
    },
    compoundVariants: [
      { variant: 'default', pressed: true, className: 'bg-accent text-accent-foreground' },
      { variant: 'outline', pressed: true, className: 'bg-accent text-accent-foreground' },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ToggleProps extends Omit<PressableProps, 'value'>, VariantProps<typeof toggleVariants> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export const Toggle = forwardRef<React.ElementRef<typeof Pressable>, ToggleProps>(
  ({ className, variant, size, pressed: pressedProp, defaultPressed, onPressedChange, disabled, children, style, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    
    const [pressed, setPressed] = useControllableState({
      prop: pressedProp,
      defaultProp: defaultPressed || false,
      onChange: onPressedChange,
    });

    const handlePress = () => {
      if (disabled) return;
      triggerHaptic('light');
      setPressed(!pressed);
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ selected: pressed, disabled: !!disabled }}
        className={toggleVariants({ variant, size, pressed, className })}
        style={style}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text className={cn(
            'text-sm font-medium',
            pressed ? 'text-accent-foreground' : 'text-foreground'
          )}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  }
);
Toggle.displayName = 'Toggle';

import { cn } from '../../lib/utils';
