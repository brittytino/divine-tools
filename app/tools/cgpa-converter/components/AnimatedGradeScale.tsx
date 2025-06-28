'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GRADES } from '../constants';

interface Props {
  currentGrade: string | null;
}

export function AnimatedGradeScale({ currentGrade }: Props) {
  return (
    <Card className="p-6 bg-neutral-900/50">
      <h2 className="text-2xl font-bold mb-6">Grade Scale</h2>
      
      <div className="space-y-4">
        {GRADES.map((grade) => (
          <div key={grade.grade} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{grade.grade} Grade</span>
              <span className="text-neutral-400">
                {grade.minMarks}-{grade.maxMarks} Marks
              </span>
            </div>
            
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${grade.color}`}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>

            {currentGrade === grade.grade && (
              <motion.div
                className="absolute -right-2 -top-2 w-4 h-4 bg-lime-400 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 15
                }}
              />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
} 