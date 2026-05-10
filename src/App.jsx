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
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash || "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      setPage(hash || "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (newPage) => {
    const currentHash = window.location.hash.replace("#", "") || "home";
    if (newPage === currentHash) return;
    window.history.pushState(null, "", `#${newPage}`);
    setPage(newPage);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":          return <HomePage    setPage={navigateTo} />;
      case "about":         return <AboutBusinessPage setPage={navigateTo} />;
      case "contact":       return <ContactPage />;
      case "garage-detail": return <GarageCafeDetailPage setPage={navigateTo} />;
      case "juice-detail":  return <GarageJuiceDetailPage setPage={navigateTo} />;
      case "bubble-detail": return <LukaBubbleTeaDetailPage setPage={navigateTo} />;
      case "barista-detail": return <GarageBaristaSchoolDetailPage setPage={navigateTo} />;
      default:              return <HomePage    setPage={navigateTo} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={navigateTo} />
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
