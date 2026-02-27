"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { NavLink } from "@/components/molecules";
import { siteConfig } from "@/config/site";
import { Terminal, Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: t.nav.inicio },
    { href: "#proyectos", label: t.nav.proyectos },
    { href: "#tech-stack", label: t.nav.techStack },
    { href: "#blog", label: t.nav.blog },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2 text-primary font-bold font-mono text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal size={20} />
            <span>{siteConfig.name}</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1.5 text-text-secondary hover:text-primary font-mono text-xs border border-border rounded-full px-3 py-1.5 hover:border-primary transition-all cursor-pointer"
            >
              <Globe size={14} />
              {language === "es" ? "EN" : "ES"}
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleLanguage}
              whileTap={{ scale: 0.9 }}
              className="text-text-secondary hover:text-primary p-2 cursor-pointer"
            >
              <Globe size={18} />
            </motion.button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text-secondary hover:text-primary p-2 cursor-pointer"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
