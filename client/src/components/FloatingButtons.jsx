// src/components/FloatingButtons.jsx
import { FaWhatsapp, FaEnvelope, FaUniversalAccess } from "react-icons/fa";

function FloatingButtons() {
  const phoneNumber = "0532476004"; // replace
  const email = "amirtaha@live.com"; // replace

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[999] flex items-center gap-3">
        <a
          href={`mailto:${email}`}
          aria-label="Email"
          className="w-14 h-14 rounded-full bg-[#d8b75c] text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <FaEnvelope size={24} />
        </a>

        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>

      <button
        type="button"
        aria-label="Accessibility"
        className="fixed bottom-5 left-5 z-[999] w-14 h-14 rounded-full bg-white text-[#3b82f6] shadow-lg flex items-center justify-center hover:scale-110 transition border border-gray-200"
      >
        <FaUniversalAccess size={24} />
      </button>
    </>
  );
}

export default FloatingButtons;