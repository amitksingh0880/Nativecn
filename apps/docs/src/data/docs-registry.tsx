import React from "react";

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
    button: {
      name: "Button",
      description: "A premium, responsive button component with multiple style variants, haptic feedback integration, and subtle press micro-animations.",
      category: "Core Components",
      installation: "npx nativecn add button",
      usageCode: `import { Button } from "@nativecn/ui/components/button";
import { LogIn } from "lucide-react-native";

export default function App() {
  return (
    <Button 
      variant="default" 
      size="lg" 
      onPress={() => console.log("Pressed")}
    >
      <Button.Icon icon={LogIn} />
      <Button.Text>Get Started</Button.Text>
    </Button>
  );
}`,
      componentMockup: () => {
        // We define the mockup inline using React.createElement or simple functional components
        return React.createElement(InteractiveButtonMockup);
      }
    },
    switch: {
      name: "Switch",
      description: "A smooth, animated toggle control that allows users to switch between binary states with tactile motion feedback.",
      category: "Core Components",
      installation: "npx nativecn add switch",
      usageCode: `import { useState } from "react";
import { Switch } from "@nativecn/ui/components/switch";

export default function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch 
      checked={enabled} 
      onCheckedChange={setEnabled} 
    />
  );
}`,
      componentMockup: () => React.createElement(InteractiveSwitchMockup)
    }
  },
  premium: {
    "biometric-button": {
      name: "Biometric Button",
      description: "A highly-aesthetic authentication button that integrates with FaceID/Fingerprint local authentication and displays glowing, premium micro-animations.",
      category: "Premium - Mobile",
      installation: "npx nativecn add biometric-button",
      usageCode: `import { BiometricButton } from "@nativecn/ui/premium/mobile/biometric-button";

export default function App() {
  const handleAuthSuccess = () => {
    console.log("Successfully Authenticated!");
  };

  return (
    <BiometricButton 
      title="Unlock Vault"
      onSuccess={handleAuthSuccess}
      onFailure={(error) => console.log(error)}
    />
  );
}`,
      componentMockup: () => React.createElement(InteractiveBiometricMockup)
    },
    "otp-input": {
      name: "OTP Input",
      description: "An elegant, multi-box One-Time Password component featuring glowing focus borders, a simulated active cursor, and soft slide-in character animations.",
      category: "Premium - Inputs",
      installation: "npx nativecn add otp-input",
      usageCode: `import { OtpInput } from "@nativecn/ui/premium/inputs/otp-input";

export default function App() {
  const handleComplete = (code: string) => {
    console.log("Entered OTP:", code);
  };

  return (
    <OtpInput 
      length={4} 
      onComplete={handleComplete} 
    />
  );
}`,
      componentMockup: () => React.createElement(InteractiveOtpMockup)
    },
    "progress-ring": {
      name: "Progress Ring",
      description: "An animated, vector-based SVG progress indicator supporting smooth dashboard status transitions, double arcs, and central statistics representation.",
      category: "Premium - Charts",
      installation: "npx nativecn add progress-ring",
      usageCode: `import { ProgressRing } from "@nativecn/ui/premium/charts/progress-ring";

export default function App() {
  return (
    <ProgressRing 
      size={140} 
      strokeWidth={12} 
      percentage={72} 
      primaryColor="#a855f7" 
      secondaryColor="#1e1b4b"
    />
  );
}`,
      componentMockup: () => React.createElement(InteractiveProgressRingMockup)
    },
    "chat-bubble": {
      name: "AI Chat Bubble",
      description: "A rich chat conversational bubble set showcasing premium typing indicators, message delivery micro-states, and soft glass-morphic text panels.",
      category: "Premium - AI",
      installation: "npx nativecn add chat-bubble",
      usageCode: `import { ChatBubble } from "@nativecn/ui/premium/ai/chat-bubble";
import { TypingIndicator } from "@nativecn/ui/premium/ai/typing-indicator";

export default function App() {
  return (
    <View style={{ gap: 12 }}>
      <ChatBubble sender="user" text="Design a dark landing page." />
      <ChatBubble sender="ai">
        <TypingIndicator />
      </ChatBubble>
    </View>
  );
}`,
      componentMockup: () => React.createElement(InteractiveChatBubbleMockup)
    },
    "glass-card": {
      name: "Glass Card",
      description: "A state-of-the-art glassmorphic container using backdrop-filters, subtle gradients, and custom radial ambient lights.",
      category: "Premium - Glass",
      installation: "npx nativecn add glass-card",
      usageCode: `import { GlassCard } from "@nativecn/ui/premium/glass/glass-card";

export default function App() {
  return (
    <GlassCard intensity="medium" glowColor="rgba(168, 85, 247, 0.15)">
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Glass Premium Panel</Text>
      <Text style={{ color: "#94a3b8" }}>Translucent frosted overlay</Text>
    </GlassCard>
  );
}`,
      componentMockup: () => React.createElement(InteractiveGlassCardMockup)
    },
    "bento-grid": {
      name: "Bento Grid",
      description: "An elegant, asymmetrical layout grid designed to highlight metrics, charts, and product features in a sleek dashboard style.",
      category: "Premium - Magic",
      installation: "npx nativecn add bento-grid",
      usageCode: `import { BentoGrid, BentoCard } from "@nativecn/ui/premium/magic/bento-grid";

export default function App() {
  return (
    <BentoGrid cols={3}>
      <BentoCard title="Performance" description="Load times under 200ms" />
      <BentoCard title="Security" description="Biometric vault enabled" />
      <BentoCard title="Network" description="Realtime websocket links" />
    </BentoGrid>
  );
}`,
      componentMockup: () => React.createElement(InteractiveBentoGridMockup)
    },
    "confetti": {
      name: "Confetti",
      description: "A highly-aesthetic, physics-simulated celebration effect that bursts particles across the display with customizable velocity and friction.",
      category: "Premium - Magic",
      installation: "npx nativecn add confetti",
      usageCode: `import { Confetti } from "@nativecn/ui/premium/magic/confetti";
import { useRef } from "react";

export default function App() {
  const confettiRef = useRef(null);
  
  return (
    <View>
      <Button onPress={() => confettiRef.current?.burst()}>
        Celebrate
      </Button>
      <Confetti ref={confettiRef} count={100} />
    </View>
  );
}`,
      componentMockup: () => React.createElement(InteractiveConfettiMockup)
    }
  }
};

export function getDocEntry(category: string, slug: string): DocEntry | null {
  return docsRegistry[category]?.[slug] || null;
}

// -------------------------------------------------------------
// DYNAMIC WEB MOCKUPS FOR THE SIMULATOR (Fully Interactive)
// -------------------------------------------------------------

function InteractiveButtonMockup() {
  const [pressed, setPressed] = React.useState(false);
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Core Button</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Variants & Micro-actions</p>
      </div>

      <button
        style={{
          background: pressed ? "#9333ea" : "#a855f7",
          color: "#ffffff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
          transform: pressed ? "scale(0.95)" : "scale(1)",
          transition: "all 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 4px 14px rgba(168, 85, 247, 0.4)",
          width: "100%",
          maxWidth: "200px"
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => { setPressed(false); setCount(c => c + 1); }}
        onMouseLeave={() => setPressed(false)}
      >
        Press Me
      </button>

      <span style={{ fontSize: "12px", color: "#94a3b8" }}>Press Count: <strong style={{ color: "#a855f7" }}>{count}</strong></span>
    </div>
  );
}

function InteractiveSwitchMockup() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Tactile Switch</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Smooth transition states</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ color: enabled ? "#ffffff" : "#64748b", fontSize: "14px", fontWeight: "500", transition: "color 0.2s" }}>
          {enabled ? "Notifications ON" : "Notifications OFF"}
        </span>

        <button
          onClick={() => setEnabled(!enabled)}
          style={{
            width: "56px",
            height: "30px",
            borderRadius: "9999px",
            background: enabled ? "#22c55e" : "#3f3f46",
            border: "none",
            cursor: "pointer",
            position: "relative",
            padding: "3px",
            transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transform: enabled ? "translateX(26px)" : "translateX(0)",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />
        </button>
      </div>
    </div>
  );
}

function InteractiveBiometricMockup() {
  const [authState, setAuthState] = React.useState<"idle" | "scanning" | "success" | "failure">("idle");

  const startAuth = () => {
    setAuthState("scanning");
    setTimeout(() => {
      // Simulate random outcomes for showcase diversity
      setAuthState("success");
    }, 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "32px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Biometric Vault</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Expo Local Auth API</p>
      </div>

      <div style={{ position: "relative", width: "100px", height: "100px", display: "flex", alignItems: "center", justifyItems: "center" }}>
        {authState === "scanning" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "3px solid transparent",
              borderTopColor: "#a855f7",
              borderBottomColor: "#0ea5e9",
              borderRadius: "50%",
              animation: "spin 1.2s linear infinite"
            }}
          />
        )}
        <button
          onClick={startAuth}
          disabled={authState === "scanning"}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: 
              authState === "success" ? "rgba(34, 197, 94, 0.15)" :
              authState === "scanning" ? "rgba(168, 85, 247, 0.05)" : 
              "rgba(255,255,255,0.02)",
            border: `2px solid ${
              authState === "success" ? "#22c55e" :
              authState === "scanning" ? "#a855f7" :
              "rgba(255,255,255,0.08)"
            }`,
            color: authState === "success" ? "#22c55e" : "#a855f7",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: authState === "success" ? "0 0 20px rgba(34, 197, 94, 0.2)" : "none"
          }}
        >
          {/* Custom SVG Fingerprint */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {authState === "success" ? (
              <polyline points="20 6 9 17 4 12" />
            ) : (
              <>
                <path d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10" />
                <path d="M5 12c0-3.9 3.1-7 7-7s7 3.1 7 7" />
                <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
                <path d="M12 12h.01" />
                <path d="M12 16v2" />
                <path d="M12 20v2" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div style={{ textAlign: "center", minHeight: "24px" }}>
        {authState === "idle" && (
          <button 
            onClick={startAuth} 
            style={{ background: "transparent", border: "none", color: "#a855f7", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
          >
            Authenticate
          </button>
        )}
        {authState === "scanning" && <span style={{ color: "#94a3b8", fontSize: "13px" }}>Scanning Fingerprint...</span>}
        {authState === "success" && (
          <div>
            <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: "600", display: "block" }}>Access Granted</span>
            <button 
              onClick={() => setAuthState("idle")} 
              style={{ background: "transparent", border: "none", color: "#64748b", fontSize: "11px", textDecoration: "underline", marginTop: "4px", cursor: "pointer" }}
            >
              Reset Lock
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function InteractiveOtpMockup() {
  const [code, setCode] = React.useState<string[]>(["", "", "", ""]);
  const [activeIdx, setActiveIdx] = React.useState(0);

  const simulateTyping = () => {
    // Fill up the OTP slots sequentially with mock data
    let currentIdx = 0;
    const digits = ["5", "8", "2", "0"];
    
    const interval = setInterval(() => {
      if (currentIdx < 4) {
        setCode(prev => {
          const next = [...prev];
          next[currentIdx] = digits[currentIdx];
          return next;
        });
        setActiveIdx(currentIdx + 1);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCode(["", "", "", ""]);
          setActiveIdx(0);
        }, 1500);
      }
    }, 400);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "28px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Secure Verification</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>One-Time Password Input</p>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        {code.map((val, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={idx}
              style={{
                width: "44px",
                height: "48px",
                borderRadius: "8px",
                border: `2px solid ${isActive ? "#a855f7" : val ? "#ffffff" : "rgba(255,255,255,0.08)"}`,
                background: "rgba(255,255,255,0.01)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "700",
                color: "#ffffff",
                boxShadow: isActive ? "0 0 10px rgba(168, 85, 247, 0.2)" : "none",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative"
              }}
            >
              {val}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    width: "2px",
                    height: "18px",
                    background: "#a855f7",
                    animation: "blink 1s steps(2, start) infinite"
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={simulateTyping}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 16px",
          borderRadius: "9999px",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)"}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
      >
        Simulate Typing
      </button>

      <style>{`
        @keyframes blink {
          to { visibility: hidden; }
        }
      `}</style>
    </div>
  );
}

function InteractiveProgressRingMockup() {
  const [percent, setPercent] = React.useState(72);
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Activity Progress</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>High-fidelity vector rings</p>
      </div>

      <div style={{ position: "relative", width: `${size}px`, height: `${size}px` }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(168, 85, 247, 0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Foreground Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#a855f7"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          />
        </svg>
        {/* Statistics Labels */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center"
        }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff" }}>{percent}%</span>
          <span style={{ fontSize: "9px", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Goal</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => setPercent(p => Math.max(p - 15, 0))}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "4px", color: "#fff", cursor: "pointer" }}
        >
          -15%
        </button>
        <button
          onClick={() => setPercent(p => Math.min(p + 15, 100))}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "4px", color: "#fff", cursor: "pointer" }}
        >
          +15%
        </button>
      </div>
    </div>
  );
}

function InteractiveChatBubbleMockup() {
  const [messages, setMessages] = React.useState<Array<{ sender: "user" | "ai", text: string }>>([
    { sender: "user", text: "Explain glassmorphism." }
  ]);
  const [typing, setTyping] = React.useState(false);

  React.useEffect(() => {
    if (messages.length === 1) {
      setTyping(true);
      const timer = setTimeout(() => {
        setTyping(false);
        setMessages(prev => [
          ...prev,
          { sender: "ai", text: "It combines translucent layers with backdrop blur to create elegant, premium UI depths." }
        ]);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "8px" }}>
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "12px", marginBottom: "16px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "700" }}>Copilot Assistant</h4>
        <span style={{ color: "#22c55e", fontSize: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          Online
        </span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", overflowY: "auto", minHeight: "220px" }}>
        {messages.map((msg, idx) => {
          const isUser = msg.sender === "user";
          return (
            <div
              key={idx}
              style={{
                alignSelf: isUser ? "flex-end" : "flex-start",
                background: isUser ? "#a855f7" : "rgba(255,255,255,0.03)",
                border: isUser ? "none" : "1px solid rgba(255,255,255,0.06)",
                padding: "10px 14px",
                borderRadius: "14px",
                borderTopRightRadius: isUser ? "2px" : "14px",
                borderTopLeftRadius: isUser ? "14px" : "2px",
                maxWidth: "85%",
                fontSize: "12px",
                lineHeight: "1.5",
                color: "#ffffff",
                boxShadow: isUser ? "0 4px 10px rgba(168,85,247,0.15)" : "none"
              }}
            >
              {msg.text}
            </div>
          );
        })}

        {typing && (
          <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "10px 16px", borderRadius: "14px", borderTopLeftRadius: "2px" }}>
            {/* Pulsing Dots Typing Indicator */}
            <div style={{ display: "flex", gap: "4px" }}>
              <span className="dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a855f7", animation: "bounce 1.4s infinite ease-in-out both" }} />
              <span className="dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a855f7", animation: "bounce 1.4s infinite ease-in-out both", animationDelay: "0.2s" }} />
              <span className="dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a855f7", animation: "bounce 1.4s infinite ease-in-out both", animationDelay: "0.4s" }} />
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setMessages([{ sender: "user", text: "Explain glassmorphism." }]);
        }}
        disabled={typing}
        style={{
          marginTop: "16px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "6px 12px",
          borderRadius: "6px",
          color: "#fff",
          fontSize: "11px",
          cursor: "pointer"
        }}
      >
        Re-send Question
      </button>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
}

function InteractiveGlassCardMockup() {
  const [glow, setGlow] = React.useState(true);

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px",
      backgroundImage: "radial-gradient(circle at 10% 20%, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.1) 90%)",
      width: "100%", height: "100%", padding: "20px"
    }}>
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Glass Layering</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Dynamic backdrop filters</p>
      </div>

      <div style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px) saturate(150%)",
        WebkitBackdropFilter: "blur(12px) saturate(150%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        padding: "24px",
        width: "100%",
        maxWidth: "240px",
        boxShadow: glow ? "0 8px 32px 0 rgba(168, 85, 247, 0.15)" : "0 8px 32px 0 rgba(0,0,0,0.3)",
        transition: "all 0.5s ease"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <span style={{ fontSize: "10px", fontWeight: "700", color: "#a855f7", textTransform: "uppercase" }}>MasterCard</span>
          <div style={{ width: "24px", height: "16px", background: "rgba(255,255,255,0.15)", borderRadius: "3px" }} />
        </div>
        <span style={{ fontSize: "16px", fontWeight: "600", color: "#fff", display: "block", marginBottom: "16px", letterSpacing: "2px" }}>
          •••• •••• •••• 9012
        </span>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "rgba(255,255,255,0.5)" }}>
          <span>AMIT SINGH</span>
          <span>12/29</span>
        </div>
      </div>

      <button
        onClick={() => setGlow(!glow)}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "4px",
          fontSize: "11px",
          cursor: "pointer"
        }}
      >
        Toggle Card Glow
      </button>
    </div>
  );
}

function InteractiveBentoGridMockup() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", gap: "12px", padding: "8px"
    }}>
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "15px", fontWeight: "700" }}>Grid Dashboard</h4>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        flex: 1
      }}>
        {/* Box 1 (Spans full width) */}
        <div style={{
          gridColumn: "1 / -1",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>Memory Usage</span>
            <strong style={{ fontSize: "16px", color: "#fff" }}>4.2 GB</strong>
          </div>
          <div style={{ height: "4px", width: "60px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
            <div style={{ height: "100%", width: "70%", background: "#a855f7", borderRadius: "2px" }} />
          </div>
        </div>

        {/* Box 2 */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "12px"
        }}>
          <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>Battery</span>
          <strong style={{ fontSize: "16px", color: "#22c55e" }}>92%</strong>
        </div>

        {/* Box 3 */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "12px"
        }}>
          <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>Network</span>
          <strong style={{ fontSize: "16px", color: "#0ea5e9" }}>Fast</strong>
        </div>
      </div>
    </div>
  );
}

function InteractiveConfettiMockup() {
  const [particles, setParticles] = React.useState<Array<{ id: number, x: number, y: number, color: string, rotate: number }>>([]);
  const particleIdRef = React.useRef(0);

  const burst = () => {
    const colors = ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
    const newParticles = [];
    
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: particleIdRef.current++,
        x: Math.random() * 160 - 80, // Spread from center
        y: Math.random() * -120 - 40, // Height offset
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: Math.random() * 360
      });
    }

    setParticles(newParticles);
    
    setTimeout(() => {
      setParticles([]);
    }, 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px", position: "relative" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Celebration Magic</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Physics-based confetti particles</p>
      </div>

      <div style={{ position: "relative" }}>
        <button
          onClick={burst}
          style={{
            background: "linear-gradient(135deg, #a855f7, #0ea5e9)",
            border: "none",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(168, 85, 247, 0.3)"
          }}
        >
          Burst Confetti
        </button>

        {/* Confetti Particles container */}
        {particles.map(p => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "8px",
              height: "8px",
              background: p.color,
              borderRadius: p.id % 2 === 0 ? "50%" : "2px",
              transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg)`,
              opacity: 0,
              pointerEvents: "none",
              animation: "particle-float 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards"
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes particle-float {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--p-x, 40px), 180px) scale(0.3) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
