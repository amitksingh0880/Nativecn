import { useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import type { HapticFeedbackType } from '../lib/types';

/**
 * Triggers haptic feedback based on our semantic intent tokens.
 * Fails silently on platforms without haptic support (e.g., Web).
 */
export function useHaptics() {
  const trigger = useCallback((type: HapticFeedbackType = 'selection') => {
    if (Platform.OS === 'web') return;

    try {
      switch (type) {
        case 'light':
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          break;
        case 'medium':
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          break;
        case 'heavy':
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          break;
        case 'selection':
          Haptics.selectionAsync();
          break;
        case 'success':
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          break;
        case 'warning':
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          break;
        case 'error':
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          break;
        case 'none':
        default:
          break;
      }
    } catch (e) {
      // Ignore haptic errors on unsupported devices
    }
  }, []);

  return trigger;
}
