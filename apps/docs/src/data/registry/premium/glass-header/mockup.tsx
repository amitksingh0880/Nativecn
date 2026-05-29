import React from "react";

export default function InteractiveGlassHeaderMockup() {
  const [scrollY, setScrollY] = React.useState(0);
  const blur = Math.min(scrollY / 2, 12);
  const opacity = Math.min(0.1 + scrollY / 200, 0.7);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative", background: "linear-gradient(135deg, #1e1b4b, #312e81)" }}>
      {/* Glass header */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        backdropFilter: `blur(${blur}px)`,
        background: `rgba(15,10,30,${opacity})`,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "14px 16px",
        display: "flex", alignItems: "center", gap: "10px",
        transition: "all 0.2s",
      }}>
        <span style={{ color: "#64748b", fontSize: "20px", cursor: "pointer" }}>←</span>
        <span style={{ flex: 1, fontSize: "16px", fontWeight: "700", color: "#f1f5f9" }}>Dashboard</span>
        <span style={{ color: "#a855f7", fontSize: "14px" }}>⚙</span>
      </div>
      {/* Scrollable content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px" }} onScroll={e => setScrollY((e.target as HTMLDivElement).scrollTop)}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "14px", marginBottom: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#f1f5f9" }}>Item {i + 1}</div>
            <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>Scroll down to see glass effect</div>
          </div>
        ))}
      </div>
    </div>
  );
}
