# cnnative-ui

The core component library source code for the **cnnative** ecosystem. Beautiful, accessible, and high-performance React Native and Expo component primitives styled with NativeWind.

This library is designed around the **copy-paste component model** popularized by shadcn/ui. You own the code of your components—it is written directly into your application directories rather than hidden deep inside `node_modules`.

## Component Features

*   **Premium Micro-Animations**: Built-in support for fluid spring transitions using React Native Reanimated and Moti.
*   **Vibrant Glassmorphism**: Stunning pre-configured frosted glass cards, panel layouts, and sheets.
*   **Tailwind Styling**: Out-of-the-box support for NativeWind styling variables and Tailwind utility configurations.
*   **Tactile Haptics**: Native-feeling haptic feedback integrated directly into interactive primitives (buttons, switches, dials).

## Peer Dependencies

To use components added by the `cnnative` CLI in your project, ensure the following peer dependencies are installed:

```bash
# Using Expo
npx expo install react-native-reanimated react-native-gesture-handler react-native-safe-area-context react-native-svg expo-haptics expo-blur expo-linear-gradient expo-local-authentication

# Standard utility libraries
npm install clsx tailwind-merge class-variance-authority lucide-react-native moti
```

## How It Works

1.  Initialize your workspace: `npx cnnative init`
2.  Copy components dynamically: `npx cnnative add button`
3.  Customize the component code directly within your `components/ui/` folder!

## License

MIT
