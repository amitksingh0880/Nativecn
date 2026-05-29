import React, { forwardRef } from 'react';
import { View, Pressable, type ViewProps, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

export const NavigationMenu = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => (
    <View
      ref={ref}
      className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
      {...props}
    >
      {children}
    </View>
  )
);
NavigationMenu.displayName = 'NavigationMenu';

export const NavigationMenuList = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn('group flex flex-1 flex-row list-none items-center justify-center space-x-1', className)}
      {...props}
    />
  )
);
NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={className} {...props} />
  )
);
NavigationMenuItem.displayName = 'NavigationMenuItem';

export const NavigationMenuTrigger = forwardRef<React.ElementRef<typeof Pressable>, PressableProps>(
  ({ className, children, ...props }, ref) => (
    <Pressable
      ref={ref}
      className={cn(
        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      {typeof children === 'string' ? <Text className="font-medium">{children}</Text> : children}
    </Pressable>
  )
);
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuLink = forwardRef<React.ElementRef<typeof Pressable>, PressableProps & { active?: boolean }>(
  ({ className, active, children, ...props }, ref) => (
    <Pressable
      ref={ref}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        active && 'bg-accent/50',
        className
      )}
      {...props}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Pressable>
  )
);
NavigationMenuLink.displayName = 'NavigationMenuLink';
