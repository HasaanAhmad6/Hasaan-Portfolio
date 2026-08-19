import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siPython,
  siFirebase,
  siTensorflow,
  siNodedotjs,
  siFastapi,
  siFlask,
  siDocker,
  siTailwindcss,
  siPostgresql,
  siMysql,
  siGit,
  siMongodb,
  siCplusplus,
  siVite,
  siDjango,
  siOpencv,
  siScikitlearn,
  siStreamlit,
  siOllama,
  siSupabase,
  siVercel,
  type SimpleIcon,
} from "simple-icons";
import { skills, type Skill } from "@/lib/skills";

const registry: Record<string, SimpleIcon> = {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siPython,
  siFirebase,
  siTensorflow,
  siNodedotjs,
  siFastapi,
  siFlask,
  siDocker,
  siTailwindcss,
  siPostgresql,
  siMysql,
  siGit,
  siMongodb,
  siCplusplus,
  siVite,
  siDjango,
  siOpencv,
  siScikitlearn,
  siStreamlit,
  siOllama,
  siSupabase,
  siVercel,
};

const customPaths: Record<string, string> = {
  // Amazon Web Services icon path
  customAws:
    "M6.578 14.542c-2.316 1.704-5.69 2.617-8.578 2.617a14.73 14.73 0 0 1-6.197-1.32 1.09 1.09 0 0 1-.607-1.28c.112-.464.582-.744 1.047-.631a13.34 13.34 0 0 0 5.61 1.2c2.585 0 5.602-.821 7.683-2.353.407-.3.978-.207 1.278.2.3.407.207.978-.243 1.567zm4.275-1.925a1.144 1.144 0 0 1-1.353-.298c-1.328-1.547-3.447-2.319-5.75-2.319-3.235 0-6.128 1.558-7.852 4.227-.291.45-.905.582-1.356.29-.45-.291-.582-.904-.29-1.355C-3.8 9.948-.54 8.21 3.175 8.21c2.723 0 5.253.924 6.845 2.781.36.421.328 1.053-.092 1.474l.925.152z",
  // Generic database path for SQL
  customSql:
    "M12 2C6.48 2 2 4.02 2 6.5S6.48 11 12 11s10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v-3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v3c0 2.48-4.48 4.5-10 4.5zm0-5c-5.52 0-10-2.02-10-4.5v-3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v3c0 2.48-4.48 4.5-10 4.5z",
  // Axis line chart path for statsmodels
  customStats:
    "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10l-4-4-4 4-2-2 1.4-1.4L9 9l4 4 3-3 1 1z",
  // Chat flow graph path for RAG
  customRag:
    "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z",
  // Neural/LLM layers path for LLM APIs
  customLlm:
    "M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.04 19.57 10.47 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
  // Search vector grids path for embeddings
  customVector:
    "M9.5 3c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.6 0 3.06-.59 4.19-1.57l4.9 4.9c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02 0-1.41l-4.9-4.9c.98-1.13 1.57-2.59 1.57-4.19 0-3.59-2.91-6.5-6.5-6.5zm0 10c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
};

export function BrandMark({ name, size = 24 }: { name: Skill["name"]; size?: number }) {
  const skill = skills.find((s) => s.name === name);
  if (!skill) return null;

  if (skill.icon === "customAws") {
    return (
      <svg
        role="img"
        viewBox="-12 -4 28 28"
        aria-label="AWS"
        style={{ width: size, height: size, fill: "currentColor" }}
      >
        <path d={customPaths.customAws} />
      </svg>
    );
  }

  const icon = registry[skill.icon];
  if (!icon) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-label={icon.title}
      style={{ width: size, height: size, fill: "currentColor" }}
    >
      <path d={icon.path} />
    </svg>
  );
}