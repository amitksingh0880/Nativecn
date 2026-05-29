import React from "react";

export default function InteractiveSliderMockup() {
  const [value, setValue] = React.useState(40);
  const [dragging, setDragging] = React.useState(false);
  const trackRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    setValue(Math.round(pct * 100));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "36px", fontWeight: "800", color: "#a855f7" }}>{value}</div>
        <div style={{ fontSize: "12px", color: "#64748b" }}>Drag slider to adjust</div>
      </div>

      <div
        style={{ width: "100%", padding: "16px 0", cursor: "pointer", userSelect: "none" }}
        onPointerMove={handlePointerMove}
        onPointerUp={() => setDragging(false)}
        onPointerLeave={() => setDragging(false)}
      >
        <div
          ref={trackRef}
          style={{ position: "relative", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", width: "100%" }}
          onPointerDown={(e) => {
            setDragging(true);
            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            setValue(Math.round(Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1) * 100));
          }}
        >
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${value}%`, background: "linear-gradient(90deg, #7c3aed, #a855f7)", borderRadius: "3px", transition: dragging ? "none" : "width 0.1s" }} />
          <div style={{
            position: "absolute", top: "50%", left: `${value}%`,
            transform: "translate(-50%, -50%)",
            width: dragging ? "24px" : "20px", height: dragging ? "24px" : "20px",
            borderRadius: "50%", background: "#a855f7",
            border: "3px solid #fff", boxShadow: "0 2px 8px rgba(168,85,247,0.5)",
            transition: dragging ? "none" : "all 0.1s",
            cursor: "grab",
          }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <span style={{ fontSize: "11px", color: "#475569" }}>0</span>
        <span style={{ fontSize: "11px", color: "#475569" }}>100</span>
      </div>
    </div>
  );
}
