import React from "react";

export default function InteractiveToggleGroupMockup() {
  const [align, setAlign] = React.useState("center");
  const [size, setSize] = React.useState("md");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div>
        <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "8px", textAlign: "center" }}>Text Alignment</div>
        <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "3px", border: "1px solid rgba(255,255,255,0.08)" }}>
          {["left", "center", "right"].map(v => (
            <button key={v} onClick={() => setAlign(v)} style={{
              padding: "7px 16px", borderRadius: "8px", border: "none", cursor: "pointer",
              background: align === v ? "#a855f7" : "transparent",
              color: align === v ? "#fff" : "#64748b",
              fontSize: "12px", fontWeight: "600", transition: "all 0.2s",
              textTransform: "capitalize",
            }}>{v}</button>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "8px", textAlign: "center" }}>Font Size</div>
        <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "3px", border: "1px solid rgba(255,255,255,0.08)" }}>
          {["sm", "md", "lg"].map(v => (
            <button key={v} onClick={() => setSize(v)} style={{
              padding: "7px 16px", borderRadius: "8px", border: "none", cursor: "pointer",
              background: size === v ? "#7c3aed" : "transparent",
              color: size === v ? "#fff" : "#64748b",
              fontSize: "12px", fontWeight: "600", transition: "all 0.2s",
              textTransform: "uppercase",
            }}>{v}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
