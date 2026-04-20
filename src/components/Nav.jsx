import React from "react";
import { NAV_LINKS } from "../constants";

export default function Nav({ page, setPage }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid #e8e8e8",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(18px, 4vw, 48px)",
      }}
    >
      {/* Logo */}
      <button
        type="button"
        onClick={() => setPage("home")}
        style={{
          background: "none",
          border: "none",
          fontWeight: 800,
          fontSize: 26,
          color: "#111",
          letterSpacing: "-0.02em",
          cursor: "pointer",
          userSelect: "none",
          padding: 0,
        }}
      >
        Luka Rai
      </button>

      {/* Links */}
      <div style={{ display: "flex", gap: "clamp(14px, 3vw, 36px)" }}>
        {NAV_LINKS.map(({ id, label }) => (
          <button
            type="button"
            key={id}
            className={`nav-link${page === id ? " active" : ""}`}
            onClick={() => setPage(id)}
            aria-current={page === id ? "page" : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
