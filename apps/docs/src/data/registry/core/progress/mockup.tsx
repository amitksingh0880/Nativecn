import React from "react";

export default function InteractiveProgressMockup() {
  const [val, setVal] = React.useState(35);
  const [running, setRunning] = React.useState(false);

  const startScan = () => {
    if (running) return;
    setRunning(true);
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 3;
      if (current >= 100) {
        setVal(100);
        setRunning(false);
        clearInterval(interval);
      } else {
        setVal(current);
      }
    }, 150);
  };

  const resetProgress = () => {
    setVal(0);
    setRunning(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Linear Progress</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Organic transition loading tracks</p>
      </div>

      <div style={{ width: "100%", gap: "8px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#94a3b8" }}>
          <span>Downloading vault credentials...</span>
          <strong style={{ color: "#ffffff" }}>{val}%</strong>
        </div>
        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
          <div
            style={{
              width: `${val}%`,
              height: "100%",
              background: "linear-gradient(90deg, #a855f7, #0ea5e9)",
              borderRadius: "3px",
              transition: "width 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={startScan}
          disabled={running}
          style={{
            background: running ? "rgba(255,255,255,0.02)" : "rgba(168, 85, 247, 0.15)",
            border: `1px solid ${running ? "rgba(255,255,255,0.04)" : "#a855f7"}`,
            color: running ? "#64748b" : "#ffffff",
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          {running ? "Scanning..." : "Start Scan"}
        </button>
        <button
          onClick={resetProgress}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#ffffff",
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
