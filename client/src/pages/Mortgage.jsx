// Mortgage.jsx
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import PageWrapper from "../components/PageWrapper";

function Mortgage() {
  const { t } = useTranslation();
  const points = t("mortgage.points", { returnObjects: true });

  return (
    <PageWrapper>
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
           {t("mortgage.title")}🏠
        </h1>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-lg text-right">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed text-right">
          {t("mortgage.description")}
        </p>

        <div className="pt-4">
          <ContactForm subject="Mortgage Loans" />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Mortgage;
