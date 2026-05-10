import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function GarageJuiceDetailPage({ setPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ background: "#ffffff", color: "#111", minHeight: "100vh", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
      {/* Top Video Section */}
      <div style={{ position: "relative", width: "100%", maxHeight: "80vh", overflow: "hidden" }}>
        {/* Back Button */}
        <button
          onClick={() => setPage("about")}
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            zIndex: 10,
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            padding: "8px 16px",
            fontSize: "12px",
            letterSpacing: "0.1em",
            cursor: "pointer",
            textTransform: "uppercase",
            backdropFilter: "blur(4px)",
          }}
        >
          &lt; BACK
        </button>

        <video
          src="/media/videos/Garage Juice and Bakery.mov"
          autoPlay
          loop
          playsInline
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            maxHeight: "80vh",
          }}
        />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px clamp(18px, 4vw, 48px) 120px" }}>
        
        <p style={{ 
          fontSize: "14px", 
          fontWeight: 600, 
          letterSpacing: "0.05em",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          marginBottom: "60px",
          display: "inline-block",
          cursor: "pointer"
        }}>
          Discover more
        </p>

        {/* Row 1: Two images side-by-side */}
        <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "40px" }}>
          <img 
            src="/media/Images/Garage Juice and bakery 1.jpeg" 
            alt="Garage Juice and Bakery 1" 
            style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} 
          />
          <img 
            src="/media/Images/Garage juice and bakery 2.jpeg" 
            alt="Garage Juice and Bakery 2" 
            style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} 
          />
        </div>

        {/* Row 2: Centered Text block */}
        <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 80px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "16px", color: "#111" }}>
            Where Freshness Meets CrafT
          </h3>
          <p style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.6, color: "#333" }}>
            Garage Juice Box & Bakery: A vibrant fusion of nutrient-rich cold-pressed juices and artisanal baked goods,<br />
            served in an inviting, contemporary space designed for mindful indulgence."
          </p>
        </div>

        {/* Row 3: Text and Image */}
        <div 
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
            marginBottom: "80px"
          }}
        >
          {/* Left Column Text */}
          <div style={{ paddingRight: "clamp(0px, 4vw, 20px)" }}>
            <h2 style={{ 
              fontSize: "24px", 
              letterSpacing: "0.15em", 
              fontWeight: 600, 
              marginBottom: "30px",
              lineHeight: 1.4,
              textAlign: "center"
            }}>
              Garage Juice Box and <br/>
              Bakery
            </h2>
            
            <p style={{ 
              fontSize: "13px", 
              lineHeight: 1.9, 
              fontWeight: 600,
              color: "#111",
              textAlign: "left"
            }}>
              Garage Juice Box & Bakery is a modern, health-forward concept that blends the raw, industrial energy of a converted space with the refined comfort of an artisanal kitchen. It serves as a dual-purpose neighborhood hub where vibrant, cold-pressed juices and nutrient-dense wellness shots meet the indulgent, comforting aroma of freshly baked sourdough and handcrafted pastries. The atmosphere often reflects a "Warm Minimalist" aesthetic—featuring clean lines, natural wood textures, and an open, inviting layout—making it an ideal spot for those seeking a balance between functional nutrition and high-quality, small-batch treats.
            </p>
          </div>

          {/* Right Column Image */}
          <div>
            <img 
              src="/media/Images/Garage juice and bakery 3.jpeg" 
              alt="Garage Juice and Bakery 3" 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
