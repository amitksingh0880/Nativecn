import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';

export const isNative = isIOS || isAndroid;

/**
 * Platform-specific class name helper.
 * Selectively applies classes based on the current platform.
 */
export function platformClasses(classes: {
  ios?: string;
  android?: string;
  web?: string;
  native?: string;
  default?: string;
}): string {
  if (isIOS && classes.ios) return classes.ios;
  if (isAndroid && classes.android) return classes.android;
  if (isWeb && classes.web) return classes.web;
  if (isNative && classes.native) return classes.native;
  return classes.default || '';
}
