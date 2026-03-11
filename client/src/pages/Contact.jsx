// src/pages/Contact.jsx
import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/ContactForm";

function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  return (
    <PageWrapper>
      <section id="contact" className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-white to-primary/10 dark:from-primary/10 dark:via-gray-950 dark:to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div
            className={`grid lg:grid-cols-2 gap-10 items-start ${
              isRTL ? "lg:[direction:rtl]" : ""
            }`}
          >
            <div className={isRTL ? "text-right" : "text-left"}>
              <p className="inline-flex rounded-full bg-white/80 dark:bg-gray-800 px-4 py-2 text-sm font-medium shadow-sm mb-4">
                {t("contact.title")}
              </p>
              <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-xl">
                {t("about.description")}
              </p>

              <div className="mt-10 space-y-4">
                <div className="rounded-2xl bg-white/90 dark:bg-gray-900 p-5 shadow-sm">
                  <div className="font-bold mb-1">{t("contact.phone")}</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-gray-500">050-123-4567</span>
                    <span className="text-gray-500">972+</span>
                </div>
                </div>

                <div className="rounded-2xl bg-white/90 dark:bg-gray-900 p-5 shadow-sm">
                  <div className="font-bold mb-1">{t("contact.email")}</div>
                  <div className="text-gray-600 dark:text-gray-400">info@example.com</div>
                </div>
              </div>
            </div>

            <ContactForm subject={t("contact.title")} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Contact;