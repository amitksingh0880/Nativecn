import React from "react";

export default function InteractiveCollapsibleMockup() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "0", padding: "8px" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 16px", borderRadius: open ? "10px 10px 0 0" : "10px",
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
          borderBottom: open ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(255,255,255,0.1)",
          color: "#f1f5f9", cursor: "pointer", fontWeight: "600", fontSize: "14px",
          transition: "all 0.2s",
        }}
      >
        <span>Advanced Settings</span>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", color: "#a855f7", fontSize: "12px" }}>▼</span>
      </button>

      <div style={{
        overflow: "hidden", maxHeight: open ? "200px" : "0",
        transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        background: "rgba(255,255,255,0.03)",
        border: open ? "1px solid rgba(255,255,255,0.1)" : "none",
        borderTop: "none",
        borderRadius: "0 0 10px 10px",
      }}>
        <div style={{ padding: "16px" }}>
          {["Enable 2FA", "API Rate Limiting", "Audit Logging"].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>{item}</span>
              <div style={{ width: "32px", height: "18px", borderRadius: "9px", background: i === 0 ? "#a855f7" : "rgba(255,255,255,0.1)", position: "relative", cursor: "pointer" }}>
                <div style={{ position: "absolute", width: "14px", height: "14px", borderRadius: "50%", background: "#fff", top: "2px", left: i === 0 ? "16px" : "2px", transition: "left 0.2s" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
