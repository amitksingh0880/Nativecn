import React, { forwardRef, useState } from 'react';
import { View, Pressable, type ViewProps, type PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useControllableState } from '../../hooks/use-controllable';
import { useHaptics } from '../../hooks/use-haptics';
import { useSpring } from '../../hooks/use-spring';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

export interface TabsProps extends ViewProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs = forwardRef<React.ElementRef<typeof View>, TabsProps>(
  ({ className, value: valueProp, defaultValue, onValueChange, children, ...props }, ref) => {
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue || '',
      onChange: onValueChange,
    });

    return (
      <TabsContext.Provider value={{ value, onValueChange: setValue }}>
        <View ref={ref} className={cn('w-full', className)} {...props}>
          {children}
        </View>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = 'Tabs';

export const TabsList = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        'inline-flex h-10 flex-row items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </View>
  )
);
TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends PressableProps {
  value: string;
}

export const TabsTrigger = forwardRef<React.ElementRef<typeof Pressable>, TabsTriggerProps>(
  ({ className, value, disabled, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('TabsTrigger must be used within Tabs');
    const triggerHaptic = useHaptics();

    const isActive = context.value === value;

    const handlePress = () => {
      if (disabled) return;
      if (!isActive) {
        triggerHaptic('selection');
        context.onValueChange(value);
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        className={cn(
          'inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all',
          isActive ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground',
          disabled && 'opacity-50',
          className
        )}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text className={cn('text-sm font-medium', isActive ? 'text-foreground' : 'text-muted-foreground')}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends ViewProps {
  value: string;
}

export const TabsContent = forwardRef<React.ElementRef<typeof View>, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('TabsContent must be used within Tabs');

    if (context.value !== value) return null;

    return (
      <View
        ref={ref}
        className={cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className)}
        {...props}
      >
        {children}
      </View>
    );
  }
);
TabsContent.displayName = 'TabsContent';
