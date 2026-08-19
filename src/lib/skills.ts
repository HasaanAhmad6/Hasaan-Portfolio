export type Skill = {
  name: string;
  /** Hover background color (the brand color). */
  bg: string;
  /** Color of the brand logo when shown on hover. */
  logoColor: string;
  /** simple-icons export key or custom key. */
  icon: string;
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", bg: "#3776ab", logoColor: "#ffffff", icon: "siPython" },
      { name: "JavaScript", bg: "#f7df1e", logoColor: "#000000", icon: "siJavascript" },
      { name: "TypeScript", bg: "#3178c6", logoColor: "#ffffff", icon: "siTypescript" },
      { name: "C++", bg: "#00599c", logoColor: "#ffffff", icon: "siCplusplus" },
      { name: "SQL", bg: "#00758f", logoColor: "#ffffff", icon: "customSql" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", bg: "#61dafb", logoColor: "#000000", icon: "siReact" },
      { name: "Next.js", bg: "#ffffff", logoColor: "#000000", icon: "siNextdotjs" },
      { name: "Vite", bg: "#646cff", logoColor: "#ffffff", icon: "siVite" },
      { name: "Tailwind CSS", bg: "#06b6d4", logoColor: "#ffffff", icon: "siTailwindcss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", bg: "#092e20", logoColor: "#ffffff", icon: "siDjango" },
      { name: "Flask", bg: "#ffffff", logoColor: "#000000", icon: "siFlask" },
      { name: "Node.js", bg: "#5fa04e", logoColor: "#ffffff", icon: "siNodedotjs" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "TensorFlow", bg: "#ff6f00", logoColor: "#ffffff", icon: "siTensorflow" },
      { name: "OpenCV", bg: "#5c3ee8", logoColor: "#ffffff", icon: "siOpencv" },
      { name: "Scikit-learn", bg: "#f7931e", logoColor: "#ffffff", icon: "siScikitlearn" },
      { name: "Statsmodels/pmdarima", bg: "#ff4b4b", logoColor: "#ffffff", icon: "customStats" },
      { name: "Streamlit", bg: "#ff4b4b", logoColor: "#ffffff", icon: "siStreamlit" },
    ],
  },
  {
    category: "Generative AI",
    items: [
      { name: "RAG pipelines", bg: "#00e5ff", logoColor: "#000000", icon: "customRag" },
      { name: "LLM APIs", bg: "#10a37f", logoColor: "#ffffff", icon: "customLlm" },
      { name: "embeddings & vector search", bg: "#3178c6", logoColor: "#ffffff", icon: "customVector" },
      { name: "Ollama (local LLMs)", bg: "#000000", logoColor: "#ffffff", icon: "siOllama" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", bg: "#4169e1", logoColor: "#ffffff", icon: "siPostgresql" },
      { name: "MySQL", bg: "#00758f", logoColor: "#ffffff", icon: "siMysql" },
      { name: "Supabase", bg: "#3ecf8e", logoColor: "#ffffff", icon: "siSupabase" },
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", bg: "#ff9900", logoColor: "#000000", icon: "customAws" },
      { name: "Vercel", bg: "#ffffff", logoColor: "#000000", icon: "siVercel" },
      { name: "Docker", bg: "#2496ed", logoColor: "#ffffff", icon: "siDocker" },
    ],
  },
];

export const skills: Skill[] = skillGroups.flatMap((g) => g.items);