import React from "react";
import Footer from "../components/Footer";
import PortraitPlaceholder from "../components/PortraitPlaceholder";
import { GOLD, STATS, SKILLS } from "../constants";

const BRANDS = [
  "Garage Cafe Lounge Bar",
  "Garage Juice Box & Bakery",
  "Garage Barista School",
  "Luka's Bubble Tea",
];

export default function HomePage({ setPage }) {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff" }}>

      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="hero-grid"
        style={{
          minHeight: "calc(100vh - 68px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "60px clamp(18px, 4vw, 48px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
      >
        {/* Portrait */}
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PortraitPlaceholder />
        </div>

        {/* Text */}
        <div style={{ paddingLeft: "clamp(0px, 3vw, 48px)" }}>
          <h1
            className="playfair"
            style={{
              fontSize: "clamp(48px, 6vw, 76px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              marginBottom: 14,
            }}
          >
            Luka Rai
          </h1>

          <p
            className="playfair"
            style={{
              fontSize: "clamp(18px, 2.2vw, 26px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: GOLD,
              letterSpacing: "0.06em",
              marginBottom: 44,
            }}
          >
            Entrepreneurial Spirit
          </p>

          {["BUSINESS OWNER", "LEADERSHIP", "STRATEGY"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "inline-block",
                marginRight: 12,
                marginBottom: 12,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "8px 12px",
              }}
            >
              {tag}
            </div>
          ))}

          <div style={{ marginTop: 44 }}>
            <button
              className="about-btn"
              onClick={() => setPage("about")}
            >
              About me <span style={{ fontSize: 22 }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── VISION & PURPOSE ────────────────────── */}
      <section style={{ background: "#111", padding: "100px clamp(18px, 4vw, 48px)" }}>
        {/* Row 1 */}
        <div
          className="about-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            marginBottom: 80,
          }}
        >
          <div>
            <h2
              className="playfair"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.3,
                marginBottom: 32,
              }}
            >
              A leader driven by
              <br />
              <span style={{ color: GOLD }}>Vision</span> and{" "}
              <span style={{ color: GOLD }}>Purpose</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              I am{" "}
              <span style={{ color: GOLD, fontWeight: 600 }}>Luka Rai</span>, a
              Resilient Entrepreneur and Business owner dedicated to building
              impactful ventures from the ground up. Rooted in the hospitality
              of my Nepalese heritage, I lead with a focus on empathy,
              creativity, and the belief that growth comes through overcoming
              challenges.
            </p>
          </div>

          {/* Photo placeholder */}
          <div
            style={{
              background: "#222",
              aspectRatio: "4/5",
              maxHeight: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg width="60%" viewBox="0 0 160 240" fill="none">
              <ellipse
                cx="80"
                cy="56"
                rx="40"
                ry="44"
                fill="rgba(255,255,255,0.08)"
              />
              <path
                d="M8 240 C8 152 34 128 80 128 C126 128 152 152 152 240Z"
                fill="rgba(255,255,255,0.06)"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                right: 12,
                bottom: 12,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="about-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#1a1a1a",
              aspectRatio: "3/4",
              maxHeight: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="55%" viewBox="0 0 140 200" fill="none">
              <ellipse
                cx="70"
                cy="48"
                rx="36"
                ry="38"
                fill="rgba(255,255,255,0.12)"
              />
              <path
                d="M6 200 C6 130 28 108 70 108 C112 108 134 130 134 200Z"
                fill="rgba(255,255,255,0.09)"
              />
            </svg>
          </div>

          <div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.75)",
                fontWeight: 600,
                marginBottom: 48,
              }}
            >
              I worked in the hospitality business for 14 years in UAE. During
              this time, I managed many different projects and learned a lot
              about how to run successful businesses. I decided to bring all of
              my great ideas back home to Nepal.
            </p>

            {STATS.map(({ value, label }) => (
              <div
                key={value}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 20,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#fff",
                    minWidth: 52,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SKILLS ─────────────────────────── */}
      <section style={{ background: "#0a0805", padding: "80px clamp(18px, 4vw, 48px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 38px)",
              color: "#fff",
              marginBottom: 40,
            }}
          >
            Core Skills
          </h2>

          {/* Row 1 — first 3 skills */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 16,
              flexWrap: "wrap",
            }}
          >
            {SKILLS.slice(0, 3).map((s) => (
              <div key={s} className="skill-box">{s}</div>
            ))}
          </div>

          {/* Row 2 — remaining skills */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {SKILLS.slice(3).map((s) => (
              <div key={s} className="skill-box">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS LIST ───────────────────────── */}
      <section
        style={{
          background: "#080604",
          padding: "80px clamp(18px, 4vw, 48px)",
          backgroundImage:
            "radial-gradient(ellipse at 50% 60%, rgba(50,32,8,0.5) 0%, transparent 65%)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Decorated heading */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              justifyContent: "center",
              marginBottom: 60,
            }}
          >
            <div
              style={{
                height: 1,
                flex: 1,
                maxWidth: 120,
                background: "rgba(255,255,255,0.25)",
              }}
            />
            <h2
              className="playfair"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: GOLD,
              }}
            >
              Business
            </h2>
            <div
              style={{
                height: 1,
                flex: 1,
                maxWidth: 120,
                background: "rgba(255,255,255,0.25)",
              }}
            />
          </div>

          {/* Brand list */}
          <div style={{ maxWidth: 680 }}>
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="brand-item"
                onClick={() => setPage("about")}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
