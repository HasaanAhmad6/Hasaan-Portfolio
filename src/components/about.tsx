"use client";

import dynamic from "next/dynamic";
import { TextOutline } from "@/components/text-outline";

const TechObject = dynamic(
  () => import("@/components/tech-object").then((m) => m.TechObject),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-grey-1" />
    ),
  }
);

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:grid md:grid-cols-2 md:min-h-screen bg-fg text-bg"
    >
      {/* Left: intro + scroll-responsive outline heading */}
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-0">
        <p className="mb-4 text-xs tracking-[0.3em] text-black/50 uppercase font-semibold">
          About Me
        </p>
        <TextOutline className="font-display font-bold tracking-tight text-[clamp(2.5rem,8vw,5rem)] leading-[1.05]">
          Engineer who
          <br />
          builds with impact.
        </TextOutline>
        <div className="mt-6 max-w-lg space-y-4 text-base leading-8 text-black/80 md:text-lg md:leading-9">
          <p>
            I&rsquo;m a Computer Science undergraduate at the <strong className="font-semibold text-black">University of Central Punjab</strong>, passionate about building cutting-edge full-stack web applications and AI-powered solutions.
          </p>
          <p>
            With hands-on proficiency in <strong className="font-semibold text-black">React, Next.js, AWS Cloud, and Machine Learning</strong>, I design production-grade systems from database schemas to interactive frontends and conversational RAG pipelines.
          </p>
        </div>
      </div>

      {/* Right: realistic 3D interactive tech object */}
      <div className="relative flex items-center justify-center overflow-hidden px-4 py-8 md:px-8 md:py-0">
        <div className="h-full w-full max-w-[520px]">
          <TechObject />
        </div>
      </div>
    </section>
  );
}