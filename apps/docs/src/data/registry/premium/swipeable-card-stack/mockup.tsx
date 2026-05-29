import React from "react";

const CARDS = [
  { id: 1, color: "#7c3aed", label: "React Native", emoji: "📱" },
  { id: 2, color: "#0891b2", label: "TypeScript", emoji: "🔷" },
  { id: 3, color: "#059669", label: "Expo SDK", emoji: "🚀" },
  { id: 4, color: "#d97706", label: "Reanimated", emoji: "✨" },
];

export default function InteractiveSwipeableCardStackMockup() {
  const [cards, setCards] = React.useState(CARDS);
  const [drag, setDrag] = React.useState({ x: 0, dragging: false, startX: 0 });

  if (cards.length === 0) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "12px" }}>
      <div style={{ fontSize: "28px" }}>🎉</div>
      <div style={{ color: "#94a3b8", fontSize: "13px" }}>All done!</div>
      <button onClick={() => setCards(CARDS)} style={{ padding: "8px 16px", borderRadius: "8px", background: "#a855f7", border: "none", color: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: "600" }}>Reset</button>
    </div>
  );

  const top = cards[0];
  const rotation = drag.x * 0.08;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", userSelect: "none" }}>
      <div style={{ position: "relative", width: "200px", height: "130px" }}>
        {cards.slice(1, 3).reverse().map((c, i) => (
          <div key={c.id} style={{
            position: "absolute", inset: 0, borderRadius: "16px",
            background: `linear-gradient(135deg, ${c.color}cc, ${c.color}88)`,
            border: "1px solid rgba(255,255,255,0.1)",
            transform: `translateY(${(2 - i) * -6}px) scale(${0.92 + i * 0.04})`,
          }} />
        ))}
        <div
          style={{
            position: "absolute", inset: 0, borderRadius: "16px",
            background: `linear-gradient(135deg, ${top.color}, ${top.color}cc)`,
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px",
            transform: drag.dragging ? `translateX(${drag.x}px) rotate(${rotation}deg)` : "none",
            transition: drag.dragging ? "none" : "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            cursor: "grab", boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
          onPointerDown={e => { setDrag({ x: 0, dragging: true, startX: e.clientX }); e.currentTarget.setPointerCapture(e.pointerId); }}
          onPointerMove={e => { if (drag.dragging) setDrag(d => ({ ...d, x: e.clientX - d.startX })); }}
          onPointerUp={() => {
            if (Math.abs(drag.x) > 50) setCards(c => c.slice(1));
            setDrag({ x: 0, dragging: false, startX: 0 });
          }}
        >
          <div style={{ fontSize: "36px" }}>{top.emoji}</div>
          <div style={{ fontSize: "14px", fontWeight: "700", color: "#fff" }}>{top.label}</div>
        </div>
        {drag.dragging && drag.x !== 0 && (
          <div style={{
            position: "absolute", top: "8px", left: drag.x > 0 ? "8px" : undefined, right: drag.x < 0 ? "8px" : undefined,
            background: drag.x > 0 ? "#10b981" : "#ef4444", borderRadius: "8px",
            padding: "4px 10px", fontSize: "11px", fontWeight: "700", color: "#fff",
          }}>{drag.x > 0 ? "LIKE ❤" : "SKIP ✕"}</div>
        )}
      </div>
      <div style={{ fontSize: "11px", color: "#64748b" }}>{cards.length} remaining • Swipe left or right</div>
    </div>
  );
}
