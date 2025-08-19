import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";

function FamilyFinance() {

  const { t } = useTranslation();
  return (
    <PageWrapper>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t("family.title")}</h1>
      <p>{t("family.description")}</p>
    </div>
  </PageWrapper>
  );
}
export default FamilyFinance;