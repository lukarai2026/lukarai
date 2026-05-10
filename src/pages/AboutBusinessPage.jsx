import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BusinessCard from "../components/BusinessCard";
import Footer from "../components/Footer";
import { BUSINESSES } from "../constants";

function Reveal({ children, delay = 0, direction = "up", style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function AboutBusinessPage({ setPage }) {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#111",
        minHeight: "100vh",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* ── Page heading ── */}
      <div
        style={{
          padding: "80px clamp(18px, 4vw, 48px) 56px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Background subtle accent */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 36px)",
              color: "#000",
              lineHeight: 1.4,
              marginBottom: 16,
              letterSpacing: "0.05em",
            }}
          >
            Discover the
            <br />
            best local businesses.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "#333",
              letterSpacing: "0.1em",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Curated cafes, juice bars & more — all in one place.
          </p>
        </Reveal>
      </div>

      {/* ── Business cards grid ── */}
      <div
        className="business-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 48px) 120px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          columnGap: 24,
          rowGap: 56,
        }}
      >
        {BUSINESSES.map((biz, i) => (
          <Reveal key={biz.id} delay={i * 0.1} direction="scale">
            <BusinessCard biz={biz} setPage={setPage} />
          </Reveal>
        ))}
      </div>

      <Footer />
    </div>
  );
}
