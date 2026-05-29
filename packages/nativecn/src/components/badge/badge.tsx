import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { createComponent } from '../../lib/create-component';
import { Text } from '../typography';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        // Nativecn extensions
        success: 'border-transparent bg-success text-success-foreground',
        warning: 'border-transparent bg-warning text-warning-foreground',
        info: 'border-transparent bg-info text-info-foreground',
        glass: 'border-glass-border bg-glass text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-xs font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
      success: 'text-primary-foreground', // Assuming success fg is light
      warning: 'text-foreground',
      info: 'text-primary-foreground',
      glass: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps extends ViewProps, VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<React.ElementRef<typeof View>, BadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <View ref={ref} className={badgeVariants({ variant, className })} {...props}>
        {typeof children === 'string' || typeof children === 'number' ? (
          <Text className={badgeTextVariants({ variant })}>{children}</Text>
        ) : (
          children
        )}
      </View>
    );
  }
);
Badge.displayName = 'Badge';
