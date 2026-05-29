import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface BentoGridProps extends ViewProps {}

export const BentoGrid = React.forwardRef<React.ElementRef<typeof View>, BentoGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          'flex flex-row flex-wrap gap-4 mx-auto w-full max-w-7xl',
          className
        )}
        {...props}
      >
        {children}
      </View>
    );
  }
);
BentoGrid.displayName = 'BentoGrid';

export interface BentoCardProps extends ViewProps {
  colSpan?: 1 | 2 | 3 | 4;
}

export const BentoCard = React.forwardRef<React.ElementRef<typeof View>, BentoCardProps>(
  ({ className, colSpan = 1, children, ...props }, ref) => {
    // Very basic mapping for flex-basis based on a 4-column desktop grid
    // For React Native, percentage widths work best. We'll subtract the gap roughly.
    const basisMap = {
      1: 'basis-[23%]',
      2: 'basis-[48%]',
      3: 'basis-[73%]',
      4: 'basis-[100%]',
    };

    return (
      <View
        ref={ref}
        className={cn(
          'flex-1 min-w-[280px] rounded-xl border border-border bg-card shadow-sm overflow-hidden p-6',
          basisMap[colSpan],
          className
        )}
        {...props}
      >
        {children}
      </View>
    );
  }
);
BentoCard.displayName = 'BentoCard';
