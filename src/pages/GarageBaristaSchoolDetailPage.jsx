import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { GOLD } from "../constants";

const SLIDESHOW_IMAGES = [
  "/media/Images/Garage Barista school SS 1.jpeg",
  "/media/Images/Garage Barista school SS 2.jpeg",
  "/media/Images/Garage Barista school SS 3.jpeg",
  "/media/Images/Garage Barista school SS 4.jpeg",
  "/media/Images/Garage Barista school SS 5.jpeg",
  "/media/Images/Garage Barista school SS 6.png",
  "/media/Images/Garage Barista school SS 7.png",
  "/media/Images/Garage Barista school SS 8.png",
];

export default function GarageBaristaSchoolDetailPage({ setPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ background: "#ffffff", color: "#111", minHeight: "100vh", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
      
      {/* Back Button */}
      <div style={{ padding: "40px 0 0 clamp(20px, 4vw, 40px)" }}>
        <button
          onClick={() => setPage("about")}
          style={{
            background: "#111",
            border: "none",
            color: "#fff",
            padding: "8px 16px",
            fontSize: "12px",
            letterSpacing: "0.1em",
            cursor: "pointer",
            textTransform: "uppercase",
            borderRadius: "4px",
          }}
        >
          &lt; BACK
        </button>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px clamp(18px, 4vw, 48px) 80px" }}>
        
        {/* Top Section */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{ 
            fontSize: "clamp(32px, 5vw, 48px)", 
            fontWeight: 600, 
            letterSpacing: "0.05em",
            marginBottom: "40px"
          }}>
            Garage Barista School
          </h1>
          
          <img 
            src="/media/Images/Garage Barista school 1.png" 
            alt="Garage Barista School" 
            style={{ width: "100%", height: "auto", display: "block", marginBottom: "40px" }} 
          />
          
          <h3 style={{ 
            color: GOLD, 
            fontSize: "18px", 
            fontWeight: 700, 
            letterSpacing: "0.15em", 
            textTransform: "uppercase",
            marginBottom: "20px"
          }}>
            GARAGE BARISTA SCHOOL
          </h3>
          
          <p style={{ 
            fontSize: "15px", 
            lineHeight: 1.8, 
            color: "#333", 
            maxWidth: "900px", 
            margin: "0 auto",
            fontWeight: 500
          }}>
            Our curriculum is led by industry veterans who bring years of professional expertise directly to your station, ensuring you master every critical detail of the craft. From the precise chemistry of extraction and grind calibration to the sensory art of milk texturing and latte design, we leave no stone unturned. You will gain a deep understanding of bean origins, processing methods, and the technical maintenance of high-end machinery, providing you with the comprehensive knowledge base required to excel in a competitive specialty coffee landscape.
          </p>
        </div>

        {/* Middle Section: Slideshow */}
        <div style={{ marginBottom: "100px", overflow: "hidden", position: "relative" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "36px", 
            fontWeight: 700, 
            letterSpacing: "0.05em",
            marginBottom: "40px"
          }}>
            Our Training Classes
          </h2>
          
          {/* Infinite auto-scrolling container */}
          <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              style={{ display: "flex", gap: "20px", width: "max-content" }}
            >
              {/* Render array twice for seamless loop */}
              {[...SLIDESHOW_IMAGES, ...SLIDESHOW_IMAGES].map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt={`Training slide ${i}`} 
                  style={{ width: "300px", height: "200px", objectFit: "cover" }} 
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Two Columns */}
        <div 
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "60px",
            alignItems: "start",
            marginBottom: "80px"
          }}
        >
          
          {/* Left Column Image */}
          <div>
            <img 
              src="/media/Images/Garage Barista school 3.png" 
              alt="Garage Barista School Instructor" 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
          </div>

          {/* Right Column Text */}
          <div style={{ padding: "clamp(0px, 4vw, 20px) 0" }}>
            
            <h3 style={{ 
              color: GOLD, 
              fontSize: "22px", 
              fontWeight: 700, 
              letterSpacing: "0.05em", 
              textAlign: "center",
              marginBottom: "30px"
            }}>
              Our Core Pillars
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "50px" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#111" }}>
                <span style={{ fontWeight: 800, fontSize: "15px" }}>• Precision Training:</span> Master the technical "logic" of coffee through data-driven extraction methods and rigorous quality control.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#111" }}>
                <span style={{ fontWeight: 800, fontSize: "15px" }}>• Artistic Intuition:</span> Develop the "magic" of the craft, learning to balance flavor profiles and execute flawless visual presentation.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#111" }}>
                <span style={{ fontWeight: 800, fontSize: "15px" }}>• Professional Readiness:</span> Gain the confidence to step into any high-end retail or hospitality environment with a deep understanding of workflow and brand standards.
              </p>
            </div>

            <h3 style={{ 
              color: GOLD, 
              fontSize: "22px", 
              fontWeight: 700, 
              letterSpacing: "0.05em", 
              textAlign: "center",
              marginBottom: "20px"
            }}>
              Why Choose Garage Barista School?
            </h3>
            
            <p style={{ 
              fontSize: "14px", 
              lineHeight: 1.6, 
              color: "#333",
              textAlign: "center",
              fontWeight: 600,
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Choosing the right training center is about more than just learning to steam milk; it is about mastering a craft that balances technical discipline with creative expression.
            </p>

          </div>

        </div>

      </div>
      
      <Footer />
    </div>
  );
}
