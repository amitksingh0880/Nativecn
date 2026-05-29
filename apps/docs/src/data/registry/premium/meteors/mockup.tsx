import React from "react";

type Meteor = { id: number; x: number; y: number; len: number; duration: number; delay: number; progress: number };

export default function InteractiveMeteorsMockup() {
  const [meteors, setMeteors] = React.useState<Meteor[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 50 - 20,
      len: 60 + Math.random() * 60,
      duration: 1500 + Math.random() * 2000,
      delay: Math.random() * 3000,
      progress: Math.random(),
    }))
  );

  React.useEffect(() => {
    const id = setInterval(() => {
      setMeteors(ms => ms.map(m => ({
        ...m,
        progress: (m.progress + (16 / m.duration)) % 1,
      })));
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", background: "linear-gradient(135deg, #0a0618, #1a0a2e)", borderRadius: "12px", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {meteors.map(m => {
          const p = m.progress;
          const startX = m.x + p * 120;
          const startY = m.y + p * 120;
          return (
            <line
              key={m.id}
              x1={`${startX}%`} y1={`${startY}%`}
              x2={`${startX - (m.len / window.innerWidth) * 100 * 0.7}%`}
              y2={`${startY - (m.len / window.innerHeight) * 100 * 0.7}%`}
              stroke="rgba(168,85,247,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={Math.sin(p * Math.PI)}
            />
          );
        })}
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px" }}>
        <div style={{ fontSize: "20px", fontWeight: "700", color: "#f1f5f9" }}>Meteors</div>
        <div style={{ fontSize: "12px", color: "#64748b" }}>Particle rain effect</div>
      </div>
    </div>
  );
}
