import React from 'react';
import { View, Pressable, type ViewProps } from 'react-native';
import { ChevronRight, MoreHorizontal } from 'lucide-react-native';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

export const Breadcrumb = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ ...props }, ref) => <View ref={ref} {...props} />
);
Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbList = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        'flex flex-row flex-wrap items-center break-words text-sm text-muted-foreground sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<React.ElementRef<typeof Pressable>, React.ComponentPropsWithoutRef<typeof Pressable>>(
  ({ className, children, ...props }, ref) => {
    return (
      <Pressable ref={ref} className={cn('transition-colors hover:text-foreground', className)} {...props}>
        {typeof children === 'string' ? <Text className="text-sm text-muted-foreground hover:text-foreground transition-colors">{children}</Text> : children}
      </Pressable>
    );
  }
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      role="link"
      aria-disabled={true}
      aria-current="page"
      className={cn('text-sm font-normal text-foreground', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = ({ children, className, ...props }: ViewProps) => (
  <View role="presentation" aria-hidden={true} className={cn('px-1', className)} {...props}>
    {children ?? <ChevronRight size={14} className="text-muted-foreground" />}
  </View>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const BreadcrumbEllipsis = ({ className, ...props }: ViewProps) => (
  <View
    role="presentation"
    aria-hidden={true}
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal size={16} className="text-muted-foreground" />
  </View>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';
