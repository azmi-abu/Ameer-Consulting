// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Mortgage from "./pages/Mortgage";
import Business from "./pages/Business";
import FamilyFinance from "./pages/FamilyFinance";
import BankRepresentation from "./pages/BankRepresentation";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FloatingButtons from "./components/FloatingButtons";

// function AnimatedRoutes() {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<About />} />
//         <Route path="/mortgage" element={<Mortgage />} />
//         <Route path="/business" element={<Business />} />
//         <Route path="/family-finance" element={<FamilyFinance />} />
//         <Route path="/bank-representation" element={<BankRepresentation />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </AnimatePresence>
//   );
// }

function App() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" || i18n.language === "he" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
