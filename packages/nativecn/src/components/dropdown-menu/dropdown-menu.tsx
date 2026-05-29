import React, { forwardRef, useState } from 'react';
import { View, Pressable, Modal, type ViewProps, type LayoutRectangle } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { cn } from '../../lib/utils';
import { Text } from '../typography';
import { useHaptics } from '../../hooks/use-haptics';

const DropdownMenuContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerLayout: LayoutRectangle | null;
  setTriggerLayout: (layout: LayoutRectangle | null) => void;
} | null>(null);

export const DropdownMenu = ({ open: openProp, defaultOpen, onOpenChange, children }: any) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  });
  const [triggerLayout, setTriggerLayout] = useState<LayoutRectangle | null>(null);

  return (
    <DropdownMenuContext.Provider value={{ open, onOpenChange: setOpen, triggerLayout, setTriggerLayout }}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

export const DropdownMenuTrigger = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ children, ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);
    if (!context) throw new Error('DropdownMenuTrigger must be used within DropdownMenu');

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
        <Pressable onPress={() => context.onOpenChange(true)} {...props}>
          {children}
        </Pressable>
      </View>
    );
  }
);
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export const DropdownMenuContent = forwardRef<React.ElementRef<typeof View>, ViewProps & { align?: 'start' | 'center' | 'end' }>(
  ({ className, children, align = 'center', ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);
    if (!context) throw new Error('DropdownMenuContent must be used within DropdownMenu');

    if (!context.triggerLayout) return null;

    const { x, y, width, height } = context.triggerLayout;
    
    // Very basic positioning relative to the trigger.
    let leftPosition = x;
    if (align === 'center') leftPosition = x + width / 2;
    if (align === 'end') leftPosition = x + width;

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
              top: y + height + 8,
              left: leftPosition,
              transform: align === 'center' ? [{ translateX: '-50%' }] : align === 'end' ? [{ translateX: '-100%' }] : [],
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
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable> & { inset?: boolean }>(
  ({ className, inset, onPress, children, ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);
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
          'relative flex flex-row cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuSeparator = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
  )
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export const DropdownMenuLabel = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn('px-2 py-1.5 text-sm font-semibold text-popover-foreground', inset && 'pl-8', className)}
      {...props}
    />
  )
);
DropdownMenuLabel.displayName = 'DropdownMenuLabel';
