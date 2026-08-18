import React, { useState, useEffect } from 'react';
import { ServiceData, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  IndianRupee, 
  ExternalLink, 
  ArrowRight, 
  CheckSquare, 
  Square, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Share2, 
  Printer, 
  FileCheck2, 
  Sparkles, 
  AlertCircle, 
  Building2,
  ChevronDown,
  ChevronUp,
  Phone
} from 'lucide-react';

interface ServiceResponseCardProps {
  service: ServiceData;
  language: Language;
  onLaunchGuidedFlow: (service: ServiceData) => void;
  onOpenHelpline: (number: string) => void;
}

export const ServiceResponseCard: React.FC<ServiceResponseCardProps> = ({
  service,
  language,
  onLaunchGuidedFlow,
  onOpenHelpline,
}) => {
  const t = TRANSLATIONS[language];
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const docs = service.documents[language] || [];
  const totalRequiredDocs = docs.filter(d => d.required).length;
  const checkedRequiredDocs = docs.filter(d => d.required && checkedDocs[d.id]).length;
  const readinessPercent = totalRequiredDocs > 0 ? Math.round((checkedRequiredDocs / totalRequiredDocs) * 100) : 100;

  useEffect(() => {
    if (docs.length > 0 && Object.keys(checkedDocs).length === 0) {
      const initial: Record<string, boolean> = {};
      docs.forEach((d, idx) => {
        if (idx === 0) initial[d.id] = true;
      });
      setCheckedDocs(initial);
    }
  }, [service.id, language]);

  const toggleDocCheck = (id: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAudioReadout = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }

      const textToSpeak = `${service.title[language]}. ${service.shortSummary[language]}. Processing time: ${service.processingTime[language]}. Official fee: ${service.fee[language]}.`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      
      if (language === 'hi') utterance.lang = 'hi-IN';
      else if (language === 'bn') utterance.lang = 'bn-IN';
      else utterance.lang = 'en-IN';

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported on this browser.');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-3xl border border-white/15 shadow-2xl overflow-hidden max-w-4xl mx-auto my-6 text-white"
    >
      
      {/* 1. Official Verified Trust Header */}
      <div className="bg-slate-950/80 px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-slate-200">{t.verifiedSourceBadge}</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-blue-300 font-mono hidden sm:inline">{service.officialPortal}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full font-medium border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {t.lastUpdated}
          </span>
        </div>
      </div>

      {/* 2. Main Service Header & Quick Meta */}
      <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            {service.badge[language]}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            {service.department[language]}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
          {service.title[language]}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          {service.shortSummary[language]}
        </p>

        {/* Quick Meta Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          
          <div className="p-3.5 rounded-2xl glass-card flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.processingTimeLabel}</p>
              <p className="text-xs sm:text-sm font-bold text-white">{service.processingTime[language]}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass-card flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20">
              <IndianRupee className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.feeLabel}</p>
              <p className="text-xs sm:text-sm font-bold text-white">{service.fee[language]}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass-card flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
              <Phone className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.helplineLabel}</p>
              <p className="text-xs sm:text-sm font-bold text-white truncate">{service.helpline}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* 3. Interactive Document Readiness Score Meter (HIGH-END GLASSMORTIC REDESIGN) */}
        <div className="glass-card rounded-3xl p-5 sm:p-6 relative overflow-hidden border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white font-display">
                  {t.documentsTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {t.documentsChecklistNote}
              </p>
            </div>

            {/* Live Readiness Score Meter */}
            <div className="bg-slate-950/60 px-4 py-2.5 rounded-2xl border border-white/10 flex items-center gap-3.5 shrink-0 shadow-lg">
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  {t.documentsReadyScore}
                </span>
                <span className={`text-lg font-extrabold ${readinessPercent === 100 ? 'text-emerald-400' : 'text-blue-400'}`}>
                  {readinessPercent}% Ready
                </span>
              </div>

              {/* Animated SVG Progress Ring */}
              <div className="w-12 h-12 relative flex items-center justify-center">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle cx="24" cy="24" r="18" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="4" fill="transparent" />
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke={readinessPercent === 100 ? '#10B981' : '#3B82F6'}
                    strokeWidth="4"
                    strokeDasharray={113}
                    strokeDashoffset={113 - (113 * readinessPercent) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <span className="absolute text-[11px] font-extrabold text-white">
                  {checkedRequiredDocs}/{totalRequiredDocs}
                </span>
              </div>
            </div>
          </div>

          {/* Documents Checklist Items */}
          <div className="space-y-2.5">
            {docs.map((doc) => {
              const isChecked = !!checkedDocs[doc.id];
              return (
                <motion.div
                  key={doc.id}
                  onClick={() => toggleDocCheck(doc.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-white shadow-md'
                      : 'bg-slate-950/40 border-white/10 text-slate-300 hover:border-blue-400/40 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="mt-0.5 text-blue-400 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-600" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs sm:text-sm font-semibold ${isChecked ? 'line-through text-slate-400' : 'text-white'}`}>
                        {doc.name}
                      </span>
                      {doc.required ? (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                          Mandatory
                        </span>
                      ) : (
                        <span className="text-[9px] font-medium px-2 py-0.5 rounded bg-white/10 text-slate-400">
                          Optional
                        </span>
                      )}
                    </div>

                    {doc.note && (
                      <p className="text-xs text-slate-400 mt-1">{doc.note}</p>
                    )}

                    {doc.alternatives && doc.alternatives.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1 text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-400">Acceptable Alternatives:</span>
                        {doc.alternatives.map((alt, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-200 font-medium">
                            {alt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Checklist Feedback Note */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            {readinessPercent === 100 ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> {t.guidedWizard.allDocsReadyNote}
              </span>
            ) : (
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" /> {t.guidedWizard.someDocsMissingNote}
              </span>
            )}
          </div>
        </div>

        {/* 4. Eligibility Criteria */}
        <div>
          <h3 className="text-lg font-bold text-white font-display mb-3">
            {t.eligibilityTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {service.eligibility[language]?.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl glass-card flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-400/20">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Step-by-Step Procedure */}
        <div>
          <h3 className="text-lg font-bold text-white font-display mb-3">
            {t.processTitle}
          </h3>

          {/* Timeline Visual Track */}
          <div className="hidden lg:flex items-center justify-between glass-card p-4 rounded-2xl mb-5 border border-white/10">
            {service.timeline[language]?.map((tStep, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center max-w-[130px]">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg border border-blue-400">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-bold text-slate-200 mt-2 line-clamp-2">
                    {tStep}
                  </span>
                </div>
                {idx < service.timeline[language].length - 1 && (
                  <div className="flex-1 h-0.5 bg-slate-700 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="space-y-3">
            {service.steps[language]?.map((step) => (
              <div key={step.stepNumber} className="p-4 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {step.duration && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                      {step.duration}
                    </span>
                  )}
                  {step.actionType && (
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                      step.actionType === 'online' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                      step.actionType === 'in-person' ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' :
                      step.actionType === 'delivery' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' :
                      'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                    }`}>
                      {step.actionType}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Action Callout: The Key Guided Workflow Trigger */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Interactive Civic Navigator
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white">
              Ready to begin your application?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Let NagrikAI guide you through eligibility check, document validation, applicant form prefill, and Kendra appointment slot booking.
            </p>
          </div>

          <motion.button
            onClick={() => onLaunchGuidedFlow(service)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-gov-saffron hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-gov-saffron-glow transition-all shrink-0 relative z-10"
          >
            <span>{t.guideMeBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* 7. Action Bar: Audio Readout, Print, Share, Official Portal */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          
          <div className="flex items-center gap-2 flex-wrap">
            {/* Audio Readout */}
            <motion.button
              onClick={handleAudioReadout}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                isPlayingAudio
                  ? 'bg-red-500/20 text-red-300 border-red-500/40 animate-pulse'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
              }`}
              title="Listen to summary in audio"
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
              <span>{isPlayingAudio ? t.audioPlaying : t.audioReadoutBtn}</span>
            </motion.button>

            {/* Print / Save Dossier */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 flex items-center gap-2 transition"
              title="Print guidance"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Print Guide</span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 flex items-center gap-2 transition"
              title="Share guidance link"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>{copied ? t.copiedToast : t.shareBtn}</span>
            </button>
          </div>

          {/* Official Portal External Link */}
          <a
            href={service.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 font-bold text-xs sm:text-sm border border-blue-400/30 transition"
          >
            <span>{t.officialPortalBtn}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

        </div>

        {/* 8. FAQs Accordion */}
        {service.faq[language]?.length > 0 && (
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              {t.faqTitle}
            </h4>

            <div className="space-y-2">
              {service.faq[language].map((faqItem, idx) => (
                <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden glass-card">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-3.5 text-left text-xs sm:text-sm font-bold text-white hover:bg-white/5 flex items-center justify-between gap-3"
                  >
                    <span>{faqItem.question}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {expandedFaq === idx && (
                    <div className="p-3.5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-slate-950/40">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </motion.div>
  );
};
