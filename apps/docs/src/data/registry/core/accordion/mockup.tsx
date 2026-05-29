import React from "react";

export default function InteractiveAccordionMockup() {
  const [active, setActive] = React.useState<number | null>(null);

  const items = [
    { title: "Is it highly customizable?", content: "Yes! You own the component code. Modify files directly inside your project structure." },
    { title: "Are micro-animations supported?", content: "Fully integrated with spring physics via React Native Reanimated and Moti." }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "12px", gap: "12px" }}>
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <h4 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "4px" }}>Accordion Slide</h4>
        <p style={{ color: "#64748b", fontSize: "12px" }}>Collapsible disclosures</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, idx) => {
          const isOpen = active === idx;
          return (
            <div key={idx} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <button
                onClick={() => setActive(isOpen ? null : idx)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 4px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <span>{item.title}</span>
                <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "#a855f7" }}>▼</span>
              </button>
              <div
                style={{
                  maxHeight: isOpen ? "100px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  color: "#94a3b8",
                  fontSize: "12px",
                  lineHeight: "1.6",
                  paddingBottom: isOpen ? "12px" : "0px"
                }}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
