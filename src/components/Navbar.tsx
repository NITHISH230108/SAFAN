import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Home, Users, HelpCircle, Info, LayoutDashboard, Sparkles, Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onStartMatching: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onStartMatching }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: ActivePage; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'Home', page: 'home', icon: Home },
    { label: 'Find Roommate', page: 'profile', icon: Users },
    { label: 'Questionnaire', page: 'questionnaire', icon: Sparkles },
    { label: 'Dashboard', page: 'dashboard', icon: LayoutDashboard },
    { label: 'How It Works', page: 'home', icon: HelpCircle },
    { label: 'About', page: 'about', icon: Info },
  ];

  const handleNavClick = (page: ActivePage, anchorId?: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              id="brand-logo-button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-md shadow-indigo-100 group-hover:bg-indigo-700 transition-colors">
                🏠
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-slate-900 tracking-tight">RoomMate AI</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200/60">
                    35% Prototype
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium hidden sm:block">Boys Hostel Matching System</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isHowItWorks = item.label === 'How It Works';
              const isActive = !isHowItWorks && activePage === item.page;

              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => {
                    if (isHowItWorks) {
                      handleNavClick('home', 'how-it-works-section');
                    } else {
                      handleNavClick(item.page);
                    }
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="btn-start-matching-header"
              onClick={onStartMatching}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Start Matching</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="btn-mobile-start-matching"
              onClick={onStartMatching}
              className="text-xs bg-indigo-600 text-white font-semibold px-3 py-1.5 rounded-lg"
            >
              Start
            </button>
            <button
              id="btn-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-menu" className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <div className="mb-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
            <span>Academic demo prototype (35% functional mock)</span>
          </div>
          {navItems.map((item) => {
            const isHowItWorks = item.label === 'How It Works';
            const isActive = !isHowItWorks && activePage === item.page;
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  if (isHowItWorks) {
                    handleNavClick('home', 'how-it-works-section');
                  } else {
                    handleNavClick(item.page);
                  }
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left ${
                  isActive ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4 text-slate-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2">
            <button
              id="mobile-nav-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartMatching();
              }}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-2.5 rounded-xl shadow-sm"
            >
              <span>Start Matching Questionnaire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
