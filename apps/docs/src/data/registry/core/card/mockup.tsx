import React from "react";

export default function InteractiveCardMockup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px" }}>
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "280px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        overflow: "hidden"
      }}>
        {/* Header */}
        <div style={{ padding: "20px 20px 10px 20px" }}>
          <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>Pro Membership</h4>
          <p style={{ color: "#64748b", fontSize: "12px" }}>Access all native templates</p>
        </div>
        {/* Content */}
        <div style={{ padding: "0 20px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.6" }}>
            Unlock biometric authentication, interactive charts, vector indicators, and premium physics animations instantly.
          </p>
        </div>
        {/* Footer */}
        <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px" }}>$9/mo</span>
          <button style={{
            background: "#a855f7",
            border: "none",
            color: "#ffffff",
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: "600",
            cursor: "pointer"
          }}>
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
