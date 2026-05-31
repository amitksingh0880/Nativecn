import React from "react";

export default function InteractiveCheckboxMockup() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Core Checkbox</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Bouncy scale active states</p>
      </div>

      <div 
        onClick={() => setChecked(!checked)}
        style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", userSelect: "none" }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "4px",
            border: `2px solid ${checked ? "#a855f7" : "rgba(255,255,255,0.15)"}`,
            background: checked ? "#a855f7" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: checked ? "scale(1.05)" : "scale(1)",
            transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}
        >
          {checked && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span style={{ color: checked ? "#ffffff" : "#94a3b8", fontSize: "13px", fontWeight: "600", transition: "color 0.2s" }}>
          Enable haptic responses
        </span>
      </div>
    </div>
  );
}
