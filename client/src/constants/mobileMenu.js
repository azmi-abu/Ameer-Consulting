import { HomeIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export const mobileMenu = [
  { key: "home", to: "/", icon: <HomeIcon className="w-5 h-5" /> },
  { key: "about", to: "/#about", icon: <InformationCircleIcon className="w-5 h-5" /> },
  { key: "mortgage", to: "/#mortgage", icon: "🏠" },
  { key: "business", to: "/#business", icon: "📈" },
  { key: "family", to: "/#family", icon: "👨‍👩‍👧‍👦" },
  { key: "bank", to: "/#bank", icon: "🏦" },
  { divider: true },
  { key: "contact", action: "call", href: "tel:0500000000", icon: <PhoneIcon className="w-5 h-5" /> },
];
