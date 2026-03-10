// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Navbar({ darkMode, setDarkMode }) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const langRef = useRef(null);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar" || i18n.language === "he";

  const navItems = [
    { label: t("home"), id: "about" },
    { label: t("mortgage"), id: "mortgage" },
    { label: t("business"), id: "business" },
    { label: t("family"), id: "family-finance" },
    { label: t("bank"), id: "bank-representation" },
    { label: t("contact"), id: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      setLangDropdownOpen(false);
      setMobileOpen(false);
    });
  };

  const scrollToSection = (id) => {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
  }

  setMobileOpen(false);
};

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-md border-b border-white/20 dark:border-gray-800"
          : "bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("about")}
            className="text-xl sm:text-2xl font-extrabold tracking-wide text-primary"
            title={t("brand")}
          >
            {t("brand")}
          </button>

          <div className="hidden lg:flex items-center gap-2">
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-primary text-gray-900 shadow"
                        : "text-gray-700 dark:text-gray-200 hover:bg-primary/20"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold bg-white/80 dark:bg-gray-900/80 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {i18n.language === "he" ? "עברית" : "العربية"}
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-32 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl">
                  <button
                    onClick={() => changeLanguage("he")}
                    className="w-full px-4 py-3 text-right hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    עברית
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="w-full px-4 py-3 text-right hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setDarkMode((s) => !s)}
              className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm bg-white/80 dark:bg-gray-900/80 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden rounded-full border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white/80 dark:bg-gray-900/80"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="rounded-3xl bg-white/95 dark:bg-gray-900/95 shadow-xl border border-gray-200 dark:border-gray-800 p-3">
              <div className={`flex flex-col gap-2 ${isRTL ? "text-right" : "text-left"}`}>
                {navItems.map((item) => {
                  const active = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "bg-primary text-gray-900 shadow"
                          : "bg-gray-50 dark:bg-gray-800 hover:bg-primary/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;