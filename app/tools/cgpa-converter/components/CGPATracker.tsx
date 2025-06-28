'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Semester } from '../types';
import { LOCAL_STORAGE_KEY } from '../constants';
import { X } from 'lucide-react';

export function CGPATracker() {
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [newSGPA, setNewSGPA] = useState<string>('');
  const [overallCGPA, setOverallCGPA] = useState<number | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const { semesters: savedSemesters } = JSON.parse(savedData);
      if (savedSemesters) setSemesters(savedSemesters);
    }
  }, []);

  const handleAddSemester = () => {
    const sgpa = parseFloat(newSGPA);
    if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
      // TODO: Show error toast
      return;
    }

    const semester: Semester = {
      id: Date.now().toString(),
      number: semesters.length + 1,
      sgpa
    };

    const updatedSemesters = [...semesters, semester];
    setSemesters(updatedSemesters);
    setNewSGPA('');

    // Save to localStorage
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      ...savedData,
      semesters: updatedSemesters
    }));

    calculateCGPA(updatedSemesters);
  };

  const handleRemoveSemester = (id: string) => {
    const updatedSemesters = semesters.filter(s => s.id !== id)
      .map((s, idx) => ({ ...s, number: idx + 1 }));
    
    setSemesters(updatedSemesters);

    // Save to localStorage
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      ...savedData,
      semesters: updatedSemesters
    }));

    calculateCGPA(updatedSemesters);
  };

  const calculateCGPA = (semesterList: Semester[]) => {
    if (semesterList.length === 0) {
      setOverallCGPA(null);
      return;
    }

    const totalSGPA = semesterList.reduce((sum, sem) => sum + sem.sgpa, 0);
    const calculatedCGPA = totalSGPA / semesterList.length;
    setOverallCGPA(calculatedCGPA);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">CGPA Tracker</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input
              type="number"
              min="0"
              max="10"
              step="0.01"
              value={newSGPA}
              onChange={(e) => setNewSGPA(e.target.value)}
              placeholder="Enter Semester GPA"
              className="flex-1"
            />
            <Button onClick={handleAddSemester}>Add Semester</Button>
          </div>

          {semesters.length > 0 && (
            <div className="space-y-2">
              {semesters.map((semester) => (
                <div key={semester.id} className="flex items-center gap-4 p-2 rounded bg-neutral-900">
                  <span className="flex-1">Semester {semester.number}</span>
                  <span className="w-24 text-center">{semester.sgpa.toFixed(2)} GPA</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveSemester(semester.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {overallCGPA !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-4xl font-bold text-lime-400">
            {overallCGPA.toFixed(2)}
          </h3>
          <p className="text-neutral-400 mt-2">
            Cumulative Grade Point Average
          </p>
          <p className="text-sm text-neutral-500 mt-1">
            Based on {semesters.length} semester{semesters.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </Card>
  );
} 