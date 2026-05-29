import React from "react";

export default function InteractiveCurrencyInputMockup() {
  const [raw, setRaw] = React.useState("1250");
  const formatted = Number(raw || "0").toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", padding: "16px" }}>
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px", fontWeight: "500" }}>Amount (USD)</div>
        <div style={{
          display: "flex", alignItems: "center",
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.4)",
          borderRadius: "10px", padding: "0 14px",
          boxShadow: "0 0 0 3px rgba(168,85,247,0.1)",
        }}>
          <span style={{ fontSize: "20px", fontWeight: "700", color: "#a855f7", marginRight: "8px" }}>$</span>
          <input
            type="number"
            value={raw}
            onChange={e => setRaw(e.target.value)}
            style={{
              flex: 1, background: "none", border: "none", outline: "none",
              fontSize: "18px", fontWeight: "700", color: "#f1f5f9",
              padding: "12px 0", fontFamily: "inherit",
            }}
          />
          <span style={{ fontSize: "12px", color: "#475569", fontWeight: "600" }}>USD</span>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "11px", color: "#64748b" }}>Formatted</div>
        <div style={{ fontSize: "22px", fontWeight: "800", color: "#a855f7" }}>${formatted}</div>
      </div>
    </div>
  );
}
