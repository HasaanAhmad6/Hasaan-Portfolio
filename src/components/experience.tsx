export function Experience() {
  return (
    <section id="experience" className="px-6 py-16 md:px-16 md:py-24 bg-bg text-fg">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs tracking-[0.3em] text-grey-2 uppercase font-medium">
          Career Path
        </p>
        <h2 className="mb-10 font-display text-5xl font-bold tracking-tight text-fg md:text-6xl lg:text-7xl">
          Experience
        </h2>

        <div className="relative rounded-2xl border border-white/10 bg-grey-1/40 p-6 md:p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-accent">
                Software Engineering Intern
              </h3>
              <p className="mt-1 text-sm font-semibold text-fg">
                iCode Software House
              </p>
            </div>
            <span className="inline-block self-start rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-grey-2">
              Jan 2026 — Present
            </span>
          </div>

          <div className="mt-6 text-sm md:text-base leading-7 md:leading-8 text-grey-2 max-w-3xl">
            <p>
              Full-stack development on a company management system built with React Native and Django. Worked on a sale prediction feature and a low-stock alert flow — when inventory drops below a set threshold, the system flags it and, on manager approval, automatically places a restock order with the vendor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
