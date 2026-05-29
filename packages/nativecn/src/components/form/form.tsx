import React, { forwardRef, createContext, useContext } from 'react';
import { View, type ViewProps, TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const FormItemContext = createContext<{ id: string } | null>(null);

export const Form = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('space-y-6', className)} {...props} />
  )
);
Form.displayName = 'Form';

export const FormItem = forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId();
    return (
      <FormItemContext.Provider value={{ id }}>
        <View ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = 'FormItem';

export const FormLabel = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text> & { error?: boolean }>(
  ({ className, error, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          error && 'text-destructive',
          className
        )}
        {...props}
      />
    );
  }
);
FormLabel.displayName = 'FormLabel';

export const FormControl = forwardRef<React.ElementRef<typeof View>, ViewProps & { error?: boolean }>(
  ({ className, error, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      />
    );
  }
);
FormControl.displayName = 'FormControl';

export const FormDescription = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn('text-[0.8rem] text-muted-foreground', className)}
        {...props}
      />
    );
  }
);
FormDescription.displayName = 'FormDescription';

export const FormMessage = forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, children, ...props }, ref) => {
    if (!children) return null;
    return (
      <Text
        ref={ref}
        className={cn('text-[0.8rem] font-medium text-destructive', className)}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
FormMessage.displayName = 'FormMessage';
