import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      fontFamily: "Inter, system-ui, sans-serif",
      color: "#fafafa",
      gap: "16px",
      textAlign: "center",
      padding: "24px"
    }}>
      <span style={{ fontSize: "48px", fontWeight: "800", color: "#a855f7" }}>404</span>
      <h1 style={{ fontSize: "20px", fontWeight: "700", margin: 0 }}>Page Not Found</h1>
      <p style={{ fontSize: "14px", color: "#a1a1aa", maxWidth: "400px", lineHeight: "1.6" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          background: "#a855f7",
          color: "#ffffff",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "13px",
          fontWeight: "600",
          marginTop: "8px"
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
