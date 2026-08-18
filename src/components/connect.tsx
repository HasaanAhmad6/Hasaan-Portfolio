"use client";

import { socials, SocialIcon } from "@/components/social-icons";
import { scrollToSection } from "@/lib/scroll";

const SOCIAL_LINKS: Record<string, string> = {
  github: "https://github.com/Hasaan6",
  linkedin: "https://www.linkedin.com/in/hasaan-ahmad-13b605334/",
  whatsapp: "https://wa.me/923035696807",
};

const EMAIL = "hasaanahmadn6@gmail.com";

export function Connect() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${fd.get("name")}`
    );
    const body = encodeURIComponent(
      `${fd.get("message")}\n\nFrom: ${fd.get("name")}\nReply to: ${fd.get("email")}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="relative px-6 py-20 md:px-16 md:pt-36 md:pb-12 bg-bg text-fg">
      <section id="connect" className="mb-20 md:mb-28">
        <p className="mb-4 text-xs tracking-[0.3em] text-grey-2 uppercase font-medium">
          Get in touch
        </p>
        <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Let&rsquo;s
          <br />
          Connect
        </h2>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              {["github", "linkedin", "whatsapp"].map((name) => {
                const def = socials[name];
                return (
                  <a
                    key={name}
                    href={SOCIAL_LINKS[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="social-btn grid h-12 w-12 place-items-center rounded-full border border-white/10 transition-[color,box-shadow,border-color] duration-300"
                    style={{ "--brand": def.brand } as React.CSSProperties}
                  >
                    <SocialIcon name={name} className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="text-sm space-y-1 text-grey-2">
              <p className="text-fg font-medium">
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
              </p>
              <p className="text-fg font-medium">
                <a href="tel:+923035696807" className="hover:text-accent transition-colors">+92 303 5696807</a>
              </p>
              <p>Gujranwala, Pakistan · Open to Remote & Relocation</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="rounded-2xl border border-white/10 bg-grey-1 px-4 py-3 text-sm outline-none placeholder:text-grey-2 focus:border-accent text-fg"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="rounded-2xl border border-white/10 bg-grey-1 px-4 py-3 text-sm outline-none placeholder:text-grey-2 focus:border-accent text-fg"
              />
            </div>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project, idea, or inquiry..."
              className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-grey-1 px-4 py-3 text-sm outline-none placeholder:text-grey-2 focus:border-accent text-fg"
            />
            <button
              type="submit"
              className="mt-4 w-full sm:w-auto rounded-full bg-fg px-8 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent hover:text-black cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-grey-2 sm:flex-row">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Hasaan Ahmad · All rights reserved</p>
        <button
          onClick={() => scrollToSection("#hero")}
          className="transition-colors hover:text-fg cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}