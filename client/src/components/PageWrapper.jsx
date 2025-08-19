// components/PageWrapper.jsx
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center text-center px-4 py-10"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
