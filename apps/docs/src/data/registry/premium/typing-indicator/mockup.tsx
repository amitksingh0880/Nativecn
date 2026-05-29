import React from "react";

export default function InteractiveTypingIndicatorMockup() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT(v => v + 1), 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
        {/* User bubble */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
          <div style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", borderRadius: "16px 16px 4px 16px", padding: "10px 14px", maxWidth: "140px" }}>
            <div style={{ color: "#fff", fontSize: "13px" }}>What's the weather like?</div>
          </div>
        </div>
        {/* AI bubble with typing */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px 16px 16px 4px", padding: "14px 18px" }}>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              {[0, 1, 2].map(i => {
                const bounce = Math.sin((t * 0.1) + i * 1.2) * 0.5 + 0.5;
                return (
                  <div key={i} style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: "#a855f7",
                    transform: `translateY(${-bounce * 6}px)`,
                    opacity: 0.5 + bounce * 0.5,
                    transition: "none",
                  }} />
                );
              })}
            </div>
          </div>
          <div style={{ fontSize: "10px", color: "#475569", paddingLeft: "4px" }}>AI is typing...</div>
        </div>
      </div>
    </div>
  );
}
