import React from "react";

export default function InteractiveTextareaMockup() {
  const [value, setValue] = React.useState("");
  const max = 140;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "8px", gap: "8px" }}>
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px", fontWeight: "500" }}>Bio</div>
        <textarea
          value={value}
          onChange={e => setValue(e.target.value.slice(0, max))}
          placeholder="Tell us about yourself..."
          style={{
            width: "100%", minHeight: "100px", padding: "12px",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${value.length > 0 ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.1)"}`,
            borderRadius: "10px", color: "#f1f5f9", fontSize: "13px",
            resize: "none", outline: "none", fontFamily: "inherit",
            lineHeight: "1.6", boxSizing: "border-box",
            transition: "border-color 0.2s",
            boxShadow: value.length > 0 ? "0 0 0 3px rgba(168,85,247,0.1)" : "none",
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
          <span style={{ fontSize: "11px", color: value.length > max * 0.8 ? "#f59e0b" : "#475569" }}>
            {value.length}/{max}
          </span>
        </div>
      </div>
    </div>
  );
}
