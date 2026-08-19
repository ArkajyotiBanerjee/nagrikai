import React, { useState, useEffect } from 'react';
import { Language, ServiceCategory, ServiceData, UserPreferences } from './types';
import { SERVICES_DATA, matchServiceByQuery } from './data/servicesData';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroArea } from './components/HeroArea';
import { ServiceResponseCard } from './components/ServiceResponseCard';
import { GuidedWorkflowModal } from './components/GuidedWorkflowModal';
import { ServicesDirectoryModal } from './components/ServicesDirectoryModal';
import { EmergencyHelplinesModal } from './components/EmergencyHelplinesModal';
import { VoiceWaveformModal } from './components/VoiceWaveformModal';
import { NotFoundCard } from './components/NotFoundCard';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import { 
  Sparkles, 
  RotateCcw, 
  ShieldCheck, 
  Lock, 
  Loader2,
  CheckCircle2
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeService, setActiveService] = useState<ServiceData | null>(null);
  const [lastQuery, setLastQuery] = useState('');
  const [isNotFound, setIsNotFound] = useState(false);

  // Application Theme State ('dark' by default, persisted in localStorage)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nagrik_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  // Modals state
  const [guidedModalService, setGuidedModalService] = useState<ServiceData | null>(null);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [isHelplinesOpen, setIsHelplinesOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  // Accessibility state
  const [preferences, setPreferences] = useState<UserPreferences>({
    fontSize: 'normal',
    highContrast: false,
  });

  const t = TRANSLATIONS[currentLanguage];

  // Theme Sync & Persistence
  useEffect(() => {
    localStorage.setItem('nagrik_theme', theme);
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Apply accessibility classes to root html
  useEffect(() => {
    const root = document.documentElement;
    if (preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (preferences.fontSize === 'large') {
      root.classList.add('font-large');
    } else {
      root.classList.remove('font-large');
    }
  }, [preferences]);

  // Handle Query Submission
  const handleQuerySubmit = (query: string) => {
    setIsLoading(true);
    setLastQuery(query);

    setTimeout(() => {
      const matched = matchServiceByQuery(query);
      if (matched) {
        setActiveService(matched);
        setIsNotFound(false);
      } else {
        setActiveService(null);
        setIsNotFound(true);
      }
      setIsLoading(false);

      setTimeout(() => {
        const target = document.getElementById('response-anchor');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 450);
  };

  // Quick select from category or directory
  const handleSelectServiceDirectly = (service: ServiceData) => {
    setActiveService(service);
    setIsNotFound(false);
    setLastQuery(service.title[currentLanguage]);
    setInputQuery(service.title[currentLanguage]);

    setTimeout(() => {
      const target = document.getElementById('response-anchor');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Category selection handler
  const handleSelectCategory = (cat: ServiceCategory) => {
    setSelectedCategory(cat);
    if (cat !== 'all') {
      const firstInCat = SERVICES_DATA.find(s => s.category === cat);
      if (firstInCat) {
        handleSelectServiceDirectly(firstInCat);
      }
    }
  };

  // Reset to initial clean state
  const handleResetToHome = () => {
    setActiveService(null);
    setIsNotFound(false);
    setInputQuery('');
    setLastQuery('');
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col bg-grid-pattern transition-colors duration-300 font-sans relative overflow-x-hidden ${
      isDark ? 'bg-[#050A17] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      
      {/* Background Lighting Streaks */}
      <div className={`fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-10 ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-400/15'
      }`} />
      <div className={`fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 ${
        isDark ? 'bg-amber-500/10' : 'bg-amber-300/15'
      }`} />

      {/* 1. Global Translucent Navbar */}
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onOpenDirectory={() => setIsDirectoryOpen(true)}
        onOpenHelplines={() => setIsHelplinesOpen(true)}
        preferences={preferences}
        onUpdatePreferences={(updated) => setPreferences({ ...preferences, ...updated })}
        onResetToHome={handleResetToHome}
        theme={theme}
        onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      />

      {/* 2. Main Content Area */}
      <main className="flex-1">
        
        {/* Hero & Search Prompt Area */}
        <HeroArea
          currentLanguage={currentLanguage}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onSubmitQuery={handleQuerySubmit}
          onOpenVoiceModal={() => setIsVoiceOpen(true)}
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          isLoading={isLoading}
          theme={theme}
        />

        {/* Anchor for Auto Scroll */}
        <div id="response-anchor" className="h-2"></div>

        {/* 3. Loading Indicator State */}
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-md mx-auto my-12 p-6 rounded-3xl glass-panel shadow-2xl text-center ${
              isDark ? 'border border-white/20' : 'border border-slate-200'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center mb-3 border ${
              isDark ? 'bg-blue-500/20 text-blue-400 border-blue-400/20' : 'bg-blue-50 text-blue-600 border-blue-200'
            }`}>
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
            <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Consulting Verified Government Information...
            </h4>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Matching eligibility criteria, document checklists, and application guidelines.
            </p>
          </motion.div>
        )}

        {/* 4. Active Service Structured Response Card */}
        {!isLoading && activeService && (
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            
            {/* Consultation Toolbar / Reset Bar */}
            <div className="max-w-4xl mx-auto mb-3 flex items-center justify-between text-xs px-2">
              <span className={`font-semibold flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Citizen Consultation Results
              </span>
              <button
                onClick={handleResetToHome}
                className={`inline-flex items-center gap-1 font-bold transition ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.clearChatBtn}</span>
              </button>
            </div>

            <ServiceResponseCard
              service={activeService}
              language={currentLanguage}
              onLaunchGuidedFlow={(svc) => setGuidedModalService(svc)}
              onOpenHelpline={(num) => setIsHelplinesOpen(true)}
            />
          </div>
        )}

        {/* 5. Not Found / Fallback Card */}
        {!isLoading && isNotFound && (
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            <NotFoundCard
              language={currentLanguage}
              queryText={lastQuery}
              allServices={SERVICES_DATA}
              onSelectService={handleSelectServiceDirectly}
              onOpenDirectory={() => setIsDirectoryOpen(true)}
            />
          </div>
        )}

        {/* 6. Default Landing Spotlight */}
        {!isLoading && !activeService && !isNotFound && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14"
          >
            
            <div className="text-center mb-10">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-3 ${
                isDark ? 'bg-white/5 text-slate-300 border-white/10' : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Why Citizens & Judges Love NagrikAI</span>
              </div>
              <h3 className={`text-2xl sm:text-4xl font-black font-display ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Transforming Indian Civic Tech with Intelligent Guidance
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature 1 */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-7 rounded-3xl glass-card shadow-xl border ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-bold text-xl border ${
                  isDark ? 'bg-blue-500/20 text-blue-400 border-blue-400/20' : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}>
                  🌐
                </div>
                <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Truly Multilingual Experience
                </h4>
                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Citizens can ask questions and receive structured guidance in English, हिंदी, or বাংলা with instant zero-loss translation.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-7 rounded-3xl glass-card shadow-xl border ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-bold text-xl border ${
                  isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-400/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  📋
                </div>
                <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Live Document Readiness Score
                </h4>
                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Interactive checklist calculates citizen readiness percentage in real-time and suggests acceptable alternative proofs.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-7 rounded-3xl glass-card shadow-xl border ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-bold text-xl border ${
                  isDark ? 'bg-amber-500/20 text-amber-400 border-amber-400/20' : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  ⚡
                </div>
                <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  5-Stage Guided Application Flow
                </h4>
                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Goes beyond answers to guide citizens through eligibility, documents, form preview, Kendra appointment slot, and printable QR passes.
                </p>
              </motion.div>

            </div>

            {/* Quick Demo Launch Banner for Judges */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className={`mt-10 p-7 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden border ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-blue-500/30 text-white' 
                  : 'bg-gradient-to-r from-blue-900 via-gov-navy to-slate-900 border-blue-700/30 text-white'
              }`}
            >
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  FAST HACKATHON DEMO
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  Try the Passport or Aadhaar Application Flow
                </h4>
                <p className="text-xs text-slate-300">
                  Click to immediately test the end-to-end citizen navigator.
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectServiceDirectly(SERVICES_DATA[0])}
                  className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-gov-saffron-glow transition"
                >
                  Test Passport Flow →
                </motion.button>
                <button
                  onClick={() => setIsDirectoryOpen(true)}
                  className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition"
                >
                  All 12 Services
                </button>
              </div>
            </motion.div>

          </motion.div>
        )}

      </main>

      {/* 7. Official Civic Tech Footer */}
      <footer className={`text-xs border-t pt-10 pb-12 mt-auto ${
        isDark ? 'bg-slate-950 text-slate-400 border-white/10' : 'bg-slate-900 text-slate-400 border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
            
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  IN
                </div>
                <span className="text-lg font-black text-white font-display tracking-tight">
                  NagrikAI
                </span>
                <span className="text-[10px] bg-white/10 text-amber-300 px-2 py-0.5 rounded font-mono border border-white/10">
                  Civic Hackathon MVP
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                NagrikAI is an AI-assisted civic intelligence prototype designed to make public services, welfare schemes, and application workflows transparent, accessible, and multilingual for every Indian citizen.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Key Public Portals
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href="https://passportindia.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition">Passport Seva (MEA)</a></li>
                <li><a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition">UIDAI myAadhaar</a></li>
                <li><a href="https://voters.eci.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition">ECI Voter Portal</a></li>
                <li><a href="https://sarathi.parivahan.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition">Parivahan Sarathi</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Citizen Safety & Trust
              </h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Mock Safe Sandbox</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Lock className="w-4 h-4" />
                  <span>Zero-Knowledge Data Retention</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Built for Hackathon Demonstration. Not an official government portal.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>© 2026 NagrikAI • Government Services, Simplified.</p>
            <div className="flex items-center gap-4">
              <span>National Civic Intelligence Platform</span>
              <span>•</span>
              <span>English | हिंदी | বাংলা | தமிழ்</span>
            </div>
          </div>

        </div>
      </footer>

      {/* MODALS */}
      
      <GuidedWorkflowModal
        isOpen={!!guidedModalService}
        service={guidedModalService}
        language={currentLanguage}
        onClose={() => setGuidedModalService(null)}
      />

      <ServicesDirectoryModal
        isOpen={isDirectoryOpen}
        services={SERVICES_DATA}
        language={currentLanguage}
        onClose={() => setIsDirectoryOpen(false)}
        onSelectService={handleSelectServiceDirectly}
      />

      <EmergencyHelplinesModal
        isOpen={isHelplinesOpen}
        language={currentLanguage}
        onClose={() => setIsHelplinesOpen(false)}
      />

      <VoiceWaveformModal
        isOpen={isVoiceOpen}
        language={currentLanguage}
        onClose={() => setIsVoiceOpen(false)}
        onTranscriptionComplete={(transcript) => {
          setIsVoiceOpen(false);
          setInputQuery(transcript);
          handleQuerySubmit(transcript);
        }}
      />

    </div>
  );
};

export default App;
