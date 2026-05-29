import React from "react";

export default function InteractiveToastMockup() {
  const [toast, setToast] = React.useState<{ title: string, desc: string } | null>(null);

  const triggerToast = () => {
    setToast({ title: "Preferences Saved", desc: "Local security credentials updated successfully." });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Toast Alert</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Sliding dynamic status triggers</p>
      </div>

      <button
        onClick={triggerToast}
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
        Trigger Toast Alert
      </button>

      {toast && (
        <div style={{
          position: "absolute",
          top: "16px", left: "16px", right: "16px",
          background: "rgba(20,20,20,0.95)",
          border: "1px solid rgba(168, 85, 247, 0.4)",
          boxShadow: "0 10px 30px rgba(168, 85, 247, 0.15)",
          borderRadius: "8px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          zIndex: 100,
          animation: "slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards"
        }}>
          <strong style={{ color: "#ffffff", fontSize: "12px" }}>{toast.title}</strong>
          <span style={{ color: "#94a3b8", fontSize: "11px" }}>{toast.desc}</span>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
