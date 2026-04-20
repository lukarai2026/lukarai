import React from "react";

/**
 * A dark portrait-style placeholder used wherever
 * a real photo would be placed.
 *
 * Props:
 *   width        — CSS width string (default "80%")
 *   maxWidth     — CSS maxWidth (default 380)
 *   aspectRatio  — (default "3/4")
 *   bg           — background CSS (default dark blue gradient)
 *   showFrame    — show inset gold border (default true)
 */
export default function PortraitPlaceholder({
  width = "80%",
  maxWidth = 380,
  aspectRatio = "3/4",
  bg = "linear-gradient(160deg, #1c2940, #0e1520)",
  showFrame = true,
}) {
  return (
    <div
      style={{
        width,
        maxWidth,
        aspectRatio,
        background: bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {showFrame && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: "1px solid rgba(200,150,60,0.45)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      )}
      {/* Silhouette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <svg width="72%" viewBox="0 0 200 320" fill="none">
          <ellipse
            cx="100"
            cy="72"
            rx="52"
            ry="56"
            fill="rgba(255,255,255,0.12)"
          />
          <path
            d="M10 320 C10 200 46 168 100 168 C154 168 190 200 190 320Z"
            fill="rgba(255,255,255,0.10)"
          />
        </svg>
      </div>
    </div>
  );
}
