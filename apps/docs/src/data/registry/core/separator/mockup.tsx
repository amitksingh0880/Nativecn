import React from "react";

export default function InteractiveSeparatorMockup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "0", padding: "8px" }}>
      {[
        { title: "Appearance", desc: "Customize theme and display settings" },
        { title: "Privacy", desc: "Manage data collection preferences" },
        { title: "Notifications", desc: "Configure alert delivery settings" },
      ].map((item, i) => (
        <React.Fragment key={i}>
          <div style={{ padding: "14px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#f1f5f9" }}>{item.title}</div>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <span style={{ color: "#475569", fontSize: "16px" }}>›</span>
          </div>
          {i < 2 && <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 4px" }} />}
        </React.Fragment>
      ))}
    </div>
  );
}
