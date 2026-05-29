import React from "react";

export default function InteractiveButtonMockup() {
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
