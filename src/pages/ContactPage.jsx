import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import { GOLD } from "../constants";

const CONTACT_PHOTO = "/media/Images/luka%20rai%206.jpeg";

function Reveal({ children, delay = 0, direction = "up", style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
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

export default function ContactPage() {
  return (
    <div style={{ background: "#ffffff", color: "#000000", minHeight: "calc(100vh - 72px)" }}>
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px clamp(18px, 4vw, 40px) 80px",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Image */}
          <Reveal direction="left">
            <div style={{ width: "100%" }}>
              <img
                src={CONTACT_PHOTO}
                alt="Luka Rai portrait"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </Reveal>

          {/* Text */}
          <div style={{ textAlign: "center", padding: "20px" }}>
            <Reveal delay={0.1}>
              <p
                style={{
                  fontSize: "1.2rem",
                  letterSpacing: "0.2em",
                  marginBottom: 24,
                  fontWeight: 500,
                  color: "#000",
                  fontFamily: "monospace",
                }}
              >
                Get in Touch
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <h2
                style={{
                  color: GOLD,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  lineHeight: 1.4,
                  fontWeight: 700,
                  marginBottom: 40,
                  fontFamily: "monospace",
                }}
              >
                Let's Build Something Together
              </h2>
            </Reveal>

            {/* Contact items */}
            <Reveal delay={0.4}>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: "1.2rem", color: "#000", fontWeight: 500, fontFamily: "monospace", letterSpacing: "0.05em" }}>
                  Email:- helloluka@gmail.com
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: "1.2rem", color: "#000", fontWeight: 500, fontFamily: "monospace", letterSpacing: "0.05em" }}>
                  location:- Kathmandu, Nepal
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div style={{ marginBottom: 48 }}>
                <span style={{ fontSize: "1.2rem", color: "#000", fontWeight: 500, fontFamily: "monospace", letterSpacing: "0.05em" }}>
                  Social Network:- @lukarai
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=helloluka@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#111111",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "16px 48px",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ borderBottom: "1px solid #fff", paddingBottom: "2px" }}>
                  Send Email
                </span>
              </motion.a>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
