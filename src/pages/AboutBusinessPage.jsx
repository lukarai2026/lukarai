import React from "react";
import BusinessCard from "../components/BusinessCard";
import Footer from "../components/Footer";
import { BUSINESSES } from "../constants";

export default function AboutBusinessPage() {
  return (
    <div
      style={{
        background: "#fff",
        color: "#111",
        minHeight: "100vh",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* ── Page heading ── */}
      <div
        style={{
          padding: "62px clamp(18px, 4vw, 48px) 44px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b07d31",
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(26px, 4vw, 42px)",
            color: "#111",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Discover the
          <br />
          best local businesses.
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#707070",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Curated cafes, beverage brands, and educational ventures designed to
          create community and elevate everyday experiences.
        </p>
      </div>

      {/* ── Business cards grid ── */}
      <div
        className="business-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 48px) 100px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 36,
          rowGap: 64,
        }}
      >
        {BUSINESSES.map((biz) => (
          <BusinessCard key={biz.id} biz={biz} />
        ))}
      </div>

      {/* Footer sits on dark background to match design */}
      <div style={{ background: "#0a0a0a" }}>
        <Footer />
      </div>
    </div>
  );
}
