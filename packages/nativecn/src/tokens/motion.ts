/**
 * Nativecn Motion Tokens
 * All spring configs, durations, and easing functions in one place.
 * Every animated component MUST reference these — never hardcode values.
 */
import type { WithSpringConfig } from 'react-native-reanimated';

// ─── Spring Presets ────────────────────────────────────────────────────────────

export type SpringPreset = keyof typeof springPresets;

/**
 * Physics-based spring configurations.
 * Choose the preset based on the semantic meaning of the motion:
 * - snappy  → immediate feedback (button presses, toggles)
 * - bouncy  → playful entrance (FAB expand, modal pop)
 * - smooth  → standard transitions (drawer, dialog)
 * - gentle  → subtle motion (progress, skeleton)
 */
export const springPresets = {
  snappy: {
    damping: 20,
    stiffness: 400,
    mass: 0.5,
    overshootClamping: false,
  },
  bouncy: {
    damping: 12,
    stiffness: 200,
    mass: 0.8,
    overshootClamping: false,
  },
  smooth: {
    damping: 28,
    stiffness: 280,
    mass: 1.0,
    overshootClamping: false,
  },
  gentle: {
    damping: 40,
    stiffness: 150,
    mass: 1.2,
    overshootClamping: false,
  },
  /** Zero-duration spring for prefers-reduced-motion */
  instant: {
    damping: 1000,
    stiffness: 1000,
    mass: 0.001,
    overshootClamping: true,
  },
} as const satisfies Record<string, WithSpringConfig>;

// ─── Duration Scale ────────────────────────────────────────────────────────────

export const durations = {
  instant: 0,
  fast: 120,
  normal: 200,
  slow: 350,
  xslow: 500,
} as const;

export type DurationKey = keyof typeof durations;

// ─── Easing Curves ────────────────────────────────────────────────────────────

export const easings = {
  easeOut: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
  easeIn: [0.4, 0.0, 1.0, 1.0] as [number, number, number, number],
  easeInOut: [0.4, 0.0, 0.2, 1.0] as [number, number, number, number],
  linear: [0.0, 0.0, 1.0, 1.0] as [number, number, number, number],
} as const;

// ─── Press Scale Values ────────────────────────────────────────────────────────

/** Standard scale-down values when a pressable is actively pressed. */
export const pressScales = {
  none: 1.0,
  subtle: 0.98,
  normal: 0.96,
  strong: 0.93,
} as const;

export type PressScaleKey = keyof typeof pressScales;

// ─── Stagger Delays ────────────────────────────────────────────────────────────

/** Delay increments for staggered list animations */
export const staggerDelays = {
  fast: 30,
  normal: 60,
  slow: 100,
} as const;
