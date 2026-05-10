import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function GarageCafeDetailPage({ setPage }) {
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
          src="/media/videos/garage cafe lounge bar.mov"
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

        {/* Masonry Layout Container */}
        <div 
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <img 
              src="/media/Images/Garage cafe loung bar 1.jpeg" 
              alt="Garage Cafe Lounge Bar 1" 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
            
            <img 
              src="/media/Images/Garage cafe lounge bar 3.jpeg" 
              alt="Garage Cafe Lounge Bar 3" 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
            
            <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <img 
                src="/media/Images/garage cafe lounge bar 4.png" 
                alt="Garage Cafe Lounge Bar 4" 
                style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} 
              />
              <img 
                src="/media/Images/Garage cafe lounge bar 5.jpeg" 
                alt="Garage Cafe Lounge Bar 5" 
                style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} 
              />
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <img 
              src="/media/Images/Garage cafe lounge bar 2.jpeg" 
              alt="Garage Cafe Lounge Bar 2" 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
            
            <div style={{ padding: "20px clamp(0px, 4vw, 40px) 20px 0" }}>
              <h2 style={{ 
                fontSize: "24px", 
                letterSpacing: "0.2em", 
                fontWeight: 500, 
                marginBottom: "30px",
                lineHeight: 1.5,
              }}>
                Garage Cafe <br/>
                Lounge & Bar
              </h2>
              
              <p style={{ 
                fontSize: "13px", 
                lineHeight: 1.9, 
                fontWeight: 600,
                color: "#111",
                textAlign: "left"
              }}>
                We believe that a truly exceptional experience is built on two inseparable foundations: the logic of a perfect brew and the magic of a genuine welcome. We don't just serve a high-end cup of coffee; we deliver a standard of service that makes you feel like the most important person in the room. Wrapped in the warm nostalgia of an old-school workshop, every detail—from the precision of our craft to the comfort of our leather seats—is designed to make you feel completely at home. Here, you aren't just a customer; you are a guest in a space that feels like it belongs to you.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
