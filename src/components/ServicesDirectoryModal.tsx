import React, { useState } from 'react';
import { ServiceData, Language, ServiceCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { 
  X, 
  Search, 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  Vote, 
  Car, 
  Baby, 
  Coins, 
  Award, 
  Sprout, 
  HeartPulse, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Clock,
  IndianRupee,
  Sparkles
} from 'lucide-react';

interface ServicesDirectoryModalProps {
  isOpen: boolean;
  services: ServiceData[];
  language: Language;
  onClose: () => void;
  onSelectService: (service: ServiceData) => void;
}

export const ServicesDirectoryModal: React.FC<ServicesDirectoryModalProps> = ({
  isOpen,
  services,
  language,
  onClose,
  onSelectService,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<ServiceCategory>('all');

  if (!isOpen) return null;

  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'FileText': return <FileText {...props} className="text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck {...props} className="text-emerald-400" />;
      case 'CreditCard': return <CreditCard {...props} className="text-indigo-400" />;
      case 'Vote': return <Vote {...props} className="text-purple-400" />;
      case 'Car': return <Car {...props} className="text-amber-400" />;
      case 'Baby': return <Baby {...props} className="text-pink-400" />;
      case 'Coins': return <Coins {...props} className="text-yellow-400" />;
      case 'Award': return <Award {...props} className="text-orange-400" />;
      case 'Sprout': return <Sprout {...props} className="text-green-400" />;
      case 'HeartPulse': return <HeartPulse {...props} className="text-rose-400" />;
      case 'Users': return <Users {...props} className="text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap {...props} className="text-sky-400" />;
      default: return <Sparkles {...props} className="text-blue-400" />;
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

  const filteredServices = services.filter((s) => {
    const matchesCat = selectedCat === 'all' || s.category === selectedCat;
    const titleMatch = s.title[language].toLowerCase().includes(searchTerm.toLowerCase());
    const deptMatch = s.department[language].toLowerCase().includes(searchTerm.toLowerCase());
    const keywordMatch = s.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && (titleMatch || deptMatch || keywordMatch);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-2xl animate-fade-in text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-3xl max-w-5xl w-full shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[92vh]"
      >
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 mb-1 border border-blue-400/30">
              <span>National Civic Services Catalog</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              {t.directoryModal.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {t.directoryModal.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and Search */}
        <div className="p-4 sm:p-6 bg-slate-950/50 border-b border-white/10 shrink-0 space-y-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.directoryModal.searchServices}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/15 bg-slate-950/80 text-white text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  selectedCat === cat
                    ? 'bg-blue-600 text-white shadow-md font-bold'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                }`}
              >
                {t.categories[cat]}
              </button>
            ))}
          </div>

        </div>

        {/* 12 Services Grid (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelectService(service);
                  onClose();
                }}
                className="p-4 rounded-2xl glass-card hover:border-blue-400/50 hover:bg-slate-900/80 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-white/10"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors shrink-0 border border-white/10">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/20">
                      {t.categories[service.category]}
                    </span>
                  </div>

                  <h4 className="text-sm font-extrabold text-white font-display line-clamp-1 group-hover:text-blue-300 transition-colors">
                    {service.title[language]}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {service.shortSummary[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span className="truncate">{service.processingTime[language]}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 font-semibold text-emerald-400">
                      <IndianRupee className="w-3.5 h-3.5" />
                      <span className="truncate">{service.fee[language]}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-blue-400 font-bold group-hover:translate-x-1 transition-transform">
                      {t.directoryModal.selectService} →
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm">No services found matching "{searchTerm}".</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Showing {filteredServices.length} of {services.length} Public Services</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 font-bold text-white transition"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
};
