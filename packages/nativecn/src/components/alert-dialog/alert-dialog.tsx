import React, { forwardRef } from 'react';
import { View, Modal, Pressable, type ViewProps } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const AlertDialogContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

export interface AlertDialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const AlertDialog = ({ open: openProp, defaultOpen, onOpenChange, children }: AlertDialogProps) => {
  const [open, setOpen] = useControllableState<boolean>({
    ...(openProp !== undefined ? { prop: openProp } : {}),
    defaultProp: defaultOpen || false,
    ...(onOpenChange !== undefined ? { onChange: onOpenChange } : {}),
  });

  return (
    <AlertDialogContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

export const AlertDialogTrigger = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable>>(
  ({ children, onPress, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error('AlertDialogTrigger must be used within AlertDialog');

    return (
      <Pressable ref={ref} onPress={(e) => { context.onOpenChange(true); onPress?.(e); }} {...props}>
        {children}
      </Pressable>
    );
  }
);
AlertDialogTrigger.displayName = 'AlertDialogTrigger';

export interface AlertDialogContentProps extends ViewProps {
  overlayClassName?: string;
}

export const AlertDialogContent = forwardRef<React.ElementRef<typeof View>, AlertDialogContentProps>(
  ({ className, overlayClassName, children, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error('AlertDialogContent must be used within AlertDialog');

    return (
      <Modal
        visible={context.open}
        transparent
        animationType="none"
        onRequestClose={() => context.onOpenChange(false)}
      >
        <View className={cn('flex-1 items-center justify-center', overlayClassName)}>
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            className="absolute inset-0 bg-black/80"
          >
            {/* Note: Unlike Dialog, clicking the backdrop does NOT close an AlertDialog by default */}
            <View className="flex-1" />
          </Animated.View>

          <Animated.View
            entering={ZoomIn.duration(200).springify().damping(20).stiffness(200)}
            exiting={ZoomOut.duration(200)}
            ref={ref}
            className={cn(
              'z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full sm:w-[90%] w-[90%] rounded-xl mx-4',
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
AlertDialogContent.displayName = 'AlertDialogContent';

export const AlertDialogHeader = ({ className, ...props }: ViewProps) => (
  <View className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

export const AlertDialogFooter = ({ className, ...props }: ViewProps) => (
  <View className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 mt-6', className)} {...props} />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

export const AlertDialogTitle = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
  )
);
AlertDialogTitle.displayName = 'AlertDialogTitle';

export const AlertDialogDescription = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
AlertDialogDescription.displayName = 'AlertDialogDescription';

export const AlertDialogAction = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable>>(
  ({ className, onPress, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    return (
      <Pressable
        ref={ref}
        onPress={(e) => { context?.onOpenChange(false); onPress?.(e); }}
        className={cn('inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', className)}
        {...props}
      />
    );
  }
);
AlertDialogAction.displayName = 'AlertDialogAction';

export const AlertDialogCancel = forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable>>(
  ({ className, onPress, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    return (
      <Pressable
        ref={ref}
        onPress={(e) => { context?.onOpenChange(false); onPress?.(e); }}
        className={cn('inline-flex h-10 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', className)}
        {...props}
      />
    );
  }
);
AlertDialogCancel.displayName = 'AlertDialogCancel';
