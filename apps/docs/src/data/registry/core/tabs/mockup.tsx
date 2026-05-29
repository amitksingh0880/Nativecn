import React from "react";

export default function InteractiveTabsMockup() {
  const [active, setActive] = React.useState("inbox");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "16px", gap: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Segmented Tabs</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Responsive content swaps</p>
      </div>

      <div style={{
        display: "flex",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "8px",
        padding: "2px",
        width: "100%"
      }}>
        <button
          onClick={() => setActive("inbox")}
          style={{
            flex: 1,
            background: active === "inbox" ? "#a855f7" : "transparent",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "6px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }}
        >
          Inbox
        </button>
        <button
          onClick={() => setActive("archive")}
          style={{
            flex: 1,
            background: active === "archive" ? "#a855f7" : "transparent",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "6px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }}
        >
          Archive
        </button>
      </div>

      <div style={{
        background: "rgba(255,255,255,0.01)",
        border: "1px solid rgba(255,255,255,0.03)",
        borderRadius: "8px",
        padding: "16px",
        fontSize: "12px",
        color: "#94a3b8",
        lineHeight: "1.6",
        minHeight: "60px"
      }}>
        {active === "inbox" ? (
          <div>
            <strong style={{ color: "#ffffff", display: "block", marginBottom: "2px" }}>Developer Weekly</strong>
            Your monthly usage reports are compiled and ready inside your client portal.
          </div>
        ) : (
          <div>
            <strong style={{ color: "#ffffff", display: "block", marginBottom: "2px" }}>System Alerts (Archived)</strong>
            Welcome to Nativecn. Complete your initialization and deploy button templates.
          </div>
        )}
      </div>
    </div>
  );
}
