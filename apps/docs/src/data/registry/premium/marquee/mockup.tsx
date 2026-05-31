import React from "react";

const TAGS = ["React Native", "Expo", "Reanimated", "NativeCN", "TypeScript", "Tailwind", "Moti", "Zustand", "React Query", "Prisma"];

export default function InteractiveMarqueeMockup() {
  const [pos, setPos] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPos(p => (p - 0.5 + 1000) % 1000), 16);
    return () => clearInterval(id);
  }, []);

  const repeated = [...TAGS, ...TAGS, ...TAGS];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", overflow: "hidden" }}>
      {[0, 1].map(row => (
        <div key={row} style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ display: "flex", gap: "10px", transform: `translateX(${row === 0 ? -pos : pos - 400}px)`, width: "max-content" }}>
            {repeated.map((tag, i) => (
              <div key={i} style={{
                padding: "6px 14px", borderRadius: "100px", whiteSpace: "nowrap",
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.25)",
                color: "#a855f7", fontSize: "12px", fontWeight: "600",
              }}>{tag}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
