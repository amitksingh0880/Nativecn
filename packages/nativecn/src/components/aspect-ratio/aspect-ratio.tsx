import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface AspectRatioProps extends ViewProps {
  ratio?: number;
}

export const AspectRatio = React.forwardRef<React.ElementRef<typeof View>, AspectRatioProps>(
  ({ className, ratio = 1, style, children, ...props }, ref) => {
    return (
      <View ref={ref} className={cn('w-full', className)} style={[style, { aspectRatio: ratio }]} {...props}>
        {children}
      </View>
    );
  }
);
AspectRatio.displayName = 'AspectRatio';
