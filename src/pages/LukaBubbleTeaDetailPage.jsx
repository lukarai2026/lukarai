import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function LukaBubbleTeaDetailPage({ setPage }) {
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
          src="/media/videos/lukas bubble tea.mov"
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

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(18px, 4vw, 48px) 120px" }}>
        
        {/* Two Column Layout */}
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
              letterSpacing: "0.2em", 
              fontWeight: 600, 
              marginBottom: "30px",
              lineHeight: 1.4,
              textAlign: "center"
            }}>
              Luka's Bubble Tea
            </h2>
            
            <p style={{ 
              fontSize: "14px", 
              lineHeight: 1.9, 
              fontWeight: 500,
              color: "#333",
              textAlign: "left"
            }}>
              Luka's Bubble Tea, we believe that every cup should be an experience, not just a drink. What started as a passion for the perfect chew and the finest tea leaves has grown into a local destination for boba lovers who crave authenticity with a modern twist. We pride ourselves on using premium, hand-picked teas and crafting our signature pearls daily to ensure that every sip delivers that unmistakable, fresh-cooked texture. Whether you're a fan of the rich, velvety layers of our Classic Brown Sugar Milk Tea or looking for a refreshing burst from our fruit-infused sparklers, Luka's is dedicated to bringing a little extra joy to your day—one pearl at a time. Welcome to the family; let's find your new favorite flavor.
            </p>
          </div>

          {/* Right Column Image */}
          <div>
            <img 
              src="/media/Images/lukas bubble tea 1.png" 
              alt="Luka's Bubble Tea" 
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                borderRadius: "16px",
                objectFit: "cover"
              }} 
            />
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
