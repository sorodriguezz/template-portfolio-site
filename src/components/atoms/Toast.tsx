"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X, Info } from "lucide-react";
import { useEffect } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, isVisible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  const icons = {
    success: <CheckCircle className="text-green-400" size={20} />,
    error: <AlertCircle className="text-red-400" size={20} />,
    info: <Info className="text-blue-400" size={20} />,
    warning: <AlertCircle className="text-yellow-400" size={20} />,
  };

  const bgColors = {
    success: "bg-green-500/10 border-green-500/20",
    error: "bg-red-500/10 border-red-500/20",
    info: "bg-blue-500/10 border-blue-500/20",
    warning: "bg-yellow-500/10 border-yellow-500/20",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: 20 }}
          className={`fixed top-8 right-8 z-200 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl min-w-[300px] max-w-[90vw] ${bgColors[type]}`}
        >
          <div className="shrink-0">{icons[type]}</div>
          <p className="text-sm font-mono text-white flex-1">{message}</p>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
          >
            <X size={16} />
          </button>
          
          {/* Progress Bar */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left ${
              type === 'success' ? 'bg-green-500' : 
              type === 'error' ? 'bg-red-500' : 
              type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
