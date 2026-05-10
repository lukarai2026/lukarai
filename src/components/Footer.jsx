import React from "react";
import { FOOTER_COLS } from "../constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        padding: "60px clamp(18px, 4vw, 48px) 80px",
        borderTop: "1px solid #eaeaea",
      }}
    >
      <div
        className="footer-cols"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Brand column */}
        <div style={{ maxWidth: 420 }}>
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#000",
              marginBottom: 16,
            }}
          >
            Garage Industry
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              lineHeight: 1.6,
              color: "#666",
              marginBottom: 32,
            }}
          >
            **Garage: A high-performance ecosystem integrating professional
            education with artisanal retail to redefine the standards of the
            modern beverage and bakery industry.**
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {/* Instagram */}
            <a
              href="#"
              style={{ color: "#888", display: "flex" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              style={{ color: "#888", display: "flex" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A5 5 0 0 1 16 8z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              style={{ color: "#888", display: "flex" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div
          className="footer-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 40,
            paddingTop: 4,
          }}
        >
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#000",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#666",
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
