import React from "react";

const DATA = [
  { label: "Mon", value: 40 },
  { label: "Tue", value: 75 },
  { label: "Wed", value: 55 },
  { label: "Thu", value: 90 },
  { label: "Fri", value: 62 },
  { label: "Sat", value: 82 },
  { label: "Sun", value: 48 },
];

export default function InteractiveBarChartMockup() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const max = Math.max(...DATA.map(d => d.value));

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "12px", gap: "8px" }}>
      <div style={{ fontSize: "13px", fontWeight: "600", color: "#f1f5f9" }}>Weekly Activity</div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "6px" }}>
        {DATA.map((d, i) => {
          const h = `${(d.value / max) * 85}%`;
          const isHover = hovered === i;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", height: "100%", justifyContent: "flex-end" }}>
              {isHover && <div style={{ fontSize: "11px", fontWeight: "700", color: "#a855f7" }}>{d.value}</div>}
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  width: "100%", height: h,
                  borderRadius: "4px 4px 0 0",
                  background: isHover ? "linear-gradient(180deg, #a855f7, #7c3aed)" : "linear-gradient(180deg, rgba(168,85,247,0.5), rgba(124,58,237,0.3))",
                  border: isHover ? "1px solid rgba(168,85,247,0.8)" : "1px solid rgba(168,85,247,0.2)",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              />
              <div style={{ fontSize: "10px", color: "#475569", fontWeight: "500" }}>{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
