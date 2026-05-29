import React from "react";

export default function InteractiveAnimatedNumberMockup() {
  const [val, setVal] = React.useState(3240);

  const runTicker = () => {
    const target = Math.floor(Math.random() * 8000) + 1500;
    const duration = 1200;
    const start = val;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(start + (target - start) * ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Animated Number</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Rolling digital numeric tickers</p>
      </div>

      <div style={{
        fontSize: "32px",
        fontWeight: "800",
        background: "linear-gradient(135deg, #a855f7, #0ea5e9)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "1px",
        fontFamily: "monospace"
      }}>
        {val.toLocaleString()}
      </div>

      <button
        onClick={runTicker}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "6px 14px",
          borderRadius: "6px",
          color: "#ffffff",
          fontSize: "12px",
          cursor: "pointer"
        }}
      >
        Roll Number Ticker
      </button>
    </div>
  );
}
