export type Language = 'en' | 'hi' | 'bn';

export type ServiceCategory = 
  | 'all' 
  | 'identity' 
  | 'welfare' 
  | 'transport' 
  | 'certificates' 
  | 'education';

export interface ServiceDocument {
  id: string;
  name: string;
  required: boolean;
  alternatives?: string[];
  note?: string;
}

export interface ServiceStep {
  stepNumber: number;
  title: string;
  description: string;
  duration?: string;
  actionType?: 'online' | 'in-person' | 'verification' | 'delivery';
  officialUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GuidedWorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  type: 'eligibility_check' | 'document_upload_prep' | 'applicant_details' | 'slot_selection' | 'final_review';
}

export interface ServiceData {
  id: string;
  iconName: string;
  category: ServiceCategory;
  department: Record<Language, string>;
  officialPortal: string;
  officialUrl: string;
  lastVerified: string;
  processingTime: Record<Language, string>;
  fee: Record<Language, string>;
  keywords: string[];
  title: Record<Language, string>;
  badge: Record<Language, string>;
  shortSummary: Record<Language, string>;
  eligibility: Record<Language, string[]>;
  documents: Record<Language, ServiceDocument[]>;
  steps: Record<Language, ServiceStep[]>;
  timeline: Record<Language, string[]>;
  faq: Record<Language, FAQItem[]>;
  helpline: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  queryText?: string;
  matchedServiceId?: string;
  isGreeting?: boolean;
  isNotFound?: boolean;
  language: Language;
}

export interface UserPreferences {
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
}
