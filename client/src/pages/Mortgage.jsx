// src/pages/Mortgage.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

function Mortgage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";
  const points = t("mortgage.points", { returnObjects: true });

  return (
    <PageWrapper>
      <section id="mortgage" className="py-20 bg-white dark:bg-gray-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              isRTL ? "lg:[direction:rtl]" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={isRTL ? "text-right" : "text-left"}
            >
              <p className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm font-medium mb-5">
                {t("mortgage.title")}
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                {t("mortgage.title")} <span className="inline-block">🏠</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                {t("mortgage.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/20 rounded-full blur-3xl" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-primary via-[#C4E7E2] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 min-h-[360px] flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏡</div>
                  <h3 className="text-2xl font-bold mb-3">{t("mortgage.title")}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-7">
                    {t("mortgage.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-3xl bg-[#f8fbfb] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <div className="text-3xl mb-4">
                  {i === 0 ? "💰" : i === 1 ? "📑" : i === 2 ? "🏘️" : i === 3 ? "📈" : "🤝"}
                </div>
                <h3 className="text-xl font-bold mb-3">{point}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {t("mortgage.description")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Mortgage;