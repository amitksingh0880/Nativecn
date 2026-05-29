import React from "react";

export default function InteractiveAspectRatioMockup() {
  const [ratio, setRatio] = React.useState("16:9");
  const ratios: Record<string, number> = { "16:9": 9/16, "4:3": 3/4, "1:1": 1, "3:4": 4/3 };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px" }}>
      <div style={{ display: "flex", gap: "6px" }}>
        {Object.keys(ratios).map(r => (
          <button key={r} onClick={() => setRatio(r)} style={{
            padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600",
            background: ratio === r ? "#a855f7" : "rgba(255,255,255,0.05)",
            border: "none", color: ratio === r ? "#fff" : "#64748b",
            cursor: "pointer", transition: "all 0.2s",
          }}>{r}</button>
        ))}
      </div>
      <div style={{
        width: "180px",
        paddingBottom: `${ratios[ratio] * 180}px`,
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "padding-bottom 0.35s cubic-bezier(0.16,1,0.3,1)",
        background: "linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95)",
        border: "1px solid rgba(168,85,247,0.3)",
      }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
          <div style={{ fontSize: "20px", fontWeight: "800", color: "#a855f7" }}>{ratio}</div>
          <div style={{ fontSize: "11px", color: "#64748b" }}>Aspect Ratio</div>
        </div>
      </div>
    </div>
  );
}
