import React, { useState, useRef, useEffect } from 'react';
import { Language, UserPreferences } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  PhoneCall, 
  Grid3X3, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDirectory: () => void;
  onOpenHelplines: () => void;
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
  onResetToHome: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenDirectory,
  onOpenHelplines,
  preferences,
  onUpdatePreferences,
  onResetToHome,
  theme,
  onToggleTheme,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showAccessDropdown, setShowAccessDropdown] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  ];

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
      if (accessRef.current && !accessRef.current.contains(event.target as Node)) {
        setShowAccessDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 pb-1">
      {/* Floating Translucent Glass Bar - REMOVED overflow-hidden so dropdowns float freely above all content! */}
      <div className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl glass-panel shadow-2xl transition-all duration-300 relative ${
        isDark ? 'border border-white/10' : 'border border-slate-900/10'
      }`}>
        
        {/* Sleek Glowing Indian Tricolor Ribbon */}
        <div className="h-0.5 w-full flex opacity-90 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
          <div className="w-1/3 bg-gradient-to-r from-amber-500 to-orange-500"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between relative z-10">
          
          {/* Brand Logo & Animated AI Node */}
          <motion.div 
            onClick={onResetToHome}
            className="flex items-center gap-3 cursor-pointer group select-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title="NagrikAI Home"
          >
            {/* Animated AI Glowing Orb Emblem */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className={`absolute w-10 h-10 rounded-xl blur-md ${isDark ? 'bg-blue-500/30' : 'bg-blue-600/20'}`}
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-950 via-gov-navy to-blue-900 border border-white/20 flex items-center justify-center text-white shadow-lg relative z-10 overflow-hidden">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gov-saffron rounded-full flex items-center justify-center text-[8px] font-extrabold text-white border border-slate-900">
                  IN
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xl sm:text-2xl font-extrabold tracking-tight font-display ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {t.brandName}
                </span>
                <span className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  <CheckCircle2 className="w-3 h-3 text-blue-500" />
                  {t.badgeGovBeta}
                </span>
              </div>
              <p className={`text-[11px] font-medium hidden md:block ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {t.brandTagline}
              </p>
            </div>
          </motion.div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Explore Services Directory Button */}
            <motion.button
              onClick={onOpenDirectory}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm ${
                isDark 
                  ? 'text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10'
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
              title="Explore all 12 supported public services"
            >
              <Grid3X3 className="w-4 h-4 text-blue-500" />
              <span className="hidden md:inline">{t.allServicesBtn}</span>
              <span className="md:hidden">12 Services</span>
            </motion.button>

            {/* Emergency Helplines Button */}
            <motion.button
              onClick={onOpenHelplines}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm ${
                isDark
                  ? 'text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30'
                  : 'text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200'
              }`}
              title="National Emergency & Citizen Helplines"
            >
              <PhoneCall className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="hidden sm:inline">{t.helplinesBtn}</span>
            </motion.button>

            {/* Dark / Light Theme Toggle */}
            <motion.button
              onClick={onToggleTheme}
              whileHover={{ scale: 1.08, rotate: isDark ? 15 : -15 }}
              whileTap={{ scale: 0.92 }}
              className={`p-2 rounded-xl transition-all shadow-sm ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-amber-300 border border-white/15'
                  : 'bg-slate-100 hover:bg-slate-200 text-blue-700 border border-slate-200'
              }`}
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-700" />
              )}
            </motion.button>

            {/* Accessibility Popover - Fixed Stacking Context & Overflow */}
            <div className="relative z-50" ref={accessRef}>
              <motion.button
                onClick={() => {
                  setShowAccessDropdown(!showAccessDropdown);
                  setShowLangDropdown(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-xl transition-colors ${
                  showAccessDropdown ? 'ring-2 ring-blue-500' : ''
                } ${
                  isDark
                    ? 'text-slate-300 hover:bg-white/10 border border-white/10'
                    : 'text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                title={t.accessibilityBtn}
              >
                <Eye className={`w-4 h-4 ${isDark ? 'text-slate-200' : 'text-slate-700'}`} />
              </motion.button>

              <AnimatePresence>
                {showAccessDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className={`absolute right-0 mt-2.5 w-60 rounded-2xl p-4 z-50 text-xs space-y-3 shadow-2xl ${
                      isDark
                        ? 'bg-slate-900/95 backdrop-blur-xl text-white border border-white/15'
                        : 'bg-white/95 backdrop-blur-xl text-slate-900 border border-slate-200'
                    }`}
                  >
                    <div className={`font-bold pb-2 flex items-center justify-between border-b ${
                      isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-900'
                    }`}>
                      <span>{t.accessibilityBtn}</span>
                      <span className="text-[10px] text-blue-500 font-mono">WCAG 2.1</span>
                    </div>

                    <div>
                      <label className={`text-[11px] font-medium block mb-1.5 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>Text Size</label>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => onUpdatePreferences({ fontSize: 'normal' })}
                          className={`px-2.5 py-1.5 rounded-xl text-center font-medium transition ${
                            preferences.fontSize === 'normal'
                              ? 'bg-blue-600 text-white shadow-md font-bold'
                              : isDark
                              ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {t.fontSizeNormal}
                        </button>
                        <button
                          onClick={() => onUpdatePreferences({ fontSize: 'large' })}
                          className={`px-2.5 py-1.5 rounded-xl text-center font-bold transition text-sm ${
                            preferences.fontSize === 'large'
                              ? 'bg-blue-600 text-white shadow-md font-bold'
                              : isDark
                              ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {t.fontSizeLarge}
                        </button>
                      </div>
                    </div>

                    <div className={`pt-2 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                      <button
                        onClick={() => onUpdatePreferences({ highContrast: !preferences.highContrast })}
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl font-medium transition ${
                          preferences.highContrast
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : isDark
                            ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <span>{t.contrastToggle}</span>
                        <span className="text-[10px] font-mono">{preferences.highContrast ? 'ON' : 'OFF'}</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Selector Dropdown - Fixed Stacking Context & Overflow */}
            <div className="relative z-50" ref={langRef}>
              <motion.button
                onClick={() => {
                  setShowLangDropdown(!showLangDropdown);
                  setShowAccessDropdown(false);
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-sm ${
                  isDark
                    ? 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-400/30'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                }`}
                title="Select Preferred Language"
              >
                <Globe className="w-4 h-4 text-blue-500" />
                <span>{languages.find(l => l.code === currentLanguage)?.native}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </motion.button>

              <AnimatePresence>
                {showLangDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className={`absolute right-0 mt-2.5 w-52 rounded-2xl py-2 z-50 shadow-2xl border ${
                      isDark
                        ? 'bg-slate-900/95 backdrop-blur-xl text-white border-white/15'
                        : 'bg-white/95 backdrop-blur-xl text-slate-900 border-slate-200'
                    }`}
                  >
                    <div className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Language / भाषा / ভাষা
                    </div>
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setShowLangDropdown(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between transition ${
                          currentLanguage === lang.code
                            ? isDark ? 'bg-blue-600/30 text-white font-bold' : 'bg-blue-50 text-blue-700 font-bold'
                            : isDark ? 'text-slate-300 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold">{lang.native}</span>
                          <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{lang.label}</span>
                        </div>
                        {currentLanguage === lang.code && (
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
