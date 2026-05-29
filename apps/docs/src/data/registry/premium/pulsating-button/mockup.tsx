import React from "react";

export default function InteractivePulsatingButtonMockup() {
  const [scale, setScale] = React.useState(1);
  const [pulseScale, setPulseScale] = React.useState(1);
  const [pulseOpacity, setPulseOpacity] = React.useState(0);

  React.useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += 0.04;
      const progress = (Math.sin(t) + 1) / 2;
      setPulseScale(1 + progress * 0.8);
      setPulseOpacity(Math.max(0, 0.6 - progress * 0.6));
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Pulse ring */}
        <div style={{
          position: "absolute", width: "120px", height: "44px", borderRadius: "100px",
          border: "2px solid rgba(168,85,247,0.6)",
          transform: `scale(${pulseScale})`, opacity: pulseOpacity,
          transition: "none",
        }} />
        <button
          onMouseDown={() => setScale(0.97)}
          onMouseUp={() => setScale(1)}
          onMouseLeave={() => setScale(1)}
          style={{
            padding: "12px 28px", borderRadius: "100px",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            border: "none", color: "#fff", cursor: "pointer",
            fontWeight: "700", fontSize: "14px",
            transform: `scale(${scale})`, transition: "transform 0.1s",
            boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
            display: "flex", alignItems: "center", gap: "6px",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", display: "inline-block" }} />
          Live Now
        </button>
      </div>
      <div style={{ fontSize: "12px", color: "#64748b" }}>Radiating pulse ring effect</div>
    </div>
  );
}
