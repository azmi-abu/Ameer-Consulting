import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AccessibilityStatementModal({ onClose }) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";
  const dir = isRTL ? "rtl" : "ltr";

  const LAST_UPDATED = "20.01.2026";

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="הצהרת נגישות"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        dir={dir}
        className="relative w-full max-w-3xl rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-2xl cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 px-6 py-4">
          <div className="text-lg font-extrabold text-gray-900 dark:text-white">
            הצהרת נגישות
            <div className="text-xs font-bold text-gray-500 dark:text-white/50">
              תאריך עדכון אחרון: {LAST_UPDATED}
            </div>
          </div>

          <button
            type="button"
            aria-label="סגור"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6 text-gray-700 dark:text-white/85 leading-relaxed space-y-6">
          <p>
            האתר <b>Ameer Consulting</b> מחויב לספק חוויית גלישה נגישה,
            שוויונית ונוחה לכלל המשתמשים, לרבות אנשים עם מוגבלויות.
          </p>

          <p>
            אנו פועלים ליישום והטמעה של עקרונות הנגישות בהתאם להוראות הדין והתקנים
            המקובלים, במטרה לאפשר שימוש מיטבי באתר לכלל האוכלוסייה.
          </p>

          <section>
            <h3 className="font-extrabold text-gray-900 dark:text-white">
              תקנים וחקיקה
            </h3>
            <ul className="mt-2 list-disc pr-5 space-y-1">
              <li>התקן הישראלי ת״י 5568</li>
              <li>
                תקנה 35 לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
                תשע״ג–2013
              </li>
              <li>WCAG 2.1 של W3C ברמה AA</li>
              <li>תקני HTML ו-CSS של W3C</li>
            </ul>
          </section>

          <section>
            <h3 className="font-extrabold text-gray-900 dark:text-white">
              התאמות נגישות שבוצעו באתר
            </h3>
            <ul className="mt-2 list-disc pr-5 space-y-1">
              <li>ניווט מלא באמצעות מקלדת</li>
              <li>אפשרות לדילוג לתוכן הראשי</li>
              <li>היררכיית כותרות תקינה</li>
              <li>ניגודיות צבעים מתאימה</li>
              <li>התאמה לקוראי מסך וטכנולוגיות מסייעות</li>
              <li>טקסטים קריאים וברורים</li>
              <li>רספונסיביות למכשירים שונים</li>
            </ul>
          </section>

          <section>
            <h3 className="font-extrabold text-gray-900 dark:text-white">
              סייגים / רכיבי צד ג׳
            </h3>
            <p className="mt-2">
              ייתכן שחלק מהתכנים באתר, ובפרט רכיבים או תכנים המוטמעים מצדדים שלישיים,
              אינם נגישים במלואם ואינם בשליטתנו. אם נתקלתם בקושי, נשמח לסייע ולספק
              חלופה נגישה.
            </p>
          </section>

          <section>
            <h3 className="font-extrabold text-gray-900 dark:text-white">
              פנייה בנושא נגישות
            </h3>
            <div className="mt-2 space-y-1">
              <div>
                <b>אימייל:</b> azmi.abu95@gmail.com
              </div>
              <div>
                <b>טלפון:</b> +972 50-610-1532
              </div>
            </div>
          </section>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl bg-primary px-6 py-3 font-extrabold text-white hover:opacity-90 transition"
            >
              סגור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityStatementModal;