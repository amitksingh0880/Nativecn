import React from "react";

export default function InteractiveBottomTabBarMockup() {
  const [active, setActive] = React.useState("home");
  const tabs = [
    { key: "home", label: "Home", icon: "🏠" },
    { key: "search", label: "Search", icon: "🔍" },
    { key: "alerts", label: "Alerts", icon: "🔔" },
    { key: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>{tabs.find(t => t.key === active)?.icon}</div>
          <div style={{ fontSize: "16px", fontWeight: "600", color: "#f1f5f9" }}>{tabs.find(t => t.key === active)?.label}</div>
          <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>Tab content area</div>
        </div>
      </div>

      <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "8px 0 4px", position: "relative" }}>
        {/* Active indicator */}
        <div style={{
          position: "absolute", top: "8px", height: "36px",
          width: `calc(${100 / tabs.length}% - 20px)`,
          left: `calc(${tabs.findIndex(t => t.key === active) * (100 / tabs.length)}% + 10px)`,
          background: "rgba(168,85,247,0.15)", borderRadius: "10px",
          transition: "left 0.3s cubic-bezier(0.16,1,0.3,1)",
        }} />
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              background: "none", border: "none", cursor: "pointer", padding: "4px 0",
              gap: "2px", transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: "18px" }}>{tab.icon}</span>
            <span style={{ fontSize: "10px", fontWeight: "600", color: active === tab.key ? "#a855f7" : "#475569" }}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
