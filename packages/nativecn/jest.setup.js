import '@testing-library/jest-native/extend-expect';

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    __esModule: true,
    GestureHandlerRootView: ({ children, style, ...props }) => React.createElement(View, { ...props, style }, children),
    Swipeable: ({ children }) => children,
    DrawerLayout: ({ children }) => children,
    State: {},
    PanGestureHandler: ({ children }) => children,
    TapGestureHandler: ({ children }) => children,
    FlingGestureHandler: ({ children }) => children,
    ForceTouchGestureHandler: ({ children }) => children,
    LongPressGestureHandler: ({ children }) => children,
    PinchGestureHandler: ({ children }) => children,
    RotationGestureHandler: ({ children }) => children,
  };
});

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const react = require('react');
  const { View, Text } = require('react-native');
  return {
    __esModule: true,
    default: {
      createAnimatedComponent: (c) => c,
      View: ({ children, style, ...props }) => react.createElement(View, { ...props, style }, children),
      Text: ({ children, style, ...props }) => react.createElement(Text, { ...props, style }, children),
    },
    useAnimatedStyle: (fn) => fn(),
    useSharedValue: (val) => ({ value: val }),
    withRepeat: (val) => val,
    withTiming: (val, config, cb) => {
      if (cb) cb(true);
      return val;
    },
    withSpring: (val, config, cb) => {
      if (cb) cb(true);
      return val;
    },
    withDelay: (delay, animation) => animation,
    Easing: {
      linear: (t) => t,
      ease: (t) => t,
      quad: (t) => t,
      cubic: (t) => t,
      poly: (n) => (t) => Math.pow(t, n),
      sin: (t) => t,
      circle: (t) => t,
      exp: (t) => t,
      elastic: (bounciness) => (t) => t,
      back: (s) => (t) => t,
      bounce: (t) => t,
      bezier: (x1, y1, x2, y2) => (t) => t,
      in: (easing) => easing,
      out: (easing) => easing,
      inOut: (easing) => easing,
    },
    interpolate: (value, inputRange, outputRange, extrapolate) => {
      return outputRange[0];
    },
    Extrapolate: {
      CLAMP: 'clamp',
      IDENTITY: 'identity',
      EXTEND: 'extend',
    },
    interpolateColor: (value, inputRange, outputRange) => {
      return outputRange[0];
    },
    runOnJS: (fn) => fn,
    runOnUI: (fn) => fn,
    useAnimatedRef: () => react.createRef(),
    measure: () => ({ x: 0, y: 0, width: 100, height: 100, pageX: 0, pageY: 0 }),
    createAnimatedComponent: (c) => c,
    useReducedMotion: () => false,
  };
});

// Mock expo-haptics
jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  notificationAsync: jest.fn(),
  ImpactFeedbackStyle: {
    Light: 'light',
    Medium: 'medium',
    Heavy: 'heavy'
  },
  NotificationFeedbackType: {
    Success: 'success',
    Warning: 'warning',
    Error: 'error'
  }
}));

// Mock lucide-react-native
jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  const createMockIcon = (name) => {
    const Component = (props) => React.createElement(View, { ...props, testID: `lucide-${name}` });
    Component.displayName = `MockIcon(${name})`;
    return Component;
  };
  return {
    __esModule: true,
    Check: createMockIcon('Check'),
    RefreshCw: createMockIcon('RefreshCw'),
    Fingerprint: createMockIcon('Fingerprint'),
    ScanFace: createMockIcon('ScanFace'),
    Star: createMockIcon('Star'),
    ChevronDown: createMockIcon('ChevronDown'),
    X: createMockIcon('X'),
    ChevronLeft: createMockIcon('ChevronLeft'),
    ChevronRight: createMockIcon('ChevronRight'),
    MoreHorizontal: createMockIcon('MoreHorizontal'),
  };
});

// Mock expo-blur
jest.mock('expo-blur', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    BlurView: (props) => React.createElement(View, { ...props, testID: 'expo-blur-view' })
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    SafeAreaProvider: ({ children }) => React.createElement(View, {}, children),
    SafeAreaView: ({ children }) => React.createElement(View, {}, children),
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  };
});

// Mock theme-context
jest.mock('./src/context/theme-context', () => {
  return {
    __esModule: true,
    ThemeProvider: ({ children }) => children,
    useThemeContext: () => ({
      colorScheme: 'light',
      setColorScheme: jest.fn(),
      isDark: false,
      themeName: 'default',
      setThemeName: jest.fn(),
      theme: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        card: 'hsl(0 0% 100%)',
        cardForeground: 'hsl(222.2 84% 4.9%)',
        popover: 'hsl(0 0% 100%)',
        popoverForeground: 'hsl(222.2 84% 4.9%)',
        primary: { DEFAULT: 'hsl(222.2 47.4% 11.2%)', foreground: 'hsl(210 40% 98%)' },
        secondary: { DEFAULT: 'hsl(210 40% 96.1%)', foreground: 'hsl(222.2 47.4% 11.2%)' },
        muted: { DEFAULT: 'hsl(210 40% 96.1%)', foreground: 'hsl(215.4 16.3% 46.9%)' },
        accent: { DEFAULT: 'hsl(210 40% 96.1%)', foreground: 'hsl(222.2 47.4% 11.2%)' },
        destructive: { DEFAULT: 'hsl(0 84.2% 60.2%)', foreground: 'hsl(210 40% 98%)' },
        border: 'hsl(214.3 31.8% 91.4%)',
        input: 'hsl(214.3 31.8% 91.4%)',
        ring: 'hsl(222.2 84% 4.9%)',
        shimmer: '#E2E8F0',
      },
    }),
  };
});
