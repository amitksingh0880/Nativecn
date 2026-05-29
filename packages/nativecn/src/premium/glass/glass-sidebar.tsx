import React from 'react';
import { View, StyleSheet, type ViewProps, Modal, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { SlideInLeft, SlideOutLeft, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { useThemeContext } from '../../context/theme-context';

export interface GlassSidebarProps extends ViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
}

export const GlassSidebar = React.forwardRef<React.ElementRef<typeof View>, GlassSidebarProps>(
  ({ className, open, onOpenChange, children, side = 'left', ...props }, ref) => {
    const { isDark } = useThemeContext();

    const entering = side === 'left' ? SlideInLeft : SlideInRight;
    const exiting = side === 'left' ? SlideOutLeft : SlideOutRight;

    return (
      <Modal
        visible={open}
        transparent
        animationType="none"
        onRequestClose={() => onOpenChange(false)}
      >
        <View className={cn('flex-1', side === 'left' ? 'justify-start items-start' : 'justify-end items-end')}>
          <Pressable className="absolute inset-0 bg-black/40" onPress={() => onOpenChange(false)} />
          
          <Animated.View
            entering={entering.springify().damping(20).stiffness(200)}
            exiting={exiting.duration(300)}
            ref={ref}
            className={cn('h-full w-[80%] max-w-sm overflow-hidden border-white/20 shadow-2xl', 
              side === 'left' ? 'rounded-r-3xl border-r' : 'rounded-l-3xl border-l',
              className
            )}
            {...props}
          >
            <BlurView
              intensity={80}
              tint={isDark ? 'dark' : 'light'}
              style={StyleSheet.absoluteFill}
            />
            <View className="flex-1 p-6 pt-safe">
              {children}
            </View>
          </Animated.View>
        </View>
      </Modal>
    );
  }
);
GlassSidebar.displayName = 'GlassSidebar';
