import React from "react";

export default function InteractiveTooltipMockup() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const items = [
    { id: "save", label: "Save", tip: "Save changes (⌘S)" },
    { id: "share", label: "Share", tip: "Share with team" },
    { id: "delete", label: "Delete", tip: "Remove permanently" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "32px" }}>
      <div style={{ fontSize: "12px", color: "#64748b" }}>Hover the buttons below</div>
      <div style={{ display: "flex", gap: "12px" }}>
        {items.map(item => (
          <div key={item.id} style={{ position: "relative" }}>
            {hovered === item.id && (
              <div style={{
                position: "absolute", bottom: "calc(100% + 8px)", left: "50%",
                transform: "translateX(-50%)",
                background: "#1e293b", border: "1px solid rgba(255,255,255,0.12)",
                color: "#f1f5f9", fontSize: "11px", fontWeight: "500",
                padding: "5px 10px", borderRadius: "6px", whiteSpace: "nowrap",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                animation: "fadeIn 0.15s ease",
              }}>
                {item.tip}
                <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid rgba(255,255,255,0.12)" }} />
              </div>
            )}
            <button
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "8px 16px", borderRadius: "8px",
                background: hovered === item.id ? "rgba(168,85,247,0.15)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${hovered === item.id ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.1)"}`,
                color: "#f1f5f9", cursor: "pointer", fontSize: "13px", fontWeight: "600",
                transition: "all 0.15s",
              }}
            >{item.label}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
