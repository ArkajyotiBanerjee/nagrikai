import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, '../src/data/servicesData.ts');

let content = fs.readFileSync(targetPath, 'utf8');

const tamilMap = {
  'senior-citizen': {
    department: 'சமூக நீதி மற்றும் அதிகாரமளித்தல் அமைச்சகம்',
    processingTime: '5–10 வேலை நாட்கள் (டிஜிட்டல் மூத்த குடிமக்கள் கார்டு)',
    fee: '100% இலவசம்',
    title: 'மூத்த குடிமக்கள் அடையாள அட்டை & நலத்திட்டங்கள் (வயது 60+)',
    badge: 'சிறப்பு குடிமக்கள் சலுகைகள் & முன்னுரிமை',
    shortSummary: '60 வயது மற்றும் அதற்கு மேற்பட்ட இந்தியக் குடிமக்கள் அதிகாரப்பூர்வ மூத்த குடிமக்கள் அடையாள அட்டையைப் பெறலாம். இதன் மூலம் முதியோர் ஓய்வூதியம், மருத்துவமனை முன்னுரிமை, பயணச் சலுகைகள் மற்றும் வங்கி FD கூடுதல் வட்டி பெறலாம்.',
    keywords: ['மூத்த குடிமக்கள்', 'முதியோர் அட்டை', 'மூத்த குடிமகன் சான்றிதழ்', 'Senior Citizen'],
    eligibility: [
      'இந்தியக் குடிமகனாக இருக்க வேண்டும்',
      'விண்ணப்பிக்கும் தேதியில் 60 வயது பூர்த்தியடைந்திருக்க வேண்டும்',
      'விண்ணப்பிக்கும் மாநிலத்தின் நிரந்தர வசிப்பிடவாசியாக இருக்க வேண்டும்'
    ],
    documents: [
      { id: 'sc_age', name: 'வயதுச் சான்று (ஆதார் கார்டு / வாக்காளர் அட்டை / பான் கார்டு)', required: true },
      { id: 'sc_addr', name: 'முகவரிச் சான்று (ஆதார் / மின்சாரக் கட்டணம் / ரேஷன் கார்டு)', required: true },
      { id: 'sc_blood', name: 'இரத்த வகை அறிக்கை & அவசர தொடர்பு எண்கள்', required: true, note: 'கார்டில் அச்சிடப்படும்' },
      { id: 'sc_photo', name: 'இரண்டு பாஸ்போர்ட் அளவு புகைப்படங்கள்', required: true }
    ],
    steps: [
      { stepNumber: 1, title: 'மாநில சமூக நல போர்ட்டலுக்குச் செல்லவும்', description: 'மாநில சமூக நல போர்ட்டல் அல்லது e-District போர்ட்டலில் படிவத்தைத் திறக்கவும்.', duration: '2 நிமிடங்கள்', actionType: 'online' },
      { stepNumber: 2, title: 'சுய மற்றும் மருத்துவ விவரங்களை பூர்த்தி செய்யவும்', description: 'பெயர், பிறந்த தேதி, இரத்த வகை மற்றும் அவசர தொடர்பு விவரங்களை உள்ளிடவும்.', duration: '5 நிமிடங்கள்', actionType: 'online' },
      { stepNumber: 3, title: 'வயது & முகவரிச் சான்றுகளைப் பதிவேற்றவும்', description: 'ஆதார் கார்டு மற்றும் வண்ணப் புகைப்படத்தைப் பதிவேற்றவும்.', duration: '3 நிமிடங்கள்', actionType: 'online' },
      { stepNumber: 4, title: 'சமூக நல அலுவலர் சரிபார்ப்பு', description: 'மாவட்ட சமூக நலத் துறை விண்ணப்பத்தைச் சரிபார்த்து ஒப்புதல் அளிக்கும்.', duration: '3-5 நாட்கள்', actionType: 'verification' },
      { stepNumber: 5, title: 'டிஜிட்டல் கார்டு பதிவிறக்கம்', description: 'QR கோடுடன் கூடிய மூத்த குடிமக்கள் கார்டைப் பதிவிறக்கவும்.', duration: 'உடனடி', actionType: 'online' }
    ],
    timeline: ['ஆன்லைன் விண்ணப்பம்', 'வயதுச் சான்று பதிவேற்றம்', 'அலுவலர் சரிபார்ப்பு', 'கார்டு அனுமதி', 'டிஜிட்டல் கார்டு பதிவிறக்கம்'],
    faq: [
      { question: 'மூத்த குடிமக்களுக்கான தேசிய உதவி எண் என்ன?', answer: '14567 (Elderline) — மூத்த குடிமக்களுக்கான 24x7 இலவச தேசிய உதவி எண்.' }
    ]
  },

  'scholarship': {
    department: 'மத்திய கல்வி அமைச்சகம் & தேசிய உதவித்தொகை போர்ட்டல் (NSP)',
    processingTime: 'கல்வியாண்டுதோறும் (நேரடி பணப் பரிமாற்றம் DBT)',
    fee: '100% இலவசம்',
    title: 'தேசிய & மாநில அரசு உதவித்தொகை (NSP போர்ட்டல்)',
    badge: 'பள்ளி, கல்லூரி & உயர் கல்வி உதவித்தொகை',
    shortSummary: 'தேசிய உதவித்தொகை போர்ட்டல் (NSP) மூலம் பள்ளி, கல்லூரி மற்றும் ஆராய்ச்சி படிக்கும் மாணவர்களுக்கு 100 க்கும் மேற்பட்ட மத்திய மற்றும் மாநில அரசின் கல்வி உதவித்தொகை நேரடியாக வங்கி கணக்கில் வழங்கப்படுகிறது.',
    keywords: ['உதவித்தொகை', 'கல்வி உதவித்தொகை', 'NSP', 'scholarship'],
    eligibility: [
      'அங்கீகரிக்கப்பட்ட பள்ளி, கல்லூரி அல்லது பல்கலைக்கழகத்தில் பயிலும் மாணவர்கள்',
      'முந்தைய வகுப்பில் குறைந்தது 50% மதிப்பெண்கள் பெற்றிருக்க வேண்டும்',
      'குடும்ப ஆண்டு வருமானம் திட்டம் குறித்த வரம்பிற்குள் இருக்க வேண்டும்'
    ],
    documents: [
      { id: 'sch_aadhaar', name: 'மாணவரின் ஆதார் கார்டு', required: true },
      { id: 'sch_marksheet', name: 'முந்தைய ஆண்டின் மதிப்பெண் சான்றிதழ்', required: true },
      { id: 'sch_inc', name: 'செல்லுபடியாகும் பெற்றோர் வருமானச் சான்றிதழ்', required: true },
      { id: 'sch_bonafide', name: 'பள்ளி/கல்லூரியின் போனாஃபைட் மாணவர் சான்றிதழ்', required: true },
      { id: 'sch_bank', name: 'ஆதார் இணைக்கப்பட்ட மாணவரின் வங்கி கணக்குப் புத்தகம்', required: true }
    ],
    steps: [
      { stepNumber: 1, title: 'NSP போர்ட்டலில் ஓடிஆர்டி பதிவு', description: 'scholarships.gov.in இல் ஆதார் OTP மூலம் OTR பதிவு செய்யவும்.', duration: '5 நிமிடங்கள்', actionType: 'online' },
      { stepNumber: 2, title: 'உதவித்தொகை திட்டத்தைத் தேர்ந்தெடுக்கவும்', description: 'உங்கள் தகுதிக்கு ஏற்ற திட்டத்தைத் தேர்ந்தெடுக்கவும்.', duration: '5 நிமிடங்கள்', actionType: 'online' },
      { stepNumber: 3, title: 'மதிப்பெண் & வருமானச் சான்றுகளைப் பதிவேற்றவும்', description: 'மதிப்பெண் பட்டியல், வருமானச் சான்று மற்றும் போனாஃபைட் சான்றிதழைப் பதிவேற்றவும்.', duration: '10 நிமிடங்கள்', actionType: 'online' },
      { stepNumber: 4, title: 'பள்ளி/கல்லூரி சரிபார்ப்பு', description: 'உங்கள் கல்வி நிறுவனம் ஆன்லைனில் விண்ணப்பத்தைச் சரிபார்க்கும்.', duration: '5-10 நாட்கள்', actionType: 'verification' },
      { stepNumber: 5, title: 'DBT மூலம் உதவித்தொகை வரவு', description: 'அனுமதிக்குப் பின் உதவித்தொகை நேரடியாக வங்கி கணக்கில் வரவு வைக்கப்படும்.', duration: 'கல்வியாண்டு', actionType: 'delivery' }
    ],
    timeline: ['OTR பதிவு', 'திட்டம் தேர்வு', 'சான்றுகள் பதிவேற்றம்', 'கல்வி நிறுவனம் சரிபார்ப்பு', 'DBT வங்கி வரவு'],
    faq: [
      { question: 'வங்கி கணக்கு ஆதாருடன் இணைக்கப்பட வேண்டுமா?', answer: 'ஆம்! NSP உதவித்தொகை Aadhaar Seeding செய்யப்பட்ட வங்கி கணக்கிற்கு மட்டுமே DBT மூலம் அனுப்பப்படும்.' }
    ]
  }
};

Object.keys(tamilMap).forEach(svcId => {
  const data = tamilMap[svcId];
  
  const svcPos = content.indexOf(`id: '${svcId}'`);
  if (svcPos === -1) {
    console.error(`Service ${svcId} not found`);
    return;
  }
  
  const nextSvcPos = content.indexOf(`id: '`, svcPos + 20);
  const endPos = nextSvcPos !== -1 ? nextSvcPos : content.length;
  
  let svcBlock = content.slice(svcPos, endPos);
  
  // 1. Add ta to department
  svcBlock = svcBlock.replace(
    /(department:\s*\{[\s\S]*?bn:\s*'.*?')/,
    `$1,\n      ta: '${data.department}'`
  );
  
  // 2. Add ta to processingTime
  svcBlock = svcBlock.replace(
    /(processingTime:\s*\{[\s\S]*?bn:\s*'.*?')/,
    `$1,\n      ta: '${data.processingTime}'`
  );

  // 3. Add ta to fee
  svcBlock = svcBlock.replace(
    /(fee:\s*\{[\s\S]*?bn:\s*'.*?')/,
    `$1,\n      ta: '${data.fee}'`
  );

  // 4. Add keywords
  const kwFormatted = data.keywords.map(k => `'${k}'`).join(', ');
  svcBlock = svcBlock.replace(
    /(keywords:\s*\[[\s\S]*?)(\n\s*\])/,
    `$1,\n      ${kwFormatted}$2`
  );

  // 5. Add ta to title
  svcBlock = svcBlock.replace(
    /(title:\s*\{[\s\S]*?bn:\s*'.*?')/,
    `$1,\n      ta: '${data.title}'`
  );

  // 6. Add ta to badge
  svcBlock = svcBlock.replace(
    /(badge:\s*\{[\s\S]*?bn:\s*'.*?')/,
    `$1,\n      ta: '${data.badge}'`
  );

  // 7. Add ta to shortSummary
  svcBlock = svcBlock.replace(
    /(shortSummary:\s*\{[\s\S]*?bn:\s*'.*?')/,
    `$1,\n      ta: '${data.shortSummary.replace(/'/g, "\\'")}'`
  );

  // 8. Add ta to eligibility
  const eligStr = JSON.stringify(data.eligibility, null, 8).replace(/"/g, "'");
  svcBlock = svcBlock.replace(
    /(eligibility:\s*\{[\s\S]*?bn:\s*\[[\s\S]*?\])(\n\s*\})/,
    `$1,\n      ta: ${eligStr}$2`
  );

  // 9. Add ta to documents
  const docsStr = JSON.stringify(data.documents, null, 8).replace(/"/g, "'");
  svcBlock = svcBlock.replace(
    /(documents:\s*\{[\s\S]*?bn:\s*\[[\s\S]*?\])(\n\s*\})/,
    `$1,\n      ta: ${docsStr}$2`
  );

  // 10. Add ta to steps
  const stepsStr = JSON.stringify(data.steps, null, 8).replace(/"/g, "'");
  svcBlock = svcBlock.replace(
    /(steps:\s*\{[\s\S]*?bn:\s*\[[\s\S]*?\])(\n\s*\})/,
    `$1,\n      ta: ${stepsStr}$2`
  );

  // 11. Add ta to timeline
  const timeStr = JSON.stringify(data.timeline, null, 8).replace(/"/g, "'");
  svcBlock = svcBlock.replace(
    /(timeline:\s*\{[\s\S]*?bn:\s*\[[\s\S]*?\])(\n\s*\})/,
    `$1,\n      ta: ${timeStr}$2`
  );

  // 12. Add ta to faq
  const faqStr = JSON.stringify(data.faq, null, 8).replace(/"/g, "'");
  svcBlock = svcBlock.replace(
    /(faq:\s*\{[\s\S]*?bn:\s*\[[\s\S]*?\])(\n\s*\})/,
    `$1,\n      ta: ${faqStr}$2`
  );

  content = content.slice(0, svcPos) + svcBlock + content.slice(endPos);
});

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated senior-citizen and scholarship in servicesData.ts!');
