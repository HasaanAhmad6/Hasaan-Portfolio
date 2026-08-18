export type Skill = {
  name: string;
  /** Hover background color (the brand color). */
  bg: string;
  /** Color of the brand logo when shown on hover. */
  logoColor: string;
  /** simple-icons export key or custom key. */
  icon: string;
};

export const skills: Skill[] = [
  { name: "React", bg: "#61dafb", logoColor: "#000000", icon: "siReact" },
  { name: "Next.js", bg: "#ffffff", logoColor: "#000000", icon: "siNextdotjs" },
  { name: "TypeScript", bg: "#3178c6", logoColor: "#ffffff", icon: "siTypescript" },
  { name: "JavaScript", bg: "#f7df1e", logoColor: "#000000", icon: "siJavascript" },
  { name: "Python", bg: "#3776ab", logoColor: "#ffffff", icon: "siPython" },
  { name: "AWS", bg: "#ff9900", logoColor: "#000000", icon: "customAws" },
  { name: "Firebase", bg: "#ffca28", logoColor: "#000000", icon: "siFirebase" },
  { name: "TensorFlow", bg: "#ff6f00", logoColor: "#ffffff", icon: "siTensorflow" },
  { name: "Node.js", bg: "#5fa04e", logoColor: "#ffffff", icon: "siNodedotjs" },
  { name: "FastAPI", bg: "#059669", logoColor: "#ffffff", icon: "siFastapi" },
  { name: "Flask", bg: "#ffffff", logoColor: "#000000", icon: "siFlask" },
  { name: "Docker", bg: "#2496ed", logoColor: "#ffffff", icon: "siDocker" },
  { name: "Tailwind CSS", bg: "#06b6d4", logoColor: "#ffffff", icon: "siTailwindcss" },
  { name: "PostgreSQL", bg: "#4169e1", logoColor: "#ffffff", icon: "siPostgresql" },
  { name: "MySQL", bg: "#00758f", logoColor: "#ffffff", icon: "siMysql" },
  { name: "Git", bg: "#f05032", logoColor: "#ffffff", icon: "siGit" },
  { name: "MongoDB", bg: "#47a248", logoColor: "#ffffff", icon: "siMongodb" },
];