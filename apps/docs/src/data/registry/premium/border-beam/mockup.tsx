import React from "react";

export default function InteractiveBorderBeamMockup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px" }}>
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "15px", marginBottom: "4px" }}>Border Beam</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Flowing active laser borders</p>
      </div>

      <div style={{
        position: "relative",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "200px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        {/* Animated Laser Border Beam Simulated */}
        <div style={{
          position: "absolute",
          top: "-50%", left: "-50%", right: "-50%", bottom: "-50%",
          background: "conic-gradient(from 0deg, transparent 50%, #a855f7 90%, #0ea5e9 100%)",
          animation: "beam-spin 3s linear infinite",
          zIndex: 1
        }} />
        {/* Inner Card Container */}
        <div style={{
          position: "absolute",
          top: "2px", left: "2px", right: "2px", bottom: "2px",
          background: "rgba(10,10,10,0.95)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2
        }}>
          <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: "600" }}>Laser Beam Active</span>
        </div>
      </div>

      <style>{`
        @keyframes beam-spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
