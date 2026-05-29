import React from "react";

export default function InteractiveShimmerMockup() {
  const [pos, setPos] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPos(p => (p + 2) % 200), 16);
    return () => clearInterval(id);
  }, []);

  const shimmerBg = (w: string, h: string, r = "6px") => ({
    width: w, height: h, borderRadius: r,
    background: "#1e293b", overflow: "hidden" as const, position: "relative" as const,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "12px", height: "100%", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div style={shimmerBg("44px", "44px", "50%")}>
          <div style={{ position: "absolute", top: 0, left: `${pos - 100}%`, width: "60%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          {["70%", "45%"].map((w, i) => (
            <div key={i} style={shimmerBg(w, "12px")}>
              <div style={{ position: "absolute", top: 0, left: `${pos - 100}%`, width: "60%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
            </div>
          ))}
        </div>
      </div>
      {["100%", "88%", "72%"].map((w, i) => (
        <div key={i} style={shimmerBg(w, "13px")}>
          <div style={{ position: "absolute", top: 0, left: `${pos - 100}%`, width: "60%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
        </div>
      ))}
      <div style={shimmerBg("100%", "80px", "10px")}>
        <div style={{ position: "absolute", top: 0, left: `${pos - 100}%`, width: "60%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>
    </div>
  );
}
