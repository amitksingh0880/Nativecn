import React from "react";

export default function InteractiveTypographyMockup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "16px", gap: "12px" }}>
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Typography Structure</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Clean hierarchy scales</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "12px" }}>
        <div>
          <span style={{ fontSize: "9px", color: "#a855f7", textTransform: "uppercase", display: "block" }}>H1 Heading</span>
          <h1 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "800", margin: 0 }}>Sleek Dark Mode</h1>
        </div>
        <div>
          <span style={{ fontSize: "9px", color: "#a855f7", textTransform: "uppercase", display: "block" }}>H3 Sub-headline</span>
          <h3 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: 0 }}>Tailwind responsive system</h3>
        </div>
        <div>
          <span style={{ fontSize: "9px", color: "#a855f7", textTransform: "uppercase", display: "block" }}>Paragraph</span>
          <p style={{ color: "#94a3b8", fontSize: "11px", margin: 0, lineHeight: "1.5" }}>Beautiful body text crafted to fit mobile interfaces perfectly.</p>
        </div>
      </div>
    </div>
  );
}
