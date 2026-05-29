import React from "react";

export default function InteractiveToggleMockup() {
  const [bold, setBold] = React.useState(false);
  const [italic, setItalic] = React.useState(false);
  const [underline, setUnderline] = React.useState(false);

  const toggles = [
    { label: "B", active: bold, set: setBold, style: { fontWeight: "900" } },
    { label: "I", active: italic, set: setItalic, style: { fontStyle: "italic" } },
    { label: "U", active: underline, set: setUnderline, style: { textDecoration: "underline" } },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        {toggles.map(t => (
          <button
            key={t.label}
            onClick={() => t.set(v => !v)}
            style={{
              width: "40px", height: "40px", borderRadius: "10px",
              background: t.active ? "rgba(168,85,247,0.2)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${t.active ? "rgba(168,85,247,0.6)" : "rgba(255,255,255,0.1)"}`,
              color: t.active ? "#a855f7" : "#94a3b8",
              cursor: "pointer", fontSize: "14px",
              transition: "all 0.15s",
              ...t.style,
            }}
          >{t.label}</button>
        ))}
      </div>
      <div style={{
        padding: "10px 14px", background: "rgba(255,255,255,0.04)",
        borderRadius: "8px", fontSize: "14px", color: "#f1f5f9",
        fontWeight: bold ? "900" : "400",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        transition: "all 0.15s",
      }}>
        Sample text with formatting
      </div>
    </div>
  );
}
