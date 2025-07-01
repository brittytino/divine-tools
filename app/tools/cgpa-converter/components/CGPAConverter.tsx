'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trash2, Plus, Calculator, AlertCircle } from 'lucide-react';
import { UNIVERSITIES } from '../constants';
import { University, Semester } from '../types';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function CGPAConverter() {
  const router = useRouter();
  const [university, setUniversity] = useState<University | null>(null);
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: uuidv4(), label: 'Semester 1', sgpa: '', credits: '', isCompleted: true }
  ]);
  const [error, setError] = useState<string | null>(null);

  const gradePoints = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'RA': 0,
    'SA': 0,
    'W': 0
  };

  const addSemester = () => {
    setSemesters([
      ...semesters,
      {
        id: uuidv4(),
        label: `Semester ${semesters.length + 1}`,
        sgpa: '',
        credits: '',
        isCompleted: true
      }
    ]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter(sem => sem.id !== id));
    }
  };

  const updateSemester = (id: string, field: keyof Semester, value: string | boolean) => {
    setSemesters(semesters.map(sem => {
      if (sem.id === id) {
        return { ...sem, [field]: value };
      }
      return sem;
    }));
  };

  const validateInputs = () => {
    for (const sem of semesters) {
      if (sem.isCompleted) {
        const sgpa = parseFloat(sem.sgpa);
        if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
          setError('SGPA must be between 0 and 10');
          return false;
        }
        const credits = parseInt(sem.credits);
        if (isNaN(credits) || credits < 1 || credits > 30) {
          setError('Credits must be between 1 and 30');
          return false;
        }
      }
    }
    return true;
  };

  const calculateCGPA = () => {
    if (!university) {
      setError('Please select a university');
      return;
    }

    if (!validateInputs()) {
      return;
    }

    setError(null);

    const completedSemesters = semesters.filter(sem => sem.isCompleted && sem.sgpa && sem.credits);
    const projectedSemesters = semesters.filter(sem => !sem.isCompleted && sem.sgpa && sem.credits);

    let totalCredits = 0;
    let totalGradePoints = 0;

    // Calculate CGPA for completed semesters
    completedSemesters.forEach(sem => {
      const credits = parseInt(sem.credits);
      const sgpa = parseFloat(sem.sgpa);
      totalCredits += credits;
      totalGradePoints += credits * sgpa;
    });

    const currentCGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

    // Calculate projected CGPA including future semesters
    let projectedTotalCredits = totalCredits;
    let projectedTotalGradePoints = totalGradePoints;

    projectedSemesters.forEach(sem => {
      const credits = parseInt(sem.credits);
      const sgpa = parseFloat(sem.sgpa);
      projectedTotalCredits += credits;
      projectedTotalGradePoints += credits * sgpa;
    });

    const projectedCGPA = projectedTotalCredits > 0 ? projectedTotalGradePoints / projectedTotalCredits : 0;

    // Store result in localStorage with token
    const token = uuidv4();
    const result = {
      university,
      currentCGPA: parseFloat(currentCGPA.toFixed(2)),
      projectedCGPA: projectedSemesters.length > 0 ? parseFloat(projectedCGPA.toFixed(2)) : null,
      semesters,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem(`cgpa_result_${token}`, JSON.stringify(result));
    router.push(`/tools/cgpa-converter/result/${token}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* University Selection */}
      <Card className="p-6 bg-neutral-900/50 border border-neutral-800/50 backdrop-blur">
        <div className="space-y-4">
          <Label className="text-lg font-medium text-white">Select Your University</Label>
          <Select
            value={university?.id || ''}
            onValueChange={(value) => {
              const selected = UNIVERSITIES.find(u => u.id === value);
              setUniversity(selected || null);
            }}
          >
            <SelectTrigger className="w-full h-12 bg-neutral-800/50 border-neutral-700/50 text-white">
              <SelectValue placeholder="Choose your university" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-800">
              {UNIVERSITIES.map((uni) => (
                <SelectItem
                  key={uni.id}
                  value={uni.id}
                  className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                >
                  {uni.name}
                  <p className="text-xs text-neutral-400">{uni.description}</p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {university && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-lime-400/10 border border-lime-400/20"
            >
              <p className="text-sm text-lime-400">{university.formulaDescription}</p>
            </motion.div>
          )}
        </div>
      </Card>

      {/* Semester Inputs */}
      <div className="space-y-4">
        {semesters.map((semester, index) => (
          <motion.div
            key={semester.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-neutral-900/50 border border-neutral-800/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-lg font-medium text-white">{semester.label}</Label>
                  {semesters.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      onClick={() => removeSemester(semester.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-neutral-400">SGPA (0-10)</Label>
                    <Input
                      type="number"
                      placeholder="Enter SGPA"
                      value={semester.sgpa}
                      onChange={(e) => updateSemester(semester.id, 'sgpa', e.target.value)}
                      className="bg-neutral-800/50 border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-lime-400/50 focus:ring-lime-400/20"
                      min="0"
                      max="10"
                      step="0.01"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-neutral-400">Credits (1-30)</Label>
                    <Input
                      type="number"
                      placeholder="Enter credits"
                      value={semester.credits}
                      onChange={(e) => updateSemester(semester.id, 'credits', e.target.value)}
                      className="bg-neutral-800/50 border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-lime-400/50 focus:ring-lime-400/20"
                      min="1"
                      max="30"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`completed-${semester.id}`}
                    checked={semester.isCompleted}
                    onChange={(e) => updateSemester(semester.id, 'isCompleted', e.target.checked)}
                    className="rounded border-neutral-700 bg-neutral-800/50 text-lime-400 focus:ring-lime-400/20"
                  />
                  <Label
                    htmlFor={`completed-${semester.id}`}
                    className="text-sm text-neutral-400 cursor-pointer hover:text-neutral-300"
                  >
                    This semester is completed
                  </Label>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add Semester Button */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={addSemester}
          className="border-neutral-800 text-white hover:bg-neutral-800/50 hover:border-lime-400/50 hover:text-lime-400 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Semester
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 text-red-400">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Calculate Button */}
      <div className="flex justify-center pt-4">
        <Button
          size="lg"
          onClick={calculateCGPA}
          className="bg-lime-400 hover:bg-lime-500 text-neutral-900 font-semibold h-12 px-8 shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate CGPA
        </Button>
      </div>
    </div>
  );
}
 