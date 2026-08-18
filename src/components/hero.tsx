"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const NAME = "Hasaan Ahmad";
const ROLE = "Computer Science · Full-Stack Developer & AI Solutions";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = e.currentTarget;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const r = 60;

    const mask = maskRef.current;
    if (mask) {
      const grad = `radial-gradient(circle ${r}px at ${x}px ${y}px, #000 35%, #000 60%, transparent 80%)`;
      mask.style.maskImage = grad;
      (
        mask.style as CSSStyleDeclaration & { webkitMaskImage: string }
      ).webkitMaskImage = grad;
      mask.style.opacity = "1";
    }
    const ring = ringRef.current;
    if (ring) {
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    if (maskRef.current) maskRef.current.style.opacity = "0";
    if (ringRef.current) ringRef.current.style.opacity = "0";
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-wordmark]",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power2.out" }
      );
      tl.fromTo(
        "[data-photo]",
        { y: reduced ? 0 : 50, opacity: 0 },
        { y: 0, opacity: 1, duration: reduced ? 0.6 : 1.0, ease: "power3.out" },
        "-=0.5"
      );
      tl.fromTo(
        "[data-copy]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
      tl.fromTo(
        "[data-scrollcue]",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      if (reduced) tl.progress(1);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex h-dvh flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background Wordmark */}
      <h1
        data-wordmark
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 select-none whitespace-nowrap text-center font-display font-bold leading-none text-white/[0.08]"
        style={{ fontSize: "clamp(4rem, 13vw, 13rem)" }}
      >
        DEVELOPER
      </h1>

      {/* Main Content Stack: Headshot + Name/Role */}
      <div className="relative z-10 flex flex-col items-center justify-center -mt-2 sm:-mt-4">
        {/* Headshot Container */}
        <div
          data-photo
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative aspect-[600/450] h-[44vh] sm:h-[48vh] md:h-[52vh] max-h-[500px] cursor-crosshair select-none will-change-transform"
        >
          {/* Base Grayscale Image */}
          <Image
            src="/images/hasaan-portrait-clean.png"
            alt="Hasaan Ahmad"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 420px"
            className="object-contain grayscale contrast-[1.08] brightness-[0.95]"
          />

          {/* Hover Radial Color Reveal */}
          <div
            ref={maskRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
          >
            <Image
              src="/images/hasaan-portrait-clean.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-contain contrast-[1.08]"
            />
          </div>

          {/* Interactive Focus Ring Follower */}
          <div
            ref={ringRef}
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-24 w-24 rounded-full border border-accent/80 opacity-0 shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-opacity duration-200 will-change-transform"
          />
        </div>

        {/* Name & Subtitle positioned cleanly below the headshot */}
        <div
          data-copy
          className="relative z-10 mt-2 md:mt-3 flex flex-col items-center gap-1 text-center px-4"
        >
          <p className="font-display text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-white">
            {NAME}
          </p>
          <p className="max-w-md text-xs sm:text-sm md:text-base text-grey-2 font-normal">
            {ROLE}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-scrollcue
        className="absolute bottom-6 z-10 flex h-9 w-5.5 items-start justify-center rounded-full border border-white/20 p-1"
      >
        <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
      </div>
    </section>
  );
}