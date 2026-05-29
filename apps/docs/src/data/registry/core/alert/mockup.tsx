import React from "react";

export default function InteractiveAlertMockup() {
  const [visible, setVisible] = React.useState(true);
  const variants = [
    { variant: "default", label: "Info", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.3)" },
    { variant: "destructive", label: "Error", color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" },
    { variant: "success", label: "Success", color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)" },
  ];
  const [active, setActive] = React.useState(0);
  const v = variants[active];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "8px", height: "100%" }}>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        {variants.map((vt, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "4px 12px", borderRadius: "6px", fontSize: "11px", fontWeight: "600",
              cursor: "pointer", border: "none",
              background: active === i ? vt.color : "rgba(255,255,255,0.05)",
              color: active === i ? "#fff" : "#94a3b8",
              transition: "all 0.2s",
            }}
          >{vt.label}</button>
        ))}
      </div>
      <div style={{
        display: "flex", alignItems: "flex-start", gap: "12px",
        background: v.bg, border: `1px solid ${v.border}`,
        borderRadius: "10px", padding: "14px 16px",
        transition: "all 0.3s ease",
      }}>
        <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: v.color, flexShrink: 0, marginTop: "2px" }} />
        <div>
          <div style={{ fontSize: "14px", fontWeight: "600", color: "#f1f5f9", marginBottom: "4px" }}>
            {v.label} Alert
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            Your session will expire in 5 minutes. Save your work.
          </div>
        </div>
      </div>
    </div>
  );
}
