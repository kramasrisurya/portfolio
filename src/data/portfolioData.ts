export interface Project {
  id: string;
  rank: string;
  title: string;
  headline: string;
  category: string;
  tier: string;
  status: string;
  description: string;
  impactMetrics: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  architectureFlow: {
    step: string;
    label: string;
    detail: string;
  }[];
}

export interface AdditionalProject {
  id: string;
  rank: string;
  title: string;
  headline: string;
  category: string;
  tier: string;
  status: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Hackathon {
  id: string;
  title: string;
  organization: string;
  semester: string;
  placement: string;
  year: string;
  projectFocus: string;
  description: string;
  badgeColor: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: string;
}

export interface JourneyMilestone {
  date: string;
  title: string;
  role: string;
  summary: string;
  tag: string;
}

export const PROFILE = {
  name: "Rama Sri Surya",
  title: "AI & Autonomous Systems Engineer",
  tagline: "Building deliberative multi-agent reasoning architectures, spatial computer vision pipelines, and production GenAI.",
  location: "Visakhapatnam / Kollam, India",
  email: "kramasrisurya@gmail.com",
  phone: "+91 7396339936",
  github: "https://github.com/kramasrisurya",
  linkedin: "https://linkedin.com/in/rama-sri-surya",
  portfolio: "https://kramasrisurya.github.io/portfolio/",
  avatarUrl: "./surya-editorial.webp",
  education: {
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Kollam, Kerala, India",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    graduationYear: "Class of 2029",
    honors: "3x Consecutive Inter-College Hackathon Winner (Sem 1, Sem 2, Sem 3)",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Linear Algebra",
      "Probability & Statistics",
      "Database Management Systems",
      "Deep Learning & Neural Networks"
    ]
  },
  stats: [
    { label: "Hackathon Victories", value: "3x", detail: "IIIT Kottayam, Epochon 2.0 & Sem 1" },
    { label: "State Latency", value: "<1ms", detail: "FastAPI + Redis AsyncIO state store" },
    { label: "Production Deployments", value: "10+", detail: "Vercel + GitHub Verified Stacks" },
    { label: "Core AI Systems", value: "5+", detail: "Autonomous Agents, Spatial AI & CV" },
  ]
};

export const PHILOSOPHY = [
  {
    number: "01",
    title: "Reasoning Over Reflex",
    subtitle: "Why Deliberative Agentic Loops Matter",
    body: "Single-turn LLM generation is inherently probabilistic and prone to drift. Real-world autonomous workflows demand multi-agent deliberative consensus, where specialized agents iteratively verify facts against domain constraints before acting."
  },
  {
    number: "02",
    title: "Spatial Grounding & Sub-ms State",
    subtitle: "Perception Without Latency Bottlenecks",
    body: "Computer vision is only as valuable as the speed at which spatial states can be digested. Pairing deep person re-identification (ReID) with non-blocking asynchronous event loops and Redis caching enables true real-time spatial awareness."
  },
  {
    number: "03",
    title: "Production Rigor Over Toy Demos",
    subtitle: "High Hackathon Velocity, Zero Technical Debt",
    body: "Moving fast should never mean writing sloppy scripts. Every architecture I ship adheres to strict Pydantic v2 data validation, full-coverage pytest suites, multi-stage Docker containerization, and clean architectural separation."
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    date: "Semester 3 (2026)",
    title: "IIIT Kottayam Hackathon Champion",
    role: "Lead Systems & AI Architect",
    summary: "Won 1st place competing against elite inter-college teams at the Indian Institute of Information Technology (IIIT), Kottayam, architecting an end-to-end intelligent software system under strict 36-hour constraints.",
    tag: "Trophy 🏆"
  },
  {
    date: "Semester 2 (2026)",
    title: "Epochon 2.0 Winner — S2 Deliberative Legal Agent",
    role: "Autonomous Agent Developer",
    summary: "Awarded top honors for designing OmniBots / S2 Legal AI: a multi-agent deliberative reasoning engine that triages complex legal filings and verifies statutory filing deadlines with multi-step reflection loops.",
    tag: "Trophy 🏆"
  },
  {
    date: "Semester 1 (2025)",
    title: "University-Wide Hackathon Champion",
    role: "Core Software Architect",
    summary: "Claimed 1st place in university-wide hackathon during freshman year, recognized by judges for modular software engineering, clean algorithmic separation, and rapid execution.",
    tag: "Trophy 🏆"
  },
  {
    date: "Academic Year 2025",
    title: "AIML & Cloud Professional Specializations",
    role: "Undergraduate Researcher",
    summary: "Completed rigorous IIT Patna AIML Specialization, AWS Cloud Practitioner Essentials, and Microsoft Azure Computer Vision programs.",
    tag: "Credential"
  }
];

export const HACKATHONS: Hackathon[] = [
  {
    id: "iiit-kottayam",
    title: "IIIT Kottayam Hackathon Winner",
    organization: "Indian Institute of Information Technology (IIIT), Kottayam",
    semester: "Semester 3",
    placement: "1st Place Winner 🏆",
    year: "2026",
    projectFocus: "Rapid AI Engineering & Distributed Execution",
    description: "Secured 1st place competing against competitive engineering teams by architecting and delivering an end-to-end intelligent system under stringent hackathon deadlines.",
    badgeColor: "from-amber-400 to-yellow-600"
  },
  {
    id: "epochon-2",
    title: "Epochon 2.0 Hackathon Winner",
    organization: "Epochon 2.0 / Technical Board",
    semester: "Semester 2",
    placement: "Top Honors Winner 🏆",
    year: "2026",
    projectFocus: "Autonomous Multi-Agent Reasoning (OmniBots)",
    description: "Won 1st place for architecting S2 Deliberative Legal Agent (OmniBots) — featuring multi-agent consensus, statutory deadline triage, and structured constraint validation.",
    badgeColor: "from-emerald-400 to-teal-600"
  },
  {
    id: "sem-1",
    title: "University-Wide Hackathon Winner",
    organization: "Amrita Vishwa Vidyapeetham",
    semester: "Semester 1",
    placement: "1st Place Winner 🏆",
    year: "2025",
    projectFocus: "Modular Software Architecture & Algorithms",
    description: "Secured 1st place in university-wide hackathon during freshman year, recognized by faculty and industry mentors for algorithmic rigor and clean code structure.",
    badgeColor: "from-cyan-400 to-blue-600"
  }
];

// BLOCK 1: Top 4 In-Depth Systems (Flagship Showcase)
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "smart-retail-ai",
    rank: "01",
    title: "SmartRetail AI",
    headline: "Autonomous Spatial AI & Retail Risk Engine",
    category: "Spatial AI & CV",
    tier: "🏆 S-Tier (Spatial AI & CV)",
    status: "100% Production-Grade",
    description: "Modular computer vision and spatial intelligence platform implementing person re-identification (ReID), real-time customer journey trajectory tracking, and automated hazard/loss detection.",
    impactMetrics: [
      "Sub-millisecond state caching with Redis AsyncIO",
      "Real-time Person Re-Identification across camera handoffs",
      "Interactive POS Sweethearting & Missed-Scan Simulator"
    ],
    techStack: ["Python", "FastAPI", "Redis AsyncIO", "Docker", "Pytest", "OpenCV", "Pydantic v2"],
    githubUrl: "https://github.com/kramasrisurya/SmartRetail_AI",
    liveUrl: "https://smartretail-frontend.vercel.app",
    highlights: [
      "Deep feature extraction pipeline for multi-frame human re-identification across non-overlapping camera fields.",
      "Asynchronous REST endpoints powered by FastAPI and Pydantic v2 with non-blocking event-loop processing.",
      "Production-ready containerization with multi-stage Docker build and structured logging."
    ],
    architectureFlow: [
      { step: "01", label: "Video Ingestion", detail: "RTSP stream capture with frame subsampling and background subtraction" },
      { step: "02", label: "Spatial ReID", detail: "Feature vector embedding and Euclidean distance metric matching across store zones" },
      { step: "03", label: "Async State", detail: "Sub-ms trajectory state persistence in Redis with automated TTL eviction" },
      { step: "04", label: "Hazard Alerts", detail: "Event dispatcher triggering proactive loss-prevention notifications" }
    ]
  },
  {
    id: "s2-legal-ai",
    rank: "02",
    title: "S2 Legal AI (OmniBots)",
    headline: "Autonomous Multi-Agent Reasoning & Constraint Verification",
    category: "Multi-Agent System",
    tier: "🏆 S-Tier (Multi-Agent System)",
    status: "100% Production-Grade",
    description: "Award-winning multi-agent deliberative reasoning system designed for complex document analysis, legal deadline triage, and structured decision validation. 1st Place winner at Epochon 2.0.",
    impactMetrics: [
      "1st Place in Epochon 2.0 Hackathon for innovative agentic design",
      "Deliberative multi-step reasoning validation loop",
      "Zero-hallucination statutory filing verification & court memo export"
    ],
    techStack: ["Python", "TypeScript", "Google Gemini API", "Multi-Agent Workflows", "Pydantic v2", "FastAPI"],
    githubUrl: "https://github.com/kramasrisurya/s2-legal-ai",
    liveUrl: "https://s2-legal-ai.vercel.app",
    highlights: [
      "Orchestrated autonomous multi-agent graph with specialized roles: Document Ingestion, Statute Analysis, and Constraint Verification.",
      "Implemented a deliberative reflection protocol where agent outputs are rigorously self-audited before presenting conclusions.",
      "Automated extraction of high-stakes court dates, jurisdictional filing windows, and statutory deadlines."
    ],
    architectureFlow: [
      { step: "01", label: "Intake Router", detail: "Decomposes complex legal filings into structured sub-agent tasks" },
      { step: "02", label: "Specialist Agents", detail: "Concurrent execution of statute extraction and timeline reconstruction" },
      { step: "03", label: "Consensus Loop", detail: "Cross-agent verification against legal rule constraints and deadlines" },
      { step: "04", label: "Audited Output", detail: "Synthesized report with verifiable source grounding and printable court memo" }
    ]
  },
  {
    id: "educraft-ai",
    rank: "03",
    title: "EduCraft AI",
    headline: "Multimodal GenAI PDF-to-Course Conversion Engine",
    category: "Multimodal GenAI",
    tier: "🏆 S-Tier (Multimodal GenAI)",
    status: "100% Production-Grade",
    description: "End-to-end intelligent educational pipeline leveraging Google Gemini multimodal models to extract, decompose, and convert complex textbook PDFs into interactive course modules, quizzes, and summaries.",
    impactMetrics: [
      "Strict JSON schema validation eliminating hallucinated schemas",
      "Zero-latency sample PDF load with 30-day learning habit heatmap",
      "100% resilient offline-fallback synthesis & interactive quiz grading"
    ],
    techStack: ["TypeScript", "Google Gemini API", "React 19", "Supabase SSR", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/kramasrisurya/Educraft.ai",
    liveUrl: "https://educraft-ai-beryl.vercel.app",
    highlights: [
      "Leveraged @google/genai SDK with structured output constraints to guarantee deterministic lesson hierarchy.",
      "Modern full-stack interface built on React 19 with optimistic state transitions and fluid module navigation.",
      "Secure user course storage, session management, and PDF caching powered by Supabase SSR auth."
    ],
    architectureFlow: [
      { step: "01", label: "Document Parse", detail: "Multi-page PDF segmentation extracting text, diagrams, and hierarchy" },
      { step: "02", label: "Gemini Engine", detail: "Multimodal prompt chains enforcing strict Pydantic/Zod structured schemas" },
      { step: "03", label: "Course Synthesis", detail: "Dynamic generation of interactive flashcards, quizzes, and key takeaways" },
      { step: "04", label: "Delivery UI", detail: "React 19 interactive classroom interface with progress tracking" }
    ]
  },
  {
    id: "orbit",
    rank: "04",
    title: "Orbit System",
    headline: "Biometric Edge Vision & Zero-Trust Security",
    category: "Biometric Edge Vision",
    tier: "🚀 A-Tier (Biometric Edge Vision)",
    status: "100% Production-Grade",
    description: "Real-time edge surveillance and automatic lock system utilizing 468-point 3D facial landmark meshes, distance telemetry, and cybernetic diagnostics CLI.",
    impactMetrics: [
      "468-point 3D facial landmark mesh tracking at 60 FPS",
      "Sub-50ms biometric distance telemetry & spoof detection",
      "Zero-trust cybernetic edge protocol with auto-lockdown state"
    ],
    techStack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "JavaScript", "Docker"],
    githubUrl: "https://github.com/kramasrisurya/orbit",
    liveUrl: "https://orbit-system-eight.vercel.app",
    highlights: [
      "Engineered real-time 3D facial topology pipeline tracking 468 landmarks via MediaPipe and OpenCV.",
      "Implemented automated distance-adaptive proximity detection with instant camera-driven lock/unlock state machine.",
      "Embedded cybernetic terminal diagnostics CLI providing real-time biometric telemetry and edge diagnostics."
    ],
    architectureFlow: [
      { step: "01", label: "Video Capture", detail: "Webcam stream acquisition with adaptive lighting normalization" },
      { step: "02", label: "MediaPipe 3D Mesh", detail: "468 landmark coordinate extraction & iris orientation estimation" },
      { step: "03", label: "Proximity Calculation", detail: "Depth-from-landmark triangulation computing operator distance" },
      { step: "04", label: "Zero-Trust Policy", detail: "Instant biometric verification triggering automated lock/unlock state" }
    ]
  }
];

// BLOCK 2: Additional Ranked Production Systems (Minimal List Format)
export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    id: "cosmos",
    rank: "05",
    title: "COSMOS Space Explorer",
    headline: "NASA Telemetry & Audio Planetary Portal",
    category: "NASA Telemetry & Audio",
    tier: "🚀 A-Tier (NASA Telemetry & Audio)",
    status: "100% Production-Grade",
    description: "Real-time space exploration portal streaming deep space photography, Curiosity rover telemetry, and Near-Earth asteroid orbits with Web Speech API audio tours.",
    techStack: ["React", "TypeScript", "NASA Open APIs", "Web Speech API", "Tailwind CSS"],
    githubUrl: "https://github.com/kramasrisurya/cosmos",
    liveUrl: "https://cosmos-app-two.vercel.app"
  },
  {
    id: "agentic-ai-omnibots",
    rank: "06",
    title: "Agentic AI Omni-Bots",
    headline: "Industrial Robotics & Anomaly Triage Factory",
    category: "Industrial Robotics",
    tier: "🚀 A-Tier (Industrial Robotics)",
    status: "100% Production-Grade",
    description: "Multi-agent autonomous manufacturing orchestration system where coordinated AI agents supervise assembly lines, synthesize industrial acoustic warnings, and automate defect quarantine.",
    techStack: ["TypeScript", "React", "Multi-Agent Systems", "Web Audio API", "Tailwind CSS"],
    githubUrl: "https://github.com/kramasrisurya/agentic-ai-omnibots",
    liveUrl: "https://agentic-ai-omnibots.vercel.app"
  },
  {
    id: "driveoptimizerr",
    rank: "07",
    title: "Drive Storage Optimizer",
    headline: "Cloud Storage Utility & De-duplication Engine",
    category: "Cloud Storage Utility",
    tier: "🛠️ B-Tier (Cloud Storage Utility)",
    status: "100% Production-Grade",
    description: "Cloud storage intelligence engine analyzing Google Drive quotas, detecting duplicate media, and identifying junk cache files with interactive preloaded demo mode.",
    techStack: ["TypeScript", "React", "Node.js", "Express", "Vercel Serverless"],
    githubUrl: "https://github.com/kramasrisurya/driveoptimizerr",
    liveUrl: "https://driveoptimizerr.vercel.app"
  },
  {
    id: "expense-teacker",
    rank: "08",
    title: "Expense Tracker",
    headline: "Financial CRUD & Budget Threshold Monitor",
    category: "Financial CRUD",
    tier: "🛠️ B-Tier (Financial CRUD)",
    status: "100% Production-Grade",
    description: "Modern personal finance application featuring automated CSV statement export, category budget threshold tracking, and serverless persistence.",
    techStack: ["React", "TypeScript", "Vercel Serverless Functions", "Tailwind CSS"],
    githubUrl: "https://github.com/kramasrisurya/expense-teacker",
    liveUrl: "https://expense-teacker.vercel.app"
  },
  {
    id: "portfolio",
    rank: "09",
    title: "Personal Portfolio",
    headline: "Developer Hub & WebGL Telemetry",
    category: "Developer Hub",
    tier: "🛠️ B-Tier (Developer Hub)",
    status: "100% Production-Grade",
    description: "Award-winning editorial portfolio engineered with React 19, Three.js GLSL shaders, Lenis smooth scrolling, and dark luxury aesthetic.",
    techStack: ["React 19", "Three.js", "GLSL Shaders", "GSAP", "Lenis", "Tailwind CSS"],
    githubUrl: "https://github.com/kramasrisurya/portfolio",
    liveUrl: "https://rama-sri-surya-portfolio.vercel.app"
  },
  {
    id: "gpttest-studio",
    rank: "10",
    title: "GPTTest Studio",
    headline: "Basic Scratchpad & Prompt Engineering Playground",
    category: "Basic Scratchpad",
    tier: "⚠️ C-Tier (Basic Scratchpad)",
    status: "Prototype / Minimal",
    description: "Interactive playground and scratchpad for benchmarking model prompts, testing token boundaries, and comparing response latencies.",
    techStack: ["JavaScript", "HTML5", "CSS3", "OpenAI API"],
    githubUrl: "https://github.com/kramasrisurya",
    liveUrl: "https://gpttest-swart.vercel.app"
  }
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...ADDITIONAL_PROJECTS];

export const SKILL_CATEGORIES = [
  {
    category: "Generative AI & Agentic Systems",
    skills: [
      { name: "Google Gemini API (@google/genai)", level: "Advanced" },
      { name: "Multi-Agent System Orchestration", level: "Advanced" },
      { name: "Deliberative Reasoning Workflows", level: "Advanced" },
      { name: "Prompt Engineering & Evaluation", level: "Advanced" },
      { name: "Structured JSON Output Schemas", level: "Advanced" },
      { name: "Function Calling & Tool Use", level: "Proficient" }
    ]
  },
  {
    category: "Deep Learning & Computer Vision",
    skills: [
      { name: "PyTorch & TorchVision", level: "Proficient" },
      { name: "TensorFlow & Keras 3", level: "Proficient" },
      { name: "Convolutional Neural Networks (CNNs)", level: "Advanced" },
      { name: "Person Re-Identification (ReID)", level: "Proficient" },
      { name: "Object Tracking & Detection", level: "Proficient" },
      { name: "OpenCV Image Pipelines", level: "Proficient" }
    ]
  },
  {
    category: "Backend & Distributed Infrastructure",
    skills: [
      { name: "FastAPI & Uvicorn", level: "Advanced" },
      { name: "Pydantic v2 (Data Validation)", level: "Advanced" },
      { name: "Redis Caching & Pub/Sub", level: "Proficient" },
      { name: "SQLAlchemy (AsyncIO) & Postgres", level: "Proficient" },
      { name: "Supabase & Auth SSR", level: "Proficient" },
      { name: "RESTful API Architecture", level: "Advanced" }
    ]
  },
  {
    category: "Languages & Core Tooling",
    skills: [
      { name: "Python (AsyncIO, NumPy, Pandas)", level: "Expert" },
      { name: "TypeScript & JavaScript", level: "Proficient" },
      { name: "Docker Containerization", level: "Proficient" },
      { name: "Linux / Bash Shell", level: "Proficient" },
      { name: "Git & GitHub CLI", level: "Proficient" },
      { name: "Pytest & Ruff Code Quality", level: "Advanced" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AIML Certification Program", issuer: "IIT Patna", category: "Artificial Intelligence" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", category: "Cloud & Infrastructure" },
  { name: "Computer Vision with Azure Cognitive Services", issuer: "Microsoft", category: "Computer Vision" },
  { name: "AI & Generative AI For All", issuer: "Infosys Springboard", category: "Generative AI" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", category: "Data Analytics" }
];
