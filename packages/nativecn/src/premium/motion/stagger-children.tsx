import React from 'react';
import { View, type ViewProps } from 'react-native';
import { FadeUp } from './fade-up';

export interface StaggerChildrenProps extends ViewProps {
  staggerDelay?: number;
  initialDelay?: number;
  children: React.ReactNode;
}

export const StaggerChildren = React.forwardRef<React.ElementRef<typeof View>, StaggerChildrenProps>(
  ({ className, staggerDelay = 100, initialDelay = 0, children, ...props }, ref) => {
    
    // We expect children to be an array of React Elements
    const childrenArray = React.Children.toArray(children);

    return (
      <View ref={ref} className={className} {...props}>
        {childrenArray.map((child, index) => (
          <FadeUp key={index} delay={initialDelay + index * staggerDelay}>
            {child}
          </FadeUp>
        ))}
      </View>
    );
  }
);
StaggerChildren.displayName = 'StaggerChildren';
