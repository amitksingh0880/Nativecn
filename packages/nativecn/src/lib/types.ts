/**
 * Shared types used across the Nativecn UI library
 */
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type AnyStyle = ViewStyle | TextStyle | ImageStyle;

export type BooleanString = 'true' | 'false';

/**
 * Common size variants used across components
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon' | 'icon-sm' | 'icon-lg';

/**
 * Common intent variants used across components
 */
export type ComponentVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'gradient'
  | 'glass';

export type HapticFeedbackType = 'none' | 'selection' | 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';
