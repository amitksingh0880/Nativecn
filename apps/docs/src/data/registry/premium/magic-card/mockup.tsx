import React from "react";

export default function InteractiveMagicCardMockup() {
  const [rotation, setRotation] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setRotation(r => (r + 1) % 360), 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div style={{ position: "relative", width: "200px", height: "130px", borderRadius: "16px", overflow: "hidden", padding: "1.5px" }}>
        {/* Rotating conic gradient border */}
        <div style={{
          position: "absolute", inset: "-50%", borderRadius: "50%",
          background: `conic-gradient(from ${rotation}deg, transparent 0deg, #a855f7 60deg, #7c3aed 120deg, transparent 180deg)`,
        }} />
        {/* Inner card */}
        <div style={{
          position: "absolute", inset: "1.5px", borderRadius: "14px",
          background: "linear-gradient(135deg, #1a1730, #0f0c1e)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "8px",
        }}>
          <div style={{ fontSize: "26px", fontWeight: "800", background: "linear-gradient(90deg, #a855f7, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Magic UI</div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>Rotating gradient border</div>
        </div>
      </div>
    </div>
  );
}
