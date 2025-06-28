'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GRADES } from '../constants';
import { Subject } from '../types';
import { LOCAL_STORAGE_KEY } from '../constants';
import { X } from 'lucide-react';

export function SGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [newSubject, setNewSubject] = useState<Subject>({
    id: '',
    name: '',
    credits: 3,
    grade: GRADES[0].grade
  });
  const [sgpa, setSGPA] = useState<number | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const { subjects: savedSubjects } = JSON.parse(savedData);
      if (savedSubjects) setSubjects(savedSubjects);
    }
  }, []);

  const handleAddSubject = () => {
    if (!newSubject.name.trim()) {
      // TODO: Show error toast
      return;
    }

    const subject: Subject = {
      ...newSubject,
      id: Date.now().toString()
    };

    const updatedSubjects = [...subjects, subject];
    setSubjects(updatedSubjects);
    setNewSubject({
      id: '',
      name: '',
      credits: 3,
      grade: GRADES[0].grade
    });

    // Save to localStorage
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      ...savedData,
      subjects: updatedSubjects
    }));
  };

  const handleRemoveSubject = (id: string) => {
    const updatedSubjects = subjects.filter(s => s.id !== id);
    setSubjects(updatedSubjects);

    // Save to localStorage
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      ...savedData,
      subjects: updatedSubjects
    }));
  };

  const calculateSGPA = () => {
    if (subjects.length === 0) return;

    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
      const grade = GRADES.find(g => g.grade === subject.grade);
      if (!grade) return;

      totalPoints += grade.points * subject.credits;
      totalCredits += subject.credits;
    });

    const calculatedSGPA = totalPoints / totalCredits;
    setSGPA(calculatedSGPA);
  };

  return (
    <Card className="p-6 bg-neutral-900/50 border border-neutral-800/50 backdrop-blur">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">SGPA Calculator</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input
              value={newSubject.name}
              onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
              placeholder="Subject Name"
              className="flex-1 bg-neutral-800/50 border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-lime-400/50 focus:ring-lime-400/20"
            />
            
            <Input
              type="number"
              min="1"
              max="6"
              value={newSubject.credits}
              onChange={(e) => setNewSubject({ ...newSubject, credits: parseInt(e.target.value) })}
              placeholder="Credits"
              className="w-20 bg-neutral-800/50 border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-lime-400/50 focus:ring-lime-400/20"
            />

            <Select
              value={newSubject.grade}
              onValueChange={(value) => setNewSubject({ ...newSubject, grade: value })}
            >
              <SelectTrigger className="w-24 bg-neutral-800/50 border-neutral-700/50 text-white">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800">
                {GRADES.map((grade) => (
                  <SelectItem
                    key={grade.grade}
                    value={grade.grade}
                    className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                  >
                    {grade.grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              onClick={handleAddSubject}
              className="bg-lime-400 hover:bg-lime-500 text-neutral-900 font-medium"
            >
              Add
            </Button>
          </div>

          {subjects.length > 0 && (
            <div className="space-y-2">
              {subjects.map((subject) => (
                <div 
                  key={subject.id} 
                  className="flex items-center gap-4 p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50 backdrop-blur"
                >
                  <span className="flex-1 text-white">{subject.name}</span>
                  <span className="w-20 text-center text-neutral-400">{subject.credits} credits</span>
                  <span className="w-24 text-center text-lime-400">{subject.grade} Grade</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveSubject(subject.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <Button 
                onClick={calculateSGPA} 
                className="w-full mt-6 bg-lime-400 hover:bg-lime-500 text-neutral-900 font-medium h-12 shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
              >
                Calculate SGPA
              </Button>
            </div>
          )}
        </div>
      </div>

      {sgpa !== null && (
        <div className="mt-8 text-center space-y-2">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            {sgpa.toFixed(2)}
          </h3>
          <p className="text-neutral-400">
            Semester Grade Point Average
          </p>
          <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden mt-4">
            <div 
              className="h-full bg-lime-400"
              style={{ width: `${(sgpa / 10) * 100}%` }}
            />
          </div>
        </div>
      )}
    </Card>
  );
} 