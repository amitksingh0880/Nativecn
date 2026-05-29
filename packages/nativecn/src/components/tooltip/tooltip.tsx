import React, { forwardRef, useState } from 'react';
import { View, Pressable, Modal, type ViewProps, type LayoutRectangle } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const TooltipContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerLayout: LayoutRectangle | null;
  setTriggerLayout: (layout: LayoutRectangle | null) => void;
} | null>(null);

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const Tooltip = ({ open: openProp, defaultOpen, onOpenChange, children, delayDuration = 300 }: any) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  });
  const [triggerLayout, setTriggerLayout] = useState<LayoutRectangle | null>(null);

  return (
    <TooltipContext.Provider value={{ open, onOpenChange: setOpen, triggerLayout, setTriggerLayout }}>
      {children}
    </TooltipContext.Provider>
  );
};

export const TooltipTrigger = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ children, ...props }, ref) => {
    const context = React.useContext(TooltipContext);
    if (!context) throw new Error('TooltipTrigger must be used within Tooltip');

    return (
      <View
        ref={ref}
        collapsable={false}
        onLayout={(e) => {
          (e.target as any).measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
            context.setTriggerLayout({ x: pageX, y: pageY, width, height });
          });
        }}
      >
        <Pressable 
          onPress={() => context.onOpenChange(true)} 
          onLongPress={() => context.onOpenChange(true)}
          delayLongPress={200}
          {...props}
        >
          {children}
        </Pressable>
      </View>
    );
  }
);
TooltipTrigger.displayName = 'TooltipTrigger';

export const TooltipContent = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(TooltipContext);
    if (!context) throw new Error('TooltipContent must be used within Tooltip');

    if (!context.triggerLayout) return null;

    const { x, y, width } = context.triggerLayout;

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
            entering={ZoomIn.duration(200)}
            exiting={FadeOut.duration(150)}
            style={{
              position: 'absolute',
              top: y - 40, // Simple offset for now
              left: x + width / 2,
              transform: [{ translateX: '-50%' }],
            }}
            className={cn(
              'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
              className
            )}
            {...props}
          >
            <Text className="text-xs font-medium text-popover-foreground">{children as any}</Text>
          </Animated.View>
        </View>
      </Modal>
    );
  }
);
TooltipContent.displayName = 'TooltipContent';
