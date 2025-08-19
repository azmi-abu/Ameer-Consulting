import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";

function Contact() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t("contact.title")}</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder={t("contact.name")}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder={t("contact.email")}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder={t("contact.message")}
          rows="5"
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {t("contact.submit")}
        </button>
      </form>
    </div>
    </PageWrapper>
  );
}

export default Contact;
