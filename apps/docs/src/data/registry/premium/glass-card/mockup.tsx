import React from "react";

export default function InteractiveGlassCardMockup() {
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
