// About.jsx
import { useTranslation } from "react-i18next";
import logo from "../assets/Ameer-Logo.jpg";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-12 text-gray-900 dark:text-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col lg:flex-row ${isRTL ? "lg:flex-row-reverse" : ""} items-center gap-8 mb-12`}
        >
          <img
            src={logo}
            alt="Ameer Consulting Logo"
            className="w-40 h-auto rounded-xl shadow-lg"
          />
          <div className="text-center lg:text-start space-y-4">
            <h1 className="text-4xl font-extrabold">
              {t("about.title")}
            </h1>
            <p className="text-lg leading-relaxed">
              {t("about.description")}
            </p>
            <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
              {t("about.secondary")}
            </p>
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/80 transition"
              >
                {t("cta.contact")}
              </a>
              <a
                href="#contact"
                className="border border-primary text-primary px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/10 transition"
              >
                {t("cta.consult")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-bold mb-2">📊 {t("about.feature1.title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("about.feature1.desc")}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-bold mb-2">🏦 {t("about.feature2.title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("about.feature2.desc")}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-bold mb-2">💼 {t("about.feature3.title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("about.feature3.desc")}
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}

export default About;
