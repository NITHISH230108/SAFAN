import React from 'react';
import { CheckCircle2, XCircle, AlertCircle, Sparkles } from 'lucide-react';

export const PrototypeLimitation: React.FC = () => {
  const demonstrated = [
    'UI design & dashboard layout',
    'Student profile registration form',
    'Lifestyle compatibility questionnaire',
    'Sample weighted compatibility calculation',
    'Sample roommate match recommendation',
    'Basic mock hostel dashboard preview',
  ];

  const notImplemented = [
    'Real AI/ML trained model',
    'Backend persistent database',
    'Real hostel allocation data',
    'Real student authentication system',
    'Live roommate availability updates',
    'Automatic hostel room allocation',
    'Feedback & reinforcement learning system',
    'Multi-occupancy room matching (3-4 sharing)',
  ];

  return (
    <section id="prototype-status-card" className="w-full bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center font-bold text-lg">
            35%
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Prototype Status</h3>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                Academic Demo Version
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Hostel Roommate Compatibility Finder — Conceptual Proof of Concept
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600 self-start sm:self-auto">
          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
          <span>Non-Production Research Demo</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {/* Currently Demonstrated */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <h4>Currently Demonstrated (35% Scope)</h4>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            {demonstrated.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Implemented Yet */}
        <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm mb-3">
            <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
            <h4>Planned for Future Development</h4>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
            {notImplemented.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prominent Disclaimer Quote */}
      <div className="mt-6 p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-center">
        <p className="text-xs sm:text-sm font-medium text-indigo-950 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 inline" />
          <span>
            “This prototype demonstrates the concept and user flow. Advanced AI and backend functionality will be implemented in future development.”
          </span>
        </p>
      </div>
    </section>
  );
};
