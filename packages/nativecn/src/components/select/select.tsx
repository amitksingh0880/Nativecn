import React, { forwardRef, useState } from 'react';
import { View, Pressable, Modal, type ViewProps, type LayoutRectangle } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { ChevronDown, Check } from 'lucide-react-native';
import { useControllableState } from '../../hooks/use-controllable';
import { cn } from '../../lib/utils';
import { Text } from '../typography';
import { useHaptics } from '../../hooks/use-haptics';
import { useThemeContext } from '../../context/theme-context';

const SelectContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
  onValueChange: (value: string) => void;
  triggerLayout: LayoutRectangle | null;
  setTriggerLayout: (layout: LayoutRectangle | null) => void;
} | null>(null);

export const Select = ({ open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, children }: any) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  });
  
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue || '',
    onChange: onValueChange,
  });

  const [triggerLayout, setTriggerLayout] = useState<LayoutRectangle | null>(null);

  return (
    <SelectContext.Provider value={{ open, onOpenChange: setOpen, value, onValueChange: setValue, triggerLayout, setTriggerLayout }}>
      {children}
    </SelectContext.Provider>
  );
};

export const SelectTrigger = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error('SelectTrigger must be used within Select');

    return (
      <View
        ref={ref}
        collapsable={false}
        onLayout={(e) => {
          (e.target as any).measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
            context.setTriggerLayout({ x: pageX, y: pageY, width, height });
          });
        }}
        className={cn(
          'flex h-10 w-full flex-row items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
      >
        <Pressable className="flex-1 flex-row justify-between items-center" onPress={() => context.onOpenChange(true)} {...props}>
          {children}
          <ChevronDown size={16} className="text-muted-foreground opacity-50" />
        </Pressable>
      </View>
    );
  }
);
SelectTrigger.displayName = 'SelectTrigger';

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const context = React.useContext(SelectContext);
  return (
    <Text className={cn('text-sm', !context?.value ? 'text-muted-foreground' : 'text-foreground')} numberOfLines={1}>
      {context?.value || placeholder}
    </Text>
  );
};

export const SelectContent = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error('SelectContent must be used within Select');

    if (!context.triggerLayout) return null;

    const { x, y, width, height } = context.triggerLayout;

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
              top: y + height + 4,
              left: x,
              width: width,
            }}
            className={cn(
              'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
              className
            )}
            {...props}
          >
            <View className="p-1">{children}</View>
          </Animated.View>
        </View>
      </Modal>
    );
  }
);
SelectContent.displayName = 'SelectContent';

export const SelectItem = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable> & { value: string; label: string }>(
  ({ className, value, label, onPress, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    const triggerHaptic = useHaptics();
    const { theme } = useThemeContext();

    const isSelected = context?.value === value;

    return (
      <Pressable
        ref={ref}
        onPress={(e) => {
          triggerHaptic('selection');
          context?.onValueChange(value);
          context?.onOpenChange(false);
          onPress?.(e);
        }}
        className={cn(
          'relative flex w-full flex-row cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground',
          isSelected ? 'bg-accent' : '',
          className
        )}
        {...props}
      >
        <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check size={16} color={theme.foreground as string} />}
        </View>
        <Text className="text-sm font-medium text-foreground">{label}</Text>
      </Pressable>
    );
  }
);
SelectItem.displayName = 'SelectItem';
