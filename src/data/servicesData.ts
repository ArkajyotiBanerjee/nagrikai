import { ServiceData } from '../types';

export const SERVICES_DATA: ServiceData[] = [
  // 1. PASSPORT APPLICATION
  {
    id: 'passport',
    iconName: 'FileText',
    category: 'identity',
    department: {
      en: 'Ministry of External Affairs (CPV Division)',
      hi: 'विदेश मंत्रालय (सीपीवी प्रभाग)',
      bn: 'পররাষ্ট্র মন্ত্রণালয় (সিপিভি বিভাগ)',
      ta: 'வெளியுறவு அமைச்சகம் (CPV பிரிவு)'
    },
    officialPortal: 'passportindia.gov.in',
    officialUrl: 'https://www.passportindia.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: 'Normal: 15–30 Days | Tatkaal: 1–3 Days',
      hi: 'सामान्य: 15–30 दिन | तत्काल: 1–3 दिन',
      bn: 'সাধারণ: ১৫–৩০ দিন | তৎকাল: ১–৩ দিন',
      ta: 'சாதாரண: 15–30 நாட்கள் | தட்கல்: 1–3 நாட்கள்'
    },
    fee: {
      en: 'Normal: ₹1,500 (36 pgs) | Tatkaal: ₹3,500',
      hi: 'सामान्य: ₹1,500 (36 पृष्ठ) | तत्काल: ₹3,500',
      bn: 'সাধারণ: ₹১,৫০০ (৩৬ পৃষ্ঠা) | তৎকাল: ₹৩,৫০০',
      ta: 'சாதாரண: ₹1,500 (36 பக்கங்கள்) | தட்கல்: ₹3,500'
    },
    keywords: [
      'passport', 'pass port', 'travel document', 'apply passport', 'passport renewal', 'tatkaal passport', 'psk appointment',
      'पासपोर्ट', 'पासपोर्ट आवेदन', 'पासपोर्ट बनाना', 'tatkal passport',
      'পাসপোর্ট', 'পাসপোর্ট আবেদন', 'পাসপোর্ট নথি',
      'பாஸ்போர்ட்', 'பாஸ்போர்ட் விண்ணப்பம்', 'தட்கல் பாஸ்போர்ட்', 'பாஸ்போர்ட் புதுப்பித்தல்'
    ],
    title: {
      en: 'Fresh Passport Application (Normal & Tatkaal)',
      hi: 'नया पासपोर्ट आवेदन (सामान्य एवं तत्काल)',
      bn: 'নতুন পাসপোর্ট আবেদন (সাধারণ এবং তৎকাল)',
      ta: 'புதிய பாஸ்போர்ட் விண்ணப்பம் (சாதாரண & தட்கல்)'
    },
    badge: {
      en: 'High Demand Service',
      hi: 'अत्यधिक मांग सेवा',
      bn: 'উচ্চ চাহিদাসম্পন্ন পরিষেবা',
      ta: 'அதிக தேவை உள்ள சேவை'
    },
    shortSummary: {
      en: 'Indian citizens can apply for an ordinary fresh passport or renewal online via Passport Seva. An in-person biometric appointment at a Passport Seva Kendra (PSK/POPSK) and police verification are mandatory before dispatch.',
      hi: 'भारतीय नागरिक पासपोर्ट सेवा पोर्टल के माध्यम से ऑनलाइन नए पासपोर्ट या नवीनीकरण के लिए आवेदन कर सकते हैं। पासपोर्ट जारी होने से पहले पासपोर्ट सेवा केंद्र (PSK) पर बायोमेट्रिक सत्यापन और पुलिस सत्यापन अनिवार्य है।',
      bn: 'ভারতীয় নাগরিকরা পাসপোর্ট সেবা পোর্টালের মাধ্যমে অনলাইনে নতুন পাসপোর্ট বা পুনর্নবীকরণের জন্য আবেদন করতে পারেন। পাসপোর্ট প্রেরণের পূর্বে পাসপোর্ট সেবা কেন্দ্রে (PSK) বায়োমেট্রিক এবং পুলিশ ভেরিফিকেশন বাধ্যতামূলক।',
      ta: 'இந்தியக் குடிமக்கள் பாஸ்போர்ட் சேவா போர்ட்டலில் ஆன்லைனில் பாஸ்போர்ட் அல்லது புதுப்பித்தலுக்கு விண்ணப்பிக்கலாம். பாஸ்போர்ட் சேவை மையத்தில் (PSK) பயோமெட்ரிக் சரிபார்ப்பு மற்றும் காவல் துறை சரிபார்ப்பு கட்டாயமாகும்.'
    },
    eligibility: {
      en: [
        'Must be a citizen of India by birth, descent, or naturalization',
        'Applicant must have valid address proof for the current residence (minimum 1 year)',
        'No active criminal proceedings or impounded passport travel restrictions'
      ],
      hi: [
        'जन्म, वंश या देशीयकरण द्वारा भारत का नागरिक होना चाहिए',
        'वर्तमान निवास का वैध पता प्रमाण होना आवश्यक है (न्यूनतम 1 वर्ष)',
        'कोई सक्रिय आपराधिक मामला या यात्रा प्रतिबंध नहीं होना चाहिए'
      ],
      bn: [
        'জন্ম, বংশ বা প্রাকৃতিকীকরণের মাধ্যমে ভারতের নাগরিক হতে হবে',
        'বর্তমান ঠিকানার বৈধ প্রমাণপত্র থাকতে হবে (ন্যূনতম ১ বছর)',
        'কোনো সক্রিয় ফৌজদারি মামলা বা ভ্রমণ নিষেধাজ্ঞা থাকা যাবে না'
      ],
      ta: [
        'பிறப்பு, வம்சாவளி அல்லது இயல்புரிமை மூலம் இந்தியக் குடிமகனாக இருக்க வேண்டும்',
        'தற்போதைய முகவரிக்கு செல்லுபடியாகும் முகவரிச் சான்று இருக்க வேண்டும் (குறைந்தது 1 வருடம்)',
        'நிலுவையில் உள்ள குற்றவியல் வழக்குகள் அல்லது பயணக் கட்டுப்பாடுகள் இருக்கக்கூடாது'
]
    },
    documents: {
      en: [
        { id: 'p_aadhaar', name: 'Aadhaar Card (with updated address and full DOB)', required: true, note: 'Primary ID & Address Proof' },
        { id: 'p_dob', name: 'Birth Proof (Birth Certificate / 10th Marksheet / PAN)', required: true, alternatives: ['Birth Certificate', 'Matriculation Certificate', 'PAN Card'] },
        { id: 'p_addr', name: 'Present Address Proof (Electricity Bill / Bank Passbook / Rent Deed)', required: true, note: 'Must match current stay' },
        { id: 'p_annexure', name: 'Annexure E (Standard Self-Declaration Form)', required: false, note: 'Generated automatically during form fill' }
      ],
      hi: [
        { id: 'p_aadhaar', name: 'आधार कार्ड (अपडेटेड पता और पूर्ण जन्म तिथि सहित)', required: true, note: 'प्राथमिक पहचान व पता प्रमाण' },
        { id: 'p_dob', name: 'जन्म प्रमाण (जन्म प्रमाण पत्र / 10वीं की मार्कशीट / पैन कार्ड)', required: true, alternatives: ['जन्म प्रमाण पत्र', '10वीं कक्षा प्रमाण पत्र', 'पैन कार्ड'] },
        { id: 'p_addr', name: 'वर्तमान निवास प्रमाण (बिजली बिल / बैंक पासबुक / रेंट एग्रीमेंट)', required: true, note: 'वर्तमान पते से मेल खाना चाहिए' },
        { id: 'p_annexure', name: 'अनुलग्नक ई (मानक स्व-घोषणा पत्र)', required: false, note: 'फॉर्म भरते समय स्वतः तैयार होता है' }
      ],
      bn: [
        { id: 'p_aadhaar', name: 'আধার কার্ড (আপডেট করা ঠিকানা এবং সম্পূর্ণ জন্ম তারিখ সহ)', required: true, note: 'প্রাথমিক পরিচয় ও ঠিকানার প্রমাণ' },
        { id: 'p_dob', name: 'জন্ম প্রমাণপত্র (জন্ম সনদ / দশম শ্রেণির মার্কশিট / প্যান)', required: true, alternatives: ['জন্ম সনদ', 'মাধ্যমিক সার্টিফিকেট', 'প্যান কার্ড'] },
        { id: 'p_addr', name: 'বর্তমান ঠিকানার প্রমাণ (বিদ্যুৎ বিল / ব্যাংক পাসবুক / রেন্ট ডিড)', required: true, note: 'বর্তমান বসবাসের সাথে মিল থাকতে হবে' },
        { id: 'p_annexure', name: 'অ্যানেক্সার ই (মানক স্ব-ঘোষণা পত্র)', required: false, note: 'ফর্ম পূরণের সময় স্বয়ংক্রিয়ভাবে তৈরি হয়' }
      ],
      ta: [
        {
                'id': 'p_aadhaar',
                'name': 'ஆதார் கார்டு (புதுப்பிக்கப்பட்ட முகவரி & முழு பிறந்த தேதியுடன்)',
                'required': true,
                'note': 'முதன்மை அடையாள & முகவரிச் சான்று'
        },
        {
                'id': 'p_dob',
                'name': 'பிறப்புச் சான்று (பிறப்புச் சான்றிதழ் / 10வது மதிப்பெண் சான்றிதழ் / பான் கார்டு)',
                'required': true,
                'alternatives': [
                        'பிறப்புச் சான்றிதழ்',
                        '10வது மதிப்பெண் சான்றிதழ்',
                        'பான் கார்டு'
                ]
        },
        {
                'id': 'p_addr',
                'name': 'தற்போதைய முகவரிச் சான்று (மின்சாரக் கட்டணம் / வங்கி கணக்குப் புத்தகம் / வாடகை ஒப்பந்தம்)',
                'required': true,
                'note': 'தற்போதைய முகவரியுடன் ஒத்துப்போக வேண்டும்'
        },
        {
                'id': 'p_annexure',
                'name': 'இணைப்பு E (சுய அறிவிப்புப் படிவம்)',
                'required': false,
                'note': 'படிவம் பூர்த்தி செய்யும்போது உருவாகும்'
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Register on Passport Seva', description: 'Create an account on passportindia.gov.in using your email and select your regional passport office.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Fill Form & Upload Documents', description: 'Complete Form RPO-1 online, enter family details, and upload scanned self-attested documents.', duration: '15 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Pay Fee & Schedule Slot', description: 'Pay ₹1,500 online via SBI e-Pay / UPI and book an appointment slot at your nearest PSK/POPSK.', duration: 'Instant', actionType: 'online' },
        { stepNumber: 4, title: 'Visit PSK for Biometrics', description: 'Visit PSK with original documents for document verification, live photo capture, and fingerprinting.', duration: '1-2 Hours', actionType: 'in-person' },
        { stepNumber: 5, title: 'Police Verification & Dispatch', description: 'Local police conducts physical verification. Passport printed and dispatched via Speed Post.', duration: '7-15 Days', actionType: 'delivery' }
      ],
      hi: [
        { stepNumber: 1, title: 'पासपोर्ट सेवा पर पंजीकरण करें', description: 'ईमेल का उपयोग करके passportindia.gov.in पर खाता बनाएं और अपना क्षेत्रीय कार्यालय चुनें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'आवेदन पत्र भरें और दस्तावेज अपलोड करें', description: 'ऑनलाइन फॉर्म भरें, पारिवारिक विवरण दर्ज करें और स्व-सत्यापित दस्तावेज अपलोड करें।', duration: '15 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'शुल्क का भुगतान करें और स्लॉट बुक करें', description: 'एसबीआई ई-पे/यूपीआई के माध्यम से ₹1,500 का भुगतान करें और नजदीकी केंद्र में अपॉइंटमेंट बुक करें।', duration: 'त्वरित', actionType: 'online' },
        { stepNumber: 4, title: 'बायोमेट्रिक्स के लिए PSK जाएं', description: 'मूल दस्तावेजों के साथ केंद्र जाएं जहाँ लाइव फोटो और फिंगरप्रिंट लिए जाएंगे।', duration: '1-2 घंटे', actionType: 'in-person' },
        { stepNumber: 5, title: 'पुलिस सत्यापन और स्पीड पोस्ट डिलीवरी', description: 'स्थानीय पुलिस सत्यापन पूरा करती है। पासपोर्ट स्पीड पोस्ट द्वारा पते पर भेजा जाता है।', duration: '7-15 दिन', actionType: 'delivery' }
      ],
      bn: [
        { stepNumber: 1, title: 'পাসপোর্ট সেবা পোর্টালে নিবন্ধন', description: 'আপনার ইমেইল দিয়ে passportindia.gov.in-এ অ্যাকাউন্ট তৈরি করুন এবং আঞ্চলিক পাসপোর্ট অফিস নির্বাচন করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'ফর্ম পূরণ এবং নথি আপলোড', description: 'অনলাইনে ফর্ম পূরণ করুন, ব্যক্তিগত ও পারিবারিক বিবরণ দিন এবং প্রয়োজনীয় নথিপত্র আপলোড করুন।', duration: '১৫ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'ফি প্রদান এবং স্লট বুকিং', description: 'অনলাইনে ₹১,৫০০ ফি পরিশোধ করুন এবং নিকটবর্তী পিএসকে-তে অ্যাপয়েন্টমেন্ট বুক করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' },
        { stepNumber: 4, title: 'বায়োমেট্রিকের জন্য পিএসকে ভিজিট', description: 'মূল নথিপত্র সহ পিএসকে যান যেখানে ছবি এবং আঙুলের ছাপ গ্রহণ করা হবে।', duration: '১-২ ঘণ্টা', actionType: 'in-person' },
        { stepNumber: 5, title: 'পুলিশ ভেরিফিকেশন ও স্পিড পোস্টে প্রাপ্তি', description: 'স্থানীয় পুলিশ দ্বারা ঠিকানা যাচাইয়ের পর পাসপোর্ট স্পিড পোস্টে পৌঁছে যাবে।', duration: '৭-১৫ দিন', actionType: 'delivery' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'பாஸ்போர்ட் சேவாவில் பதிவு செய்யவும்',
                'description': 'passportindia.gov.in இல் கணக்கை உருவாக்கி உங்கள் மண்டல பாஸ்போர்ட் அலுவலகத்தைத் தேர்ந்தெடுக்கவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'படிவத்தைப் பூர்த்தி செய்து ஆவணங்களைப் பதிவேற்றவும்',
                'description': 'ஆன்லைன் படிவத்தைப் பூர்த்தி செய்து சுய சான்றளிக்கப்பட்ட ஆவணங்களைப் பதிவேற்றவும்.',
                'duration': '15 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'கட்டணம் செலுத்தி நேரத்தைப் முன்பதிவு செய்யவும்',
                'description': '₹1,500 கட்டணத்தை ஆன்லைனில் செலுத்தி PSK மையத்தில் முன்பதிவு நேரத்தைத் தேர்ந்தெடுக்கவும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'பயோமெட்ரிக் சரிபார்ப்பிற்கு PSK செல்லவும்',
                'description': 'அசல் ஆவணங்களுடன் PSK சென்று பயோமெட்ரிக் மற்றும் புகைப்படப் பதிவை முடிக்கவும்.',
                'duration': '1-2 மணிநேரம்',
                'actionType': 'in-person'
        },
        {
                'stepNumber': 5,
                'title': 'காவல் துறை சரிபார்ப்பு & பாஸ்போர்ட் விநியோகம்',
                'description': 'காவல் துறை சரிபார்ப்பிற்குப் பின் பாஸ்போர்ட் ஸ்பீட் போஸ்ட் மூலம் அனுப்பப்படும்.',
                'duration': '7-15 நாட்கள்',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['Online Application', 'Fee & Slot Booking', 'PSK Verification', 'Police Clearance', 'Speed Post Delivery'],
      hi: ['ऑनलाइन आवेदन', 'शुल्क व स्लॉट बुकिंग', 'PSK सत्यापन', 'पुलिस जांच', 'स्पीड पोस्ट डिलीवरी'],
      bn: ['অনলাইন আবেদন', 'ফি ও স্লট বুকিং', 'পিএসকে যাচাইকরণ', 'পুলিশ ক্লিয়ারেন্স', 'স্পিড পোস্টে ডেলিভারি'],
      ta: [
        'ஆன்லைன் விண்ணப்பம்',
        'கட்டணம் & முன்பதிவு',
        'PSK சரிபார்ப்பு',
        'காவல் துறை சரிபார்ப்பு',
        'ஸ்பீட் போஸ்ட் விநியோகம்'
]
    },
    faq: {
      en: [
        { question: 'Can I reschedule my PSK appointment?', answer: 'Yes, up to 3 times within 1 year from the initial payment date.' },
        { question: 'Is police verification required for minors below 15?', answer: 'Police verification is usually exempted for minors if either parent holds a valid passport with spouse name endorsed.' }
      ],
      hi: [
        { question: 'क्या मैं अपनी अपॉइंटमेंट की तारीख बदल सकता हूँ?', answer: 'हाँ, प्रारंभिक भुगतान की तारीख से 1 वर्ष के भीतर अधिकतम 3 बार।' },
        { question: 'क्या 15 वर्ष से कम आयु के बच्चों के लिए पुलिस सत्यापन आवश्यक है?', answer: 'यदि माता-पिता में से किसी एक के पास वैध पासपोर्ट है तो आमतौर पर छूट मिलती है।' }
      ],
      bn: [
        { question: 'আমি কি অ্যাপয়েন্টমেন্টের সময় পরিবর্তন করতে পারি?', answer: 'হ্যাঁ, ফি প্রদানের তারিখ থেকে ১ বছরের মধ্যে সর্বোচ্চ ৩ বার পুনঃনির্ধারণ করা যায়।' },
        { question: 'নাবালকদের জন্য কি পুলিশ ভেরিফিকেশন বাধ্যতামূলক?', answer: 'পিতা-মাতার বৈধ পাসপোর্ট থাকলে সাধারণত নাবালকদের পুলিশ ভেরিফিকেশন মকুব করা হয়।' }
      ],
      ta: [
        {
                'question': 'எனது PSK முன்பதிவு நேரத்தை மாற்ற முடியுமா?',
                'answer': 'ஆம், கட்டணம் செலுத்திய தேதியிலிருந்து 1 வருடத்திற்குள் 3 முறை வரை மாற்றலாம்.'
        },
        {
                'question': '15 வயதுக்குட்பட்ட சிறுவர்களுக்கு காவல் துறை சரிபார்ப்பு தேவையா?',
                'answer': 'பெற்றோரில் ஒருவரிடம் செல்லுபடியாகும் பாஸ்போர்ட் இருந்தால் பொதுவாக விலக்கு அளிக்கப்படும்.'
        }
]
    },
    helpline: '1800-258-1800 (National Call Centre)'
  },

  // 2. AADHAAR CARD LOST / RECOVERY
  {
    id: 'aadhaar-lost',
    iconName: 'ShieldCheck',
    category: 'identity',
    department: {
      en: 'Unique Identification Authority of India (UIDAI)',
      hi: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
      bn: 'ইউনিক আইডেন্টিফিকেশন অথরিটি অফ ইন্ডিয়া (UIDAI)',
      ta: 'இந்திய தனித்துவ அடையாள ஆணையம் (UIDAI)'
    },
    officialPortal: 'myaadhaar.uidai.gov.in',
    officialUrl: 'https://myaadhaar.uidai.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: 'Instant (e-Aadhaar) | PVC Card: 5–7 Days',
      hi: 'तत्काल (ई-आधार) | पीवीसी कार्ड: 5–7 दिन',
      bn: 'তাৎক্ষণিক (ই-আধার) | পিভিসি কার্ড: ৫–৭ দিন',
      ta: 'உடனடி (மின்-ஆதார்) | PVC கார்டு: 5–7 நாட்கள்'
    },
    fee: {
      en: 'e-Aadhaar Download: Free | PVC Card Reprint: ₹50',
      hi: 'ई-आधार डाउनलोड: निःशुल्क | पीवीसी कार्ड: ₹50',
      bn: 'ই-আধার ডাউনলোড: বিনামূল্যে | পিভিসি কার্ড: ₹৫০',
      ta: 'மின்-ஆதார் பதிவிறக்கம்: இலவசம் | PVC கார்டு: ₹50'
    },
    keywords: [
      'aadhaar', 'lost aadhaar', 'aadhar card', 'find aadhaar number', 'uidai', 'download e-aadhaar', 'pvc aadhaar card', 'retrieve eid uid',
      'आधार कार्ड खो गया', 'आधार', 'आधार डाउनलोड', 'आधार नंबर',
      'আধার', 'আধার কার্ড হারিয়ে গেছে', 'আধার ডাউনলোড', 'পিভিসি আধার',
      'ஆதார்', 'ஆதார் கார்டு', 'தொலைந்த ஆதார்', 'ஆதார் பதிவிறக்கம்', 'PVC ஆதார்'
    ],
    title: {
      en: 'Lost Aadhaar Retrieval & Official PVC Reprint',
      hi: 'खोया हुआ आधार पुनः प्राप्त करें एवं पीवीसी कार्ड',
      bn: 'হারানো আধার কার্ড উদ্ধার এবং অফিসিয়াল পিভিসি প্রিন্ট',
      ta: 'தொலைந்த ஆதார் மீட்பு & அதிகாரப்பூர்வ PVC கார்டு'
    },
    badge: {
      en: 'Instant Digital Service',
      hi: 'त्वरित डिजिटल सेवा',
      bn: 'তাৎক্ষণিক ডিজিটাল পরিষেবা',
      ta: 'உடனடி டிஜிட்டல் சேவை'
    },
    shortSummary: {
      en: 'If you have lost your Aadhaar card or forgotten your 12-digit number / 28-digit Enrolment ID (EID), you can retrieve it instantly online using your registered mobile number or order an official water-resistant PVC card.',
      hi: 'यदि आपका आधार कार्ड खो गया है या आप 12-अंकीय आधार नंबर भूल गए हैं, तो आप पंजीकृत मोबाइल नंबर पर ओटीपी प्राप्त करके इसे तुरंत पुनः प्राप्त कर सकते हैं या ₹50 में आधिकारिक पीवीसी कार्ड मंगा सकते हैं।',
      bn: 'যদি আপনার আধার কার্ড হারিয়ে যায় বা নম্বর ভুলে যান, তবে নিবন্ধিত মোবাইল ওটিপির মাধ্যমে সহজেই ই-আধার ডাউনলোড করতে পারেন অথবা ₹৫০ দিয়ে স্পিড পোস্টে পিভিসি কার্ড অর্ডার করতে পারেন।',
      ta: 'உங்கள் ஆதார் கார்டைத் தொலைத்துவிட்டாலோ அல்லது ஆதார் எண்ணை மறந்துவிட்டாலோ, பதிவுசெய்த கைபேசி OTP மூலம் ஆன்லைனில் பெறலாம் அல்லது ₹50 செலுத்தி PVC கார்டு ஆர்டர் செய்யலாம்.'
    },
    eligibility: {
      en: [
        'Citizen must have previously enrolled for Aadhaar',
        'Registered Mobile Number or Email linked to Aadhaar (for instant OTP verification)',
        'If mobile is not linked, visit nearest Aadhaar Seva Kendra for biometric reprint'
      ],
      hi: [
        'नागरिक का पूर्व में आधार नामांकन होना अनिवार्य है',
        'आधार से जुड़ा पंजीकृत मोबाइल नंबर या ईमेल (ओटीपी के लिए)',
        'यदि मोबाइल लिंक नहीं है, तो बायोमेट्रिक प्रिंट के लिए आधार सेवा केंद्र जाएं'
      ],
      bn: [
        'পূর্বে আধার কার্ডে নথিভুক্ত থাকতে হবে',
        'আধার কার্ডের সাথে লিঙ্ক করা মোবাইল নম্বর বা ইমেইল থাকা আবশ্যক',
        'মোবাইল নম্বর লিঙ্ক না থাকলে নিকটবর্তী আধার সেবা কেন্দ্রে যেতে হবে'
      ],
      ta: [
        'குடிமகன் முன்பே ஆதாரில் பதிவு செய்திருக்க வேண்டும்',
        'ஆதாருடன் இணைக்கப்பட்ட கைபேசி எண் அல்லது மின்னஞ்சல் இருக்க வேண்டும்',
        'கைபேசி எண் இணைக்கப்படவில்லை எனில் அருகிலுள்ள ஆதார் சேவை மையத்திற்குச் செல்ல வேண்டும்'
]
    },
    documents: {
      en: [
        { id: 'a_mobile', name: 'Registered Mobile Number (for receiving UIDAI OTP)', required: true, note: 'Must be active to receive SMS' },
        { id: 'a_name', name: 'Exact Full Name as per Aadhaar Records', required: true },
        { id: 'a_dob', name: 'Date of Birth or Year of Birth', required: false, note: 'Helps in record narrowing' }
      ],
      hi: [
        { id: 'a_mobile', name: 'पंजीकृत मोबाइल नंबर (ओटीपी प्राप्त करने हेतु)', required: true, note: 'सक्रिय होना आवश्यक है' },
        { id: 'a_name', name: 'आधार रिकॉर्ड के अनुसार पूरा नाम', required: true },
        { id: 'a_dob', name: 'जन्म तिथि या जन्म वर्ष', required: false, note: 'सटीक खोज में सहायक' }
      ],
      bn: [
        { id: 'a_mobile', name: 'নিবন্ধিত মোবাইল নম্বর (ওটিপি গ্রহণের জন্য)', required: true, note: 'সক্রিয় থাকতে হবে' },
        { id: 'a_name', name: 'আধার কার্ড অনুযায়ী সম্পূর্ণ সঠিক নাম', required: true },
        { id: 'a_dob', name: 'জন্ম তারিখ বা জন্ম সাল', required: false }
      ],
      ta: [
        {
                'id': 'a_mobile',
                'name': 'பதிவுசெய்யப்பட்ட கைபேசி எண் (UIDAI OTP பெற)',
                'required': true,
                'note': 'SMS பெற செயலில் இருக்க வேண்டும்'
        },
        {
                'id': 'a_name',
                'name': 'ஆதார் பதிவில் உள்ளபடி சரியான முழு பெயர்',
                'required': true
        },
        {
                'id': 'a_dob',
                'name': 'பிறந்த தேதி அல்லது பிறந்த வருடம்',
                'required': false,
                'note': 'துல்லியமான தேடலுக்கு உதவும்'
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Visit myAadhaar Portal', description: 'Go to myaadhaar.uidai.gov.in and select "Retrieve EID / Aadhaar Number".', duration: '1 Min', actionType: 'online' },
        { stepNumber: 2, title: 'Enter Details & Request OTP', description: 'Enter your full name and registered 10-digit mobile number or email ID, then enter captcha.', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Receive Aadhaar Number via SMS', description: 'Submit the 6-digit OTP. Your 12-digit Aadhaar Number (UID) is sent to your mobile phone instantly.', duration: 'Instant', actionType: 'online' },
        { stepNumber: 4, title: 'Download e-Aadhaar PDF', description: 'Use the UID to download your password-protected e-Aadhaar PDF (password is First 4 letters of name in CAPITAL + Birth Year).', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 5, title: 'Optional: Order PVC Card (₹50)', description: 'Click "Order Aadhaar PVC Card", pay ₹50 online; card is dispatched via India Post with tracking.', duration: '5-7 Days', actionType: 'delivery' }
      ],
      hi: [
        { stepNumber: 1, title: 'myAadhaar पोर्टल पर जाएं', description: 'myaadhaar.uidai.gov.in पर जाएं और "Retrieve EID / Aadhaar Number" चुनें।', duration: '1 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'विवरण दर्ज करें और OTP मांगें', description: 'अपना पूरा नाम और पंजीकृत मोबाइल नंबर दर्ज करें, फिर कैप्चा भरें।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'SMS के जरिए आधार नंबर प्राप्त करें', description: '6-अंकीय ओटीपी दर्ज करें। आपका 12-अंकीय आधार नंबर तुरंत एसएमएस पर आ जाएगा।', duration: 'त्वरित', actionType: 'online' },
        { stepNumber: 4, title: 'ई-आधार पीडीएफ डाउनलोड करें', description: 'पासवर्ड से सुरक्षित ई-आधार डाउनलोड करें (पासवर्ड: नाम के पहले 4 अक्षर कैपिटल + जन्म वर्ष)।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 5, title: 'वैकल्पिक: पीवीसी कार्ड ऑर्डर करें (₹50)', description: 'पीवीसी कार्ड विकल्प चुनें, ₹50 का भुगतान करें; कार्ड डाक द्वारा घर पहुंच जाएगा।', duration: '5-7 दिन', actionType: 'delivery' }
      ],
      bn: [
        { stepNumber: 1, title: 'myAadhaar পোর্টালে যান', description: 'myaadhaar.uidai.gov.in-এ গিয়ে "Retrieve EID / Aadhaar Number" ক্লিক করুন।', duration: '১ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'তথ্য দিন ও ওটিপি পাঠান', description: 'আপনার পুরো নাম এবং রেজিস্টার্ড মোবাইল নম্বর লিখে ক্যাপচা পূরণ করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'এসএমএসে আধার নম্বর লাভ', description: 'ওটিপি দিন। আপনার ১২-সংখ্যার আধার নম্বর তৎক্ষণাৎ মোবাইলে মেসেজ চলে আসবে।', duration: 'তাৎক্ষণিক', actionType: 'online' },
        { stepNumber: 4, title: 'ই-আধার পিডিএফ ডাউনলোড', description: 'আধার নম্বর দিয়ে ই-আধার ডাউনলোড করুন (পাসওয়ার্ড: নামের প্রথম ৪টি অক্ষর বড় হাতের + জন্ম সাল)।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 5, title: 'ঐচ্ছিক: পিভিসি কার্ড অর্ডার (₹৫০)', description: 'ওয়াটারপ্রুফ কিউআরযুক্ত পিভিসি আধার কার্ড অর্ডার করুন, ডাকযোগে পৌঁছে যাবে।', duration: '৫-৭ দিন', actionType: 'delivery' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'myAadhaar போர்ட்டலுக்குச் செல்லவும்',
                'description': 'myaadhaar.uidai.gov.in க்குச் சென்று \'Retrieve EID / Aadhaar Number\' என்பதைத் தேர்ந்தெடுக்கவும்.',
                'duration': '1 நிமிடம்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'விவரங்களை உள்ளிட்டு OTP கோரவும்',
                'description': 'உங்கள் பெயர் மற்றும் பதிவுசெய்த கைபேசி எண்ணை உள்ளிட்டு கேப்ட்சா பூர்த்தி செய்யவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'SMS மூலம் ஆதார் எண் பெறவும்',
                'description': '6 இலக்க OTP ஐ உள்ளிடவும். உங்கள் 12 இலக்க ஆதார் எண் SMS மூலம் வரும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'மின்-ஆதார் PDF பதிவிறக்கவும்',
                'description': 'ஆதார் எண்ணைப் பயன்படுத்தி பாஸ்வேர்டு பாதுகாக்கப்பட்ட மின்-ஆதாரைப் பதிவிறக்கவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 5,
                'title': 'விருப்பத்தேர்வு: PVC கார்டு ஆர்டர் செய்யவும் (₹50)',
                'description': 'Order Aadhaar PVC Card என்பதைக் கிளிக் செய்து ₹50 செலுத்தினால் கார்டு தபால் மூலம் வரும்.',
                'duration': '5-7 நாட்கள்',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['Name & Phone Input', 'OTP Verification', 'UID Sent via SMS', 'e-Aadhaar Download', 'Optional PVC Delivery'],
      hi: ['नाम व फोन दर्ज', 'ओटीपी सत्यापन', 'एसएमएस पर यूआईडी', 'ई-आधार डाउनलोड', 'पीवीसी कार्ड डिलीवरी'],
      bn: ['নাম ও মোবাইল ইনপুট', 'ওটিপি যাচাই', 'এসএমএসে আধার নম্বর', 'ই-আধার ডাউনলোড', 'পিভিসি কার্ড ডেলিভারি'],
      ta: [
        'பெயர் & கைபேசி எண் உள்ளீடு',
        'OTP சரிபார்ப்பு',
        'SMS மூலம் UID பெறல்',
        'மின்-ஆதார் பதிவிறக்கம்',
        'PVC கார்டு விநியோகம்'
]
    },
    faq: {
      en: [
        { question: 'Is e-Aadhaar equally valid as the physical card?', answer: 'Yes! Section 4(3) of the Aadhaar Act confirms e-Aadhaar has the exact same legal validity for all government and banking uses.' },
        { question: 'What if my phone number is not registered?', answer: 'You can visit any Aadhaar Seva Kendra or post office with fingerprint authentication to reprint.' }
      ],
      hi: [
        { question: 'क्या ई-आधार भौतिक कार्ड की तरह ही मान्य है?', answer: 'हाँ, आधार अधिनियम के अनुसार ई-आधार कानूनी रूप से सभी जगह पूरी तरह मान्य है।' },
        { question: 'यदि मेरा मोबाइल नंबर लिंक नहीं है तो क्या करें?', answer: 'आप किसी भी नजदीकी आधार सेवा केंद्र में बायोमेट्रिक सत्यापन करवाकर प्रिंट प्राप्त कर सकते हैं।' }
      ],
      bn: [
        { question: 'ই-আধার কি আসল কার্ডের মতোই বৈধ?', answer: 'হ্যাঁ, আইনত সমস্ত সরকারি ও বেসরকারি ক্ষেত্রে ই-আধার সম্পূর্ণ বৈধ।' },
        { question: 'মোবাইল নম্বর লিঙ্ক না থাকলে কী করব?', answer: 'নিকটস্থ আধার সেবা কেন্দ্রে গিয়ে ফিঙ্গারপ্রিন্ট দিয়ে কার্ড প্রিন্ট করে নিতে পারেন।' }
      ],
      ta: [
        {
                'question': 'மின்-ஆதார் அசல் அட்டைக்கு சமமான செல்லுபடி உடையதா?',
                'answer': 'ஆம்! ஆதார் சட்டத்தின்படி மின்-ஆதார் அனைத்து அரசு மற்றும் வங்கி பயன்பாடுகளுக்கும் முழுமையாகச் செல்லுபடியாகும்.'
        },
        {
                'question': 'எனது கைபேசி எண் இணைக்கப்படவில்லை என்றால் என்ன செய்வது?',
                'answer': 'அருகிலுள்ள ஆதார் சேவை மையத்திற்குச் சென்று கைரேகை சரிபார்ப்பு மூலம் அச்சிடலாம்.'
        }
]
    },
    helpline: '1947 (UIDAI Toll-Free 24x7)'
  },

  // 3. PAN CARD APPLICATION (Form 49A / Instant e-PAN)
  {
    id: 'pan-card',
    iconName: 'CreditCard',
    category: 'identity',
    department: {
      en: 'Income Tax Department (Protean NSDL / UTIITSL)',
      hi: 'आयकर विभाग (प्रोटीन एनएसडीएल / यूटीआईआईटीएसएल)',
      bn: 'আয়কর বিভাগ (প্রোটিয়ান এনএসডিএল / ইউটিআইআইটিএসএল)',
      ta: 'வருமான வரித் துறை (Protean NSDL / UTIITSL)'
    },
    officialPortal: 'onlineservices.nsdl.com',
    officialUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    lastVerified: 'August 2026',
    processingTime: {
      en: 'Instant e-PAN: 10 Mins | Physical Card: 7–10 Days',
      hi: 'त्वरित ई-पैन: 10 मिनट | भौतिक कार्ड: 7–10 दिन',
      bn: 'তাৎক্ষণিক ই-প্যান: ১০ মিনিট | ফিজিক্যাল কার্ড: ৭–১০ দিন',
      ta: 'உடனடி மின்-பான்: 10 நிமிடங்கள் | அசல் கார்டு: 7–10 நாட்கள்'
    },
    fee: {
      en: 'Instant e-PAN: Free | Physical Card: ₹107 (India) / ₹1,017 (Abroad)',
      hi: 'ई-पैन: निःशुल्क | भौतिक कार्ड: ₹107 (भारत)',
      bn: 'ই-প্যান: বিনামূল্যে | ফিজিক্যাল কার্ড: ₹১০৭',
      ta: 'மின்-பான்: இலவசம் | அசல் கார்டு: ₹107'
    },
    keywords: [
      'pan', 'pan card', 'apply pan', 'form 49a', 'instant pan', 'e-pan', 'income tax pan', 'pan correction', 'nsdl pan',
      'पैन कार्ड', 'पैन कार्ड ऑनलाइन', 'नया पैन कार्ड', 'पैन आवेदन',
      'প্যান কার্ড', 'নতুন প্যান কার্ড আবেদন', 'ই-প্যান', 'ফর্ম ৪৯এ',
      'பான் கார்டு', 'பான் விண்ணப்பம்', 'மின்-பான்', 'புதிய பான் கார்டு'
    ],
    title: {
      en: 'New PAN Card Application (Form 49A & Instant e-PAN)',
      hi: 'नया पैन कार्ड आवेदन (फॉर्म 49A एवं त्वरित ई-पैन)',
      bn: 'নতুন প্যান কার্ড আবেদন (ফর্ম ৪৯এ এবং তাৎক্ষণিক ই-প্যান)',
      ta: 'புதிய பான் கார்டு விண்ணப்பம் (படிவம் 49A & மின்-பான்)'
    },
    badge: {
      en: 'Paperless Aadhaar e-KYC',
      hi: 'कागज रहित आधार ई-केवाईसी',
      bn: 'কাগজহীন আধার ই-কেওয়াইসি',
      ta: 'தாளில்லா ஆதார் e-KYC'
    },
    shortSummary: {
      en: 'Every Indian taxpayer or citizen opening a bank account, investing, or filing taxes requires a Permanent Account Number (PAN). You can obtain an instant paperless e-PAN within 10 minutes or apply for a physical card with doorstep delivery.',
      hi: 'बैंक खाता खोलने या वित्तीय लेनदेन के लिए पैन कार्ड अनिवार्य है। आप आधार ई-केवाईसी के माध्यम से 10 मिनट में निःशुल्क ई-पैन प्राप्त कर सकते हैं या ₹107 में लैमिनेटेड कार्ड घर मंगवा सकते हैं।',
      bn: 'ব্যাংক অ্যাকাউন্ট খোলা বা আর্থিক লেনদেনের জন্য প্যান কার্ড অত্যাবশ্যক। আপনি আধার ওটিপির সাহায্যে ১০ মিনিটে বিনামূল্যে ই-প্যান পেতে পারেন অথবা ডাকযোগে কার্ডের জন্য আবেদন করতে পারেন।',
      ta: 'வங்கி கணக்கு தொடங்குவதற்கும் நிதியியல் பரிவர்த்தனைகளுக்கும் பான் கார்டு கட்டாயமாகும். ஆதார் e-KYC மூலம் 10 நிமிடங்களில் இலவச மின்-பான் பெறலாம் அல்லது ₹107 செலுத்தி அசல் கார்டு பெறலாம்.'
    },
    eligibility: {
      en: [
        'Any Indian individual, minor (via guardian), firm, or company',
        'Valid Aadhaar card linked with active mobile number (for instant paperless e-KYC)',
        'Must not already possess another active PAN (holding two PANs attracts ₹10,000 penalty)'
      ],
      hi: [
        'कोई भी भारतीय नागरिक या अवयस्क (अभिभावक के माध्यम से)',
        'सक्रिय मोबाइल से जुड़ा वैध आधार कार्ड (तत्काल ई-केवाईसी के लिए)',
        'पहले से कोई अन्य पैन कार्ड नहीं होना चाहिए'
      ],
      bn: [
        'যেকোনো ভারতীয় নাগরিক বা নাবালক (অভিভাবকের মাধ্যমে)',
        'মোবাইল লিঙ্কযুক্ত বৈধ আধার কার্ড (পেপারলেস ই-কেওয়াইসির জন্য)',
        'পূর্বে কোনো প্যান কার্ড বরাদ্দ থাকা চলবে না'
      ],
      ta: [
        'எந்தவொரு இந்திய குடிமகனும் விண்ணப்பிக்கலாம்',
        'கைபேசி எண்ணுடன் இணைக்கப்பட்ட செல்லுபடியாகும் ஆதார் கார்டு இருக்க வேண்டும்',
        'முன்பே வேறு பான் கார்டு இருக்கக்கூடாது'
]
    },
    documents: {
      en: [
        { id: 'pan_aadhaar', name: 'Aadhaar Card (serves as Proof of Identity, Address, and DOB)', required: true, note: 'Sufficient for 100% paperless e-KYC' },
        { id: 'pan_photo', name: 'Recent Passport Size Photograph (White Background)', required: true, note: 'Fetched automatically from Aadhaar if e-KYC used' },
        { id: 'pan_sig', name: 'Digital Signature / Scanned Signature file', required: true, note: 'PNG/JPEG below 50KB' }
      ],
      hi: [
        { id: 'pan_aadhaar', name: 'आधार कार्ड (पहचान, पता और जन्म तिथि तीनों का प्रमाण)', required: true, note: 'ई-केवाईसी के लिए पूर्ण रूप से पर्याप्त' },
        { id: 'pan_photo', name: 'नवीनतम पासपोर्ट साइज फोटो', required: true, note: 'ई-केवाईसी में आधार से स्वतः ली जाती है' },
        { id: 'pan_sig', name: 'हस्ताक्षर की स्कैन कॉपी (50KB से कम)', required: true }
      ],
      bn: [
        { id: 'pan_aadhaar', name: 'আধার কার্ড (পরিচয়, ঠিকানা ও জন্ম তারিখের একক প্রমাণ)', required: true, note: 'পেপারলেস ই-কেওয়াইসির জন্য যথেষ্ট' },
        { id: 'pan_photo', name: 'সাম্প্রতিক পাসপোর্ট সাইজ রঙিন ছবি', required: true },
        { id: 'pan_sig', name: 'স্বাক্ষরের স্ক্যান কপি (৫০ কেবি-র মধ্যে)', required: true }
      ],
      ta: [
        {
                'id': 'pan_aadhaar',
                'name': 'ஆதார் கார்டு (அடையாளம், முகவரி & பிறந்த தேதிக்கு சான்று)',
                'required': true,
                'note': 'தாளில்லா e-KYC க்கு போதுமானது'
        },
        {
                'id': 'pan_photo',
                'name': 'சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படம்',
                'required': true,
                'note': 'e-KYC இல் ஆதாரில் இருந்து பெறப்படும்'
        },
        {
                'id': 'pan_sig',
                'name': 'டிஜிட்டல் கையொப்பக் கோப்பு (50KB க்குள்)',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Select Application Type', description: 'Go to NSDL or Income Tax e-Filing portal. Select "Application Type: New PAN - Indian Citizen (Form 49A)".', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Fill Personal & Income Details', description: 'Enter Name, Date of Birth, Father’s Name, Source of Income, and communication address.', duration: '8 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Aadhaar OTP e-KYC & e-Sign', description: 'Authenticate using Aadhaar OTP. No physical paper submission required.', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Pay Fee Online', description: 'Pay ₹107 via UPI / Net Banking / Debit Card. Acknowledgement number generated.', duration: 'Instant', actionType: 'online' },
        { stepNumber: 5, title: 'Receive e-PAN & Postal Delivery', description: 'Digitally signed e-PAN PDF sent to email in 24-48 hours. Physical card delivered via Speed Post.', duration: '7-10 Days', actionType: 'delivery' }
      ],
      hi: [
        { stepNumber: 1, title: 'आवेदन प्रकार चुनें', description: 'NSDL या इनकम टैक्स पोर्टल पर "नया पैन - भारतीय नागरिक (फॉर्म 49A)" चुनें।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'व्यक्तिगत जानकारी भरें', description: 'नाम, जन्म तिथि, पिता का नाम और पता आदि विवरण भरें।', duration: '8 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'आधार ओटीपी ई-साइन', description: 'आधार पर प्राप्त ओटीपी द्वारा डिजिटल हस्ताक्षर करें।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'शुल्क का भुगतान करें', description: 'यूपीआई या डेबिट कार्ड से ₹107 का ऑनलाइन भुगतान करें। रसीद नंबर मिलेगा।', duration: 'त्वरित', actionType: 'online' },
        { stepNumber: 5, title: 'ई-पैन ईमेल और कार्ड डिलीवरी', description: 'ई-पैन पीडीएफ 24-48 घंटे में ईमेल पर और प्लास्टिक कार्ड 7 दिनों में डाक से आएगा।', duration: '7-10 दिन', actionType: 'delivery' }
      ],
      bn: [
        { stepNumber: 1, title: 'আবেদনের ধরন নির্বাচন', description: 'এনএসডিএল পোর্টালে গিয়ে "নতুন প্যান - ভারতীয় নাগরিক (ফর্ম ৪৯এ)" সিলেক্ট করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'ব্যক্তিগত তথ্য পূরণ', description: 'নাম, জন্মতারিখ, পিতার নাম এবং যোগাযোগের ঠিকানা প্রদান করুন।', duration: '৮ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'আধার ওটিপি ই-সাইনিং', description: 'আধার ওটিপি দিয়ে তাৎক্ষণিক পেপারলেস ভেরিফিকেশন সম্পূর্ণ করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'অনলাইন ফি পেমেন্ট', description: 'ইউপিআই বা নেট ব্যাংকিং দিয়ে ₹১০৭ ফি জমা দিন। প্রাপ্তি রসিদ ডাউনলোড করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' },
        { stepNumber: 5, title: 'ই-প্যান ও ডাকযোগে প্রাপ্তি', description: '২৪ ঘণ্টায় ইমেইলে ই-প্যান আসবে এবং ৭ দিনের মধ্যে কার্ড বাড়িতে পৌঁছে যাবে।', duration: '৭-১০ দিন', actionType: 'delivery' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'விண்ணப்ப வகையைத் தேர்ந்தெடுக்கவும்',
                'description': 'NSDL போர்ட்டலில் \'New PAN - Indian Citizen (Form 49A)\' என்பதைத் தேர்ந்தெடுக்கவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'சுய விவரங்களை பூர்த்தி செய்யவும்',
                'description': 'பெயர், பிறந்த தேதி, தந்தை பெயர் மற்றும் முகவரியை உள்ளிடவும்.',
                'duration': '8 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'ஆதார் OTP e-KYC சரிபார்ப்பு',
                'description': 'ஆதார் OTP மூலம் சரிபார்த்து டிஜிட்டல் கையொப்பமிடவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'ஆன்லைன் கட்டணம் செலுத்தவும்',
                'description': '₹107 கட்டணத்தை ஆன்லைனில் செலுத்தி ஒப்புதல் சீட்டைப் பெறவும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        },
        {
                'stepNumber': 5,
                'title': 'மின்-பான் & கார்டு விநியோகம்',
                'description': 'மின்-பான் PDF 24 மணிநேரத்தில் மின்னஞ்சலுக்கு வரும். அசல் கார்டு தபாலில் வரும்.',
                'duration': '7-10 நாட்கள்',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['Form 49A Input', 'Aadhaar e-KYC', '₹107 Online Payment', 'e-PAN in 24 Hrs', 'Speed Post Delivery'],
      hi: ['फॉर्म 49A भरना', 'आधार ई-केवाईसी', '₹107 ऑनलाइन भुगतान', '24 घंटे में ई-पैन', 'डाक द्वारा डिलीवरी'],
      bn: ['ফর্ম পূরণ', 'আধার ওটিপি যাচাই', 'অনলাইন ফি প্রদান', '২৪ ঘণ্টায় ই-প্যান', 'স্পিড পোস্টে ডেলিভারি'],
      ta: [
        'படிவம் 49A பூர்த்தி',
        'ஆதார் e-KYC',
        '₹107 கட்டணம்',
        '24 மணிநேரத்தில் மின்-பான்',
        'தபால் மூலம் கார்டு விநியோகம்'
]
    },
    faq: {
      en: [
        { question: 'What is the difference between Instant e-PAN and normal PAN card?', answer: 'Instant e-PAN is 100% free and issued digitally in minutes using Aadhaar data. Normal PAN card lets you select custom signatures/photos and sends a physical laminated card.' }
      ],
      hi: [
        { question: 'तत्काल ई-पैन और सामान्य पैन कार्ड में क्या अंतर है?', answer: 'ई-पैन पूरी तरह निःशुल्क और तुरंत मिलता है, जबकि सामान्य आवेदन में भौतिक प्लास्टिक कार्ड घर भेजा जाता है।' }
      ],
      bn: [
        { question: 'ই-প্যান ও সাধারণ প্যানের মধ্যে পার্থক্য কী?', answer: 'ই-প্যান ১০ মিনিটে বিনামূল্যে তৈরি হয়। সাধারণ আবেদনে প্লাস্টিক ফিজিক্যাল কার্ড ডাকযোগে আসে।' }
      ],
      ta: [
        {
                'question': 'மின்-பான் மற்றும் அசல் பான் கார்டுக்கு என்ன வித்தியாசம்?',
                'answer': 'மின்-பான் முற்றிலும் இலவசம் மற்றும் 10 நிமிடத்தில் டிஜிட்டலாக கிடைக்கும். அசல் கார்டு தபாலில் பிளாஸ்டிக் கார்டாக வரும்.'
        }
]
    },
    helpline: '020-27218080 (Protean NSDL Helpline)'
  },

  // 4. VOTER ID REGISTRATION (Form 6)
  {
    id: 'voter-id',
    iconName: 'Vote',
    category: 'identity',
    department: {
      en: 'Election Commission of India (ECI)',
      hi: 'भारत निर्वाचन आयोग (ECI)',
      bn: 'ভারতের নির্বাচন কমিশন (ECI)',
      ta: 'இந்திய தேர்தல் ஆணையம் (ECI)'
    },
    officialPortal: 'voters.eci.gov.in',
    officialUrl: 'https://voters.eci.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: '15–30 Days (Digital e-EPIC available upon approval)',
      hi: '15–30 दिन (अनुमोदन पर डिजिटल e-EPIC उपलब्ध)',
      bn: '১৫–৩০ দিন (অনুমোদনের পর ডিজিটাল e-EPIC ডাউনলোডযোগ্য)',
      ta: '15–30 நாட்கள் (அனுமதிக்குப் பின் e-EPIC பதிவிறக்கலாம்)'
    },
    fee: {
      en: '100% Free of Cost',
      hi: 'पूर्णतः निःशुल्क',
      bn: 'সম্পূর্ণ বিনামূল্যে',
      ta: '100% இலவசம்'
    },
    keywords: [
      'voter', 'voter id', 'vote', 'form 6', 'register to vote', 'epic card', 'election card', 'new voter registration', 'eci portal',
      'वोटर आईडी', 'मतदाता पहचान पत्र', 'वोटर कार्ड', 'फॉर्म 6', 'नया वोटर कार्ड',
      'ভোটার কার্ড', 'নতুন ভোটার আবেদন', 'ভোট আইডি', 'ফর্ম ৬',
      'வாக்காளர் அட்டை', 'வாக்காளர் பதிவு', 'படிவம் 6', 'e-EPIC'
    ],
    title: {
      en: 'New Voter Registration & e-EPIC Download (Form 6)',
      hi: 'नया मतदाता पंजीकरण एवं ई-ईपीआईसी कार्ड (फॉर्म 6)',
      bn: 'নতুন ভোটার তালিকায় নাম তোলা এবং ডিজিটাল ভোটার কার্ড (ফর্ম ৬)',
      ta: 'புதிய வாக்காளர் பதிவு & e-EPIC பதிவிறக்கம் (படிவம் 6)'
    },
    badge: {
      en: 'Constitutional Right • 100% Free',
      hi: 'संवैधानिक अधिकार • निःशुल्क',
      bn: 'সাংবিধানিক অধিকার • বিনামূল্যে',
      ta: 'அரசியலமைப்பு உரிமை • இலவசம்'
    },
    shortSummary: {
      en: 'Any Indian citizen who has reached 18 years of age (or turning 18 in the upcoming qualifying quarter) can register in the electoral roll using Form 6 on the official ECI Voter Portal. Once approved by the Electoral Registration Officer (ERO), a digital e-EPIC can be downloaded.',
      hi: '18 वर्ष की आयु पूरी कर चुके प्रत्येक भारतीय नागरिक भारत निर्वाचन आयोग के पोर्टल पर फॉर्म 6 भरकर मतदाता सूची में अपना नाम जुड़वा सकते हैं। सत्यापन के पश्चात निःशुल्क वोटर कार्ड स्पीड पोस्ट द्वारा भेजा जाता है।',
      bn: '১৮ বছর পূর্ণ হওয়া যেকোনো ভারতীয় নাগরিক নির্বাচন কমিশনের পোর্টালে ফর্ম ৬ পূরণ করে ভোটার তালিকায় নাম তুলতে পারেন। অনুমোদনের পর ডিজিটাল ভোটার কার্ড (e-EPIC) ডাউনলোড করা যায়।',
      ta: '18 வயது பூர்த்தியடைந்த இந்தியக் குடிமக்கள் ECI வாக்காளர் போர்ட்டலில் படிவம் 6 பூர்த்தி செய்து வாக்காளர் பட்டியலில் பெயரைப் பதிவு செய்யலாம். அனுமதிக்குப் பின் டிஜிட்டல் வாக்காளர் கார்டு பதிவிறக்கலாம்.'
    },
    eligibility: {
      en: [
        'Must be an Indian citizen',
        'Must have attained 18 years of age on the qualifying date (Jan 1, Apr 1, Jul 1, Oct 1)',
        'Must be an ordinary resident of the polling constituency where applying'
      ],
      hi: [
        'भारतीय नागरिक होना चाहिए',
        'योग्यता तिथि पर 18 वर्ष की आयु पूर्ण होनी चाहिए',
        'उस विधानसभा क्षेत्र का सामान्य निवासी होना चाहिए'
      ],
      bn: [
        'ভারতের নাগরিক হতে হবে',
        'নির্ধারিত তারিখে ১৮ বছর বয়স পূর্ণ হতে হবে',
        'সংশ্লিষ্ট নির্বাচনী এলাকার স্থায়ী বা সাধারণ বাসিন্দা হতে হবে'
      ],
      ta: [
        'இந்தியக் குடிமகனாக இருக்க வேண்டும்',
        'தகுதித் தேதியில் 18 வயது பூர்த்தியடைந்திருக்க வேண்டும்',
        'விண்ணப்பிக்கும் தொகுதியின் நிலையான வசிப்பிடவாசியாக இருக்க வேண்டும்'
]
    },
    documents: {
      en: [
        { id: 'v_photo', name: 'Passport Size Color Photograph (below 2MB)', required: true },
        { id: 'v_age', name: 'Age Proof (Birth Certificate / 10th Certificate / Aadhaar / PAN)', required: true },
        { id: 'v_addr', name: 'Proof of Ordinary Residence (Electricity Bill / Water Bill / Aadhaar / Rent Agreement)', required: true }
      ],
      hi: [
        { id: 'v_photo', name: 'पासपोर्ट साइज रंगीन फोटो', required: true },
        { id: 'v_age', name: 'आयु प्रमाण (जन्म प्रमाण पत्र / 10वीं का प्रमाण पत्र / आधार / पैन)', required: true },
        { id: 'v_addr', name: 'निवास प्रमाण (बिजली का बिल / पानी का बिल / आधार कार्ड / बैंक पासबुक)', required: true }
      ],
      bn: [
        { id: 'v_photo', name: 'পাসপোর্ট সাইজ রঙিন ছবি', required: true },
        { id: 'v_age', name: 'বয়সের প্রমাণ (জন্ম সনদ / মাধ্যমিক অ্যাডমিট / আধার / প্যান)', required: true },
        { id: 'v_addr', name: 'বাসস্থানের প্রমাণ (বিদ্যুৎ বিল / আধার / ব্যাংক পাসবুক)', required: true }
      ],
      ta: [
        {
                'id': 'v_photo',
                'name': 'பாஸ்போர்ட் அளவு வண்ணப் புகைப்படம் (2MB க்குள்)',
                'required': true
        },
        {
                'id': 'v_age',
                'name': 'வயதுச் சான்று (பிறப்புச் சான்றிதழ் / 10வது சான்றிதழ் / ஆதார் / பான்)',
                'required': true
        },
        {
                'id': 'v_addr',
                'name': 'முகவரிச் சான்று (மின்சாரக் கட்டணம் / குடிநீர்க் கட்டணம் / ஆதார்)',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Sign up on ECI Voter Portal', description: 'Create an account on voters.eci.gov.in with your mobile number.', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Fill Form 6', description: 'Enter Assembly Constituency, Personal details, Family details, and upload photo & proofs.', duration: '10 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Receive Application Reference ID', description: 'Note the 12-character Reference Number to track real-time status.', duration: 'Instant', actionType: 'online' },
        { stepNumber: 4, title: 'Booth Level Officer (BLO) Verification', description: 'Local BLO visits address for verification or calls to verify documents.', duration: '7-15 Days', actionType: 'verification' },
        { stepNumber: 5, title: 'Approval & e-EPIC Download', description: 'ERO approves application. Download digital e-EPIC immediately; color PVC EPIC card is posted.', duration: '10-20 Days', actionType: 'delivery' }
      ],
      hi: [
        { stepNumber: 1, title: 'ECI वोटर पोर्टल पर साइन अप करें', description: 'voters.eci.gov.in पर मोबाइल नंबर से अकाउंट बनाएं।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'फॉर्म 6 भरें', description: 'विधानसभा क्षेत्र, व्यक्तिगत विवरण भरें तथा फोटो व दस्तावेज अपलोड करें।', duration: '10 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'आवेदन संदर्भ संख्या (Reference ID) प्राप्त करें', description: 'स्थिति ट्रैक करने के लिए 12-अंकीय ट्रैकिंग नंबर नोट करें।', duration: 'त्वरित', actionType: 'online' },
        { stepNumber: 4, title: 'बीएलओ (BLO) द्वारा भौतिक सत्यापन', description: 'क्षेत्रीय बीएलओ आपके पते पर आकर दस्तावेजों की जांच करते हैं।', duration: '7-15 दिन', actionType: 'verification' },
        { stepNumber: 5, title: 'स्वीकृति एवं e-EPIC डाउनलोड', description: 'स्वीकृति के बाद डिजिटल वोटर कार्ड डाउनलोड करें, प्लास्टिक कार्ड डाक से घर आएगा।', duration: '10-20 दिन', actionType: 'delivery' }
      ],
      bn: [
        { stepNumber: 1, title: 'ভোটার পোর্টালে সাইন আপ', description: 'voters.eci.gov.in-এ গিয়ে মোবাইল নম্বর দিয়ে রেজিস্টার করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'ফর্ম ৬ পূরণ', description: 'বিধানসভা কেন্দ্র, নিজের নাম, পরিবারের বিবরণ ও ঠিকানার নথি আপলোড করুন।', duration: '১০ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'রেফারেন্স আইডি লাভ', description: 'স্ট্যাটাস ট্র্যাক করার জন্য রেফারেন্স নম্বর সংগ্রহ করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' },
        { stepNumber: 4, title: 'বিএলও (BLO) দ্বারা যাচাইকরণ', description: 'স্থানীয় বুথ লেভেল অফিসার আপনার বাড়ি এসে নথি যাচাই করবেন।', duration: '৭-১৫ দিন', actionType: 'verification' },
        { stepNumber: 5, title: 'অনুমোদন ও e-EPIC ডাউনলোড', description: 'অনুমোদনের পর মোবাইল থেকে ডিজিটাল ভোটার কার্ড ডাউনলোড করুন।', duration: '১০-২০ দিন', actionType: 'delivery' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'ECI வாக்காளர் போர்ட்டலில் பதிவு செய்யவும',
                'description': 'voters.eci.gov.in இல் கைபேசி எண்ணைப் பயன்படுத்தி கணக்கை உருவாக்கவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'படிவம் 6 ஐப் பூர்த்தி செய்யவும்',
                'description': 'சட்டமன்றத் தொகுதி, சுய விவரங்கள் உள்ளிட்டு சான்றுகளைப் பதிவேற்றவும்.',
                'duration': '10 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'விண்ணப்பக் குறிப்பு எண் பெறவும்',
                'description': 'நிலையைக் கண்காணிக்க 12 இலக்க குறிப்பு எண்ணைக் குறித்துக் கொள்ளவும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'வாக்குச்சாவடி நிலை அலுவலர் (BLO) சரிபார்ப்பு',
                'description': 'BLO உங்கள் முகவரிக்கு வந்து ஆவணங்களைச் சரிபார்ப்பார்.',
                'duration': '7-15 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'அனுமதி & e-EPIC பதிவிறக்கம்',
                'description': 'அனுமதிக்குப் பின் டிஜிட்டல் வாக்காளர் கார்டைப் பதிவிறக்கலாம்; PVC கார்டு தபாலில் வரும்.',
                'duration': '10-20 நாட்கள்',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['Form 6 Online Submit', 'Ref ID Generated', 'BLO Field Verification', 'ERO Approval', 'e-EPIC Ready & Speed Post'],
      hi: ['फॉर्म 6 सबमिट', 'रेफरेंस आईडी', 'बीएलओ सत्यापन', 'ईआरओ अनुमोदन', 'e-EPIC व डाक वितरण'],
      bn: ['ফর্ম ৬ জমা', 'রেফারেন্স আইডি', 'বিএলও ভেরিফিকেশন', 'অনুমোদন', 'ই-ভোটার কার্ড প্রাপ্তি'],
      ta: [
        'படிவம் 6 சமர்ப்பிப்பு',
        'குறிப்பு எண் பெறல்',
        'BLO சரிபார்ப்பு',
        'ERO அனுமதி',
        'e-EPIC பதிவிறக்கம்'
]
    },
    faq: {
      en: [
        { question: 'Can I vote if I only have e-EPIC on my phone?', answer: 'Yes! If your name appears on the published electoral roll, e-EPIC or any of the 12 approved government photo IDs is valid at the polling booth.' }
      ],
      hi: [
        { question: 'क्या डिजिटल ई-ईपीआईसी दिखाकर वोट दिया जा सकता है?', answer: 'हाँ! यदि आपका नाम मतदाता सूची में है तो ई-ईपीआईसी पूरी तरह मान्य है।' }
      ],
      bn: [
        { question: 'ডিজিটাল ভোটার কার্ড দেখিয়ে ভোট দেওয়া যাবে?', answer: 'হ্যাঁ, ভোটার তালিকায় নাম থাকলে যেকোনো সরকারি ফটো আইডির সাথে এটি গ্রহণযোগ্য।' }
      ],
      ta: [
        {
                'question': 'மொபைலில் உள்ள e-EPIC வைத்துக் கொண்டு வாக்களிக்க முடியுமா?',
                'answer': 'ஆம்! வாக்காளர் பட்டியலில் உங்கள் பெயர் இருந்தால், e-EPIC அல்லது அனுமதிக்கப்பட்ட அடையாள அட்டையைக் காட்டி வாக்களிக்கலாம்.'
        }
]
    },
    helpline: '1950 (Voter Helpline Toll-Free)'
  },

  // 5. DRIVING LICENCE RENEWAL (Parivahan Sarathi)
  {
    id: 'driving-licence',
    iconName: 'Car',
    category: 'transport',
    department: {
      en: 'Ministry of Road Transport and Highways (MoRTH)',
      hi: 'सड़क परिवहन और राजमार्ग मंत्रालय (MoRTH)',
      bn: 'সড়ক পরিবহন ও মহাসড়ক মন্ত্রণালয় (MoRTH)',
      ta: 'சாலைப் போக்குவரத்து மற்றும் நெடுஞ்சாலைகள் அமைச்சகம் (MoRTH)'
    },
    officialPortal: 'sarathi.parivahan.gov.in',
    officialUrl: 'https://sarathi.parivahan.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: '7–15 Days (Contactless Aadhaar-based in most States)',
      hi: '7–15 दिन (अधिकांश राज्यों में संपर्क रहित आधार-आधारित)',
      bn: '৭–১৫ দিন (অধিকাংশ রাজ্যে অনলাইন ফেসলেস পরিষেবা)',
      ta: '7–15 நாட்கள் (பெரும்பாலான மாநிலங்களில் ஆன்லைன் முகமில்லா சேவை)'
    },
    fee: {
      en: 'Renewal Fee: ₹200 + Smart Card: ₹200 (Late fee: ₹1,000/yr if expired >1 yr)',
      hi: 'नवीनीकरण शुल्क: ₹200 + स्मार्ट कार्ड: ₹200',
      bn: 'নবায়ন ফি: ₹২০০ + স্মার্ট কার্ড: ₹২০০',
      ta: 'புதுப்பித்தல் கட்டணம்: ₹200 + ஸ்மார்ட் கார்டு: ₹200'
    },
    keywords: [
      'driving licence', 'dl renewal', 'renew dl', 'driving license', 'parivahan', 'sarathi', 'form 9', 'form 1a medical', 'rto renewal', 'licence expired',
      'ड्राइविंग लाइसेंस', 'डीएल नवीनीकरण', 'ड्राइविंग लाइसेंस रिन्यू', 'परिवहन',
      'ড্রাইভিং লাইসেন্স', 'ড্রাইভিং লাইসেন্স রিনিউ', 'পরিবহন সারথী',
      'ஓட்டுநர் உரிமம்', 'லைசென்ஸ் புதுப்பித்தல்', 'சாரதி', 'பரிவாஹன்'
    ],
    title: {
      en: 'Driving Licence Renewal & Address Change (Faceless RTO)',
      hi: 'ड्राइविंग लाइसेंस नवीनीकरण (फेसलेस आरटीओ सेवा)',
      bn: 'ড্রাইভিং লাইসেন্স নবায়ন এবং ঠিকানা পরিবর্তন (অনলাইন আরটিও)',
      ta: 'ஓட்டுநர் உரிமப் புதுப்பித்தல் & முகவரி மாற்றம் (சாரதி RTO)'
    },
    badge: {
      en: 'Contactless Aadhaar Service',
      hi: 'संपर्क रहित आधार सेवा',
      bn: 'অনলাইন আধার নির্ভর পরিষেবা',
      ta: 'தாளில்லா ஆதார் சேவை'
    },
    shortSummary: {
      en: 'Driving licences can be renewed online through the Sarathi Parivahan portal up to 1 year before expiry and within 1 year after expiry without re-test. In Aadhaar-enabled faceless states, you do not need to visit the RTO.',
      hi: 'ड्राइविंग लाइसेंस की समाप्ति से 1 वर्ष पहले या 1 वर्ष बाद तक आप सारथी पोर्टल पर बिना दोबारा टेस्ट दिए ऑनलाइन नवीनीकरण कर सकते हैं। आधार प्रमाणीकरण से आरटीओ जाने की आवश्यकता नहीं होती।',
      bn: 'ড্রাইভিং লাইসেন্সের মেয়াদ শেষ হওয়ার ১ বছর আগে বা পরে সারথী পোর্টালের মাধ্যমে অনলাইনে নবায়ন করা যায়। আধার লিঙ্ক থাকলে আরটিও অফিসে না গিয়েও ঘরে বসে পরিষেবা পাওয়া যায়।',
      ta: 'சாரதி பரிவாஹன் போர்ட்டலில் ஓட்டுநர் உரிமம் முடிவதற்கு 1 வருடத்திற்கு முன்போ அல்லது முடிந்த 1 வருடத்திற்குள்ளோ மீண்டும் தேர்வு எழுதாமல் புதுப்பிக்கலாம். ஆதார் இணைப்பு மூலம் RTO செல்லத் தேவையில்லை.'
    },
    eligibility: {
      en: [
        'Holder of an expired or expiring valid Indian Driving Licence',
        'For applicants aged 40+ or transport vehicle licences, Form 1A Medical Certificate signed by registered MBBS doctor is mandatory',
        'No active suspension or court disqualification on the DL'
      ],
      hi: [
        'वैध भारतीय ड्राइविंग लाइसेंस धारक',
        '40 वर्ष से अधिक आयु वालों के लिए पंजीकृत डॉक्टर द्वारा हस्ताक्षरित फॉर्म 1A मेडिकल सर्टिफिकेट अनिवार्य',
        'लाइसेंस पर कोई कोर्ट निलंबन नहीं होना चाहिए'
      ],
      bn: [
        'মেয়াদোত্তীর্ণ বা মেয়াদ শেষ হতে চলা বৈধ লাইসেন্সধারী হতে হবে',
        '৪০ বছরের বেশি বয়সীদের জন্য ডাক্তার কর্তৃক প্রত্যায়িত ফর্ম ১এ মেডিকেল সার্টিফিকেট প্রয়োজন',
        'লাইসেন্সে কোনো আইনি নিষেধাজ্ঞা থাকা চলবে না'
      ],
      ta: [
        'காலாவதியான அல்லது காலாவதியாகவுள்ள இந்திய ஓட்டுநர் உரிமம் வைத்திருப்பவர்',
        '40 வயதுக்கு மேற்பட்டவர்கள் படிவம் 1A மருத்துவச் சான்றிதழ் சமர்ப்பிக்க வேண்டும்',
        'உரிமத்தின் மீது நீதிமன்றத் தடை ஏதும் இருக்கக்கூடாது'
]
    },
    documents: {
      en: [
        { id: 'dl_orig', name: 'Existing Original Driving Licence details / copy', required: true },
        { id: 'dl_med', name: 'Form 1A Medical Fitness Certificate (Mandatory if age >= 40)', required: false, note: 'From MBBS Doctor' },
        { id: 'dl_addr', name: 'Address Proof (Aadhaar / Passport / Utility Bill)', required: true }
      ],
      hi: [
        { id: 'dl_orig', name: 'मौजूदा ड्राइविंग लाइसेंस की प्रति', required: true },
        { id: 'dl_med', name: 'फॉर्म 1A मेडिकल फिटनेस प्रमाण पत्र (40 वर्ष से अधिक आयु पर अनिवार्य)', required: false },
        { id: 'dl_addr', name: 'वर्तमान निवास प्रमाण (आधार / पासपोर्ट)', required: true }
      ],
      bn: [
        { id: 'dl_orig', name: 'বর্তমান মূল ড্রাইভিং লাইসেন্সের কপি', required: true },
        { id: 'dl_med', name: 'ফর্ম ১এ মেডিকেল সার্টিফিকেট (৪০ বছরের ঊর্ধ্বে বাধ্যতামূলক)', required: false },
        { id: 'dl_addr', name: 'ঠিকানার প্রমাণপত্র (আধার / বিদ্যুৎ বিল)', required: true }
      ],
      ta: [
        {
                'id': 'dl_orig',
                'name': 'தற்போதுள்ள ஓட்டுநர் உரிமத்தின் நகல்',
                'required': true
        },
        {
                'id': 'dl_med',
                'name': 'படிவம் 1A மருத்துவத் தகுதிச் சான்றிதழ் (40 வயதுக்கு மேல் கட்டாயம்)',
                'required': false,
                'note': 'MBBS மருத்துவரிடம் பெறப்பட்டது'
        },
        {
                'id': 'dl_addr',
                'name': 'முகவரிச் சான்று (ஆதார் / பாஸ்போர்ட் / மின்சாரக் கட்டணம்)',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Select State on Sarathi Portal', description: 'Visit sarathi.parivahan.gov.in and choose your State of residence.', duration: '1 Min', actionType: 'online' },
        { stepNumber: 2, title: 'Choose "Apply for DL Services"', description: 'Enter your DL number and Date of Birth. Select "Renewal of DL".', duration: '3 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Aadhaar Authentication & Uploads', description: 'Authenticate via Aadhaar for faceless processing and upload Form 1A if required.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Pay Fee Online', description: 'Pay ₹400 standard renewal & smart card fee via Bharatkosh / Netbanking.', duration: 'Instant', actionType: 'online' },
        { stepNumber: 5, title: 'RTO Approval & Smart Card Dispatch', description: 'RTO officer approves online application. New Smart Card DL is posted to your address.', duration: '7-10 Days', actionType: 'delivery' }
      ],
      hi: [
        { stepNumber: 1, title: 'सारथी पोर्टल पर अपना राज्य चुनें', description: 'sarathi.parivahan.gov.in पर जाएं और अपना राज्य चुनें।', duration: '1 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'डीएल सेवाएं चुनें', description: 'अपना डीएल नंबर और जन्म तिथि डालें, फिर "Renewal of DL" चुनें।', duration: '3 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'आधार प्रमाणीकरण', description: 'फेसलेस सेवा के लिए आधार ओटीपी सत्यापित करें और आवश्यक दस्तावेज अपलोड करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'ऑनलाइन शुल्क का भुगतान करें', description: '₹400 का नवीनीकरण शुल्क ऑनलाइन जमा करें।', duration: 'त्वरित', actionType: 'online' },
        { stepNumber: 5, title: 'स्मार्ट कार्ड डाक द्वारा प्राप्ति', description: 'आरटीओ द्वारा अनुमोदन के बाद नया स्मार्ट कार्ड डीएल आपके पते पर भेज दिया जाता है।', duration: '7-10 दिन', actionType: 'delivery' }
      ],
      bn: [
        { stepNumber: 1, title: 'সারথী পোর্টালে রাজ্য নির্বাচন', description: 'sarathi.parivahan.gov.in-এ যান এবং আপনার রাজ্য বেছে নিন।', duration: '১ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'ডিএল সার্ভিসেস নির্বাচন', description: 'লাইসেন্স নম্বর এবং জন্মতারিখ দিয়ে "Renewal" অপশনে ক্লিক করুন।', duration: '৩ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'আধার ওটিপি ও আপলোড', description: 'আধার ওটিপি দিয়ে ফেসলেস ভেরিফিকেশন করুন এবং মেডিকেল সার্টিফিকেট আপলোড করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'অনলাইন ফি পেমেন্ট', description: 'স্মার্ট কার্ড ও রিনিউয়াল ফি ₹৪০০ জমা দিন।', duration: 'তাৎক্ষণিক', actionType: 'online' },
        { stepNumber: 5, title: 'অনুমোদন ও স্মার্ট কার্ড প্রাপ্তি', description: 'আরটিও অনুমোদনের পর স্পিড পোস্টে নতুন স্মার্ট কার্ড বাড়িতে পৌঁছে যাবে।', duration: '৭-১০ দিন', actionType: 'delivery' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'சாரதி போர்ட்டலில் மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
                'description': 'sarathi.parivahan.gov.in க்குச் சென்று உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்.',
                'duration': '1 நிமிடம்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'DL சேவைகளைத் தேர்ந்தெடுக்கவும்',
                'description': 'உரிம எண் மற்றும் பிறந்த தேதியை உள்ளிட்டு \'Renewal of DL\' என்பதைத் தேர்ந்தெடுக்கவும்.',
                'duration': '3 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'ஆதார் சரிபார்ப்பு',
                'description': 'ஆதார் OTP மூலம் சரிபார்த்து தேவையான ஆவணங்களைப் பதிவேற்றவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'ஆன்லைன் கட்டணம் செலுத்தவும்',
                'description': '₹400 புதுப்பித்தல் கட்டணத்தை ஆன்லைனில் செலுத்தவும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        },
        {
                'stepNumber': 5,
                'title': 'RTO அனுமதி & ஸ்மார்ட் கார்டு விநியோகம்',
                'description': 'RTO அதிகாரியின் அனுமதிக்குப் பின் புதிய ஸ்மார்ட் கார்டு தபாலில் வரும்.',
                'duration': '7-10 நாட்கள்',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['DL Number Input', 'Aadhaar Faceless Auth', 'Fee Payment', 'RTO Scrutiny', 'Smart Card Dispatched'],
      hi: ['डीएल नंबर दर्ज', 'आधार प्रमाणीकरण', 'शुल्क भुगतान', 'आरटीओ जांच', 'स्मार्ट कार्ड वितरण'],
      bn: ['ডিএল তথ্য প্রদান', 'আধার ভেরিফিকেশন', 'ফি পেমেন্ট', 'আরটিও অনুমোদন', 'স্মার্ট কার্ড ডেলিভারি'],
      ta: [
        'DL எண் உள்ளீடு',
        'ஆதார் சரிபார்ப்பு',
        'கட்டணம் செலுத்துதல்',
        'RTO ஆய்வு',
        'ஸ்மார்ட் கார்டு விநியோகம்'
]
    },
    faq: {
      en: [
        { question: 'What happens if my DL expired more than 1 year ago?', answer: 'If expired between 1 to 5 years, you can renew with a late fee of ₹1,000/year and may need to undergo a driving re-test.' }
      ],
      hi: [
        { question: 'यदि लाइसेंस 1 वर्ष से अधिक समय से समाप्त है तो क्या होगा?', answer: '1 से 5 वर्ष की देरी पर प्रति वर्ष ₹1,000 विलंब शुल्क लगता है और ड्राइविंग टेस्ट देना पड़ सकता है।' }
      ],
      bn: [
        { question: 'মেয়াদ ১ বছরের বেশি পার হয়ে গেলে কী নিয়ম?', answer: '১ থেকে ৫ বছর দেরি হলে প্রতি বছরের জন্য ₹১,০০০ লেট ফি দিতে হবে এবং ড্রাইভিং টেস্ট লাগতে পারে।' }
      ],
      ta: [
        {
                'question': 'உரிமம் முடிந்து 1 வருடத்திற்கு மேல் ஆகிவிட்டால் என்ன செய்வது?',
                'answer': '1 முதல் 5 வருடங்கள் வரை தாமதமானால் ஆண்டுக்கு ₹1,000 அபராதக் கட்டணத்துடன் ஓட்டுநர் தேர்வை மீண்டும் எழுத வேண்டும்.'
        }
]
    },
    helpline: '0120-2459167 (Parivahan Technical Support)'
  },

  // 6. BIRTH CERTIFICATE REGISTRATION & DOWNLOAD
  {
    id: 'birth-certificate',
    iconName: 'Baby',
    category: 'certificates',
    department: {
      en: 'Civil Registration System (CRS) / Registrar of Births & Deaths',
      hi: 'नागरिक पंजीकरण प्रणाली (CRS) / जन्म एवं मृत्यु रजिस्ट्रार',
      bn: 'নাগরিক নিবন্ধন ব্যবস্থা (CRS) / পৌরসভা ও স্বাস্থ্য বিভাগ',
      ta: 'சிவில் பதிவு முறைமை (CRS) / பிறப்பு மற்றும் இறப்பு பதிவாளர்'
    },
    officialPortal: 'crsorgi.gov.in',
    officialUrl: 'https://crsorgi.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: '3–7 Working Days (Digital QR Certificate)',
      hi: '3–7 कार्य दिवस (डिजिटल क्यूआर प्रमाण पत्र)',
      bn: '৩–৭ কার্যদিবস (ডিজিটাল কিউআর সনদ)',
      ta: '3–7 வேலை நாட்கள் (டிஜிட்டல் QR சான்றிதழ்)'
    },
    fee: {
      en: 'Free within 21 Days of birth | Late fee ₹2 to ₹10 thereafter',
      hi: 'जन्म के 21 दिनों के भीतर निःशुल्क | उसके बाद नाममात्र विलंब शुल्क',
      bn: 'জন্মের ২১ দিনের মধ্যে বিনামূল্যে | পরবর্তীতে নামমাত্র ফি',
      ta: 'பிறந்த 21 நாட்களுக்குள் இலவசம் | பின்னர் தாமதக் கட்டணம்'
    },
    keywords: [
      'birth certificate', 'apply birth certificate', 'download birth cert', 'crsorgi', 'municipal birth certificate', 'panchayat birth certificate', 'new born registration',
      'जन्म प्रमाण पत्र', 'जन्म प्रमाण पत्र ऑनलाइन', 'बच्चे का जन्म प्रमाण पत्र',
      'জন্ম সনদ', 'জন্ম সার্টিফিকেট', 'জন্মের প্রমাণপত্র',
      'பிறப்பு சான்றிதழ்', 'பிறப்பு சான்றிதழ் விண்ணப்பம்', 'CRS'
    ],
    title: {
      en: 'Birth Certificate Registration & Digital Download',
      hi: 'जन्म प्रमाण पत्र पंजीकरण एवं डिजिटल डाउनलोड',
      bn: 'জন্ম সার্টিফিকেট নিবন্ধন ও ডিজিটাল ডাউনলোড',
      ta: 'பிறப்புச் சான்றிதழ் பதிவு & டிஜிட்டல் பதிவிறக்கம்'
    },
    badge: {
      en: 'Universal Primary ID Proof',
      hi: 'प्राथमिक पहचान प्रमाण',
      bn: 'প্রাথমিক পরিচয় প্রমাণপত্র',
      ta: 'முதன்மை அடையாளச் சான்று'
    },
    shortSummary: {
      en: 'Under the Registration of Births and Deaths Act, every birth in India must be registered within 21 days with the local Municipal Corporation or Gram Panchayat. Digitally signed, QR-coded birth certificates can be downloaded online.',
      hi: 'भारत में जन्म के 21 दिनों के भीतर स्थानीय नगर निगम या ग्राम पंचायत में पंजीकरण कराना अनिवार्य है। अब डिजिटल हस्ताक्षरित और क्यूआर कोड युक्त जन्म प्रमाण पत्र ऑनलाइन डाउनलोड किया जा सकता है।',
      bn: 'জন্মের ২১ দিনের মধ্যে পৌরসভা বা গ্রাম পঞ্চায়েতে শিশুর জন্ম নিবন্ধন করা আবশ্যক। বর্তমানে কিউআর কোড যুক্ত ডিজিটাল জন্ম সার্টিফিকেট অনলাইনে ডাউনলোড করা যায়।',
      ta: 'இந்தியாவில் பிறக்கும் ஒவ்வொரு குழந்தையும் 21 நாட்களுக்குள் உள்ளாட்சி நகராட்சி அல்லது கிராம பஞ்சாயத்தில் பதிவு செய்யப்பட வேண்டும். டிஜிட்டல் கையொப்பமிட்ட QR சான்றிதழை ஆன்லைனில் பதிவிறக்கலாம்.'
    },
    eligibility: {
      en: [
        'Birth must have occurred within the territorial jurisdiction of India',
        'Parents must provide institutional hospital discharge summary or medical proof',
        'Delayed registrations (>1 year) require an order from Executive Magistrate / Sub-Divisional Magistrate (SDM)'
      ],
      hi: [
        'जन्म भारत के अधिकार क्षेत्र में हुआ होना चाहिए',
        'अस्पताल का डिस्चार्ज स्लिप या संस्थागत जन्म रिपोर्ट',
        '1 वर्ष से अधिक की देरी पर एसडीएम का अनुमति आदेश आवश्यक'
      ],
      bn: [
        'জন্ম ভারতের ভৌগোলিক সীমানায় হতে হবে',
        'হাসপাতালের ডিসচার্জ স্লিপ বা স্বাস্থ্য কর্মীর রিপোর্ট',
        '১ বছরের বেশি দেরি হলে এসডিও/ম্যাজিস্ট্রেটের অনুমতি প্রয়োজন'
      ],
      ta: [
        'பிறப்பு இந்தியாவின் எல்லைக்குள் நடந்திருக்க வேண்டும்',
        'மருத்துவமனை டிஸ்சார்ஜ் சீட்டு அல்லது மருத்துவச் சான்று வழங்க வேண்டும்',
        '1 வருடத்திற்கு மேற்பட்ட தாமதத்திற்கு SDM உத்தரவு தேவை'
]
    },
    documents: {
      en: [
        { id: 'b_hosp', name: 'Hospital / Nursing Home Discharge Summary & Form 1', required: true, note: 'Issued by hospital at birth' },
        { id: 'b_parents', name: 'Aadhaar / ID Proof of Both Parents', required: true },
        { id: 'b_marriage', name: 'Marriage Certificate / Joint Declaration of Parents', required: false }
      ],
      hi: [
        { id: 'b_hosp', name: 'अस्पताल डिस्चार्ज स्लिप और फॉर्म 1', required: true },
        { id: 'b_parents', name: 'माता-पिता दोनों का आधार कार्ड', required: true },
        { id: 'b_marriage', name: 'माता-पिता का विवाह प्रमाण पत्र (यदि उपलब्ध हो)', required: false }
      ],
      bn: [
        { id: 'b_hosp', name: 'হাসপাতালের ডিসচার্জ স্লিপ ও ফর্ম ১', required: true },
        { id: 'b_parents', name: 'পিতা ও মাতা উভয়ের আধার কার্ডের কপি', required: true },
        { id: 'b_marriage', name: 'বিবাহের প্রমাণপত্র বা যৌথ ঘোষণা', required: false }
      ],
      ta: [
        {
                'id': 'b_hosp',
                'name': 'மருத்துவமனை டிஸ்சார்ஜ் சீட்டு & படிவம் 1',
                'required': true,
                'note': 'மருத்துவமனையால் வழங்கப்படும்'
        },
        {
                'id': 'b_parents',
                'name': 'பெற்றோர் இருவரின் ஆதார் கார்டு நகல்',
                'required': true
        },
        {
                'id': 'b_marriage',
                'name': 'பெற்றோரின் திருமணச் சான்றிதழ் (இருப்பின்)',
                'required': false
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Institutional Report by Hospital', description: 'For institutional deliveries, hospitals report births directly to the Registrar within 21 days.', duration: 'Auto', actionType: 'online' },
        { stepNumber: 2, title: 'Register on State / CRS Portal', description: 'Visit crsorgi.gov.in or your State e-District portal and submit child naming details.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Upload Proofs & Verify Parents', description: 'Upload parent Aadhaar cards and hospital discharge slip.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Registrar Approval', description: 'Municipal health officer or Panchayat secretary verifies hospital records.', duration: '2-4 Days', actionType: 'verification' },
        { stepNumber: 5, title: 'Download QR-Verified Certificate', description: 'Download digitally signed PDF certificate containing official Government hologram and QR code.', duration: 'Instant', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'अस्पताल द्वारा सूचना', description: 'अस्पताल द्वारा 21 दिनों के भीतर जन्म की सूचना रजिस्ट्रार को भेजी जाती है।', duration: 'स्वतः', actionType: 'online' },
        { stepNumber: 2, title: 'पोर्टल पर नाम दर्ज करें', description: 'crsorgi.gov.in या राज्य के ई-डिस्ट्रिक्ट पोर्टल पर बच्चे का नाम दर्ज करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'दस्तावेज अपलोड करें', description: 'माता-पिता के आधार कार्ड और अस्पताल की पर्ची अपलोड करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'रजिस्ट्रार द्वारा सत्यापन', description: 'नगर निगम या पंचायत अधिकारी द्वारा रिकॉर्ड की पुष्टि की जाती है।', duration: '2-4 दिन', actionType: 'verification' },
        { stepNumber: 5, title: 'डिजिटल प्रमाण पत्र डाउनलोड', description: 'क्यूआर कोड और डिजिटल हस्ताक्षर वाला प्रमाण पत्र तुरंत डाउनलोड करें।', duration: 'त्वरित', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'হাসপাতাল কর্তৃক রিপোর্ট', description: 'হাসপাতালে জন্ম হলে সরাসরি জন্ম রেজিস্টারে তথ্য পাঠানো হয়।', duration: 'স্বয়ংক্রিয়', actionType: 'online' },
        { stepNumber: 2, title: 'পোর্টালে আবেদন', description: 'crsorgi.gov.in বা রাজ্য ই-ডিস্ট্রিক্ট পোর্টালে শিশুর নাম নথিভুক্ত করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'নথিপত্র আপলোড', description: 'পিতা-মাতার আধার এবং হাসপাতালের কাগজ আপলোড করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'রেজিস্ট্রার কর্তৃক অনুমোদন', description: 'স্বাস্থ্য আধিকারিক বা পঞ্চায়েত সচিব রেকর্ড যাচাই করবেন।', duration: '২-৪ দিন', actionType: 'verification' },
        { stepNumber: 5, title: 'ডিজিটাল সার্টিফিকেট ডাউনলোড', description: 'কিউআর কোডযুক্ত ডিজিটাল সার্টিফিকেট ডাউনলোড করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'மருத்துவமனை பதிவு',
                'description': 'மருத்துவமனையில் நடக்கும் பிறப்புகள் 21 நாட்களுக்குள் பதிவாளருக்குத் தெரிவிக்கப்படும்.',
                'duration': 'தானியங்கி',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'போர்ட்டலில் குழந்தையின் பெயரைப் பதிவு செய்யவும்',
                'description': 'crsorgi.gov.in அல்லது மாநில போர்ட்டலில் குழந்தையின் பெயரை உள்ளிடவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'ஆவணங்களைப் பதிவேற்றவும்',
                'description': 'பெற்றோரின் ஆதார் மற்றும் மருத்துவமனை சீட்டைப் பதிவேற்றவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'பதிவாளர் சரிபார்ப்பு',
                'description': 'நகராட்சி சுகாதார அதிகாரி அல்லது பஞ்சாயத்து செயலாளர் ஆவணங்களைச் சரிபார்ப்பார்.',
                'duration': '2-4 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'QR சான்றிதழ் பதிவிறக்கம்',
                'description': 'டிஜிட்டல் கையொப்பமிடப்பட்ட QR சான்றிதழை ஆன்லைனில் பதிவிறக்கவும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        }
]
    },
    timeline: {
      en: ['Hospital Birth Entry', 'Child Name Addition', 'Parent Aadhaar Verification', 'Registrar Approval', 'QR PDF Download'],
      hi: ['अस्पताल एंट्री', 'बच्चे का नामकरण', 'आधार सत्यापन', 'रजिस्ट्रार स्वीकृति', 'क्यूआर पीडीएफ डाउनलोड'],
      bn: ['হাসপাতাল এন্ট্রি', 'শিশুর নাম সংযোজন', 'আধার যাচাইকরণ', 'অনুমোদন', 'ডিজিটাল সার্টিফিকেট'],
      ta: [
        'மருத்துவமனை பதிவு',
        'குழந்தை பெயர் சேர்த்தல்',
        'ஆதார் சரிபார்ப்பு',
        'பதிவாளர் அனுமதி',
        'QR PDF பதிவிறக்கம்'
]
    },
    faq: {
      en: [
        { question: 'Can I add child name later after certificate is issued?', answer: 'Yes, child name can be added online or at the municipal office within 1 year without fee, and up to 15 years with a nominal fee.' }
      ],
      hi: [
        { question: 'क्या जन्म प्रमाण पत्र बनने के बाद बच्चे का नाम जोड़ा जा सकता है?', answer: 'हाँ, 1 वर्ष के भीतर बिना किसी शुल्क के और 15 वर्ष तक नाम जोड़ा जा सकता है।' }
      ],
      bn: [
        { question: 'সনদপত্র তৈরির পর কি নাম যুক্ত করা যাবে?', answer: 'হ্যাঁ, ১ বছরের মধ্যে বিনামূল্যে এবং ১৫ বছর পর্যন্ত নাম সংযোজন করা যায়।' }
      ],
      ta: [
        {
                'question': 'சான்றிதழ் வழங்கப்பட்ட பிறகு குழந்தையின் பெயரைச் சேர்க்க முடியுமா?',
                'answer': 'ஆம், 1 வருடத்திற்குள் இலவசமாகவும், 15 வருடங்கள் வரை குறைந்தபட்சக் கட்டணத்துடனும் பெயரைச் சேர்க்கலாம்.'
        }
]
    },
    helpline: '1800-180-5678 (Registrar General of India Helpline)'
  },

  // 7. INCOME CERTIFICATE (State e-District)
  {
    id: 'income-certificate',
    iconName: 'Coins',
    category: 'certificates',
    department: {
      en: 'State Revenue Department / e-District Portal',
      hi: 'राज्य राजस्व विभाग / ई-डिस्ट्रिक्ट पोर्टल',
      bn: 'রাজ্য রাজস্ব বিভাগ / ই-ডিস্ট্রিক্ট পোর্টাল',
      ta: 'மாநில வருவாய்த் துறை / e-District போர்ட்டல்'
    },
    officialPortal: 'edistrict.gov.in',
    officialUrl: 'https://services.india.gov.in/service/detail/apply-online-for-income-certificate',
    lastVerified: 'August 2026',
    processingTime: {
      en: '7–15 Working Days (Valid for 1–3 Financial Years depending on State)',
      hi: '7–15 कार्य दिवस (राज्य अनुसार 1-3 वर्षों के लिए वैध)',
      bn: '৭–১৫ কার্যদিবস (রাজ্যভেদে ১–৩ বছর মেয়াদ)',
      ta: '7–15 வேலை நாட்கள் (1–3 நிதியாண்டுகளுக்குச் செல்லுபடியாகும்)'
    },
    fee: {
      en: '₹10 to ₹50 (Varies by State e-District portal)',
      hi: '₹10 से ₹50 (राज्य ई-डिस्ट्रिक्ट पोर्टल अनुसार)',
      bn: '₹১০ থেকে ₹৫০',
      ta: '₹10 முதல் ₹50 வரை (மாநிலத்தைப் பொறுத்து)'
    },
    keywords: [
      'income', 'income certificate', 'apply income cert', 'edistrict income', 'tahsildar income certificate', 'patwari report', 'income proof for scholarship',
      'आय प्रमाण पत्र', 'आय प्रमाण पत्र ऑनलाइन', 'तहसीलदार आय प्रमाण',
      'ইনকাম সার্টিফিকেট', 'আয়ের শংসাপত্র', 'ইনকাম সার্টিফিকেট আবেদন',
      'வருமான சான்றிதழ்', 'வருமான சான்றிதழ் விண்ணப்பம்', 'e-District'
    ],
    title: {
      en: 'Income Certificate (Revenue Department / e-District)',
      hi: 'आय प्रमाण पत्र (राजस्व विभाग / ई-डिस्ट्रिक्ट)',
      bn: 'আয়ের শংসাপত্র (রাজস্ব বিভাগ / ই-ডিস্ট্রিক্ট পোর্টাল)',
      ta: 'வருமானச் சான்றிதழ் (வருவாய்த் துறை / e-District)'
    },
    badge: {
      en: 'Essential for Scholarships & Subsidies',
      hi: 'छात्रवृत्ति एवं योजनाओं हेतु अनिवार्य',
      bn: 'স্কলারশিপ ও সরকারি ভাতার জন্য আবশ্যক',
      ta: 'உதவித்தொகை & மானியங்களுக்கு அவசியம்'
    },
    shortSummary: {
      en: 'An Income Certificate certifies the annual gross income of an individual or family from all sources (agriculture, salary, business). It is mandatory to claim government scholarships, fee waivers, EWS quota reservations, and welfare subsidies.',
      hi: 'आय प्रमाण पत्र परिवार की सभी स्रोतों से वार्षिक कुल आय को प्रमाणित करता है। यह सरकारी छात्रवृत्ति, ईडब्ल्यूएस आरक्षण, राशन कार्ड और सरकारी योजनाओं के लाभ के लिए आवश्यक है।',
      bn: 'ইনকাম সার্টিফিকেট কোনো পরিবারের সমস্ত উৎস থেকে বার্ষিক মোট আয়ের সরকারি প্রত্যয়ন। সরকারি বৃত্তি, ইডব্লিউএস কোটা এবং সামাজিক কল্যাণমূলক ভাতা পেতে এটি আবশ্যক।',
      ta: 'வருமானச் சான்றிதழ் என்பது ஒரு குடும்பத்தின் அனைத்து ஆதாரங்களிலிருந்தும் வரும் ஆண்டு மொத்த வருமானத்தைச் சான்றளிப்பதாகும். அரசு உதவித்தொகை, EWS இடஒதுக்கீடு மற்றும் நலத்திட்ட மானியங்களுக்கு இது கட்டாயமாகும்.'
    },
    eligibility: {
      en: [
        'Resident citizen of the concerned State/UT',
        'Must declare transparent annual income of all earning family members',
        'Subject to local field inquiry by Village Administrative Officer (VAO) / Patwari / Revenue Inspector'
      ],
      hi: [
        'संबंधित राज्य/केंद्र शासित प्रदेश का निवासी होना चाहिए',
        'परिवार के सभी कमाने वाले सदस्यों की वास्तविक वार्षिक आय घोषित करनी होगी',
        'पटवारी / लेखपाल / राजस्व निरीक्षक द्वारा जांच की जाएगी'
      ],
      bn: [
        'সংশ্লিষ্ট রাজ্যের স্থায়ী বাসিন্দা হতে হবে',
        'পরিবারের সকল উপার্জনকারী সদস্যের প্রকৃত আয়ের বিবরণ দিতে হবে',
        'রাজস্ব আধিকারিক বা পঞ্চায়েত প্রধান কর্তৃক তদন্তের অধীন'
      ],
      ta: [
        'சம்பந்தப்பட்ட மாநிலத்தின் நிலையான வசிப்பிடவாசியாக இருக்க வேண்டும்',
        'குடும்பத்தின் அனைத்து உறுப்பினர்களின் உண்மையான வருமானத்தை அறிவிக்க வேண்டும்',
        'கிராம நிர்வாக அலுவலர் (VAO) / வருவாய் ஆய்வாளரின் கள ஆய்வுக்கு உட்பட்டது'
]
    },
    documents: {
      en: [
        { id: 'inc_id', name: 'Aadhaar Card / Ration Card of Applicant', required: true },
        { id: 'inc_proof', name: 'Income Proof (Salary Slip / Form 16 / ITR / Patwari Land Income Report)', required: true },
        { id: 'inc_affidavit', name: 'Self-Declaration Affidavit / Self-Attested Income Undertaking', required: true },
        { id: 'inc_photo', name: 'Passport Size Photo of Head of Family', required: true }
      ],
      hi: [
        { id: 'inc_id', name: 'आवेदक का आधार कार्ड या राशन कार्ड', required: true },
        { id: 'inc_proof', name: 'आय का प्रमाण (वेतन पर्ची / फॉर्म 16 / आईटीआर / पटवारी रिपोर्ट)', required: true },
        { id: 'inc_affidavit', name: 'स्व-घोषणा पत्र / शपथ पत्र', required: true },
        { id: 'inc_photo', name: 'पासपोर्ट साइज फोटो', required: true }
      ],
      bn: [
        { id: 'inc_id', name: 'আবেদনকারীর আধার কার্ড বা রেশন কার্ড', required: true },
        { id: 'inc_proof', name: 'আয়ের প্রমাণ (স্যালারি স্লিপ / আইটিআর / পঞ্চায়েত প্রধানের প্রত্যয়নপত্র)', required: true },
        { id: 'inc_affidavit', name: 'স্ব-ঘোষিত আয় ঘোষণাপত্র', required: true },
        { id: 'inc_photo', name: 'পাসপোর্ট সাইজ ছবি', required: true }
      ],
      ta: [
        {
                'id': 'inc_id',
                'name': 'விண்ணப்பதாரரின் ஆதார் கார்டு / ரேஷன் கார்டு',
                'required': true
        },
        {
                'id': 'inc_proof',
                'name': 'வருமானச் சான்று (சம்பளச் சீட்டு / படிவம் 16 / ITR / VAO சான்றிதழ்)',
                'required': true
        },
        {
                'id': 'inc_affidavit',
                'name': 'சுய அறிவிப்புப் படிவம்',
                'required': true
        },
        {
                'id': 'inc_photo',
                'name': 'குடும்பத் தலைவரின் பாஸ்போர்ட் அளவு புகைப்படம்',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Log in to State e-District Portal', description: 'Log in to your State e-District portal or visit nearest Common Service Center (CSC).', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Fill Family Income Details', description: 'Enter details of all family members, occupations, agricultural land, and annual income.', duration: '10 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Upload Documents & Affidavit', description: 'Upload Aadhaar, Salary slip / ITR / Patwari report and self-declaration affidavit.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Revenue Inspector Verification', description: 'Local Patwari / Revenue Inspector conducts field scrutiny of submitted income.', duration: '3-7 Days', actionType: 'verification' },
        { stepNumber: 5, title: 'Tahsildar / SDO Approval & Download', description: 'Tahsildar issues digitally signed Income Certificate with verification barcode.', duration: 'Instant', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'राज्य ई-डिस्ट्रिक्ट पोर्टल पर लॉगिन करें', description: 'अपने राज्य के ई-डिस्ट्रिक्ट पोर्टल पर जाएं या नजदीकी सीएससी केंद्र जाएं।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'पारिवारिक आय विवरण भरें', description: 'परिवार के सदस्यों का व्यवसाय, कृषि भूमि और वार्षिक आय दर्ज करें।', duration: '10 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'दस्तावेज और शपथ पत्र अपलोड करें', description: 'आधार कार्ड, वेतन पर्ची या पटवारी रिपोर्ट और स्व-घोषणा पत्र अपलोड करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'राजस्व अधिकारी द्वारा जांच', description: 'क्षेत्रीय लेखपाल/पटवारी द्वारा आय की जांच की जाती है।', duration: '3-7 दिन', actionType: 'verification' },
        { stepNumber: 5, title: 'तहसीलदार की स्वीकृति एवं डाउनलोड', description: 'तहसीलदार द्वारा डिजिटल हस्ताक्षरित आय प्रमाण पत्र डाउनलोड करें।', duration: 'त्वरित', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'ই-ডিস্ট্রিক্ট পোর্টালে প্রবেশ', description: 'রাজ্য ই-ডিস্ট্রিক্ট পোর্টালে লগইন করুন বা নিকটস্থ সিএসসি সেন্টারে যান।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'পারিবারিক আয়ের তথ্য দিন', description: 'পরিবারের সদস্য সংখ্যা, পেশা এবং বার্ষিক মোট আয়ের পরিমাণ লিখুন।', duration: '১০ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'নথিপত্র ও ঘোষণাপত্র আপলোড', description: 'আধার, স্যালারি স্লিপ বা প্রধানের রিপোর্ট এবং সেলফ ডিক্লারেশন আপলোড করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'রাজস্ব আধিকারিক দ্বারা তদন্ত', description: 'স্থানীয় রাজস্ব পরিদর্শক আয়ের তথ্যের সত্যতা যাচাই করবেন।', duration: '৩-৭ দিন', actionType: 'verification' },
        { stepNumber: 5, title: 'বিডিও/এসডিও অনুমোদন ও ডাউনলোড', description: 'অনুমোদনের পর বারকোডযুক্ত ডিজিটাল ইনকাম সার্টিফিকেট ডাউনলোড করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'மாநில e-District போர்ட்டலில் உள்நுழையவும்',
                'description': 'உங்கள் மாநில e-District அல்லது சேவை மைய போர்ட்டலில் கணக்கை உருவாக்கவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'வருமான விவரங்களை பூர்த்தி செய்யவும்',
                'description': 'வேளாண்மை, சம்பளம், வணிக வருமான விவரங்களை உள்ளிடவும்.',
                'duration': '8 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'முகவரி & வருமானச் சான்றுகளைப் பதிவேற்றவும்',
                'description': 'ஆதார், ரேஷன் கார்டு மற்றும் வருமானச் சான்றுகளைப் பதிவேற்றவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'கிராம நிர்வாக அலுவலர் (VAO) சரிபார்ப்பு',
                'description': 'VAO மற்றும் வருவாய் ஆய்வாளர் நேரடி ஆய்வு செய்து அறிக்கை சமர்ப்பிப்பார்கள்.',
                'duration': '3-7 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'தாசில்தார் ஒப்புதல் & பதிவிறக்கம்',
                'description': 'தாசில்தார் ஒப்புதலுக்குப் பின் டிஜிட்டல் சான்றிதழைப் பதிவிறக்கலாம்.',
                'duration': '2-3 நாட்கள்',
                'actionType': 'online'
        }
]
    },
    timeline: {
      en: ['e-District Form', 'Income Docs Upload', 'Patwari / VAO Scrutiny', 'Tahsildar Approval', 'Digitally Signed Cert'],
      hi: ['ऑनलाइन फॉर्म', 'आय दस्तावेज अपलोड', 'पटवारी जांच', 'तहसीलदार स्वीकृति', 'डिजिटल प्रमाण पत्र'],
      bn: ['অনলাইন আবেদন', 'নথি আপলোড', 'ক্ষেত্র তদন্ত', 'অনুমোদন', 'ডিজিটাল সার্টিফিকেট'],
      ta: [
        'ஆன்லைன் விண்ணப்பம்',
        'ஆவணங்கள் பதிவேற்றம்',
        'VAO ஆய்வு',
        'தாசில்தார் அனுமதி',
        'டிஜிட்டல் சான்றிதழ் பதிவிறக்கம்'
]
    },
    faq: {
      en: [
        { question: 'How long is an Income Certificate valid?', answer: 'It is typically valid for 1 Financial Year (April 1 to March 31) for central scholarships, and up to 3 years in certain States.' }
      ],
      hi: [
        { question: 'आय प्रमाण पत्र कितने समय तक वैध रहता है?', answer: 'आमतौर पर यह एक वित्तीय वर्ष (1 अप्रैल से 31 मार्च) के लिए मान्य होता है।' }
      ],
      bn: [
        { question: 'ইনকাম সার্টিফিকেটের মেয়াদ কতদিন থাকে?', answer: 'সাধারণত ১টি আর্থিক বছরের জন্য বৈধ থাকে, কিছু রাজ্যে ৩ বছর পর্যন্ত কার্যকর।' }
      ],
      ta: [
        {
                'question': 'வருமானச் சான்றிதழின் செல்லுபடியாகும் காலம் என்ன?',
                'answer': 'பொதுவாக வழங்கப்பட்ட நிதியாண்டு முழுவதும் (ஏப்ரல் 1 முதல் மார்ச் 31 வரை) செல்லுபடியாகும்.'
        }
]
    },
    helpline: '1800-180-2120 (National e-District Support)'
  },

  // 8. CASTE / COMMUNITY CERTIFICATE (SC/ST/OBC)
  {
    id: 'caste-certificate',
    iconName: 'Award',
    category: 'certificates',
    department: {
      en: 'State Backward Classes Welfare & Revenue Department',
      hi: 'राज्य पिछड़ा वर्ग कल्याण एवं राजस्व विभाग',
      bn: 'অনগ্রসর শ্রেণী কল্যাণ ও রাজস্ব বিভাগ',
      ta: 'மாநில வருவாய்த் துறை (சமூக நலப் பிரிவு)'
    },
    officialPortal: 'services.india.gov.in',
    officialUrl: 'https://services.india.gov.in/service/detail/apply-online-for-caste-certificate',
    lastVerified: 'August 2026',
    processingTime: {
      en: '15–30 Working Days (Lifetime validity for SC/ST; Non-Creamy Layer OBC valid 1 Year)',
      hi: '15–30 कार्य दिवस (SC/ST के लिए आजीवन वैध; OBC नॉन-क्रीमी लेयर 1 वर्ष)',
      bn: '১৫–৩০ কার্যদিবস (এসসি/এসটি আজীবন; ওবিসি নন-ক্রিমিলিয়ার ১ বছর)',
      ta: '15–30 வேலை நாட்கள் (ஆயுட்காலம் முழுவதும் செல்லுபடியாகும்)'
    },
    fee: {
      en: '₹15 to ₹50 depending on State',
      hi: '₹15 से ₹50 (राज्य अनुसार)',
      bn: '₹১৫ থেকে ₹৫০',
      ta: '₹10 முதல் ₹60 வரை'
    },
    keywords: [
      'caste', 'caste certificate', 'obc certificate', 'sc st certificate', 'non creamy layer', 'community certificate', 'apply caste cert',
      'जाति प्रमाण पत्र', 'ओबीसी प्रमाण पत्र', 'एससी एसटी प्रमाण पत्र', 'जाति प्रमाण पत्र ऑनलाइन',
      'কাস্ট সার্টিফিকেট', 'এসসি এসটি ওবিসি সার্টিফিকেট', 'জাতি শংসাপত্র',
      'சாதி சான்றிதழ்', 'OBC சான்றிதழ்', 'SC ST சான்றிதழ்'
    ],
    title: {
      en: 'Caste / Community Certificate (SC / ST / OBC / NCL)',
      hi: 'जाति प्रमाण पत्र (अनुसूचित जाति / जनजाति / अन्य पिछड़ा वर्ग)',
      bn: 'জাতি শংসাপত্র (এসসি / এসটি / ওবিসি / এনসিএল)',
      ta: 'சாதிச் சான்றிதழ் (OBC / SC / ST / EWS)'
    },
    badge: {
      en: 'Affirmative Action & Quota Reservation',
      hi: 'आरक्षण एवं सरकारी योजनाएं',
      bn: 'সংরক্ষণ ও কল্যাণমূলক সুবিধা',
      ta: 'இடஒதுக்கீடு & அரசு வேலை வாய்ப்புகளுக்கு அவசியம்'
    },
    shortSummary: {
      en: 'A Caste Certificate is an official document certifying that an individual belongs to a specific Scheduled Caste (SC), Scheduled Tribe (ST), or Other Backward Class (OBC). It is necessary to claim reservations in education, government jobs, and government welfare schemes.',
      hi: 'जाति प्रमाण पत्र यह प्रमाणित करता है कि व्यक्ति अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या अन्य पिछड़ा वर्ग (OBC) से संबंधित है। सरकारी नौकरियों और शैक्षणिक संस्थानों में आरक्षण के लिए यह आवश्यक है।',
      bn: 'কাস্ট সার্টিফিকেট প্রমাণ করে যে একজন নাগরিক তফসিলি জাতি (SC), তফসিলি উপজাতি (ST) বা ওবিসি (OBC) সম্প্রদায়ের অন্তর্ভুক্ত। শিক্ষা এবং সরকারি চাকরিতে সংরক্ষণের জন্য এটি প্রয়োজন।',
      ta: 'சாதிச் சான்றிதழ் என்பது ஒரு குடிமகனின் சமூகப் பிரிவை (OBC, SC, ST) சான்றளிக்கும் அதிகாரப்பூர்வ ஆவணமாகும். கல்விக்கூடச் சேர்க்கை, அரசு வேலைவாய்ப்பு இடஒதுக்கீடு மற்றும் கல்வி உதவித்தொகைகளுக்கு இது அத்தியாவசியமானது.'
    },
    eligibility: {
      en: [
        'Applicant must belong to a notified community listed in the State/Central reservation schedule',
        'Must provide documentary proof of ancestral residence in the State prior to the cut-off year (e.g., 1950 for SC/ST, 1993 for OBC in most states)',
        'For OBC Non-Creamy Layer (NCL), parental gross annual income must be below ₹8 Lakhs'
      ],
      hi: [
        'आवेदक का समुदाय राज्य/केंद्रीय आरक्षण सूची में शामिल होना चाहिए',
        'कट-ऑफ वर्ष से पूर्व राज्य में पैतृक निवास का प्रमाण (जैसे 1950/1993)',
        'ओबीसी नॉन-क्रीमी लेयर हेतु माता-पिता की वार्षिक आय ₹8 लाख से कम होनी चाहिए'
      ],
      bn: [
        'আবেদনকারীকে সরকারি গেজেটভুক্ত সংরক্ষিত সম্প্রদায়ের হতে হবে',
        'নির্দিষ্ট কাট-অফ বছরের পূর্বে বংশানুক্রমিক বসবাসের প্রমাণপত্র থাকতে হবে',
        'ওবিসি নন-ক্রিমি লেয়ারের ক্ষেত্রে পারিবারিক বার্ষিক আয় ₹৮ লক্ষের নিচে হতে হবে'
      ],
      ta: [
        'விண்ணப்பதாரர் அல்லது பெற்றோர் மாநிலத்தால் அங்கீகரிக்கப்பட்ட பட்டியலில் இருக்க வேண்டும்',
        'மாநிலத்தின் நிரந்தர வசிப்பிடவாசியாக இருக்க வேண்டும்',
        'OBC சான்றிதழுக்கு பெற்றோர் வருமானம் கிரீமிலேயர் வரம்பிற்குள் இருக்க வேண்டும்'
]
    },
    documents: {
      en: [
        { id: 'c_aadhaar', name: 'Aadhaar Card of Applicant & Father', required: true },
        { id: 'c_ancestral', name: 'Paternal Blood Relative Caste Certificate / 1950-1993 Land Record', required: true, note: 'Father / Paternal Uncle / Grandfather certificate' },
        { id: 'c_residence', name: 'Permanent Residence / Domicile Certificate', required: true },
        { id: 'c_income', name: 'Income Certificate (Mandatory for OBC Non-Creamy Layer)', required: false }
      ],
      hi: [
        { id: 'c_aadhaar', name: 'आवेदक और पिता का आधार कार्ड', required: true },
        { id: 'c_ancestral', name: 'पिता/दादा/चाचा का पुराना जाति प्रमाण पत्र या पुराना भूमि रिकॉर्ड', required: true },
        { id: 'c_residence', name: 'मूल निवास प्रमाण पत्र (Domicile)', required: true },
        { id: 'c_income', name: 'आय प्रमाण पत्र (ओबीसी नॉन-क्रीमी लेयर के लिए आवश्यक)', required: false }
      ],
      bn: [
        { id: 'c_aadhaar', name: 'আবেদনকারী ও পিতার আধার কার্ড', required: true },
        { id: 'c_ancestral', name: 'পিতার দিকের রক্তসম্পর্কের আত্মীয়ের কাস্ট সার্টিফিকেট বা পুরনো খতিয়ান', required: true },
        { id: 'c_residence', name: 'স্থায়ী বাসিন্দা শংসাপত্র (ডোমিসাইল)', required: true },
        { id: 'c_income', name: 'ইনকাম সার্টিফিকেট (ওবিসি নন-ক্রিমিলিয়ারের জন্য)', required: false }
      ],
      ta: [
        {
                'id': 'c_aadhaar',
                'name': 'விண்ணப்பதாரர் & தந்தையின் ஆதார் கார்டு',
                'required': true
        },
        {
                'id': 'c_father_cert',
                'name': 'தந்தை / உடன்பிறந்தாரின் சாதிச் சான்றிதழ்',
                'required': true,
                'note': 'முதன்மைச் சான்றாகக் கருதப்படும்'
        },
        {
                'id': 'c_tc',
                'name': 'பள்ளி மாற்றுச் சான்றிதழ் (TC) - சாதி குறிப்பிடப்பட்டது',
                'required': true
        },
        {
                'id': 'c_photo',
                'name': 'பாஸ்போர்ட் அளவு புகைப்படம்',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Apply on State Caste Portal', description: 'Log in to your State Welfare or e-District portal and select Caste Certificate Form.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Enter Lineage & Caste Details', description: 'Provide Sub-caste, Father’s details, Paternal blood relation details, and address.', duration: '10 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Upload Ancestral Proofs', description: 'Upload Aadhaar, paternal relative’s certificate, land records, and applicant photograph.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Revenue & Social Welfare Hearing', description: 'Revenue Inspector / Sub-Divisional Officer conducts physical verification and genealogy check.', duration: '10-20 Days', actionType: 'verification' },
        { stepNumber: 5, title: 'Issue of Certificate with QR Code', description: 'SDO / Tehsildar issues digitally verifiable Caste Certificate with unique certificate number.', duration: 'Instant', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'पोर्टल पर आवेदन करें', description: 'ई-डिस्ट्रिक्ट पोर्टल पर जाएं और जाति प्रमाण पत्र फॉर्म चुनें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'वंश व जाति का विवरण भरें', description: 'उप-जाति, पिता का नाम और पैतृक संबंध दर्ज करें।', duration: '10 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'दस्तावेज अपलोड करें', description: 'आधार कार्ड, पैतृक रिश्तेदार का प्रमाण पत्र और भूमि रिकॉर्ड अपलोड करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'राजस्व अधिकारी द्वारा जांच', description: 'तहसीलदार और समाज कल्याण विभाग द्वारा वंशावली की जांच की जाती है।', duration: '10-20 दिन', actionType: 'verification' },
        { stepNumber: 5, title: 'डिजिटल जाति प्रमाण पत्र जारी', description: 'स्वीकृति के बाद क्यूआर कोड वाला प्रमाण पत्र डाउनलोड करें।', duration: 'त्वरित', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'পোর্টালে আবেদন', description: 'অনগ্রসর শ্রেণী কল্যাণ পোর্টালে গিয়ে অনলাইন ফর্ম পূরণ করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'বংশলতিকা ও উপজাতির বিবরণ', description: 'উপজাতি, পিতার তথ্য ও রক্তসম্পর্কের আত্মীয়ের বিবরণ দিন।', duration: '১০ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'বংশানুক্রমিক নথি আপলোড', description: 'পিতার কাস্ট সার্টিফিকেট, পুরনো জমির রেকর্ড ও ছবি আপলোড করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'এসডিও শুনানি ও তদন্ত', description: 'ব্লক কল্যাণ আধিকারিক বা মহকুমা শাসক দ্বারা নথি যাচাই।', duration: '১০-২০ দিন', actionType: 'verification' },
        { stepNumber: 5, title: 'ডিজিটাল সার্টিফিকেট ডাউনলোড', description: 'অনুমোদিত হলে কিউআর বারকোডসহ সার্টিফিকেট ডাউনলোড করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'e-District போர்ட்டலில் விண்ணப்பிக்கவும்',
                'description': 'மாநில சேவா மைய போர்ட்டலில் படிவத்தைப் பூர்த்தி செய்யவும்.',
                'duration': '10 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'குடும்பச் சாதிச் சான்றுகளைப் பதிவேற்றவும்',
                'description': 'தந்தையின் சாதிச் சான்றிதழ் மற்றும் பள்ளி TC நகலைப் பதிவேற்றவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'வருவாய் ஆய்வாளர் கள ஆய்வு',
                'description': 'வருவாய் அலுவலர் கிராமத்தில் விசாரணை செய்து அறிக்கை அளிப்பார்.',
                'duration': '7-10 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 4,
                'title': 'வருவாய் கோட்டாட்சியர் (RDO) / தாசில்தார் ஒப்புதல்',
                'description': 'RDO அல்லது தாசில்தார் சான்றிதழைச் சரிபார்த்து ஒப்புதல் அளிப்பார்.',
                'duration': '5-7 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'டிஜிட்டல் சான்றிதழ் பதிவிறக்கம்',
                'description': 'QR கோடுடன் கூடிய டிஜிட்டல் சான்றிதழை ஆன்லைனில் பதிவிறக்கலாம்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        }
]
    },
    timeline: {
      en: ['Online Submission', 'Ancestral Record Scrutiny', 'Field Hearing / Inquiry', 'SDO Approval', 'Digital Certificate Issued'],
      hi: ['ऑनलाइन फॉर्म', 'पैतृक रिकॉर्ड जांच', 'क्षेत्रीय पूछताछ', 'एसडीएम स्वीकृति', 'प्रमाण पत्र जारी'],
      bn: ['অনলাইন আবেদন', 'বংশপরম্পরা নথি যাচাই', 'শুনানি ও তদন্ত', 'এসডিও অনুমোদন', 'সার্টিফিকেট ডাউনলোড'],
      ta: [
        'ஆன்லைன் விண்ணப்பம்',
        'ஆவணங்கள் பதிவேற்றம்',
        'கள ஆய்வு',
        'தாசில்தார் அனுமதி',
        'டிஜிட்டல் சான்றிதழ் பதிவிறக்கம்'
]
    },
    faq: {
      en: [
        { question: 'Does SC/ST certificate ever expire?', answer: 'No, SC and ST certificates have permanent lifetime validity. However, OBC Non-Creamy Layer (NCL) certificate is income-dependent and valid for 1 Financial Year.' }
      ],
      hi: [
        { question: 'क्या एससी/एसटी प्रमाण पत्र की समय सीमा समाप्त होती है?', answer: 'नहीं, एससी और एसटी प्रमाण पत्र आजीवन मान्य रहते हैं। केवल ओबीसी नॉन-क्रीमी लेयर प्रमाण पत्र 1 वर्ष के लिए वैध होता है।' }
      ],
      bn: [
        { question: 'কাস্ট সার্টিফিকেটের মেয়াদ কি শেষ হয়?', answer: 'এসসি ও এসটি সার্টিফিকেটের আজীবন বৈধতা থাকে। ওবিসি নন-ক্রিমিলিয়ার সার্টিফিকেট প্রতি বছর পুনর্নবীকরণ করতে হয়।' }
      ],
      ta: [
        {
                'question': 'சாதிச் சான்றிதழ் புதுப்பிக்கப்பட வேண்டுமா?',
                'answer': 'SC/ST சான்றிதழ் ஆயுட்காலம் முழுவதும் செல்லுபடியாகும். OBC-NCL சான்றிதழ் வருமான வரம்பைப் பொறுத்து ஆண்டுதோறும் புதுப்பிக்கப்பட வேண்டும்.'
        }
]
    },
    helpline: '1800-111-555 (Social Justice & Empowerment)'
  },

  // 9. PM-KISAN SAMMAN NIDHI SCHEME
  {
    id: 'pm-kisan',
    iconName: 'Sprout',
    category: 'welfare',
    department: {
      en: 'Ministry of Agriculture and Farmers Welfare',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय',
      bn: 'কৃষি ও কৃষক কল্যাণ মন্ত্রণালয়',
      ta: 'வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம்'
    },
    officialPortal: 'pmkisan.gov.in',
    officialUrl: 'https://pmkisan.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: 'Direct Benefit Transfer (DBT) ₹2,000 every 4 months (₹6,000/year)',
      hi: 'प्रत्यक्ष लाभ अंतरण (DBT) हर 4 महीने में ₹2,000 (₹6,000/वर्ष)',
      bn: 'সরাসরি ব্যাংক অ্যাকাউন্টে প্রতি ৪ মাসে ₹২,০০০ (বছরে মোট ₹৬,০০০)',
      ta: 'காலாண்டுக்கு ஒருமுறை (ஆண்டுக்கு ₹6,000 நேரடியாக கணக்கில்)'
    },
    fee: {
      en: '100% Free Government Benefit Scheme',
      hi: 'पूर्णतः निःशुल्क सरकारी योजना',
      bn: 'সম্পূর্ণ বিনামূল্যে সরকারি প্রকল্প',
      ta: '100% இலவசம் (e-KYC கட்டணம் ₹15)'
    },
    keywords: [
      'pm kisan', 'pmkisan', 'kisan samman nidhi', 'farmer scheme', '6000 rupees farmer', 'kisan registration', 'dbt farmer', 'pm kisan ekyc', 'kisan status',
      'पीएम किसान', 'किसान सम्मान निधि', 'किसान योजना', '6000 रुपये किसान', 'पीएम किसान ई-केवाईसी',
      'পিএম কিষাণ', 'কৃষক সম্মান নিধি', 'কৃষক প্রকল্প', '৬০০০ টাকা ভাতা',
      'பிஎம் கிசான்', 'விவசாயி உதவித்தொகை', 'PM Kisan'
    ],
    title: {
      en: 'PM-KISAN Samman Nidhi Scheme (₹6,000 / Year DBT)',
      hi: 'प्रधानमंत्री किसान सम्मान निधि योजना (₹6,000 / वर्ष डीबीटी)',
      bn: 'প্রধানমন্ত্রী কিষাণ সম্মান নিধি যোজনা (বছরে ₹৬,০০০ অনুদান)',
      ta: 'பிரதான் மந்திரி கிசான் சம்மான் நிதி (PM-KISAN ₹6,000)'
    },
    badge: {
      en: 'Direct Income Support to Farmers',
      hi: 'किसानों के लिए प्रत्यक्ष आय सहायता',
      bn: 'কৃষকদের সরাসরি ব্যাংক সহায়তা',
      ta: 'நேரடி பணப் பரிமாற்றம் (DBT)'
    },
    shortSummary: {
      en: 'Under the PM-KISAN scheme, eligible landholding farmer families receive a financial benefit of ₹6,000 per year, payable in three equal four-monthly installments of ₹2,000 directly into their Aadhaar-linked bank accounts through Direct Benefit Transfer (DBT).',
      hi: 'पीएम-किसान योजना के तहत पात्र किसान परिवारों को ₹6,000 प्रति वर्ष की आर्थिक सहायता मिलती है। यह राशि ₹2,000 की तीन किस्तों में सीधे आधार से जुड़े बैंक खाते में डीबीटी द्वारा भेजी जाती है।',
      bn: 'পিএম-কিষাণ প্রকল্পের আওতায় যোগ্য কৃষক পরিবারগুলিকে বছরে ₹৬,০০০ আর্থিক সহায়তা দেওয়া হয়। এই টাকা প্রতি ৪ মাস অন্তর ₹২,০০০ করে সরাসরি কৃষকের আধার লিঙ্কযুক্ত ব্যাংক অ্যাকাউন্টে জমা হয়।',
      ta: 'PM-KISAN திட்டத்தின் கீழ் நில உரிமையுள்ள விவசாயக் குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 மூன்று தவணைகளாக (தலா ₹2,000) நேரடியாக வங்கி கணக்கில் செலுத்தப்படுகிறது. ஆதார் e-KYC மற்றும் நிலப் பதிவேடு இணைப்பு கட்டாயமாகும்.'
    },
    eligibility: {
      en: [
        'Small and marginal farmer families with cultivable landholding in their own name',
        'Mandatory completed Aadhaar e-KYC (via OTP or face-auth on PM-KISAN app)',
        'Excluded: Institutional landholders, constitutional post holders, income tax payers, retired pensioners receiving >₹10,000/month'
      ],
      hi: [
        'जिनके नाम पर कृषि योग्य भूमि दर्ज है ऐसे किसान परिवार',
        'अनिवार्य आधार ई-केवाईसी (ओटीपी या फेस ऑथेंटिकेशन द्वारा पूर्ण)',
        'अपात्र: आयकर दाता, सरकारी कर्मचारी, ₹10,000 से अधिक पेंशन पाने वाले'
      ],
      bn: [
        'নিজের নামে আবাদযোগ্য কৃষিজমি রয়েছে এমন কৃষক পরিবার',
        'বাধ্যতামূলক আধার ই-কেওয়াইসি সম্পন্ন হতে হবে (ওটিপি বা অ্যাপে মুখচ্ছবি দিয়ে)',
        'অযোগ্য: আয়করদাতা, সরকারি চাকরিজীবী, ₹১০,০০০-এর বেশি পেনশনভোগী'
      ],
      ta: [
        'சொந்தமாக விவசாய நிலம் வைத்திருக்கும் விவசாயக் குடும்பங்கள்',
        'நிலப் பதிவேடு (பட்டா/சிட்டா) விவசாயி பெயரில் இருக்க வேண்டும்',
        'வருமான வரி செலுத்துவோர் மற்றும் அரசு ஓய்வூதியதாரர்களுக்கு விலக்கு உண்டு'
]
    },
    documents: {
      en: [
        { id: 'k_aadhaar', name: 'Aadhaar Card of Landholding Farmer', required: true, note: 'Must be linked to Bank Account (DBT enabled)' },
        { id: 'k_land', name: 'Land Record Document (Khatiyan / RoR / Jamabandi / Khasra-Khatauni)', required: true },
        { id: 'k_bank', name: 'Aadhaar-Seeded Bank Account Passbook details', required: true },
        { id: 'k_phone', name: 'Active Mobile Number linked to Aadhaar', required: true }
      ],
      hi: [
        { id: 'k_aadhaar', name: 'किसान का आधार कार्ड (बैंक खाते से जुड़ा होना चाहिए)', required: true },
        { id: 'k_land', name: 'भूमि रिकॉर्ड (खतौनी / खसरा / जमाबंदी / पर्चा)', required: true },
        { id: 'k_bank', name: 'डीबीटी सक्षम बैंक खाते का विवरण', required: true },
        { id: 'k_phone', name: 'आधार से जुड़ा मोबाइल नंबर', required: true }
      ],
      bn: [
        { id: 'k_aadhaar', name: 'কৃষকের আধার কার্ড (ডিবিটি ও ব্যাংক লিঙ্কযুক্ত)', required: true },
        { id: 'k_land', name: 'জমির রেকর্ড বা পরচা (খতিয়ান / দাগ নম্বর)', required: true },
        { id: 'k_bank', name: 'ব্যাংক পাসবই ও আইএফএসসি কোড', required: true },
        { id: 'k_phone', name: 'আধার যুক্ত মোবাইল নম্বর', required: true }
      ],
      ta: [
        {
                'id': 'k_aadhaar',
                'name': 'விவசாயியின் ஆதார் கார்டு (வங்கி கணக்குடன் இணைக்கப்பட்டது)',
                'required': true
        },
        {
                'id': 'k_land',
                'name': 'நில உரிமையாளர் சான்று (பட்டா / சிட்டா / நிலப் பத்திர நகல்)',
                'required': true
        },
        {
                'id': 'k_bank',
                'name': 'NPCI / Aadhaar இணைக்கப்பட்ட வங்கி கணக்குப் புத்தகம்',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Visit PM-KISAN Portal', description: 'Go to pmkisan.gov.in and click on "New Farmer Registration".', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Enter Aadhaar & State Selection', description: 'Enter 12-digit Aadhaar, mobile number, and select State (Rural or Urban Farmer).', duration: '3 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Enter Land & Survey Numbers', description: 'Enter Khata number, Khasra/Dag number, Area in hectares, and land mutation date.', duration: '8 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Complete OTP e-KYC', description: 'Verify using Aadhaar OTP and ensure bank account NPCI mapping is active for DBT.', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 5, title: 'State Nodal Verification & Payout', description: 'District agriculture officer verifies land mutation. Installments credited every 4 months.', duration: 'Ongoing', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'पीएम किसान पोर्टल पर जाएं', description: 'pmkisan.gov.in पर जाएं और "New Farmer Registration" पर क्लिक करें।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'आधार और मोबाइल नंबर दर्ज करें', description: 'आधार नंबर डालें और ग्रामीण या शहरी किसान का विकल्प चुनें।', duration: '3 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'जमीन की खतौनी का विवरण भरें', description: 'खाता संख्या, खसरा संख्या और जमीन का रकबा दर्ज करें।', duration: '8 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'आधार ई-केवाईसी पूर्ण करें', description: 'ओटीपी द्वारा ई-केवाईसी पूरी करें तथा बैंक में एनपीसीआई मैपिंग चेक करें।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 5, title: 'सत्यापन और किस्त का भुगतान', description: 'कृषि विभाग की जांच के बाद ₹2,000 की किस्तें सीधे खाते में आनी शुरू होंगी।', duration: 'सतत', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'পিএম কিষাণ পোর্টালে যান', description: 'pmkisan.gov.in-এ গিয়ে "New Farmer Registration"-এ ক্লিক করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'আধার ও জেলা নির্বাচন', description: 'আধার নম্বর দিন এবং গ্রামীণ বা শহুরে কৃষক বেছে নিন।', duration: '৩ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'জমির খতিয়ান ও দাগ নম্বর দিন', description: 'খতিয়ান নম্বর, জমির পরিমাণ এবং দাগ নম্বর সংক্রান্ত তথ্য দিন।', duration: '৮ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'আধার ই-কেওয়াইসি সম্পূর্ণ করুন', description: 'ওটিপি দিয়ে ই-কেওয়াইসি করুন এবং ব্যাংক ডিবিটি স্ট্যাটাস চেক করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 5, title: 'অনুমোদন ও সরাসরি অনুদান', description: 'কৃষি দপ্তর যাচাইয়ের পর প্রতি ৪ মাস অন্তর ₹২,০০০ টাকা ব্যাংকে ঢুকবে।', duration: 'নিয়মিত', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'PM-KISAN போர்ட்டலில் புதிய விவசாயி பதிவு',
                'description': 'pmkisan.gov.in க்குச் சென்று \'New Farmer Registration\' என்பதைத் தேர்ந்தெடுக்கவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'ஆதார் & நில விவரங்களை உள்ளிடவும்',
                'description': 'ஆதார் எண், நில சர்வே எண் மற்றும் பட்டா விவரங்களை உள்ளிடவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'ஆதார் OTP e-KYC ஐ முடிக்கவும்',
                'description': 'போர்ட்டலில் அல்லது CSC மையத்தில் கைரேகை மூலம் e-KYC செய்யவும.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'மாநில வேளாண் அலுவலர் சரிபார்ப்பு',
                'description': 'மாவட்ட வேளாண் துறை நிலப் பதிவுகளைச் சரிபார்க்கும்.',
                'duration': '7-15 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'தவணைத் தொகை வங்கி கணக்கில் வரவு',
                'description': 'ஒவ்வொரு 4 மாதங்களுக்கும் ₹2,000 நேரடியாக வங்கி கணக்கில் வரவு வைக்கப்படும்.',
                'duration': 'காலாண்டு',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['Farmer Registration', 'Land Record Upload', 'Aadhaar e-KYC Verification', 'District Officer Approval', '₹2,000 DBT Credited'],
      hi: ['किसान पंजीकरण', 'भूमि रिकॉर्ड अपलोड', 'आधार ई-केवाईसी', 'जिला अधिकारी अनुमोदन', '₹2,000 डीबीटी भुगतान'],
      bn: ['কৃষক নিবন্ধন', 'জমির নথি আপলোড', 'ই-কেওয়াইসি যাচাই', 'অনুমোদন', '₹২,০০০ ব্যাংক জমা'],
      ta: [
        'விவசாயி பதிவு',
        'நில விவரங்கள் உள்ளீடு',
        'ஆதார் e-KYC',
        'வேளாண் துறை அனுமதி',
        'DBT வங்கி வரவு'
]
    },
    faq: {
      en: [
        { question: 'Why has my installment stopped?', answer: 'The most common reasons are incomplete Aadhaar e-KYC, bank account not seeded with NPCI/Aadhaar for DBT, or land record mismatch.' }
      ],
      hi: [
        { question: 'मेरी किस्त क्यों रुक गई है?', answer: 'मुख्य कारण ई-केवाईसी अधूरी होना या बैंक खाते में एनपीसीआई/डीबीटी मैपिंग का न होना हो सकता है।' }
      ],
      bn: [
        { question: 'কিস্তির টাকা না ঢুকলে কী করণীয়?', answer: 'আধার ই-কেওয়াইসি বাকি থাকা বা ব্যাংক অ্যাকাউন্টে এনপিসিআই ডিবিটি লিঙ্ক না থাকা এর প্রধান কারণ।' }
      ],
      ta: [
        {
                'question': 'தவணைத் தொகை வரவில்லையென்றால் என்ன செய்வது?',
                'answer': 'போர்ட்டலில் Know Your Status பகுதிக்குச் சென்று ஆதார் இணைப்பு மற்றும் e-KYC நிலையைச் சரிபார்க்கவும்.'
        }
]
    },
    helpline: '155261 / 1800-115-526 (PM-Kisan Help Desk)'
  },

  // 10. AYUSHMAN BHARAT PM-JAY HEALTH SCHEME
  {
    id: 'ayushman-bharat',
    iconName: 'HeartPulse',
    category: 'welfare',
    department: {
      en: 'National Health Authority (NHA)',
      hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
      bn: 'জাতীয় স্বাস্থ্য কর্তৃপক্ষ (NHA)',
      ta: 'தேசிய சுகாதார ஆணையம் (NHA) / ஆயுஷ்மான் பாரத் PM-JAY'
    },
    officialPortal: 'beneficiary.nha.gov.in',
    officialUrl: 'https://beneficiary.nha.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: 'Instant Golden Card Creation (₹5 Lakh Cover per Family/Year)',
      hi: 'तत्काल गोल्डन कार्ड निर्माण (₹5 लाख प्रति परिवार/वर्ष स्वास्थ्य कवर)',
      bn: 'তাৎক্ষণিক গোল্ডেন কার্ড তৈরি (পরিবার পিছু প্রতি বছর ₹৫ লক্ষ পর্যন্ত বিনামূল্যে চিকিৎসা)',
      ta: 'உடனடி ஆன்லைன் சரிபார்ப்பு (ஆயுஷ்மான் கார்டு உருவாக்கம்)'
    },
    fee: {
      en: '100% Free Cashless Health Cover',
      hi: 'पूर्णतः निःशुल्क कैशलेस स्वास्थ्य कवर',
      bn: 'সম্পূর্ণ বিনামূল্যে ক্যাশলেস স্বাস্থ্য বীমা',
      ta: '100% இலவசம் (ஆண்டுக்கு ₹5 லட்சம் மருத்துவக் காப்பீடு)'
    },
    keywords: [
      'ayushman', 'ayushman bharat', 'pmjay', 'pm-jay', 'ayushman card', 'golden card', 'health insurance 5 lakh', 'free hospital treatment', 'nha portal',
      'आयुष्मान भारत', 'आयुष्मान कार्ड', 'गोल्डन कार्ड', '5 लाख मुफ्त इलाज', 'पीएमजेएवाई',
      'আয়ুষ্মান ভারত', 'আয়ুষ্মান কার্ড', 'গোল্ডেন কার্ড', '৫ লক্ষ টাকার স্বাস্থ্য সাথী বা স্বাস্থ্য বীমা',
      'ஆயுஷ்மான்', 'ஆயுஷ்மான் பாரத்', 'மருத்துவ காப்பீடு'
    ],
    title: {
      en: 'Ayushman Bharat PM-JAY (₹5 Lakh Cashless Health Cover)',
      hi: 'आयुष्मान भारत पीएम-जेएवाई (₹5 लाख का निःशुल्क कैशलेस स्वास्थ्य कवर)',
      bn: 'আয়ুষ্মান ভারত পিএম-জেএওয়াই (পরিবার পিছু ₹৫ লক্ষের ক্যাশলেস স্বাস্থ্য পরিষেবা)',
      ta: 'ஆயுஷ்மான் பாரத் பிரதம மந்திரி ஜன் ஆரோக்கிய யோஜனா (PM-JAY)'
    },
    badge: {
      en: 'World’s Largest Health Assurance Scheme',
      hi: 'विश्व की सबसे बड़ी स्वास्थ्य योजना',
      bn: 'বিশ্বের বৃহত্তম স্বাস্থ্য সুরক্ষা প্রকল্প',
      ta: '₹5 லட்சம் இலவச மருத்துவக் காப்பீடு'
    },
    shortSummary: {
      en: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides free, completely cashless secondary and tertiary hospitalization treatment up to ₹5 Lakh per year for over 12 crore vulnerable families across 29,000+ empanelled government and private hospitals.',
      hi: 'आयुष्मान भारत योजना देश के 12 करोड़ से अधिक पात्र परिवारों को प्रति वर्ष ₹5 लाख तक का पूरी तरह से कैशलेस इलाज प्रदान करती है। देश के 29,000+ सरकारी एवं निजी अस्पतालों में भर्ती होने पर कोई पैसा नहीं देना पड़ता।',
      bn: 'আয়ুষ্মান ভারত পিএম-জেএওয়াই প্রকল্পের অধীনে প্রতিটি যোগ্য পরিবার প্রতি বছর ₹৫ লক্ষ টাকা পর্যন্ত হাসপাতালে ভর্তি ও অস্ত্রোপচারের ক্যাশলেস চিকিৎসা পায় ২৯,০০০-এর বেশি হাসপাতালে।',
      ta: 'ஆயுஷ்மான் பாரத் திட்டத்தின் மூலம் தகுதியுள்ள ஏழைக் குடும்பங்களுக்கு அரசு மற்றும் அங்கீகரிக்கப்பட்ட தனியார் மருத்துவமனைகளில் ஆண்டுக்கு ₹5 லட்சம் வரை இலவச ரொக்கமில்லா மருத்துவ சிகிச்சை வழங்கப்படுகிறது.'
    },
    eligibility: {
      en: [
        'Listed in Socio-Economic Caste Census (SECC 2011) database, or holding State NFSA Ration Card',
        'All Senior Citizens aged 70+ in India (recently covered irrespective of income with top-up ₹5 Lakh)',
        'No limit on family size, age, or pre-existing medical conditions (pre-existing diseases covered from Day 1)'
      ],
      hi: [
        'एसईसीसी (SECC 2011) डेटाबेस में सूचीबद्ध या पात्र राशन कार्ड धारक',
        '70 वर्ष से अधिक आयु के सभी वरिष्ठ नागरिक (आय की सीमा के बिना ₹5 लाख का अतिरिक्त कवर)',
        'पहले से मौजूद सभी बीमारियों का इलाज पहले दिन से शामिल'
      ],
      bn: [
        'এসইসিসি (SECC 2011) তালিকায় নাম থাকা বা যোগ্য রেশন কার্ডধারী পরিবার',
        '৭০ বছরের বেশি বয়সী সমস্ত প্রবীণ নাগরিক (আয় নির্বিশেষে সম্পূর্ণ আওতাভুক্ত)',
        'পরিবারের সদস্য সংখ্যা বা বয়সের কোনো সীমা নেই; পূর্বের সমস্ত রোগ অন্তর্ভুক্ত'
      ],
      ta: [
        'SECC 2011 தரவுத்தளத்தில் உள்ள குடும்பங்கள் அல்லது முன்னுரிமை ரேஷன் கார்டு வைத்திருப்பவர்கள்',
        '70 வயது அல்லது அதற்கு மேற்பட்ட அனைத்து மூத்த குடிமக்களும் (வருமான வரம்பின்றி தகுதி)',
        'கட்டிடத் தொழிலாளர்கள் மற்றும் பதிவுசெய்த நலவாரிய உறுப்பினர்கள்'
]
    },
    documents: {
      en: [
        { id: 'ay_aadhaar', name: 'Aadhaar Card of each family member', required: true, note: 'Individual e-KYC for each member' },
        { id: 'ay_ration', name: 'Ration Card / NFSA Family ID / PM-JAY Letter with Family ID', required: true },
        { id: 'ay_mobile', name: 'Mobile Number for OTP Verification', required: true }
      ],
      hi: [
        { id: 'ay_aadhaar', name: 'परिवार के प्रत्येक सदस्य का आधार कार्ड', required: true },
        { id: 'ay_ration', name: 'राशन कार्ड या पीएम-जेएवाई फैमिली आईडी पत्र', required: true },
        { id: 'ay_mobile', name: 'ओटीपी सत्यापन के लिए मोबाइल नंबर', required: true }
      ],
      bn: [
        { id: 'ay_aadhaar', name: 'পরিবারের প্রত্যেক সদস্যের আধার কার্ড', required: true },
        { id: 'ay_ration', name: 'রেশন কার্ড বা পিএম-জেএওয়াই ফ্যামিলি আইডি', required: true },
        { id: 'ay_mobile', name: 'ওটিপি পাওয়ার জন্য মোবাইল নম্বর', required: true }
      ],
      ta: [
        {
                'id': 'ay_aadhaar',
                'name': 'குடும்ப உறுப்பினர்களின் ஆதார் கார்டு',
                'required': true
        },
        {
                'id': 'ay_ration',
                'name': 'குடும்ப ரேஷன் கார்டு (ஸ்மார்ட் கார்டு)',
                'required': true
        },
        {
                'id': 'ay_mobile',
                'name': 'ஆதாருடன் இணைக்கப்பட்ட கைபேசி எண்',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Check Eligibility on Beneficiary Portal', description: 'Visit beneficiary.nha.gov.in and log in with your mobile number.', duration: '1 Min', actionType: 'online' },
        { stepNumber: 2, title: 'Search by Aadhaar or Ration Card', description: 'Select your State and enter your Ration Card number or Aadhaar number to view family members.', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Complete e-KYC', description: 'Click "e-KYC" next to member name, authenticate via Aadhaar OTP or Face-Auth on smartphone.', duration: '3 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Instant Ayushman Card Approval', description: 'Once photo matches Aadhaar records, the card is instantly approved.', duration: 'Instant', actionType: 'online' },
        { stepNumber: 5, title: 'Download PVC/Digital Card & Hospitalization', description: 'Download PDF Ayushman Card with QR code. Show at any empanelled hospital for ₹5 Lakh cashless admission.', duration: 'Lifetime', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'लाभार्थी पोर्टल पर पात्रता जांचें', description: 'beneficiary.nha.gov.in पर जाएं और मोबाइल नंबर से लॉगिन करें।', duration: '1 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'आधार या राशन कार्ड से खोजें', description: 'राज्य चुनें और राशन कार्ड या आधार नंबर डालकर परिवार के सदस्यों की सूची देखें।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'ई-केवाईसी पूर्ण करें', description: 'सदस्य के नाम के आगे ई-केवाईसी पर क्लिक करें और आधार ओटीपी से सत्यापित करें।', duration: '3 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'तत्काल आयुष्मान कार्ड स्वीकृति', description: 'फोटो और विवरण मेल खाते ही कार्ड तुरंत स्वीकृत हो जाता है।', duration: 'त्वरित', actionType: 'online' },
        { stepNumber: 5, title: 'कार्ड डाउनलोड करें और मुफ्त इलाज पाएं', description: 'क्यूआर कोड वाला कार्ड डाउनलोड करें और 29,000+ अस्पतालों में ₹5 लाख तक का कैशलेस इलाज पाएं।', duration: 'आजीवन', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'বেনিফিশিয়ারি পোর্টালে যোগ্যতা পরীক্ষা', description: 'beneficiary.nha.gov.in-এ গিয়ে মোবাইল নম্বর দিয়ে লগইন করুন।', duration: '১ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'আধার বা রেশন কার্ড দিয়ে পরিবার খুঁজুন', description: 'রাজ্য সিলেক্ট করে রেশন কার্ড বা আধার নম্বর দিয়ে পরিবারের তালিকা বের করুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'আধার ওটিপি ই-কেওয়াইসি', description: 'সদস্যের নামের পাশে ই-কেওয়াইসি ক্লিক করে আধার ওটিপি যাচাই করুন।', duration: '৩ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'তাৎক্ষণিক আয়ুষ্মান কার্ড অনুমোদন', description: 'তথ্য যাচাই হতেই তৎক্ষণাৎ কার্ড অনুমোদিত হয়ে যাবে।', duration: 'তাৎক্ষণিক', actionType: 'online' },
        { stepNumber: 5, title: 'কার্ড ডাউনলোড ও হাসপাতালে ক্যাশলেস সুবিধা', description: 'কার্ড ডাউনলোড করে যেকোনো তালিকাভুক্ত হাসপাতালে ₹৫ লক্ষ পর্যন্ত বিনামূল্যে চিকিৎসা নিন।', duration: 'আজীবন', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'தகுதியைச் சரிபார்க்கவும் (beneficiary.nha.gov.in)',
                'description': 'NHA போர்ட்டலில் கைபேசி எண்ணை உள்ளிட்டு உங்கள் குடும்பத்தின் தகுதியைச் சரிபார்க்கவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'குடும்ப உறுப்பினர்களைத் தேர்ந்தெடுக்கவும்',
                'description': 'ரேஷன் கார்டு எண்ணை உள்ளிட்டு குடும்ப உறுப்பினர்களின் பட்டியலைக் காணவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'ஆதார் OTP e-KYC செய்யவும',
                'description': 'குடும்ப உறுப்பினரின் ஆதார் OTP அல்லது முக அங்கீகாரத்தைப் பயன்படுத்தவும்.',
                'duration': '3 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'உடனடி அனுமதி',
                'description': 'e-KYC முடிந்ததும் ஆயுஷ்மான் கார்டு உடனடியாக ஒப்புதல் பெறுகிறது.',
                'duration': 'உடனடி',
                'actionType': 'online'
        },
        {
                'stepNumber': 5,
                'title': 'ஆயுஷ்மான் கார்டு பதிவிறக்கம்',
                'description': 'கார்டைப் பதிவிறக்கம் செய்து அங்கீகரிக்கப்பட்ட மருத்துவமனைகளில் இலவச சிகிச்சை பெறலாம்.',
                'duration': 'உடனடி',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['Mobile Login', 'Aadhaar / Ration Search', 'Face/OTP e-KYC', 'Instant Approval', '₹5 Lakh Hospital Access'],
      hi: ['मोबाइल लॉगिन', 'राशन कार्ड खोज', 'आधार ई-केवाईसी', 'तत्काल स्वीकृति', '₹5 लाख कैशलेस इलाज'],
      bn: ['মোবাইল লগইন', 'রেশন কার্ড সার্চ', 'ই-কেওয়াইসি সম্পন্ন', 'তাৎক্ষণিক অনুমোদন', 'ক্যাশলেস চিকিৎসা'],
      ta: [
        'தகுதிச் சரிபார்ப்பு',
        'உறுப்பினர் தேர்வு',
        'ஆதார் e-KYC',
        'கார்டு ஒப்புதல்',
        'இலவச மருத்துவ சிகிச்சை'
]
    },
    faq: {
      en: [
        { question: 'Do I need to pay any money at empanelled private hospitals?', answer: 'No! The treatment is 100% cashless, including medicines, diagnostics, ICU charges, and 15 days of post-hospitalization medicines.' }
      ],
      hi: [
        { question: 'क्या अस्पताल में कोई शुल्क देना होता है?', answer: 'नहीं! जांच, दवाइयां, ऑपरेशन और अस्पताल में भर्ती होना 100% निःशुल्क व कैशलेस है।' }
      ],
      bn: [
        { question: 'হাসপাতালে কি কোনো টাকা দিতে হবে?', answer: 'না! ওষুধ, পরীক্ষা, ডাক্তার ফি, অপারেশন সহ সম্পূর্ণ খরচ সরকারের তরফে ক্যাশলেস মেটানো হয়।' }
      ],
      ta: [
        {
                'question': 'மருத்துவமனையில் இந்த கார்டை எவ்வாறு பயன்படுத்துவது?',
                'answer': 'அங்கீகரிக்கப்பட்ட மருத்துவமனையில் உள்ள ஆயுஷ்மான் மித்ரா மையத்தில் கார்டைக் காட்டினால் ரொக்கமில்லா சிகிச்சை பெறலாம்.'
        }
]
    },
    helpline: '14555 (Ayushman National Call Centre Toll-Free)'
  },

  // 11. SENIOR CITIZEN CARD / WELFARE
  {
    id: 'senior-citizen',
    iconName: 'Users',
    category: 'welfare',
    department: {
      en: 'Ministry of Social Justice and Empowerment',
      hi: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
      bn: 'সামাজিক ন্যায়বিচার ও ক্ষমতায়ন মন্ত্রণালয়',
      ta: 'சமூக நீதி மற்றும் அதிகாரமளித்தல் அமைச்சகம்'
    },
    officialPortal: 'socialjustice.gov.in',
    officialUrl: 'https://socialjustice.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: '5–10 Working Days (Digital Senior Citizen ID Card)',
      hi: '5–10 कार्य दिवस (डिजिटल वरिष्ठ नागरिक पहचान पत्र)',
      bn: '৫–১০ কার্যদিবস (ডিজিটাল প্রবীণ নাগরিক কার্ড)',
      ta: '5–10 வேலை நாட்கள் (டிஜிட்டல் மூத்த குடிமக்கள் கார்டு)'
    },
    fee: {
      en: '100% Free of Cost',
      hi: 'पूर्णतः निःशुल्क',
      bn: 'সম্পূর্ণ বিনামূল্যে',
      ta: '100% இலவசம்'
    },
    keywords: [
      'senior citizen', 'elderly', 'senior citizen card', '60 years age benefits', 'senior concession', 'vridha pension', 'elder helpline', 'senior citizen certificate',
      'वरिष्ठ नागरिक', 'सीनियर सिटीजन कार्ड', 'वृद्धा पेंशन', 'वरिष्ठ नागरिक प्रमाण पत्र',
      'সিনিয়র সিটিজেন', 'প্রবীণ নাগরিক কার্ড', 'বার্ধক্য ভাতা', 'সিনিয়র সিটিজেন সার্টিফিকেট',
      'மூத்த குடிமக்கள்', 'முதியோர் அட்டை', 'மூத்த குடிமகன் சான்றிதழ்', 'Senior Citizen'
    ],
    title: {
      en: 'Senior Citizen Identity Card & Welfare Schemes (Age 60+)',
      hi: 'वरिष्ठ नागरिक पहचान पत्र एवं कल्याणकारी योजनाएं (आयु 60+)',
      bn: 'প্রবীণ নাগরিক পরিচয়পত্র ও বার্ধক্য সুরক্ষা প্রকল্প (বয়স ৬০+)',
      ta: 'மூத்த குடிமக்கள் அடையாள அட்டை & நலத்திட்டங்கள் (வயது 60+)'
    },
    badge: {
      en: 'Special Civic Privileges & Priority',
      hi: 'विशेष नागरिक सुविधाएं एवं प्राथमिकता',
      bn: 'বিশেষ নাগরিক সুযোগ-সুবিধা ও অগ্রাধিকার',
      ta: 'சிறப்பு குடிமக்கள் சலுகைகள் & முன்னுரிமை'
    },
    shortSummary: {
      en: 'Indian citizens aged 60 years and above can obtain an official National Senior Citizen Identity Card. It provides streamlined access to State old-age pensions (NSAP/Indira Gandhi Pension), hospital priority, travel concessions, higher bank FD interest rates, and dedicated tax exemptions.',
      hi: '60 वर्ष या उससे अधिक आयु के भारतीय नागरिक वरिष्ठ नागरिक पहचान पत्र बनवा सकते हैं। इसके माध्यम से वृद्धावस्था पेंशन, अस्पतालों में प्राथमिकता, विशेष रेल/बस छूट, बैंकों में सावधि जमा (FD) पर अधिक ब्याज और आयकर में विशेष छूट मिलती है।',
      bn: '৬০ বছর বা তার বেশি বয়সী নাগরিকরা সরকারি প্রবীণ নাগরিক কার্ড তৈরি করতে পারেন। এর মাধ্যমে বার্ধক্য ভাতা, হাসপাতালে অগ্রাধিকার, ব্যাংকে ফিক্সড ডিপোজিটে অতিরিক্ত সুদ এবং আয়করে বিশেষ ছাড় পাওয়া যায়।',
      ta: '60 வயது மற்றும் அதற்கு மேற்பட்ட இந்தியக் குடிமக்கள் அதிகாரப்பூர்வ மூத்த குடிமக்கள் அடையாள அட்டையைப் பெறலாம். இதன் மூலம் முதியோர் ஓய்வூதியம், மருத்துவமனை முன்னுரிமை, பயணச் சலுகைகள் மற்றும் வங்கி FD கூடுதல் வட்டி பெறலாம்.'
    },
    eligibility: {
      en: [
        'Must be an Indian citizen',
        'Must have completed 60 years of age on the date of application',
        'Resident of the applying State / District'
      ],
      hi: [
        'भारतीय नागरिक होना चाहिए',
        'आवेदन की तिथि पर 60 वर्ष की आयु पूर्ण होनी चाहिए',
        'संबंधित राज्य/जिले का निवासी होना चाहिए'
      ],
      bn: [
        'ভারতের নাগরিক হতে হবে',
        'আবেদনের তারিখে ৬০ বছর পূর্ণ হতে হবে',
        'সংশ্লিষ্ট রাজ্যের স্থায়ী বাসিন্দা হতে হবে'
      ],
      ta: [
        'இந்தியக் குடிமகனாக இருக்க வேண்டும்',
        'விண்ணப்பிக்கும் தேதியில் 60 வயது பூர்த்தியடைந்திருக்க வேண்டும்',
        'விண்ணப்பிக்கும் மாநிலத்தின் நிரந்தர வசிப்பிடவாசியாக இருக்க வேண்டும்'
]
    },
    documents: {
      en: [
        { id: 'sc_age', name: 'Age Proof (Aadhaar Card / Voter ID / Passport / School Leaving Certificate)', required: true },
        { id: 'sc_addr', name: 'Address Proof (Aadhaar / Utility Bill / Ration Card)', required: true },
        { id: 'sc_blood', name: 'Blood Group Report & Emergency Contact details', required: true, note: 'Embossed on Senior Citizen Card' },
        { id: 'sc_photo', name: 'Two Passport Size Photographs', required: true }
      ],
      hi: [
        { id: 'sc_age', name: 'आयु प्रमाण (आधार कार्ड / वोटर आईडी / 10वीं का प्रमाण पत्र)', required: true },
        { id: 'sc_addr', name: 'निवास प्रमाण (आधार कार्ड / राशन कार्ड / बिजली बिल)', required: true },
        { id: 'sc_blood', name: 'ब्लड ग्रुप रिपोर्ट और आपातकालीन संपर्क नंबर', required: true },
        { id: 'sc_photo', name: 'पासपोर्ट साइज रंगीन फोटो', required: true }
      ],
      bn: [
        { id: 'sc_age', name: 'বয়সের প্রমাণ (আধার / ভোটার আইডি / প্যান)', required: true },
        { id: 'sc_addr', name: 'ঠিকানার প্রমাণ (আধার / বিদ্যুৎ বিল / রেশন কার্ড)', required: true },
        { id: 'sc_blood', name: 'ব্লাড গ্রুপ রিপোর্ট এবং জরুরি যোগাযোগের নম্বর', required: true },
        { id: 'sc_photo', name: 'পাসপোর্ট সাইজ ছবি', required: true }
      ],
      ta: [
        {
                'id': 'sc_age',
                'name': 'வயதுச் சான்று (ஆதார் கார்டு / வாக்காளர் அட்டை / பான் கார்டு)',
                'required': true
        },
        {
                'id': 'sc_addr',
                'name': 'முகவரிச் சான்று (ஆதார் / மின்சாரக் கட்டணம் / ரேஷன் கார்டு)',
                'required': true
        },
        {
                'id': 'sc_blood',
                'name': 'இரத்த வகை அறிக்கை & அவசர தொடர்பு எண்கள்',
                'required': true,
                'note': 'கார்டில் அச்சிடப்படும்'
        },
        {
                'id': 'sc_photo',
                'name': 'இரண்டு பாஸ்போர்ட் அளவு புகைப்படங்கள்',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Visit State Social Welfare Portal', description: 'Log in to your State Social Welfare or e-District portal, or visit local District Social Welfare Office (DSWO).', duration: '2 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Submit Personal & Medical Details', description: 'Enter Name, Date of Birth, Blood Group, Doctor contact, and nominee details.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Upload Proof of Age & Address', description: 'Upload Aadhaar card confirming age >= 60 years and passport size photo.', duration: '3 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Verification by Welfare Officer', description: 'District social welfare department reviews and approves the application.', duration: '3-5 Days', actionType: 'verification' },
        { stepNumber: 5, title: 'Download Digital Senior Citizen Card', description: 'Download laminated QR card or receive smart card by post.', duration: 'Instant', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'समाज कल्याण पोर्टल पर जाएं', description: 'राज्य समाज कल्याण पोर्टल या ई-डिस्ट्रिक्ट पोर्टल पर जाएं।', duration: '2 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'व्यक्तिगत और स्वास्थ्य विवरण भरें', description: 'नाम, जन्म तिथि, ब्लड ग्रुप और आपातकालीन संपर्क दर्ज करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'आयु और निवास प्रमाण अपलोड करें', description: 'आधार कार्ड और फोटो अपलोड करें।', duration: '3 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'कल्याण अधिकारी द्वारा अनुमोदन', description: 'जिला समाज कल्याण विभाग द्वारा सत्यापन किया जाता है।', duration: '3-5 दिन', actionType: 'verification' },
        { stepNumber: 5, title: 'डिजिटल कार्ड डाउनलोड करें', description: 'क्यूआर कोड युक्त वरिष्ठ नागरिक कार्ड तुरंत डाउनलोड करें।', duration: 'त्वरित', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'সমাজ কল্যাণ পোর্টালে যান', description: 'রাজ্য সমাজ কল্যাণ বা ই-ডিস্ট্রিক্ট পোর্টালে ফর্ম খুলুন।', duration: '২ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'ব্যক্তিগত ও স্বাস্থ্য সম্পর্কিত তথ্য', description: 'নাম, জন্মতারিখ, রক্তের গ্রুপ এবং জরুরি যোগাযোগের তথ্য দিন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'বয়সের নথি ও ছবি আপলোড', description: 'আধার কার্ড ও রঙিন পাসপোর্ট ছবি আপলোড করুন।', duration: '৩ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'সমাজ কল্যাণ আধিকারিক কর্তৃক যাচাই', description: 'জেলা সমাজ কল্যাণ দপ্তর দ্বারা আবেদন অনুমোদন।', duration: '৩-৫ দিন', actionType: 'verification' },
        { stepNumber: 5, title: 'ডিজিটাল কার্ড ডাউনলোড', description: 'কিউআর কোডযুক্ত প্রবীণ নাগরিক কার্ড ডাউনলোড করুন।', duration: 'তাৎক্ষণিক', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'மாநில சமூக நல போர்ட்டலுக்குச் செல்லவும்',
                'description': 'மாநில சமூக நல போர்ட்டல் அல்லது e-District போர்ட்டலில் படிவத்தைத் திறக்கவும்.',
                'duration': '2 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'சுய மற்றும் மருத்துவ விவரங்களை பூர்த்தி செய்யவும்',
                'description': 'பெயர், பிறந்த தேதி, இரத்த வகை மற்றும் அவசர தொடர்பு விவரங்களை உள்ளிடவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'வயது & முகவரிச் சான்றுகளைப் பதிவேற்றவும்',
                'description': 'ஆதார் கார்டு மற்றும் வண்ணப் புகைப்படத்தைப் பதிவேற்றவும்.',
                'duration': '3 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'சமூக நல அலுவலர் சரிபார்ப்பு',
                'description': 'மாவட்ட சமூக நலத் துறை விண்ணப்பத்தைச் சரிபார்த்து ஒப்புதல் அளிக்கும்.',
                'duration': '3-5 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'டிஜிட்டல் கார்டு பதிவிறக்கம்',
                'description': 'QR கோடுடன் கூடிய மூத்த குடிமக்கள் கார்டைப் பதிவிறக்கவும்.',
                'duration': 'உடனடி',
                'actionType': 'online'
        }
]
    },
    timeline: {
      en: ['Online Application', 'Age Proof Upload', 'DSWO Officer Verification', 'Card Approved', 'QR Smart Card Issued'],
      hi: ['ऑनलाइन आवेदन', 'आयु प्रमाण अपलोड', 'अधिकारी सत्यापन', 'कार्ड स्वीकृत', 'स्मार्ट कार्ड जारी'],
      bn: ['অনলাইন আবেদন', 'বয়সের প্রমাণ আপলোড', 'অফিসার যাচাই', 'অনুমোদন', 'স্মার্ট কার্ড প্রাপ্তি'],
      ta: [
        'ஆன்லைன் விண்ணப்பம்',
        'வயதுச் சான்று பதிவேற்றம்',
        'அலுவலர் சரிபார்ப்பு',
        'கார்டு அனுமதி',
        'டிஜிட்டல் கார்டு பதிவிறக்கம்'
]
    },
    faq: {
      en: [
        { question: 'What is Elderline helpline number?', answer: 'Call 14567 — Elderline is India’s dedicated 24x7 national helpline for senior citizens for emotional support, legal guidance, and rescue.' }
      ],
      hi: [
        { question: 'वरिष्ठ नागरिकों के लिए राष्ट्रीय हेल्पलाइन नंबर क्या है?', answer: '14567 (एल्डरलाइन) — वरिष्ठ नागरिकों के लिए 24x7 निःशुल्क राष्ट्रीय हेल्पलाइन।' }
      ],
      bn: [
        { question: 'প্রবীণ নাগরিকদের জন্য সরকারি হেল্পলাইন কী?', answer: '১৪৫৬৭ (Elderline) — প্রবীণ নাগরিকদের জন্য ২৪ ঘণ্টা জাতীয় টোল-ফ্রি হেল্পলাইন।' }
      ],
      ta: [
        {
                'question': 'மூத்த குடிமக்களுக்கான தேசிய உதவி எண் என்ன?',
                'answer': '14567 (Elderline) — மூத்த குடிமக்களுக்கான 24x7 இலவச தேசிய உதவி எண்.'
        }
]
    },
    helpline: '14567 (National Elderline Helpline 24x7)'
  },

  // 12. GOVERNMENT SCHOLARSHIP INFORMATION (NSP)
  {
    id: 'scholarship',
    iconName: 'GraduationCap',
    category: 'education',
    department: {
      en: 'Ministry of Education & National Scholarship Portal (NSP)',
      hi: 'शिक्षा मंत्रालय एवं राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)',
      bn: 'শিক্ষা মন্ত্রণালয় এবং জাতীয় স্কলারশিপ পোর্টাল (NSP)',
      ta: 'மத்திய கல்வி அமைச்சகம் & தேசிய உதவித்தொகை போர்ட்டல் (NSP)'
    },
    officialPortal: 'scholarships.gov.in',
    officialUrl: 'https://scholarships.gov.in',
    lastVerified: 'August 2026',
    processingTime: {
      en: 'Direct DBT to Bank Account (Annually during Academic Cycle)',
      hi: 'प्रत्यक्ष लाभ अंतरण (DBT) वार्षिक शैक्षणिक सत्र के दौरान',
      bn: 'সরাসরি ব্যাংক অ্যাকাউন্টে বাৎসরিক শিক্ষা অনুদান',
      ta: 'கல்வியாண்டுதோறும் (நேரடி பணப் பரிமாற்றம் DBT)'
    },
    fee: {
      en: '100% Free of Cost for all Students',
      hi: 'सभी छात्रों के लिए पूर्णतः निःशुल्क',
      bn: 'সকল ছাত্রছাত্রীদের জন্য সম্পূর্ণ বিনামূল্যে',
      ta: '100% இலவசம்'
    },
    keywords: [
      'scholarship', 'nsp', 'student scholarship', 'national scholarship portal', 'post matric scholarship', 'pre matric', 'merit cum means', 'minority scholarship', 'sc st scholarship',
      'छात्रवृत्ति', 'स्कॉलरशिप', 'एनएसपी पोर्टल', 'पोस्ट मैट्रिक छात्रवृत्ति', 'सरकारी छात्रवृत्ति',
      'স্কলারশিপ', 'বৃত্তি', 'ছাত্রবৃত্তি', 'পোস্ট ম্যাট্রিক স্কলারশিপ',
      'உதவித்தொகை', 'கல்வி உதவித்தொகை', 'NSP', 'scholarship'
    ],
    title: {
      en: 'National & State Government Scholarships (NSP Portal)',
      hi: 'राष्ट्रीय एवं राज्य सरकारी छात्रवृत्ति (NSP पोर्टल)',
      bn: 'জাতীয় এবং রাজ্য সরকারি স্কলারশিপ (এনএসপি পোর্টাল)',
      ta: 'தேசிய & மாநில அரசு உதவித்தொகை (NSP போர்ட்டல்)'
    },
    badge: {
      en: 'Pre-Matric, Post-Matric & Higher Education',
      hi: 'प्री-मैट्रिक, पोस्ट-मैट्रिक एवं उच्च शिक्षा',
      bn: 'প্রাক-মাধ্যমিক, মাধ্যমিকোত্তর ও উচ্চশিক্ষা',
      ta: 'பள்ளி, கல்லூரி & உயர் கல்வி உதவித்தொகை'
    },
    shortSummary: {
      en: 'The National Scholarship Portal (NSP) is a one-stop digital platform enabling students across India to discover, apply for, and receive over 100+ Central and State Government scholarships directly into their Aadhaar-seeded bank accounts.',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) भारत के सभी विद्यार्थियों के लिए केंद्र और राज्य सरकार की 100 से अधिक छात्रवृत्तियों में आवेदन करने का एकल मंच है। छात्रवृत्ति की राशि सीधे बैंक खाते में भेजी जाती है।',
      bn: 'জাতীয় স্কলারশিপ পোর্টাল (NSP) ভারতের শিক্ষার্থীদের জন্য একটি একক ডিজিটাল প্ল্যাটফর্ম যার মাধ্যমে কেন্দ্রীয় ও রাজ্য সরকারের শতাধিক বৃত্তির টাকা সরাসরি ব্যাংক অ্যাকাউন্টে পাওয়া যায়।',
      ta: 'தேசிய உதவித்தொகை போர்ட்டல் (NSP) மூலம் பள்ளி, கல்லூரி மற்றும் ஆராய்ச்சி படிக்கும் மாணவர்களுக்கு 100 க்கும் மேற்பட்ட மத்திய மற்றும் மாநில அரசின் கல்வி உதவித்தொகை நேரடியாக வங்கி கணக்கில் வழங்கப்படுகிறது.'
    },
    eligibility: {
      en: [
        'Regular student enrolled in a recognized School, College, Polytechnic, or University',
        'Family gross annual income ceiling (typically ₹1.5 Lakh to ₹2.5 Lakh for Pre/Post-Matric, up to ₹8 Lakh for Higher Merit schemes)',
        'Minimum academic score requirement (usually 50% or above in previous qualifying exam)',
        'Mandatory Aadhaar / One-Time Registration (OTR) with face authentication on NSP mobile app'
      ],
      hi: [
        'मान्यता प्राप्त स्कूल, कॉलेज या विश्वविद्यालय में नियमित विद्यार्थी',
        'परिवार की वार्षिक आय सीमा (आमतौर पर ₹1.5 लाख से ₹2.5 लाख तक)',
        'पिछली कक्षा में न्यूनतम 50% या अधिक अंक',
        'NSP ऐप पर अनिवार्य आधार फेस ऑथेंटिकेशन (OTR)'
      ],
      bn: [
        'স্বীকৃত স্কুল, কলেজ বা বিশ্ববিদ্যালয়ের নিয়মিত ছাত্র বা ছাত্রী হতে হবে',
        'পারিবারিক বার্ষিক আয়ের নির্দিষ্ট সীমা (সাধারণত ₹১.৫ লাখ থেকে ₹২.৫ লাখের মধ্যে)',
        'পূর্ববর্তী পরীক্ষায় ন্যূনতম ৫০% নম্বর',
        'এনএসপি অ্যাপে আধার ওয়ান-টাইম রেজিস্ট্রেশন (OTR) সম্পন্ন করা'
      ],
      ta: [
        'அங்கீகரிக்கப்பட்ட பள்ளி, கல்லூரி அல்லது பல்கலைக்கழகத்தில் பயிலும் மாணவர்கள்',
        'முந்தைய வகுப்பில் குறைந்தது 50% மதிப்பெண்கள் பெற்றிருக்க வேண்டும்',
        'குடும்ப ஆண்டு வருமானம் திட்டம் குறித்த வரம்பிற்குள் இருக்க வேண்டும்'
]
    },
    documents: {
      en: [
        { id: 'sch_aadhaar', name: 'Student Aadhaar Card (Linked to DBT Bank Account)', required: true },
        { id: 'sch_marksheet', name: 'Previous Academic Year Marksheet', required: true },
        { id: 'sch_fee', name: 'Current Course Admission Fee Receipt & Student ID', required: true },
        { id: 'sch_income', name: 'Valid Competent Authority Income Certificate', required: true },
        { id: 'sch_caste', name: 'Caste / Community Certificate (for SC/ST/OBC/Minority schemes)', required: false }
      ],
      hi: [
        { id: 'sch_aadhaar', name: 'विद्यार्थी का आधार कार्ड (बैंक खाते से लिंक)', required: true },
        { id: 'sch_marksheet', name: 'पिछली कक्षा की अंकतालिका (Marksheet)', required: true },
        { id: 'sch_fee', name: 'वर्तमान कक्षा की प्रवेश शुल्क रसीद और कॉलेज आईडी', required: true },
        { id: 'sch_income', name: 'वैध आय प्रमाण पत्र', required: true },
        { id: 'sch_caste', name: 'जाति प्रमाण पत्र (आरक्षित श्रेणी के लिए)', required: false }
      ],
      bn: [
        { id: 'sch_aadhaar', name: 'ছাত্র/ছাত্রীর আধার কার্ড (ডিবিটি ব্যাংক অ্যাকাউন্টযুক্ত)', required: true },
        { id: 'sch_marksheet', name: 'পূর্ববর্তী পরীক্ষার মার্কশিট', required: true },
        { id: 'sch_fee', name: 'বর্তমান ক্লাসের ভর্তি রসিদ এবং স্টুডেন্ট আইডি', required: true },
        { id: 'sch_income', name: 'বৈধ ইনকাম সার্টিফিকেট', required: true },
        { id: 'sch_caste', name: 'কাস্ট বা সংখ্যালঘু শংসাপত্র (প্রযোজ্য ক্ষেত্রে)', required: false }
      ],
      ta: [
        {
                'id': 'sch_aadhaar',
                'name': 'மாணவரின் ஆதார் கார்டு',
                'required': true
        },
        {
                'id': 'sch_marksheet',
                'name': 'முந்தைய ஆண்டின் மதிப்பெண் சான்றிதழ்',
                'required': true
        },
        {
                'id': 'sch_inc',
                'name': 'செல்லுபடியாகும் பெற்றோர் வருமானச் சான்றிதழ்',
                'required': true
        },
        {
                'id': 'sch_bonafide',
                'name': 'பள்ளி/கல்லூரியின் போனாஃபைட் மாணவர் சான்றிதழ்',
                'required': true
        },
        {
                'id': 'sch_bank',
                'name': 'ஆதார் இணைக்கப்பட்ட மாணவரின் வங்கி கணக்குப் புத்தகம்',
                'required': true
        }
]
    },
    steps: {
      en: [
        { stepNumber: 1, title: 'Generate OTR on NSP Portal', description: 'Download NSP OTR App, complete Aadhaar Face-Authentication and obtain 14-digit OTR number.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 2, title: 'Choose Eligible Scheme', description: 'Log in to scholarships.gov.in. System auto-filters all schemes matching your class, caste, and income.', duration: '5 Mins', actionType: 'online' },
        { stepNumber: 3, title: 'Upload Academic & Income Proofs', description: 'Upload previous marksheet, fee receipt, income certificate, and bank details.', duration: '10 Mins', actionType: 'online' },
        { stepNumber: 4, title: 'Institute (INO) Verification', description: 'College / School Nodal Officer verifies your enrolment and original documents on portal.', duration: '7-15 Days', actionType: 'verification' },
        { stepNumber: 5, title: 'Ministry Merit List & DBT Payout', description: 'Ministry releases sanction order; scholarship amount is credited directly via PFMS DBT.', duration: 'Seasonal', actionType: 'online' }
      ],
      hi: [
        { stepNumber: 1, title: 'NSP ऐप पर OTR जनरेट करें', description: 'NSP ऐप डाउनलोड करें और आधार फेस ऑथेंटिकेशन पूरा करके 14-अंकीय OTR प्राप्त करें।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 2, title: 'पात्र छात्रवृत्ति योजना चुनें', description: 'scholarships.gov.in पर लॉगिन करें। आपकी योग्यता के अनुसार योजनाएं दिखेंगी।', duration: '5 मिनट', actionType: 'online' },
        { stepNumber: 3, title: 'दस्तावेज अपलोड करें', description: 'मार्कशीट, कॉलेज फीस रसीद और आय प्रमाण पत्र अपलोड करें।', duration: '10 मिनट', actionType: 'online' },
        { stepNumber: 4, title: 'संस्थान (स्कूल/कॉलेज) द्वारा सत्यापन', description: 'स्कूल या कॉलेज के नोडल अधिकारी दस्तावेजों की पुष्टि करते हैं।', duration: '7-15 दिन', actionType: 'verification' },
        { stepNumber: 5, title: 'डीबीटी द्वारा छात्रवृत्ति का भुगतान', description: 'स्वीकृति के बाद पीएफएमएस डीबीटी द्वारा राशि सीधे बैंक खाते में आ जाती है।', duration: 'सत्र अनुसार', actionType: 'online' }
      ],
      bn: [
        { stepNumber: 1, title: 'এনএসপি ওটিআর (OTR) তৈরি', description: 'এনএসপি অ্যাপে ফেস ভেরিফিকেশন করে ১৪-সংখ্যার ওটিআর নম্বর সংগ্রহ করুন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 2, title: 'উপযুক্ত স্কলারশিপ নির্বাচন', description: 'scholarships.gov.in-এ লগইন করুন। স্বয়ংক্রিয়ভাবে আপনার যোগ্য স্কলারশিপ দেখতে পাবেন।', duration: '৫ মিনিট', actionType: 'online' },
        { stepNumber: 3, title: 'মার্কশিট ও ইনকাম সার্টিফিকেট আপলোড', description: 'মার্কশিট, ফি রসিদ এবং ইনকাম সার্টিফিকেট আপলোড করুন।', duration: '১০ মিনিট', actionType: 'online' },
        { stepNumber: 4, title: 'শিক্ষা প্রতিষ্ঠান কর্তৃক যাচাই', description: 'স্কুল/কলেজের নোডাল অফিসার পোর্টাল থেকে নথি যাচাই করবেন।', duration: '৭-১৫ দিন', actionType: 'verification' },
        { stepNumber: 5, title: 'অনুমোদন ও সরাসরি ব্যাংক জমা', description: 'মন্ত্রণালয়ের অনুমোদনের পর পিএফএমএস ডিবিটির মাধ্যমে টাকা ব্যাংকে জমা হবে।', duration: 'নির্দিষ্ট সময়ে', actionType: 'online' }
      ],
      ta: [
        {
                'stepNumber': 1,
                'title': 'NSP போர்ட்டலில் ஓடிஆர்டி பதிவு',
                'description': 'scholarships.gov.in இல் ஆதார் OTP மூலம் OTR பதிவு செய்யவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 2,
                'title': 'உதவித்தொகை திட்டத்தைத் தேர்ந்தெடுக்கவும்',
                'description': 'உங்கள் தகுதிக்கு ஏற்ற திட்டத்தைத் தேர்ந்தெடுக்கவும்.',
                'duration': '5 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 3,
                'title': 'மதிப்பெண் & வருமானச் சான்றுகளைப் பதிவேற்றவும்',
                'description': 'மதிப்பெண் பட்டியல், வருமானச் சான்று மற்றும் போனாஃபைட் சான்றிதழைப் பதிவேற்றவும்.',
                'duration': '10 நிமிடங்கள்',
                'actionType': 'online'
        },
        {
                'stepNumber': 4,
                'title': 'பள்ளி/கல்லூரி சரிபார்ப்பு',
                'description': 'உங்கள் கல்வி நிறுவனம் ஆன்லைனில் விண்ணப்பத்தைச் சரிபார்க்கும்.',
                'duration': '5-10 நாட்கள்',
                'actionType': 'verification'
        },
        {
                'stepNumber': 5,
                'title': 'DBT மூலம் உதவித்தொகை வரவு',
                'description': 'அனுமதிக்குப் பின் உதவித்தொகை நேரடியாக வங்கி கணக்கில் வரவு வைக்கப்படும்.',
                'duration': 'கல்வியாண்டு',
                'actionType': 'delivery'
        }
]
    },
    timeline: {
      en: ['OTR Face Auth', 'Application Submission', 'Institute Verification', 'District / State Merit Scrutiny', 'Direct PFMS DBT Payout'],
      hi: ['ओटीआर फेस ऑथ', 'आवेदन सबमिट', 'कॉलेज सत्यापन', 'मेरिट लिस्ट जांच', 'बैंक में डीबीटी भुगतान'],
      bn: ['ওটিআর তৈরি', 'আবেদন জমা', 'কলেজ ভেরিফিকেশন', 'মেরিট স্ক্রুটিনি', 'ডিবিটি ব্যাংক জমা'],
      ta: [
        'OTR பதிவு',
        'திட்டம் தேர்வு',
        'சான்றுகள் பதிவேற்றம்',
        'கல்வி நிறுவனம் சரிபார்ப்பு',
        'DBT வங்கி வரவு'
]
    },
    faq: {
      en: [
        { question: 'Can a student apply for more than one scholarship on NSP?', answer: 'A student can apply for multiple eligible schemes, but as per Government guidelines, can receive financial disbursement for only ONE scholarship per academic year.' }
      ],
      hi: [
        { question: 'क्या एक छात्र एक से अधिक छात्रवृत्ति ले सकता है?', answer: 'आवेदन कई में कर सकते हैं, परंतु एक शैक्षणिक वर्ष में केवल एक ही छात्रवृत्ति की राशि प्राप्त हो सकती है।' }
      ],
      bn: [
        { question: 'একই সাথে একাধিক স্কলারশিপ পাওয়া যাবে?', answer: 'আবেদন করা গেলেও সরকারি নিয়মানুযায়ী বছরে যেকোনো একটি স্কলারশিপের টাকা পাওয়া যাবে।' }
      ],
      ta: [
        {
                'question': 'வங்கி கணக்கு ஆதாருடன் இணைக்கப்பட வேண்டுமா?',
                'answer': 'ஆம்! NSP உதவித்தொகை Aadhaar Seeding செய்யப்பட்ட வங்கி கணக்கிற்கு மட்டுமே DBT மூலம் அனுப்பப்படும்.'
        }
]
    },
    helpline: '0120-6619540 (NSP National Help Desk 24x7)'
  }
];

// Helper to find service by query matching
export function matchServiceByQuery(query: string): ServiceData | null {
  if (!query || query.trim().length === 0) return null;
  const q = query.toLowerCase().trim();

  // 1. Direct Keyword Match
  for (const service of SERVICES_DATA) {
    for (const keyword of service.keywords) {
      if (q.includes(keyword.toLowerCase())) {
        return service;
      }
    }
  }

  // 2. Fuzzy / Token Match
  const tokens = q.split(/\s+/);
  for (const service of SERVICES_DATA) {
    for (const token of tokens) {
      if (token.length > 3) {
        if (service.keywords.some(k => k.toLowerCase().includes(token))) {
          return service;
        }
      }
    }
  }

  return null;
}
