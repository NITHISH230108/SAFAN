import React, { useState } from 'react';
import { RECENT_MATCHES_TABLE, ADDITIONAL_CANDIDATES } from '../../data/mockData';
import { 
  Users, 
  UserCheck, 
  BarChart3, 
  TrendingUp, 
  Building2, 
  ArrowRight, 
  Search, 
  Sparkles, 
  CheckCircle,
  Filter,
  Eye
} from 'lucide-react';
import { PrototypeLimitation } from '../PrototypeLimitation';

interface DashboardViewProps {
  onStartMatching: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onStartMatching }) => {
  const [selectedBlock, setSelectedBlock] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample student profiles list for hostel overview
  const sampleProfiles = [
    { name: 'Arun Kumar', reg: '22BCSE1019', dept: 'CSE', year: '2nd Year', block: 'Block B (Kaveri)', sleep: '11 PM', study: 'Evening', score: 87 },
    { name: 'Karthik Raj', reg: '22BIT1022', dept: 'IT', year: '2nd Year', block: 'Block B (Kaveri)', sleep: '11 PM', study: 'Night', score: 82 },
    { name: 'Rahul Sharma', reg: '22BCSE1048', dept: 'CSE', year: '2nd Year', block: 'Block B (Kaveri)', sleep: '11 PM', study: 'Evening', score: 87 },
    { name: 'Sanjay Verma', reg: '22BME1034', dept: 'Mechanical', year: '3rd Year', block: 'Block A (Everest)', sleep: '10 PM', study: 'Morning', score: 78 },
    { name: 'Vijay Shankar', reg: '23BEC1088', dept: 'ECE', year: '1st Year', block: 'Block C (Nilgiri)', sleep: 'After 12', study: 'Night', score: 74 },
    { name: 'Ajay Menon', reg: '23BCV1005', dept: 'Civil', year: '1st Year', block: 'Block C (Nilgiri)', sleep: '11 PM', study: 'Afternoon', score: 78 },
    { name: 'Praveen G.', reg: '22BEE1072', dept: 'EEE', year: '2nd Year', block: 'Block D (Godavari)', sleep: '11 PM', study: 'Night', score: 84 },
    { name: 'Dinesh Kumar', reg: '22BCSE1102', dept: 'CSE', year: '2nd Year', block: 'Block B (Kaveri)', sleep: '11 PM', study: 'Night', score: 84 },
  ];

  const filteredProfiles = sampleProfiles.filter((p) => {
    const matchesBlock = selectedBlock === 'All' || p.block.includes(selectedBlock);
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.dept.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBlock && matchesQuery;
  });

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-10">
      {/* Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold mb-1.5">
            <span>Administrative Decision Support</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hostel Compatibility Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Static dashboard preview representing lifestyle profile submissions across boys hostel blocks.
          </p>
        </div>

        <button
          id="btn-dashboard-start-matching"
          onClick={onStartMatching}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all text-sm self-start sm:self-center"
        >
          <span>Calculate New Match</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Metric Cards - Exact Prompt Requirements: Total Profiles: 24, Potential Matches: 8, Average Compatibility: 76% */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Metric 1 */}
        <div id="stat-total-profiles" className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Profiles</span>
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">24</span>
            <span className="text-xs text-slate-400 ml-2">Students Registered</span>
          </div>
          <p className="text-[11px] text-indigo-600 font-medium mt-2">Across 4 hostel blocks</p>
        </div>

        {/* Metric 2 */}
        <div id="stat-potential-matches" className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Potential Matches</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">8</span>
            <span className="text-xs text-slate-400 ml-2">High-Synergy Pairs</span>
          </div>
          <p className="text-[11px] text-emerald-600 font-medium mt-2">&gt; 80% compatibility threshold</p>
        </div>

        {/* Metric 3 */}
        <div id="stat-avg-compatibility" className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Compatibility</span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">76%</span>
            <span className="text-xs text-slate-400 ml-2">Overall Cohort</span>
          </div>
          <p className="text-[11px] text-blue-600 font-medium mt-2">Weighted average across blocks</p>
        </div>

        {/* Metric 4 */}
        <div id="stat-hostel-blocks" className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs sm:col-span-3 lg:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Blocks</span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">4</span>
            <span className="text-xs text-slate-400 ml-2">Hostel Wings</span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-2">Block A, B, C, D participating</p>
        </div>
      </div>

      {/* Compatibility Chart Section */}
      <div id="compatibility-chart-card" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Hostel Compatibility Distribution Chart
            </h2>
            <p className="text-xs text-slate-500">
              Frequency of roommate match percentages across all 24 registered boys hostel profiles.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-center">
            Sample Distribution
          </span>
        </div>

        {/* Simple Bar Visualizer */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
              <span>High Compatibility (80% – 100%)</span>
              <span className="text-indigo-600 font-bold">8 Pairs (33%)</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: '33%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
              <span>Good Compatibility (70% – 79%)</span>
              <span className="text-blue-600 font-bold">11 Pairs (46%)</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: '46%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
              <span>Moderate Compatibility (60% – 69%)</span>
              <span className="text-amber-600 font-bold">4 Pairs (17%)</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
              <div className="bg-amber-600 h-full rounded-full transition-all duration-500" style={{ width: '17%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
              <span>Potential Conflict Risk (&lt; 60%)</span>
              <span className="text-rose-500 font-bold">1 Pair (4%)</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
              <div className="bg-rose-500 h-full rounded-full transition-all duration-500" style={{ width: '4%' }}></div>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 mt-5 pt-3 border-t border-slate-100 text-center">
          * Chart displays sample aggregated data for prototype demonstration.
        </p>
      </div>

      {/* Recent Matches Table (Exact format requested in section 11) */}
      <div id="recent-matches-card" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recent Matches</h2>
            <p className="text-xs text-slate-500">Sample roommate match pairs and their calculated compatibility</p>
          </div>
          <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md self-start sm:self-center">
            Demo Match Table
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="pb-3 px-4">Student</th>
                <th className="pb-3 px-4">Match</th>
                <th className="pb-3 px-4">Departments</th>
                <th className="pb-3 px-4">Compatibility</th>
                <th className="pb-3 px-4 text-right">Synergy Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RECENT_MATCHES_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center">
                      {row.student.charAt(0)}
                    </span>
                    <span>{row.student}</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    {row.match}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">
                    {row.dept}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-indigo-600 text-sm">{row.compatibility}%</span>
                      <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden hidden sm:block">
                        <div
                          className="bg-indigo-600 h-full rounded-full"
                          style={{ width: `${row.compatibility}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Filterable Registered Profiles Browser */}
      <div id="hostel-profiles-card" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Registered Hostel Profiles</h2>
            <p className="text-xs text-slate-500">Explore boys hostel residents and lifestyle attributes</p>
          </div>

          {/* Block Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {['All', 'Block A', 'Block B', 'Block C', 'Block D'].map((block) => (
              <button
                key={block}
                onClick={() => setSelectedBlock(block)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedBlock === block
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {block}
              </button>
            ))}
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProfiles.map((p, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-xs transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                <span className="text-xs font-extrabold text-indigo-600">{p.score}%</span>
              </div>
              <p className="text-[11px] text-slate-500">{p.dept} • {p.year}</p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                <div>🌙 Sleep: {p.sleep}</div>
                <div>📚 Study: {p.study}</div>
                <div className="text-[10px] text-slate-400">{p.block}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prototype Limitations Card */}
      <PrototypeLimitation />
    </div>
  );
};
