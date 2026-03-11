// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccessibilityTools from "./components/AccessibilityTools";
import AccessibilityStatementModal from "./components/AccessibilityStatementModal";
import About from "./pages/About";
import Mortgage from "./pages/Mortgage";
import Business from "./pages/Business";
import FamilyFinance from "./pages/FamilyFinance";
import BankRepresentation from "./pages/BankRepresentation";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [openA11y, setOpenA11y] = useState(false);

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" || i18n.language === "he" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenA11y(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="flex-grow">
          <About />
          <Mortgage />
          <Business />
          <FamilyFinance />
          <BankRepresentation />
          <Contact />
        </main>

        <FloatingButtons />
        <Footer onOpenA11y={() => setOpenA11y(true)} />
        <AccessibilityTools />

        {openA11y && (
          <AccessibilityStatementModal onClose={() => setOpenA11y(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;