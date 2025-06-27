import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  show: boolean;
}

export function Toast({ message, show }: ToastProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything on the server or before mounting
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] flex items-start justify-center">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ 
              position: "fixed",
              top: "6rem",
              right: "1rem",
              width: "auto",
              maxWidth: "24rem",
              margin: "0 auto",
              transform: "translateZ(0)",
              willChange: "transform"
            }}
          >
            <div className="relative isolate">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 bg-lime-400 rounded-2xl opacity-20 blur-xl"
                style={{ transform: "translateZ(0)" }}
              />
              
              {/* Toast content */}
              <div 
                className="relative bg-neutral-900/95 backdrop-blur-md border border-lime-400/30 text-white px-4 py-3 rounded-2xl shadow-2xl"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-lime-400 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-white/90 flex-1">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 