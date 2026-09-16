export interface StudentProfile {
  name: string;
  regNo: string;
  department: string;
  year: string;
  hostelName: string;
}

export interface LifestyleAnswers {
  sleepTime: 'Before 10 PM' | '10 PM – 11 PM' | '11 PM – 12 AM' | 'After 12 AM';
  wakeTime: 'Before 6 AM' | '6 AM – 7 AM' | '7 AM – 8 AM' | 'After 8 AM';
  studyTime: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  studyEnv: 'Very quiet' | 'Mostly quiet' | 'Some background noise' | 'Noise does not matter';
  cleanliness: 'Very important' | 'Important' | 'Neutral' | 'Not very important';
  noiseLevel: 'Very quiet' | 'Low noise' | 'Moderate noise' | 'Noise is okay';
  foodPref: 'Very important' | 'Important' | 'Neutral' | 'Not important';
  dailyRoutine: 'Very regular' | 'Mostly regular' | 'Flexible' | 'Very flexible';
}

export interface CompatibilityBreakdown {
  sleepScore: number;
  studyScore: number;
  cleanlinessScore: number;
  noiseScore: number;
  foodScore: number;
  routineScore: number;
  overallScore: number;
}

export interface RoommateCandidate {
  id: string;
  name: string;
  regNo: string;
  department: string;
  year: string;
  hostelName: string;
  roomNo: string;
  compatibility: number;
  avatarSeed: string;
  answers: LifestyleAnswers;
  highlights: string[];
  reasons: string[];
}

export type ActivePage = 'home' | 'profile' | 'questionnaire' | 'result' | 'dashboard' | 'about';
