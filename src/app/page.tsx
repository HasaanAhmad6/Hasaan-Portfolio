import { Hero } from "@/components/hero";
import { WipeTransition } from "@/components/wipe-transition";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { StripCutter } from "@/components/strip-cutter";
import { ProjectsGallery } from "@/components/projects-gallery";
import { Skills } from "@/components/skills";
import { Connect } from "@/components/connect";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <WipeTransition>
        <About />
      </WipeTransition>
      <Experience />
      <StripCutter />
      <ProjectsGallery />

      <Skills />

      <Connect />
    </main>
  );
}