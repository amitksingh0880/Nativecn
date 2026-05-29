import React from 'react';
import { View, type ViewProps } from 'react-native';
import { createComponent } from '../../lib/create-component';
import { Text } from '../typography';

const Card = createComponent<View, ViewProps>({
  Component: View,
  baseClassName: 'rounded-lg border border-border bg-card shadow-sm',
});

const CardHeader = createComponent<View, ViewProps>({
  Component: View,
  baseClassName: 'flex flex-col space-y-1.5 p-6',
});

const CardTitle = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={`text-sm text-muted-foreground ${className}`} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = createComponent<View, ViewProps>({
  Component: View,
  baseClassName: 'p-6 pt-0',
});

const CardFooter = createComponent<View, ViewProps>({
  Component: View,
  baseClassName: 'flex flex-row items-center p-6 pt-0',
});

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
