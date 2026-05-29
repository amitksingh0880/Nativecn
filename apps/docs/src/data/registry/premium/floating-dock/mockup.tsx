import React from "react";

const ITEMS = [
  { icon: "🏠", label: "Home" },
  { icon: "🔍", label: "Search" },
  { icon: "❤️", label: "Likes" },
  { icon: "🔔", label: "Alerts" },
  { icon: "👤", label: "Profile" },
];

export default function InteractiveFloatingDockMockup() {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const getScale = (i: number) => {
    if (hovered === null) return 1;
    const dist = Math.abs(i - hovered);
    if (dist === 0) return 1.55;
    if (dist === 1) return 1.25;
    return 1;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", paddingBottom: "16px" }}>
      <div style={{
        display: "flex", gap: "6px", alignItems: "flex-end",
        background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "20px", padding: "10px 14px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}>
        {ITEMS.map((item, i) => {
          const scale = getScale(i);
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", cursor: "pointer" }}
            >
              {hovered === i && (
                <div style={{ fontSize: "10px", color: "#fff", background: "rgba(0,0,0,0.6)", borderRadius: "4px", padding: "2px 6px", whiteSpace: "nowrap", marginBottom: "4px" }}>{item.label}</div>
              )}
              <div style={{
                width: "40px", height: "40px", borderRadius: "12px",
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: `${20 * scale}px`,
                transform: `scale(${scale})`,
                transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                transformOrigin: "bottom center",
              }}>{item.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
