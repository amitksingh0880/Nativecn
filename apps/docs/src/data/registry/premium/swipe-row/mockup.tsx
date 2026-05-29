import React from "react";

export default function InteractiveSwipeRowMockup() {
  const [offset, setOffset] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [deleted, setDeleted] = React.useState(false);
  const [archived, setArchived] = React.useState(false);

  const clampedOffset = Math.min(80, Math.max(-80, offset));

  if (deleted) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#ef4444", fontSize: "14px" }}>
      🗑 Deleted! <button onClick={() => { setDeleted(false); setOffset(0); }} style={{ marginLeft: "12px", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "6px", padding: "4px 10px", color: "#94a3b8", cursor: "pointer", fontSize: "12px" }}>Undo</button>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "8px", padding: "8px" }}>
      <div style={{ fontSize: "11px", color: "#64748b", textAlign: "center", marginBottom: "4px" }}>Swipe left to delete, right to archive</div>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "12px" }}>
        {/* Archive action */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2px" }}>
          <span style={{ fontSize: "18px" }}>📦</span>
          <span style={{ fontSize: "10px", color: "#fff", fontWeight: "600" }}>Archive</span>
        </div>
        {/* Delete action */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2px" }}>
          <span style={{ fontSize: "18px" }}>🗑</span>
          <span style={{ fontSize: "10px", color: "#fff", fontWeight: "600" }}>Delete</span>
        </div>
        {/* Row */}
        <div
          style={{
            transform: `translateX(${clampedOffset}px)`,
            transition: dragging ? "none" : "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            background: "#1e1b2e", padding: "14px 16px",
            display: "flex", alignItems: "center", gap: "12px", cursor: "grab",
          }}
          onPointerDown={e => { setDragging(true); setStartX(e.clientX); e.currentTarget.setPointerCapture(e.pointerId); }}
          onPointerMove={e => { if (dragging) setOffset(e.clientX - startX); }}
          onPointerUp={() => {
            setDragging(false);
            if (offset < -60) setDeleted(true);
            else if (offset > 60) { setArchived(true); setOffset(0); }
            else setOffset(0);
          }}
        >
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "700" }}>A</div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "600", color: "#f1f5f9" }}>Notification Update</div>
            <div style={{ fontSize: "12px", color: "#64748b" }}>2 minutes ago</div>
          </div>
        </div>
      </div>
      {archived && <div style={{ textAlign: "center", fontSize: "12px", color: "#3b82f6" }}>📦 Archived</div>}
    </div>
  );
}
