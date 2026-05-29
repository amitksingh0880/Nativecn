import React from "react";

const STEPS = ["Account", "Profile", "Prefs", "Done"];

export default function InteractiveStepIndicatorMockup() {
  const [current, setCurrent] = React.useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", width: "100%", padding: "0 8px" }}>
        {STEPS.map((step, i) => (
          <React.Fragment key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: i < current ? "#a855f7" : i === current ? "linear-gradient(135deg, #7c3aed, #a855f7)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${i <= current ? "#a855f7" : "rgba(255,255,255,0.1)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i <= current ? "#fff" : "#475569",
                fontSize: i < current ? "16px" : "13px", fontWeight: "700",
                transition: "all 0.3s",
                boxShadow: i === current ? "0 4px 14px rgba(168,85,247,0.4)" : "none",
              }}>
                {i < current ? "✓" : i + 1}
              </div>
              <div style={{ fontSize: "10px", color: i <= current ? "#a855f7" : "#475569", fontWeight: "600", whiteSpace: "nowrap" }}>{step}</div>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: "2px", background: i < current ? "#a855f7" : "rgba(255,255,255,0.08)", margin: "0 4px", marginBottom: "20px", transition: "background 0.3s", borderRadius: "1px" }} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} style={{ padding: "8px 16px", borderRadius: "8px", background: "rgba(255,255,255,0.06)", border: "none", color: current === 0 ? "#374151" : "#94a3b8", cursor: current === 0 ? "not-allowed" : "pointer", fontSize: "12px", fontWeight: "600" }}>← Back</button>
        <button onClick={() => setCurrent(c => Math.min(STEPS.length - 1, c + 1))} disabled={current === STEPS.length - 1} style={{ padding: "8px 16px", borderRadius: "8px", background: "#a855f7", border: "none", color: "#fff", cursor: current === STEPS.length - 1 ? "not-allowed" : "pointer", fontSize: "12px", fontWeight: "600" }}>Next →</button>
      </div>
    </div>
  );
}
