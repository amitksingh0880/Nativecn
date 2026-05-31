import React from "react";

export default function InteractiveOtpMockup() {
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
