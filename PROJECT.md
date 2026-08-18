# NagrikAI (नागरिक AI / নাগরিক AI)
> **"Government services, simplified."**

A multilingual AI assistant and interactive guided workflow navigator designed for Indian citizens to easily understand government services, calculate document readiness, check eligibility, and navigate multi-step application procedures in English, Hindi, and Bengali.

---

## 1. Product Purpose & Problem Solved
- **The Problem**: Navigating Indian government portals (Passport Seva, UIDAI, Parivahan, ECI, PM-KISAN, Ayushman Bharat, etc.) is overwhelming for millions of citizens due to fragmented portals, convoluted bureaucratic jargon, linguistic barriers, and unclear document requirements.
- **The Solution**: NagrikAI acts as a single, conversational civic intelligence front door. Citizens can ask in their native language and receive concise, structured answers, interactive document checklists with alternative proof recommendations, turnaround times, fees, and an end-to-end guided application navigator.

---

## 2. MVP Scope (Hackathon Prototype)
- **Zero API Dependency / Deterministic Intelligence**: Uses structured knowledge base schemas and token matching for instant, 100% reliable hackathon demonstrations without latency or external outages.
- **Multilingual Support**: Real-time switching between **English**, **हिंदी (Hindi)**, and **বাংলা (Bengali)** across all UI elements, suggested queries, and service guidance.
- **Interactive Document Readiness Score Tracker**: Live percentage scoring based on user-ticked physical and digital documents with alternative acceptable proof tips.
- **5-Stage Interactive Guided Application Flow**:
  1. Eligibility Self-Assessment
  2. Document Audit & Verification
  3. Applicant Profile & Prefill
  4. Kendra / Center & Time Slot Reservation
  5. Application Confirmation, Printable Official Dossier PDF, and QR Pass
- **Accessibility & Voice Simulation**: High-contrast mode, text size adjustment, simulated speech recognition audio waveforms, and browser Web Speech audio readout.
- **Emergency Helpline Directory**: 24x7 toll-free directory (112, 1947, 1950, 1930, 14555, 14567, etc.).

---

## 3. Supported 12 Mock Services
1. **Fresh Passport Application (Normal & Tatkaal)** — Ministry of External Affairs (CPV)
2. **Lost Aadhaar Retrieval & Official PVC Reprint** — UIDAI (myAadhaar)
3. **New PAN Card Application (Form 49A & Instant e-PAN)** — Income Tax Dept / NSDL
4. **New Voter ID Registration & e-EPIC (Form 6)** — Election Commission of India (ECI)
5. **Driving Licence Renewal & Faceless RTO** — MoRTH (Parivahan Sarathi)
6. **Birth Certificate Registration & Download** — Civil Registration System (CRS)
7. **Income Certificate (e-District / Revenue)** — State Revenue Department
8. **Caste / Community Certificate (SC / ST / OBC / NCL)** — Backward Classes Welfare
9. **PM-KISAN Samman Nidhi Scheme (₹6,000 / Year DBT)** — Ministry of Agriculture
10. **Ayushman Bharat PM-JAY (₹5 Lakh Free Cashless Cover)** — National Health Authority
11. **Senior Citizen ID Card & Welfare (Age 60+)** — Ministry of Social Justice
12. **National & State Government Scholarships (NSP Portal)** — Ministry of Education

---

## 4. Current Frontend Architecture
```
nagrik-ai/
├── public/
│   └── favicon.svg              # Indian civic emblem & AI crest
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Brand, tricolor accent, language switcher, accessibility menu
│   │   ├── HeroArea.tsx         # Search prompt, voice trigger, category filters, suggested queries
│   │   ├── ServiceResponseCard.tsx # Structured card: source badge, docs meter, timeline, audio readout
│   │   ├── GuidedWorkflowModal.tsx # 5-stage interactive application navigator & printable QR pass
│   │   ├── ServicesDirectoryModal.tsx # 12-services catalog browser & instant loader
│   │   ├── EmergencyHelplinesModal.tsx # National citizen 24x7 helplines
│   │   ├── VoiceWaveformModal.tsx # Simulated speech recognition visualizer
│   │   └── NotFoundCard.tsx     # Graceful fallback & popular services selector
│   ├── data/
│   │   ├── servicesData.ts      # 12 services multilingual knowledge base & matcher
│   │   └── translations.ts      # En/Hi/Bn strings & emergency helpline numbers
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Root state orchestration & smooth transitions
│   ├── index.css                # Custom civic-tech tokens & print styles
│   └── main.tsx                 # React DOM mount point
├── PROJECT.md                   # Project documentation
├── tailwind.config.js           # Theme extensions (colors, fonts, animations)
└── package.json
```

---

## 5. Future Production Roadmap (AI + RAG + Digital Public Infrastructure)
1. **Multilingual RAG Knowledge Engine**: Ingest official gazettes, citizen charters, and State government circulars into a vector database (e.g. Pinecone/ChromaDB) with Hybrid Search (BM25 + Dense Embeddings).
2. **Fine-Tuned Indic LLM**: Use models like Sarvam Indic LLMs / Gemini 1.5 Flash for nuanced understanding of 22 official Indian languages and colloquial dialects.
3. **DigiLocker & India Stack Integration**: Auto-fetch citizen documents (Aadhaar, 10th marksheet, driving licence) directly via DigiLocker API consent framework with zero manual uploads.
4. **API Integration with Umang & State e-District**: Real-time application status tracking and direct one-click form submission to backend government APIs.
5. **Speech-to-Speech (Bhashini API)**: Integration with Digital India Bhashini for real-time multilingual voice conversations for low-literacy citizens.
