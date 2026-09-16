import React, { useState } from 'react';
import { ActivePage, LifestyleAnswers, StudentProfile } from './types';
import { DEFAULT_LIFESTYLE_ANSWERS, DEFAULT_STUDENT_PROFILE } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ProfileView } from './components/views/ProfileView';
import { QuestionnaireView } from './components/views/QuestionnaireView';
import { ResultView } from './components/views/ResultView';
import { DashboardView } from './components/views/DashboardView';
import { AboutView } from './components/views/AboutView';
import { ShieldAlert, Sparkles } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_STUDENT_PROFILE);
  const [answers, setAnswers] = useState<LifestyleAnswers>(DEFAULT_LIFESTYLE_ANSWERS);

  const handleStartMatching = () => {
    setActivePage('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToQuestionnaire = () => {
    setActivePage('questionnaire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCalculate = () => {
    setActivePage('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setActivePage('questionnaire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToDashboard = () => {
    setActivePage('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProfile = () => {
    setActivePage('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-indigo-100 selection:text-indigo-800">
      {/* Top Academic Disclaimer Notice Bar */}
      <aside id="top-academic-notice" aria-label="Academic project disclaimer" className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
            <span>
              <strong>Hostel Roommate Compatibility Finder:</strong> 35% Academic Web Prototype for Boys Hostel Lifestyle Matching.
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span>Demo Data Only</span>
            <span>•</span>
            <button
              onClick={() => setActivePage('about')}
              className="text-indigo-300 hover:text-white underline focus:outline-none"
            >
              Project Details
            </button>
          </div>
        </div>
      </aside>

      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onStartMatching={handleStartMatching}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {activePage === 'home' && (
          <HomeView
            onStartQuestionnaire={handleStartMatching}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'profile' && (
          <ProfileView
            profile={profile}
            setProfile={setProfile}
            onContinueToQuestionnaire={handleContinueToQuestionnaire}
            onBackToHome={handleBackToHome}
          />
        )}

        {activePage === 'questionnaire' && (
          <QuestionnaireView
            profile={profile}
            answers={answers}
            setAnswers={setAnswers}
            onCalculate={handleCalculate}
            onBackToProfile={handleBackToProfile}
          />
        )}

        {activePage === 'result' && (
          <ResultView
            profile={profile}
            answers={answers}
            onRetake={handleRetake}
            onGoToDashboard={handleGoToDashboard}
          />
        )}

        {activePage === 'dashboard' && (
          <DashboardView
            onStartMatching={handleStartMatching}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            onStartMatching={handleStartMatching}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

