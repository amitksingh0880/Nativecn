import React from "react";

export default function InteractiveShinyButtonMockup() {
  const [pos, setPos] = React.useState(0);
  const [pressed, setPressed] = React.useState(false);
  React.useEffect(() => {
    const id = setInterval(() => setPos(p => (p + 1.5) % 200), 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "100px" }}>
        <button
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          style={{
            padding: "12px 32px",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            border: "none", color: "#fff", cursor: "pointer",
            fontWeight: "700", fontSize: "15px",
            transform: pressed ? "scale(0.97)" : "scale(1)",
            transition: "transform 0.1s",
            letterSpacing: "0.02em",
          }}
        >
          Get Started Free ✦
        </button>
        {/* Shine sweep */}
        <div style={{
          position: "absolute", top: 0, left: `${pos - 80}%`, width: "50px", height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          pointerEvents: "none",
          transform: "skewX(-15deg)",
        }} />
      </div>
      <div style={{ fontSize: "12px", color: "#64748b" }}>Perpetual shine sweep animation</div>
    </div>
  );
}
