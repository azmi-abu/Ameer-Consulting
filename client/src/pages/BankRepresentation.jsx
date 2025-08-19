// src/pages/BankRepresentation.jsx
import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { Banknote, Scale, ShieldCheck } from "lucide-react";
import bankImage from "../assets/bank-representation.jpg";

function BankRepresentation() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {/* Header + Image */}
      <div className="bg-primary/20 dark:bg-primary/10 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t("bank.title")}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("bank.description")}
          </p>
        </motion.div>

        <motion.img
          src={bankImage}
          alt="Bank representation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl mx-auto rounded-xl shadow-md"
        />
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {t("card1.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("card1.desc")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <Banknote className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {t("card2.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("card2.desc")}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <Scale className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {t("card3.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("card3.desc")}
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}

export default BankRepresentation;
