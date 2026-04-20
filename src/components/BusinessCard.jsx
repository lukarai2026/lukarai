import React, { useState } from "react";

export default function BusinessCard({ biz }) {
  const [hover, setHover] = useState(false);

  /* ── Coming Soon card ── */
  if (biz.coming) {
    return (
      <article
        style={{
          border: "1px solid #ececec",
          padding: 14,
          background: "#fff",
          height: "100%",
        }}
      >
        {/* Dark placeholder image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4/3",
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              letterSpacing: "0.32em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
            }}
          >
            COMING SOON
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 14,
            color: "#888",
            marginBottom: 12,
          }}
        >
          {biz.category}
        </p>

        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(18px, 2vw, 22px)",
            color: "#111",
            letterSpacing: "0.08em",
            marginBottom: 20,
          }}
        >
          COMING SOON
        </h3>

        <button className="soon-btn">SOON</button>
      </article>
    );
  }

  /* ── Regular business card ── */
  return (
    <article
      style={{
        border: "1px solid #ececec",
        padding: 14,
        background: "#fff",
        height: "100%",
      }}
    >
      {/* Image with zoom-on-hover */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          overflow: "hidden",
          marginBottom: 16,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={biz.img}
          alt={biz.name.replace("\n", " ")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = "#ddd";
          }}
        />
      </div>

      {/* Category */}
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: 14,
          color: "#888",
          marginBottom: 10,
        }}
      >
        {biz.category}
      </p>

      {/* Name */}
      <h3
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(20px, 2vw, 24px)",
          color: "#111",
          lineHeight: 1.25,
          marginBottom: 20,
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
      <button className="view-btn">View Details</button>
    </article>
  );
}
