import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator, Book, School, Star } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/sections/Navbar';

export const metadata: Metadata = {
  title: 'How CGPA Calculation Works | Divine Tools',
  description: 'Learn how CGPA is calculated and converted to percentage for different Tamil Nadu universities.',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link href="/tools/cgpa-converter">
            <Button variant="ghost" className="text-neutral-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Calculator
            </Button>
          </Link>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Understanding CGPA Calculation</h1>
              <p className="text-xl text-neutral-400">
                A comprehensive guide to how CGPA works in Indian universities
              </p>
            </div>

            <div className="grid gap-8">
              {/* What is CGPA */}
              <Card className="p-8 bg-neutral-900/50 border border-neutral-800">
                <div className="flex items-start gap-6">
                  <div className="bg-lime-400/10 p-3 rounded-lg">
                    <Book className="w-6 h-6 text-lime-400" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">What is CGPA?</h2>
                    <div className="space-y-2 text-neutral-300">
                      <p>
                        CGPA (Cumulative Grade Point Average) is the average of all your SGPA 
                        (Semester Grade Point Average) values up to your most recent semester.
                      </p>
                      <p>
                        It provides a comprehensive measure of your academic performance 
                        throughout your course duration.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* How is it Calculated */}
              <Card className="p-8 bg-neutral-900/50 border border-neutral-800">
                <div className="flex items-start gap-6">
                  <div className="bg-lime-400/10 p-3 rounded-lg">
                    <Calculator className="w-6 h-6 text-lime-400" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">How is CGPA Calculated?</h2>
                    <div className="space-y-4 text-neutral-300">
                      <div>
                        <h3 className="font-medium mb-2">Standard Formula</h3>
                        <div className="bg-neutral-800 p-4 rounded-lg font-mono">
                          CGPA = (Sum of all SGPA × Credits) / Total Credits
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Simplified Formula (Equal Credits)</h3>
                        <div className="bg-neutral-800 p-4 rounded-lg font-mono">
                          CGPA = (Sum of all SGPA) / Number of Semesters
                        </div>
                      </div>
                      <p>
                        Most colleges in Tamil Nadu use the simplified formula as credits 
                        are typically equal across semesters (usually 24-25 credits per semester).
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Real-world Usage */}
              <Card className="p-8 bg-neutral-900/50 border border-neutral-800">
                <div className="flex items-start gap-6">
                  <div className="bg-lime-400/10 p-3 rounded-lg">
                    <School className="w-6 h-6 text-lime-400" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Real-world Usage</h2>
                    <div className="space-y-4 text-neutral-300">
                      <p>
                        Students typically need to calculate their CGPA for:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Tracking academic progress</li>
                        <li>Job applications and internships</li>
                        <li>Higher education applications</li>
                        <li>Scholarship applications</li>
                      </ul>
                      <p>
                        Our calculator helps you track both your current CGPA and project 
                        future CGPA based on expected performance.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tips for Using the Calculator */}
              <Card className="p-8 bg-neutral-900/50 border border-neutral-800">
                <div className="flex items-start gap-6">
                  <div className="bg-lime-400/10 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-lime-400" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Tips for Using the Calculator</h2>
                    <div className="space-y-4 text-neutral-300">
                      <div className="space-y-2">
                        <h3 className="font-medium">For Current CGPA:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Enter SGPA for all completed semesters</li>
                          <li>Mark them as "Completed" in the status dropdown</li>
                          <li>Use the exact SGPA as shown in your marksheet</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">For Projected CGPA:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Add future semesters using the "Add Semester" button</li>
                          <li>Enter your expected SGPA</li>
                          <li>Mark them as "Projected" in the status dropdown</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center pt-8">
              <Link href="/tools/cgpa-converter">
                <Button className="bg-lime-400 text-black hover:bg-lime-500" size="lg">
                  Try the Calculator Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 