// ==========================================
// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
// To modify component entries, edit their metadata.json or mockup.tsx
// under apps/docs/src/data/registry/ and run:
//   npm run registry:generate
// ==========================================

import React from "react";
import InteractiveAccordionMockup from "./registry/core/accordion/mockup";
import InteractiveAvatarMockup from "./registry/core/avatar/mockup";
import InteractiveBadgeMockup from "./registry/core/badge/mockup";
import InteractiveButtonMockup from "./registry/core/button/mockup";
import InteractiveCardMockup from "./registry/core/card/mockup";
import InteractiveCheckboxMockup from "./registry/core/checkbox/mockup";
import InteractiveDialogMockup from "./registry/core/dialog/mockup";
import InteractiveInputMockup from "./registry/core/input/mockup";
import InteractiveProgressMockup from "./registry/core/progress/mockup";
import InteractiveSwitchMockup from "./registry/core/switch/mockup";
import InteractiveTabsMockup from "./registry/core/tabs/mockup";
import InteractiveToastMockup from "./registry/core/toast/mockup";
import InteractiveTypographyMockup from "./registry/core/typography/mockup";
import InteractiveAnimatedNumberMockup from "./registry/premium/animated-number/mockup";
import InteractiveBentoGridMockup from "./registry/premium/bento-grid/mockup";
import InteractiveBiometricButtonMockup from "./registry/premium/biometric-button/mockup";
import InteractiveBorderBeamMockup from "./registry/premium/border-beam/mockup";
import InteractiveChatBubbleMockup from "./registry/premium/chat-bubble/mockup";
import InteractiveConfettiMockup from "./registry/premium/confetti/mockup";
import InteractiveGlassBottomSheetMockup from "./registry/premium/glass-bottom-sheet/mockup";
import InteractiveGlassCardMockup from "./registry/premium/glass-card/mockup";
import InteractiveOtpInputMockup from "./registry/premium/otp-input/mockup";
import InteractiveProgressRingMockup from "./registry/premium/progress-ring/mockup";

export interface DocEntry {
  name: string;
  description: string;
  category: string;
  installation: string;
  usageCode: string;
  componentMockup: () => React.ReactNode;
}

export const docsRegistry: Record<string, Record<string, DocEntry>> = {
  core: {
    "accordion": {
      name: "Accordion",
      description: "A vertically stacked set of interactive headers that slide open to reveal detailed content panels with smooth transitions.",
      category: "Core Components",
      installation: "npx nativecn add accordion",
      usageCode: "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from \"@nativecn/ui/components/accordion\";\n\nexport default function App() {\n  return (\n    <Accordion type=\"single\" collapsible>\n      <AccordionItem value=\"item-1\">\n        <AccordionTrigger>Is it highly customizable?</AccordionTrigger>\n        <AccordionContent>Yes! You own the component code. Modify files directly inside your project structure.</AccordionContent>\n      </AccordionItem>\n      <AccordionItem value=\"item-2\">\n        <AccordionTrigger>Are micro-animations supported?</AccordionTrigger>\n        <AccordionContent>Fully integrated with spring physics via React Native Reanimated and Moti.</AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveAccordionMockup)
    },
    "avatar": {
      name: "Avatar",
      description: "A modern circular profile image placeholder supporting initials fallbacks and smooth load states.",
      category: "Core Components",
      installation: "npx nativecn add avatar",
      usageCode: "import { Avatar, AvatarImage, AvatarFallback } from \"@nativecn/ui/components/avatar\";\n\nexport default function App() {\n  return (\n    <Avatar size=\"lg\">\n      <AvatarImage src=\"https://images.unsplash.com/photo-1534528741775-53994a69daeb\" />\n      <AvatarFallback>JD</AvatarFallback>\n    </Avatar>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveAvatarMockup)
    },
    "badge": {
      name: "Badge",
      description: "A stylized miniature pill badge with vibrant colors, outline and glass variants to denote status and metrics.",
      category: "Core Components",
      installation: "npx nativecn add badge",
      usageCode: "import { Badge } from \"@nativecn/ui/components/badge\";\n\nexport default function App() {\n  return (\n    <View style={{ flexDirection: \"row\", gap: 8 }}>\n      <Badge variant=\"default\">New</Badge>\n      <Badge variant=\"success\">Completed</Badge>\n      <Badge variant=\"glass\">Glass</Badge>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBadgeMockup)
    },
    "button": {
      name: "Button",
      description: "A premium, responsive button component with multiple style variants, haptic feedback integration, and subtle press micro-animations.",
      category: "Core Components",
      installation: "npx nativecn add button",
      usageCode: "import { Button } from \"@nativecn/ui/components/button\";\nimport { LogIn } from \"lucide-react-native\";\n\nexport default function App() {\n  return (\n    <Button \n      variant=\"default\" \n      size=\"lg\" \n      onPress={() => console.log(\"Pressed\")}\n    >\n      <Button.Icon icon={LogIn} />\n      <Button.Text>Get Started</Button.Text>\n    </Button>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveButtonMockup)
    },
    "card": {
      name: "Card",
      description: "A beautiful modular card container featuring defined borders, description text, content areas, and clean footers.",
      category: "Core Components",
      installation: "npx nativecn add card",
      usageCode: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@nativecn/ui/components/card\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>Vault Security</CardTitle>\n        <CardDescription>Configure local lock options</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <Text>Enable face recognition for higher lock safety.</Text>\n      </CardContent>\n      <CardFooter>\n        <Button size=\"sm\">Enable</Button>\n      </CardFooter>\n    </Card>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveCardMockup)
    },
    "checkbox": {
      name: "Checkbox",
      description: "A pristine interactive check box with active spring scale feedback and customizable outline states.",
      category: "Core Components",
      installation: "npx nativecn add checkbox",
      usageCode: "import { useState } from \"react\";\nimport { Checkbox } from \"@nativecn/ui/components/checkbox\";\n\nexport default function App() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox \n      checked={checked} \n      onCheckedChange={setChecked} \n      label=\"Accept Terms & Conditions\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveCheckboxMockup)
    },
    "dialog": {
      name: "Dialog",
      description: "A highly responsive modal overlay dialog that slides smoothly from the bottom with haptic integration.",
      category: "Core Components",
      installation: "npx nativecn add dialog",
      usageCode: "import { useState } from \"react\";\nimport { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from \"@nativecn/ui/components/dialog\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <View>\n      <Button onPress={() => setOpen(true)}>Open Dialog</Button>\n      <Dialog open={open} onOpenChange={setOpen}>\n        <DialogContent>\n          <DialogHeader>\n            <DialogTitle>Confirm Sign Out</DialogTitle>\n            <DialogDescription>Are you sure you want to log out of your vault?</DialogDescription>\n          </DialogHeader>\n          <DialogFooter>\n            <Button variant=\"ghost\" onPress={() => setOpen(false)}>Cancel</Button>\n            <Button variant=\"destructive\" onPress={() => setOpen(false)}>Sign Out</Button>\n          </DialogFooter>\n        </DialogContent>\n      </Dialog>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveDialogMockup)
    },
    "input": {
      name: "Input",
      description: "An elegant form input field with floating placeholder support and active focus glowing borders.",
      category: "Core Components",
      installation: "npx nativecn add input",
      usageCode: "import { useState } from \"react\";\nimport { Input } from \"@nativecn/ui/components/input\";\n\nexport default function App() {\n  const [value, setValue] = useState(\"\");\n  return (\n    <Input \n      value={value}\n      onChangeText={setValue}\n      placeholder=\"Enter account username\"\n      label=\"Username\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveInputMockup)
    },
    "progress": {
      name: "Progress",
      description: "A smooth linear loading progression indicator featuring custom track scales and organic transitions.",
      category: "Core Components",
      installation: "npx nativecn add progress",
      usageCode: "import { Progress } from \"@nativecn/ui/components/progress\";\n\nexport default function App() {\n  return (\n    <Progress value={65} max={100} />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveProgressMockup)
    },
    "switch": {
      name: "Switch",
      description: "A smooth, animated toggle control that allows users to switch between binary states with tactile motion feedback.",
      category: "Core Components",
      installation: "npx nativecn add switch",
      usageCode: "import { useState } from \"react\";\nimport { Switch } from \"@nativecn/ui/components/switch\";\n\nexport default function App() {\n  const [enabled, setEnabled] = useState(false);\n  return (\n    <Switch \n      checked={enabled} \n      onCheckedChange={setEnabled} \n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSwitchMockup)
    },
    "tabs": {
      name: "Tabs",
      description: "A clean segmented control that allows swapping between layered views with subtle horizontal slides.",
      category: "Core Components",
      installation: "npx nativecn add tabs",
      usageCode: "import { Tabs, TabsList, TabsTrigger, TabsContent } from \"@nativecn/ui/components/tabs\";\n\nexport default function App() {\n  return (\n    <Tabs defaultValue=\"inbox\">\n      <TabsList>\n        <TabsTrigger value=\"inbox\">Inbox</TabsTrigger>\n        <TabsTrigger value=\"archive\">Archive</TabsTrigger>\n      </TabsList>\n      <TabsContent value=\"inbox\">\n        <Text>You have 3 unread messages.</Text>\n      </TabsContent>\n      <TabsContent value=\"archive\">\n        <Text>No archived conversations.</Text>\n      </TabsContent>\n    </Tabs>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveTabsMockup)
    },
    "toast": {
      name: "Toast",
      description: "A beautiful notification banner that drops smoothly from the top of the display with premium sliding feedback.",
      category: "Core Components",
      installation: "npx nativecn add toast",
      usageCode: "import { useToast } from \"@nativecn/ui/hooks/use-toast\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const { toast } = useToast();\n  \n  return (\n    <Button \n      onPress={() => toast({ \n        title: \"Preferences Saved\", \n        description: \"Security credentials updated.\",\n        variant: \"default\" \n      })}\n    >\n      Show Alert\n    </Button>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveToastMockup)
    },
    "typography": {
      name: "Typography",
      description: "A sophisticated, type-safe font system offering structured headers, subtexts, and regular paragraphs for mobile views.",
      category: "Core Components",
      installation: "npx nativecn add typography",
      usageCode: "import { Text } from \"@nativecn/ui/components/typography\";\n\nexport default function App() {\n  return (\n    <View style={{ gap: 12 }}>\n      <Text variant=\"h1\">Premium Title</Text>\n      <Text variant=\"h3\">Sub-headline</Text>\n      <Text variant=\"p\">Clean body copy with perfect readability.</Text>\n      <Text variant=\"muted\">Secondary descriptive note.</Text>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveTypographyMockup)
    },
  },
  premium: {
    "animated-number": {
      name: "Animated Number",
      description: "A sleek, responsive digital ticker that rolls through numeric updates with dynamic acceleration.",
      category: "Premium - Magic",
      installation: "npx nativecn add animated-number",
      usageCode: "import { AnimatedNumber } from \"@nativecn/ui/premium/magic/animated-number\";\n\nexport default function App() {\n  return (\n    <AnimatedNumber \n      value={8240} \n      duration={1500} \n      style={{ fontSize: 32, fontWeight: \"bold\", color: \"#a855f7\" }}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveAnimatedNumberMockup)
    },
    "bento-grid": {
      name: "Bento Grid",
      description: "An elegant, asymmetrical layout grid designed to highlight metrics, charts, and product features in a sleek dashboard style.",
      category: "Premium - Magic",
      installation: "npx nativecn add bento-grid",
      usageCode: "import { BentoGrid, BentoCard } from \"@nativecn/ui/premium/magic/bento-grid\";\n\nexport default function App() {\n  return (\n    <BentoGrid cols={3}>\n      <BentoCard title=\"Performance\" description=\"Load times under 200ms\" />\n      <BentoCard title=\"Security\" description=\"Biometric vault enabled\" />\n      <BentoCard title=\"Network\" description=\"Realtime websocket links\" />\n    </BentoGrid>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBentoGridMockup)
    },
    "biometric-button": {
      name: "Biometric Button",
      description: "A highly-aesthetic authentication button that integrates with FaceID/Fingerprint local authentication and displays glowing, premium micro-animations.",
      category: "Premium - Mobile",
      installation: "npx nativecn add biometric-button",
      usageCode: "import { BiometricButton } from \"@nativecn/ui/premium/mobile/biometric-button\";\n\nexport default function App() {\n  const handleAuthSuccess = () => {\n    console.log(\"Successfully Authenticated!\");\n  };\n\n  return (\n    <BiometricButton \n      title=\"Unlock Vault\"\n      onSuccess={handleAuthSuccess}\n      onFailure={(error) => console.log(error)}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBiometricButtonMockup)
    },
    "border-beam": {
      name: "Border Beam",
      description: "A state-of-the-art glowing laser beam that slides seamlessly around container borders using clean SVG gradients.",
      category: "Premium - Magic",
      installation: "npx nativecn add border-beam",
      usageCode: "import { BorderBeam } from \"@nativecn/ui/premium/magic/border-beam\";\n\nexport default function App() {\n  return (\n    <View style={{ width: 200, height: 200, position: \"relative\" }}>\n      <BorderBeam size={100} duration={4} borderWidth={2} />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBorderBeamMockup)
    },
    "chat-bubble": {
      name: "AI Chat Bubble",
      description: "A rich chat conversational bubble set showcasing premium typing indicators, message delivery micro-states, and soft glass-morphic text panels.",
      category: "Premium - AI",
      installation: "npx nativecn add chat-bubble",
      usageCode: "import { ChatBubble } from \"@nativecn/ui/premium/ai/chat-bubble\";\nimport { TypingIndicator } from \"@nativecn/ui/premium/ai/typing-indicator\";\n\nexport default function App() {\n  return (\n    <View style={{ gap: 12 }}>\n      <ChatBubble sender=\"user\" text=\"Design a dark landing page.\" />\n      <ChatBubble sender=\"ai\">\n        <TypingIndicator />\n      </ChatBubble>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveChatBubbleMockup)
    },
    "confetti": {
      name: "Confetti",
      description: "A highly-aesthetic, physics-simulated celebration effect that bursts particles across the display with customizable velocity and friction.",
      category: "Premium - Magic",
      installation: "npx nativecn add confetti",
      usageCode: "import { Confetti } from \"@nativecn/ui/premium/magic/confetti\";\nimport { useRef } from \"react\";\n\nexport default function App() {\n  const confettiRef = useRef(null);\n  \n  return (\n    <View>\n      <Button onPress={() => confettiRef.current?.burst()}>\n        Celebrate\n      </Button>\n      <Confetti ref={confettiRef} count={100} />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveConfettiMockup)
    },
    "glass-bottom-sheet": {
      name: "Glass Bottom Sheet",
      description: "A breathtaking glassmorphic drawer that slides up smoothly from the bottom with rich vector blurs and touch grab indicators.",
      category: "Premium - Glass",
      installation: "npx nativecn add glass-bottom-sheet",
      usageCode: "import { GlassBottomSheet } from \"@nativecn/ui/premium/glass/glass-bottom-sheet\";\n\nexport default function App() {\n  return (\n    <GlassBottomSheet isOpen={true} intensity=\"high\">\n      <Text style={{ color: \"#fff\", fontWeight: \"bold\" }}>Glass Premium Sheet</Text>\n      <Text style={{ color: \"#94a3b8\" }}> Frosted glass panel layout </Text>\n    </GlassBottomSheet>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveGlassBottomSheetMockup)
    },
    "glass-card": {
      name: "Glass Card",
      description: "A state-of-the-art glassmorphic container using backdrop-filters, subtle gradients, and custom radial ambient lights.",
      category: "Premium - Glass",
      installation: "npx nativecn add glass-card",
      usageCode: "import { GlassCard } from \"@nativecn/ui/premium/glass/glass-card\";\n\nexport default function App() {\n  return (\n    <GlassCard intensity=\"medium\" glowColor=\"rgba(168, 85, 247, 0.15)\">\n      <Text style={{ color: \"#fff\", fontWeight: \"bold\" }}>Glass Premium Panel</Text>\n      <Text style={{ color: \"#94a3b8\" }}>Translucent frosted overlay</Text>\n    </GlassCard>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveGlassCardMockup)
    },
    "otp-input": {
      name: "OTP Input",
      description: "An elegant, multi-box One-Time Password component featuring glowing focus borders, a simulated active cursor, and soft slide-in character animations.",
      category: "Premium - Inputs",
      installation: "npx nativecn add otp-input",
      usageCode: "import { OtpInput } from \"@nativecn/ui/premium/inputs/otp-input\";\n\nexport default function App() {\n  const handleComplete = (code: string) => {\n    console.log(\"Entered OTP:\", code);\n  };\n\n  return (\n    <OtpInput \n      length={4} \n      onComplete={handleComplete} \n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveOtpInputMockup)
    },
    "progress-ring": {
      name: "Progress Ring",
      description: "An animated, vector-based SVG progress indicator supporting smooth dashboard status transitions, double arcs, and central statistics representation.",
      category: "Premium - Charts",
      installation: "npx nativecn add progress-ring",
      usageCode: "import { ProgressRing } from \"@nativecn/ui/premium/charts/progress-ring\";\n\nexport default function App() {\n  return (\n    <ProgressRing \n      size={140} \n      strokeWidth={12} \n      percentage={72} \n      primaryColor=\"#a855f7\" \n      secondaryColor=\"#1e1b4b\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveProgressRingMockup)
    },
  }
};

export function getDocEntry(category: string, slug: string): DocEntry | null {
  return docsRegistry[category]?.[slug] || null;
}
