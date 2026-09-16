import React, { useState } from 'react';
import { LifestyleAnswers, StudentProfile } from '../../types';
import { 
  Moon, 
  Sun, 
  BookOpen, 
  Headphones, 
  Sparkles, 
  Volume2, 
  Utensils, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';

interface QuestionnaireViewProps {
  profile: StudentProfile;
  answers: LifestyleAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<LifestyleAnswers>>;
  onCalculate: () => void;
  onBackToProfile: () => void;
}

export const QuestionnaireView: React.FC<QuestionnaireViewProps> = ({
  profile,
  answers,
  setAnswers,
  onCalculate,
  onBackToProfile,
}) => {
  const [isCalculating, setIsCalculating] = useState(false);

  const handleOptionChange = <K extends keyof LifestyleAnswers>(key: K, value: LifestyleAnswers[K]) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCalculateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    // Simulate brief calculation pause for authentic prototype feel
    setTimeout(() => {
      setIsCalculating(false);
      onCalculate();
    }, 450);
  };

  const handleLoadSampleScenario = () => {
    setAnswers({
      sleepTime: '11 PM – 12 AM',
      wakeTime: '6 AM – 7 AM',
      studyTime: 'Evening',
      studyEnv: 'Mostly quiet',
      cleanliness: 'Very important',
      noiseLevel: 'Low noise',
      foodPref: 'Important',
      dailyRoutine: 'Mostly regular',
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span className="text-indigo-600 font-bold">Step 2 of 4: Lifestyle Questionnaire</span>
          <span>Next: Compatibility Calculation & Match</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full rounded-full transition-all duration-300 w-2/4"></div>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Lifestyle Preference Survey</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Lifestyle Compatibility Questionnaire
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Answer these questions based on your normal hostel routine.
            </p>
            {profile.name && (
              <p className="text-xs text-slate-400 mt-2 font-medium">
                Matching profile for: <strong className="text-slate-700">{profile.name}</strong> ({profile.department || 'CSE'}, {profile.year || '2nd Year'})
              </p>
            )}
          </div>

          <button
            type="button"
            id="btn-load-preset-answers"
            onClick={handleLoadSampleScenario}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 self-start sm:self-center transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Load Demo Answers</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleCalculateSubmit} className="space-y-8">
        {/* Category A: Sleep Schedule (20% weight) */}
        <section id="category-sleep-schedule" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">A. Sleep Schedule</h2>
                <p className="text-xs text-slate-500">Sleep & wake cycles heavily influence shared room tranquility</p>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-2.5 py-1 rounded-md">
              Weight: 20%
            </span>
          </div>

          <div className="space-y-6">
            {/* Question 1: Sleep Time */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3">
                What time do you usually sleep?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(['Before 10 PM', '10 PM – 11 PM', '11 PM – 12 AM', 'After 12 AM'] as const).map((option) => {
                  const isSelected = answers.sleepTime === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      id={`option-sleep-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                      onClick={() => handleOptionChange('sleepTime', option)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 2: Wake Time */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3">
                What time do you usually wake up?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(['Before 6 AM', '6 AM – 7 AM', '7 AM – 8 AM', 'After 8 AM'] as const).map((option) => {
                  const isSelected = answers.wakeTime === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      id={`option-wake-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                      onClick={() => handleOptionChange('wakeTime', option)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Category B: Study Style (20% weight) */}
        <section id="category-study-style" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">B. Study Style</h2>
                <p className="text-xs text-slate-500">Academic concentration habits and desk hours</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-md">
              Weight: 20%
            </span>
          </div>

          <div className="space-y-6">
            {/* Study Time */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3">
                When do you prefer studying?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(['Morning', 'Afternoon', 'Evening', 'Night'] as const).map((option) => {
                  const isSelected = answers.studyTime === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      id={`option-study-time-${option.toLowerCase()}`}
                      onClick={() => handleOptionChange('studyTime', option)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Study Environment */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3">
                What type of study environment do you prefer?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(['Very quiet', 'Mostly quiet', 'Some background noise', 'Noise does not matter'] as const).map((option) => {
                  const isSelected = answers.studyEnv === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      id={`option-study-env-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                      onClick={() => handleOptionChange('studyEnv', option)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Category C: Cleanliness (20% weight) */}
        <section id="category-cleanliness" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">C. Cleanliness</h2>
                <p className="text-xs text-slate-500">Room tidiness, bed upkeep, and shared space maintenance</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md">
              Weight: 20%
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              How important is room cleanliness to you?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(['Very important', 'Important', 'Neutral', 'Not very important'] as const).map((option) => {
                const isSelected = answers.cleanliness === option;
                return (
                  <button
                    key={option}
                    type="button"
                    id={`option-cleanliness-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                    onClick={() => handleOptionChange('cleanliness', option)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category D: Noise Preference (15% weight) */}
        <section id="category-noise-preference" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">D. Noise Preference</h2>
                <p className="text-xs text-slate-500">Acoustic tolerance for calls, music, or friends visiting</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-md">
              Weight: 15%
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              What level of room noise do you prefer?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(['Very quiet', 'Low noise', 'Moderate noise', 'Noise is okay'] as const).map((option) => {
                const isSelected = answers.noiseLevel === option;
                return (
                  <button
                    key={option}
                    type="button"
                    id={`option-noise-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                    onClick={() => handleOptionChange('noiseLevel', option)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category E: Food Preference (10% weight) */}
        <section id="category-food-preference" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">E. Food Preference</h2>
                <p className="text-xs text-slate-500">Dietary alignment, mess dining, and food sharing compatibility</p>
              </div>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-1 rounded-md">
              Weight: 10%
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              How important is food preference compatibility?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(['Very important', 'Important', 'Neutral', 'Not important'] as const).map((option) => {
                const isSelected = answers.foodPref === option;
                return (
                  <button
                    key={option}
                    type="button"
                    id={`option-food-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                    onClick={() => handleOptionChange('foodPref', option)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category F: Daily Routine (15% weight) */}
        <section id="category-daily-routine" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">F. Daily Routine</h2>
                <p className="text-xs text-slate-500">Predictability vs flexibility of hostel timetable</p>
              </div>
            </div>
            <span className="text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200/60 px-2.5 py-1 rounded-md">
              Weight: 15%
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              How regular is your daily routine?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(['Very regular', 'Mostly regular', 'Flexible', 'Very flexible'] as const).map((option) => {
                const isSelected = answers.dailyRoutine === option;
                return (
                  <button
                    key={option}
                    type="button"
                    id={`option-routine-${option.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                    onClick={() => handleOptionChange('dailyRoutine', option)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 ring-2 ring-indigo-600/20 font-semibold'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Action Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            id="btn-back-to-profile"
            onClick={onBackToProfile}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Profile Details</span>
          </button>

          <button
            type="submit"
            id="btn-calculate-compatibility"
            disabled={isCalculating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-indigo-100 transition-all hover:shadow-lg hover:-translate-y-0.5 text-base disabled:opacity-75 cursor-pointer"
          >
            {isCalculating ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Calculating Compatibility...</span>
              </>
            ) : (
              <>
                <span>Calculate Compatibility</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
