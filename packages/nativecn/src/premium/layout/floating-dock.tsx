import React from 'react';
import { View, Pressable, type ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { useHaptics } from '../../hooks/use-haptics';

export interface FloatingDockItem {
  icon: React.ReactNode;
  onPress: () => void;
  label?: string;
}

export interface FloatingDockProps extends ViewProps {
  items: FloatingDockItem[];
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const FloatingDock = React.forwardRef<React.ElementRef<typeof View>, FloatingDockProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('absolute bottom-8 self-center rounded-2xl bg-background/80 p-2 border border-border shadow-lg flex-row items-center gap-2', className)}
        style={{ backdropFilter: 'blur(10px)' } as any}
        {...props}
      >
        {items.map((item, index) => (
          <DockItem key={index} item={item} />
        ))}
      </View>
    );
  }
);
FloatingDock.displayName = 'FloatingDock';

const DockItem = ({ item }: { item: FloatingDockItem }) => {
  const triggerHaptic = useHaptics();
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  return (
    <AnimatedPressable
      onPressIn={() => {
        triggerHaptic('light');
        scale.value = withSpring(1.2);
        translateY.value = withSpring(-10);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
        translateY.value = withSpring(0);
      }}
      onPress={item.onPress}
      className="h-12 w-12 items-center justify-center rounded-xl bg-accent hover:bg-accent/80 transition-colors"
    >
      {item.icon}
    </AnimatedPressable>
  );
};
