import React, { forwardRef, createContext, useContext } from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { Toggle } from '../toggle';
import { useControllableState } from '../../hooks/use-controllable';

const ToggleGroupContext = createContext<{
  type: 'single' | 'multiple';
  value: string | string[];
  onValueChange: (value: string) => void;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
} | null>(null);

export interface ToggleGroupProps extends ViewProps {
  type: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: any) => void;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export const ToggleGroup = forwardRef<React.ElementRef<typeof View>, ToggleGroupProps>(
  ({ className, type, value: valueProp, defaultValue, onValueChange, variant, size, children, ...props }, ref) => {
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue || (type === 'single' ? '' : []),
      onChange: onValueChange,
    });

    const handleValueChange = (itemValue: string) => {
      if (type === 'single') {
        setValue(value === itemValue ? '' : itemValue);
      } else {
        const arr = value as string[];
        setValue(
          arr.includes(itemValue)
            ? arr.filter((v) => v !== itemValue)
            : [...arr, itemValue]
        );
      }
    };

    return (
      <ToggleGroupContext.Provider value={{ type, value, onValueChange: handleValueChange, variant, size }}>
        <View ref={ref} className={cn('flex flex-row items-center justify-center gap-1', className)} {...props}>
          {children}
        </View>
      </ToggleGroupContext.Provider>
    );
  }
);
ToggleGroup.displayName = 'ToggleGroup';

export interface ToggleGroupItemProps extends Omit<React.ComponentPropsWithoutRef<typeof Toggle>, 'pressed' | 'onPressedChange'> {
  value: string;
}

export const ToggleGroupItem = forwardRef<React.ElementRef<typeof Toggle>, ToggleGroupItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = useContext(ToggleGroupContext);
    if (!context) throw new Error('ToggleGroupItem must be used within a ToggleGroup');

    const isPressed =
      context.type === 'single'
        ? context.value === value
        : (context.value as string[]).includes(value);

    return (
      <Toggle
        ref={ref}
        variant={context.variant}
        size={context.size}
        pressed={isPressed}
        onPressedChange={() => context.onValueChange(value)}
        className={className}
        {...props}
      >
        {children}
      </Toggle>
    );
  }
);
ToggleGroupItem.displayName = 'ToggleGroupItem';

import { cn } from '../../lib/utils';
