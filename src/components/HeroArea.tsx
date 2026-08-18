import React from 'react';
import { Language, ServiceCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { 
  Search, 
  Mic, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  Vote, 
  Car, 
  Sprout, 
  HeartPulse, 
  Award, 
  GraduationCap,
  Zap
} from 'lucide-react';

interface HeroAreaProps {
  currentLanguage: Language;
  selectedCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onSubmitQuery: (query: string) => void;
  onOpenVoiceModal: () => void;
  inputQuery: string;
  setInputQuery: (q: string) => void;
  isLoading: boolean;
  theme?: 'dark' | 'light';
}

export const HeroArea: React.FC<HeroAreaProps> = ({
  currentLanguage,
  selectedCategory,
  onSelectCategory,
  onSubmitQuery,
  onOpenVoiceModal,
  inputQuery,
  setInputQuery,
  isLoading,
  theme = 'dark',
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const isDark = theme === 'dark';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      onSubmitQuery(inputQuery.trim());
    }
  };

  const categories: ServiceCategory[] = [
    'all',
    'identity',
    'welfare',
    'transport',
    'certificates',
    'education'
  ];

  const getQueryIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />;
      case 'ShieldCheck': return <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />;
      case 'CreditCard': return <CreditCard className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />;
      case 'Vote': return <Vote className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />;
      case 'Car': return <Car className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />;
      case 'Sprout': return <Sprout className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} />;
      case 'HeartPulse': return <HeartPulse className={`w-4 h-4 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />;
      case 'Award': return <Award className={`w-4 h-4 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />;
      case 'GraduationCap': return <GraduationCap className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`} />;
      default: return <Sparkles className="w-4 h-4 text-blue-500" />;
    }
  };

  const headlines: Record<Language, { main: string; highlight: string }> = {
    en: { main: 'Government services,', highlight: 'finally made simple.' },
    hi: { main: 'सरकारी सेवाएं,', highlight: 'अब बेहद आसान।' },
    bn: { main: 'সরকারি পরিষেবা,', highlight: 'এবার অত্যন্ত সহজ।' }
  };

  return (
    <div className="relative w-full pt-8 sm:pt-14 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <motion.div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-blue-600/15' : 'bg-blue-400/20'
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute top-40 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-saffron-500/10' : 'bg-orange-300/25'
        }`}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Top Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-5"
      >
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border ${
          isDark 
            ? 'bg-white/5 border-white/10 text-slate-200' 
            : 'bg-white/80 border-slate-200 text-slate-700'
        }`}>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>NagrikAI</span>
          <span className={isDark ? 'text-slate-500' : 'text-slate-300'}>•</span>
          <span className={`font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>National Civic Intelligence Platform</span>
        </div>
      </motion.div>

      {/* Editorial Headline */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-display leading-tight sm:leading-tight">
          <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>{headlines[currentLanguage].main}</span>
          <span className="text-gradient-saffron block">{headlines[currentLanguage].highlight}</span>
        </h1>
        <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {t.heroSubtitle}
        </p>
      </motion.div>

      {/* Category Filter Glass Pills */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-2 flex-wrap mb-8"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-gov-glow border border-blue-400 font-bold ring-2 ring-blue-400/50'
                : isDark
                ? 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                : 'glass-panel text-slate-700 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {t.categories[cat]}
          </motion.button>
        ))}
      </motion.div>

      {/* PRIMARY FLOATING GLASS COMMAND SURFACE */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Glow halo behind search surface */}
        <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-60 ${
          isDark
            ? 'bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-amber-500/20'
            : 'bg-gradient-to-r from-blue-400/25 via-indigo-300/20 to-amber-300/20'
        }`}></div>

        <form
          onSubmit={handleFormSubmit}
          className={`relative glass-panel rounded-3xl p-3 sm:p-3.5 shadow-2xl glass-input transition-all duration-300 z-20 ${
            isDark ? 'border border-white/20' : 'border border-slate-200'
          }`}
        >
          {/* Engine Status Line */}
          <div className={`px-3 pb-2 mb-1 border-b flex items-center justify-between text-[11px] font-mono ${
            isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>NagrikAI Engine • Active</span>
            </div>
            <span className={isDark ? 'text-emerald-400 font-semibold' : 'text-emerald-700 font-semibold'}>
              English • हिंदी • বাংলা
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Icon */}
            <div className={`pl-3 flex items-center justify-center ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full bg-transparent text-sm sm:text-base font-medium focus:outline-none py-2.5 ${
                isDark ? 'text-white placeholder-slate-400' : 'text-slate-900 placeholder-slate-400'
              }`}
              autoFocus
            />

            {/* Simulated Voice Mic Button */}
            <motion.button
              type="button"
              onClick={onOpenVoiceModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 sm:p-3 rounded-2xl border transition-transform flex items-center gap-1.5 shrink-0 ${
                isDark 
                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
              title={t.clickToSpeak}
            >
              <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 animate-pulse" />
              <span className="text-[11px] font-bold hidden sm:inline">
                Voice
              </span>
            </motion.button>

            {/* Send / Ask Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              whileHover={{ scale: inputQuery.trim() && !isLoading ? 1.04 : 1 }}
              whileTap={{ scale: inputQuery.trim() && !isLoading ? 0.96 : 1 }}
              className={`px-5 sm:px-7 py-3 rounded-2xl font-extrabold text-xs sm:text-sm text-white flex items-center gap-2 transition-all duration-200 shrink-0 shadow-lg ${
                !inputQuery.trim() || isLoading
                  ? 'bg-slate-400 text-slate-200 cursor-not-allowed border border-slate-300 opacity-60'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-gov-glow border border-blue-400/50'
              }`}
            >
              <span>{t.sendBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

          </div>
        </form>
      </motion.div>

      {/* Suggested Query Chips Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-7 max-w-3xl mx-auto"
      >
        <div className={`flex items-center gap-1.5 mb-3 text-xs font-bold uppercase tracking-widest ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{t.suggestedQueriesLabel}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {t.suggestedQueries.map((item, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setInputQuery(item.query);
                onSubmitQuery(item.query);
              }}
              className={`glass-card p-3 rounded-2xl text-left text-xs flex items-start gap-2.5 transition-all duration-200 group border ${
                isDark 
                  ? 'text-slate-300 hover:text-white border-white/10 hover:border-blue-400/40' 
                  : 'text-slate-700 hover:text-slate-900 border-slate-200 hover:border-blue-400/50'
              }`}
            >
              <div className={`p-1.5 rounded-xl shrink-0 mt-0.5 transition-colors ${
                isDark ? 'bg-white/5 group-hover:bg-blue-500/20' : 'bg-slate-100 group-hover:bg-blue-50'
              }`}>
                {getQueryIcon(item.icon)}
              </div>
              <div className="overflow-hidden">
                <span className={`font-bold block truncate transition-colors ${
                  isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {item.tag}
                </span>
                <span className={`text-[11px] line-clamp-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {item.query}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

    </div>
  );
};
