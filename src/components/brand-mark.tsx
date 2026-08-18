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
};

const customPaths: Record<string, string> = {
  // Amazon Web Services icon path
  customAws:
    "M6.578 14.542c-2.316 1.704-5.69 2.617-8.578 2.617a14.73 14.73 0 0 1-6.197-1.32 1.09 1.09 0 0 1-.607-1.28c.112-.464.582-.744 1.047-.631a13.34 13.34 0 0 0 5.61 1.2c2.585 0 5.602-.821 7.683-2.353.407-.3.978-.207 1.278.2.3.407.207.978-.243 1.567zm4.275-1.925a1.144 1.144 0 0 1-1.353-.298c-1.328-1.547-3.447-2.319-5.75-2.319-3.235 0-6.128 1.558-7.852 4.227-.291.45-.905.582-1.356.29-.45-.291-.582-.904-.29-1.355C-3.8 9.948-.54 8.21 3.175 8.21c2.723 0 5.253.924 6.845 2.781.36.421.328 1.053-.092 1.474l.925.152z",
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