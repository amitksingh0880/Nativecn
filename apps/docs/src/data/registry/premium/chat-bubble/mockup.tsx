import React from "react";

export default function InteractiveChatBubbleMockup() {
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
