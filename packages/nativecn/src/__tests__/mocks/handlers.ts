// Mock definitions for integration testing environments
export const mockHaptics = {
  impactAsync: jest.fn(),
  notificationAsync: jest.fn(),
};

export const mockReanimated = {
  useSharedValue: jest.fn((init) => ({ value: init })),
  useAnimatedStyle: jest.fn(() => ({})),
  withSpring: jest.fn((val) => val),
  withTiming: jest.fn((val) => val),
};

export const mockThemeContext = {
  theme: 'light',
  isDark: false,
  setColorScheme: jest.fn(),
  toggleTheme: jest.fn(),
};
