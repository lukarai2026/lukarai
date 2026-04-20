import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutBusinessPage from "./pages/AboutBusinessPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":    return <HomePage    setPage={setPage} />;
      case "about":   return <AboutBusinessPage />;
      case "contact": return <ContactPage />;
      default:        return <HomePage    setPage={setPage} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {/* offset for fixed nav */}
      <div style={{ paddingTop: 68 }}>
        {renderPage()}
      </div>
    </>
  );
}
