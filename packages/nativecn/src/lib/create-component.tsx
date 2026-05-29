import React, { forwardRef } from 'react';
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { cn } from './utils';

/**
 * A highly reusable component factory that automatically handles:
 * - ref forwarding
 * - tailwind class merging via `cn()`
 * - default base classes
 * - CVA variant resolution (if a variant function is provided)
 */

export interface CreateComponentOptions<TProps, TVariants> {
  /** The base React Native component to wrap (e.g. View, Text, Pressable) */
  Component: React.ElementType;
  /** Base tailwind classes always applied to this component */
  baseClassName?: string;
  /** CVA variant function for prop-driven styles */
  variants?: (props: any) => string;
  /** Default props to apply */
  defaultProps?: Partial<TProps>;
}

export function createComponent<
  TRef,
  TProps extends { className?: string; style?: any }
>(
  options: CreateComponentOptions<TProps, any>
) {
  const { Component, baseClassName = '', variants, defaultProps = {} } = options;

  const ForwardedComponent = forwardRef<TRef, TProps>((props, ref) => {
    // Merge default props with passed props
    const mergedProps = { ...defaultProps, ...props };
    const { className, style, ...restProps } = mergedProps;

    // Resolve variants if the CVA function is provided
    const variantClassName = variants ? variants(mergedProps) : '';

    // Merge base classes, variant classes, and user-passed classes
    const finalClassName = cn(baseClassName, variantClassName, className);

    return (
      <Component
        ref={ref}
        className={finalClassName || undefined}
        style={style}
        {...restProps}
      />
    );
  });

  ForwardedComponent.displayName = `NativecnComponent(${(Component as any).displayName || (Component as any).name || 'Unknown'})`;

  return ForwardedComponent;
}
