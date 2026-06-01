"use client";

import React, { useState, useEffect } from "react";
import { Mail, Lock, User, Check, Star, Settings, Fingerprint, Eye, EyeOff, MessageSquare, AlertCircle, TrendingUp, ArrowUpRight, ArrowDownLeft, ShieldCheck, Sun, Thermometer, Radio, Tv, Moon, Play, Sparkles, Heart, ShoppingCart, Send, ChevronLeft, ChevronRight, Minus, Plus, Package, Truck } from "lucide-react";
import styles from "../../../styles/docs.module.css";
import compStyles from "../../../styles/components.module.css";
import CodeBlock from "../../../components/code-block";
import Simulator from "../../../components/simulator";

type SimType = "fintech" | "crypto" | "smarthome" | "social" | "ecommerce";

interface ComponentTag {
  name: string;
  type: "core" | "premium";
  slug: string;
}

const SIMULATIONS_META: Record<SimType, {
  title: string;
  description: string;
  components: ComponentTag[];
  code: string;
}> = {
  fintech: {
    title: "Fintech Dashboard",
    description: "A premium wealth management interface blending frosted glass panels, interactive charts, goals progress tracking, and custom bottom navigation tabs.",
    components: [
      { name: "Glass Card", type: "premium", slug: "glass-card" },
      { name: "Bar Chart", type: "premium", slug: "bar-chart" },
      { name: "Progress", type: "core", slug: "progress" },
      { name: "Avatar", type: "core", slug: "avatar" },
      { name: "Badge", type: "core", slug: "badge" },
      { name: "Bottom Tab Bar", type: "premium", slug: "bottom-tab-bar" }
    ],
    code: `import React from "react";
import { View, ScrollView } from "react-native";
import { GlassCard } from "@nativecn/ui/premium/glass/glass-card";
import { BarChart } from "@nativecn/ui/premium/charts/bar-chart";
import { Progress } from "@nativecn/ui/components/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@nativecn/ui/components/avatar";
import { Badge } from "@nativecn/ui/components/badge";
import { BottomTabBar } from "@nativecn/ui/premium/mobile/bottom-tab-bar";

export default function FinancialApp() {
  const chartData = [
    { label: "Mon", value: 35 },
    { label: "Tue", value: 72 },
    { label: "Wed", value: 50 },
    { label: "Thu", value: 85 },
    { label: "Fri", value: 60 }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#09090b" }}>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        {/* Header with Avatar & Status */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ color: "#a1a1aa", fontSize: 12 }}>Good Morning</Text>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Agent Antigravity</Text>
          </View>
          <Avatar size="md">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
        </View>

        {/* Wealth Card */}
        <GlassCard intensity="high" glowColor="rgba(168, 85, 247, 0.15)">
          <Text style={{ color: "#a1a1aa", fontSize: 11, textTransform: "uppercase" }}>Total Assets</Text>
          <Text style={{ color: "#fff", fontSize: 32, fontWeight: "800", marginVertical: 8 }}>$42,854.10</Text>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <Badge variant="success">+12.4%</Badge>
            <Text style={{ color: "#71717a", fontSize: 11 }}>since last week</Text>
          </View>
        </GlassCard>

        {/* Performance Chart */}
        <View style={{ gap: 8 }}>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>Weekly Spendings</Text>
          <BarChart data={chartData} height={160} barColor="#a855f7" />
        </View>

        {/* Savings Goal Tracking */}
        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>Tesla Model Y Goal</Text>
            <Text style={{ color: "#a855f7", fontSize: 12, fontWeight: "bold" }}>68%</Text>
          </View>
          <Progress value={68} max={100} />
        </View>
      </ScrollView>

      {/* Bottom Nav Bar */}
      <BottomTabBar activeKey="home" />
    </View>
  );
}`
  },
  crypto: {
    title: "Crypto Vault Wallet",
    description: "An ultra-secure holdings portal driven by a continuous rotating laser border (Magic Card), Face ID local verification, and dynamic 6-digit OTP codes.",
    components: [
      { name: "Magic Card", type: "premium", slug: "magic-card" },
      { name: "Border Beam", type: "premium", slug: "border-beam" },
      { name: "Biometric Button", type: "premium", slug: "biometric-button" },
      { name: "OTP Input", type: "premium", slug: "otp-input" },
      { name: "Table", type: "core", slug: "table" },
      { name: "Badge", type: "core", slug: "badge" }
    ],
    code: `import React, { useState } from "react";
import { View } from "react-native";
import { MagicCard } from "@nativecn/ui/premium/magic/magic-card";
import { BorderBeam } from "@nativecn/ui/premium/magic/border-beam";
import { BiometricButton } from "@nativecn/ui/premium/mobile/biometric-button";
import { OtpInput } from "@nativecn/ui/premium/inputs/otp-input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@nativecn/ui/components/table";

export default function SecureWallet() {
  const [locked, setLocked] = useState(true);
  const [otpSent, setOtpSent] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#09090b", padding: 16 }}>
      {locked ? (
        <View style={{ flex: 1, justifyContent: "center", gap: 16 }}>
          <BiometricButton 
            title="Unlock Cryptographic Vault" 
            onSuccess={() => setLocked(false)}
          />
        </View>
      ) : (
        <View style={{ gap: 20 }}>
          {/* Glowing Magic Wallet Card */}
          <MagicCard style={{ padding: 20 }}>
            <BorderBeam size={120} duration={3} />
            <Text style={{ color: "#a1a1aa", fontSize: 11 }}>Secure Wallet Address</Text>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>1.248 BTC</Text>
            <Text style={{ color: "#a855f7", fontSize: 12 }}>≈ $84,952.12 USD</Text>
          </MagicCard>

          {/* Holdings list using Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset Head</TableHead>
                <TableHead>Holding</TableHead>
                <TableHead style={{ textAlign: "right" }}>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell style={{ color: "#fff" }}>Bitcoin (BTC)</TableCell>
                <TableCell style={{ color: "#a1a1aa" }}>1.248</TableCell>
                <TableCell style={{ color: "#22c55e", textAlign: "right" }}>$84,952</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: "#fff" }}>Ethereum (ETH)</TableCell>
                <TableCell style={{ color: "#a1a1aa" }}>14.85</TableCell>
                <TableCell style={{ color: "#22c55e", textAlign: "right" }}>$49,240</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </View>
      )}
    </View>
  );
}`
  },
  smarthome: {
    title: "Smart Home Panel",
    description: "An advanced automation panel displaying room tabs, dynamic switches, light dimming sliders, and a circular progress ring indicating active energy metrics.",
    components: [
      { name: "Tabs", type: "core", slug: "tabs" },
      { name: "Accordion", type: "core", slug: "accordion" },
      { name: "Switch", type: "core", slug: "switch" },
      { name: "Slider", type: "core", slug: "slider" },
      { name: "Progress Ring", type: "premium", slug: "progress-ring" },
      { name: "Toast", type: "core", slug: "toast" }
    ],
    code: `import React, { useState } from "react";
import { View } from "react-native";
import { Tabs, TabsList, TabsTrigger } from "@nativecn/ui/components/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@nativecn/ui/components/accordion";
import { Switch } from "@nativecn/ui/components/switch";
import { Slider } from "@nativecn/ui/components/slider";
import { ProgressRing } from "@nativecn/ui/premium/magic/progress-ring";
import { useToast } from "@nativecn/ui/hooks/use-toast";

export default function SmartHome() {
  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const { toast } = useToast();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#09090b", padding: 16 }}>
      {/* Active Room Tabs */}
      <Tabs defaultValue="living">
        <TabsList>
          <TabsTrigger value="living">Living Room</TabsTrigger>
          <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Energy efficiency circular indicator */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <ProgressRing value={brightness} size={130} progressColor="#a855f7">
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>{brightness}%</Text>
          <Text style={{ color: "#71717a", fontSize: 10 }}>Load Factor</Text>
        </ProgressRing>
      </View>

      {/* Smart lighting switches */}
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#fff" }}>Ceiling Chandelier</Text>
          <Switch checked={lightOn} onCheckedChange={(val) => {
            setLightOn(val);
            toast({ title: val ? "Lights On" : "Lights Off", description: "Luminaires updated." });
          }} />
        </View>

        {lightOn && (
          <View style={{ gap: 6 }}>
            <Text style={{ color: "#a1a1aa", fontSize: 12 }}>Chandelier Brightness</Text>
            <Slider value={brightness} onValueChange={setBrightness} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}`
  },
  social: {
    title: "AI Chat Feed",
    description: "A real-time AI messaging experience combining elegant chat bubbles, typing indicators, glass panels, and a floating action button for quick compose.",
    components: [
      { name: "Chat Bubble", type: "premium", slug: "chat-bubble" },
      { name: "Typing Indicator", type: "premium", slug: "typing-indicator" },
      { name: "Glass Panel", type: "premium", slug: "glass-panel" },
      { name: "Avatar", type: "core", slug: "avatar" },
      { name: "FAB", type: "premium", slug: "fab" },
      { name: "Input", type: "core", slug: "input" }
    ],
    code: `import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { ChatBubble } from "@nativecn/ui/premium/ai/chat-bubble";
import { TypingIndicator } from "@nativecn/ui/premium/ai/typing-indicator";
import { GlassPanel } from "@nativecn/ui/premium/glass/glass-panel";
import { Avatar, AvatarFallback } from "@nativecn/ui/components/avatar";
import { Fab } from "@nativecn/ui/premium/mobile/fab";
import { Input } from "@nativecn/ui/components/input";

export default function AIChatFeed() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I can help you build beautiful UIs." },
    { sender: "user", text: "Design a dark-mode settings screen." },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#09090b" }}>
      <GlassPanel style={{ padding: 16 }}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>AI Assistant</Text>
      </GlassPanel>
      <ScrollView style={{ flex: 1, padding: 16, gap: 12 }}>
        {messages.map((msg, i) => (
          <ChatBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        <ChatBubble sender="ai"><TypingIndicator /></ChatBubble>
      </ScrollView>
      <View style={{ padding: 12 }}>
        <Input placeholder="Type your prompt..." />
      </View>
    </View>
  );
}`
  },
  ecommerce: {
    title: "E-Commerce Product",
    description: "A gorgeous product detail page featuring an image carousel, star ratings, quantity stepper, shimmer loading, and animated add-to-cart with confetti burst.",
    components: [
      { name: "Carousel", type: "premium", slug: "carousel" },
      { name: "Rating", type: "premium", slug: "rating" },
      { name: "Badge", type: "core", slug: "badge" },
      { name: "Button", type: "core", slug: "button" },
      { name: "Confetti", type: "premium", slug: "confetti" },
      { name: "Shimmer", type: "premium", slug: "shimmer" }
    ],
    code: `import React, { useState, useRef } from "react";
import { View, ScrollView, Image } from "react-native";
import { Carousel, CarouselItem } from "@nativecn/ui/premium/layout/carousel";
import { Rating } from "@nativecn/ui/premium/inputs/rating";
import { Badge } from "@nativecn/ui/components/badge";
import { Button } from "@nativecn/ui/components/button";
import { Confetti } from "@nativecn/ui/premium/magic/confetti";
import { Shimmer } from "@nativecn/ui/premium/magic/shimmer";

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const [inCart, setInCart] = useState(false);
  const confettiRef = useRef(null);

  const addToCart = () => {
    setInCart(true);
    confettiRef.current?.burst();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#09090b" }}>
      <Carousel>
        <CarouselItem><Image source={{ uri: "https://..." }} /></CarouselItem>
      </Carousel>

      <View style={{ padding: 16, gap: 12 }}>
        <Badge variant="success">In Stock</Badge>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Matte Black Headphones</Text>
        <Rating value={4} />
        <Text style={{ color: "#a855f7", fontSize: 24, fontWeight: "800" }}>$249.99</Text>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <Button variant="outline" onPress={() => setQty(q => Math.max(1, q-1))}>-</Button>
          <Text style={{ color: "#fff", fontSize: 18 }}>{qty}</Text>
          <Button variant="outline" onPress={() => setQty(q => q+1)}>+</Button>
        </View>

        <Button onPress={addToCart}>
          <Button.Text>{inCart ? "Added to Cart ✓" : "Add to Cart"}</Button.Text>
        </Button>
      </View>

      <Confetti ref={confettiRef} count={80} />
    </ScrollView>
  );
}`
  }
};

export default function CompositeSimulationsPage() {
  const [activeSim, setActiveSim] = useState<SimType>("fintech");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const meta = SIMULATIONS_META[activeSim];

  return (
    <div style={{ maxWidth: "1200px" }}>
      <header className={styles.docHeader}>
        <h1 className={styles.title}>Multi-Component Showcase</h1>
        <p className={styles.description}>
          Experience how multiple core and premium Nativecn components work together in full synergy. 
          Select a template to view the interactive live simulation and copy its layout code.
        </p>
      </header>

      {/* Simulation Selector Bar */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "24px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        paddingBottom: "16px"
      }}>
        {(["fintech", "crypto", "smarthome", "social", "ecommerce"] as SimType[]).map((simKey) => {
          const isActive = activeSim === simKey;
          const labelMap: Record<SimType, string> = {
            fintech: "💰 Wealth Fintech",
            crypto: "🪙 Crypto Vault",
            smarthome: "🏠 Smart Home",
            social: "💬 AI Chat Feed",
            ecommerce: "🛒 E-Commerce"
          };
          const label = labelMap[simKey];
          return (
            <button
              key={simKey}
              onClick={() => {
                setActiveSim(simKey);
                setActiveTab("preview");
              }}
              style={{
                background: isActive ? "rgba(168, 85, 247, 0.15)" : "rgba(255,255,255,0.02)",
                color: isActive ? "#c084fc" : "#94a3b8",
                border: `1px solid ${isActive ? "rgba(168, 85, 247, 0.3)" : "rgba(255,255,255,0.05)"}`,
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Layout Split: Left Info + Code, Right Simulator */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 380px",
        gap: "32px",
        alignItems: "start"
      }} className="docs-sim-grid">
        {/* Left Hand: Info and code */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0" }}>{meta.title}</h2>
            <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: "1.6", margin: 0 }}>{meta.description}</p>
          </div>

          {/* Used Components Badge Grid */}
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: "600", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px 0" }}>
              Composite Components
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {meta.components.map((comp) => (
                <a
                  key={comp.slug}
                  href={`/docs/${comp.type}/${comp.slug}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "6px",
                    padding: "4px 10px",
                    fontSize: "12px",
                    color: "#e4e4e7",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#a855f7";
                    e.currentTarget.style.background = "rgba(168, 85, 247, 0.05)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  }}
                >
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: comp.type === "premium" ? "#a855f7" : "#3b82f6"
                  }} />
                  {comp.name}
                  <span style={{ fontSize: "9px", color: "#71717a", marginLeft: "2px" }}>
                    ({comp.type})
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Preview vs Code Tab Trigger */}
          <div className={compStyles.tabsContainer}>
            <div className={compStyles.tabList} style={{ width: "max-content" }}>
              <button
                onClick={() => setActiveTab("preview")}
                className={`${compStyles.tabTrigger} ${activeTab === "preview" ? compStyles.tabTriggerActive : ""}`}
              >
                Information & Interaction
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`${compStyles.tabTrigger} ${activeTab === "code" ? compStyles.tabTriggerActive : ""}`}
              >
                Layout Source Code
              </button>
            </div>

            <div className={compStyles.tabContent}>
              {activeTab === "preview" ? (
                <div style={{
                  background: "rgba(255,255,255,0.01)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px"
                }}>
                  <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: 0 }}>Interactive Instructions</h4>
                  <p style={{ color: "#a1a1aa", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    Tweak settings, enter inputs, and simulate biometrics in the phone mockup to the right. 
                    Observe the seamless coordination between layout elements. To inject this design block:
                  </p>
                  <ol style={{ paddingLeft: "18px", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "6px", margin: 0 }}>
                    <li>Ensure all component dependencies listed above are added to your project.</li>
                    <li>Copy the layout code under the <strong>Layout Source Code</strong> tab.</li>
                    <li>Drop the file straight into your views folder to get a beautiful premium screen instantly.</li>
                  </ol>
                </div>
              ) : (
                <div className={compStyles.codeArea}>
                  <CodeBlock code={meta.code} filename={`${meta.title}.tsx`} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Hand: Phone Simulator */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Simulator>
            {activeSim === "fintech" && <FintechSimulation />}
            {activeSim === "crypto" && <CryptoSimulation />}
            {activeSim === "smarthome" && <SmartHomeSimulation />}
            {activeSim === "social" && <SocialChatSimulation />}
            {activeSim === "ecommerce" && <EcommerceSimulation />}
          </Simulator>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .docs-sim-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ==========================================================================
   A. FINTECH LIVE SIMULATION MOCKUP
   ========================================================================== */
function FintechSimulation() {
  const [activeTab, setActiveTab] = useState("home");
  const [timeframe, setTimeframe] = useState<"1W" | "1M" | "1Y">("1W");
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);

  const weeklyData = [35, 72, 50, 85, 60];
  const monthlyData = [55, 45, 80, 70, 95];
  const yearlyData = [25, 40, 50, 35, 75];

  const currentChart = timeframe === "1W" ? weeklyData : timeframe === "1M" ? monthlyData : yearlyData;
  const maxValue = Math.max(...currentChart);

  const handleTransfer = () => {
    setIsTransferring(true);
    setTimeout(() => {
      setIsTransferring(false);
      setTransferSuccess(true);
      setTimeout(() => setTransferSuccess(false), 2500);
    }, 1500);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#09090b",
      color: "#fafafa",
      fontFamily: "Inter, system-ui, sans-serif",
      position: "relative"
    }}>
      {/* Top Banner (Header) */}
      <div style={{
        padding: "16px 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div>
          <span style={{ fontSize: "11px", color: "#71717a" }}>Asset Balance</span>
          <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: 0 }}>$42,854.10</h2>
        </div>
        {/* Avatar component simulation */}
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a855f7, #6366f1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: "12px",
          border: "2px solid rgba(255, 255, 255, 0.1)"
        }}>
          AA
        </div>
      </div>

      <div style={{ flex: 1, padding: "8px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
        
        {/* Glass Card component simulation */}
        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.05em" }}>Weekly Yield</span>
            <span style={{ background: "rgba(34, 197, 94, 0.12)", color: "#22c55e", fontSize: "10px", fontWeight: "700", padding: "2px 6px", borderRadius: "20px" }}>
              +12.4%
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <span style={{ fontSize: "22px", fontWeight: "800" }}>+$1,482.04</span>
            <span style={{ fontSize: "11px", color: "#71717a" }}>ROI Index</span>
          </div>
        </div>

        {/* Dynamic Interactive SVG Bar Chart */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "12px", fontWeight: "600" }}>Asset Allocation</span>
            <div style={{ display: "flex", gap: "4px", background: "rgba(255,255,255,0.03)", padding: "2px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)" }}>
              {(["1W", "1M", "1Y"] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  style={{
                    background: timeframe === tf ? "#a855f7" : "transparent",
                    color: timeframe === tf ? "#fff" : "#71717a",
                    border: "none",
                    borderRadius: "4px",
                    padding: "2px 6px",
                    fontSize: "9px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Bar Chart Container */}
          <div style={{
            height: "100px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "8px 4px",
            background: "rgba(255, 255, 255, 0.01)",
            border: "1px solid rgba(255, 255, 255, 0.04)",
            borderRadius: "10px"
          }}>
            {currentChart.map((val, idx) => {
              const heightPct = (val / maxValue) * 100;
              return (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, gap: "6px" }}>
                  <div style={{
                    width: "14px",
                    height: `${heightPct * 0.7}px`,
                    background: "linear-gradient(to top, #7e22ce, #a855f7)",
                    borderRadius: "4px",
                    boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)",
                    transition: "height 0.4s ease"
                  }} />
                  <span style={{ fontSize: "9px", color: "#71717a" }}>
                    {timeframe === "1W" ? ["M", "T", "W", "T", "F"][idx] : timeframe === "1M" ? `W${idx+1}` : `Q${idx+1}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Goals Progress Tracking Component */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
            <span style={{ color: "#a1a1aa" }}>Savings Goal (Tesla Model Y)</span>
            <span style={{ color: "#a855f7", fontWeight: "700" }}>68%</span>
          </div>
          {/* Progress Bar primitive simulation */}
          <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: "68%", height: "100%", background: "#a855f7", borderRadius: "4px", boxShadow: "0 0 6px #a855f7" }} />
          </div>
        </div>

        {/* Quick Send Action Grid with states */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Quick Transact</span>
          <button
            onClick={handleTransfer}
            disabled={isTransferring}
            style={{
              background: transferSuccess ? "#22c55e" : "rgba(255, 255, 255, 0.03)",
              border: `1px solid ${transferSuccess ? "#22c55e" : "rgba(255, 255, 255, 0.08)"}`,
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "600",
              transition: "all 0.3s ease"
            }}
          >
            {isTransferring ? (
              <span className="spinner" style={{
                width: "12px",
                height: "12px",
                border: "2px solid #fff",
                borderTopColor: "transparent",
                borderRadius: "50%",
                display: "inline-block",
                animation: "spin 1s linear infinite"
              }} />
            ) : transferSuccess ? (
              <>
                <Check size={14} strokeWidth={3} />
                <span>$250 Transferred successfully</span>
              </>
            ) : (
              <>
                <ArrowUpRight size={14} style={{ color: "#a855f7" }} />
                <span>Auto-Allocate $250 to Savings</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Bottom Navigation tab simulation */}
      <div style={{
        display: "flex",
        background: "rgba(10, 10, 12, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "10px 16px",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {["home", "invest", "vault", "profile"].map((t) => {
          const isActive = activeTab === t;
          return (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isActive ? "#a855f7" : "#71717a",
                fontSize: "10px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                textTransform: "capitalize",
                transition: "color 0.2s"
              }}
            >
              <div style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: isActive ? "rgba(168, 85, 247, 0.1)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                •
              </div>
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ==========================================================================
   B. CRYPTO VAULT LIVE SIMULATION MOCKUP
   ========================================================================== */
function CryptoSimulation() {
  const [isLocked, setIsLocked] = useState(true);
  const [authProgress, setAuthProgress] = useState<"idle" | "verifying" | "unlocked">("idle");
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpCode, setOtpCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [sendingFunds, setSendingFunds] = useState(false);
  const [transferDone, setTransferDone] = useState(false);

  const triggerFaceID = () => {
    setAuthProgress("verifying");
    setTimeout(() => {
      setAuthProgress("unlocked");
      setTimeout(() => {
        setIsLocked(false);
      }, 500);
    }, 1800);
  };

  const handleOtpInput = (val: string, index: number) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otpCode];
    newOtp[index] = val.slice(-1);
    setOtpCode(newOtp);

    // If fully filled
    if (newOtp.every(char => char !== "")) {
      setSendingFunds(true);
      setTimeout(() => {
        setSendingFunds(false);
        setOtpOpen(false);
        setTransferDone(true);
        setTimeout(() => setTransferDone(false), 3000);
        setOtpCode(["", "", "", "", "", ""]);
      }, 2000);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#09090b",
      color: "#fafafa",
      fontFamily: "Inter, system-ui, sans-serif",
      position: "relative",
      padding: "16px",
      justifyContent: isLocked ? "center" : "flex-start",
      overflow: "hidden"
    }}>
      {/* OTP Password Verification Popup */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(9, 9, 11, 0.95)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
        display: otpOpen ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "16px",
        textAlign: "center"
      }}>
        <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "700" }}>Securing Blockchain Link</h4>
        <p style={{ margin: 0, fontSize: "11px", color: "#a1a1aa", lineHeight: "1.4" }}>
          We have generated an OTP code to authorise the outflow of 0.25 BTC:
        </p>

        {/* OTP Input component simulation */}
        <div style={{ display: "flex", gap: "6px", margin: "12px 0" }}>
          {otpCode.map((char, i) => (
            <input
              key={i}
              type="text"
              pattern="[0-9]*"
              value={char}
              onChange={e => handleOtpInput(e.target.value, i)}
              style={{
                width: "30px",
                height: "36px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "6px",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "700",
                color: "#c084fc",
                outline: "none"
              }}
            />
          ))}
        </div>
        
        <span style={{ fontSize: "10px", color: "#71717a" }}>
          {sendingFunds ? "Publishing Transaction block..." : "Enter 6-digit OTP code to submit"}
        </span>

        <button
          onClick={() => { setOtpOpen(false); setOtpCode(["", "", "", "", "", ""]); }}
          style={{ background: "transparent", border: "none", color: "#71717a", fontSize: "12px", cursor: "pointer" }}
        >
          Cancel
        </button>
      </div>

      {isLocked ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(168, 85, 247, 0.05)",
            border: `1px solid ${authProgress === "verifying" ? "#a855f7" : "rgba(168, 85, 247, 0.2)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: authProgress === "verifying" ? "#c084fc" : "#a855f7",
            boxShadow: authProgress === "verifying" ? "0 0 20px rgba(168, 85, 247, 0.15)" : "none"
          }}>
            <Fingerprint size={28} />
          </div>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "700", textAlign: "center", margin: 0 }}>Vault Encrypted</h3>
            <p style={{ fontSize: "11px", color: "#71717a", textAlign: "center", margin: "4px 0 0 0" }}>Local cryptography key is locked.</p>
          </div>

          {/* Biometric Button component simulation */}
          <button
            onClick={triggerFaceID}
            disabled={authProgress === "verifying"}
            style={{
              background: "#a855f7",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "12px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {authProgress === "verifying" ? "Scanning credentials..." : "Decrypt via Face ID"}
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {/* Magic Card with Border Beam moving effect */}
          <div style={{
            position: "relative",
            background: "rgba(15, 15, 20, 0.9)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            borderRadius: "12px",
            padding: "16px",
            overflow: "hidden",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)"
          }}>
            {/* Animated Laser Border Beam */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              border: "2px solid transparent",
              background: "linear-gradient(90deg, #a855f7, #6366f1) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
              opacity: 0.7
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", color: "#a1a1aa" }}>Asset Holdings</span>
              <span style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", fontSize: "9px", fontWeight: "700", padding: "1px 5px", borderRadius: "10px" }}>
                Active Vault
              </span>
            </div>
            <h2 style={{ fontSize: "24px", fontWeight: "800", margin: "8px 0 2px 0" }}>1.248 BTC</h2>
            <span style={{ fontSize: "12px", color: "#22c55e" }}>≈ $84,952.12 USD</span>
          </div>

          {/* Transfer status alert */}
          {transferDone && (
            <div style={{
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              borderRadius: "8px",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <Check size={14} color="#22c55e" strokeWidth={3} />
              <span style={{ fontSize: "11px", color: "#22c55e" }}>0.25 BTC dispatched successfully.</span>
            </div>
          )}

          {/* Holdings Table */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "11px", color: "#71717a", textTransform: "uppercase" }}>Cryptocurrency Ledger</span>
            <div style={{
              background: "rgba(255,255,255,0.01)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "8px",
              overflow: "hidden"
            }}>
              {/* Row 1 */}
              <div style={{ display: "flex", justifyItems: "space-between", padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", flex: 1 }}>Bitcoin</span>
                <span style={{ fontSize: "12px", color: "#a1a1aa", marginRight: "12px" }}>1.248</span>
                <span style={{ fontSize: "12px", color: "#22c55e" }}>$84,952</span>
              </div>
              {/* Row 2 */}
              <div style={{ display: "flex", justifyItems: "space-between", padding: "8px 12px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", flex: 1 }}>Ethereum</span>
                <span style={{ fontSize: "12px", color: "#a1a1aa", marginRight: "12px" }}>14.85</span>
                <span style={{ fontSize: "12px", color: "#22c55e" }}>$49,240</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => setOtpOpen(true)}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "10px",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}
          >
            <ArrowUpRight size={14} style={{ color: "#a855f7" }} />
            <span>Send 0.25 BTC to Cold Wallet</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   C. SMART HOME LIVE SIMULATION MOCKUP
   ========================================================================== */
function SmartHomeSimulation() {
  const [activeRoom, setActiveRoom] = useState<"living" | "kitchen">("living");
  const [chandelierOn, setChandelierOn] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const [climateTemp, setClimateTemp] = useState(22);
  const [expandedDevice, setExpandedDevice] = useState<string | null>(null);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#09090b",
      color: "#fafafa",
      fontFamily: "Inter, system-ui, sans-serif",
      padding: "16px",
      gap: "16px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontSize: "11px", color: "#71717a" }}>Automation Hub</span>
          <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: 0 }}>Smart Node</h3>
        </div>
        <Badge variant="glass">🟢 Connected</Badge>
      </div>

      {/* Tabs component simulation */}
      <div style={{
        display: "flex",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "8px",
        padding: "3px"
      }}>
        {(["living", "kitchen"] as const).map(room => (
          <button
            key={room}
            onClick={() => setActiveRoom(room)}
            style={{
              flex: 1,
              background: activeRoom === room ? "rgba(168, 85, 247, 0.15)" : "transparent",
              color: activeRoom === room ? "#c084fc" : "#71717a",
              border: "none",
              borderRadius: "6px",
              padding: "6px 0",
              fontSize: "11px",
              fontWeight: "600",
              textTransform: "capitalize",
              cursor: "pointer"
            }}
          >
            {room === "living" ? "Living Room" : "Kitchen Node"}
          </button>
        ))}
      </div>

      {activeRoom === "living" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {/* Circular Progress Ring simulation */}
          <div style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}>
            <div style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              border: "6px solid rgba(168, 85, 247, 0.1)",
              borderTopColor: "#a855f7",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}>
              <span style={{ fontSize: "20px", fontWeight: "800" }}>{brightness}%</span>
              <span style={{ fontSize: "9px", color: "#71717a" }}>Light Load</span>
            </div>
          </div>

          {/* Switch component simulation */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "10px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Sun size={15} style={{ color: chandelierOn ? "#eab308" : "#71717a" }} />
                <span style={{ fontSize: "13px", fontWeight: "600" }}>Ceiling Chandelier</span>
              </div>
              <button
                type="button"
                onClick={() => setChandelierOn(!chandelierOn)}
                style={{
                  width: "36px",
                  height: "20px",
                  borderRadius: "10px",
                  background: chandelierOn ? "#a855f7" : "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  padding: 0,
                  transition: "background 0.2s ease"
                }}
              >
                <div style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  position: "absolute",
                  top: "2px",
                  left: chandelierOn ? "18px" : "2px",
                  transition: "left 0.2s ease"
                }} />
              </button>
            </div>

            {/* Slider component simulation */}
            {chandelierOn && (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "10px", color: "#71717a" }}>Dimmer Brightness</span>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={brightness}
                    onChange={e => setBrightness(Number(e.target.value))}
                    style={{
                      flex: 1,
                      accentColor: "#a855f7",
                      cursor: "pointer"
                    }}
                  />
                  <span style={{ fontSize: "11px", fontWeight: "700", width: "24px" }}>{brightness}</span>
                </div>
              </div>
            )}
          </div>

          {/* Accordion component simulation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "11px", color: "#71717a", textTransform: "uppercase" }}>Room Appliances</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                { id: "ac", name: "🔋 Air Conditioner", details: `Climate thermostat: ${climateTemp}°C (Energy optimal)` },
                { id: "tv", name: "📺 Apple TV 4K", details: "Status: Sleeping (HDMI-CEC standby)" }
              ].map(item => {
                const isOpen = expandedDevice === item.id;
                return (
                  <div key={item.id} style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                    overflow: "hidden"
                  }}>
                    <button
                      onClick={() => setExpandedDevice(isOpen ? null : item.id)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "10px 12px",
                        textAlign: "left",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "600",
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer"
                      }}
                    >
                      <span>{item.name}</span>
                      <span>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 12px 10px 12px", fontSize: "11px", color: "#a1a1aa" }}>
                        {item.details}
                        {item.id === "ac" && (
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                            <button
                              onClick={() => setClimateTemp(t => t - 1)}
                              style={{ background: "rgba(255,255,255,0.04)", border: "none", color: "#fff", width: "20px", height: "20px", borderRadius: "4px", cursor: "pointer" }}
                            >
                              -
                            </button>
                            <span style={{ fontWeight: "700" }}>{climateTemp}°C</span>
                            <button
                              onClick={() => setClimateTemp(t => t + 1)}
                              style={{ background: "rgba(255,255,255,0.04)", border: "none", color: "#fff", width: "20px", height: "20px", borderRadius: "4px", cursor: "pointer" }}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "12px", color: "#71717a", fontSize: "12px" }}>
          <span>🍳 Kitchen Node active but unoccupied</span>
          <Badge variant="glass">Kitchen Lights Off</Badge>
        </div>
      )}
    </div>
  );
}

/* Badge component mockup inline styling matching docs standard */
function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "glass" | "success" }) {
  const bg = variant === "glass" ? "rgba(255, 255, 255, 0.05)" : variant === "success" ? "rgba(34, 197, 94, 0.12)" : "#3b82f6";
  const clr = variant === "success" ? "#22c55e" : "#ffffff";
  return (
    <span style={{
      background: bg,
      border: `1px solid ${variant === "success" ? "rgba(34, 197, 94, 0.25)" : "rgba(255, 255, 255, 0.08)"}`,
      color: clr,
      fontSize: "10px",
      fontWeight: "700",
      padding: "2px 8px",
      borderRadius: "4px"
    }}>
      {children}
    </span>
  );
}

/* ==========================================================================
   D. SOCIAL / AI CHAT FEED SIMULATION
   ========================================================================== */
interface ChatMsg {
  id: number;
  sender: "user" | "ai";
  text: string;
  time: string;
}

function SocialChatSimulation() {
  const [messages, setMessages] = useState<ChatMsg[]>([
    { id: 1, sender: "ai", text: "Hey! I'm your AI design assistant. How can I help today?", time: "9:40 AM" },
    { id: 2, sender: "user", text: "Build me a dark mode settings screen.", time: "9:41 AM" },
    { id: 3, sender: "ai", text: "Sure! I'll use GlassCard for the header, Switch toggles for preferences, and a Slider for brightness control. Give me a moment...", time: "9:41 AM" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [dotAnim, setDotAnim] = useState(0);

  useEffect(() => {
    if (!isTyping) return;
    const timer = setInterval(() => setDotAnim(d => (d + 1) % 4), 400);
    return () => clearInterval(timer);
  }, [isTyping]);

  const aiResponses = [
    "I've drafted a layout using GlassPanel, Switch, and Slider components. The glassmorphism intensity is set to 'high' for premium feel.",
    "Would you also like me to add a BiometricButton for secure settings access? It integrates FaceID with a glowing animation.",
    "Done! I've exported the complete layout code. It uses 6 Nativecn components and weighs only 2.4KB gzipped.",
    "I can also generate a matching onboarding carousel if you want. Just say the word!",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: ChatMsg = {
      id: Date.now(),
      sender: "user",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiText = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMsg: ChatMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 2200);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#09090b",
      color: "#fafafa",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>
      {/* Glass Header */}
      <div style={{
        padding: "12px 16px",
        background: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Sparkles size={16} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "13px", fontWeight: "700" }}>Nativecn AI</div>
          <div style={{ fontSize: "10px", color: isTyping ? "#a855f7" : "#22c55e" }}>
            {isTyping ? "typing..." : "● online"}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        padding: "12px 14px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        {messages.map(msg => (
          <div key={msg.id} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
            gap: "3px"
          }}>
            <div style={{
              maxWidth: "80%",
              background: msg.sender === "user"
                ? "#a855f7"
                : "rgba(255, 255, 255, 0.04)",
              border: msg.sender === "ai" ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
              borderRadius: msg.sender === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              padding: "8px 12px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: "#fff"
            }}>
              {msg.text}
            </div>
            <span style={{ fontSize: "9px", color: "#52525b", padding: "0 4px" }}>{msg.time}</span>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "3px",
            flexDirection: "column"
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "14px 14px 14px 4px",
              padding: "10px 14px",
              display: "flex",
              gap: "4px"
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#a855f7",
                  opacity: (dotAnim % 3 === i) ? 1 : 0.3,
                  transition: "opacity 0.2s"
                }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div style={{
        padding: "10px 12px",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        display: "flex",
        gap: "8px",
        alignItems: "center"
      }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          placeholder="Ask AI to build a screen..."
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "8px 14px",
            color: "#fff",
            fontSize: "12px",
            outline: "none"
          }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: input.trim() ? "#a855f7" : "rgba(255,255,255,0.04)",
            border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: input.trim() ? "pointer" : "default",
            transition: "background 0.2s"
          }}
        >
          <Send size={14} color="#fff" />
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   E. E-COMMERCE PRODUCT PAGE SIMULATION
   ========================================================================== */
function EcommerceSimulation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [inCart, setInCart] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [liked, setLiked] = useState(false);
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShimmer(false), 1500);
    return () => clearTimeout(t);
  }, []);

  const colors = [
    { key: "black", hex: "#1a1a1a", label: "Matte Black" },
    { key: "silver", hex: "#94a3b8", label: "Silver" },
    { key: "rose", hex: "#f43f5e", label: "Rose" },
  ];

  const slides = [
    { bg: "linear-gradient(145deg, #18181b 0%, #27272a 100%)", emoji: "🎧" },
    { bg: "linear-gradient(145deg, #1e1b4b 0%, #312e81 100%)", emoji: "🎵" },
    { bg: "linear-gradient(145deg, #1c1917 0%, #292524 100%)", emoji: "📦" },
  ];

  const addToCart = () => {
    setInCart(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#09090b",
      color: "#fafafa",
      fontFamily: "Inter, system-ui, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Confetti Burst */}
      {showConfetti && <ConfettiBurst />}

      {/* Image Carousel */}
      <div style={{ position: "relative" }}>
        {shimmer ? (
          <div style={{
            height: "200px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmerAnim 1.5s infinite"
          }} />
        ) : (
          <div style={{
            height: "200px",
            background: slides[currentSlide].bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "64px",
            transition: "background 0.4s ease",
            position: "relative"
          }}>
            {slides[currentSlide].emoji}

            {/* Nav Arrows */}
            <button onClick={() => setCurrentSlide(s => (s - 1 + slides.length) % slides.length)}
              style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "none", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
            >
              <ChevronLeft size={14} />
            </button>
            <button onClick={() => setCurrentSlide(s => (s + 1) % slides.length)}
              style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "none", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
            >
              <ChevronRight size={14} />
            </button>

            {/* Wishlist Heart */}
            <button onClick={() => setLiked(!liked)}
              style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.4)", border: "none", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <Heart size={14} fill={liked ? "#f43f5e" : "transparent"} color={liked ? "#f43f5e" : "#fff"} />
            </button>
          </div>
        )}

        {/* Dot indicators */}
        {!shimmer && (
          <div style={{ display: "flex", justifyContent: "center", gap: "5px", padding: "8px 0" }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} style={{
                width: currentSlide === i ? "16px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: currentSlide === i ? "#a855f7" : "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0
              }} />
            ))}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div style={{ flex: 1, padding: "14px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <Badge variant="success">In Stock</Badge>
            <h3 style={{ fontSize: "16px", fontWeight: "800", margin: "6px 0 0 0" }}>Studio Pro Headphones</h3>
            <span style={{ fontSize: "11px", color: "#71717a" }}>by Nativecn Audio Labs</span>
          </div>
          <span style={{ fontSize: "22px", fontWeight: "800", color: "#a855f7" }}>$249</span>
        </div>

        {/* Star Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[1, 2, 3, 4, 5].map(s => {
              const active = (hoverRating || rating) >= s;
              return (
                <button key={s} type="button"
                  onClick={() => setRating(s)}
                  onMouseEnter={() => setHoverRating(s)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: active ? "#eab308" : "rgba(255,255,255,0.08)" }}
                >
                  <Star size={16} fill={active ? "#eab308" : "transparent"} />
                </button>
              );
            })}
          </div>
          <span style={{ fontSize: "11px", color: "#71717a" }}>(2,847 reviews)</span>
        </div>

        {/* Color Selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "10px", fontWeight: "600", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Color — {colors.find(c => c.key === selectedColor)?.label}
          </span>
          <div style={{ display: "flex", gap: "8px" }}>
            {colors.map(c => (
              <button key={c.key} onClick={() => setSelectedColor(c.key)}
                style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: c.hex,
                  border: `2px solid ${selectedColor === c.key ? "#a855f7" : "rgba(255,255,255,0.08)"}`,
                  cursor: "pointer",
                  transition: "border 0.2s",
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>

        {/* Quantity Stepper */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "10px", fontWeight: "600", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Quantity</span>
          <div style={{ display: "flex", alignItems: "center", gap: "0", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", overflow: "hidden" }}>
            <button onClick={() => setQty(q => Math.max(1, q - 1))}
              style={{ width: "30px", height: "28px", background: "rgba(255,255,255,0.02)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            ><Minus size={12} /></button>
            <span style={{ width: "30px", textAlign: "center", fontSize: "13px", fontWeight: "700" }}>{qty}</span>
            <button onClick={() => setQty(q => q + 1)}
              style={{ width: "30px", height: "28px", background: "rgba(255,255,255,0.02)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            ><Plus size={12} /></button>
          </div>
        </div>

        {/* Delivery info */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "8px",
          padding: "10px 12px",
          display: "flex",
          gap: "10px",
          alignItems: "center"
        }}>
          <Truck size={16} color="#a855f7" />
          <div>
            <span style={{ fontSize: "11px", fontWeight: "600" }}>Free Express Delivery</span>
            <span style={{ fontSize: "10px", color: "#71717a", display: "block" }}>Estimated arrival: June 4-6</span>
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart Footer */}
      <div style={{
        padding: "12px 16px",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "10px", color: "#71717a" }}>Total</span>
          <span style={{ fontSize: "16px", fontWeight: "800" }}>${(249 * qty).toLocaleString()}</span>
        </div>
        <button
          onClick={addToCart}
          disabled={inCart}
          style={{
            background: inCart ? "#22c55e" : "#a855f7",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "12px",
            fontWeight: "700",
            cursor: inCart ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.3s ease"
          }}
        >
          {inCart ? <Check size={14} strokeWidth={3} /> : <ShoppingCart size={14} />}
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>

      <style>{`
        @keyframes shimmerAnim {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

/* Mini confetti burst effect */
function ConfettiBurst() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    x: (Math.random() - 0.5) * 200,
    y: -(Math.random() * 200 + 50),
    color: ["#a855f7", "#ec4899", "#eab308", "#22c55e", "#3b82f6"][i % 5],
    size: 4 + Math.random() * 4,
    delay: Math.random() * 0.3,
    rot: Math.random() * 360
  }));

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 100, overflow: "hidden" }}>
      {particles.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          left: "50%", bottom: "60px",
          width: `${p.size}px`, height: `${p.size}px`,
          borderRadius: Math.random() > 0.5 ? "50%" : "1px",
          background: p.color,
          animation: `confettiFly 1.2s ${p.delay}s ease-out forwards`,
          transform: `translate(0, 0)`,
          opacity: 1
        }} />
      ))}
      <style>{`
        @keyframes confettiFly {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--cx, ${particles.map(p => p.x + 'px').join(', ')}), ${-200}px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
