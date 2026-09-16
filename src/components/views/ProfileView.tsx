import React, { useState } from 'react';
import { StudentProfile } from '../../types';
import { User, Hash, GraduationCap, Calendar, Building2, ArrowRight, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

interface ProfileViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  onContinueToQuestionnaire: () => void;
  onBackToHome: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  setProfile,
  onContinueToQuestionnaire,
  onBackToHome,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDemoNotification, setShowDemoNotification] = useState(false);

  const departments = [
    'Computer Science and Engineering (CSE)',
    'Information Technology (IT)',
    'Electronics and Communication Engineering (ECE)',
    'Electrical and Electronics Engineering (EEE)',
    'Mechanical Engineering',
    'Civil Engineering',
    'Artificial Intelligence & Data Science',
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  const hostels = [
    'Kaveri Boys Hostel (Block B)',
    'Everest Boys Hostel (Block A)',
    'Nilgiri Boys Hostel (Block C)',
    'Godavari Boys Hostel (Block D)',
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!profile.name.trim()) newErrors.name = 'Please enter your full name';
    if (!profile.regNo.trim()) newErrors.regNo = 'Please enter your register / roll number';
    if (!profile.department.trim()) newErrors.department = 'Please select your department';
    if (!profile.year.trim()) newErrors.year = 'Please select your academic year';
    if (!profile.hostelName.trim()) newErrors.hostelName = 'Please select your assigned hostel block';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onContinueToQuestionnaire();
    }
  };

  const handleFillDemoData = () => {
    setProfile({
      name: 'Rahul Sharma',
      regNo: '22BCSE1048',
      department: 'Computer Science and Engineering (CSE)',
      year: '2nd Year',
      hostelName: 'Kaveri Boys Hostel (Block B)',
    });
    setErrors({});
    setShowDemoNotification(true);
    setTimeout(() => setShowDemoNotification(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span className="text-indigo-600 font-bold">Step 1 of 4: Student Profile</span>
          <span>Next: Lifestyle Questionnaire</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full rounded-full transition-all duration-300 w-1/4"></div>
        </div>
      </div>

      {/* Main Card */}
      <div id="student-profile-form-card" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Create Your Student Profile
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Provide basic hostel registration details before answering the lifestyle questionnaire.
            </p>
          </div>

          <button
            type="button"
            id="btn-fill-demo-profile"
            onClick={handleFillDemoData}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors self-start sm:self-center"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fill Demo Student</span>
          </button>
        </div>

        {showDemoNotification && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Pre-filled with demo profile for Rahul Sharma (CSE, 2nd Year, Kaveri Hostel).</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Name */}
          <div>
            <label htmlFor="student-name-input" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Student Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative rounded-xl shadow-2xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="student-name-input"
                value={profile.name}
                onChange={(e) => {
                  setProfile({ ...profile, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder="e.g. Rahul Sharma"
                className={`block w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  errors.name ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Register Number */}
          <div>
            <label htmlFor="register-number-input" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Register Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative rounded-xl shadow-2xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Hash className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="register-number-input"
                value={profile.regNo}
                onChange={(e) => {
                  setProfile({ ...profile, regNo: e.target.value });
                  if (errors.regNo) setErrors({ ...errors, regNo: '' });
                }}
                placeholder="e.g. 22BCSE1048"
                className={`block w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  errors.regNo ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              />
            </div>
            {errors.regNo && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.regNo}
              </p>
            )}
          </div>

          {/* Department & Year (2 Cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Department */}
            <div>
              <label htmlFor="department-select" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Department <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <select
                  id="department-select"
                  value={profile.department}
                  onChange={(e) => {
                    setProfile({ ...profile, department: e.target.value });
                    if (errors.department) setErrors({ ...errors, department: '' });
                  }}
                  className={`block w-full pl-10 pr-8 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all appearance-none ${
                    errors.department ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              {errors.department && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.department}
                </p>
              )}
            </div>

            {/* Year */}
            <div>
              <label htmlFor="academic-year-select" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Year of Study <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <select
                  id="academic-year-select"
                  value={profile.year}
                  onChange={(e) => {
                    setProfile({ ...profile, year: e.target.value });
                    if (errors.year) setErrors({ ...errors, year: '' });
                  }}
                  className={`block w-full pl-10 pr-8 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all appearance-none ${
                    errors.year ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <option value="">Select Academic Year</option>
                  {years.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>
              {errors.year && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.year}
                </p>
              )}
            </div>
          </div>

          {/* Hostel Name */}
          <div>
            <label htmlFor="hostel-name-select" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Hostel Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative rounded-xl shadow-2xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Building2 className="w-4 h-4" />
              </div>
              <select
                id="hostel-name-select"
                value={profile.hostelName}
                onChange={(e) => {
                  setProfile({ ...profile, hostelName: e.target.value });
                  if (errors.hostelName) setErrors({ ...errors, hostelName: '' });
                }}
                className={`block w-full pl-10 pr-8 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all appearance-none ${
                  errors.hostelName ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <option value="">Select Hostel Block</option>
                {hostels.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
            {errors.hostelName && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.hostelName}
              </p>
            )}
            <p className="text-xs text-slate-400 mt-1">
              For this 35% prototype, matching is demonstrated across Kaveri Boys Hostel (Block B) and adjacent blocks.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <button
              type="button"
              id="btn-back-home-from-profile"
              onClick={onBackToHome}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              ← Cancel & Return to Home
            </button>

            <button
              type="submit"
              id="btn-continue-to-questionnaire"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-indigo-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Continue to Questionnaire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Prototype note */}
      <div className="mt-6 text-center text-xs text-slate-400">
        Demo Notice: Form submissions do not query a live database. Profile data is kept locally in session state.
      </div>
    </div>
  );
};
