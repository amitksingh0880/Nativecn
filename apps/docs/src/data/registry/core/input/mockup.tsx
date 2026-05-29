import React from "react";

export default function InteractiveInputMockup() {
  const [value, setValue] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "16px", gap: "16px" }}>
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Form Input</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Glowing focuses & live statuses</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ color: "#94a3b8", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Username</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Enter vault username"
          style={{
            background: "rgba(255,255,255,0.01)",
            border: `1px solid ${focused ? "#a855f7" : value ? "#ffffff" : "rgba(255,255,255,0.08)"}`,
            boxShadow: focused ? "0 0 10px rgba(168, 85, 247, 0.15)" : "none",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#ffffff",
            fontSize: "13px",
            outline: "none",
            transition: "all 0.2s"
          }}
        />
        {value.length > 0 && (
          <span style={{ fontSize: "10px", color: value.length >= 4 ? "#22c55e" : "#ef4444" }}>
            {value.length >= 4 ? "✓ Username available" : "⚠ Must be at least 4 characters"}
          </span>
        )}
      </div>
    </div>
  );
}
