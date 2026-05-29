import React from "react";

export default function InteractiveBlurFadeMockup() {
  const [triggered, setTriggered] = React.useState(false);
  const items = ["Hello, World!", "Beautiful animations", "Premium mobile UI", "Built with Reanimated"];
  const [visible, setVisible] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!triggered) { setVisible([]); return; }
    items.forEach((_, i) => {
      setTimeout(() => setVisible(v => [...v, i]), i * 150);
    });
  }, [triggered]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
        {items.map((item, i) => (
          <div key={i} style={{
            fontSize: "14px", fontWeight: "600", color: "#f1f5f9",
            opacity: visible.includes(i) ? 1 : 0,
            filter: visible.includes(i) ? "blur(0)" : "blur(8px)",
            transform: visible.includes(i) ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease",
          }}>{item}</div>
        ))}
      </div>
      <button
        onClick={() => { setTriggered(false); setTimeout(() => setTriggered(true), 50); }}
        style={{
          padding: "8px 20px", borderRadius: "8px",
          background: "#a855f7", border: "none", color: "#fff",
          cursor: "pointer", fontSize: "13px", fontWeight: "600",
        }}
      >Replay →</button>
    </div>
  );
}
