import React, { forwardRef, useState } from 'react';
import { View, Pressable, type ViewProps, type PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { useControllableState } from '../../hooks/use-controllable';

const CollapsibleContext = React.createContext<{
  isOpen: boolean;
  toggle: () => void;
} | null>(null);

export interface CollapsibleProps extends ViewProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Collapsible = forwardRef<React.ElementRef<typeof View>, CollapsibleProps>(
  ({ className, open: openProp, defaultOpen, onOpenChange, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: onOpenChange,
    });

    return (
      <CollapsibleContext.Provider value={{ isOpen, toggle: () => setIsOpen(!isOpen) }}>
        <View ref={ref} className={cn('', className)} {...props}>
          {children}
        </View>
      </CollapsibleContext.Provider>
    );
  }
);
Collapsible.displayName = 'Collapsible';

export const CollapsibleTrigger = forwardRef<React.ElementRef<typeof Pressable>, PressableProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(CollapsibleContext);
    if (!context) throw new Error('CollapsibleTrigger must be used within Collapsible');

    return (
      <Pressable ref={ref} onPress={context.toggle} className={className} {...props}>
        {children}
      </Pressable>
    );
  }
);
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

export const CollapsibleContent = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(CollapsibleContext);
    if (!context) throw new Error('CollapsibleContent must be used within Collapsible');

    const [contentHeight, setContentHeight] = useState(0);
    const height = useSharedValue(context.isOpen ? contentHeight : 0);
    const opacity = useSharedValue(context.isOpen ? 1 : 0);
    const springConfig = useSpring('snappy');

    React.useEffect(() => {
      height.value = withSpring(context.isOpen ? contentHeight : 0, springConfig);
      opacity.value = withSpring(context.isOpen ? 1 : 0, springConfig);
    }, [context.isOpen, contentHeight, springConfig]);

    const animatedStyle = useAnimatedStyle(() => ({
      height: height.value,
      opacity: opacity.value,
    }));

    return (
      <Animated.View style={[animatedStyle, { overflow: 'hidden' }]}>
        <View
          ref={ref}
          onLayout={(e) => {
            const h = e.nativeEvent.layout.height;
            if (h > 0 && contentHeight !== h) {
              setContentHeight(h);
              if (context.isOpen) height.value = h;
            }
          }}
          className={className}
          {...props}
        >
          {children}
        </View>
      </Animated.View>
    );
  }
);
CollapsibleContent.displayName = 'CollapsibleContent';
