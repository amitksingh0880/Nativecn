import React from "react";

export default function InteractiveBadgeMockup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "28px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Status Badges</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Variants & styling layers</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        <span style={{ background: "#a855f7", color: "#ffffff", padding: "4px 10px", borderRadius: "9999px", fontSize: "11px", fontWeight: "600" }}>Default</span>
        <span style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff", padding: "4px 10px", borderRadius: "9999px", fontSize: "11px", fontWeight: "600" }}>Secondary</span>
        <span style={{ background: "#ef4444", color: "#ffffff", padding: "4px 10px", borderRadius: "9999px", fontSize: "11px", fontWeight: "600" }}>Destructive</span>
        <span style={{ background: "#22c55e", color: "#ffffff", padding: "4px 10px", borderRadius: "9999px", fontSize: "11px", fontWeight: "600" }}>Success</span>
        <span style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168, 85, 247, 0.3)", backdropFilter: "blur(4px)", color: "#a855f7", padding: "4px 10px", borderRadius: "9999px", fontSize: "11px", fontWeight: "600" }}>Glass</span>
      </div>
    </div>
  );
}
