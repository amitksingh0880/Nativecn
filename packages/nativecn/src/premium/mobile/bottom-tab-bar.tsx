import React, { useState } from 'react';
import { View, Pressable, type ViewProps, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, interpolateColor, useSharedValue } from 'react-native-reanimated';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';
import { useThemeContext } from '../../context/theme-context';

export interface BottomTabBarItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

export interface BottomTabBarProps extends ViewProps {
  items: BottomTabBarItem[];
  activeKey: string;
  onTabPress: (key: string) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const BottomTabBar = React.forwardRef<React.ElementRef<typeof View>, BottomTabBarProps>(
  ({ className, items, activeKey, onTabPress, ...props }, ref) => {
    const triggerHaptic = useHaptics();
    const springConfig = useSpring('snappy');
    const { theme } = useThemeContext();
    const [containerWidth, setContainerWidth] = useState(SCREEN_WIDTH);

    const activeIndex = Math.max(0, items.findIndex(i => i.key === activeKey));
    const tabWidth = containerWidth / items.length;

    const indicatorStyle = useAnimatedStyle(() => {
      return {
        width: withSpring(tabWidth - 24, springConfig),
        transform: [{ translateX: withSpring(activeIndex * tabWidth + 12, springConfig) }],
      };
    }, [activeIndex, tabWidth, springConfig]);

    return (
      <View
        ref={ref}
        className={cn(
          'flex-row items-center w-full bg-background border-t border-border pb-safe pt-2',
          className
        )}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        {...props}
      >
        <Animated.View
          className="absolute top-2 h-10 rounded-full bg-primary/10"
          style={indicatorStyle}
        />
        
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <Pressable
              key={item.key}
              onPress={() => {
                triggerHaptic('selection');
                onTabPress(item.key);
              }}
              className="flex-1 items-center justify-center h-12"
            >
              <View className={cn("mb-1", isActive ? "text-primary" : "text-muted-foreground")}>
                {item.icon}
              </View>
              <Text className={cn("text-[10px] font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  }
);
BottomTabBar.displayName = 'BottomTabBar';
