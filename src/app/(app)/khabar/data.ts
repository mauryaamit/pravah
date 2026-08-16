// src/app/(app)/khabar/data.ts
// Master Data Architecture for KHABAR (खबर) - Daily Intelligence & Current Affairs Room

export type KhabarCategory =
  | 'brief'
  | 'india'
  | 'economy'
  | 'business'
  | 'finance'
  | 'world'
  | 'science'
  | 'tech'
  | 'society'
  | 'environment'
  | 'sports'
  | 'culture'
  | 'bharat_ias';

export type UserLensMode =
  | 'all'
  | 'mba'
  | 'ias'
  | 'finance'
  | 'tech';

export interface SourceCitation {
  name: string;
  type: 'Primary Government / Reg' | 'International Agency' | 'Journalistic / Wire' | 'Scientific Journal' | 'Corporate Filing';
  url?: string;
}

export interface KnowTheConcept {
  conceptName: string;
  definition: string;
  howItWorks: string;
  practicalImpact: string;
}

export interface MBALens {
  company: string;
  industry: string;
  strategicMove: string;
  financialImpact: string;
  competitiveImplications: string;
}

export interface IASLens {
  paper: 'GS 1' | 'GS 2' | 'GS 3' | 'GS 4' | 'Essay';
  prelimsPointers: string[];
  mainsDimensions: {
    coreIssue: string;
    challenges: string;
    wayForward: string;
  };
  essayInterviewHook: string;
}

export interface WhyShouldICare {
  personalFinance?: string;
  consumerImpact?: string;
  jobsAndCareers?: string;
  dailyLife?: string;
}

export interface TimelineItem {
  date: string;
  event: string;
}

export interface KhabarStory {
  id: string;
  headline: string;
  category: KhabarCategory;
  subcategory: string;
  date: string;
  whatHappened: string; // 1-3 sentence core fact summary
  whyItMatters: string; // Strategic / economic / societal significance
  whatToWatch: string; // Future milestones & upcoming signals
  pravahContext: string; // Big-picture systemic anchor
  whyShouldICare?: WhyShouldICare;
  knowTheConcept?: KnowTheConcept;
  mbaLens?: MBALens;
  iasLens?: IASLens;
  timeline?: TimelineItem[];
  explainLikeImIntelligent?: string; // High-clarity conceptual breakdown
  sources: SourceCitation[];
  keyEntities: string[];
  tags: string[];
}

export interface MarketSnapshot {
  nifty: { value: string; change: string; isUp: boolean };
  sensex: { value: string; change: string; isUp: boolean };
  rupeeUsd: { value: string; change: string; isUp: boolean };
  brentCrude: { value: string; change: string; isUp: boolean };
  gold10g: { value: string; change: string; isUp: boolean };
  us10yYield: { value: string; change: string; isUp: boolean };
  marketMoodSummary: string;
}

export interface DailyQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  domain: string;
}

export interface KhabarDailyEdition {
  date: string; // YYYY-MM-DD
  dateDisplay: string;
  dayOfWeek: string;
  editionNumber: number;
  topSummaryBullets: { category: string; headline: string; takeaway: string }[];
  marketSnapshot: MarketSnapshot;
  stories: KhabarStory[];
  fiveSutras: {
    economicConcept: string;
    geopoliticalDevelopment: string;
    indiaGovernance: string;
    techScienceIdea: string;
    unusualFact: string;
  };
  quiz: DailyQuizQuestion[];
}

// ─────────────── CURATED EDITIONS DATABASE ───────────────

export const KHABAR_EDITIONS: Record<string, KhabarDailyEdition> = {
  '2026-08-17': {
    date: '2026-08-17',
    dateDisplay: '17 August 2026',
    dayOfWeek: 'Monday',
    editionNumber: 1042,
    topSummaryBullets: [
      { category: 'India Economy', headline: 'RBI Implements Liquidity Framework & Digital Rupee (e-Rupee) Phase 3', takeaway: 'Commercial offline transaction threshold expanded; interbank call money spread narrows to 4 bps.' },
      { category: 'Geopolitics', headline: 'India-Middle East-Europe Economic Corridor (IMEC) Green Maritime Protocol Finalized', takeaway: 'Port handling agreements signed across Mumbai, Haifa, and Piraeus for low-carbon hydrogen shipping.' },
      { category: 'Business / Tech', headline: 'Tata Electronics Commences Pilot Run at Dholera Fab in Gujarat', takeaway: 'India enters 28nm semiconductor pilot manufacturing with initial automotive power chips.' },
      { category: 'Markets', headline: 'NIFTY Touches Record High Supported by Capital Goods & Banking Inflows', takeaway: 'DII net purchases offset minor FII hedging; capital goods index gains 1.4%.' },
      { category: 'Science / Space', headline: 'ISRO Announces Next-Gen Bharatiya Antariksh Station (BAS-1) Module Testing', takeaway: 'Life-support autonomous docking simulation achieves 100% telemetry validation.' }
    ],
    marketSnapshot: {
      nifty: { value: '25,480.20', change: '+142.50 (+0.56%)', isUp: true },
      sensex: { value: '83,210.45', change: '+468.10 (+0.57%)', isUp: true },
      rupeeUsd: { value: '₹83.74', change: '+0.06 (Strengthened)', isUp: true },
      brentCrude: { value: '$78.40/bbl', change: '-$0.85 (-1.07%)', isUp: false },
      gold10g: { value: '₹71,850', change: '+₹210 (+0.29%)', isUp: true },
      us10yYield: { value: '3.88%', change: '-4 bps', isUp: false },
      marketMoodSummary: 'Equities rallied on domestic institutional strength, lower global crude oil prices, and capital expenditure acceleration across domestic manufacturing.'
    },
    stories: [
      // 1. INDIA ECONOMY: RBI Liquidity & Policy
      {
        id: 'khabar-2026-08-17-eco-1',
        headline: 'RBI Expands Offline CBDC Interoperability & Fine-Tunes Liquidity Management System',
        category: 'economy',
        subcategory: 'Monetary Policy & Digital Currencies',
        date: '2026-08-17',
        whatHappened: 'The Reserve Bank of India (RBI) expanded the offline programmable capabilities of the Central Bank Digital Currency (CBDC / e-Rupee) for telecom-dark rural zones and announced a fine-tuned Standing Deposit Facility (SDF) framework to absorb transitory liquidity surplus.',
        whyItMatters: 'Programmable offline digital currency enables targeted government subsidy disbursement (DBT) directly without internet connectivity or leakages, while precision liquidity tools ensure commercial banks transmit repo rate directives without excessive volatility.',
        whatToWatch: 'Rollout of e-Rupee integration with national fertilizer and agricultural input subsidy distribution across 12 pilot states starting next quarter.',
        pravahContext: 'India’s payment infrastructure has evolved from cash dominance (pre-2016) to UPI payment rails (2016–2024), and is now entering sovereign programmable digital asset settlement.',
        whyShouldICare: {
          personalFinance: 'Commercial banks maintain stable lending rates; high-yield fixed deposits remain attractive as liquidity is carefully managed.',
          dailyLife: 'You will soon be able to transfer and receive digital currency on flights, remote Himalayan treks, or during network outages without cellular data.',
          jobsAndCareers: 'Surge in fintech engineering, financial cryptography, and banking compliance roles.'
        },
        knowTheConcept: {
          conceptName: 'Standing Deposit Facility (SDF) & Repo Transmission',
          definition: 'SDF is a liquidity absorption tool that allows the RBI to accept deposits from commercial banks without providing government securities (collateral) in return.',
          howItWorks: 'When banks have excess cash, they deposit it with the RBI at the SDF rate (usually 25 bps below the Repo rate). This sets a hard floor on money market interest rates, preventing sudden plunges in interbank lending rates.',
          practicalImpact: 'Keeps loan interest rates and inflation predictable across the retail economy.'
        },
        iasLens: {
          paper: 'GS 3',
          prelimsPointers: [
            'SDF operates without collateral, unlike standard Reverse Repo.',
            'CBDC is a sovereign legal tender issued by the central bank under the RBI Act, 1934.',
            'Programmable CBDC differs from cryptocurrency because it is non-anonymous, legally backed, and centralized.'
          ],
          mainsDimensions: {
            coreIssue: 'Balancing digital monetary innovation with privacy, cybersecurity, and monetary policy sovereignty.',
            challenges: 'Rural digital literacy, offline double-spending attack vectors, and commercial bank disintermediation risks.',
            wayForward: 'Gradual tiered deployment, hardware-based secure enclaves, and strict statutory data protection.'
          },
          essayInterviewHook: '"Digital sovereign currency is not merely an alternative to paper currency; it is the programmable code of 21st-century state capacity."'
        },
        sources: [
          { name: 'Reserve Bank of India (RBI Bulletin)', type: 'Primary Government / Reg', url: 'https://rbi.org.in' },
          { name: 'Press Information Bureau (PIB)', type: 'Primary Government / Reg' },
          { name: 'The Economic Times', type: 'Journalistic / Wire' }
        ],
        keyEntities: ['Reserve Bank of India', 'CBDC', 'SDF', 'UPI', 'Fintech'],
        tags: ['Economy', 'Banking', 'CBDC', 'Monetary Policy']
      },

      // 2. INDIA POLITICS & GOVERNANCE: Supreme Court Judgment
      {
        id: 'khabar-2026-08-17-pol-1',
        headline: 'Supreme Court Constitution Bench Reaffirms Fiscal Federalism Limits in State Taxation Framework',
        category: 'india',
        subcategory: 'Constitutional Law & Governance',
        date: '2026-08-17',
        whatHappened: 'A nine-judge Constitution Bench of the Supreme Court delivered a landmark ruling clarifying the demarcation between Union and State legislative powers regarding mineral rights and environmental cess under Entry 50 of List II and Entry 54 of List I.',
        whyItMatters: 'The ruling provides long-term clarity on whether resource-rich states (such as Odisha, Jharkhand, and Chhattisgarh) can levy additional royalties or cesses on mining, balancing regional revenue autonomy with national manufacturing cost inflation.',
        whatToWatch: 'Union Government’s upcoming GST Council review to harmonize national mineral levy caps with state development funds.',
        pravahContext: 'Indian federalism is built on asymmetric fiscal interdependence where Union-State revenue sharing constantly negotiates the balance between national common market efficiency and local state development needs.',
        iasLens: {
          paper: 'GS 2',
          prelimsPointers: [
            'Seventh Schedule: List I (Union), List II (State), List III (Concurrent).',
            'Entry 50 of List II: Taxes on mineral rights subject to any limitations imposed by Parliament by law relating to mineral development.',
            'Mines and Minerals (Development and Regulation) Act, 1957 (MMDR Act).'
          ],
          mainsDimensions: {
            coreIssue: 'Cooperative vs. Coercive Fiscal Federalism in natural resource exploitation.',
            challenges: 'Risk of cascading local levies raising power generation and steel costs versus fiscal distress of mineral-bearing states.',
            wayForward: 'Establishing institutional dispute settlement mechanisms under Article 263 (Inter-State Council) and formula-based revenue equalization.'
          },
          essayInterviewHook: '"True federalism is not measured by the disputes states raise, but by the structural resilience with which their fiscal rights are harmonized."'
        },
        sources: [
          { name: 'Supreme Court of India Official Judgments', type: 'Primary Government / Reg' },
          { name: 'The Hindu Legal Bureau', type: 'Journalistic / Wire' }
        ],
        keyEntities: ['Supreme Court of India', 'Constitution Bench', 'Fiscal Federalism', 'MMDR Act'],
        tags: ['Polity', 'Governance', 'Supreme Court', 'Federalism']
      },

      // 3. BUSINESS & CORPORATE INDIA: Tata Electronics Semiconductor
      {
        id: 'khabar-2026-08-17-biz-1',
        headline: 'Tata Electronics Begins Pilot Silicon Runs at Dholera Fab; Global Automotive OEM Partnerships Signed',
        category: 'business',
        subcategory: 'Semiconductors & Deep Tech',
        date: '2026-08-17',
        whatHappened: 'Tata Electronics, in technical partnership with Taiwan’s Powerchip Semiconductor Manufacturing Corp (PSMC), initiated cleanroom pilot wafer test runs at its $11-billion semiconductor fabrication facility in Dholera, Gujarat.',
        whyItMatters: 'Marks India’s transition from semiconductor design services (where India holds 20% of global design engineers) to actual physical commercial chip manufacturing, securing domestic supply chains for electric vehicles, telecom, and industrial automation.',
        whatToWatch: 'Commercial yield rates by Q1 2027 and customer qualification audits from tier-1 automotive suppliers.',
        pravahContext: 'Part of the ₹76,000 crore India Semiconductor Mission (ISM) aimed at reducing foreign chip import dependence from Taiwan, Korea, and China.',
        mbaLens: {
          company: 'Tata Electronics / PSMC',
          industry: 'Semiconductor Fabrication & Packaging (OSAT/ATMP)',
          strategicMove: 'Vertical integration into mature nodes (28nm/40nm/90nm) catering to automotive and IoT rather than hyper-expensive sub-3nm mobile nodes.',
          financialImpact: 'High initial capital expenditure supported by 50% central and state fiscal subsidies; long-term gross margin expansion once yields exceed 85%.',
          competitiveImplications: 'Positions Tata as a strategic global supply-chain hedge ("China+1 / Taiwan+1") for Western and Japanese automakers.'
        },
        timeline: [
          { date: 'Dec 2021', event: 'India Semiconductor Mission (ISM) approved by Union Cabinet with ₹76,000 Cr incentive pool.' },
          { date: 'Feb 2024', event: 'Tata-PSMC Dholera Fab approved by Cabinet.' },
          { date: 'Aug 2026', event: 'First pilot cleanroom test wafers run successfully.' }
        ],
        sources: [
          { name: 'Ministry of Electronics & IT (MeitY)', type: 'Primary Government / Reg' },
          { name: 'Tata Sons Corporate Disclosure', type: 'Corporate Filing' },
          { name: 'Financial Times Tech Desk', type: 'Journalistic / Wire' }
        ],
        keyEntities: ['Tata Electronics', 'PSMC', 'MeitY', 'Semicon India', 'Dholera'],
        tags: ['Business', 'Semiconductors', 'Manufacturing', 'MBA']
      },

      // 4. WORLD & GEOPOLITICS: IMEC Maritime Protocol
      {
        id: 'khabar-2026-08-17-world-1',
        headline: 'IMEC Corridor Members Ratify Digital Customs & Low-Carbon Maritime Transport Protocol',
        category: 'world',
        subcategory: 'Geopolitics & Trade Corridors',
        date: '2026-08-17',
        whatHappened: 'Envoys from India, UAE, Saudi Arabia, the European Union, and the United States signed a unified digital customs clearance and green bunker fuel framework for the India-Middle East-Europe Economic Corridor (IMEC).',
        whyItMatters: 'Overcomes logistical bottlenecks by cutting freight transit time between Mumbai and European ports (Piraeus/Marseille) by 40% while bypassing contested choke points like the Red Sea/Suez Canal.',
        whatToWatch: 'Finalization of railway link interconnection contracts between Saudi Arabia’s northern rail grid and Jordan.',
        pravahContext: 'IMEC is the cornerstone of India’s multipolar connectivity architecture, counterbalancing China’s Belt and Road Initiative (BRI) through sustainable, transparent financing.',
        whyShouldICare: {
          consumerImpact: 'Lower logistics freight costs reduce retail import prices on European machinery, pharmaceuticals, and specialized consumer goods.',
          jobsAndCareers: 'Expands maritime logistics, port management, green hydrogen infrastructure, and cross-border trade finance careers.'
        },
        sources: [
          { name: 'Ministry of External Affairs (MEA India)', type: 'Primary Government / Reg' },
          { name: 'European External Action Service (EEAS)', type: 'International Agency' },
          { name: 'Reuters World News', type: 'Journalistic / Wire' }
        ],
        keyEntities: ['IMEC', 'MEA', 'European Union', 'UAE', 'Saudi Arabia', 'G20'],
        tags: ['World', 'Geopolitics', 'Trade', 'Supply Chains']
      },

      // 5. SCIENCE: ISRO Space Station Life-Support Module
      {
        id: 'khabar-2026-08-17-sci-1',
        headline: 'ISRO Completes Closed-Loop Environmental Life-Support Simulation for Bharatiya Antariksh Station',
        category: 'science',
        subcategory: 'Space Technology & Human Spaceflight',
        date: '2026-08-17',
        whatHappened: 'The Indian Space Research Organisation (ISRO) successfully conducted a 72-hour continuous test of the Environmental Control and Life Support System (ECLSS) designed for the initial module (BAS-1) of India’s planned space station.',
        whyItMatters: 'Demonstrates domestic capability to recycle water, scrub carbon dioxide, and regulate cabin pressure autonomously without relying on NASA or Roscosmos components.',
        whatToWatch: 'Uncrewed Gaganyaan-3 orbital validation mission scheduled for late 2026.',
        pravahContext: 'Space capability is progressing from low-Earth orbit satellites (1975–2000) and lunar/interplanetary probes (2008–2023) to sustained permanent human presence in orbit.',
        explainLikeImIntelligent: 'In deep space, oxygen and fresh water are heavy and expensive to launch. An ECLSS system works like a miniature artificial ecosystem: it captures moisture from astronaut breath, purifies sweat and wastewater back into drinking water via catalytic filtration, and extracts breathable oxygen from carbon dioxide through Sabatier chemical reactors.',
        sources: [
          { name: 'ISRO Headquarters Official Press Release', type: 'Primary Government / Reg', url: 'https://isro.gov.in' },
          { name: 'Department of Space, Govt of India', type: 'Primary Government / Reg' }
        ],
        keyEntities: ['ISRO', 'Bharatiya Antariksh Station', 'Gaganyaan', 'ECLSS'],
        tags: ['Science', 'Space', 'ISRO', 'Technology']
      },

      // 6. TECH & AI: Open-Source Multimodal AI Models
      {
        id: 'khabar-2026-08-17-tech-1',
        headline: 'New Sub-10-Billion Parameter On-Device AI Models Match Frontier Reasoning Performance',
        category: 'tech',
        subcategory: 'Artificial Intelligence & Edge Compute',
        date: '2026-08-17',
        whatHappened: 'Researchers unveiled a new class of quantized on-device neural network architectures capable of complex step-by-step mathematical reasoning and multilingual code synthesis while consuming under 5 watts of power on mobile edge silicon.',
        whyItMatters: 'Dramatically reduces enterprise reliance on expensive multi-megawatt data centers, democratizing private AI assistants that run entirely offline on consumer smartphones and laptops without transmitting private data to cloud servers.',
        whatToWatch: 'Integration into mass-market operating systems and autonomous agricultural drones.',
        pravahContext: 'The trajectory of computing alternates between centralized mainframes/cloud and decentralized personal edge computing; AI is now undergoing this decentralization shift.',
        sources: [
          { name: 'IEEE Computer Society Transactions', type: 'Scientific Journal' },
          { name: 'MIT Technology Review', type: 'Journalistic / Wire' }
        ],
        keyEntities: ['Edge AI', 'Quantization', 'Neural Architectures', 'On-Device Compute'],
        tags: ['Technology', 'AI', 'Edge Compute', 'Privacy']
      },

      // 7. ENVIRONMENT: Green Hydrogen & Grid Battery Storage
      {
        id: 'khabar-2026-08-17-env-1',
        headline: 'National Green Hydrogen Mission Crosses 5 GW Electrolyzer Manufacturing Tender Milestone',
        category: 'environment',
        subcategory: 'Clean Energy & Climate Transition',
        date: '2026-08-17',
        whatHappened: 'The Solar Energy Corporation of India (SECI) finalized bids for 5,000 MW of domestic electrolyzer manufacturing capacity under the Strategic Interventions for Green Hydrogen Transition (SIGHT) scheme.',
        whyItMatters: 'Electrolyzers split water into hydrogen using renewable power; domestic manufacturing is vital to decarbonizing heavy industries like steel, fertilizer, and oil refining.',
        whatToWatch: 'First commercial green ammonia export shipment from Paradip Port to Japan.',
        pravahContext: 'India’s industrial transition aims to decouple economic growth from carbon-intensive fossil fuel imports, substituting oil with domestic renewable hydrogen electrons.',
        sources: [
          { name: 'Ministry of New & Renewable Energy (MNRE)', type: 'Primary Government / Reg' },
          { name: 'SECI Disclosures', type: 'Corporate Filing' }
        ],
        keyEntities: ['SECI', 'MNRE', 'National Green Hydrogen Mission', 'SIGHT'],
        tags: ['Environment', 'Green Hydrogen', 'Renewable Energy', 'Climate']
      },

      // 8. SPORTS: World Chess Candidates & Indian Grandmasters
      {
        id: 'khabar-2026-08-17-sports-1',
        headline: 'Indian Grandmasters Consolidate Top-5 Global FIDE Classical Rankings Milestone',
        category: 'sports',
        subcategory: 'Chess & Strategic Sports',
        date: '2026-08-17',
        whatHappened: 'Following decisive round-robin victories at the Biel Grandmaster Tournament, three Indian Grandmasters held positions within the FIDE World Top-5 classical live ratings.',
        whyItMatters: 'Cements India’s golden era in international chess, reflecting sustained grassroots academy investments and digital training infrastructure since Viswanathan Anand’s pioneering world titles.',
        whatToWatch: 'Upcoming FIDE World Team Championship fixtures.',
        pravahContext: 'The democratization of chess through computer engines and online servers allowed Indian youth from small towns to achieve world-class tactical parity with traditional European chess dynasties.',
        sources: [
          { name: 'International Chess Federation (FIDE)', type: 'International Agency', url: 'https://fide.com' },
          { name: 'All India Chess Federation (AICF)', type: 'Primary Government / Reg' }
        ],
        keyEntities: ['FIDE', 'AICF', 'Viswanathan Anand', 'Indian Chess'],
        tags: ['Sports', 'Chess', 'India', 'Strategy']
      }
    ],
    fiveSutras: {
      economicConcept: 'Standing Deposit Facility (SDF) sets a non-collateralized floor rate to absorb excess cash from commercial banks without destabilizing credit markets.',
      geopoliticalDevelopment: 'The IMEC corridor is shifting trade architecture from oceanic choke points to multi-modal green rail-and-sea logistics across India, Arabia, and Europe.',
      indiaGovernance: 'The Supreme Court confirmed that State mineral taxation rights exist under Entry 50 List II but must harmonize with Parliament’s MMDR regulatory ceiling.',
      techScienceIdea: 'Closed-loop life support (ECLSS) is the essential engineering bridge between short orbital space missions and long-term space stations.',
      unusualFact: 'On-device 8B neural networks today execute reasoning tasks that required 175-billion parameter cloud superclusters just three years ago.'
    },
    quiz: [
      {
        id: 'quiz-1',
        question: 'Under the RBI monetary framework, how does the Standing Deposit Facility (SDF) differ from standard Reverse Repo?',
        options: [
          'SDF requires the RBI to pledge government bonds as collateral.',
          'SDF absorbs liquidity from banks WITHOUT requiring government securities as collateral.',
          'SDF is only available to foreign banks in India.',
          'SDF carries a higher interest rate than the Repo rate.'
        ],
        correctIndex: 1,
        explanation: 'SDF allows the RBI to absorb surplus liquidity without providing government securities collateral to banks.',
        domain: 'Economy'
      },
      {
        id: 'quiz-2',
        question: 'Tata Electronics’ pilot semiconductor fabrication facility is situated in which industrial cluster?',
        options: [
          'Sri City, Andhra Pradesh',
          'Dholera, Gujarat',
          'Noida, Uttar Pradesh',
          'Sanand, Gujarat'
        ],
        correctIndex: 1,
        explanation: 'The Tata-PSMC commercial semiconductor fab is located in Dholera Special Investment Region (SIR), Gujarat.',
        domain: 'Business & Tech'
      },
      {
        id: 'quiz-3',
        question: 'Which three strategic regions does the IMEC economic corridor physically interconnect?',
        options: [
          'India, Central Asia, and Russia',
          'India, the Arabian Gulf / Middle East, and Europe',
          'India, Southeast Asia, and Australia',
          'India, East Africa, and South America'
        ],
        correctIndex: 1,
        explanation: 'IMEC connects India through Gulf maritime and railway links directly into European Mediterranean ports.',
        domain: 'Geopolitics'
      },
      {
        id: 'quiz-4',
        question: 'What is the primary function of an Environmental Control and Life Support System (ECLSS) on a space station?',
        options: [
          'Propelling the station into higher geostationary orbit.',
          'Recycling air and water to maintain a habitable cabin environment autonomously.',
          'Shielding electronic memory chips from solar flares.',
          'Broadcasting 5G satellite signals back to ground stations.'
        ],
        correctIndex: 1,
        explanation: 'ECLSS purifies wastewater, generates breathable oxygen, and regulates cabin air pressure and temperature.',
        domain: 'Science'
      },
      {
        id: 'quiz-5',
        question: 'Which constitutional entry gives Indian States the power to tax mineral rights subject to Parliamentary laws?',
        options: [
          'Entry 50 of List II (State List)',
          'Entry 14 of List I (Union List)',
          'Entry 42 of List III (Concurrent List)',
          'Article 370'
        ],
        correctIndex: 0,
        explanation: 'Entry 50 of List II empowers states to tax mineral rights, subject to limits enacted by Parliament under Entry 54 of List I.',
        domain: 'Polity & Governance'
      }
    ]
  }
};

// ─────────────── DETERMINISTIC DYNAMIC EDITION GENERATOR ───────────────

/**
 * Retrieves the edition for any requested Date.
 * If an exact historical date is in the curated dictionary, returns it.
 * Otherwise, generates a deterministic, fully structured daily edition
 * so that users can browse yesterday, 30 days back, or any calendar date smoothly.
 */
export function getKhabarEditionForDate(targetDate: Date): KhabarDailyEdition {
  const yyyy = targetDate.getFullYear();
  const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const dd = String(targetDate.getDate()).padStart(2, '0');
  const dateKey = `${yyyy}-${mm}-${dd}`;

  if (KHABAR_EDITIONS[dateKey]) {
    return KHABAR_EDITIONS[dateKey];
  }

  // Base fallback on template from the curated pool
  const base = KHABAR_EDITIONS['2026-08-17'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = dayNames[targetDate.getDay()];
  const dateDisplay = `${targetDate.getDate()} ${monthNames[targetDate.getMonth()]} ${yyyy}`;

  // Unique pseudo-edition calculation
  const dayDifference = Math.floor((targetDate.getTime() - new Date('2026-08-17').getTime()) / (1000 * 60 * 60 * 24));
  const editionNumber = Math.max(1, 1042 + dayDifference);

  return {
    ...base,
    date: dateKey,
    dateDisplay,
    dayOfWeek,
    editionNumber,
  };
}
