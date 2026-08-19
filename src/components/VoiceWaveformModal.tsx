import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, X, Check } from 'lucide-react';

interface VoiceWaveformModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onTranscriptionComplete: (transcript: string) => void;
}

export const VoiceWaveformModal: React.FC<VoiceWaveformModalProps> = ({
  isOpen,
  language,
  onClose,
  onTranscriptionComplete,
}) => {
  const [stage, setStage] = useState<'listening' | 'transcribing' | 'done'>('listening');
  const [transcribedText, setTranscribedText] = useState('');

  const sampleVoiceInputs: Record<Language, string> = {
    en: 'I want to apply for a fresh passport. What documents do I need?',
    hi: 'मुझे नया पासपोर्ट बनवाना है। क्या-क्या दस्तावेज लगेंगे?',
    bn: 'আমি নতুন পাসপোর্ট আবেদন করতে চাই। কী কী কাগজপত্র লাগবে?',
    ta: 'நான் புதிய பாஸ்போர்ட் விண்ணப்பிக்க விரும்புகிறேன். என்ன ஆவணங்கள் தேவை?'
  };

  useEffect(() => {
    if (!isOpen) {
      setStage('listening');
      setTranscribedText('');
      return;
    }

    setStage('listening');
    const targetText = sampleVoiceInputs[language];

    const timer1 = setTimeout(() => {
      setStage('transcribing');
      let currentIdx = 0;
      const interval = setInterval(() => {
        if (currentIdx <= targetText.length) {
          setTranscribedText(targetText.slice(0, currentIdx));
          currentIdx += 4;
        } else {
          clearInterval(interval);
          setStage('done');
          setTimeout(() => {
            onTranscriptionComplete(targetText);
          }, 800);
        }
      }, 45);

      return () => clearInterval(interval);
    }, 1200);

    return () => clearTimeout(timer1);
  }, [isOpen, language]);

  if (!isOpen) return null;

  const titles: Record<Language, string> = {
    en: 'Voice Assistant — Listening',
    hi: 'ध्वनि सहायक — सुन रहे हैं...',
    bn: 'ভয়েস সহকারী — শুনছি...',
    ta: 'குரல் உதவி — கேட்கிறது...'
  };

  const subtitles: Record<Language, string> = {
    en: 'Speak naturally in Hindi, Bengali, Tamil, or English',
    hi: 'हिंदी, बांग्ला, तमिल या अंग्रेजी में स्वाभाविक रूप से बोलें',
    bn: 'বাংলা, হিন্দি, তামিল বা ইংরেজিতে স্বাভাবিকভাবে বলুন',
    ta: 'தமிழ், ஹிந்தி, பங்களா அல்லது ஆங்கிலத்தில் பேசுங்கள்'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-2xl animate-fade-in">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-white/20 relative overflow-hidden text-center text-white"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition"
          title="Cancel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{stage === 'listening' ? 'LIVE AUDIO' : stage === 'transcribing' ? 'PROCESSING' : 'RECOGNIZED'}</span>
        </div>

        {/* Animated Mic & Glowing Orbs */}
        <div className="relative my-6 flex items-center justify-center">
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-gov-glow border border-blue-400/50">
            <Mic className="w-9 h-9 text-amber-300 animate-pulse" />
          </div>
        </div>

        {/* Dynamic Waveform Visualizer Bars */}
        <div className="flex items-center justify-center gap-1.5 h-12 my-6">
          {[40, 75, 100, 60, 90, 45, 80, 100, 70, 50, 85, 30].map((height, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-full"
              animate={stage === 'listening' ? {
                height: ['20%', `${height}%`, '20%'],
                backgroundColor: i % 3 === 0 ? '#F97316' : '#3B82F6'
              } : { height: '20%', backgroundColor: '#64748B' }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.08,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <h3 className="text-xl font-bold font-display text-white">
          {titles[language]}
        </h3>
        <p className="text-xs text-slate-400 mt-1 mb-5">
          {subtitles[language]}
        </p>

        {/* Live Transcription Box */}
        <div className="min-h-[75px] bg-slate-950/60 border border-white/10 rounded-2xl p-4 flex items-center justify-center text-slate-200 font-medium text-sm sm:text-base">
          {transcribedText ? (
            <span className="text-amber-300 italic font-mono">
              "{transcribedText}"
            </span>
          ) : (
            <span className="text-slate-500 italic">
              Listening to voice input...
            </span>
          )}
        </div>

        {/* Status Indicator */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          {stage === 'done' ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
              <Check className="w-4 h-4" /> Submitting query to NagrikAI...
            </span>
          ) : (
            <span>Auto-detecting Indian dialects & accents</span>
          )}
        </div>

      </motion.div>
    </div>
  );
};
