'use client';

import { useState } from 'react';
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
import { GradePrediction } from '../types';

export function GradePredictor() {
  const [currentTotal, setCurrentTotal] = useState<string>('');
  const [targetGrade, setTargetGrade] = useState<string>(GRADES[0].grade);
  const [prediction, setPrediction] = useState<GradePrediction | null>(null);

  const handlePredict = () => {
    const total = parseFloat(currentTotal);
    if (isNaN(total) || total < 0 || total > 100) {
      // TODO: Show error toast
      return;
    }

    const grade = GRADES.find(g => g.grade === targetGrade);
    if (!grade) return;

    const requiredMarks = grade.minMarks;
    const isAchievable = total <= requiredMarks;

    setPrediction({
      targetGrade,
      requiredMarks,
      currentTotal: total,
      isAchievable
    });
  };

  return (
    <Card className="p-6 bg-neutral-900/50 border border-neutral-800/50 backdrop-blur">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Grade Predictor</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-400">Current Total Marks</label>
            <Input
              type="number"
              min="0"
              max="100"
              value={currentTotal}
              onChange={(e) => setCurrentTotal(e.target.value)}
              placeholder="Enter your current total marks"
              className="w-full bg-neutral-800/50 border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-lime-400/50 focus:ring-lime-400/20"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-400">Target Grade</label>
            <Select
              value={targetGrade}
              onValueChange={setTargetGrade}
            >
              <SelectTrigger className="bg-neutral-800/50 border-neutral-700/50 text-white">
                <SelectValue placeholder="Select target grade" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800">
                {GRADES.map((grade) => (
                  <SelectItem
                    key={grade.grade}
                    value={grade.grade}
                    className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{grade.grade} Grade</span>
                      <span className="text-neutral-400">({grade.minMarks}-{grade.maxMarks})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handlePredict} 
            className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900 font-medium h-12 shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
          >
            Predict Required Marks
          </Button>
        </div>
      </div>

      {prediction && (
        <div className="mt-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">
              You need{' '}
              <span className={prediction.isAchievable ? 'text-lime-400' : 'text-red-400'}>
                {prediction.requiredMarks}/100
              </span>
            </h3>
            <p className="text-neutral-400">
              {prediction.isAchievable 
                ? `You can achieve ${prediction.targetGrade} grade!`
                : `${prediction.targetGrade} grade might be challenging to achieve`}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-neutral-400">
              <span>Current: {prediction.currentTotal}/100</span>
              <span>Required: {prediction.requiredMarks}/100</span>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${prediction.isAchievable ? 'bg-lime-400' : 'bg-red-400'}`}
                style={{ 
                  width: `${(prediction.currentTotal / prediction.requiredMarks) * 100}%`,
                  maxWidth: '100%'
                }}
              />
            </div>
          </div>

          <div className={`p-4 rounded-lg ${prediction.isAchievable ? 'bg-lime-400/10 border border-lime-400/20' : 'bg-red-400/10 border border-red-400/20'}`}>
            <p className={`text-sm ${prediction.isAchievable ? 'text-lime-400' : 'text-red-400'}`}>
              {prediction.isAchievable 
                ? 'Keep up the good work! You\'re on track to achieve your target grade.'
                : 'Don\'t give up! Consider setting an intermediate goal first.'}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
} 