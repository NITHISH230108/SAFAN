import { LifestyleAnswers, StudentProfile, RoommateCandidate, CompatibilityBreakdown } from '../types';

export const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  name: 'Rahul Sharma',
  regNo: '22BCSE1048',
  department: 'Computer Science and Engineering',
  year: '2nd Year',
  hostelName: 'Kaveri Boys Hostel (Block B)',
};

export const DEFAULT_LIFESTYLE_ANSWERS: LifestyleAnswers = {
  sleepTime: '11 PM – 12 AM',
  wakeTime: '6 AM – 7 AM',
  studyTime: 'Evening',
  studyEnv: 'Mostly quiet',
  cleanliness: 'Very important',
  noiseLevel: 'Low noise',
  foodPref: 'Important',
  dailyRoutine: 'Mostly regular',
};

// Target Candidate as requested: Arun Kumar (CSE, 2nd Year, 87% compatible demo)
export const PRIMARY_CANDIDATE: RoommateCandidate = {
  id: 'arun-kumar',
  name: 'Arun Kumar',
  regNo: '22BCSE1019',
  department: 'CSE',
  year: '2nd Year',
  hostelName: 'Kaveri Boys Hostel (Block B)',
  roomNo: 'B-304',
  compatibility: 87,
  avatarSeed: 'Arun',
  answers: {
    sleepTime: '11 PM – 12 AM',
    wakeTime: '7 AM – 8 AM',
    studyTime: 'Evening',
    studyEnv: 'Mostly quiet',
    cleanliness: 'Important',
    noiseLevel: 'Low noise',
    foodPref: 'Important',
    dailyRoutine: 'Mostly regular',
  },
  highlights: [
    'Similar sleep schedule',
    'Similar study preference',
    'Similar cleanliness preference',
    'Similar noise preference',
  ],
  reasons: [
    'Both students prefer studying during the evening.',
    'Both prefer a relatively quiet room.',
    'Their cleanliness preferences are similar.',
    'Their daily routines have a high level of similarity.',
  ],
};

export const ADDITIONAL_CANDIDATES: RoommateCandidate[] = [
  PRIMARY_CANDIDATE,
  {
    id: 'karthik-raj',
    name: 'Karthik Raj',
    regNo: '22BIT1022',
    department: 'Information Technology',
    year: '2nd Year',
    hostelName: 'Kaveri Boys Hostel (Block B)',
    roomNo: 'B-211',
    compatibility: 82,
    avatarSeed: 'Karthik',
    answers: {
      sleepTime: '11 PM – 12 AM',
      wakeTime: '6 AM – 7 AM',
      studyTime: 'Night',
      studyEnv: 'Mostly quiet',
      cleanliness: 'Very important',
      noiseLevel: 'Moderate noise',
      foodPref: 'Neutral',
      dailyRoutine: 'Mostly regular',
    },
    highlights: [
      'Synchronized wake-up routine',
      'High cleanliness standard',
      'Compatible night study habits',
    ],
    reasons: [
      'Both maintain consistent early morning wake cycles.',
      'Shared high value placed on room sanitation and tidiness.',
      'Willing to accommodate moderate ambient study audio with headphones.',
    ],
  },
  {
    id: 'sanjay-verma',
    name: 'Sanjay Verma',
    regNo: '22BME1034',
    department: 'Mechanical Engg',
    year: '3rd Year',
    hostelName: 'Godavari Boys Hostel (Block A)',
    roomNo: 'A-108',
    compatibility: 78,
    avatarSeed: 'Sanjay',
    answers: {
      sleepTime: '10 PM – 11 PM',
      wakeTime: '6 AM – 7 AM',
      studyTime: 'Morning',
      studyEnv: 'Very quiet',
      cleanliness: 'Important',
      noiseLevel: 'Very quiet',
      foodPref: 'Very important',
      dailyRoutine: 'Very regular',
    },
    highlights: [
      'Disciplined daily sleep-wake routine',
      'Prefers silent study atmosphere',
      'Strict cleanliness standards',
    ],
    reasons: [
      'Shares a structured daily routine and predictable timetable.',
      'Prefers a calm, non-distracting hostel bedroom space.',
    ],
  },
  {
    id: 'vijay-shankar',
    name: 'Vijay Shankar',
    regNo: '23BEC1088',
    department: 'ECE',
    year: '1st Year',
    hostelName: 'Narmada Boys Hostel (Block C)',
    roomNo: 'C-415',
    compatibility: 74,
    avatarSeed: 'Vijay',
    answers: {
      sleepTime: 'After 12 AM',
      wakeTime: '7 AM – 8 AM',
      studyTime: 'Night',
      studyEnv: 'Some background noise',
      cleanliness: 'Important',
      noiseLevel: 'Moderate noise',
      foodPref: 'Important',
      dailyRoutine: 'Flexible',
    },
    highlights: [
      'Flexible routine for project deadlines',
      'Cooperative dining preferences',
      'Comfortable with late study hours',
    ],
    reasons: [
      'Flexible timetable balances with occasional late-night academic assignments.',
      'Similar food habits simplify mess and food delivery sharing.',
    ],
  },
];

export const RECENT_MATCHES_TABLE = [
  { student: 'Arun', match: 'Karthik', compatibility: 87, dept: 'CSE & IT', status: 'High Compatibility' },
  { student: 'Rahul', match: 'Sanjay', compatibility: 82, dept: 'CSE & Mech', status: 'Good Compatibility' },
  { student: 'Vijay', match: 'Ajay', compatibility: 78, dept: 'ECE & Civil', status: 'Moderate Match' },
  { student: 'Dinesh', match: 'Praveen', compatibility: 84, dept: 'ECE & CSE', status: 'High Compatibility' },
  { student: 'Harish', match: 'Mohan', compatibility: 75, dept: 'Mech & Auto', status: 'Moderate Match' },
];

/**
 * Prototype Compatibility Calculation Function
 * Computes category percentages and applies the weighted rubric:
 * - Sleep Schedule: 20%
 * - Study Style: 20%
 * - Cleanliness: 20%
 * - Noise Preference: 15%
 * - Food Preference: 10%
 * - Daily Routine: 15%
 */
export function calculateCompatibility(
  studentAnswers: LifestyleAnswers,
  targetCandidate: RoommateCandidate = PRIMARY_CANDIDATE
): {
  breakdown: CompatibilityBreakdown;
  score: number;
  reasons: string[];
} {
  const target = targetCandidate.answers;

  // Sleep Score (Sleep time + wake time match)
  const sleepTimeDiff = studentAnswers.sleepTime === target.sleepTime ? 100 : 80;
  const wakeTimeDiff = studentAnswers.wakeTime === target.wakeTime ? 100 : 80;
  const sleepScore = Math.round((sleepTimeDiff + wakeTimeDiff) / 2);

  // Study Score (Study time + Study env)
  const studyTimeDiff = studentAnswers.studyTime === target.studyTime ? 95 : 75;
  const studyEnvDiff = studentAnswers.studyEnv === target.studyEnv ? 95 : 75;
  const studyScore = Math.round((studyTimeDiff + studyEnvDiff) / 2);

  // Cleanliness Score
  let cleanlinessScore = 85;
  if (studentAnswers.cleanliness === target.cleanliness) {
    cleanlinessScore = 95;
  } else if (
    (studentAnswers.cleanliness === 'Very important' && target.cleanliness === 'Important') ||
    (studentAnswers.cleanliness === 'Important' && target.cleanliness === 'Very important')
  ) {
    cleanlinessScore = 88;
  } else {
    cleanlinessScore = 70;
  }

  // Noise Preference Score
  let noiseScore = 80;
  if (studentAnswers.noiseLevel === target.noiseLevel) {
    noiseScore = 92;
  } else if (
    (studentAnswers.noiseLevel === 'Very quiet' && target.noiseLevel === 'Low noise') ||
    (studentAnswers.noiseLevel === 'Low noise' && target.noiseLevel === 'Very quiet')
  ) {
    noiseScore = 85;
  } else {
    noiseScore = 72;
  }

  // Food Preference Score
  let foodScore = 82;
  if (studentAnswers.foodPref === target.foodPref) {
    foodScore = 90;
  } else {
    foodScore = 76;
  }

  // Daily Routine Score
  let routineScore = 87;
  if (studentAnswers.dailyRoutine === target.dailyRoutine) {
    routineScore = 92;
  } else {
    routineScore = 78;
  }

  // Apply weights
  // Sleep 20%, Study 20%, Cleanliness 20%, Noise 15%, Food 10%, Routine 15%
  const weightedTotal =
    sleepScore * 0.2 +
    studyScore * 0.2 +
    cleanlinessScore * 0.2 +
    noiseScore * 0.15 +
    foodScore * 0.1 +
    routineScore * 0.15;

  const overallScore = Math.round(weightedTotal);

  // Generate explainable reasons
  const reasons: string[] = [];
  if (studentAnswers.studyTime === target.studyTime) {
    reasons.push(`Both students prefer studying during the ${studentAnswers.studyTime.toLowerCase()}.`);
  } else {
    reasons.push(`Complementary study hours minimize shared desk congestion.`);
  }

  if (studentAnswers.noiseLevel === target.noiseLevel || (studentAnswers.noiseLevel.includes('quiet') && target.noiseLevel.includes('quiet'))) {
    reasons.push('Both prefer a relatively quiet room environment for concentration.');
  } else {
    reasons.push('Sound tolerance profiles are within acceptable hostel thresholds.');
  }

  if (cleanlinessScore >= 85) {
    reasons.push('Their cleanliness preferences are similar, ensuring good hygiene balance.');
  } else {
    reasons.push('Both agree on basic hostel room upkeep norms.');
  }

  if (routineScore >= 85) {
    reasons.push('Their daily routines have a high level of similarity and predictability.');
  } else {
    reasons.push('Flexible daily routines provide mutual scheduling adaptability.');
  }

  return {
    breakdown: {
      sleepScore,
      studyScore,
      cleanlinessScore,
      noiseScore,
      foodScore,
      routineScore,
      overallScore,
    },
    score: overallScore,
    reasons,
  };
}
