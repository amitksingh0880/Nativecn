import React from "react";

const SLIDES = [
  { title: "Slide One", color: "#7c3aed", emoji: "📱" },
  { title: "Slide Two", color: "#0891b2", emoji: "🚀" },
  { title: "Slide Three", color: "#059669", emoji: "✨" },
];

export default function InteractiveCarouselMockup() {
  const [current, setCurrent] = React.useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "12px", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: "14px" }}>
        <div style={{ display: "flex", transform: `translateX(-${current * 100}%)`, transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
          {SLIDES.map((s, i) => (
            <div key={i} style={{
              minWidth: "100%", height: "120px",
              background: `linear-gradient(135deg, ${s.color}cc, ${s.color}66)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <span style={{ fontSize: "28px" }}>{s.emoji}</span>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#fff" }}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "6px", padding: "4px 10px", color: "#94a3b8", cursor: "pointer" }}>←</button>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", background: i === current ? "#a855f7" : "rgba(255,255,255,0.15)", cursor: "pointer", padding: 0, transition: "all 0.2s" }} />
        ))}
        <button onClick={() => setCurrent(c => Math.min(SLIDES.length - 1, c + 1))} style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "6px", padding: "4px 10px", color: "#94a3b8", cursor: "pointer" }}>→</button>
      </div>
    </div>
  );
}
