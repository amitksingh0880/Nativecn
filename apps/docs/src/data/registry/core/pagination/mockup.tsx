import React from "react";

export default function InteractivePaginationMockup() {
  const [page, setPage] = React.useState(3);
  const total = 8;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "20px" }}>
      <div style={{ fontSize: "13px", color: "#94a3b8" }}>
        Page <strong style={{ color: "#a855f7" }}>{page}</strong> of {total}
      </div>
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <PageBtn label="←" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} />
        {Array.from({ length: total }, (_, i) => i + 1).map(p => (
          p === 3 && page > 4 ? null :
          p === total - 2 && page < total - 3 ? null :
          Math.abs(p - page) > 2 && p !== 1 && p !== total ? null :
          <PageBtn key={p} label={String(p)} active={p === page} onClick={() => setPage(p)} />
        ))}
        <PageBtn label="→" onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total} />
      </div>
    </div>
  );
}

function PageBtn({ label, active, onClick, disabled }: { label: string; active?: boolean; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "34px", height: "34px", borderRadius: "8px",
        background: active ? "#a855f7" : "rgba(255,255,255,0.05)",
        border: `1px solid ${active ? "#a855f7" : "rgba(255,255,255,0.1)"}`,
        color: active ? "#fff" : disabled ? "#374151" : "#94a3b8",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "13px", fontWeight: active ? "700" : "500",
        transition: "all 0.15s",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >{label}</button>
  );
}
