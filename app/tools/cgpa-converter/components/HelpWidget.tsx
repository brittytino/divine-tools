'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { HelpCircle, Share2, MessageSquare } from 'lucide-react';

export function HelpWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "🎓 Check out this awesome CGPA Calculator for Tamil Nadu universities! Calculate your current and projected CGPA easily.\n\n" +
      "Try it here: https://divine-tools.vercel.app/tools/cgpa-converter"
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Help Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-lime-400 hover:bg-lime-500 text-black shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HelpCircle className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-neutral-900 border-neutral-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
                How to Use CGPA Calculator
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              {/* Quick Guide */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-lime-400">Step 1: Select University</h3>
                  <p className="text-sm text-neutral-300">
                    Choose your university from the dropdown menu for accurate CGPA conversion.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-lime-400">Step 2: Enter Semester Details</h3>
                  <ul className="text-sm text-neutral-300 space-y-1 list-disc list-inside">
                    <li>Enter SGPA for completed semesters</li>
                    <li>Mark semesters as "Completed" or "Projected"</li>
                    <li>Add more semesters if needed</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-lime-400">Step 3: Advanced Options</h3>
                  <p className="text-sm text-neutral-300">
                    Toggle "Advanced Mode" to customize credits per semester if they vary.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-lime-400">Step 4: Get Results</h3>
                  <p className="text-sm text-neutral-300">
                    Click "Calculate CGPA" to see your current and projected CGPA with percentage.
                  </p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3 pt-4 border-t border-neutral-800">
                <h3 className="font-medium text-neutral-200">Share this Tool</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-neutral-700 hover:bg-neutral-800"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-600/20 hover:bg-green-600/10 text-green-500"
                    onClick={shareOnWhatsApp}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
} 