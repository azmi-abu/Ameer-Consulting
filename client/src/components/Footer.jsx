import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 py-6 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="flex items-center gap-3">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
        <p className="text-sm font-light">{t("footer.powered")}</p>
      </div>
    </footer>
  );
}

export default Footer;
