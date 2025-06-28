'use client';

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { HelpCircle } from 'lucide-react'
import Navbar from "@/sections/Navbar";
import { HelpWidget } from './components/HelpWidget'
import CGPAConverter from './components/CGPAConverter'

export default function CGPAConverterPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-lime-400 via-green-300 to-emerald-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              CGPA Calculator
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Calculate your CGPA and projected grades with our easy-to-use calculator. 
              Supports multiple universities and grading systems.
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Help Section */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-lime-400/10">
                    <HelpCircle className="w-6 h-6 text-lime-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Quick Guide</h2>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-lime-400">1.</span>
                    Select your university from the dropdown
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-400">2.</span>
                    Enter your SGPA and credits for each semester
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-400">3.</span>
                    Mark completed semesters
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-400">4.</span>
                    Add more semesters if needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-400">5.</span>
                    Click calculate to see your results
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-neutral-800 text-white hover:bg-neutral-800/50"
                  onClick={() => window.location.href = '/tools/cgpa-converter/how'}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Calculator */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm p-8">
                <CGPAConverter />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <HelpWidget />
    </div>
  )
} 