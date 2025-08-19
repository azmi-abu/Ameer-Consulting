// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ar from "./locales/ar/translation.json";
import he from "./locales/he/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      he: { translation: he },
    },
    lng: "ar",              // default language: Arabic
    fallbackLng: "ar",
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"], // persist user choice
    },
  });

// Optional: keep <html> dir synced with language (content direction only)
const setHtmlDir = (lng) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
};
setHtmlDir(i18n.language);
i18n.on("languageChanged", (lng) => setHtmlDir(lng));

export default i18n;
