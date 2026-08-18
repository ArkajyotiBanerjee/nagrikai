import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, EMERGENCY_HELPLINES } from '../data/translations';
import { motion } from 'motion/react';
import { X, PhoneCall, Phone } from 'lucide-react';

interface EmergencyHelplinesModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const EmergencyHelplinesModal: React.FC<EmergencyHelplinesModalProps> = ({
  isOpen,
  language,
  onClose,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-2xl animate-fade-in text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-3xl max-w-2xl w-full shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {t.emergencyHelplineModal.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.emergencyHelplineModal.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Helpline Numbers List (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EMERGENCY_HELPLINES.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-card border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-amber-300 border border-white/10">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium truncate max-w-[120px]">
                      {item.agency}
                    </span>
                  </div>

                  <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h5>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    {item.number}
                  </span>
                  <a
                    href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition active:scale-95"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Dial</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>All lines operate 24x7 across India under Government of India</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 font-bold text-white transition"
          >
            {t.emergencyHelplineModal.close}
          </button>
        </div>

      </motion.div>
    </div>
  );
};
