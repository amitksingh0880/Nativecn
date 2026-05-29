import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { createComponent } from '../../lib/create-component';
import { Text } from '../typography';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm flex flex-col',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        success: 'border-success/50 text-success [&>svg]:text-success bg-success/5',
        warning: 'border-warning/50 text-warning [&>svg]:text-warning bg-warning/5',
        info: 'border-info/50 text-info [&>svg]:text-info bg-info/5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps extends ViewProps, VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

export const Alert = React.forwardRef<React.ElementRef<typeof View>, AlertProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        role="alert"
        className={alertVariants({ variant, className })}
        {...props}
      >
        {icon && (
          <View className="absolute left-4 top-4">
            {icon}
          </View>
        )}
        <View className={cn('flex flex-col space-y-1', icon && 'pl-8')}>
          {children}
        </View>
      </View>
    );
  }
);
Alert.displayName = 'Alert';

export const AlertTitle = createComponent<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>({
  Component: Text,
  baseClassName: 'mb-1 font-medium leading-none tracking-tight text-foreground',
});
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = createComponent<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>({
  Component: Text,
  baseClassName: 'text-sm text-foreground opacity-90',
});
AlertDescription.displayName = 'AlertDescription';

// Need to import cn locally since it's used inside the render
import { cn } from '../../lib/utils';
