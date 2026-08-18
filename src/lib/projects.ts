export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  live?: string;
  github: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "tracelens",
    title: "Tracelens",
    tagline: "Developer Analytics · TypeScript",
    year: "2026",
    role: "Lead Full-Stack Developer",
    summary:
      "An advanced developer analytics and telemetry tracing platform designed for real-time observability, distributed request tracing, and performance metrics.",
    problem:
      "Modern web applications produce fragmented telemetry logs that are difficult to correlate without heavy, expensive enterprise monitoring infrastructure.",
    solution:
      "Engineered a unified developer tracing suite offering lightweight metrics instrumentation, real-time event aggregation, and an interactive performance dashboard.",
    stack: ["TypeScript", "React", "Next.js", "Analytics", "Tailwind CSS", "REST APIs"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Tracelens",
    accent: "#38bdf8",
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot Widget",
    tagline: "Full-Stack RAG · Gemini & Supabase",
    year: "2026",
    role: "Full-Stack & AI Engineer",
    summary:
      "A published NPM library (@hasaan_6/rag-chatbot-widget) and full-stack retrieval-augmented conversational AI assistant backed by Gemini LLM and Supabase pgvector.",
    problem:
      "Static developer portfolios and apps cannot dynamically answer ad-hoc questions about projects, experience, and skills in real time.",
    solution:
      "Built a lightweight, embeddable React widget that connects to Supabase vector search, performs cosine similarity retrieval, and streams contextual LLM answers.",
    stack: ["TypeScript", "React", "Google Gemini API", "Supabase pgvector", "Next.js", "NPM Package"],
    live: "https://www.npmjs.com/package/@hasaan_6/rag-chatbot-widget",
    github: "https://github.com/HasaanAhmad6/Rag-Chatbot",
    accent: "#00e5ff",
  },
  {
    slug: "image-tampering-detection",
    title: "Image Tampering Detection",
    tagline: "AI Computer Vision · TensorFlow",
    year: "2026",
    role: "AI / ML Developer",
    summary:
      "An intelligent computer vision system leveraging deep learning to distinguish authentic images from spliced and tampered media with over 90% accuracy.",
    problem:
      "Digital image manipulation and deepfakes make visual content authentication difficult, requiring automated, reliable forensic detection pipelines.",
    solution:
      "Built a CNN-based deep learning architecture using TensorFlow and OpenCV paired with a Flask REST API for real-time forensic analysis and manipulation heatmaps.",
    stack: ["Python", "TensorFlow", "OpenCV", "Flask", "JavaScript", "CNNs"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Image_Tampering_Detection",
    accent: "#ff6b6b",
  },
  {
    slug: "electricity-forecast-app",
    title: "Electricity Forecast App",
    tagline: "Time-Series ML · AWS Cloud",
    year: "2025",
    role: "ML & Cloud Engineer",
    summary:
      "A cloud-hosted predictive analytics application using machine learning to forecast electricity consumption trends and assist in energy load management.",
    problem:
      "Energy grids and organizations experience costly waste due to inaccurate short-term power demand forecasts and volatile usage patterns.",
    solution:
      "Implemented time-series forecasting models in Python deployed on AWS EC2, featuring an interactive Streamlit dashboard for real-time trend visualization.",
    stack: ["Python", "AWS EC2", "Streamlit", "Pandas", "Scikit-Learn", "Time Series ML"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Electricity_Forecast_App",
    accent: "#10b981",
  },
  {
    slug: "claude-token-counter",
    title: "Claude Token Counter",
    tagline: "Developer Tool · Tokenization",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "An interactive utility for estimating token usage, context window limits, and API cost breakdown for Anthropic's Claude 3.5 and 3 models.",
    problem:
      "Developers frequently exceed context window boundaries or encounter unexpected billing spikes when working with large LLM prompts.",
    solution:
      "Designed a responsive tokenization analyzer with sub-word estimation, pricing calculators per million tokens, and instant clipboard export.",
    stack: ["JavaScript", "HTML5", "CSS3", "LLM Tokenization", "API Integration"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Claude_Token_Counter",
    accent: "#d97706",
  },
  {
    slug: "hand-tracking-ar",
    title: "Hand Tracking AR",
    tagline: "Augmented Reality · Computer Vision",
    year: "2026",
    role: "Creative Tech & AR Developer",
    summary:
      "A browser-based Augmented Reality hand tracking experience that detects 21 hand landmarks in real-time for gestural interactive controls.",
    problem:
      "Traditional camera-based interaction requires native software or bulky hardware sensors, limiting web accessibility.",
    solution:
      "Created an in-browser WebRTC computer vision pipeline executing real-time 3D hand tracking directly via the browser canvas.",
    stack: ["JavaScript", "HTML5", "Computer Vision", "WebRTC", "Canvas API"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Hand_Tracking_Ar",
    accent: "#ec4899",
  },
  {
    slug: "face-recognition",
    title: "Face Recognition System",
    tagline: "Biometric AI · OpenCV & Python",
    year: "2025",
    role: "AI Developer",
    summary:
      "Real-time face detection and biometric identification system capable of recognizing enrolled faces with high frame rates.",
    problem:
      "Automating attendance and security access control requires robust facial feature extraction under varying lighting and pose conditions.",
    solution:
      "Implemented facial landmark alignment, deep embeddings extraction, and Euclidean distance classification with an intuitive management interface.",
    stack: ["Python", "OpenCV", "JavaScript", "Machine Learning", "Biometrics"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Face_Recognition",
    accent: "#8b5cf6",
  },
  {
    slug: "chatbot-extension",
    title: "AI Chatbot Extension",
    tagline: "Browser Extension · AI Productivity",
    year: "2026",
    role: "Extension Developer",
    summary:
      "A Chromium browser extension providing on-page contextual AI summaries, prompt helpers, and intelligent text completions.",
    problem:
      "Context switching between research tabs and external AI chat windows interrupts developer and writer workflows.",
    solution:
      "Built a sidebar and context menu extension in TypeScript that reads DOM selections and streams instant AI assistance in-place.",
    stack: ["TypeScript", "Chrome Extension API", "React", "Tailwind CSS", "LLM APIs"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Chatbot-Extension",
    accent: "#06b6d4",
  },
  {
    slug: "nayyab-jewellers",
    title: "Nayyab Jewellers",
    tagline: "E-Commerce Storefront · Web Design",
    year: "2025",
    role: "Full-Stack Web Developer",
    summary:
      "A luxury jewelry catalog and e-commerce showcase application with product filtering, dynamic image zoom, and quotation cart.",
    problem:
      "Jewelry boutiques need high-aesthetic, mobile-first digital catalogs to showcase intricate designs and drive direct customer orders.",
    solution:
      "Crafted a responsive storefront with categorized collections, fast search, lightbox galleries, and direct WhatsApp order dispatch.",
    stack: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "E-Commerce"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Nayyab_Jewellers",
    accent: "#eab308",
  },
  {
    slug: "folder-locker",
    title: "Folder Locker",
    tagline: "Security Utility · Cryptography",
    year: "2025",
    role: "Python Developer",
    summary:
      "A lightweight folder locking and file encryption utility designed to protect sensitive local directories with password authentication.",
    problem:
      "Users need simple, offline privacy solutions to guard private local folders without installing bloated third-party software.",
    solution:
      "Implemented AES-based directory obfuscation and password hashing in Python with clean CLI and graphical locking capabilities.",
    stack: ["Python", "Cryptography", "OS Utilities", "Security"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Folder_Locker",
    accent: "#ef4444",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    tagline: "Enterprise POS · Stock & Inventory",
    year: "2025",
    role: "Full-Stack Developer",
    summary:
      "A comprehensive inventory management and point-of-sale system for tracking stock levels, sales analytics, and supplier ledgers.",
    problem:
      "Small and medium businesses suffer stock discrepancies and revenue loss due to manual ledger bookkeeping.",
    solution:
      "Engineered an automated stock ledger with low-inventory alerts, receipt generation, and transaction logging.",
    stack: ["JavaScript", "SQL", "HTML5", "CSS3", "Database Management", "CRUD"],
    live: "",
    github: "https://github.com/HasaanAhmad6/Inventory_Management_System",
    accent: "#14b8a6",
  },
  {
    slug: "icode",
    title: "iCode Sandbox",
    tagline: "Developer Playground · Web IDE",
    year: "2026",
    role: "Frontend Engineer",
    summary:
      "An interactive code playground and snippet sandbox with live execution, syntax highlighting, and project sharing.",
    problem:
      "Testing short code snippets or algorithmic ideas often requires creating boilerplate projects locally.",
    solution:
      "Built a browser-based coding environment with real-time compilation, multi-file tabs, and execution output console.",
    stack: ["TypeScript", "React", "Monaco Editor", "Web Execution"],
    live: "",
    github: "https://github.com/HasaanAhmad6/iCode",
    accent: "#6366f1",
  },
  {
    slug: "weather-app",
    title: "Weather Forecast Dashboard",
    tagline: "Live Weather App · API Integration",
    year: "2025",
    role: "Frontend Developer",
    summary:
      "A real-time global weather dashboard displaying live temperature, humidity, atmospheric pressure, wind metrics, and 5-day forecasts.",
    problem:
      "Quick weather lookups require minimal, ad-free, fast interfaces with reliable geolocation.",
    solution:
      "Developed a clean weather dashboard integrating REST weather APIs, dynamic weather condition animations, and unit conversions.",
    stack: ["JavaScript", "OpenWeatherMap API", "HTML5", "CSS3"],
    live: "",
    github: "https://github.com/Hasaan6/Weather_App",
    accent: "#0ea5e9",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}