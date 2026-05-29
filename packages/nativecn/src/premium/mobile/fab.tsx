import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface FabProps extends PressableProps {
  icon: React.ReactNode;
  label?: string;
  isExpanded?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Fab = React.forwardRef<React.ElementRef<typeof Pressable>, FabProps>(
  ({ className, icon, label, isExpanded = false, position = 'bottom-right', onPress, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const springConfig = useSpring('bouncy');
    const pressed = useSharedValue(0);

    const handlePressIn = () => {
      pressed.value = 1;
    };
    
    const handlePressOut = () => {
      pressed.value = 0;
    };

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: withSpring(pressed.value ? 0.9 : 1, springConfig) }],
      };
    });

    const getPositionClasses = () => {
      switch (position) {
        case 'bottom-left': return 'absolute bottom-6 left-6';
        case 'bottom-center': return 'absolute bottom-6 self-center';
        case 'bottom-right':
        default: return 'absolute bottom-6 right-6';
      }
    };

    return (
      <AnimatedPressable
        ref={ref}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={(e) => {
          triggerHaptic('light');
          onPress?.(e);
        }}
        className={cn(
          'flex-row items-center justify-center rounded-full bg-primary p-4 shadow-lg active:bg-primary/90',
          getPositionClasses(),
          className
        )}
        style={animatedStyle}
        {...props}
      >
        {icon}
        {label && isExpanded && (
          <Text className="ml-2 font-semibold text-primary-foreground">
            {label}
          </Text>
        )}
      </AnimatedPressable>
    );
  }
);
Fab.displayName = 'Fab';
