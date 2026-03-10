// src/pages/FamilyFinance.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PiggyBank, Users, BarChart } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import familyImage from "../assets/family-finance.jpg";

function FamilyFinance() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  const cards = [
    {
      icon: PiggyBank,
      title: t("family.card1.title"),
      desc: t("family.card1.desc"),
    },
    {
      icon: Users,
      title: t("family.card2.title"),
      desc: t("family.card2.desc"),
    },
    {
      icon: BarChart,
      title: t("family.card3.title"),
      desc: t("family.card3.desc"),
    },
  ];

  return (
    <PageWrapper>
      <section id="family-finance" className="py-20 bg-white dark:bg-gray-950 scroll-mt-24">
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
                {t("family.title")}
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                {t("family.title")}
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                {t("family.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                <img
                  src={familyImage}
                  alt="Family finance"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {cards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={`rounded-3xl bg-[#f8fbfb] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  <Icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default FamilyFinance;