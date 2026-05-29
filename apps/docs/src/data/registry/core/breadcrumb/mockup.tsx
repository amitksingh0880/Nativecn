import React from "react";

export default function InteractiveBreadcrumbMockup() {
  const paths = [
    ["Home"],
    ["Home", "Settings"],
    ["Home", "Settings", "Privacy"],
    ["Home", "Settings", "Privacy", "Data Export"],
  ];
  const [depth, setDepth] = React.useState(2);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
        {paths[depth].map((crumb, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ color: "#374151", fontSize: "14px" }}>›</span>}
            <button
              onClick={() => setDepth(i)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: i === depth ? "#f1f5f9" : "#a855f7",
                fontSize: "13px", fontWeight: i === depth ? "600" : "500",
                textDecoration: i < depth ? "none" : "none",
                padding: "2px 4px", borderRadius: "4px",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => { if (i < depth) e.currentTarget.style.color = "#c084fc"; }}
              onMouseLeave={e => { if (i < depth) e.currentTarget.style.color = "#a855f7"; }}
            >{crumb}</button>
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        {paths.map((_, i) => (
          <button key={i} onClick={() => setDepth(i)} style={{
            padding: "4px 12px", borderRadius: "6px", fontSize: "11px", fontWeight: "600",
            background: depth === i ? "#a855f7" : "rgba(255,255,255,0.05)",
            border: "none", color: depth === i ? "#fff" : "#64748b",
            cursor: "pointer", transition: "all 0.15s",
          }}>/{i + 1}</button>
        ))}
      </div>
    </div>
  );
}
