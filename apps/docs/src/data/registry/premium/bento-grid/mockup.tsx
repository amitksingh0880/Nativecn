import React from "react";

export default function InteractiveBentoGridMockup() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", gap: "12px", padding: "8px"
    }}>
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "15px", fontWeight: "700" }}>Grid Dashboard</h4>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        flex: 1
      }}>
        {/* Box 1 (Spans full width) */}
        <div style={{
          gridColumn: "1 / -1",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>Memory Usage</span>
            <strong style={{ fontSize: "16px", color: "#fff" }}>4.2 GB</strong>
          </div>
          <div style={{ height: "4px", width: "60px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
            <div style={{ height: "100%", width: "70%", background: "#a855f7", borderRadius: "2px" }} />
          </div>
        </div>

        {/* Box 2 */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "12px"
        }}>
          <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>Battery</span>
          <strong style={{ fontSize: "16px", color: "#22c55e" }}>92%</strong>
        </div>

        {/* Box 3 */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "12px"
        }}>
          <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>Network</span>
          <strong style={{ fontSize: "16px", color: "#0ea5e9" }}>Fast</strong>
        </div>
      </div>
    </div>
  );
}
