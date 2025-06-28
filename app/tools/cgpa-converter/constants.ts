import { Grade, University } from './types';

export const UNIVERSITIES: University[] = [
  {
    id: 'anna-university',
    name: 'Anna University',
    description: 'Premier technical university in Tamil Nadu following CBCS pattern',
    formulaDescription: 'CGPA is calculated as weighted average of SGPAs. Final percentage = CGPA × 10',
    defaultCreditsPerSem: 24,
    conversionFormula: (cgpa: number) => cgpa * 10,
    gradePoints: {
      'O': 10,  // 91-100
      'A+': 9,  // 81-90
      'A': 8,   // 71-80
      'B+': 7,  // 61-70
      'B': 6,   // 51-60
      'C': 5,   // <50
      'RA': 0,  // Reappearance
      'SA': 0,  // Shortage of Attendance
      'W': 0    // Withdrawal
    }
  },
  {
    id: 'bharathiar-university',
    name: 'Bharathiar University',
    description: 'State university in Coimbatore with direct percentage conversion',
    formulaDescription: 'CGPA is calculated as weighted average of SGPAs. Final percentage = CGPA × 10',
    defaultCreditsPerSem: 24,
    conversionFormula: (cgpa: number) => cgpa * 10,
    gradePoints: {
      'O': 10,   // 90-100
      'A+': 9,   // 80-89
      'A': 8,    // 70-79
      'B+': 7,   // 60-69
      'B': 6,    // 50-59
      'C': 5,    // 40-49
      'RA': 0,   // Reappearance
      'SA': 0,   // Shortage of Attendance
      'W': 0     // Withdrawal
    }
  },
  {
    id: 'madras-university',
    name: 'University of Madras',
    description: 'One of the oldest universities in India with standard grading system',
    formulaDescription: 'CGPA is calculated as weighted average of SGPAs. Final percentage = CGPA × 10',
    defaultCreditsPerSem: 24,
    conversionFormula: (cgpa: number) => cgpa * 10,
    gradePoints: {
      'O': 10,   // 90-100
      'A+': 9,   // 80-89
      'A': 8,    // 70-79
      'B+': 7,   // 60-69
      'B': 6,    // 50-59
      'C': 5,    // 40-49
      'RA': 0,   // Reappearance
      'SA': 0,   // Shortage of Attendance
      'W': 0     // Withdrawal
    }
  },
  {
    id: 'periyar-university',
    name: 'Periyar University',
    description: 'Periyar University and its affiliated colleges',
    formulaDescription: 'Percentage = CGPA × 10',
    conversionFormula: (cgpa: number) => cgpa * 10,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'O': 10,   // 90-100
      'A+': 9,   // 80-89
      'A': 8,    // 70-79
      'B+': 7,   // 60-69
      'B': 6,    // 50-59
      'C': 5,    // 40-49
      'RA': 0    // Reappearance
    }
  },
  {
    id: 'autonomous-anna',
    name: 'Autonomous Colleges (Anna Pattern)',
    description: 'Uses Anna University formula: (CGPA - 0.75) × 10',
    formulaDescription: 'Percentage = (CGPA - 0.75) × 10',
    conversionFormula: (cgpa: number) => (cgpa - 0.75) * 10,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'RA': 0
    }
  },
  {
    id: 'arts-science',
    name: 'Arts & Science Colleges',
    description: 'Madras, Bharathiar, Bharathidasan Universities - Direct conversion: CGPA × 10',
    formulaDescription: 'Percentage = CGPA × 10',
    conversionFormula: (cgpa: number) => cgpa * 10,
    defaultCreditsPerSem: 25,
    gradePoints: {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'RA': 0
    }
  },
  {
    id: 'srm-vit',
    name: 'SRM / VIT / Sathyabama',
    description: 'Direct scale conversion: CGPA × 10',
    formulaDescription: 'Percentage = CGPA × 10',
    conversionFormula: (cgpa: number) => cgpa * 10,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'S': 10,
      'A': 9,
      'B': 8,
      'C': 7,
      'D': 6,
      'E': 5,
      'F': 0
    }
  },
  {
    id: 'annamalai',
    name: 'Annamalai University',
    description: 'Direct percentage conversion for CBCS courses',
    formulaDescription: 'Percentage = CGPA × 10',
    conversionFormula: (cgpa: number) => cgpa * 10,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'RA': 0
    }
  },
  {
    id: 'amrita',
    name: 'Amrita Vishwa Vidyapeetham',
    description: 'Direct scale: CGPA × 10',
    formulaDescription: 'Percentage = CGPA × 10',
    conversionFormula: (cgpa: number) => cgpa * 10,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'F': 0
    }
  },
  {
    id: 'psg-autonomous',
    name: 'PSG Tech & Similar Autonomous',
    description: 'Modified Anna pattern: (CGPA - 0.5) × 10',
    formulaDescription: 'Percentage = (CGPA - 0.5) × 10',
    conversionFormula: (cgpa: number) => (cgpa - 0.5) * 10,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'RA': 0
    }
  },
  {
    id: 'custom',
    name: 'Other Universities / Custom',
    description: 'Default scale - You can customize this in settings',
    formulaDescription: 'Percentage = CGPA × 9.5',
    conversionFormula: (cgpa: number) => cgpa * 9.5,
    defaultCreditsPerSem: 24,
    gradePoints: {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'F': 0
    }
  }
];

export const GRADES: Grade[] = [
  {
    grade: 'O',
    points: 10,
    minMarks: 91,
    maxMarks: 100,
    color: 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30'
  },
  {
    grade: 'A+',
    points: 9,
    minMarks: 81,
    maxMarks: 90,
    color: 'bg-lime-400/20 text-lime-400 border-lime-400/30'
  },
  {
    grade: 'A',
    points: 8,
    minMarks: 71,
    maxMarks: 80,
    color: 'bg-green-400/20 text-green-400 border-green-400/30'
  },
  {
    grade: 'B+',
    points: 7,
    minMarks: 61,
    maxMarks: 70,
    color: 'bg-teal-400/20 text-teal-400 border-teal-400/30'
  },
  {
    grade: 'B',
    points: 6,
    minMarks: 51,
    maxMarks: 60,
    color: 'bg-cyan-400/20 text-cyan-400 border-cyan-400/30'
  },
  {
    grade: 'C',
    points: 5,
    minMarks: 45,
    maxMarks: 50,
    color: 'bg-blue-400/20 text-blue-400 border-blue-400/30'
  },
  {
    grade: 'RA',
    points: 0,
    minMarks: 0,
    maxMarks: 44,
    color: 'bg-red-400/20 text-red-400 border-red-400/30'
  }
];

export const ACHIEVEMENTS = [
  {
    minPercentage: 75,
    title: '🏆 Distinction',
    rank: 'Top 10%',
    message: 'Outstanding performance! Keep up the excellent work!',
    color: 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30'
  },
  {
    minPercentage: 60,
    title: '🌟 First Class',
    rank: 'Top 30%',
    message: 'Great achievement! You\'re doing really well!',
    color: 'bg-lime-400/20 text-lime-400 border-lime-400/30'
  },
  {
    minPercentage: 50,
    title: '✨ Second Class',
    rank: 'Pass',
    message: 'You\'ve passed! Keep pushing to improve further!',
    color: 'bg-blue-400/20 text-blue-400 border-blue-400/30'
  }
];

export const MOTIVATIONAL_QUOTES = [
  "Success is not final, failure is not fatal: it's the courage to continue that counts.",
  "Your CGPA doesn't define you, but your dedication will refine you.",
  "Every expert was once a beginner. Keep going!",
  "Small progress is still progress. Keep pushing!",
  "The future belongs to those who believe in the beauty of their dreams."
];

export const LOCAL_STORAGE_KEY = 'divine-cgpa-converter-data';

export const GRADE_SCALE = {
  O: { min: 91, max: 100, points: 10 },
  'A+': { min: 81, max: 90, points: 9 },
  A: { min: 71, max: 80, points: 8 },
  'B+': { min: 61, max: 70, points: 7 },
  B: { min: 50, max: 60, points: 6 },
  RA: { min: 0, max: 49, points: 0 }
}; 