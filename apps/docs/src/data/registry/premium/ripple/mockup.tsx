import React from "react";

export default function InteractiveRippleMockup() {
  const [ripples, setRipples] = React.useState<number[]>([]);
  const [t, setT] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setT(v => v + 16), 16);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      setRipples(prev => [...prev, Date.now()].slice(-4));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", position: "relative" }}>
      {ripples.map(ts => {
        const age = Date.now() - ts;
        const progress = Math.min(age / 2500, 1);
        const scale = progress * 5;
        const opacity = Math.max(0, 1 - progress);
        return (
          <div key={ts} style={{
            position: "absolute", width: "50px", height: "50px",
            borderRadius: "50%", border: "2px solid rgba(168,85,247,0.8)",
            transform: `scale(${scale})`, opacity,
            pointerEvents: "none",
          }} />
        );
      })}
      <div style={{
        width: "50px", height: "50px", borderRadius: "50%",
        background: "linear-gradient(135deg, #7c3aed, #a855f7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "20px", boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
        zIndex: 1,
      }}>📡</div>
    </div>
  );
}
