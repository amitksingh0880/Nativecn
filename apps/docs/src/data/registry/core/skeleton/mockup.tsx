import React from "react";

export default function InteractiveSkeletonMockup() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "8px", height: "100%" }}>
      <button
        onClick={() => setLoaded(l => !l)}
        style={{
          alignSelf: "center", padding: "6px 18px", borderRadius: "8px",
          background: loaded ? "rgba(168,85,247,0.15)" : "#a855f7",
          border: "1px solid rgba(168,85,247,0.4)",
          color: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: "600",
          transition: "all 0.2s",
        }}
      >{loaded ? "Reset" : "Load Content"}</button>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {loaded
          ? <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#a855f7", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "700", fontSize: "18px" }}>A</div>
          : <SkeletonBox width="48px" height="48px" radius="50%" />
        }
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          {loaded
            ? <><div style={{ color: "#f1f5f9", fontWeight: "600", fontSize: "14px" }}>Amit Singh</div><div style={{ color: "#94a3b8", fontSize: "12px" }}>@amitksingh</div></>
            : <><SkeletonBox width="60%" height="14px" /><SkeletonBox width="40%" height="12px" /></>
          }
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {loaded
          ? <div style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6" }}>Building the next generation of React Native components with beautiful animations and premium design.</div>
          : <><SkeletonBox width="100%" height="13px" /><SkeletonBox width="88%" height="13px" /><SkeletonBox width="72%" height="13px" /></>
        }
      </div>
    </div>
  );
}

function SkeletonBox({ width, height, radius = "6px" }: { width: string; height: string; radius?: string }) {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % 100), 20);
    return () => clearInterval(id);
  }, []);
  const shimmerPos = `${phase}%`;
  return (
    <div style={{ width, height, borderRadius: radius, background: "#1e293b", overflow: "hidden", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: shimmerPos, width: "60px", height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
        transition: "left 0.02s linear",
      }} />
    </div>
  );
}
