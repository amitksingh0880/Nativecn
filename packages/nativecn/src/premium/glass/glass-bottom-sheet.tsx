import React from 'react';
import { View, StyleSheet, type ViewProps, Modal, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { useThemeContext } from '../../context/theme-context';

export interface GlassBottomSheetProps extends ViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const GlassBottomSheet = React.forwardRef<React.ElementRef<typeof View>, GlassBottomSheetProps>(
  ({ className, open, onOpenChange, children, ...props }, ref) => {
    const { isDark } = useThemeContext();

    return (
      <Modal
        visible={open}
        transparent
        animationType="none"
        onRequestClose={() => onOpenChange(false)}
      >
        <View className="flex-1 justify-end">
          <Pressable className="absolute inset-0 bg-black/40" onPress={() => onOpenChange(false)} />
          
          <Animated.View
            entering={SlideInDown.springify().damping(20).stiffness(200)}
            exiting={SlideOutDown.duration(300)}
            ref={ref}
            className={cn('w-full overflow-hidden rounded-t-3xl border-t border-white/20 shadow-2xl', className)}
            {...props}
          >
            <BlurView
              intensity={80}
              tint={isDark ? 'dark' : 'light'}
              style={StyleSheet.absoluteFill}
            />
            <View className="p-6 pb-safe relative z-10">
              <View className="w-12 h-1.5 bg-muted-foreground/30 rounded-full self-center mb-6" />
              {children}
            </View>
          </Animated.View>
        </View>
      </Modal>
    );
  }
);
GlassBottomSheet.displayName = 'GlassBottomSheet';
