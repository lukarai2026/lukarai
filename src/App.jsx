import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutBusinessPage from "./pages/AboutBusinessPage";
import ContactPage from "./pages/ContactPage";
import GarageCafeDetailPage from "./pages/GarageCafeDetailPage";
import GarageJuiceDetailPage from "./pages/GarageJuiceDetailPage";
import LukaBubbleTeaDetailPage from "./pages/LukaBubbleTeaDetailPage";
import GarageBaristaSchoolDetailPage from "./pages/GarageBaristaSchoolDetailPage";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
};

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":          return <HomePage    setPage={setPage} />;
      case "about":         return <AboutBusinessPage setPage={setPage} />;
      case "contact":       return <ContactPage />;
      case "garage-detail": return <GarageCafeDetailPage setPage={setPage} />;
      case "juice-detail":  return <GarageJuiceDetailPage setPage={setPage} />;
      case "bubble-detail": return <LukaBubbleTeaDetailPage setPage={setPage} />;
      case "barista-detail": return <GarageBaristaSchoolDetailPage setPage={setPage} />;
      default:              return <HomePage    setPage={setPage} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {/* offset for fixed nav (100px height) */}
      <div style={{ paddingTop: 100 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
