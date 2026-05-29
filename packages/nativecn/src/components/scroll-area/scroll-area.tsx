import React from 'react';
import { ScrollView, type ScrollViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface ScrollAreaProps extends ScrollViewProps {
  orientation?: 'vertical' | 'horizontal';
}

export const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollView>, ScrollAreaProps>(
  ({ className, orientation = 'vertical', children, ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    
    return (
      <ScrollView
        ref={ref}
        horizontal={isHorizontal}
        showsVerticalScrollIndicator={!isHorizontal}
        showsHorizontalScrollIndicator={isHorizontal}
        className={cn('flex shrink-0', className)}
        {...props}
      >
        {children}
      </ScrollView>
    );
  }
);
ScrollArea.displayName = 'ScrollArea';
