import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { createComponent } from '../../lib/create-component';

const separatorVariants = cva('shrink-0 bg-border', {
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
    variant: {
      default: 'bg-border',
      gradient: 'bg-transparent', // Handled by Layer 3 Gradient wrapper
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default',
  },
});

export interface SeparatorProps extends ViewProps, VariantProps<typeof separatorVariants> {}

export const Separator = React.forwardRef<React.ElementRef<typeof View>, SeparatorProps>(
  ({ className, orientation, variant, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={separatorVariants({ orientation, variant, className })}
        role={props.role ?? 'separator'}
        {...props}
      />
    );
  }
);
Separator.displayName = 'Separator';
