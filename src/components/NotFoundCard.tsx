import React from 'react';
import { Language, ServiceData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { HelpCircle, ArrowRight, Grid } from 'lucide-react';

interface NotFoundCardProps {
  language: Language;
  queryText: string;
  allServices: ServiceData[];
  onSelectService: (service: ServiceData) => void;
  onOpenDirectory: () => void;
}

export const NotFoundCard: React.FC<NotFoundCardProps> = ({
  language,
  queryText,
  allServices,
  onSelectService,
  onOpenDirectory,
}) => {
  const t = TRANSLATIONS[language];
  const popularServices = allServices.slice(0, 6);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-panel rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-8 max-w-3xl mx-auto my-6 text-center sm:text-left text-white"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
          <HelpCircle className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white font-display">
            {t.notFoundMessage.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {t.notFoundMessage.text}
          </p>

          {queryText && (
            <div className="mt-3 p-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs font-mono text-amber-300 italic">
              "{queryText}"
            </div>
          )}

          <div className="mt-5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              {t.notFoundMessage.suggestionsPrompt}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {popularServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="p-3 rounded-xl glass-card hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/40 text-left text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-between transition group"
                >
                  <span className="truncate">{service.title[language]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex justify-center sm:justify-start">
            <button
              onClick={onOpenDirectory}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg"
            >
              <Grid className="w-4 h-4" />
              <span>Browse All 12 Public Services</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
