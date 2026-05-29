import React, { forwardRef, useState } from 'react';
import { View, Pressable, Modal, type ViewProps, type LayoutRectangle, type GestureResponderEvent } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { cn } from '../../lib/utils';
import { Text } from '../typography';
import { useHaptics } from '../../hooks/use-haptics';

const ContextMenuContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerPosition: { x: number; y: number } | null;
  setTriggerPosition: (pos: { x: number; y: number } | null) => void;
} | null>(null);

export const ContextMenu = ({ open: openProp, defaultOpen, onOpenChange, children }: any) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  });
  const [triggerPosition, setTriggerPosition] = useState<{ x: number; y: number } | null>(null);

  return (
    <ContextMenuContext.Provider value={{ open, onOpenChange: setOpen, triggerPosition, setTriggerPosition }}>
      {children}
    </ContextMenuContext.Provider>
  );
};

export const ContextMenuTrigger = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ children, ...props }, ref) => {
    const context = React.useContext(ContextMenuContext);
    if (!context) throw new Error('ContextMenuTrigger must be used within ContextMenu');
    const triggerHaptic = useHaptics();

    const handleLongPress = (e: GestureResponderEvent) => {
      triggerHaptic('heavy');
      const { pageX, pageY } = e.nativeEvent;
      context.setTriggerPosition({ x: pageX, y: pageY });
      context.onOpenChange(true);
    };

    return (
      <View ref={ref} collapsable={false}>
        <Pressable onLongPress={handleLongPress} delayLongPress={500} {...props}>
          {children}
        </Pressable>
      </View>
    );
  }
);
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

export const ContextMenuContent = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(ContextMenuContext);
    if (!context) throw new Error('ContextMenuContent must be used within ContextMenu');

    if (!context.triggerPosition) return null;

    const { x, y } = context.triggerPosition;

    return (
      <Modal
        visible={context.open}
        transparent
        animationType="none"
        onRequestClose={() => context.onOpenChange(false)}
      >
        <View className="flex-1">
          <Pressable className="absolute inset-0" onPress={() => context.onOpenChange(false)} />
          <Animated.View
            entering={ZoomIn.duration(150)}
            exiting={FadeOut.duration(100)}
            style={{
              position: 'absolute',
              top: y,
              left: x,
            }}
            className={cn(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              className
            )}
            {...props}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  }
);
ContextMenuContent.displayName = 'ContextMenuContent';

export const ContextMenuItem = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable> & { inset?: boolean }>(
  ({ className, inset, onPress, children, ...props }, ref) => {
    const context = React.useContext(ContextMenuContext);
    const triggerHaptic = useHaptics();

    return (
      <Pressable
        ref={ref}
        onPress={(e) => {
          triggerHaptic('selection');
          onPress?.(e);
          context?.onOpenChange(false);
        }}
        className={cn(
          'relative flex flex-row cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
          inset && 'pl-8',
          className
        )}
        {...props}
      >
        <Text className="text-sm font-medium text-popover-foreground">{children as any}</Text>
      </Pressable>
    );
  }
);
ContextMenuItem.displayName = 'ContextMenuItem';
