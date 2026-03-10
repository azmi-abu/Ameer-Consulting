// src/pages/BankRepresentation.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Banknote, Scale, ShieldCheck } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import bankImage from "../assets/bank-representation.jpg";

function BankRepresentation() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  const cards = [
    {
      icon: ShieldCheck,
      title: t("card1.title"),
      desc: t("card1.desc"),
    },
    {
      icon: Banknote,
      title: t("card2.title"),
      desc: t("card2.desc"),
    },
    {
      icon: Scale,
      title: t("card3.title"),
      desc: t("card3.desc"),
    },
  ];

  return (
    <PageWrapper>
      <section id="bank-representation" className="py-20 bg-[#eef8f7] dark:bg-gray-900 scroll-mt-24">
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
              <p className="inline-flex rounded-full bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium shadow-sm mb-5">
                {t("bank.title")}
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                {t("bank.title")}
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                {t("bank.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/40 dark:border-gray-800 bg-white dark:bg-gray-900">
                <img
                  src={bankImage}
                  alt="Bank representation"
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
                  className={`rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition ${
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

export default BankRepresentation;