import React from "react";

const countries = [
  { code: "US", flag: "🇺🇸", dial: "+1" },
  { code: "IN", flag: "🇮🇳", dial: "+91" },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "DE", flag: "🇩🇪", dial: "+49" },
];

export default function InteractivePhoneInputMockup() {
  const [country, setCountry] = React.useState(countries[0]);
  const [phone, setPhone] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", padding: "16px", position: "relative" }}>
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px", fontWeight: "500" }}>Phone Number</div>
        <div style={{ display: "flex", gap: "0", border: "1px solid rgba(168,85,247,0.4)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 0 3px rgba(168,85,247,0.08)" }}>
          <button onClick={() => setOpen(o => !o)} style={{
            display: "flex", alignItems: "center", gap: "6px", padding: "10px 12px",
            background: "rgba(168,85,247,0.08)", border: "none", borderRight: "1px solid rgba(255,255,255,0.08)",
            cursor: "pointer", color: "#f1f5f9", fontSize: "14px", fontWeight: "600",
          }}>
            {country.flag} {country.dial} <span style={{ fontSize: "10px", color: "#64748b" }}>▼</span>
          </button>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(555) 000-0000"
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", padding: "10px 12px", color: "#f1f5f9", fontSize: "14px", fontFamily: "inherit" }}
          />
        </div>
        {open && (
          <div style={{ position: "absolute", top: "calc(50% - 10px)", left: "16px", background: "#1a1730", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.4)", zIndex: 10 }}>
            {countries.map(c => (
              <button key={c.code} onClick={() => { setCountry(c); setOpen(false); }} style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", width: "100%",
                background: "transparent", border: "none", cursor: "pointer", color: "#f1f5f9", fontSize: "13px",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span>{c.flag}</span> <span style={{ color: "#64748b" }}>{c.dial}</span> <span>{c.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
