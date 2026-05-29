import { useReducedMotion } from 'react-native-reanimated';
import { springPresets, type SpringPreset } from '../tokens/motion';
import type { WithSpringConfig } from 'react-native-reanimated';

/**
 * Returns a reanimated spring config based on a semantic preset,
 * automatically falling back to an instant transition if the user
 * has "Reduce Motion" enabled in their OS settings.
 */
export function useSpring(preset: SpringPreset = 'smooth'): WithSpringConfig {
  const reducedMotion = useReducedMotion();
  
  if (reducedMotion) {
    return springPresets.instant;
  }
  
  return springPresets[preset];
}
