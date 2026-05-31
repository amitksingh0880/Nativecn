import React from "react";

export default function InteractivePullToRefreshMockup() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [items, setItems] = React.useState(["Loading…", "Market +2.4%", "BTC $67,240"]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setItems([`Updated ${new Date().toLocaleTimeString()}`, "ETH $3,890", "SOL $182"]);
    }, 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "0" }}>
      <button
        onClick={handleRefresh}
        style={{
          background: "none", border: "none", padding: "12px", cursor: "pointer",
          display: "flex", justifyContent: "center", alignItems: "center", gap: "8px",
          color: "#64748b", fontSize: "12px",
        }}
      >
        <span style={{
          display: "inline-block",
          animation: refreshing ? "spin 0.8s linear infinite" : "none",
          fontSize: "16px",
        }}>↻</span>
        {refreshing ? "Refreshing..." : "Pull to refresh"}
      </button>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
        {items.map((item, i) => (
          <div key={i} style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            fontSize: "13px", color: "#cbd5e1",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: i === 0 ? "#f59e0b" : "#10b981", flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
