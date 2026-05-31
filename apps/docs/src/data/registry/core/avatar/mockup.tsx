import React from "react";

export default function InteractiveAvatarMockup() {
  const [loading, setLoading] = React.useState(false);

  const toggleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Avatar Profile</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Dynamic fallback states</p>
      </div>

      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          border: "2px solid rgba(168, 85, 247, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
          color: "#ffffff",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 20px rgba(168, 85, 247, 0.15)"
        }}
      >
        {loading ? (
          <div style={{ width: "100%", height: "100%", background: "#1e1b4b", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "18px", color: "#a855f7", animation: "pulse 1.2s infinite" }}>JD</span>
          </div>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="User avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      <button
        onClick={toggleLoad}
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "6px 14px",
          borderRadius: "6px",
          color: "#ffffff",
          fontSize: "12px",
          cursor: "pointer"
        }}
      >
        Simulate Fallback Initials
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
