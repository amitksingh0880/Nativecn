import React, { forwardRef } from 'react';
import { View, Modal, Pressable, type ViewProps } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import { useControllableState } from '../../hooks/use-controllable';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const SheetContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Sheet = ({ open: openProp, defaultOpen, onOpenChange, children }: SheetProps) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  });

  return (
    <SheetContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

export const SheetTrigger = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable>>(
  ({ children, onPress, ...props }, ref) => {
    const context = React.useContext(SheetContext);
    if (!context) throw new Error('SheetTrigger must be used within Sheet');

    return (
      <Pressable ref={ref} onPress={(e) => { context.onOpenChange(true); onPress?.(e); }} {...props}>
        {children}
      </Pressable>
    );
  }
);
SheetTrigger.displayName = 'SheetTrigger';

export interface SheetContentProps extends ViewProps {
  overlayClassName?: string;
  hideClose?: boolean;
}

export const SheetContent = forwardRef<React.ElementRef<typeof View>, SheetContentProps>(
  ({ className, overlayClassName, children, hideClose = false, ...props }, ref) => {
    const context = React.useContext(SheetContext);
    if (!context) throw new Error('SheetContent must be used within Sheet');

    return (
      <Modal
        visible={context.open}
        transparent
        animationType="none"
        onRequestClose={() => context.onOpenChange(false)}
      >
        <View className={cn('flex-1 justify-end', overlayClassName)}>
          <Animated.View
            entering={FadeIn.duration(300)}
            exiting={FadeOut.duration(300)}
            className="absolute inset-0 bg-black/80"
          >
            <Pressable className="flex-1" onPress={() => context.onOpenChange(false)} />
          </Animated.View>

          <Animated.View
            entering={SlideInDown.springify().damping(20).stiffness(200)}
            exiting={SlideOutDown.duration(300)}
            ref={ref}
            className={cn(
              'z-50 w-full gap-4 bg-background p-6 shadow-lg rounded-t-3xl border-t border-border mt-10',
              className
            )}
            {...props}
          >
            {/* Grab bar for aesthetics */}
            <View className="w-10 h-1 bg-muted rounded-full self-center mb-4" />
            
            {children}
            
            {!hideClose && (
              <Pressable
                onPress={() => context.onOpenChange(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
              >
                <X size={20} className="text-muted-foreground" />
              </Pressable>
            )}
          </Animated.View>
        </View>
      </Modal>
    );
  }
);
SheetContent.displayName = 'SheetContent';

export const SheetHeader = ({ className, ...props }: ViewProps) => (
  <View className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

export const SheetFooter = ({ className, ...props }: ViewProps) => (
  <View className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 mt-auto pb-8', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

export const SheetTitle = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
  )
);
SheetTitle.displayName = 'SheetTitle';

export const SheetDescription = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
SheetDescription.displayName = 'SheetDescription';
