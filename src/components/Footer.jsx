import React from "react";
import { FOOTER_COLS } from "../constants";

function SocialIcon({ children }) {
  return (
    <a href="#" className="social-icon" aria-label="Social link">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <>
      {/* Copyright strip */}
      <div
        style={{
          background: "#050403",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "18px clamp(18px, 4vw, 48px)",
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
          Luka Rai © {new Date().getFullYear()} —
        </span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
          All rights reserved
        </span>
      </div>

      {/* Main footer */}
      <footer style={{ background: "#f5f4f0", padding: "56px clamp(18px, 4vw, 48px)" }}>
        <div
          className="footer-cols"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: 360 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#111",
                marginBottom: 12,
              }}
            >
              Garage Industry
            </h3>
            <div
              style={{ height: 1, background: "#d8d8d8", marginBottom: 20 }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#666",
                marginBottom: 32,
              }}
            >
              <strong style={{ color: "#333" }}>Garage:</strong> A portfolio of
              hospitality ventures built around quality service, local
              community, and modern beverage culture in Nepal.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 14 }}>
              {/* Instagram */}
              <SocialIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>

              {/* LinkedIn */}
              <SocialIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A5 5 0 0 1 16 8z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>

              {/* X / Twitter */}
              <SocialIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 40,
            }}
          >
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#111",
                    marginBottom: 20,
                  }}
                >
                  {col.title}
                </div>
                {col.links.map((link) => (
                  <a key={link} href="#" className="footer-link">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
