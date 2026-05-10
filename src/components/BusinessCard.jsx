import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BusinessCard({ biz, setPage }) {
  const [hover, setHover] = useState(false);

  /* ── Coming Soon card ── */
  if (biz.coming) {
    return (
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "4/3",
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            position: "relative",
            overflow: "hidden",
            borderRadius: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.4em",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            COMING SOON
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
            fontSize: 13,
            color: "#aaa",
            marginBottom: 4,
          }}
        >
          NEW SPOT
        </p>

        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#000",
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          COMING SOON
        </h3>

        <button className="soon-btn">S O O N</button>
      </motion.article>
    );
  }

  /* ── Regular business card ── */
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        height: "100%",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* Image with zoom-on-hover */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          overflow: "hidden",
          marginBottom: 16,
          position: "relative",
          borderRadius: 16,
        }}
      >
        <img
          src={biz.img}
          alt={biz.name.replace("\n", " ")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = "#f0f0f0";
          }}
        />
      </div>

      {/* Category */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: "italic",
          fontSize: 13,
          color: "#aaa",
          marginBottom: 4,
          transition: "color 0.3s",
        }}
      >
        {biz.category}
      </p>

      {/* Name */}
      <h3
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          color: "#000",
          lineHeight: 1.4,
          marginBottom: 16,
          letterSpacing: "0.05em",
        }}
      >
        {biz.name.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </h3>

      {/* CTA */}
      <button 
        className="view-btn"
        onClick={() => {
          if (biz.id === "cafe" && setPage) {
            setPage("garage-detail");
          } else if (biz.id === "juice" && setPage) {
            setPage("juice-detail");
          } else if (biz.id === "bubble" && setPage) {
            setPage("bubble-detail");
          } else if (biz.id === "barista" && setPage) {
            setPage("barista-detail");
          }
        }}
      >
        View Details
      </button>
    </motion.article>
  );
}
