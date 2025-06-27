"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toastState, setToastState] = useState<{ message: string; show: boolean }>({
    message: '',
    show: false
  });
  
  const timeoutRef = useRef<NodeJS.Timeout>();
  const hideTimeoutRef = useRef<NodeJS.Timeout>();

  const hideToast = useCallback(() => {
    setToastState(prev => ({ ...prev, show: false }));
  }, []);

  const showToast = useCallback((newMessage: string) => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // If a toast is currently showing, hide it first
    if (toastState.show) {
      hideToast();
      // Wait for the hide animation to complete before showing the new toast
      hideTimeoutRef.current = setTimeout(() => {
        setToastState({ message: newMessage, show: true });
        timeoutRef.current = setTimeout(hideToast, 3000);
      }, 300);
    } else {
      // If no toast is showing, show the new one immediately
      setToastState({ message: newMessage, show: true });
      timeoutRef.current = setTimeout(hideToast, 3000);
    }
  }, [hideToast, toastState.show]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
        <AnimatePresence mode="wait">
          {toastState.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 pointer-events-auto"
            >
              <span className="text-white/90">{toastState.message}</span>
              <button
                onClick={hideToast}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
} 