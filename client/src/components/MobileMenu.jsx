import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function MobileMenu({ onClose }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const items = [
    { label: t("home"), path: "/" },
    { label: t("mortgage"), path: "/mortgage" },
    { label: t("business"), path: "/business" },
    { label: t("family"), path: "/family" },
    { label: t("banks"), path: "/banks" },
    { label: t("contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50" dir="rtl">
      <div className="absolute inset-0 bg-black opacity-40" />

      <div
        ref={menuRef}
        className="absolute right-0 top-0 h-full w-[80vw] sm:w-[20vw] bg-primary text-black dark:text-white dark:bg-gray-800 shadow-lg p-4 animate-slide-in overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">{t("menu")}</div>
          <button
            onClick={onClose}
            className="text-3xl font-bold hover:text-gray-200 dark:hover:text-gray-400"
            aria-label="close"
          >
            ×
          </button>
        </div>

        <ul className="mt-6 flex flex-col gap-3">
          {items.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
                className="block w-full text-right py-2 px-4 rounded-lg transition-all duration-200 hover:bg-primary/70 dark:hover:bg-gray-700"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
