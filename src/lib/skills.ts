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
      { name: "TypeScript", bg: "#3178c6", logoColor: "#ffffff", icon: "siTypescript" },
      { name: "JavaScript", bg: "#f7df1e", logoColor: "#000000", icon: "siJavascript" },
      { name: "Python", bg: "#3776ab", logoColor: "#ffffff", icon: "siPython" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", bg: "#61dafb", logoColor: "#000000", icon: "siReact" },
      { name: "Next.js", bg: "#ffffff", logoColor: "#000000", icon: "siNextdotjs" },
      { name: "Tailwind CSS", bg: "#06b6d4", logoColor: "#ffffff", icon: "siTailwindcss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", bg: "#5fa04e", logoColor: "#ffffff", icon: "siNodedotjs" },
      { name: "FastAPI", bg: "#059669", logoColor: "#ffffff", icon: "siFastapi" },
      { name: "Flask", bg: "#ffffff", logoColor: "#000000", icon: "siFlask" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "TensorFlow", bg: "#ff6f00", logoColor: "#ffffff", icon: "siTensorflow" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", bg: "#ff9900", logoColor: "#000000", icon: "customAws" },
      { name: "Firebase", bg: "#ffca28", logoColor: "#000000", icon: "siFirebase" },
      { name: "Docker", bg: "#2496ed", logoColor: "#ffffff", icon: "siDocker" },
      { name: "Git", bg: "#f05032", logoColor: "#ffffff", icon: "siGit" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", bg: "#4169e1", logoColor: "#ffffff", icon: "siPostgresql" },
      { name: "MySQL", bg: "#00758f", logoColor: "#ffffff", icon: "siMysql" },
      { name: "MongoDB", bg: "#47a248", logoColor: "#ffffff", icon: "siMongodb" },
    ],
  },
];

export const skills: Skill[] = skillGroups.flatMap((g) => g.items);