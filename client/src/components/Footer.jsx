// src/components/Footer.jsx
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  return (
    <footer className="bg-primary/20 dark:bg-primary/10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ameer_consulting/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white flex items-center justify-center hover:bg-white/50 dark:hover:bg-white/10 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white flex items-center justify-center hover:bg-white/50 dark:hover:bg-white/10 transition"
            >
              <FaFacebookF size={16} />
            </a>
          </div>

          <a
            href="/accessibility"
            className="text-gray-900 dark:text-white underline underline-offset-4 hover:text-primary transition"
          >
            {t("footer.accessibility")}
          </a>

          <p
            className={`text-gray-700 dark:text-gray-300 text-sm ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            © 2026 {t("brand")} · {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;