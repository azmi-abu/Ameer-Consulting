import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar({ darkMode, setDarkMode }) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef(null);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t("home"), path: "/" },
    { label: t("mortgage"), path: "/mortgage" },
    { label: t("business"), path: "/business" },
    { label: t("family"), path: "/family-finance" },
    { label: t("bank"), path: "/bank-representation" },
    { label: t("contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => setLangDropdownOpen(false));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur dark:bg-gray-900/90 text-gray-800 dark:text-white shadow border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* RIGHT — Brand */}
        <div className="col-start-1 flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-extrabold text-primary cursor-pointer select-none"
            title={t("brand")}
          >
            {t("brand")}
          </button>
        </div>

        {/* CENTER — Nav Items */}
        <div className="hidden sm:flex justify-center">
          <div className={`flex gap-4 ${i18n.language === "ar" || i18n.language === "he" ? "flex-row-reverse" : "flex-row"}`}>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-4 py-1.5 rounded-md font-medium text-sm transition 
                  ${location.pathname === item.path 
                    ? "bg-primary text-black dark:text-white shadow-md" 
                    : "hover:bg-primary/70 hover:text-black dark:hover:text-white bg-gray-100 dark:bg-gray-700"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* LEFT — Language & Theme */}
        <div className="col-start-3 flex justify-end items-center gap-2">
          {/* Language Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="text-sm font-semibold border border-gray-300 dark:border-gray-600 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {i18n.language === "he" ? "עברית" : "العربية"}
            </button>
            {langDropdownOpen && (
              <div className="absolute left-0 mt-2 w-28 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-50">
                <button
                  onClick={() => changeLanguage("he")}
                  className="w-full text-right px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇮🇱 עברית
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="w-full text-right px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇸🇦 العربية
                </button>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((s) => !s)}
            className={`px-2 py-1 text-sm rounded border font-bold shadow-sm 
              ${darkMode 
                ? "bg-transparent text-white border-gray-600 hover:bg-gray-800" 
                : "bg-white text-black border-gray-300 hover:bg-gray-100"}`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden mt-3">
        <div className={`flex flex-wrap justify-center gap-2 ${i18n.language === "ar" || i18n.language === "he" ? "flex-row-reverse" : "flex-row"}`}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${location.pathname === item.path 
                  ? "bg-primary text-black dark:text-white shadow-md" 
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-black dark:hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
