'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Download, HelpCircle, Check, Star, Trophy, ChevronRight, Calculator } from 'lucide-react';
import { UNIVERSITIES } from '../../constants';
import { CGPAResult, Semester, University } from '../../types';

interface StoredResult extends CGPAResult {
  semesters: Semester[];
  timestamp: string;
}

interface ResultPageProps {
  params: {
    token: string;
  };
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-lime-400/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-lime-400 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}

function ResultContent({ token }: { token: string }) {
  const router = useRouter();
  const [result, setResult] = useState<StoredResult | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(`cgpa_result_${token}`);
    if (!data) {
      router.push('/tools/cgpa-converter');
      return;
    }

    try {
      const parsedData = JSON.parse(data);
      const university = UNIVERSITIES.find(u => u.id === parsedData.university.id);
      if (!university) {
        throw new Error('University not found');
      }
      setResult({
        ...parsedData,
        university
      });
    } catch (error) {
      console.error('Error parsing result:', error);
      router.push('/tools/cgpa-converter');
    }
  }, [token, router]);

  if (!result) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => router.push('/tools/cgpa-converter')}
        className="text-neutral-400 hover:text-white hover:bg-neutral-800/50"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Calculator
      </Button>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-lime-400 via-green-300 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your CGPA Results
          </motion.h1>
          <motion.p 
            className="text-neutral-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Based on {result.university.name} calculation formula
          </motion.p>
        </div>

        {/* Results Card */}
        <Card className="p-8 bg-neutral-900/50 border border-neutral-800/50 backdrop-blur">
          <div className="space-y-8">
            {/* Current CGPA */}
            <div className="text-center">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                {result.currentCGPA.toFixed(2)}
              </h2>
              <p className="text-neutral-400 mt-2">Current CGPA</p>
            </div>

            {/* Percentage */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                {result.university.conversionFormula(result.currentCGPA).toFixed(2)}%
              </h3>
              <p className="text-neutral-400 mt-2">Percentage Equivalent</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-lime-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(result.currentCGPA / 10) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between text-sm text-neutral-400">
                <span>0.00</span>
                <span>10.00</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export default function ResultPage({ params }: ResultPageProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ResultContent token={params.token} />
    </Suspense>
  );
} 