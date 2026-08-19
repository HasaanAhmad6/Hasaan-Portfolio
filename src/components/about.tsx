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
          Engineer who ships
          <br />
          things people actually use.
        </TextOutline>
        <div className="mt-6 max-w-lg space-y-4 text-base leading-8 text-black/80 md:text-lg md:leading-9">
          <p>
            I&rsquo;m a full-stack and AI engineer currently interning at <strong className="font-semibold text-black">iCode Software House</strong>, where I work on React Native and Django systems — including a sale-prediction and automated low-stock ordering flow. Alongside that, I build independently: a published npm package (<code className="rounded bg-black/5 px-1 py-0.5 text-xs font-mono text-black">@hasaan_6/rag-chatbot-widget</code>), a computer vision system detecting image tampering with 90%+ accuracy, and a telemetry/observability platform with ML-based error clustering.
          </p>
          <p>
            I care most about the parts of engineering that don&rsquo;t show up in a demo: getting the underlying approach <em className="italic">correct</em> (not just working), and shipping things other people can actually install, deploy, or extend. <strong className="font-semibold text-black">React, Next.js, Python, and AWS</strong> are my primary tools; <strong className="font-semibold text-black">TensorFlow and MediaPipe</strong> for the ML/CV work.
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