import React from 'react';
import { ActivePage } from '../types';
import { Heart, Building, GraduationCap, Github } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer id="app-footer" className="bg-white border-t border-slate-200 mt-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏠</span>
              <span className="font-bold text-slate-900 text-base">Hostel Roommate Compatibility Finder</span>
            </div>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              An AI-assisted lifestyle-based decision support prototype for boys hostel roommate allocation. Demonstrates how lifestyle preferences can be collected and scored to reduce roommate conflicts.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                College Capstone Project Demo
              </span>
              <span>•</span>
              <span>Version 0.35 (Prototype)</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  id="footer-link-profile"
                  onClick={() => { setActivePage('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Student Profile Form
                </button>
              </li>
              <li>
                <button
                  id="footer-link-questionnaire"
                  onClick={() => { setActivePage('questionnaire'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Lifestyle Questionnaire
                </button>
              </li>
              <li>
                <button
                  id="footer-link-dashboard"
                  onClick={() => { setActivePage('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Hostel Overview Dashboard
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-3">Project Scope</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Sleep & Study Matching</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Cleanliness & Noise Weighting</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span>Explainable AI Insights</span>
              </li>
              <li className="flex items-center gap-1.5">
                <button
                  id="footer-link-about"
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-indigo-600 hover:underline text-xs font-medium"
                >
                  Read Full Project Documentation →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 RoomMate AI Prototype — Boys Hostel Compatibility Demo. For academic presentation purposes only.</p>
          <div className="flex items-center gap-4">
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">35% Functional Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
