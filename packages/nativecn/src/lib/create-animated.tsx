import React, { forwardRef } from 'react';
import Animated from 'react-native-reanimated';
import { createComponent, type CreateComponentOptions } from './create-component';

/**
 * An animated component factory.
 * Wraps a component in `Animated.createAnimatedComponent` and then applies the `createComponent` factory logic.
 */
export function createAnimatedComponent<
  TRef,
  TProps extends { className?: string; style?: any }
>(options: CreateComponentOptions<TProps, any>) {
  // First, make the underlying component animatable if it isn't already
  const AnimatableComponent = Animated.createAnimatedComponent(options.Component as any);

  // Then run it through our standard component factory
  const ForwardedComponent = createComponent<TRef, TProps>({
    ...options,
    Component: AnimatableComponent,
  });

  ForwardedComponent.displayName = `NativecnAnimated(${(options.Component as any).displayName || (options.Component as any).name || 'Unknown'})`;

  return ForwardedComponent;
}
