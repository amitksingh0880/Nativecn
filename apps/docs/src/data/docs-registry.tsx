"use client";

// ==========================================
// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
// To modify component entries, edit their metadata.json or mockup.tsx
// under apps/docs/src/data/registry/ and run:
//   npm run registry:generate
// ==========================================

import React from "react";
import InteractiveAccordionMockup from "./registry/core/accordion/mockup";
import InteractiveAlertMockup from "./registry/core/alert/mockup";
import InteractiveAlertDialogMockup from "./registry/core/alert-dialog/mockup";
import InteractiveAspectRatioMockup from "./registry/core/aspect-ratio/mockup";
import InteractiveAvatarMockup from "./registry/core/avatar/mockup";
import InteractiveBadgeMockup from "./registry/core/badge/mockup";
import InteractiveBreadcrumbMockup from "./registry/core/breadcrumb/mockup";
import InteractiveButtonMockup from "./registry/core/button/mockup";
import InteractiveCardMockup from "./registry/core/card/mockup";
import InteractiveCheckboxMockup from "./registry/core/checkbox/mockup";
import InteractiveCollapsibleMockup from "./registry/core/collapsible/mockup";
import InteractiveDialogMockup from "./registry/core/dialog/mockup";
import InteractiveDropdownMenuMockup from "./registry/core/dropdown-menu/mockup";
import InteractiveFormMockup from "./registry/core/form/mockup";
import InteractiveInputMockup from "./registry/core/input/mockup";
import InteractivePaginationMockup from "./registry/core/pagination/mockup";
import InteractiveProgressMockup from "./registry/core/progress/mockup";
import InteractiveRadioGroupMockup from "./registry/core/radio-group/mockup";
import InteractiveSelectMockup from "./registry/core/select/mockup";
import InteractiveSeparatorMockup from "./registry/core/separator/mockup";
import InteractiveSheetMockup from "./registry/core/sheet/mockup";
import InteractiveSkeletonMockup from "./registry/core/skeleton/mockup";
import InteractiveSliderMockup from "./registry/core/slider/mockup";
import InteractiveSwitchMockup from "./registry/core/switch/mockup";
import InteractiveTabsMockup from "./registry/core/tabs/mockup";
import InteractiveTextareaMockup from "./registry/core/textarea/mockup";
import InteractiveToastMockup from "./registry/core/toast/mockup";
import InteractiveToggleMockup from "./registry/core/toggle/mockup";
import InteractiveToggleGroupMockup from "./registry/core/toggle-group/mockup";
import InteractiveTooltipMockup from "./registry/core/tooltip/mockup";
import InteractiveTypographyMockup from "./registry/core/typography/mockup";
import InteractiveAnimatedNumberMockup from "./registry/premium/animated-number/mockup";
import InteractiveBarChartMockup from "./registry/premium/bar-chart/mockup";
import InteractiveBentoGridMockup from "./registry/premium/bento-grid/mockup";
import InteractiveBiometricButtonMockup from "./registry/premium/biometric-button/mockup";
import InteractiveBlurFadeMockup from "./registry/premium/blur-fade/mockup";
import InteractiveBorderBeamMockup from "./registry/premium/border-beam/mockup";
import InteractiveBottomTabBarMockup from "./registry/premium/bottom-tab-bar/mockup";
import InteractiveCarouselMockup from "./registry/premium/carousel/mockup";
import InteractiveChatBubbleMockup from "./registry/premium/chat-bubble/mockup";
import InteractiveColorPickerMockup from "./registry/premium/color-picker/mockup";
import InteractiveConfettiMockup from "./registry/premium/confetti/mockup";
import InteractiveCurrencyInputMockup from "./registry/premium/currency-input/mockup";
import InteractiveFabMockup from "./registry/premium/fab/mockup";
import InteractiveFloatingDockMockup from "./registry/premium/floating-dock/mockup";
import InteractiveGlassBottomSheetMockup from "./registry/premium/glass-bottom-sheet/mockup";
import InteractiveGlassCardMockup from "./registry/premium/glass-card/mockup";
import InteractiveGlassHeaderMockup from "./registry/premium/glass-header/mockup";
import InteractiveGlassPanelMockup from "./registry/premium/glass-panel/mockup";
import InteractiveMagicCardMockup from "./registry/premium/magic-card/mockup";
import InteractiveMarqueeMockup from "./registry/premium/marquee/mockup";
import InteractiveMeteorsMockup from "./registry/premium/meteors/mockup";
import InteractiveOtpInputMockup from "./registry/premium/otp-input/mockup";
import InteractivePhoneInputMockup from "./registry/premium/phone-input/mockup";
import InteractiveProgressRingMockup from "./registry/premium/progress-ring/mockup";
import InteractivePullToRefreshMockup from "./registry/premium/pull-to-refresh/mockup";
import InteractivePulsatingButtonMockup from "./registry/premium/pulsating-button/mockup";
import InteractiveRatingMockup from "./registry/premium/rating/mockup";
import InteractiveRippleMockup from "./registry/premium/ripple/mockup";
import InteractiveShimmerMockup from "./registry/premium/shimmer/mockup";
import InteractiveShinyButtonMockup from "./registry/premium/shiny-button/mockup";
import InteractiveStepIndicatorMockup from "./registry/premium/step-indicator/mockup";
import InteractiveSwipeRowMockup from "./registry/premium/swipe-row/mockup";
import InteractiveSwipeableCardStackMockup from "./registry/premium/swipeable-card-stack/mockup";
import InteractiveTypingIndicatorMockup from "./registry/premium/typing-indicator/mockup";
import InteractiveTypingTextMockup from "./registry/premium/typing-text/mockup";


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
    "alert": {
      name: "Alert",
      description: "A contextual feedback banner with icon support, delivering success, warning, error, and informational states in a clean inline layout.",
      category: "Core Components",
      installation: "npx nativecn add alert",
      usageCode: "import { Alert, AlertTitle, AlertDescription } from \"@nativecn/ui/components/alert\";\nimport { Info } from \"lucide-react-native\";\n\nexport default function App() {\n  return (\n    <Alert variant=\"default\" icon={Info}>\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>Your session will expire in 5 minutes.</AlertDescription>\n    </Alert>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveAlertMockup)
    },
    "alert-dialog": {
      name: "Alert Dialog",
      description: "A blocking confirmation overlay with smooth entrance animation, designed to interrupt and require deliberate user action before proceeding.",
      category: "Core Components",
      installation: "npx nativecn add alert-dialog",
      usageCode: "import { useState } from \"react\";\nimport { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from \"@nativecn/ui/components/alert-dialog\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <View>\n      <Button onPress={() => setOpen(true)}>Delete Account</Button>\n      <AlertDialog open={open} onOpenChange={setOpen}>\n        <AlertDialogContent>\n          <AlertDialogHeader>\n            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>\n          </AlertDialogHeader>\n          <AlertDialogFooter>\n            <AlertDialogCancel onPress={() => setOpen(false)}>Cancel</AlertDialogCancel>\n            <AlertDialogAction onPress={() => setOpen(false)}>Continue</AlertDialogAction>\n          </AlertDialogFooter>\n        </AlertDialogContent>\n      </AlertDialog>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveAlertDialogMockup)
    },
    "aspect-ratio": {
      name: "Aspect Ratio",
      description: "A layout container that enforces a fixed width-to-height proportion, perfect for media, thumbnails, and cards without overflow.",
      category: "Core Components",
      installation: "npx nativecn add aspect-ratio",
      usageCode: "import { AspectRatio } from \"@nativecn/ui/components/aspect-ratio\";\nimport { Image } from \"react-native\";\n\nexport default function App() {\n  return (\n    <View style={{ width: 300 }}>\n      <AspectRatio ratio={16 / 9}>\n        <Image\n          source={{ uri: \"https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c\" }}\n          style={{ width: \"100%\", height: \"100%\", borderRadius: 12 }}\n        />\n      </AspectRatio>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveAspectRatioMockup)
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
    "breadcrumb": {
      name: "Breadcrumb",
      description: "A hierarchical navigation trail with chevron separators and truncation support for deep navigation paths.",
      category: "Core Components",
      installation: "npx nativecn add breadcrumb",
      usageCode: "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@nativecn/ui/components/breadcrumb\";\n\nexport default function App() {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem><BreadcrumbLink href=\"/\">Home</BreadcrumbLink></BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem><BreadcrumbLink href=\"/settings\">Settings</BreadcrumbLink></BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem><BreadcrumbPage>Profile</BreadcrumbPage></BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBreadcrumbMockup)
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
    "collapsible": {
      name: "Collapsible",
      description: "A smooth expand/collapse container driven by spring physics, allowing any content to be progressively revealed.",
      category: "Core Components",
      installation: "npx nativecn add collapsible",
      usageCode: "import { useState } from \"react\";\nimport { Collapsible, CollapsibleTrigger, CollapsibleContent } from \"@nativecn/ui/components/collapsible\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <Collapsible open={open} onOpenChange={setOpen}>\n      <CollapsibleTrigger asChild>\n        <Button variant=\"ghost\" onPress={() => setOpen(!open)}>Toggle</Button>\n      </CollapsibleTrigger>\n      <CollapsibleContent>\n        <Text>Hidden content revealed on expand.</Text>\n      </CollapsibleContent>\n    </Collapsible>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveCollapsibleMockup)
    },
    "dialog": {
      name: "Dialog",
      description: "A highly responsive modal overlay dialog that slides smoothly from the bottom with haptic integration.",
      category: "Core Components",
      installation: "npx nativecn add dialog",
      usageCode: "import { useState } from \"react\";\nimport { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from \"@nativecn/ui/components/dialog\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <View>\n      <Button onPress={() => setOpen(true)}>Open Dialog</Button>\n      <Dialog open={open} onOpenChange={setOpen}>\n        <DialogContent>\n          <DialogHeader>\n            <DialogTitle>Confirm Sign Out</DialogTitle>\n            <DialogDescription>Are you sure you want to log out of your vault?</DialogDescription>\n          </DialogHeader>\n          <DialogFooter>\n            <Button variant=\"ghost\" onPress={() => setOpen(false)}>Cancel</Button>\n            <Button variant=\"destructive\" onPress={() => setOpen(false)}>Sign Out</Button>\n          </DialogFooter>\n        </DialogContent>\n      </Dialog>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveDialogMockup)
    },
    "dropdown-menu": {
      name: "Dropdown Menu",
      description: "A floating contextual menu that appears below any trigger with smooth fade-in, nested items, separators, and icon support.",
      category: "Core Components",
      installation: "npx nativecn add dropdown-menu",
      usageCode: "import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from \"@nativecn/ui/components/dropdown-menu\";\nimport { Button } from \"@nativecn/ui/components/button\";\nimport { Settings, LogOut, User } from \"lucide-react-native\";\n\nexport default function App() {\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger asChild>\n        <Button variant=\"outline\">Open Menu</Button>\n      </DropdownMenuTrigger>\n      <DropdownMenuContent>\n        <DropdownMenuItem icon={User}>Profile</DropdownMenuItem>\n        <DropdownMenuItem icon={Settings}>Settings</DropdownMenuItem>\n        <DropdownMenuSeparator />\n        <DropdownMenuItem icon={LogOut} destructive>Sign Out</DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveDropdownMenuMockup)
    },
    "form": {
      name: "Form",
      description: "An elegant, highly accessible, and flexible form building system using custom inputs, validation states, and helper messages.",
      category: "Core Components",
      installation: "npx nativecn add form",
      usageCode: "import React from \"react\";\nimport { View } from \"react-native\";\nimport { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from \"@nativecn/ui/components/form\";\nimport { Input } from \"@nativecn/ui/components/input\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const [email, setEmail] = React.useState(\"\");\n  const [error, setError] = React.useState(\"\");\n\n  const handleSubmit = () => {\n    if (!email.includes(\"@\")) {\n      setError(\"Invalid email address.\");\n    } else {\n      setError(\"\");\n      console.log(\"Submitted email:\", email);\n    }\n  };\n\n  return (\n    <Form>\n      <FormItem>\n        <FormLabel error={!!error}>Email Address</FormLabel>\n        <FormControl>\n          <Input \n            value={email}\n            onChangeText={setEmail}\n            placeholder=\"name@example.com\"\n            error={!!error}\n          />\n        </FormControl>\n        <FormDescription>\n          We will never share your email address with anyone else.\n        </FormDescription>\n        <FormMessage>{error}</FormMessage>\n      </FormItem>\n      <Button onPress={handleSubmit}>\n        <Button.Text>Submit</Button.Text>\n      </Button>\n    </Form>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveFormMockup)
    },
    "input": {
      name: "Input",
      description: "An elegant form input field with floating placeholder support and active focus glowing borders.",
      category: "Core Components",
      installation: "npx nativecn add input",
      usageCode: "import { useState } from \"react\";\nimport { Input } from \"@nativecn/ui/components/input\";\n\nexport default function App() {\n  const [value, setValue] = useState(\"\");\n  return (\n    <Input \n      value={value}\n      onChangeText={setValue}\n      placeholder=\"Enter account username\"\n      label=\"Username\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveInputMockup)
    },
    "pagination": {
      name: "Pagination",
      description: "A clean, accessible page navigation bar with previous/next controls, numbered links, and ellipsis overflow for large datasets.",
      category: "Core Components",
      installation: "npx nativecn add pagination",
      usageCode: "import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from \"@nativecn/ui/components/pagination\";\n\nexport default function App() {\n  return (\n    <Pagination>\n      <PaginationContent>\n        <PaginationItem><PaginationPrevious /></PaginationItem>\n        <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>\n        <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>\n        <PaginationItem><PaginationEllipsis /></PaginationItem>\n        <PaginationItem><PaginationNext /></PaginationItem>\n      </PaginationContent>\n    </Pagination>\n  );\n}",
      componentMockup: () => React.createElement(InteractivePaginationMockup)
    },
    "progress": {
      name: "Progress",
      description: "A smooth linear loading progression indicator featuring custom track scales and organic transitions.",
      category: "Core Components",
      installation: "npx nativecn add progress",
      usageCode: "import { Progress } from \"@nativecn/ui/components/progress\";\n\nexport default function App() {\n  return (\n    <Progress value={65} max={100} />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveProgressMockup)
    },
    "radio-group": {
      name: "Radio Group",
      description: "An accessible single-selection control with animated circular indicator, label support, and full keyboard / haptic integration.",
      category: "Core Components",
      installation: "npx nativecn add radio-group",
      usageCode: "import { useState } from \"react\";\nimport { RadioGroup, RadioGroupItem } from \"@nativecn/ui/components/radio-group\";\n\nexport default function App() {\n  const [value, setValue] = useState(\"option1\");\n  return (\n    <RadioGroup value={value} onValueChange={setValue}>\n      <RadioGroupItem value=\"option1\" label=\"Option One\" />\n      <RadioGroupItem value=\"option2\" label=\"Option Two\" />\n      <RadioGroupItem value=\"option3\" label=\"Option Three\" />\n    </RadioGroup>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveRadioGroupMockup)
    },
    "select": {
      name: "Select",
      description: "A native-feeling dropdown picker with smooth slide-up sheet, item highlighting, and an accessible trigger button.",
      category: "Core Components",
      installation: "npx nativecn add select",
      usageCode: "import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from \"@nativecn/ui/components/select\";\n\nexport default function App() {\n  return (\n    <Select>\n      <SelectTrigger>\n        <SelectValue placeholder=\"Select a theme\" />\n      </SelectTrigger>\n      <SelectContent>\n        <SelectItem value=\"dark\">Dark</SelectItem>\n        <SelectItem value=\"light\">Light</SelectItem>\n        <SelectItem value=\"system\">System</SelectItem>\n      </SelectContent>\n    </Select>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSelectMockup)
    },
    "separator": {
      name: "Separator",
      description: "A thin, semantic divider line for separating content sections horizontally or vertically with precise spacing control.",
      category: "Core Components",
      installation: "npx nativecn add separator",
      usageCode: "import { Separator } from \"@nativecn/ui/components/separator\";\n\nexport default function App() {\n  return (\n    <View style={{ gap: 12 }}>\n      <Text variant=\"h4\">Section One</Text>\n      <Separator />\n      <Text variant=\"p\">Section two content goes here.</Text>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSeparatorMockup)
    },
    "sheet": {
      name: "Sheet",
      description: "A gesture-driven bottom drawer panel that slides up from the screen edge with spring physics and safe-area padding.",
      category: "Core Components",
      installation: "npx nativecn add sheet",
      usageCode: "import { useState } from \"react\";\nimport { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from \"@nativecn/ui/components/sheet\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <View>\n      <Button onPress={() => setOpen(true)}>Open Sheet</Button>\n      <Sheet open={open} onOpenChange={setOpen}>\n        <SheetContent>\n          <SheetHeader>\n            <SheetTitle>Edit Profile</SheetTitle>\n            <SheetDescription>Make changes to your profile here.</SheetDescription>\n          </SheetHeader>\n        </SheetContent>\n      </Sheet>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSheetMockup)
    },
    "skeleton": {
      name: "Skeleton",
      description: "A pulsating loading placeholder that preserves layout structure while content streams in, eliminating layout shift.",
      category: "Core Components",
      installation: "npx nativecn add skeleton",
      usageCode: "import { Skeleton } from \"@nativecn/ui/components/skeleton\";\n\nexport default function App() {\n  return (\n    <View style={{ gap: 12, padding: 16 }}>\n      <Skeleton style={{ width: \"100%\", height: 20 }} />\n      <Skeleton style={{ width: \"75%\", height: 20 }} />\n      <Skeleton style={{ width: \"50%\", height: 20 }} />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSkeletonMockup)
    },
    "slider": {
      name: "Slider",
      description: "A smooth, touch-native range control featuring a spring-animated thumb, haptic step feedback, and accessible value tracking.",
      category: "Core Components",
      installation: "npx nativecn add slider",
      usageCode: "import { useState } from \"react\";\nimport { Slider } from \"@nativecn/ui/components/slider\";\n\nexport default function App() {\n  const [value, setValue] = useState(40);\n  return (\n    <Slider\n      value={value}\n      onValueChange={setValue}\n      min={0}\n      max={100}\n      step={1}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSliderMockup)
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
    "textarea": {
      name: "Textarea",
      description: "A resizable multi-line text input with focus glow borders, character count support, and fluid auto-grow behavior.",
      category: "Core Components",
      installation: "npx nativecn add textarea",
      usageCode: "import { useState } from \"react\";\nimport { Textarea } from \"@nativecn/ui/components/textarea\";\n\nexport default function App() {\n  const [value, setValue] = useState(\"\");\n  return (\n    <Textarea\n      value={value}\n      onChangeText={setValue}\n      placeholder=\"Write your bio...\"\n      label=\"Bio\"\n      maxLength={280}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveTextareaMockup)
    },
    "toast": {
      name: "Toast",
      description: "A beautiful notification banner that drops smoothly from the top of the display with premium sliding feedback.",
      category: "Core Components",
      installation: "npx nativecn add toast",
      usageCode: "import { useToast } from \"@nativecn/ui/hooks/use-toast\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  const { toast } = useToast();\n  \n  return (\n    <Button \n      onPress={() => toast({ \n        title: \"Preferences Saved\", \n        description: \"Security credentials updated.\",\n        variant: \"default\" \n      })}\n    >\n      Show Alert\n    </Button>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveToastMockup)
    },
    "toggle": {
      name: "Toggle",
      description: "A pressable state-toggle button with active/inactive visual feedback, haptic integration, and icon or text label support.",
      category: "Core Components",
      installation: "npx nativecn add toggle",
      usageCode: "import { useState } from \"react\";\nimport { Toggle } from \"@nativecn/ui/components/toggle\";\nimport { Bold } from \"lucide-react-native\";\n\nexport default function App() {\n  const [pressed, setPressed] = useState(false);\n  return (\n    <Toggle pressed={pressed} onPressedChange={setPressed} aria-label=\"Toggle bold\">\n      <Bold size={16} />\n    </Toggle>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveToggleMockup)
    },
    "toggle-group": {
      name: "Toggle Group",
      description: "A set of mutually exclusive or multi-select toggle buttons styled as a cohesive segmented control with spring animations.",
      category: "Core Components",
      installation: "npx nativecn add toggle-group",
      usageCode: "import { useState } from \"react\";\nimport { ToggleGroup, ToggleGroupItem } from \"@nativecn/ui/components/toggle-group\";\nimport { AlignLeft, AlignCenter, AlignRight } from \"lucide-react-native\";\n\nexport default function App() {\n  const [value, setValue] = useState(\"left\");\n  return (\n    <ToggleGroup type=\"single\" value={value} onValueChange={setValue}>\n      <ToggleGroupItem value=\"left\" aria-label=\"Left align\">\n        <AlignLeft size={16} />\n      </ToggleGroupItem>\n      <ToggleGroupItem value=\"center\" aria-label=\"Center align\">\n        <AlignCenter size={16} />\n      </ToggleGroupItem>\n      <ToggleGroupItem value=\"right\" aria-label=\"Right align\">\n        <AlignRight size={16} />\n      </ToggleGroupItem>\n    </ToggleGroup>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveToggleGroupMockup)
    },
    "tooltip": {
      name: "Tooltip",
      description: "A lightweight contextual popup that surfaces helper text above any trigger element with smooth zoom entrance animations.",
      category: "Core Components",
      installation: "npx nativecn add tooltip",
      usageCode: "import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from \"@nativecn/ui/components/tooltip\";\nimport { Button } from \"@nativecn/ui/components/button\";\n\nexport default function App() {\n  return (\n    <TooltipProvider>\n      <Tooltip>\n        <TooltipTrigger>\n          <Button variant=\"outline\">Hover me</Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          Add to your saved items\n        </TooltipContent>\n      </Tooltip>\n    </TooltipProvider>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveTooltipMockup)
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
    "bar-chart": {
      name: "Bar Chart",
      description: "A pure SVG animated bar chart with smooth entrance transitions, color-coded bars, value labels, and configurable axes.",
      category: "Premium - Charts",
      installation: "npx nativecn add bar-chart",
      usageCode: "import { BarChart } from \"@nativecn/ui/premium/charts/bar-chart\";\n\nexport default function App() {\n  const data = [\n    { label: \"Mon\", value: 40 },\n    { label: \"Tue\", value: 75 },\n    { label: \"Wed\", value: 55 },\n    { label: \"Thu\", value: 90 },\n    { label: \"Fri\", value: 62 },\n  ];\n  return <BarChart data={data} height={200} barColor=\"#a855f7\" />;\n}",
      componentMockup: () => React.createElement(InteractiveBarChartMockup)
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
    "blur-fade": {
      name: "Blur Fade",
      description: "An entrance animation that simultaneously fades and unblurs content as it slides into view, creating a premium reveal feel.",
      category: "Premium - Motion",
      installation: "npx nativecn add blur-fade",
      usageCode: "import { BlurFade } from \"@nativecn/ui/premium/motion/blur-fade\";\n\nexport default function App() {\n  return (\n    <BlurFade delay={0} duration={600}>\n      <Text variant=\"h2\">Hello, World!</Text>\n    </BlurFade>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBlurFadeMockup)
    },
    "border-beam": {
      name: "Border Beam",
      description: "A state-of-the-art glowing laser beam that slides seamlessly around container borders using clean SVG gradients.",
      category: "Premium - Magic",
      installation: "npx nativecn add border-beam",
      usageCode: "import { BorderBeam } from \"@nativecn/ui/premium/magic/border-beam\";\n\nexport default function App() {\n  return (\n    <View style={{ width: 200, height: 200, position: \"relative\" }}>\n      <BorderBeam size={100} duration={4} borderWidth={2} />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveBorderBeamMockup)
    },
    "bottom-tab-bar": {
      name: "Bottom Tab Bar",
      description: "A native mobile navigation bar with spring-animated active indicator, haptic tab-press feedback, and safe-area padding.",
      category: "Premium - Mobile",
      installation: "npx nativecn add bottom-tab-bar",
      usageCode: "import { useState } from \"react\";\nimport { BottomTabBar } from \"@nativecn/ui/premium/mobile/bottom-tab-bar\";\nimport { Home, Search, Bell, User } from \"lucide-react-native\";\n\nexport default function App() {\n  const [active, setActive] = useState(\"home\");\n  const items = [\n    { key: \"home\", label: \"Home\", icon: <Home size={20} /> },\n    { key: \"search\", label: \"Search\", icon: <Search size={20} /> },\n    { key: \"alerts\", label: \"Alerts\", icon: <Bell size={20} /> },\n    { key: \"profile\", label: \"Profile\", icon: <User size={20} /> },\n  ];\n  return <BottomTabBar items={items} activeKey={active} onTabPress={setActive} />;\n}",
      componentMockup: () => React.createElement(InteractiveBottomTabBarMockup)
    },
    "carousel": {
      name: "Carousel",
      description: "A touch-gesture horizontal scrolling carousel with snap-to-item physics, active dot indicators, and looping support.",
      category: "Premium - Layout",
      installation: "npx nativecn add carousel",
      usageCode: "import { Carousel, CarouselItem } from \"@nativecn/ui/premium/layout/carousel\";\n\nexport default function App() {\n  const items = [\"Slide One\", \"Slide Two\", \"Slide Three\"];\n  return (\n    <Carousel>\n      {items.map((item, i) => (\n        <CarouselItem key={i}>\n          <Text>{item}</Text>\n        </CarouselItem>\n      ))}\n    </Carousel>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveCarouselMockup)
    },
    "chat-bubble": {
      name: "AI Chat Bubble",
      description: "A rich chat conversational bubble set showcasing premium typing indicators, message delivery micro-states, and soft glass-morphic text panels.",
      category: "Premium - AI",
      installation: "npx nativecn add chat-bubble",
      usageCode: "import { ChatBubble } from \"@nativecn/ui/premium/ai/chat-bubble\";\nimport { TypingIndicator } from \"@nativecn/ui/premium/ai/typing-indicator\";\n\nexport default function App() {\n  return (\n    <View style={{ gap: 12 }}>\n      <ChatBubble sender=\"user\" text=\"Design a dark landing page.\" />\n      <ChatBubble sender=\"ai\">\n        <TypingIndicator />\n      </ChatBubble>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveChatBubbleMockup)
    },
    "color-picker": {
      name: "Color Picker",
      description: "A full-spectrum HSV color selection wheel with saturation/lightness gradient picker and hex code display.",
      category: "Premium - Inputs",
      installation: "npx nativecn add color-picker",
      usageCode: "import { useState } from \"react\";\nimport { ColorPicker } from \"@nativecn/ui/premium/inputs/color-picker\";\n\nexport default function App() {\n  const [color, setColor] = useState(\"#a855f7\");\n  return (\n    <ColorPicker\n      value={color}\n      onChange={setColor}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveColorPickerMockup)
    },
    "confetti": {
      name: "Confetti",
      description: "A highly-aesthetic, physics-simulated celebration effect that bursts particles across the display with customizable velocity and friction.",
      category: "Premium - Magic",
      installation: "npx nativecn add confetti",
      usageCode: "import { Confetti } from \"@nativecn/ui/premium/magic/confetti\";\nimport { useRef } from \"react\";\n\nexport default function App() {\n  const confettiRef = useRef(null);\n  \n  return (\n    <View>\n      <Button onPress={() => confettiRef.current?.burst()}>\n        Celebrate\n      </Button>\n      <Confetti ref={confettiRef} count={100} />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveConfettiMockup)
    },
    "currency-input": {
      name: "Currency Input",
      description: "A locale-aware monetary input with automatic thousands separator formatting, currency symbol prefix, and validation states.",
      category: "Premium - Inputs",
      installation: "npx nativecn add currency-input",
      usageCode: "import { useState } from \"react\";\nimport { CurrencyInput } from \"@nativecn/ui/premium/inputs/currency-input\";\n\nexport default function App() {\n  const [amount, setAmount] = useState(0);\n  return (\n    <CurrencyInput\n      value={amount}\n      onChangeValue={setAmount}\n      currency=\"USD\"\n      label=\"Amount\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveCurrencyInputMockup)
    },
    "fab": {
      name: "FAB",
      description: "A floating action button with bouncy spring press animation, optional expanded label, and flexible corner positioning.",
      category: "Premium - Mobile",
      installation: "npx nativecn add fab",
      usageCode: "import { Fab } from \"@nativecn/ui/premium/mobile/fab\";\nimport { Plus } from \"lucide-react-native\";\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <Fab\n        icon={<Plus size={24} color=\"white\" />}\n        label=\"New Task\"\n        isExpanded\n        position=\"bottom-right\"\n        onPress={() => console.log(\"FAB pressed\")}\n      />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveFabMockup)
    },
    "floating-dock": {
      name: "Floating Dock",
      description: "A macOS-inspired magnifying dock bar where icons scale up on hover/focus with spring-animated proximity effects.",
      category: "Premium - Layout",
      installation: "npx nativecn add floating-dock",
      usageCode: "import { FloatingDock } from \"@nativecn/ui/premium/layout/floating-dock\";\nimport { Home, Settings, Bell, User } from \"lucide-react-native\";\n\nexport default function App() {\n  const items = [\n    { icon: <Home size={22} />, label: \"Home\", onPress: () => {} },\n    { icon: <Bell size={22} />, label: \"Alerts\", onPress: () => {} },\n    { icon: <Settings size={22} />, label: \"Settings\", onPress: () => {} },\n    { icon: <User size={22} />, label: \"Profile\", onPress: () => {} },\n  ];\n  return <FloatingDock items={items} />;\n}",
      componentMockup: () => React.createElement(InteractiveFloatingDockMockup)
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
    "glass-header": {
      name: "Glass Header",
      description: "A scroll-reactive frosted glass app header with dynamic blur intensity and opacity tied to scroll position.",
      category: "Premium - Glass",
      installation: "npx nativecn add glass-header",
      usageCode: "import { GlassHeader } from \"@nativecn/ui/premium/glass/glass-header\";\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <GlassHeader title=\"Dashboard\" showBackButton />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveGlassHeaderMockup)
    },
    "glass-panel": {
      name: "Glass Panel",
      description: "A minimal frosted-glass surface for layering content over vibrant backgrounds with configurable blur and opacity.",
      category: "Premium - Glass",
      installation: "npx nativecn add glass-panel",
      usageCode: "import { GlassPanel } from \"@nativecn/ui/premium/glass/glass-panel\";\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: \"#6d28d9\" }}>\n      <GlassPanel style={{ margin: 24, padding: 20 }}>\n        <Text style={{ color: \"white\" }}>Glass Panel Content</Text>\n      </GlassPanel>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveGlassPanelMockup)
    },
    "magic-card": {
      name: "Magic Card",
      description: "A premium container with a continuously rotating conic gradient border powered by Reanimated, creating a living holographic frame.",
      category: "Premium - Magic",
      installation: "npx nativecn add magic-card",
      usageCode: "import { MagicCard } from \"@nativecn/ui/premium/magic/magic-card\";\n\nexport default function App() {\n  return (\n    <MagicCard style={{ width: 280 }}>\n      <Text variant=\"h4\">Magic UI</Text>\n      <Text variant=\"muted\">Animated rotating border effect.</Text>\n    </MagicCard>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveMagicCardMockup)
    },
    "marquee": {
      name: "Marquee",
      description: "An infinitely looping horizontal scrolling ticker for announcements, tags, and logos with configurable speed and direction.",
      category: "Premium - Motion",
      installation: "npx nativecn add marquee",
      usageCode: "import { Marquee } from \"@nativecn/ui/premium/motion/marquee\";\n\nexport default function App() {\n  const items = [\"React Native\", \"Expo\", \"Reanimated\", \"NativeCN\", \"TypeScript\"];\n  return (\n    <Marquee speed={50}>\n      {items.map((item, i) => (\n        <Text key={i} style={{ marginRight: 32, color: \"#a855f7\" }}>{item}</Text>\n      ))}\n    </Marquee>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveMarqueeMockup)
    },
    "meteors": {
      name: "Meteors",
      description: "An atmospheric particle effect rendering diagonal shooting stars across the screen using randomized linear gradient streaks.",
      category: "Premium - Magic",
      installation: "npx nativecn add meteors",
      usageCode: "import { Meteors } from \"@nativecn/ui/premium/magic/meteors\";\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: \"#0f0a1e\" }}>\n      <Meteors number={25} />\n      <Text style={{ color: \"white\", textAlign: \"center\" }}>Meteor shower</Text>\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveMeteorsMockup)
    },
    "otp-input": {
      name: "OTP Input",
      description: "An elegant, multi-box One-Time Password component featuring glowing focus borders, a simulated active cursor, and soft slide-in character animations.",
      category: "Premium - Inputs",
      installation: "npx nativecn add otp-input",
      usageCode: "import { OtpInput } from \"@nativecn/ui/premium/inputs/otp-input\";\n\nexport default function App() {\n  const handleComplete = (code: string) => {\n    console.log(\"Entered OTP:\", code);\n  };\n\n  return (\n    <OtpInput \n      length={4} \n      onComplete={handleComplete} \n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveOtpInputMockup)
    },
    "phone-input": {
      name: "Phone Input",
      description: "An international phone number input with country flag picker, dial-code prefix, and real-time formatting as you type.",
      category: "Premium - Inputs",
      installation: "npx nativecn add phone-input",
      usageCode: "import { useState } from \"react\";\nimport { PhoneInput } from \"@nativecn/ui/premium/inputs/phone-input\";\n\nexport default function App() {\n  const [phone, setPhone] = useState(\"\");\n  return (\n    <PhoneInput\n      value={phone}\n      onChangeText={setPhone}\n      defaultCountry=\"US\"\n      label=\"Phone Number\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractivePhoneInputMockup)
    },
    "progress-ring": {
      name: "Progress Ring",
      description: "An animated, vector-based SVG progress indicator supporting smooth dashboard status transitions, double arcs, and central statistics representation.",
      category: "Premium - Charts",
      installation: "npx nativecn add progress-ring",
      usageCode: "import { ProgressRing } from \"@nativecn/ui/premium/charts/progress-ring\";\n\nexport default function App() {\n  return (\n    <ProgressRing \n      size={140} \n      strokeWidth={12} \n      percentage={72} \n      primaryColor=\"#a855f7\" \n      secondaryColor=\"#1e1b4b\"\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveProgressRingMockup)
    },
    "pull-to-refresh": {
      name: "Pull to Refresh",
      description: "A native pull-to-refresh gesture wrapper with custom animated spinner and smooth release threshold feedback.",
      category: "Premium - Mobile",
      installation: "npx nativecn add pull-to-refresh",
      usageCode: "import { PullToRefresh } from \"@nativecn/ui/premium/mobile/pull-to-refresh\";\nimport { ScrollView } from \"react-native\";\n\nexport default function App() {\n  const handleRefresh = async () => {\n    await new Promise(resolve => setTimeout(resolve, 1500));\n  };\n  return (\n    <PullToRefresh onRefresh={handleRefresh}>\n      <ScrollView>\n        <Text>Pull down to refresh this list.</Text>\n      </ScrollView>\n    </PullToRefresh>\n  );\n}",
      componentMockup: () => React.createElement(InteractivePullToRefreshMockup)
    },
    "pulsating-button": {
      name: "Pulsating Button",
      description: "A glowing CTA button with a radiating pulse ring animation that continuously draws the user's eye to take action.",
      category: "Premium - Motion",
      installation: "npx nativecn add pulsating-button",
      usageCode: "import { PulsatingButton } from \"@nativecn/ui/premium/motion/pulsating-button\";\n\nexport default function App() {\n  return (\n    <PulsatingButton\n      label=\"Live Now\"\n      pulseColor=\"rgba(168, 85, 247, 0.4)\"\n      onPress={() => console.log(\"Pulsed!\")}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractivePulsatingButtonMockup)
    },
    "rating": {
      name: "Rating",
      description: "An interactive star rating input with half-star precision, animated fill transitions, and customizable colors and sizes.",
      category: "Premium - Inputs",
      installation: "npx nativecn add rating",
      usageCode: "import { useState } from \"react\";\nimport { Rating } from \"@nativecn/ui/premium/inputs/rating\";\n\nexport default function App() {\n  const [rating, setRating] = useState(4);\n  return (\n    <Rating\n      value={rating}\n      onChange={setRating}\n      maxStars={5}\n      size={32}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveRatingMockup)
    },
    "ripple": {
      name: "Ripple",
      description: "A concentric animated pulse effect that radiates outward from a center point, ideal for radar pings and attention-drawing callouts.",
      category: "Premium - Magic",
      installation: "npx nativecn add ripple",
      usageCode: "import { Ripple } from \"@nativecn/ui/premium/magic/ripple\";\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, alignItems: \"center\", justifyContent: \"center\" }}>\n      <Ripple\n        color=\"rgba(168, 85, 247, 0.2)\"\n        numRipples={4}\n        style={{ width: 200, height: 200 }}\n      />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveRippleMockup)
    },
    "shimmer": {
      name: "Shimmer",
      description: "A looping skeleton shimmer effect powered by a sweeping LinearGradient, giving loading placeholders a premium polished feel.",
      category: "Premium - Magic",
      installation: "npx nativecn add shimmer",
      usageCode: "import { Shimmer } from \"@nativecn/ui/premium/magic/shimmer\";\n\nexport default function App() {\n  return (\n    <View style={{ gap: 10, padding: 16 }}>\n      <Shimmer width=\"100%\" height={18} borderRadius={6} />\n      <Shimmer width=\"70%\" height={18} borderRadius={6} />\n      <Shimmer width={80} height={80} borderRadius={40} />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveShimmerMockup)
    },
    "shiny-button": {
      name: "Shiny Button",
      description: "A premium CTA button with a perpetually sweeping light-gloss highlight that draws user attention with subtle animated brilliance.",
      category: "Premium - Magic",
      installation: "npx nativecn add shiny-button",
      usageCode: "import { ShinyButton } from \"@nativecn/ui/premium/magic/shiny-button\";\n\nexport default function App() {\n  return (\n    <ShinyButton\n      label=\"Get Started Free\"\n      onPress={() => console.log(\"Shiny press!\")}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveShinyButtonMockup)
    },
    "step-indicator": {
      name: "Step Indicator",
      description: "A horizontal multi-step onboarding progress tracker with animated connector lines and active step highlight transitions.",
      category: "Premium - Onboarding",
      installation: "npx nativecn add step-indicator",
      usageCode: "import { StepIndicator } from \"@nativecn/ui/premium/onboarding/step-indicator\";\n\nexport default function App() {\n  return (\n    <StepIndicator\n      steps={[\"Account\", \"Profile\", \"Preferences\", \"Done\"]}\n      currentStep={2}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveStepIndicatorMockup)
    },
    "swipe-row": {
      name: "Swipe Row",
      description: "A horizontally swipeable list row exposing configurable left/right action buttons with smooth spring gesture physics.",
      category: "Premium - Mobile",
      installation: "npx nativecn add swipe-row",
      usageCode: "import { SwipeRow } from \"@nativecn/ui/premium/mobile/swipe-row\";\nimport { Trash2, Archive } from \"lucide-react-native\";\n\nexport default function App() {\n  return (\n    <SwipeRow\n      leftActions={[{ icon: Archive, label: \"Archive\", color: \"#3b82f6\", onPress: () => {} }]}\n      rightActions={[{ icon: Trash2, label: \"Delete\", color: \"#ef4444\", onPress: () => {} }]}\n    >\n      <Text>Swipe me left or right</Text>\n    </SwipeRow>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSwipeRowMockup)
    },
    "swipeable-card-stack": {
      name: "Swipeable Card Stack",
      description: "A Tinder-style gesture-driven card stack where users swipe through items with spring physics and directional callbacks.",
      category: "Premium - Mobile",
      installation: "npx nativecn add swipeable-card-stack",
      usageCode: "import { SwipeableCardStack } from \"@nativecn/ui/premium/mobile/swipeable-card-stack\";\n\nexport default function App() {\n  const cards = [\n    { id: \"1\", title: \"Card One\", color: \"#a855f7\" },\n    { id: \"2\", title: \"Card Two\", color: \"#3b82f6\" },\n    { id: \"3\", title: \"Card Three\", color: \"#10b981\" },\n  ];\n  return (\n    <SwipeableCardStack\n      data={cards}\n      renderCard={(item) => <Text style={{ color: \"white\" }}>{item.title}</Text>}\n      onSwipeLeft={(item) => console.log(\"Skipped:\", item.id)}\n      onSwipeRight={(item) => console.log(\"Liked:\", item.id)}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveSwipeableCardStackMockup)
    },
    "typing-indicator": {
      name: "Typing Indicator",
      description: "A three-dot AI typing animation with staggered bounce physics to signal that a response is being generated.",
      category: "Premium - AI",
      installation: "npx nativecn add typing-indicator",
      usageCode: "import { TypingIndicator } from \"@nativecn/ui/premium/ai/typing-indicator\";\n\nexport default function App() {\n  return (\n    <View style={{ padding: 16 }}>\n      <TypingIndicator />\n    </View>\n  );\n}",
      componentMockup: () => React.createElement(InteractiveTypingIndicatorMockup)
    },
    "typing-text": {
      name: "Typing Text",
      description: "A character-by-character typewriter text animation with configurable speed, cursor blink, and optional loop or delete phases.",
      category: "Premium - Motion",
      installation: "npx nativecn add typing-text",
      usageCode: "import { TypingText } from \"@nativecn/ui/premium/motion/typing-text\";\n\nexport default function App() {\n  return (\n    <TypingText\n      text=\"Building the future of mobile UI...\"\n      speed={60}\n      style={{ fontSize: 18, color: \"#a855f7\" }}\n    />\n  );\n}",
      componentMockup: () => React.createElement(InteractiveTypingTextMockup)
    },
  }
};

export function getDocEntry(category: string, slug: string): DocEntry | null {
  return docsRegistry[category]?.[slug] || null;
}
