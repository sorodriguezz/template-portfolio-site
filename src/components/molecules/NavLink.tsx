"use client";

import { motion } from "framer-motion";
import { BASE_PATH } from "@/config/site";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    // If we're on the home page, smooth scroll. Otherwise navigate home.
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home page with hash
        e.preventDefault();
        window.location.href = `${BASE_PATH}/${href}`;
      }
    }
    onClick?.();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="text-text-secondary hover:text-primary font-mono text-sm tracking-wider transition-colors duration-300 relative group"
      whileHover={{ y: -2 }}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}
