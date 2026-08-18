import React, { useState } from 'react';
import { ServiceData, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Printer, 
  QrCode, 
  Sparkles, 
  CheckSquare, 
  Square
} from 'lucide-react';

interface GuidedWorkflowModalProps {
  isOpen: boolean;
  service: ServiceData | null;
  language: Language;
  onClose: () => void;
}

export const GuidedWorkflowModal: React.FC<GuidedWorkflowModalProps> = ({
  isOpen,
  service,
  language,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  
  const [applicant, setApplicant] = useState({
    fullName: 'Arka Bhattacharya',
    dob: '1998-05-14',
    phone: '+91 98765 43210',
    aadhaarMasked: 'XXXX-XXXX-8821',
    state: 'Delhi (NCT)',
    city: 'New Delhi',
    pincode: '110001',
    center: 'Passport Seva Kendra (PSK) - Herald House, ITO',
    date: '2026-08-25',
    timeSlot: '10:30 AM - 11:00 AM'
  });

  if (!isOpen || !service) return null;

  const t = TRANSLATIONS[language];
  const totalSteps = 5;

  const stepsConfig = [
    { num: 1, title: t.guidedWizard.step1Title, subtitle: t.guidedWizard.step1Subtitle },
    { num: 2, title: t.guidedWizard.step2Title, subtitle: t.guidedWizard.step2Subtitle },
    { num: 3, title: t.guidedWizard.step3Title, subtitle: t.guidedWizard.step3Subtitle },
    { num: 4, title: t.guidedWizard.step4Title, subtitle: t.guidedWizard.step4Subtitle },
    { num: 5, title: t.guidedWizard.step5Title, subtitle: t.guidedWizard.step5Subtitle },
  ];

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      if (currentStep + 1 === totalSteps) {
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore if canvas not supported
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const docs = service.documents[language] || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-2xl animate-fade-in overflow-y-auto">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-3xl max-w-3xl w-full shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[92vh] text-white"
      >
        
        {/* Modal Top Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
              0{currentStep}
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                {t.guidedWizard.step} {currentStep} {t.guidedWizard.of} {totalSteps}
              </span>
              <h3 className="text-base sm:text-lg font-bold font-display line-clamp-1">
                {service.title[language]}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition"
            title={t.guidedWizard.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progression Bar */}
        <div className="bg-slate-900/60 px-6 py-3 border-b border-white/10 shrink-0 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[500px]">
            {stepsConfig.map((s) => {
              const isPast = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              return (
                <div key={s.num} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isPast ? 'bg-emerald-500 text-slate-950 font-extrabold' :
                    isCurrent ? 'bg-blue-600 text-white ring-2 ring-blue-400/60' :
                    'bg-slate-800 text-slate-500 border border-white/5'
                  }`}>
                    {isPast ? '✓' : `0${s.num}`}
                  </div>
                  <span className={`text-xs font-semibold ${
                    isCurrent ? 'text-white font-bold' : isPast ? 'text-emerald-400' : 'text-slate-500'
                  }`}>
                    {s.title.split(' ')[0]}
                  </span>
                  {s.num < totalSteps && (
                    <div className={`w-8 sm:w-12 h-0.5 mx-1 ${
                      isPast ? 'bg-emerald-500' : 'bg-slate-800'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content Area with Motion AnimatePresence */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          <div className="border-b border-white/10 pb-3">
            <h4 className="text-xl font-extrabold text-white font-display">
              {stepsConfig[currentStep - 1].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {stepsConfig[currentStep - 1].subtitle}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              {/* STEP 1: ELIGIBILITY CHECK */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl glass-card border border-blue-500/30">
                    <p className="text-xs sm:text-sm font-semibold text-blue-300 mb-3">
                      Please verify that you satisfy the following eligibility conditions:
                    </p>
                    <div className="space-y-2.5">
                      {service.eligibility[language]?.map((crit, idx) => (
                        <label key={idx} className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-white/10 cursor-pointer">
                          <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                          <span className="text-xs sm:text-sm text-slate-200 font-medium">
                            {crit}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Eligibility Confirmed: You qualify for statutory citizen application under current Ministry rules.</span>
                  </div>
                </div>
              )}

              {/* STEP 2: DOCUMENTS AUDIT */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300">
                    Ensure you have both original physical copies and digital scans of these required documents ready:
                  </p>
                  
                  <div className="space-y-2.5">
                    {docs.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => toggleDoc(doc.id)}
                        className="p-3.5 rounded-2xl border border-white/10 hover:border-blue-400/40 bg-slate-950/50 flex items-start gap-3 cursor-pointer select-none"
                      >
                        <div className="mt-0.5 text-blue-400">
                          {checkedDocs[doc.id] !== false ? (
                            <CheckSquare className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-600" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white">{doc.name}</span>
                            {doc.required && (
                              <span className="text-[9px] bg-red-500/20 text-red-300 border border-red-500/30 px-1.5 py-0.5 rounded font-bold">Mandatory</span>
                            )}
                          </div>
                          {doc.note && <p className="text-xs text-slate-400 mt-0.5">{doc.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Tip: Bring original documents along with 2 self-attested photocopies to your appointment.</span>
                  </div>
                </div>
              )}

              {/* STEP 3: APPLICANT PREFILL */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                    <div>
                      <label className="font-bold text-slate-300 block mb-1">{t.guidedWizard.fullNameLabel}</label>
                      <input
                        type="text"
                        value={applicant.fullName}
                        onChange={(e) => setApplicant({ ...applicant, fullName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-950/80 text-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-300 block mb-1">{t.guidedWizard.dobLabel}</label>
                      <input
                        type="date"
                        value={applicant.dob}
                        onChange={(e) => setApplicant({ ...applicant, dob: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-950/80 text-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-300 block mb-1">{t.guidedWizard.phoneLabel}</label>
                      <input
                        type="text"
                        value={applicant.phone}
                        onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-950/80 text-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-300 block mb-1">Aadhaar Linked (Masked UID)</label>
                      <input
                        type="text"
                        disabled
                        value={applicant.aadhaarMasked}
                        className="w-full p-2.5 rounded-xl border border-white/10 bg-slate-950 text-slate-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-300 block mb-1">{t.guidedWizard.stateLabel}</label>
                      <input
                        type="text"
                        value={applicant.state}
                        onChange={(e) => setApplicant({ ...applicant, state: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-950/80 text-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-300 block mb-1">{t.guidedWizard.cityLabel}</label>
                      <input
                        type="text"
                        value={applicant.city}
                        onChange={(e) => setApplicant({ ...applicant, city: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-950/80 text-white font-medium"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-blue-600/15 rounded-xl border border-blue-400/20 text-xs text-blue-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>NagrikAI uses zero-knowledge local prefill. No sensitive citizen data is saved on external servers.</span>
                  </div>
                </div>
              )}

              {/* STEP 4: SLOT SELECTION */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.guidedWizard.centerSelectLabel}</label>
                    <select
                      value={applicant.center}
                      onChange={(e) => setApplicant({ ...applicant, center: e.target.value })}
                      className="w-full p-3 rounded-xl border border-white/15 bg-slate-950 text-xs sm:text-sm font-semibold text-white focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="Passport Seva Kendra (PSK) - Herald House, ITO, New Delhi">Passport Seva Kendra (PSK) - Herald House, ITO, New Delhi</option>
                      <option value="Post Office Passport Seva Kendra (POPSK) - Nehru Place">Post Office Passport Seva Kendra (POPSK) - Nehru Place</option>
                      <option value="Aadhaar / Seva Kendra - District Collectorate Complex">Aadhaar / Seva Kendra - District Collectorate Complex</option>
                      <option value="e-District Service Center - Block Office">e-District Service Center - Block Office</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.guidedWizard.dateSelectLabel}</label>
                      <input
                        type="date"
                        value={applicant.date}
                        onChange={(e) => setApplicant({ ...applicant, date: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-white/15 bg-slate-950 text-white text-xs sm:text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.guidedWizard.timeSlotLabel}</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['09:30 AM - 10:00 AM', '10:30 AM - 11:00 AM', '02:00 PM - 02:30 PM', '04:00 PM - 04:30 PM'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setApplicant({ ...applicant, timeSlot: slot })}
                            className={`p-2 rounded-xl text-[11px] font-bold border transition ${
                              applicant.timeSlot === slot
                                ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                                : 'bg-slate-950 text-slate-300 border-white/10 hover:bg-white/5'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Selected Slot: {applicant.date} at {applicant.timeSlot} (Arrive 15 minutes prior).</span>
                  </div>
                </div>
              )}

              {/* STEP 5: FINAL DOSSIER & QR CONFIRMATION */}
              {currentStep === 5 && (
                <div id="printable-dossier" className="space-y-4">
                  
                  {/* Official Application Receipt Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white shadow-2xl border border-blue-500/40 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <div className="text-center sm:text-left">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                          OFFICIAL GOVERNMENT CITIZEN PASS
                        </span>
                        <h5 className="text-xl font-black font-display text-white">
                          {service.title[language]}
                        </h5>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {service.department[language]}
                        </p>
                      </div>

                      {/* QR Code Badge */}
                      <div className="p-2.5 rounded-2xl bg-white text-slate-950 flex flex-col items-center justify-center shrink-0 shadow-lg">
                        <QrCode className="w-14 h-14" />
                        <span className="text-[9px] font-extrabold tracking-tighter uppercase mt-0.5">SCAN AT KENDRA</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Reference Number</span>
                        <span className="font-mono font-bold text-amber-300">NGK-2026-PASS-8842</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Applicant Name</span>
                        <span className="font-bold text-white">{applicant.fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Appointment Date</span>
                        <span className="font-bold text-white">{applicant.date}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Time Slot</span>
                        <span className="font-bold text-emerald-400">{applicant.timeSlot}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{applicant.center}</span>
                    </div>
                  </div>

                  {/* Ready Checklist Summary */}
                  <div className="p-4 rounded-2xl glass-card border border-white/10">
                    <h6 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Document Checklist Verified:
                    </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {docs.map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{d.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action: Print Dossier */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 no-print">
                    <button
                      onClick={handlePrint}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-white/15 transition"
                    >
                      <Printer className="w-4 h-4" />
                      <span>{t.guidedWizard.dossierDownload}</span>
                    </button>

                    <a
                      href={service.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
                    >
                      <span>Submit on Official Portal →</span>
                    </a>
                  </div>

                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-950 px-6 py-4 border-t border-white/10 flex items-center justify-between shrink-0 no-print">
          
          <button
            onClick={currentStep === 1 ? onClose : handleBack}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-400 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"
          >
            {currentStep === 1 ? (
              <span>{t.guidedWizard.close}</span>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>{t.guidedWizard.back}</span>
              </>
            )}
          </button>

          {currentStep < totalSteps ? (
            <motion.button
              onClick={handleContinue}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <span>{t.guidedWizard.continue}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.guidedWizard.returnToAssistant}</span>
            </motion.button>
          )}

        </div>

      </motion.div>

    </div>
  );
};
