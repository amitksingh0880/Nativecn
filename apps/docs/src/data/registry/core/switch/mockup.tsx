import React from "react";

export default function InteractiveSwitchMockup() {
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
