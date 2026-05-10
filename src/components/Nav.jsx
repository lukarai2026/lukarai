import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../constants";

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "#ffffff",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(24px, 5vw, 64px)",
        transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
      }}
    >
      {/* Logo */}
      <motion.button
        type="button"
        onClick={() => setPage("home")}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          background: "none",
          border: "none",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(32px, 4vw, 44px)",
          color: "#000",
          letterSpacing: "-0.04em",
          cursor: "pointer",
          userSelect: "none",
          padding: 0,
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        Luka Rai
      </motion.button>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          gap: "clamp(24px, 3vw, 48px)",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {NAV_LINKS.map(({ id, label }, i) => (
          <motion.button
            type="button"
            key={id}
            className={`nav-link${page === id ? " active" : ""}`}
            onClick={() => setPage(id)}
            aria-current={page === id ? "page" : undefined}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 6,
          flexDirection: "column",
          gap: 5,
        }}
      >
        <span
          style={{
            display: "block",
            width: 24,
            height: 2,
            background: "#111",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: 24,
            height: 2,
            background: "#111",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: 24,
            height: 2,
            background: "#111",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            background: "#ffffff",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          }}
        >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              className={`nav-link${page === id ? " active" : ""}`}
              onClick={() => {
                setPage(id);
                setMenuOpen(false);
              }}
              style={{ textAlign: "left", fontSize: 16, padding: "8px 0" }}
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
