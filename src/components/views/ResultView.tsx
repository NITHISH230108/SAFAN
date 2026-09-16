import React, { useState } from 'react';
import { CompatibilityBreakdown, LifestyleAnswers, RoommateCandidate, StudentProfile } from '../../types';
import { 
  PRIMARY_CANDIDATE, 
  ADDITIONAL_CANDIDATES, 
  calculateCompatibility 
} from '../../data/mockData';
import { 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  FileText, 
  UserCheck, 
  Sliders, 
  Sparkles, 
  X,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';
import { PrototypeLimitation } from '../PrototypeLimitation';

interface ResultViewProps {
  profile: StudentProfile;
  answers: LifestyleAnswers;
  onRetake: () => void;
  onGoToDashboard: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  profile,
  answers,
  onRetake,
  onGoToDashboard,
}) => {
  const [selectedCandidate, setSelectedCandidate] = useState<RoommateCandidate>(PRIMARY_CANDIDATE);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  // Compute calculated values based on current student answers vs candidate
  const computed = calculateCompatibility(answers, selectedCandidate);
  const { breakdown, score, reasons } = computed;

  // SVG circle calculations for large circular score
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const categories = [
    { name: 'Sleep Schedule', score: breakdown.sleepScore, weight: '20%', color: 'bg-indigo-600', textColor: 'text-indigo-600', desc: 'Sleep and wake synchronization' },
    { name: 'Study Style', score: breakdown.studyScore, weight: '20%', color: 'bg-blue-600', textColor: 'text-blue-600', desc: 'Timing and environment quietness' },
    { name: 'Cleanliness', score: breakdown.cleanlinessScore, weight: '20%', color: 'bg-emerald-600', textColor: 'text-emerald-600', desc: 'Tidiness and hygiene standards' },
    { name: 'Noise Preference', score: breakdown.noiseScore, weight: '15%', color: 'bg-amber-600', textColor: 'text-amber-600', desc: 'Room volume and conversation levels' },
    { name: 'Food Preference', score: breakdown.foodScore, weight: '10%', color: 'bg-rose-600', textColor: 'text-rose-600', desc: 'Mess timing and dietary preferences' },
    { name: 'Daily Routine', score: breakdown.routineScore, weight: '15%', color: 'bg-violet-600', textColor: 'text-violet-600', desc: 'Predictability and scheduling flex' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-10">
      {/* Step Indicator */}
      <div>
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span className="text-indigo-600 font-bold">Step 4 of 4: Match Result & Explanation</span>
          <span className="text-emerald-600 font-bold">✓ Calculation Complete</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full rounded-full transition-all duration-500 w-full"></div>
        </div>
      </div>

      {/* Main Title & Mandatory Disclaimer */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Your Roommate Compatibility Result
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Demo compatibility score based on lifestyle preferences.
        </p>

        {/* Prototype Result — For Demonstration Only Notice */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Prototype Result — For Demonstration Only</span>
        </div>
      </div>

      {/* Hero Circular Score & Overview Card */}
      <div id="matching-score-card" className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Big Circular Score */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Background SVG Gauge */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 170 170">
                <circle
                  cx="85"
                  cy="85"
                  r={radius}
                  className="text-slate-100"
                  strokeWidth="14"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="85"
                  cy="85"
                  r={radius}
                  className="text-indigo-600 transition-all duration-1000 ease-out"
                  strokeWidth="14"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>

              {/* Text inside circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {score}%
                </span>
                <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase mt-1">
                  Compatible
                </span>
                <span className="text-[10px] text-slate-400 font-medium mt-1">
                  Weighted Score
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center mt-3 max-w-xs leading-relaxed">
              Calculated using the prototype multi-category weighting formula against {selectedCandidate.name}.
            </p>
          </div>

          {/* Right Column: Key Metrics & Student Summary */}
          <div className="lg:col-span-7 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8 pt-6 lg:pt-0">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Evaluation Pair</span>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-sm font-bold text-indigo-700">
                    👨‍🎓
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-sm font-bold text-blue-700">
                    🧑‍💻
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">
                    {profile.name || 'Rahul Sharma'} & {selectedCandidate.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {profile.hostelName || 'Kaveri Boys Hostel (Block B)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Status Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-400 font-medium block">Match Level</span>
                <span className="text-xs font-bold text-emerald-700">High Synergy</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-400 font-medium block">Top Factor</span>
                <span className="text-xs font-bold text-slate-800">Sleep & Study</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-400 font-medium block">Conflict Risk</span>
                <span className="text-xs font-bold text-slate-800">Low (12%)</span>
              </div>
            </div>

            {/* Candidate Selector Pill */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Compare with another hostel candidate:
              </label>
              <div className="flex flex-wrap gap-2">
                {ADDITIONAL_CANDIDATES.map((cand) => (
                  <button
                    key={cand.id}
                    onClick={() => setSelectedCandidate(cand)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCandidate.id === cand.id
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cand.name} ({cand.compatibility}%)
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: Compatibility Breakdown */}
      <section id="compatibility-breakdown-section" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Compatibility Category Breakdown
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Individual lifestyle dimensions measured and weighted according to the prototype formula.
            </p>
          </div>
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start sm:self-center">
            Prototype Weighted Formula
          </span>
        </div>

        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">{cat.name}</span>
                  <span className="text-xs text-slate-400">({cat.desc})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Weight {cat.weight}
                  </span>
                  <span className={`font-extrabold ${cat.textColor} text-base`}>
                    {cat.score}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
                <div
                  className={`${cat.color} h-full rounded-full transition-all duration-700 ease-out`}
                  style={{ width: `${cat.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>Weighted Sum: Sleep (20%) + Study (20%) + Cleanliness (20%) + Noise (15%) + Food (10%) + Routine (15%)</span>
          <span className="font-semibold text-slate-700">= Overall {score}% Demo Score</span>
        </div>
      </section>

      {/* Grid: Match Recommendation Card (Sec 9) & Explanation Section (Sec 10) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Section 9: Match Recommendation Card */}
        <div id="match-recommendation-card" className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Potential Roommate
                </span>
              </div>
              <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full border border-indigo-200/60">
                Top Match
              </span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-3xl shadow-xs shrink-0">
                🧑‍💻
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedCandidate.name}
                  </h3>
                  <span className="text-xl font-extrabold text-indigo-600">
                    {score}%
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500 mt-1">
                  <span className="font-medium text-slate-700">Dept: {selectedCandidate.department}</span>
                  <span>•</span>
                  <span>Year: {selectedCandidate.year}</span>
                  <span>•</span>
                  <span>Room: {selectedCandidate.roomNo}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{selectedCandidate.hostelName}</p>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-2.5 bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Key Compatibility Signals</h4>
              {selectedCandidate.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>✓ {item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              id="btn-view-compatibility-details"
              onClick={() => setShowComparisonModal(true)}
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 text-indigo-700 font-bold px-4 py-3 rounded-xl border border-indigo-200 transition-all text-sm"
            >
              <span>View Side-by-Side Compatibility</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              * Clearly labelled as sample/demo student profile data.
            </p>
          </div>
        </div>

        {/* Section 10: Explanation Section */}
        <div id="explanation-section" className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900">Why This Match?</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                Explainable Insights
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Transparent reasoning generated from survey answers so students understand why this compatibility score was generated:
            </p>

            <div className="space-y-3">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-3 hover:bg-indigo-50/40 hover:border-indigo-100 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">“{reason}”</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <p className="text-xs text-emerald-900 leading-relaxed font-medium">
              💡 <strong>Explainability Focus:</strong> Unlike "black-box" systems, this decision support prototype highlights the exact habits in common, allowing roommates to establish mutual respect early.
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          id="btn-retake-questionnaire"
          onClick={onRetake}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Questionnaire with Different Answers</span>
        </button>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            id="btn-go-to-hostel-dashboard"
            onClick={onGoToDashboard}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-xs transition-all text-sm"
          >
            <span>View Hostel Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Modal */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Side-by-Side Lifestyle Comparison</h3>
                <p className="text-xs text-slate-500">Comparing your preferences with {selectedCandidate.name}</p>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-3 gap-2 pb-2 text-xs font-bold text-slate-400 uppercase border-b border-slate-100">
                <span>Category</span>
                <span className="text-indigo-600">You ({profile.name || 'Student'})</span>
                <span className="text-blue-600">{selectedCandidate.name}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Sleep Time</span>
                <span className="text-slate-600">{answers.sleepTime}</span>
                <span className="text-slate-600">{selectedCandidate.answers.sleepTime}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Wake Time</span>
                <span className="text-slate-600">{answers.wakeTime}</span>
                <span className="text-slate-600">{selectedCandidate.answers.wakeTime}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Study Time</span>
                <span className="text-slate-600">{answers.studyTime}</span>
                <span className="text-slate-600">{selectedCandidate.answers.studyTime}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Study Noise</span>
                <span className="text-slate-600">{answers.studyEnv}</span>
                <span className="text-slate-600">{selectedCandidate.answers.studyEnv}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Cleanliness</span>
                <span className="text-slate-600">{answers.cleanliness}</span>
                <span className="text-slate-600">{selectedCandidate.answers.cleanliness}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Room Noise</span>
                <span className="text-slate-600">{answers.noiseLevel}</span>
                <span className="text-slate-600">{selectedCandidate.answers.noiseLevel}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-50 items-center">
                <span className="font-semibold text-slate-700">Daily Routine</span>
                <span className="text-slate-600">{answers.dailyRoutine}</span>
                <span className="text-slate-600">{selectedCandidate.answers.dailyRoutine}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowComparisonModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Prototype Limitations Card */}
      <PrototypeLimitation />
    </div>
  );
};
