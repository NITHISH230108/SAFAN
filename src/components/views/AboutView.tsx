import React from 'react';
import { 
  Info, 
  CheckCircle2, 
  Layers, 
  Brain, 
  Target, 
  ShieldAlert, 
  GraduationCap, 
  ArrowRight,
  Moon,
  BookOpen,
  Sparkles,
  Volume2,
  Utensils,
  Clock,
  Compass
} from 'lucide-react';
import { PrototypeLimitation } from '../PrototypeLimitation';

interface AboutViewProps {
  onStartMatching: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onStartMatching }) => {
  const mainFactors = [
    { title: 'Sleep Schedule', desc: 'Bedtime and wake-up synchronization to prevent sleep disruption.', weight: '20%', icon: Moon },
    { title: 'Study Style', desc: 'Preferred study hours (day vs night) and desk atmosphere.', weight: '20%', icon: BookOpen },
    { title: 'Cleanliness', desc: 'Expectations regarding room dusting, bed tidiness, and hygiene.', weight: '20%', icon: Sparkles },
    { title: 'Noise Preference', desc: 'Acceptable decibel levels, headphone usage, and voice calls.', weight: '15%', icon: Volume2 },
    { title: 'Food Preference', desc: 'Dietary habits, mess meal routines, and food sharing norms.', weight: '10%', icon: Utensils },
    { title: 'Daily Routine', desc: 'Consistency versus flexibility in daily classes and extracurriculars.', weight: '15%', icon: Clock },
  ];

  const expectedBenefits = [
    { title: 'Reduce lifestyle mismatch', desc: 'Prevent common roommate disputes over lights, noise, and sleep hours before moving in.' },
    { title: 'Improve roommate selection', desc: 'Give students an objective, structured way to discover peers with harmonious daily habits.' },
    { title: 'Make preferences visible', desc: 'Transform invisible lifestyle habits into clear, transparent compatibility signals.' },
    { title: 'Provide explainable recommendations', desc: 'Deliver human-readable reasons for matches rather than arbitrary black-box scores.' },
    { title: 'Support hostel allocation decisions', desc: 'Assist hostel wardens and administrative staff in making informed room assignments.' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Project Concept & Documentation</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About Hostel Roommate Compatibility Finder
        </h1>

        <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            “This project proposes an AI-assisted lifestyle-based roommate matching system that helps students identify potential lifestyle compatibility before roommate allocation.”
          </p>
        </div>

        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Traditional hostel allotment systems in universities and colleges allocate rooms alphabetically or randomly based on roll numbers. This often creates severe lifestyle conflicts between early risers and night owls, studious students and gaming enthusiasts, or differing cleanliness standards. This prototype demonstrates a decision-support approach tailored for boys hostels.
        </p>
      </div>

      {/* Main 6 Lifestyle Factors */}
      <section id="factors-section" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/50">
            Evaluation Dimensions
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            The 6 Core Lifestyle Factors
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Carefully calibrated weights representing student daily living impact in a boys hostel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mainFactors.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.title}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/60">
                    Weight: {factor.weight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{factor.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{factor.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Proposed System Flowchart */}
      <section id="architecture-flowchart" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Proposed Decision-Support Pipeline
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Architectural flow from student onboarding to explainable roommate recommendation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative text-center">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">1</span>
            <h4 className="font-bold text-slate-800 text-sm">Student Intake</h4>
            <p className="text-[11px] text-slate-500 mt-1">Profile data & hostel block selection</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">2</span>
            <h4 className="font-bold text-slate-800 text-sm">Preference Vector</h4>
            <p className="text-[11px] text-slate-500 mt-1">6-dimension lifestyle questionnaire</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">3</span>
            <h4 className="font-bold text-slate-800 text-sm">Weighted Rubric</h4>
            <p className="text-[11px] text-slate-500 mt-1">Category scoring & distance calculation</p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">4</span>
            <h4 className="font-bold text-indigo-950 text-sm">Explainable Output</h4>
            <p className="text-[11px] text-indigo-700 mt-1">Match % & plain-English justifications</p>
          </div>
        </div>
      </section>

      {/* Expected Benefits */}
      <section id="benefits-section" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="pb-4 mb-6 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
            Project Outcomes
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-3">Expected Benefits</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Measurable improvements in campus residential harmony and administrative efficiency.
          </p>
        </div>

        <div className="space-y-4">
          {expectedBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Ready to test the prototype calculation on your own lifestyle answers?
          </div>
          <button
            onClick={onStartMatching}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-xs transition-all text-sm"
          >
            <span>Launch Matching Flow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Prototype Limitations Card */}
      <PrototypeLimitation />
    </div>
  );
};
