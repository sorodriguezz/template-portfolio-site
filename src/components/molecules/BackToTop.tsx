"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>("main.snap-container");
    if (!container) return;

    const handleScroll = () => {
      setIsVisible(container.scrollTop > window.innerHeight * 0.6);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-bg-dark flex items-center justify-center cursor-pointer shadow-[0_0_12px_var(--color-primary)] hover:shadow-[0_0_20px_var(--color-primary)] hover:scale-110 transition-all"
          aria-label="Volver al inicio"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
