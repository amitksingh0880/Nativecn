import React from "react";

export default function InteractiveDropdownMenuMockup() {
  const [open, setOpen] = React.useState(false);
  const items = [
    { label: "Profile", icon: "👤" },
    { label: "Settings", icon: "⚙️" },
    { label: "Billing", icon: "💳" },
    null,
    { label: "Sign Out", icon: "🚪", destructive: true },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          padding: "9px 20px", borderRadius: "10px",
          background: open ? "rgba(168,85,247,0.15)" : "rgba(255,255,255,0.06)",
          border: `1px solid ${open ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.1)"}`,
          color: "#f1f5f9", cursor: "pointer", fontWeight: "600", fontSize: "13px",
          display: "flex", alignItems: "center", gap: "8px",
          transition: "all 0.2s",
        }}
      >
        My Account <span style={{ fontSize: "10px", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", display: "inline-block" }}>▼</span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(50% + 28px)", left: "50%", transform: "translateX(-50%)",
          background: "#1a1730", border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px", overflow: "hidden", minWidth: "180px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          animation: "fadeIn 0.15s ease",
        }}>
          {items.map((item, i) =>
            item === null
              ? <div key={i} style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
              : <button key={i} onClick={() => setOpen(false)} style={{
                  width: "100%", padding: "10px 14px", textAlign: "left", background: "transparent",
                  border: "none", cursor: "pointer",
                  color: item.destructive ? "#f87171" : "#cbd5e1",
                  fontSize: "13px", display: "flex", alignItems: "center", gap: "10px",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span>{item.icon}</span>{item.label}
              </button>
          )}
        </div>
      )}
    </div>
  );
}
