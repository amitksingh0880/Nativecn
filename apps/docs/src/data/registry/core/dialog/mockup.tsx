import React from "react";

export default function InteractiveDialogMockup() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Dialog Modal</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Frosted overlays & action layouts</p>
      </div>

      <button
        onClick={() => setOpen(true)}
        style={{
          background: "#a855f7",
          border: "none",
          color: "#ffffff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        Trigger Dialog
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          borderRadius: "20px",
          zIndex: 100
        }}>
          <div style={{
            background: "rgba(20,20,20,0.95)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            width: "100%",
            padding: "20px"
          }}>
            <h5 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "700", marginBottom: "6px" }}>Confirm Sign Out</h5>
            <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.5", marginBottom: "20px" }}>
              Are you sure you want to end your vault session? Active local keys will be locked.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "rgba(255,255,255,0.03)", border: "none", color: "#ffffff", padding: "6px 12px", borderRadius: "4px", fontSize: "11px", cursor: "pointer" }}
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "#ef4444", border: "none", color: "#ffffff", padding: "6px 12px", borderRadius: "4px", fontSize: "11px", cursor: "pointer" }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
