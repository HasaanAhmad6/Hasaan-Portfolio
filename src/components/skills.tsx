import { skillGroups } from "@/lib/skills";
import { BrandMark } from "@/components/brand-mark";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:px-16 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs tracking-[0.3em] text-grey-2 uppercase">
          Toolkit
        </p>
        <h2 className="mb-14 font-display text-5xl font-bold tracking-tight text-fg md:text-6xl lg:text-7xl">
          Skills
        </h2>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
                {group.items.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    className="skill-pill group relative grid h-14 md:h-16 place-items-center rounded-full border border-white/10 bg-grey-1 text-fg transition-[border-color,box-shadow,background-color,color] duration-300"
                    style={{
                      "--skill-bg": s.bg,
                      "--skill-logo": s.logoColor,
                    } as React.CSSProperties}
                  >
                    <span className="skill-label font-display text-xs font-semibold tracking-wide md:text-sm">
                      {s.name}
                    </span>
                    <span className="skill-logo text-white">
                      <BrandMark name={s.name} size={20} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}