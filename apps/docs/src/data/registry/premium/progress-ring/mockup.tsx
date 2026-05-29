import React from "react";

export default function InteractiveProgressRingMockup() {
  const [percent, setPercent] = React.useState(72);
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Activity Progress</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>High-fidelity vector rings</p>
      </div>

      <div style={{ position: "relative", width: `${size}px`, height: `${size}px` }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(168, 85, 247, 0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Foreground Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#a855f7"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          />
        </svg>
        {/* Statistics Labels */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center"
        }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff" }}>{percent}%</span>
          <span style={{ fontSize: "9px", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Goal</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => setPercent(p => Math.max(p - 15, 0))}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "4px", color: "#fff", cursor: "pointer" }}
        >
          -15%
        </button>
        <button
          onClick={() => setPercent(p => Math.min(p + 15, 100))}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "4px", color: "#fff", cursor: "pointer" }}
        >
          +15%
        </button>
      </div>
    </div>
  );
}
