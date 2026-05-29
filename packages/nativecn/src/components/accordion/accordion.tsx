import React, { forwardRef, useState } from 'react';
import { View, Pressable, type ViewProps, type PressableProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
} from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';
import { useSpring } from '../../hooks/use-spring';
import { useHaptics } from '../../hooks/use-haptics';
import { cn } from '../../lib/utils';
import { Text } from '../typography';
import { useControllableState } from '../../hooks/use-controllable';

export const Accordion = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('w-full', className)} {...props} />
  )
);
Accordion.displayName = 'Accordion';

const AccordionItemContext = React.createContext<{
  isExpanded: boolean;
  toggle: () => void;
} | null>(null);

export interface AccordionItemProps extends ViewProps {
  value: string;
  isExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export const AccordionItem = forwardRef<React.ElementRef<typeof View>, AccordionItemProps>(
  ({ className, value, isExpanded: isExpandedProp, onExpandedChange, children, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useControllableState({
      prop: isExpandedProp,
      defaultProp: false,
      onChange: onExpandedChange,
    });
    const triggerHaptic = useHaptics();

    const toggle = () => {
      triggerHaptic('light');
      setIsExpanded(!isExpanded);
    };

    return (
      <AccordionItemContext.Provider value={{ isExpanded, toggle }}>
        <View ref={ref} className={cn('border-b border-border', className)} {...props}>
          {children}
        </View>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends Omit<PressableProps, 'children'> {
  children?: React.ReactNode;
}

export const AccordionTrigger = forwardRef<React.ElementRef<typeof Pressable>, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionItemContext);
    if (!context) throw new Error('AccordionTrigger must be used within AccordionItem');
    const springConfig = useSpring('snappy');
    const rotation = useSharedValue(context.isExpanded ? 180 : 0);

    React.useEffect(() => {
      rotation.value = withSpring(context.isExpanded ? 180 : 0, springConfig);
    }, [context.isExpanded, springConfig]);

    const iconStyle = useAnimatedStyle(() => ({
      transform: [{ rotateZ: `${rotation.value}deg` }],
    }));

    return (
      <Pressable
        ref={ref}
        onPress={context.toggle}
        className={cn(
          'flex flex-row items-center justify-between py-4 font-medium transition-all hover:underline',
          className
        )}
        {...props}
      >
        <Text className="font-medium text-foreground">{children}</Text>
        <Animated.View style={iconStyle}>
          <ChevronDown size={16} className="text-muted-foreground shrink-0 transition-transform duration-200" />
        </Animated.View>
      </Pressable>
    );
  }
);
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionItemContext);
    if (!context) throw new Error('AccordionContent must be used within AccordionItem');

    const animatedRef = useAnimatedRef<View>();
    const height = useSharedValue(context.isExpanded ? 100 : 0); // Initially rough guess, we need to measure
    const opacity = useSharedValue(context.isExpanded ? 1 : 0);
    const springConfig = useSpring('snappy');

    const [contentHeight, setContentHeight] = useState(0);

    React.useEffect(() => {
      height.value = withSpring(context.isExpanded ? contentHeight : 0, springConfig);
      opacity.value = withSpring(context.isExpanded ? 1 : 0, springConfig);
    }, [context.isExpanded, contentHeight, springConfig]);

    const animatedStyle = useAnimatedStyle(() => ({
      height: height.value,
      opacity: opacity.value,
    }));

    return (
      <Animated.View style={[animatedStyle, { overflow: 'hidden' }]}>
        <View
          ref={animatedRef as any}
          onLayout={(e) => {
            const h = e.nativeEvent.layout.height;
            if (h > 0 && contentHeight !== h) {
              setContentHeight(h);
              if (context.isExpanded) height.value = h;
            }
          }}
          className={cn('pb-4 pt-0', className)}
          {...props}
        >
          {children}
        </View>
      </Animated.View>
    );
  }
);
AccordionContent.displayName = 'AccordionContent';
