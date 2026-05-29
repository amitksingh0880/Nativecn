import React from "react";

export default function InteractiveColorPickerMockup() {
  const [hue, setHue] = React.useState(270);
  const color = `hsl(${hue}, 80%, 60%)`;
  const hex = hslToHex(hue, 80, 60);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: color, boxShadow: `0 6px 24px ${color}80`, transition: "all 0.1s" }} />
      <div style={{ width: "100%", padding: "0 12px" }}>
        <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "8px" }}>Hue</div>
        <div style={{ position: "relative", height: "12px", borderRadius: "6px", background: "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)", cursor: "pointer" }}
          onClick={e => {
            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            setHue(Math.round(((e.clientX - rect.left) / rect.width) * 360));
          }}
        >
          <div style={{ position: "absolute", top: "-3px", left: `${(hue / 360) * 100}%`, width: "18px", height: "18px", borderRadius: "50%", background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.4)", transform: "translateX(-50%)", pointerEvents: "none" }} />
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "8px 16px", fontFamily: "monospace", fontSize: "14px", color: "#f1f5f9", border: "1px solid rgba(255,255,255,0.1)" }}>{hex}</div>
    </div>
  );
}

function hslToHex(h: number, s: number, l: number) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
