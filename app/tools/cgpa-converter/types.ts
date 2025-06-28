export interface University {
  id: string;
  name: string;
  description: string;
  formulaDescription: string;
  conversionFormula: (cgpa: number) => number;
  defaultCreditsPerSem: number;
  gradePoints: {
    [key: string]: number;
  };
}

export type Grade = {
  grade: string;
  points: number;
  minMarks: number;
  maxMarks: number;
  color: string;
};

export type Subject = {
  id: string;
  name: string;
  credits: number;
  grade: string;
};

export interface Semester {
  id: string;
  label: string;
  sgpa: string;
  credits: string;
  isCompleted: boolean;
}

export interface CGPAResult {
  university: University;
  currentCGPA: number;
  projectedCGPA: number | null;
}

export type GradePrediction = {
  targetGrade: string;
  requiredMarks: number;
  currentTotal: number;
  isAchievable: boolean;
};

export type SavedData = {
  lastCGPA?: number;
  lastUniversity?: string;
  semesters?: Semester[];
  subjects?: Subject[];
}; 