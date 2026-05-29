import React from "react";

export default function InteractiveSheetMockup() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", position: "relative", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 24px", borderRadius: "10px",
          background: "linear-gradient(135deg, #7c3aed, #a855f7)",
          border: "none", color: "#fff", cursor: "pointer",
          fontWeight: "600", fontSize: "14px",
          boxShadow: "0 4px 14px rgba(168,85,247,0.35)",
        }}
      >Open Sheet</button>

      <div style={{
        position: "absolute", bottom: open ? 0 : "-100%",
        left: 0, right: 0, height: "65%",
        background: "linear-gradient(180deg, #1a1730 0%, #12102a 100%)",
        borderRadius: "20px 20px 0 0",
        border: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "none",
        transition: "bottom 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        padding: "16px",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.6)",
      }}>
        <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.15)", margin: "0 auto 20px" }} />
        <div style={{ fontSize: "16px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>Edit Profile</div>
        <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>Update your display name and bio.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {["Display Name", "Username"].map(label => (
            <div key={label}>
              <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px" }}>{label}</div>
              <div style={{ height: "38px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
          ))}
        </div>
        <button onClick={() => setOpen(false)} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: "20px" }}>×</button>
      </div>
    </div>
  );
}
