import React from "react";

export default function InteractiveFabMockup() {
  const [pressed, setPressed] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#a855f7", marginBottom: "8px" }}>{count}</div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>Actions triggered</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "20px", right: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
        {expanded && (
          <div style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)", borderRadius: "20px", padding: "6px 14px", color: "#a855f7", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap" }}>
            New Task
          </div>
        )}
        <button
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => { setPressed(false); setCount(c => c + 1); setExpanded(e => !e); }}
          onMouseLeave={() => setPressed(false)}
          style={{
            width: "52px", height: "52px", borderRadius: "26px",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: pressed ? "scale(0.9)" : "scale(1)",
            transition: "transform 0.15s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: "0 6px 20px rgba(168,85,247,0.5)",
            fontSize: "22px",
          }}
        >✚</button>
      </div>
    </div>
  );
}
