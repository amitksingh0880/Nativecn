import React from "react";

const FULL_TEXT = "Building the future of mobile UI...";

export default function InteractiveTypingTextMockup() {
  const [displayed, setDisplayed] = React.useState("");
  const [phase, setPhase] = React.useState<"typing" | "deleting" | "pause">("typing");
  const [cursor, setCursor] = React.useState(true);

  React.useEffect(() => {
    const cursorId = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(cursorId);
  }, []);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayed.length < FULL_TEXT.length) {
        timeout = setTimeout(() => setDisplayed(FULL_TEXT.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1500);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 30);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "15px", fontWeight: "600", color: "#a855f7", lineHeight: "1.5", minHeight: "48px" }}>
          {displayed}<span style={{ opacity: cursor ? 1 : 0, color: "#a855f7", transition: "opacity 0.1s" }}>|</span>
        </div>
        <div style={{ marginTop: "12px", fontSize: "11px", color: "#475569" }}>Typewriter animation</div>
      </div>
    </div>
  );
}
