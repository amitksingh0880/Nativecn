import React from "react";

export default function InteractiveGlassPanelMockup() {
  return (
    <div style={{ height: "100%", background: "linear-gradient(135deg, #4c1d95, #1e1b4b, #0c4a6e)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "16px" }}>
      <div style={{
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "16px", padding: "20px",
        width: "100%", maxWidth: "240px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: "600", letterSpacing: "0.1em", marginBottom: "12px" }}>PORTFOLIO</div>
        <div style={{ fontSize: "26px", fontWeight: "800", color: "#fff", marginBottom: "4px" }}>$84,210</div>
        <div style={{ fontSize: "13px", color: "rgba(16,185,129,0.9)", marginBottom: "16px" }}>+$2,340 (2.8%) today</div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "16px" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {["BTC", "ETH", "SOL"].map((t, i) => (
            <div key={t} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{t}</div>
              <div style={{ fontSize: "13px", fontWeight: "700", color: i === 1 ? "rgba(239,68,68,0.9)" : "rgba(16,185,129,0.9)" }}>{i === 1 ? "-1.2%" : "+3.4%"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
