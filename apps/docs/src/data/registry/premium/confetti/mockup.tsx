import React from "react";

export default function InteractiveConfettiMockup() {
  const [particles, setParticles] = React.useState<Array<{ id: number, x: number, y: number, color: string, rotate: number }>>([]);
  const particleIdRef = React.useRef(0);

  const burst = () => {
    const colors = ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
    const newParticles = [];
    
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: particleIdRef.current++,
        x: Math.random() * 160 - 80, // Spread from center
        y: Math.random() * -120 - 40, // Height offset
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: Math.random() * 360
      });
    }

    setParticles(newParticles);
    
    setTimeout(() => {
      setParticles([]);
    }, 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px", position: "relative" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Celebration Magic</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Physics-based confetti particles</p>
      </div>

      <div style={{ position: "relative" }}>
        <button
          onClick={burst}
          style={{
            background: "linear-gradient(135deg, #a855f7, #0ea5e9)",
            border: "none",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(168, 85, 247, 0.3)"
          }}
        >
          Burst Confetti
        </button>

        {/* Confetti Particles container */}
        {particles.map(p => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "8px",
              height: "8px",
              background: p.color,
              borderRadius: p.id % 2 === 0 ? "50%" : "2px",
              transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg)`,
              opacity: 0,
              pointerEvents: "none",
              animation: "particle-float 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards"
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes particle-float {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--p-x, 40px), 180px) scale(0.3) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
