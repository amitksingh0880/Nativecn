import React from "react";

export default function InteractiveAlertDialogMockup() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px", position: "relative" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "#ef4444", color: "#fff", border: "none",
          padding: "10px 24px", borderRadius: "8px", fontWeight: "600",
          fontSize: "14px", cursor: "pointer",
          boxShadow: "0 4px 14px rgba(239,68,68,0.35)",
          transition: "transform 0.1s",
        }}
        onMouseDown={e => (e.currentTarget.style.transform = "scale(0.97)")}
        onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        Delete Account
      </button>

      {open && (
        <div style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: "12px", backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease",
        }}>
          <div style={{
            background: "#1e1b2e", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14px", padding: "24px", width: "90%", maxWidth: "280px",
          }}>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>Are you sure?</div>
            <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.5", marginBottom: "20px" }}>
              This action cannot be undone. Your account will be permanently deleted.
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setOpen(false)}
                style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#f1f5f9", cursor: "pointer", fontSize: "13px", fontWeight: "600" }}
              >Cancel</button>
              <button
                onClick={() => setOpen(false)}
                style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#ef4444", border: "none", color: "#fff", cursor: "pointer", fontSize: "13px", fontWeight: "600" }}
              >Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
