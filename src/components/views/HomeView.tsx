import React from 'react';
import { ActivePage } from '../../types';
import { 
  Moon, 
  BookOpen, 
  Sparkles, 
  Volume2, 
  ArrowRight, 
  UserCheck, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Sliders, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PrototypeLimitation } from '../PrototypeLimitation';

interface HomeViewProps {
  onStartQuestionnaire: () => void;
  setActivePage: (page: ActivePage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onStartQuestionnaire, setActivePage }) => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Hero Section */}
      <section id="hero-section" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headings & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-semibold text-indigo-800">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span>Hostel Roommate Decision Support Prototype</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Find a Roommate Who <span className="text-indigo-600">Matches Your Lifestyle</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Compare everyday lifestyle preferences such as sleep schedule, study style, cleanliness, noise preference, food preference, and daily routine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-hero-start-questionnaire"
                onClick={onStartQuestionnaire}
                className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-indigo-200 transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
              >
                <span>Start Questionnaire</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="btn-hero-how-it-works"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold px-5 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-all text-base"
              >
                <span>How It Works</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* College Prototype Notice Pill */}
            <div className="flex items-center gap-3 pt-3 text-xs text-slate-500">
              <div className="flex -space-x-1.5">
                <span className="inline-block w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] text-center leading-6 border-2 border-white">B1</span>
                <span className="inline-block w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] text-center leading-6 border-2 border-white">B2</span>
                <span className="inline-block w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] text-center leading-6 border-2 border-white">B3</span>
              </div>
              <span>Tested across 4 Boys Hostel Blocks (Everest, Nilgiri, Kaveri, Godavari)</span>
            </div>
          </div>

          {/* Right Column: Illustration showing two hostel students with 87% compatibility */}
          <div className="lg:col-span-5">
            <div id="hero-illustration-card" className="relative mx-auto max-w-md bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
              {/* Demo Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Prototype Match Demo</span>
                </div>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  Sample Result
                </span>
              </div>

              {/* Two Students Illustration */}
              <div className="grid grid-cols-2 gap-3 pb-6 relative">
                {/* Student 1 */}
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-indigo-100 border-2 border-indigo-200 flex items-center justify-center text-xl font-bold text-indigo-700 shadow-xs mb-2">
                    👨‍🎓
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">You (Student)</h4>
                  <p className="text-[11px] text-slate-500">Night Owl • Quiet Study</p>
                  <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-600 border border-slate-200">
                    Hostel Block B
                  </div>
                </div>

                {/* Compatibility Center Pill */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border-2 border-indigo-600 rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="text-xs font-extrabold text-indigo-700">87%</span>
                </div>

                {/* Student 2 */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-3.5 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-xl font-bold text-blue-700 shadow-xs mb-2">
                    🧑‍💻
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Arun Kumar</h4>
                  <p className="text-[11px] text-slate-500">Night Owl • Quiet Study</p>
                  <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-100 text-indigo-700">
                    Hostel Block B
                  </div>
                </div>
              </div>

              {/* Compatibility Result Visual */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Calculated Lifestyle Match</span>
                  <span className="text-base font-extrabold text-indigo-600">87% Compatible</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full transition-all duration-700" style={{ width: '87%' }}></div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Matched Sleep Hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Low Noise Tolerance</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Shared Cleanliness</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Evening Study Style</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-center text-slate-400 mt-3 italic">
                * Sample/demo visualization. Not a real ML prediction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section: Why Roommate Compatibility Matters */}
      <section id="problem-section" className="border-t border-slate-200 pt-14">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/50">
            Hostel Living Challenges
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Why Roommate Compatibility Matters
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            In boys hostels, random room allocations frequently pair students with conflicting daily routines. The proposed system makes lifestyle preferences visible before roommate selection to prevent friction and foster a productive academic environment.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sleep Schedule */}
          <div id="card-problem-sleep" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Sleep Schedule</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Different sleeping and waking times can create inconvenience. An early riser turning on lights disturbs a late-night coder or exam studier.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-indigo-600 font-semibold">
              <span>Weighted factor: 20%</span>
            </div>
          </div>

          {/* Study Style */}
          <div id="card-problem-study" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Study Style</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Students may have different preferences for studying and concentration, from complete pin-drop silence to background music or collaborative discussions.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
              <span>Weighted factor: 20%</span>
            </div>
          </div>

          {/* Cleanliness */}
          <div id="card-problem-cleanliness" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Cleanliness</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Different cleanliness expectations can cause conflicts. Organization of study desks, dust hygiene, and laundry habits can impact peace of mind.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <span>Weighted factor: 20%</span>
            </div>
          </div>

          {/* Noise Preference */}
          <div id="card-problem-noise" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Noise Preference</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Some students prefer quiet rooms while others may be comfortable with background noise, gaming audio, voice calls, or music.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-600 font-semibold">
              <span>Weighted factor: 15%</span>
            </div>
          </div>
        </div>

        {/* Small explanation box */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-slate-600">
            💡 <strong className="text-slate-800">Project Goal:</strong> The proposed system tries to make these lifestyle preferences visible before roommate selection, giving hostel wardens and students transparent insight.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works-section" className="border-t border-slate-200 pt-14">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/50">
            System Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A 4-step decision-support framework designed for hostel student matching.
          </p>
        </div>

        {/* 4-Step Process Timeline/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div id="step-card-1" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Step 1 — Create Profile</h3>
              <p className="text-xs font-medium text-indigo-600 mb-2">Student Basic Info</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Student enters basic profile information including department, register number, year of study, and allocated hostel block.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Form with client-side verification
            </div>
          </div>

          {/* Step 2 */}
          <div id="step-card-2" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Step 2 — Questionnaire</h3>
              <p className="text-xs font-medium text-indigo-600 mb-2">6 Lifestyle Dimensions</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Student answers a short set of lifestyle questions covering sleep hours, study preferences, cleanliness standards, and daily habits.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Multi-choice normalized options
            </div>
          </div>

          {/* Step 3 */}
          <div id="step-card-3" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Step 3 — Matching</h3>
              <p className="text-xs font-medium text-indigo-600 mb-2">Weighted Rubric Evaluation</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The prototype compares lifestyle preferences against hostel candidate profiles using category-specific weights (e.g. sleep 20%, study 20%).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Weighted compatibility calculation
            </div>
          </div>

          {/* Step 4 */}
          <div id="step-card-4" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Step 4 — Match Result</h3>
              <p className="text-xs font-medium text-indigo-600 mb-2">Explainable Score & Recommendation</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The system displays a sample compatibility score, progress breakdown, recommended roommate candidate, and human-readable explanations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Demo report & explanation cards
            </div>
          </div>
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-10 text-center">
          <button
            id="btn-flow-start-cta"
            onClick={onStartQuestionnaire}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
          >
            <span>Proceed to Step 1: Create Student Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Prototype Limitations Card */}
      <PrototypeLimitation />
    </div>
  );
};
