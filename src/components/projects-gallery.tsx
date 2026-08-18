"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";
import { SocialIcon } from "@/components/social-icons";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-[88%] w-[82vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-grey-1 text-fg shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] sm:w-[46vw] md:w-[40vw] lg:w-[30vw] xl:w-[26vw]"
    >
      <div
        className="relative min-h-0 flex-1 overflow-hidden p-4 flex flex-col justify-between"
        style={{
          background: `radial-gradient(120% 120% at 18% 0%, ${project.accent}26, transparent 55%), linear-gradient(160deg, ${project.accent}3a, #101010 75%)`,
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -bottom-10 select-none font-display font-black uppercase leading-none text-white/[0.06] transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"
          style={{ fontSize: "clamp(5rem, 16vw, 11rem)" }}
        >
          {project.title.slice(0, 1)}
        </span>

        <div className="flex items-center justify-between z-10">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest"
            style={{
              color: project.accent,
              background: "rgba(0,0,0,0.55)",
              boxShadow: `inset 0 0 0 1px ${project.accent}44`,
            }}
          >
            {project.tagline}
          </span>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="grid h-8 w-8 place-items-center rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-accent hover:border-accent transition-colors z-20 cursor-pointer"
            >
              <SocialIcon name="github" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="flex shrink-0 items-end justify-between gap-4 p-6 bg-grey-1/90 backdrop-blur-sm transition-colors group-hover:bg-grey-1"
      >
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs md:text-sm text-grey-2">
            {project.summary}
          </p>
        </div>
        <span className="shrink-0 font-display text-xs text-grey-2">
          {project.year}
        </span>
      </Link>
    </motion.article>
  );
}

export function ProjectsGallery() {
  const sceneRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const section = sceneRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobileView = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const getTravel = () => {
        const spacer = track.lastElementChild as HTMLElement | null;
        if (!spacer) return 0;
        const spacerRect = spacer.getBoundingClientRect();
        return Math.max(spacerRect.right - document.documentElement.clientWidth, 0);
      };

      if (!isMobileView) {
        // Desktop: horizontal scroll
        gsap.to(track, {
          x: () => -getTravel(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + getTravel() * 2,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative overflow-hidden bg-bg text-fg"
    >
      <div className="shrink-0 px-6 pt-16 pb-8 md:px-16 md:pt-20 md:pb-2">
        <p className="mb-4 text-xs tracking-[0.3em] text-grey-2 uppercase">
          Selected Work · ({projects.length} Repositories)
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Projects
        </h2>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden md:block">
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center gap-6 overflow-hidden will-change-transform pl-[6vw]"
          style={{ height: "calc(100vh - 14rem)", minWidth: "max-content" }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
          <div className="w-[30vw] shrink-0" />
        </div>
      </div>

      {/* Mobile Vertical Stack */}
      <div className="flex md:hidden flex-col items-center gap-8 px-6 pb-16">
        {projects.map((p) => (
          <div key={p.slug} className="w-full max-w-xl">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}