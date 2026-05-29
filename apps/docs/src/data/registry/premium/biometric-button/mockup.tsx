import React from "react";

export default function InteractiveBiometricMockup() {
  const [authState, setAuthState] = React.useState<"idle" | "scanning" | "success" | "failure">("idle");

  const startAuth = () => {
    setAuthState("scanning");
    setTimeout(() => {
      // Simulate random outcomes for showcase diversity
      setAuthState("success");
    }, 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "32px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Biometric Vault</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Expo Local Auth API</p>
      </div>

      <div style={{ position: "relative", width: "100px", height: "100px", display: "flex", alignItems: "center", justifyItems: "center" }}>
        {authState === "scanning" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "3px solid transparent",
              borderTopColor: "#a855f7",
              borderBottomColor: "#0ea5e9",
              borderRadius: "50%",
              animation: "spin 1.2s linear infinite"
            }}
          />
        )}
        <button
          onClick={startAuth}
          disabled={authState === "scanning"}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: 
              authState === "success" ? "rgba(34, 197, 94, 0.15)" :
              authState === "scanning" ? "rgba(168, 85, 247, 0.05)" : 
              "rgba(255,255,255,0.02)",
            border: `2px solid ${
              authState === "success" ? "#22c55e" :
              authState === "scanning" ? "#a855f7" :
              "rgba(255,255,255,0.08)"
            }`,
            color: authState === "success" ? "#22c55e" : "#a855f7",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: authState === "success" ? "0 0 20px rgba(34, 197, 94, 0.2)" : "none"
          }}
        >
          {/* Custom SVG Fingerprint */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {authState === "success" ? (
              <polyline points="20 6 9 17 4 12" />
            ) : (
              <>
                <path d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10" />
                <path d="M5 12c0-3.9 3.1-7 7-7s7 3.1 7 7" />
                <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
                <path d="M12 12h.01" />
                <path d="M12 16v2" />
                <path d="M12 20v2" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div style={{ textAlign: "center", minHeight: "24px" }}>
        {authState === "idle" && (
          <button 
            onClick={startAuth} 
            style={{ background: "transparent", border: "none", color: "#a855f7", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
          >
            Authenticate
          </button>
        )}
        {authState === "scanning" && <span style={{ color: "#94a3b8", fontSize: "13px" }}>Scanning Fingerprint...</span>}
        {authState === "success" && (
          <div>
            <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: "600", display: "block" }}>Access Granted</span>
            <button 
              onClick={() => setAuthState("idle")} 
              style={{ background: "transparent", border: "none", color: "#64748b", fontSize: "11px", textDecoration: "underline", marginTop: "4px", cursor: "pointer" }}
            >
              Reset Lock
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
