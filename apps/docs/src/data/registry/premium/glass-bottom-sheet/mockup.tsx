import React from "react";

export default function InteractiveGlassBottomSheetMockup() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Glass Drawer</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Blur overlays & grab lines</p>
      </div>

      <button
        onClick={() => setOpen(true)}
        style={{
          background: "linear-gradient(135deg, #a855f7, #0ea5e9)",
          border: "none",
          color: "#ffffff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(168, 85, 247, 0.2)"
        }}
      >
        Trigger Bottom Sheet
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0, 0, 0, 0.45)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          borderRadius: "20px",
          zIndex: 100
        }}>
          {/* Backdrop Click Dismiss */}
          <div onClick={() => setOpen(false)} style={{ flex: 1 }} />
          {/* Glass Drawer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px) saturate(140%)",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "16px 16px 0 0",
            padding: "16px 20px 24px 20px",
            animation: "slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }}>
            {/* Grab Bar */}
            <div style={{ width: "36px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "2px", margin: "0 auto 16px auto" }} />
            <h5 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>Vault Options</h5>
            <p style={{ color: "#94a3b8", fontSize: "11px", lineHeight: "1.5", marginBottom: "16px" }}>Frosted bottom drawer designed for detailed statistics configuration.</p>
            <button
              onClick={() => setOpen(false)}
              style={{
                width: "100%",
                background: "#a855f7",
                border: "none",
                color: "#ffffff",
                padding: "8px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Close Options
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(100px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
