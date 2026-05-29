import React, { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

export const Table = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View className="w-full">
      <View
        ref={ref}
        className={cn('w-full max-w-full flex-col text-sm', className)}
        {...props}
      />
    </View>
  )
);
Table.displayName = 'Table';

export const TableHeader = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex-row border-b border-border bg-muted/50', className)} {...props} />
  )
);
TableHeader.displayName = 'TableHeader';

export const TableBody = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex-col', className)} {...props} />
  )
);
TableBody.displayName = 'TableBody';

export const TableFooter = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex-row border-t border-border bg-muted/50 font-medium', className)} {...props} />
  )
);
TableFooter.displayName = 'TableFooter';

export const TableRow = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn('flex-row border-b border-border transition-colors hover:bg-muted/50', className)}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

export const TableHead = forwardRef<React.ElementRef<typeof View>, ViewProps & { title: string }>(
  ({ className, title, ...props }, ref) => (
    <View
      ref={ref}
      className={cn('h-12 flex-1 justify-center px-4 align-middle font-medium', className)}
      {...props}
    >
      <Text className="text-muted-foreground font-semibold">{title}</Text>
    </View>
  )
);
TableHead.displayName = 'TableHead';

export const TableCell = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => (
    <View ref={ref} className={cn('flex-1 justify-center p-4 align-middle', className)} {...props}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </View>
  )
);
TableCell.displayName = 'TableCell';
