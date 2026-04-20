import React from "react";
import Footer from "../components/Footer";
import { GOLD } from "../constants";

const CONTACT_PHOTO =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80";

export default function ContactPage() {
  return (
    <div style={{ background: "#f3f3f3", color: "#111", minHeight: "calc(100vh - 68px)" }}>
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "74px clamp(18px, 4vw, 40px) 72px",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.02fr 1fr",
            gap: 52,
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <img
              src={CONTACT_PHOTO}
              alt="Luka Rai portrait"
              style={{
                width: "100%",
                maxHeight: 520,
                objectFit: "cover",
                display: "block",
                borderRadius: 2,
                boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
              }}
            />
          </div>

          <div
            style={{
              textAlign: "left",
              padding: "6px 6px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(14px, 1.6vw, 16px)",
                letterSpacing: "0.16em",
                marginBottom: 16,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#444",
              }}
            >
              Get In Touch
            </p>

            <h2
              className="playfair"
              style={{
                color: GOLD,
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.14,
                fontWeight: 500,
                marginBottom: 24,
                maxWidth: 680,
              }}
            >
              Let&apos;s Build Something Together
            </h2>

            <p
              style={{
                fontSize: "clamp(20px, 2.5vw, 34px)",
                marginBottom: 14,
                color: "#1f1f1f",
                letterSpacing: "0.01em",
              }}
            >
              Email: hello@garagecafe.np
            </p>
            <p
              style={{
                fontSize: "clamp(20px, 2.5vw, 34px)",
                marginBottom: 14,
                color: "#1f1f1f",
                letterSpacing: "0.01em",
              }}
            >
              Location: Damak, Jhapa, Nepal
            </p>
            <p
              style={{
                fontSize: "clamp(20px, 2.5vw, 34px)",
                marginBottom: 28,
                color: "#1f1f1f",
                letterSpacing: "0.01em",
              }}
            >
              Social Network: @lukarai
            </p>

            <a
              href="mailto:hello@garagecafe.np"
              className="contact-email-btn"
              style={{
                display: "inline-block",
                minWidth: 240,
                background: "#020202",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 22px",
                fontSize: "clamp(28px, 3vw, 36px)",
                lineHeight: 1.06,
                letterSpacing: "0.01em",
                textAlign: "center",
              }}
            >
              Send
              <br />
              Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
