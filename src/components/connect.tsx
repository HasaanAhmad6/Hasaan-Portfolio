"use client";

import { useState } from "react";
import { socials, SocialIcon } from "@/components/social-icons";
import { scrollToSection } from "@/lib/scroll";

const SOCIAL_LINKS: Record<string, string> = {
  github: "https://github.com/Hasaan6",
  linkedin: "https://www.linkedin.com/in/hasaan-ahmad-13b605334/",
  whatsapp: "https://wa.me/923035696807",
};

const EMAIL = "hasaanahmadn6@gmail.com";

export function Connect() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const message = fd.get("message") as string;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback to mailto link if EmailJS credentials are not configured yet
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name,
            email,
            message,
            title: "Portfolio Contact Form Message",
          },
        }),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
            <div className="flex flex-wrap gap-4 items-center">
              {/* Primary Action: Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center px-6 py-3 rounded-full bg-fg text-bg hover:bg-accent hover:text-black font-semibold text-sm transition-colors cursor-pointer h-12"
              >
                Email Me
              </a>
              {/* Primary Action: LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-grey-1 hover:border-white/40 text-fg font-semibold text-sm transition-colors cursor-pointer h-12"
              >
                LinkedIn
              </a>
              {/* Secondary Action: GitHub (as-is circular icon) */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-btn grid h-12 w-12 place-items-center rounded-full border border-white/10 transition-[color,box-shadow,border-color] duration-300"
                style={{ "--brand": socials.github.brand } as React.CSSProperties}
              >
                <SocialIcon name="github" className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm space-y-1 text-grey-2">
              <p className="text-fg font-medium">
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
              </p>
              <p className="text-fg font-medium">
                <a href="tel:+923035696807" className="hover:text-accent transition-colors">+92 303 5696807</a>
                <span className="text-grey-2 text-xs font-normal ml-2 inline-block align-middle">(WhatsApp available)</span>
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
              disabled={status === "sending"}
              className="mt-4 w-full sm:w-auto rounded-full bg-fg px-8 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent hover:text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="mt-3 text-xs text-accent font-medium transition-opacity">
                ✓ Message sent successfully! I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-xs text-red-500 font-medium transition-opacity">
                ✗ Failed to send message. Please try again or email directly.
              </p>
            )}
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