import React from "react";

export default function InteractiveRadioGroupMockup() {
  const [selected, setSelected] = React.useState("dark");
  const options = [
    { value: "dark", label: "Dark Mode", desc: "Optimized for low-light usage" },
    { value: "light", label: "Light Mode", desc: "Clean white interface" },
    { value: "system", label: "System Default", desc: "Follows device setting" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "8px", height: "100%", justifyContent: "center" }}>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => setSelected(opt.value)}
          style={{
            display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px",
            borderRadius: "10px", cursor: "pointer", textAlign: "left",
            background: selected === opt.value ? "rgba(168,85,247,0.1)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${selected === opt.value ? "rgba(168,85,247,0.4)" : "rgba(255,255,255,0.08)"}`,
            transition: "all 0.2s",
          }}
        >
          <div style={{
            width: "18px", height: "18px", borderRadius: "50%",
            border: `2px solid ${selected === opt.value ? "#a855f7" : "#374151"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "border-color 0.2s",
          }}>
            {selected === opt.value && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a855f7" }} />}
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#f1f5f9" }}>{opt.label}</div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{opt.desc}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
