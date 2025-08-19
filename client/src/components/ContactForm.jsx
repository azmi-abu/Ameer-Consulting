// ContactForm.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm({ subject }) {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" || i18n.language === "he" ? "rtl" : "ltr";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...form, subject });
  };

  const localizedSubject = i18n.language === "ar"
    ? t("mortgage.title")
    : i18n.language === "he"
    ? t("mortgage.title")
    : subject;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md transition"
      dir={dir}
    >
      <h2 className="text-xl font-semibold text-center mb-4">
        {localizedSubject} — {t("contact.title")}
      </h2>

      <input
        type="text"
        name="name"
        placeholder={`* ${t("contact.name")}`}
        required
        className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder={`* ${t("contact.phone")}`}
        required
        dir="rtl"
        className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder={t("contact.email")}
        className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder={`* ${t("contact.message")}`}
        required
        rows={4}
        className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        value={form.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      >
        {t("contact.submit")}
      </button>
    </form>
  );
}

export default ContactForm;
