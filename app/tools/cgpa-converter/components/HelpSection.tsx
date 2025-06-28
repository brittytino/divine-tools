'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { GRADES, UNIVERSITIES } from '../constants';

export function HelpSection() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <Card className="p-6 space-y-6 bg-neutral-900/50">
      <h2 className="text-2xl font-bold">Help & Information</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="universities">
          <AccordionTrigger>Tamil Nadu Universities Guide</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p className="text-neutral-400">
                Major universities in Tamil Nadu and their grading systems:
              </p>
              <div className="space-y-4">
                {UNIVERSITIES.map((uni) => (
                  <div key={uni.id} className="space-y-2 p-4 bg-black/20 rounded-lg">
                    <h3 className="font-semibold text-lime-400">{uni.name}</h3>
                    <p className="text-neutral-400">{uni.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="grading-system">
          <AccordionTrigger>Understanding the Grading System</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p className="text-neutral-400">
                Most Tamil Nadu universities follow a 10-point grading scale. Here's how it works:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {GRADES.map((grade) => (
                  <div
                    key={grade.grade}
                    className={`p-2 rounded ${grade.color} bg-opacity-10 border border-opacity-20 ${grade.color}`}
                  >
                    <div className="font-bold">{grade.grade} Grade</div>
                    <div className="text-sm text-neutral-400">
                      {grade.minMarks}-{grade.maxMarks} Marks
                    </div>
                    <div className="text-sm text-neutral-400">
                      {grade.points} Points
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="anna-specific">
          <AccordionTrigger>Anna University CBCS System</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p className="text-neutral-400">
                Anna University follows the Choice Based Credit System (CBCS):
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-400">
                <li>Formula: (CGPA - 0.75) × 10</li>
                <li>S Grade: Outstanding (91-100)</li>
                <li>A Grade: Excellent (81-90)</li>
                <li>B Grade: Very Good (71-80)</li>
                <li>C Grade: Good (61-70)</li>
                <li>D Grade: Average (51-60)</li>
                <li>E Grade: Pass (45-50)</li>
                <li>F Grade: Fail (Below 45)</li>
              </ul>
              <p className="text-sm text-neutral-500 mt-2">
                This system is followed by most engineering colleges affiliated with Anna University.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="autonomous">
          <AccordionTrigger>Autonomous & Arts Colleges</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Autonomous Engineering Colleges</h3>
                <p className="text-neutral-400">
                  Most follow Anna University pattern, but some have custom scales.
                  Check your college handbook for specific rules.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Arts & Science Colleges</h3>
                <p className="text-neutral-400">
                  Usually use direct conversion (CGPA × 10) with these classifications:
                </p>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Distinction: 75% and above</li>
                  <li>First Class: 60% - 74%</li>
                  <li>Second Class: 50% - 59%</li>
                  <li>Pass Class: 40% - 49%</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sgpa-calculation">
          <AccordionTrigger>How SGPA is Calculated</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p className="text-neutral-400">
                SGPA (Semester Grade Point Average) calculation:
              </p>
              <div className="p-4 bg-black rounded">
                <p className="font-mono">
                  SGPA = Σ(Credit × Grade Point) / Total Credits
                </p>
              </div>
              <p className="text-sm text-neutral-400 mt-2">
                Example calculation:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400">
                <li>Subject 1: 3 credits, A grade (9 points) = 27</li>
                <li>Subject 2: 4 credits, S grade (10 points) = 40</li>
                <li>Total = 67 points / 7 credits = 9.57 SGPA</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tips">
          <AccordionTrigger>Tips for Better Grades</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2 text-neutral-400">
              <li>Understand your university's specific grading pattern</li>
              <li>Keep track of your SGPA each semester</li>
              <li>Use the Grade Predictor to set realistic targets</li>
              <li>Focus on continuous learning rather than last-minute preparation</li>
              <li>Participate in all internal assessments</li>
              <li>Maintain good attendance (usually affects grades)</li>
              <li>Join study groups and share knowledge</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
} 