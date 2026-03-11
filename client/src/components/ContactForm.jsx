import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm({ subject }) {
  const { t } = useTranslation();
  const dir = "rtl";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (/\d/.test(value)) return "Name cannot contain numbers";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^05\d{8}$/.test(value)) {
          return "Phone must start with 05 and be 10 digits";
        }
        return "";

      case "email":
        if (!value.trim()) return "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Invalid email";
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "name") {
      updatedValue = value.replace(/\d/g, "");
    }

    setForm((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, updatedValue),
    }));

    setStatusMessage("");
    setStatusType("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {
    name: validateField("name", form.name),
    phone: validateField("phone", form.phone),
    email: validateField("email", form.email),
  };

  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some((error) => error);
  if (hasErrors) return;

  try {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed");
    }

    setStatusMessage(t("contact.success"));
    setStatusType("success");

    setForm({
      name: "",
      phone: "",
      email: "",
    });

  } catch (error) {
    console.error(error);

    setStatusMessage(t("contact.error"));
    setStatusType("error");

  } finally {
    setLoading(false);

    // hide message after 3 seconds
    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 3000);
  }
};

  const isFormValid =
    form.name.trim() &&
    !/\d/.test(form.name) &&
    /^05\d{8}$/.test(form.phone) &&
    (form.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email));

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md transition"
      dir={dir}
      noValidate
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        {t("contact.title")}
      </h2>

      {subject && (
        <p className="text-center text-gray-600 dark:text-gray-300 -mt-2 mb-4">
          {subject}
        </p>
      )}

      <div>
        <input
          type="text"
          name="name"
          placeholder={`* ${t("contact.name")}`}
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder={`* ${t("contact.phone")}`}
          required
          inputMode="numeric"
          dir="rtl"
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {statusMessage && (
  <div
    className={`text-center text-sm font-medium p-3 rounded-lg ${
      statusType === "success"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {statusMessage}
  </div>
)}

      <button
        type="submit"
        disabled={!isFormValid || loading}
        className={`w-full font-semibold py-3 px-6 rounded-lg transition duration-300 ${
          isFormValid && !loading
            ? "bg-primary text-white shadow-lg shadow-primary/40 hover:scale-[1.02]"
            : "bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed"
        }`}
      >
        {loading ? "שולח..." : t("contact.submit")}
      </button>
    </form>
  );
}

export default ContactForm;