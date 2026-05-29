import React, { useEffect } from 'react';
import { View, Pressable, type ViewProps, SafeAreaView } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import { useToastContext, type ToastProps } from '../../context/toast-context';
import { cn } from '../../lib/utils';
import { Text } from '../typography';
import { useHaptics } from '../../hooks/use-haptics';

const ToastItem = ({ toast, onDismiss }: { toast: ToastProps; onDismiss: (id: string) => void }) => {
  const translateY = useSharedValue(-100);
  const opacity = useSharedValue(0);
  const triggerHaptic = useHaptics();

  useEffect(() => {
    // Entrance animation
    translateY.value = withSpring(0, { damping: 15, stiffness: 200 });
    opacity.value = withTiming(1, { duration: 300 });

    // Haptic feedback based on type
    if (toast.type === 'error') triggerHaptic('error');
    else if (toast.type === 'success') triggerHaptic('success');
    else if (toast.type === 'warning') triggerHaptic('warning');
    else triggerHaptic('light');

    // Setup exit animation manually if it wasn't auto-dismissed early
    return () => {
      // Cleanup happens via the dismiss function animating out
    };
  }, []);

  const handleDismiss = () => {
    translateY.value = withTiming(-100, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 }, () => {
      runOnJS(onDismiss)(toast.id);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const getVariantStyles = () => {
    switch (toast.type) {
      case 'destructive':
      case 'error':
        return 'bg-destructive border-destructive text-destructive-foreground';
      case 'success':
        return 'bg-success border-success text-success-foreground';
      case 'warning':
        return 'bg-warning border-warning text-warning-foreground';
      default:
        return 'bg-background border-border text-foreground';
    }
  };

  return (
    <Animated.View
      style={animatedStyle}
      className={cn(
        'pointer-events-auto relative w-full flex-row items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
        getVariantStyles()
      )}
    >
      <View className="flex-1 flex-col gap-1">
        <Text className={cn('text-sm font-semibold', toast.type && toast.type !== 'default' ? 'text-white' : 'text-foreground')}>
          {toast.title}
        </Text>
        {toast.description && (
          <Text className={cn('text-sm opacity-90', toast.type && toast.type !== 'default' ? 'text-white' : 'text-muted-foreground')}>
            {toast.description}
          </Text>
        )}
      </View>

      {toast.action && (
        <Pressable
          onPress={toast.action.onPress}
          className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Text className={toast.type && toast.type !== 'default' ? 'text-white' : 'text-foreground'}>
            {toast.action.label}
          </Text>
        </Pressable>
      )}

      <Pressable
        onPress={handleDismiss}
        className="absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100"
      >
        <X size={16} color={toast.type && toast.type !== 'default' ? 'white' : 'gray'} />
      </Pressable>
    </Animated.View>
  );
};

export const ToastViewport = ({ className, ...props }: ViewProps) => {
  const { toasts, dismiss } = useToastContext();

  return (
    <SafeAreaView pointerEvents="box-none" className="absolute inset-0 z-50">
      <View
        pointerEvents="box-none"
        className={cn(
          'flex-col items-center justify-start gap-2 p-4 pt-10 sm:justify-end sm:p-6 w-full max-w-[420px] self-center',
          className
        )}
        {...props}
      >
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </View>
    </SafeAreaView>
  );
};
