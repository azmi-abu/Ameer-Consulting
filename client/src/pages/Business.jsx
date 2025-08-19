import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";

function Business() {
  const { t } = useTranslation();
  const points = t("business.points", { returnObjects: true });

  return (
    <PageWrapper>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t("business.title")}</h1>
      <ul className="list-disc ml-5">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
   </PageWrapper>
  );
}
export default Business;