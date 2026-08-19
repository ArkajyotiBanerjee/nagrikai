import { Language, ServiceCategory } from '../types';

export interface UIStrings {
  brandName: string;
  brandTagline: string;
  badgeGovBeta: string;
  statusOnline: string;
  heroHeadline: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  sendBtn: string;
  listeningVoice: string;
  clickToSpeak: string;
  suggestedQueriesLabel: string;
  allServicesBtn: string;
  helplinesBtn: string;
  accessibilityBtn: string;
  fontSizeNormal: string;
  fontSizeLarge: string;
  contrastToggle: string;
  verifiedSourceBadge: string;
  sourceOfficialPortal: string;
  lastUpdated: string;
  eligibilityTitle: string;
  documentsTitle: string;
  documentsChecklistNote: string;
  documentsReadyScore: string;
  processTitle: string;
  estimatedTimelineTitle: string;
  officialPortalBtn: string;
  guideMeBtn: string;
  audioReadoutBtn: string;
  audioPlaying: string;
  shareBtn: string;
  copiedToast: string;
  printDossierBtn: string;
  clearChatBtn: string;
  resetConversationPrompt: string;
  faqTitle: string;
  deptLabel: string;
  processingTimeLabel: string;
  feeLabel: string;
  helplineLabel: string;
  categories: Record<ServiceCategory, string>;
  suggestedQueries: Array<{ query: string; icon: string; tag: string }>;
  guidedWizard: {
    back: string;
    continue: string;
    finish: string;
    step: string;
    of: string;
    close: string;
    step1Title: string;
    step1Subtitle: string;
    step2Title: string;
    step2Subtitle: string;
    step3Title: string;
    step3Subtitle: string;
    step4Title: string;
    step4Subtitle: string;
    step5Title: string;
    step5Subtitle: string;
    citizenDetails: string;
    fullNameLabel: string;
    dobLabel: string;
    phoneLabel: string;
    stateLabel: string;
    cityLabel: string;
    pincodeLabel: string;
    centerSelectLabel: string;
    dateSelectLabel: string;
    timeSlotLabel: string;
    bookingSuccess: string;
    dossierDownload: string;
    applicationRefId: string;
    returnToAssistant: string;
    allDocsReadyNote: string;
    someDocsMissingNote: string;
  };
  emergencyHelplineModal: {
    title: string;
    subtitle: string;
    close: string;
    callNow: string;
  };
  directoryModal: {
    title: string;
    subtitle: string;
    searchServices: string;
    selectService: string;
  };
  notFoundMessage: {
    title: string;
    text: string;
    suggestionsPrompt: string;
  };
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  en: {
    brandName: 'NagrikAI',
    brandTagline: 'Government services, simplified.',
    badgeGovBeta: 'Public Civic Beta',
    statusOnline: 'Govt Services: 100% Operational',
    heroHeadline: 'Your guide to government services',
    heroSubtitle: 'Ask questions in your preferred language. Get instant document checklists, eligibility criteria, and step-by-step application guidance.',
    searchPlaceholder: 'Ask anything... e.g., How do I apply for a passport? or Lost Aadhaar card',
    sendBtn: 'Ask NagrikAI',
    listeningVoice: 'Listening... Speak your query clearly',
    clickToSpeak: 'Ask with Voice (Hindi / English / Bengali)',
    suggestedQueriesLabel: 'Frequently Asked Citizen Queries',
    allServicesBtn: 'Explore All 12 Services',
    helplinesBtn: 'Emergency Helplines',
    accessibilityBtn: 'Accessibility',
    fontSizeNormal: 'Standard Font',
    fontSizeLarge: 'Large Text',
    contrastToggle: 'High Contrast Mode',
    verifiedSourceBadge: 'Verified Government Information',
    sourceOfficialPortal: 'Official Government Portal',
    lastUpdated: 'Verified: August 2026',
    eligibilityTitle: 'Eligibility Criteria',
    documentsTitle: 'Required Documents Checklist',
    documentsChecklistNote: 'Check off the documents you have ready to calculate your application readiness:',
    documentsReadyScore: 'Readiness Score',
    processTitle: 'Step-by-Step Application Procedure',
    estimatedTimelineTitle: 'Estimated Process Workflow',
    officialPortalBtn: 'Official Government Portal',
    guideMeBtn: 'Guide me through the application',
    audioReadoutBtn: 'Listen in Audio',
    audioPlaying: 'Playing Audio...',
    shareBtn: 'Share Guidance',
    copiedToast: 'Copied link to clipboard!',
    printDossierBtn: 'Print / Save Application Dossier',
    clearChatBtn: 'New Consultation',
    resetConversationPrompt: 'Conversation cleared.',
    faqTitle: 'Frequently Asked Questions (FAQs)',
    deptLabel: 'Nodal Ministry / Department',
    processingTimeLabel: 'Turnaround Time',
    feeLabel: 'Official Fee',
    helplineLabel: 'Dedicated Helpline',
    categories: {
      all: 'All Services',
      identity: 'Identity & Civil',
      welfare: 'Welfare & Health',
      transport: 'Transport & RTO',
      certificates: 'Certificates & Revenue',
      education: 'Education & Grants'
    },
    suggestedQueries: [
      { query: 'I want to apply for a passport. What documents do I need?', icon: 'FileText', tag: 'Passport' },
      { query: 'I lost my Aadhaar card. How can I download or order PVC?', icon: 'ShieldCheck', tag: 'Aadhaar' },
      { query: 'How do I apply for a new PAN card online?', icon: 'CreditCard', tag: 'PAN Card' },
      { query: 'How can I register as a new voter and get Voter ID (Form 6)?', icon: 'Vote', tag: 'Voter ID' },
      { query: 'How to renew my driving licence on Parivahan Sarathi?', icon: 'Car', tag: 'Driving Licence' },
      { query: 'How do I check PM-KISAN ₹6,000 yearly payment status?', icon: 'Sprout', tag: 'PM-KISAN' },
      { query: 'Who is eligible for Ayushman Bharat ₹5 Lakh free health treatment?', icon: 'HeartPulse', tag: 'Ayushman' },
      { query: 'How to get Caste Certificate for OBC / SC / ST reservation?', icon: 'Award', tag: 'Caste Cert' },
      { query: 'How to apply for National Government Scholarship on NSP?', icon: 'GraduationCap', tag: 'Scholarship' }
    ],
    guidedWizard: {
      back: 'Back',
      continue: 'Continue',
      finish: 'Generate Official Dossier',
      step: 'Stage',
      of: 'of',
      close: 'Exit Navigator',
      step1Title: 'Eligibility Assessment',
      step1Subtitle: 'Confirm your statutory eligibility before starting application',
      step2Title: 'Document Readiness Audit',
      step2Subtitle: 'Verify original physical & digital documents required',
      step3Title: 'Applicant Profile & Details',
      step3Subtitle: 'Prefill verified citizen data for seamless portal filing',
      step4Title: 'Center & Appointment Slot',
      step4Subtitle: 'Select nearest Seva Kendra or digital submission slot',
      step5Title: 'Submission Dossier & QR Pass',
      step5Subtitle: 'Your application guide, checklist, and appointment slip are ready',
      citizenDetails: 'Applicant Basic Details',
      fullNameLabel: 'Full Name (as per Aadhaar)',
      dobLabel: 'Date of Birth',
      phoneLabel: 'Registered Mobile Number',
      stateLabel: 'State / UT',
      cityLabel: 'District / City',
      pincodeLabel: 'Postal PIN Code',
      centerSelectLabel: 'Select Nearest Seva Kendra / Center',
      dateSelectLabel: 'Preferred Appointment Date',
      timeSlotLabel: 'Preferred Time Slot',
      bookingSuccess: 'Appointment Slot Reserved & Application Dossier Created!',
      dossierDownload: 'Print / Save Application Dossier PDF',
      applicationRefId: 'NagrikAI Application Reference',
      returnToAssistant: 'Return to NagrikAI Assistant',
      allDocsReadyNote: 'Excellent! You have 100% of the required documents.',
      someDocsMissingNote: 'You still need some documents. View alternative acceptable proofs.'
    },
    emergencyHelplineModal: {
      title: 'National Citizen Helplines & Emergency Directory',
      subtitle: 'Official 24x7 Government Toll-Free contact numbers for Indian citizens',
      close: 'Close Directory',
      callNow: 'Toll-Free Dial'
    },
    directoryModal: {
      title: 'NagrikAI Public Services Catalog',
      subtitle: 'Browse all 12 supported public services across Ministries',
      searchServices: 'Search services by name, department, or keyword...',
      selectService: 'View Complete Guide'
    },
    notFoundMessage: {
      title: 'Service Not Directly Found',
      text: 'NagrikAI could not find an exact match for your query. Try asking about one of our 12 primary civic services:',
      suggestionsPrompt: 'Click a service below to view complete procedures, document checklists, and application steps:'
    }
  },

  hi: {
    brandName: 'नागरिक AI',
    brandTagline: 'सरकारी सेवाएं, अब आसान।',
    badgeGovBeta: 'सार्वजनिक नागरिक बीटा',
    statusOnline: 'सरकारी सेवाएं: 100% सक्रिय',
    heroHeadline: 'सरकारी सेवाओं के लिए आपका मार्गदर्शक',
    heroSubtitle: 'अपनी पसंदीदा भाषा में प्रश्न पूछें। आवश्यक दस्तावेजों की सूची, पात्रता मानदंड और चरण-दर-चरण आवेदन मार्गदर्शन तुरंत प्राप्त करें।',
    searchPlaceholder: 'कुछ भी पूछें... जैसे, पासपोर्ट कैसे बनवाएं? या आधार कार्ड खो जाने पर क्या करें',
    sendBtn: 'नागरिक AI से पूछें',
    listeningVoice: 'सुन रहे हैं... अपना प्रश्न स्पष्ट रूप से बोलें',
    clickToSpeak: 'आवाज से पूछें (हिंदी / अंग्रेजी / बांग्ला)',
    suggestedQueriesLabel: 'नागरिकों द्वारा अक्सर पूछे जाने वाले प्रश्न',
    allServicesBtn: 'सभी 12 सरकारी सेवाएं देखें',
    helplinesBtn: 'आपातकालीन हेल्पलाइन',
    accessibilityBtn: 'सुगमता (Accessibility)',
    fontSizeNormal: 'सामान्य फॉन्ट',
    fontSizeLarge: 'बड़ा टेक्स्ट',
    contrastToggle: 'उच्च कंट्रास्ट मोड',
    verifiedSourceBadge: 'सत्यापित सरकारी जानकारी',
    sourceOfficialPortal: 'आधिकारिक सरकारी पोर्टल',
    lastUpdated: 'सत्यापित: अगस्त 2026',
    eligibilityTitle: 'पात्रता मानदंड',
    documentsTitle: 'आवश्यक दस्तावेजों की चेकलिस्ट',
    documentsChecklistNote: 'अपने पास उपलब्ध दस्तावेजों पर टिक करें ताकि आपकी तैयारी का स्कोर पता चल सके:',
    documentsReadyScore: 'तैयारी स्कोर',
    processTitle: 'चरण-दर-चरण आवेदन प्रक्रिया',
    estimatedTimelineTitle: 'अनुमानित प्रक्रिया चरण',
    officialPortalBtn: 'आधिकारिक सरकारी पोर्टल',
    guideMeBtn: 'आवेदन प्रक्रिया में मेरा मार्गदर्शन करें →',
    audioReadoutBtn: 'ऑडियो में सुनें',
    audioPlaying: 'ऑडियो चल रहा है...',
    shareBtn: 'जानकारी साझा करें',
    copiedToast: 'लिंक क्लिपबोर्ड पर कॉपी हो गया!',
    printDossierBtn: 'आवेदन विवरण प्रिंट / सुरक्षित करें',
    clearChatBtn: 'नया प्रश्न पूछें',
    resetConversationPrompt: 'बातचीत रीसेट हो गई है।',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न (FAQs)',
    deptLabel: 'नोडल मंत्रालय / विभाग',
    processingTimeLabel: 'कार्यकाल (समय सीमा)',
    feeLabel: 'आधिकारिक शुल्क',
    helplineLabel: 'समर्पित हेल्पलाइन',
    categories: {
      all: 'सभी सेवाएं',
      identity: 'पहचान व नागरिक',
      welfare: 'कल्याण व स्वास्थ्य',
      transport: 'परिवहन व आरटीओ',
      certificates: 'प्रमाण पत्र व राजस्व',
      education: 'शिक्षा व अनुदान'
    },
    suggestedQueries: [
      { query: 'मैं नया पासपोर्ट बनवाना चाहता हूँ। मुझे कौन से दस्तावेज चाहिए?', icon: 'FileText', tag: 'पासपोर्ट' },
      { query: 'मेरा आधार कार्ड खो गया है। मैं नया पीवीसी कार्ड कैसे मंगाऊं?', icon: 'ShieldCheck', tag: 'आधार कार्ड' },
      { query: 'नया पैन कार्ड ऑनलाइन कैसे बनाएं?', icon: 'CreditCard', tag: 'पैन कार्ड' },
      { query: 'नया वोटर आईडी कार्ड (फॉर्म 6) कैसे बनवाएं?', icon: 'Vote', tag: 'वोटर आईडी' },
      { query: 'परिवहन सारथी पर ड्राइविंग लाइसेंस का नवीनीकरण कैसे करें?', icon: 'Car', tag: 'ड्राइविंग लाइसेंस' },
      { query: 'पीएम किसान ₹6,000 की किस्त का स्टेटस कैसे देखें?', icon: 'Sprout', tag: 'पीएम किसान' },
      { query: 'आयुष्मान भारत ₹5 लाख मुफ्त इलाज योजना के लिए कौन पात्र है?', icon: 'HeartPulse', tag: 'आयुष्मान' },
      { query: 'ओबीसी / एससी / एसटी जाति प्रमाण पत्र कैसे बनवाएं?', icon: 'Award', tag: 'जाति प्रमाण पत्र' },
      { query: 'एनएसपी पोर्टल पर राष्ट्रीय छात्रवृत्ति के लिए कैसे आवेदन करें?', icon: 'GraduationCap', tag: 'छात्रवृत्ति' }
    ],
    guidedWizard: {
      back: 'पिछला चरण',
      continue: 'आगे बढ़ें',
      finish: 'आधिकारिक आवेदन डॉसियर बनाएं',
      step: 'चरण',
      of: 'का',
      close: 'नेविगेटर बंद करें',
      step1Title: 'पात्रता की पुष्टि',
      step1Subtitle: 'आवेदन शुरू करने से पहले अपनी कानूनी पात्रता की पुष्टि करें',
      step2Title: 'दस्तावेजों का मिलान',
      step2Subtitle: 'आवश्यक मूल व डिजिटल दस्तावेजों की जांच करें',
      step3Title: 'आवेदक का विवरण',
      step3Subtitle: 'सरकारी पोर्टल पर सहज आवेदन हेतु विवरण भरें',
      step4Title: 'केंद्र एवं अपॉइंटमेंट स्लॉट',
      step4Subtitle: 'नजदीकी सेवा केंद्र या डिजिटल स्लॉट का चयन करें',
      step5Title: 'आवेदन डॉसियर एवं क्यूआर रसीद',
      step5Subtitle: 'आपका आवेदन मार्गदर्शक, चेकलिस्ट और अपॉइंटमेंट रसीद तैयार है',
      citizenDetails: 'आवेदक की सामान्य जानकारी',
      fullNameLabel: 'पूरा नाम (आधार कार्ड के अनुसार)',
      dobLabel: 'जन्म तिथि',
      phoneLabel: 'पंजीकृत मोबाइल नंबर',
      stateLabel: 'राज्य / केंद्र शासित प्रदेश',
      cityLabel: 'जिला / शहर',
      pincodeLabel: 'पिन कोड',
      centerSelectLabel: 'नजदीकी सेवा केंद्र चुनें',
      dateSelectLabel: 'अपॉइंटमेंट की तारीख',
      timeSlotLabel: 'समय का स्लॉट',
      bookingSuccess: 'अपॉइंटमेंट स्लॉट आरक्षित हो गया और डॉसियर तैयार है!',
      dossierDownload: 'आवेदन रसीद व डॉसियर पीडीएफ प्रिंट करें',
      applicationRefId: 'नागरिक AI संदर्भ संख्या',
      returnToAssistant: 'नागरिक AI सहायक पर वापस जाएं',
      allDocsReadyNote: 'उत्कृष्ट! आपके पास 100% आवश्यक दस्तावेज तैयार हैं।',
      someDocsMissingNote: 'कुछ दस्तावेज शेष हैं। वैकल्पिक मान्य प्रमाण पत्र देखें।'
    },
    emergencyHelplineModal: {
      title: 'राष्ट्रीय नागरिक हेल्पलाइन एवं आपातकालीन संपर्क',
      subtitle: 'भारतीय नागरिकों के लिए आधिकारिक 24x7 टोल-फ्री संपर्क नंबर',
      close: 'डायरेक्टरी बंद करें',
      callNow: 'टोल-फ्री डायल करें'
    },
    directoryModal: {
      title: 'नागरिक AI सरकारी सेवा कैटलॉग',
      subtitle: 'सभी 12 प्रमुख सरकारी सेवाओं की विस्तृत सूची देखें',
      searchServices: 'सेवा के नाम, मंत्रालय या कीवर्ड से खोजें...',
      selectService: 'विस्तृत गाइड देखें'
    },
    notFoundMessage: {
      title: 'सेवा सीधे नहीं मिली',
      text: 'नागरिक AI आपके प्रश्न के सटीक परिणाम नहीं खोज सका। हमारी 12 मुख्य सेवाओं में से किसी के बारे में पूछें:',
      suggestionsPrompt: 'पूरी प्रक्रिया और दस्तावेज चेकलिस्ट देखने के लिए नीचे दी गई सेवा पर क्लिक करें:'
    }
  },

  bn: {
    brandName: 'নাগরিক AI',
    brandTagline: 'সরকারি পরিষেবা, এবার সহজ।',
    badgeGovBeta: 'পাবলিক নাগরিক বিটা',
    statusOnline: 'সরকারি পরিষেবা: ১০০% সক্রিয়',
    heroHeadline: 'সরকারি পরিষেবার জন্য আপনার ডিজিটাল সহায়ক',
    heroSubtitle: 'আপনার পছন্দের ভাষায় প্রশ্ন করুন। প্রয়োজনীয় নথিপত্রের তালিকা, যোগ্যতার শর্ত এবং ধাপে ধাপে আবেদনের সম্পূর্ণ নির্দেশিকা পান।',
    searchPlaceholder: 'যেকোনো পরিষেবা নিয়ে প্রশ্ন করুন... যেমন, পাসপোর্ট কীভাবে করব? বা আধার কার্ড হারিয়ে গেছে',
    sendBtn: 'নাগরিক AI-কে জিজ্ঞাসা করুন',
    listeningVoice: 'শুনছি... আপনার প্রশ্নটি স্পষ্ট করে বলুন',
    clickToSpeak: 'ভয়েসের মাধ্যমে জিজ্ঞাসা করুন (বাংলা / হিন্দি / ইংরেজি)',
    suggestedQueriesLabel: 'নাগরিকদের বহুল জিজ্ঞাসিত প্রশ্নাবলী',
    allServicesBtn: '১২টি সরকারি পরিষেবা দেখুন',
    helplinesBtn: 'জরুরি হেল্পলাইনসমূহ',
    accessibilityBtn: 'অ্যাক্সেসিবিলিটি (Accessibility)',
    fontSizeNormal: 'স্বাভাবিক ফন্ট',
    fontSizeLarge: 'বড় লেখা',
    contrastToggle: 'উচ্চ কনট্রাস্ট মোড',
    verifiedSourceBadge: 'যাচাইকৃত সরকারি তথ্য',
    sourceOfficialPortal: 'অফিসিয়াল সরকারি পোর্টাল',
    lastUpdated: 'যাচাই করা হয়েছে: আগস্ট ২০২৬',
    eligibilityTitle: 'যোগ্যতার মাপকাঠি',
    documentsTitle: 'প্রয়োজনীয় নথিপত্রের চেকলিস্ট',
    documentsChecklistNote: 'আপনার কাছে যেসব নথিপত্র আছে সেগুলোতে টিক দিয়ে আপনার প্রস্তুতির স্কোর দেখুন:',
    documentsReadyScore: 'প্রস্তুতির স্কোর',
    processTitle: 'ধাপে ধাপে আবেদন পদ্ধতি',
    estimatedTimelineTitle: 'আনুমানিক প্রক্রিয়ার সময়কাল',
    officialPortalBtn: 'অফিসিয়াল সরকারি পোর্টাল',
    guideMeBtn: 'আবেদন প্রক্রিয়ায় আমাকে পথ দেখান →',
    audioReadoutBtn: 'অডিও শুনুন',
    audioPlaying: 'অডিও বাজছে...',
    shareBtn: 'তথ্য শেয়ার করুন',
    copiedToast: 'লিঙ্ক ক্লিপবোর্ডে কপি করা হয়েছে!',
    printDossierBtn: 'আবেদন বিবরণ প্রিন্ট / সেভ করুন',
    clearChatBtn: 'নতুন প্রশ্ন জিজ্ঞাসা করুন',
    resetConversationPrompt: 'কথোপকথন রিসেট করা হয়েছে।',
    faqTitle: 'সাধারণ প্রশ্ন ও উত্তর (FAQs)',
    deptLabel: 'নোডাল মন্ত্রণালয় / বিভাগ',
    processingTimeLabel: 'প্রক্রিয়াকরণের সময়',
    feeLabel: 'অফিসিয়াল ফি',
    helplineLabel: 'হেল্পলাইন নম্বর',
    categories: {
      all: 'সমস্ত পরিষেবা',
      identity: 'পরিচয় ও নাগরিকত্ব',
      welfare: 'কল্যাণ ও স্বাস্থ্য',
      transport: 'পরিবহন ও আরটিও',
      certificates: 'সার্টিফিকেট ও রাজস্ব',
      education: 'শিক্ষা ও স্কলারশিপ'
    },
    suggestedQueries: [
      { query: 'আমি নতুন পাসপোর্ট আবেদন করতে চাই। কী কী নথি লাগবে?', icon: 'FileText', tag: 'পাসপোর্ট' },
      { query: 'আমার আধার কার্ড হারিয়ে গেছে। কীভাবে পিভিসি কার্ড পাব?', icon: 'ShieldCheck', tag: 'আধার কার্ড' },
      { query: 'অনলাইনে নতুন প্যান কার্ডের আবেদন কীভাবে করব?', icon: 'CreditCard', tag: 'প্যান কার্ড' },
      { query: 'নতুন ভোটার তালিকায় নাম তোলা ও ভোটার কার্ড (ফর্ম ৬) কীভাবে করব?', icon: 'Vote', tag: 'ভোটার কার্ড' },
      { query: 'পরিবহন সারথী পোর্টালে ড্রাইভিং লাইসেন্স কীভাবে রিনিউ করব?', icon: 'Car', tag: 'লাইসেন্স' },
      { query: 'পিএম-কিষাণ প্রকল্পের বার্ষিক ₹৬,০০০ টাকার স্ট্যাটাস কীভাবে চেক করব?', icon: 'Sprout', tag: 'পিএম কিষাণ' },
      { query: 'আয়ুষ্মান ভারত ₹৫ লক্ষ টাকার ফ্রি চিকিৎসার জন্য কারা যোগ্য?', icon: 'HeartPulse', tag: 'আয়ুষ্মান' },
      { query: 'ওবিসি / এসসি / এসটি কাস্ট সার্টিফিকেট কীভাবে বানাব?', icon: 'Award', tag: 'কাস্ট সনদ' },
      { query: 'জাতীয় স্কলারশিপ পোর্টালে (NSP) কীভাবে আবেদন করব?', icon: 'GraduationCap', tag: 'স্কলারশিপ' }
    ],
    guidedWizard: {
      back: 'আগের ধাপ',
      continue: 'পরবর্তী ধাপ',
      finish: 'অফিসিয়াল আবেদন ডসিয়ার তৈরি করুন',
      step: 'ধাপ',
      of: 'এর মধ্যে',
      close: 'নেভিগেটর বন্ধ করুন',
      step1Title: 'যোগ্যতা মূল্যায়ন',
      step1Subtitle: 'আবেদন শুরুর পূর্বে নিজের আইনি যোগ্যতা যাচাই করুন',
      step2Title: 'নথিপত্র যাচাই ও প্রস্তুতি',
      step2Subtitle: 'প্রয়োজনীয় মূল ও ডিজিটাল নথিপত্র প্রস্তুত রাখুন',
      step3Title: 'আবেদনকারীর তথ্য পূরণ',
      step3Subtitle: 'সরকারি পোর্টালে জমা দেওয়ার জন্য প্রাথমিক তথ্য দিন',
      step4Title: 'কেন্দ্র ও অ্যাপয়েন্টমেন্ট স্লট',
      step4Subtitle: 'নিকটবর্তী সেবা কেন্দ্র বা ডিজিটাল স্লট নির্বাচন করুন',
      step5Title: 'আবেদন ডসিয়ার ও কিউআর স্লিপ',
      step5Subtitle: 'আপনার আবেদন নির্দেশিকা, চেকলিস্ট ও অ্যাপয়েন্টমেন্ট রসিদ প্রস্তুত',
      citizenDetails: 'আবেদনকারীর সাধারণ তথ্য',
      fullNameLabel: 'সম্পূর্ণ নাম (আধার কার্ড অনুযায়ী)',
      dobLabel: 'জন্ম তারিখ',
      phoneLabel: 'নিবন্ধিত মোবাইল নম্বর',
      stateLabel: 'রাজ্য / কেন্দ্রশাসিত অঞ্চল',
      cityLabel: 'জেলা / শহর',
      pincodeLabel: 'পিন কোড',
      centerSelectLabel: 'নিকটস্থ সেবা কেন্দ্র নির্বাচন করুন',
      dateSelectLabel: 'পছন্দের অ্যাপয়েন্টমেন্টের তারিখ',
      timeSlotLabel: 'সময় স্লট',
      bookingSuccess: 'অ্যাপয়েন্টমেন্ট স্লট সংরক্ষিত এবং ডসিয়ার তৈরি হয়েছে!',
      dossierDownload: 'আবেদন রসিদ ও ডসিয়ার পিডিএফ প্রিন্ট করুন',
      applicationRefId: 'নাগরিক AI রেফারেন্স নম্বর',
      returnToAssistant: 'নাগরিক AI সহায়কে ফিরে যান',
      allDocsReadyNote: 'চমৎকার! আপনার কাছে ১০০% প্রয়োজনীয় নথি প্রস্তুত রয়েছে।',
      someDocsMissingNote: 'কিছু নথি বাকি আছে। গ্রহণযোগ্য বিকল্প প্রমাণপত্র দেখুন।'
    },
    emergencyHelplineModal: {
      title: 'জাতীয় নাগরিক হেল্পলাইন ও জরুরি ডিরেক্টরি',
      subtitle: 'ভারতীয় নাগরিকদের জন্য অফিসিয়াল ২৪x৭ টোল-ফ্রি সরকারি নম্বরসমূহ',
      close: 'ডিরেক্টরি বন্ধ করুন',
      callNow: 'টোল-ফ্রি কল করুন'
    },
    directoryModal: {
      title: 'নাগরিক AI সরকারি পরিষেবা ক্যাটালগ',
      subtitle: 'বিভিন্ন মন্ত্রণালয়ের ১২টি প্রধান জনসেবার বিস্তারিত বিবরণ দেখুন',
      searchServices: 'পরিষেবার নাম, মন্ত্রণালয় বা কীওয়ার্ড দিয়ে খুঁজুন...',
      selectService: 'সম্পূর্ণ নির্দেশিকা দেখুন'
    },
    notFoundMessage: {
      title: 'সরাসরি কোনো ফলাফল পাওয়া যায়নি',
      text: 'নাগরিক AI আপনার প্রশ্নের সরাসরি মিল খুঁজে পায়নি। আমাদের ১২টি প্রধান পরিষেবার মধ্যে অনুসন্ধান করুন:',
      suggestionsPrompt: 'সম্পূর্ণ পদ্ধতি এবং নথিপত্র দেখতে নিচের যেকোনো একটি পরিষেবাতে ক্লিক করুন:'
    }
  },

  ta: {
    brandName: 'நாகரிக் AI',
    brandTagline: 'அரசு சேவைகள், இனி எளிது.',
    badgeGovBeta: 'பொதுக் குடிமக்கள் பீட்டா',
    statusOnline: 'அரசு சேவைகள்: 100% இயங்குகிறது',
    heroHeadline: 'அரசு சேவைகளுக்கான உங்கள் வழிகாட்டி',
    heroSubtitle: 'உங்கள் விருப்ப மொழியில் கேள்விகளைக் கேளுங்கள். தேவையான ஆவணங்களின் பட்டியல், தகுதி அளவுகோல்கள் மற்றும் படிபடியாக விண்ணப்பிக்கும் வழிகாட்டுதலை உடனடியாகப் பெறுங்கள்.',
    searchPlaceholder: 'எதையும் கேளுங்கள்... எ.கா., பாஸ்போர்ட்டிற்கு விண்ணப்பிப்பது எப்படி? அல்லது தொலைந்த ஆதார் கார்டு',
    sendBtn: 'நாகரிக் AI-யிடம் கேளுங்கள்',
    listeningVoice: 'கேட்கிறது... உங்கள் கேள்வியைத் தெளிவாகப் பேசுங்கள்',
    clickToSpeak: 'குரல் மூலம் கேளுங்கள் (தமிழ் / ஹிந்தி / ஆங்கிலம் / பங்களா)',
    suggestedQueriesLabel: 'குடிமக்கள் அடிக்கடி கேட்கும் கேள்விகள்',
    allServicesBtn: 'அனைத்து 12 சேவைகளையும் காண்க',
    helplinesBtn: 'அவசர உதவி எண்கள்',
    accessibilityBtn: 'அணுகல்தன்மை (Accessibility)',
    fontSizeNormal: 'சாதாரண எழுத்து',
    fontSizeLarge: 'பெரிய எழுத்து',
    contrastToggle: 'உயர் கான்ட்ராஸ்ட் முறை',
    verifiedSourceBadge: 'சரிபார்க்கப்பட்ட அரசுத் தகவல்',
    sourceOfficialPortal: 'அதிகாரப்பூர்வ அரசு இணையதளம்',
    lastUpdated: 'சரிபார்க்கப்பட்டது: ஆகஸ்ட் 2026',
    eligibilityTitle: 'தகுதி அளவுகோல்கள்',
    documentsTitle: 'தேவையான ஆவணங்களின் பட்டியல்',
    documentsChecklistNote: 'உங்களிடம் உள்ள ஆவணங்களைக் குறியிட்டு விண்ணப்பத் தயாரிப்பு மதிப்பெண்ணைக் கணக்கிடுங்கள்:',
    documentsReadyScore: 'தயாரிப்பு மதிப்பெண்',
    processTitle: 'படிபடியான விண்ணப்ப நடைமுறை',
    estimatedTimelineTitle: 'மதிப்பிடப்பட்ட செயல்முறை காலம்',
    officialPortalBtn: 'அதிகாரப்பூர்வ அரசு இணையதளம்',
    guideMeBtn: 'விண்ணப்ப நடைமுறையில் எனக்கு வழிகாட்டவும் →',
    audioReadoutBtn: 'ஆடியோவில் கேட்கவும்',
    audioPlaying: 'ஆடியோ இயங்குகிறது...',
    shareBtn: 'தகவலைப் பகிரவும்',
    copiedToast: 'இணைப்பு நகலெடுக்கப்பட்டது!',
    printDossierBtn: 'விண்ணப்ப விவரங்களை அச்சிடுக / சேமிக்க',
    clearChatBtn: 'புதிய உரையாடல்',
    resetConversationPrompt: 'உரையாடல் அழிக்கப்பட்டது.',
    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)',
    deptLabel: 'பொறுப்பு அமைச்சகம் / துறை',
    processingTimeLabel: 'செயலாக்க காலம்',
    feeLabel: 'அதிகாரப்பூர்வ கட்டணம்',
    helplineLabel: 'சிறப்பு உதவி எண்',
    categories: {
      all: 'அனைத்து சேவைகள்',
      identity: 'அடையாளம் & குடிமை',
      welfare: 'நலன் & சுகாதாரம்',
      transport: 'போக்குவரத்து & RTO',
      certificates: 'சான்றிதழ்கள் & வருவாய்',
      education: 'கல்வி & உதவித்தொகை'
    },
    suggestedQueries: [
      { query: 'நான் புதிய பாஸ்போர்ட் விண்ணப்பிக்க விரும்புகிறேன். என்ன ஆவணங்கள் தேவை?', icon: 'FileText', tag: 'பாஸ்போர்ட்' },
      { query: 'எனது ஆதார் கார்டு தொலைந்துவிட்டது. புதிய PVC கார்டு பெறுவது எப்படி?', icon: 'ShieldCheck', tag: 'ஆதார் கார்டு' },
      { query: 'ஆன்லைனில் புதிய பான் கார்டு விண்ணப்பிப்பது எப்படி?', icon: 'CreditCard', tag: 'பான் கார்டு' },
      { query: 'புதிய வாக்காளர் அடையாள அட்டை (படிவம் 6) பெற விண்ணப்பிப்பது எப்படி?', icon: 'Vote', tag: 'வாக்காளர் அட்டை' },
      { query: 'பரிவாஹன் சாரதியில் ஓட்டுநர் உரிமத்தைப் புதுப்பிப்பது எப்படி?', icon: 'Car', tag: 'ஓட்டுநர் உரிமம்' },
      { query: 'பிஎம்-கிசான் ₹6,000 ஆண்டுக் தவணை நிலையை எவ்வாறு சரிபார்ப்பது?', icon: 'Sprout', tag: 'பிஎம்-கிசான்' },
      { query: 'ஆயுஷ்மான் பாரத் ₹5 லட்சம் இலவச மருத்துவக் காப்பீட்டிற்கு யார் தகுதி?', icon: 'HeartPulse', tag: 'ஆயுஷ்மான்' },
      { query: 'OBC / SC / ST சாதிச் சான்றிதழ் பெறுவது எப்படி?', icon: 'Award', tag: 'சாதி சான்றிதழ்' },
      { query: 'தேசிய உதவித்தொகை போர்ட்டலில் (NSP) விண்ணப்பிப்பது எப்படி?', icon: 'GraduationCap', tag: 'உதவித்தொகை' }
    ],
    guidedWizard: {
      back: 'முந்தைய படி',
      continue: 'தொடரவும்',
      finish: 'அதிகாரப்பூர்வ விண்ணப்பக் கோப்பை உருவாக்கவும்',
      step: 'படி',
      of: '/',
      close: 'வழிகாட்டியை மூடு',
      step1Title: 'தகுதிச் சரிபார்ப்பு',
      step1Subtitle: 'விண்ணப்பிக்கும் முன் உங்கள் சட்டப்பூர்வ தகுதியை உறுதிப்படுத்தவும்',
      step2Title: 'ஆவணத் தயாரிப்பு தணிக்கை',
      step2Subtitle: 'தேவையான அசல் மற்றும் டிஜிட்டல் ஆவணங்களைச் சரிபார்க்கவும்',
      step3Title: 'விண்ணப்பதாரர் சுயவிவர விவரங்கள்',
      step3Subtitle: 'அரசு போர்ட்டலில் சமர்ப்பிக்க விவரங்களைப் பூர்த்தி செய்யவும்',
      step4Title: 'மையம் & முன்பதிவு நேரம்',
      step4Subtitle: 'அருகிலுள்ள சேவை மையம் அல்லது டிஜிட்டல் நேரத்தைத் தேர்ந்தெடுக்கவும்',
      step5Title: 'விண்ணப்பக் கோப்பு & QR அட்டை',
      step5Subtitle: 'உங்கள் விண்ணப்ப வழிகாட்டி, சரிபார்ப்புப் பட்டியல் மற்றும் முன்பதிவுச் சீட்டு தயார்',
      citizenDetails: 'விண்ணப்பதாரரின் அடிப்படை விவரங்கள்',
      fullNameLabel: 'முழு பெயர் (ஆதாரில் உள்ளபடி)',
      dobLabel: 'பிறந்த தேதி',
      phoneLabel: 'பதிவுசெய்யப்பட்ட கைபேசி எண்',
      stateLabel: 'மாநிலம் / யூனியன் பிரதேசம்',
      cityLabel: 'மாவட்டம் / நகரம்',
      pincodeLabel: 'அஞ்சல் குறியீடு (PIN)',
      centerSelectLabel: 'அருகிலுள்ள சேவா மையத்தைத் தேர்ந்தெடுக்கவும்',
      dateSelectLabel: 'விருப்பமான முன்பதிவு தேதி',
      timeSlotLabel: 'விருப்பமான நேரப் பிரிவு',
      bookingSuccess: 'முன்பதிவு நேரம் உறுதிசெய்யப்பட்டு விண்ணப்பக் கோப்பு உருவாக்கப்பட்டது!',
      dossierDownload: 'விண்ணப்பக் கோப்பை PDF ஆக அச்சிட / சேமிக்க',
      applicationRefId: 'நாகரிக் AI குறிப்பு எண்',
      returnToAssistant: 'நாகரிக் AI உதவிக்குத் திரும்புக',
      allDocsReadyNote: 'அற்புதம்! உங்களிடம் 100% தேவையான ஆவணங்கள் உள்ளன.',
      someDocsMissingNote: 'சில ஆவணங்கள் இன்னும் தேவைப்படுகின்றன. மாற்று ஆவணப் சான்றுகளைப் பார்க்கவும்.'
    },
    emergencyHelplineModal: {
      title: 'தேசிய குடிமக்கள் உதவி எண்கள் & அவசர வழிகாட்டி',
      subtitle: 'இந்திய குடிமக்களுக்கான 24x7 அதிகாரப்பூர்வ கட்டணமில்லா தொலைபேசி எண்கள்',
      close: 'வழிகாட்டியை மூடு',
      callNow: 'இலவச அழைப்பு'
    },
    directoryModal: {
      title: 'நாகரிக் AI பொதுச் சேவைகள் பட்டியல்',
      subtitle: 'பல்வேறு அமைச்சகங்களின் அனைத்து 12 பொதுச் சேவைகளையும் காண்க',
      searchServices: 'சேவையின் பெயர், துறை அல்லது முக்கிய வார்த்தையால் தேடவும்...',
      selectService: 'முழு வழிகாட்டியைப் பார்க்க'
    },
    notFoundMessage: {
      title: 'சேவை நேரடியாகக் கிடைக்கவில்லை',
      text: 'நாகரிக் AI உங்கள் கேள்விக்கு நேரடிப் பொருத்தத்தைக் கண்டறிய முடியவில்லை. எங்கள் 12 முதன்மை சேவைகளில் ஒன்றைக் கேட்டுப் பார்க்கவும்:',
      suggestionsPrompt: 'முழு நடைமுறைகள் மற்றும் ஆவணப் பட்டியலைப் பார்க்க கீழே உள்ள ஏதேனும் ஒரு சேவையைக் கிளிக் செய்யவும்:'
    }
  }
};

export const EMERGENCY_HELPLINES = [
  { number: '112', title: 'National Emergency Response (Police, Fire, Ambulance)', category: 'Emergency', agency: 'Govt of India' },
  { number: '1947', title: 'Aadhaar (UIDAI) 24x7 Toll-Free Support', category: 'Identity', agency: 'UIDAI' },
  { number: '1950', title: 'National Voter Helpline (ECI)', category: 'Elections', agency: 'Election Commission of India' },
  { number: '1930', title: 'National Cyber Crime Reporting Portal', category: 'Cyber Security', agency: 'Ministry of Home Affairs' },
  { number: '14555', title: 'Ayushman Bharat PM-JAY Call Centre', category: 'Health', agency: 'National Health Authority' },
  { number: '14567', title: 'Elderline (National Senior Citizen Helpline)', category: 'Senior Care', agency: 'Ministry of Social Justice' },
  { number: '1800-180-1551', title: 'Kisan Call Centre (Farmer Advisory)', category: 'Agriculture', agency: 'Ministry of Agriculture' },
  { number: '1800-258-1800', title: 'Passport Seva Kendra National Support', category: 'Passport', agency: 'Ministry of External Affairs' },
  { number: '1075', title: 'National Health Helpline', category: 'Health', agency: 'MoHFW' },
  { number: '1098', title: 'Childline 24x7 Emergency', category: 'Child Care', agency: 'Ministry of Women & Child' },
  { number: '1091', title: 'Women in Distress National Helpline', category: 'Women Safety', agency: 'NCW' },
  { number: '0120-6619540', title: 'National Scholarship Portal (NSP) Helpdesk', category: 'Education', agency: 'Ministry of Education' }
];
