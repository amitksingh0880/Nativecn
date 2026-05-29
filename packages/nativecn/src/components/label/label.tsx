import React from 'react';
import { createComponent } from '../../lib/create-component';
import { Text, type TextProps } from '../typography';

const labelVariants = 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';

export interface LabelProps extends TextProps {}

export const Label = createComponent<React.ElementRef<typeof Text>, LabelProps>({
  Component: Text,
  baseClassName: labelVariants,
});
Label.displayName = 'Label';
