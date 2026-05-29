import React from "react";

export default function InteractiveRatingMockup() {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ fontSize: "14px", color: "#94a3b8", fontWeight: "500" }}>Rate your experience</div>
      <div style={{ display: "flex", gap: "8px" }}>
        {[1, 2, 3, 4, 5].map(star => {
          const active = star <= (hover || rating);
          return (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "34px", padding: "4px",
                filter: active ? "none" : "grayscale(100%) brightness(0.3)",
                transform: hover === star ? "scale(1.25)" : "scale(1)",
                transition: "all 0.15s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >⭐</button>
          );
        })}
      </div>
      <div style={{ fontSize: "13px", color: rating ? "#a855f7" : "#475569", fontWeight: "600", transition: "color 0.2s" }}>
        {rating === 0 ? "Tap a star" : ["", "Poor", "Fair", "Good", "Great", "Excellent!"][rating]}
      </div>
    </div>
  );
}
