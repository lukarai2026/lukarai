import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import { GOLD, STATS, SKILLS } from "../constants";

const BRANDS = [
  "Garage Cafe Lounge Bar",
  "Garage Juice Box & Bakery",
  "Garage Barista School",
  "Luka's Bubble Tea",
];

const HERO_MAIN_IMAGE = "/media/Images/luka%20rai1.jpeg";
const LUKA_TWO_IMAGE = "/media/Images/luka%20rai%202.jpeg";
const LUKA_THREE_IMAGE = "/media/Images/luka%20rai%203.jpeg";
const LUKA_FOUR_IMAGE = "/media/Images/luka%20rai%204.jpeg";

/* ── Reusable scroll-triggered wrapper ── */
function Reveal({ children, delay = 0, direction = "up", style, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Floating particles background ── */
function ParticleField() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(200, 134, 42, ${p.opacity})`,
            animation: `particle-float ${p.duration}s ${p.delay}s infinite linear`,
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage({ setPage }) {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff" }}>

      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="hero-grid"
        style={{
          minHeight: "calc(100vh - 100px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "60px clamp(18px, 4vw, 48px)",
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          background: "#000",
        }}
      >
        <ParticleField />

        {/* Portrait */}
        <Reveal direction="left" delay={0.2} className="hero-portrait-container">
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <motion.div
              className="image-frame"
              style={{
                width: "100%",
                maxWidth: 320,
                aspectRatio: "320 / 520",
                position: "relative",
                background: "#030712",
                overflow: "hidden",
              }}
            >
              <img
                src={HERO_MAIN_IMAGE}
                alt="Luka Rai"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  bottom: 40,
                  left: 20,
                  right: 20,
                  border: "1px solid #CD803F",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="hero-text-container" style={{ paddingLeft: "4vw", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <Reveal delay={0.3}>
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "0.15em",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Luka Rai
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 300,
                color: "#CD803F",
                letterSpacing: "0.12em",
                marginBottom: 48,
              }}
            >
              Entrepreneurial Spirit
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="tag-container" style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 64 }}>
              {["BUSINESS OWNER", "LEADERSHIP", "STRATEGY"].map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <div>
              <motion.button
                onClick={() => setPage("about")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#CD803F",
                  color: "#000",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "16px 32px",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 24,
                  letterSpacing: "0.02em",
                }}
              >
                <span>About me</span> <span style={{ fontSize: 20, fontWeight: 300 }}>→</span>
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SHARED BACKGROUND WRAPPER ───────────── */}
      <div
        style={{
          backgroundColor: "#050505",
          backgroundImage: `linear-gradient(rgba(5,5,5,0.85), rgba(5,5,5,0.85)), url("${LUKA_FOUR_IMAGE}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        {/* ── VISION & PURPOSE ────────────────────── */}
        <section
          style={{
            padding: "120px clamp(18px, 4vw, 48px)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 120 }}>
          {/* Row 1 */}
          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(32px, 4vw, 40px)",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 32,
                    letterSpacing: "0.02em"
                  }}
                >
                  A leader driven by
                  <br />
                  <span style={{ color: "#CD803F", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Vision</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}> and </span>
                  <span style={{ color: "#CD803F", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Purpose</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.9,
                    color: "#fff",
                    letterSpacing: "0.02em"
                  }}
                >
                  I am <span style={{ color: "#CD803F" }}>Luka Rai</span>, a
                  Resilient Entrepreneur and Business owner dedicated to building
                  impactful ventures from the ground up. Rooted in the hospitality
                  of my Nepalese heritage, I lead with a focus on empathy,
                  creativity, and the belief that growth comes through overcoming
                  challenges. By combining strategic thinking with a commitment to empowering my
                  team, I strive to turn big dreams into reality—one steady
                  step at a time—bringing clarity, heart, and dedication to
                  every project I touch.
                </p>
              </Reveal>
            </div>

            {/* Photo frame - Luka Rai 2 */}
            <Reveal direction="right" delay={0.3}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <motion.div
                  className="image-frame"
                  style={{
                    width: "100%",
                    maxWidth: 380,
                    aspectRatio: "3/4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                >
                  <img
                    src={LUKA_TWO_IMAGE}
                    alt="Luka Rai portrait 2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      filter: "grayscale(100%)",
                    }}
                  />
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* Row 2 */}
          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <Reveal direction="left">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <motion.div
                  className="image-frame"
                  style={{
                    width: "100%",
                    maxWidth: 380,
                    aspectRatio: "3/4",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                >
                  <img
                    src={LUKA_THREE_IMAGE}
                    alt="Luka Rai portrait 3"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      filter: "grayscale(100%)",
                    }}
                  />
                </motion.div>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.1}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.9,
                    color: "#fff",
                    letterSpacing: "0.08em",
                    marginBottom: 32,
                  }}
                >
                  I worked in the hospitality business for 14 years on UAE .
                  During this time, I managed many different projects and
                  learned a lot about how to run successful businesses. I
                  decided to bring all of my great ideas back home to
                  Nepal. Now, i started a new Business of Cafe that uses a
                  "garage" style for its interior design. This unique look
                  combines my  professional experience with a cool,
                  creative design to offer something new and exciting to
                  my customers.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ color: "#fff", fontSize: 15, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>14+</div>
                  <div style={{ color: "#fff", fontSize: 15, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", marginBottom: 8 }}>YEARS EXPERIENCE</div>
                  
                  <div style={{ color: "#fff", fontSize: 15, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>∞</div>
                  <div style={{ color: "#fff", fontSize: 15, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", marginBottom: 8 }}>FAST FOOD LEGACY</div>
                  
                  <div style={{ color: "#fff", fontSize: 15, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>JHP</div>
                  <div style={{ color: "#fff", fontSize: 15, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>BASED IN JHAPA</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SKILLS ─────────────────────────── */}
      <section
        style={{
          backgroundColor: "transparent",
          padding: "60px clamp(18px, 4vw, 48px) 120px",
          position: "relative",
          marginTop: -40,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 4vw, 48px)",
                color: "#fff",
                marginBottom: 48,
                letterSpacing: "0.02em",
              }}
            >
              Core Skills
            </h2>
          </Reveal>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            {SKILLS.slice(0, 3).map((s, i) => (
              <Reveal key={s} delay={0.2 + i * 0.08}>
                <div className="skill-box">{s}</div>
              </Reveal>
            ))}
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {SKILLS.slice(3).map((s, i) => (
              <Reveal key={s} delay={0.4 + i * 0.08}>
                <div className="skill-box">{s}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS LIST ───────────────────────── */}
      {/* ── BUSINESS LIST ───────────────────────── */}
      <section
        style={{
          background: "transparent",
          padding: "60px clamp(18px, 4vw, 48px) 60px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Decorated heading */}
          <Reveal delay={0.1}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                justifyContent: "center",
                marginBottom: 64,
              }}
            >
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.3)" }} />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 600,
                  color: "#CD803F",
                  letterSpacing: "0.05em",
                }}
              >
                Business
              </h2>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.3)" }} />
            </div>
          </Reveal>

          {/* Brand list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingLeft: "4vw" }}>
            {BRANDS.map((brand, i) => (
              <Reveal key={brand} delay={0.2 + i * 0.1}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 400,
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  {brand}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="copyright-row"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            marginTop: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
            Luka Rai© 2025 —
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
            All rights reserved
          </span>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}
