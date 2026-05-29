import React from "react";

export default function InteractiveSelectMockup() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const options = ["Dark Mode", "Light Mode", "System Default", "High Contrast"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", position: "relative" }}>
      <div style={{ width: "220px", position: "relative" }}>
        <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px", fontWeight: "500" }}>Theme</div>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: "100%", padding: "10px 14px", borderRadius: "10px",
            background: open ? "rgba(168,85,247,0.1)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${open ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.12)"}`,
            color: selected ? "#f1f5f9" : "#64748b",
            cursor: "pointer", fontSize: "13px", fontWeight: "500",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            transition: "all 0.2s",
          }}
        >
          <span>{selected ?? "Select a theme"}</span>
          <span style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", fontSize: "10px" }}>▼</span>
        </button>

        {open && (
          <div style={{
            position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 10,
            background: "#1a1730", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px", overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}>
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => { setSelected(opt); setOpen(false); }}
                style={{
                  width: "100%", padding: "10px 14px", textAlign: "left",
                  background: selected === opt ? "rgba(168,85,247,0.15)" : "transparent",
                  border: "none", color: selected === opt ? "#a855f7" : "#cbd5e1",
                  cursor: "pointer", fontSize: "13px", fontWeight: selected === opt ? "600" : "400",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (selected !== opt) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={e => { if (selected !== opt) e.currentTarget.style.background = "transparent"; }}
              >{opt}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
