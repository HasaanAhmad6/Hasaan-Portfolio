import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Cursor } from "@/components/cursor";
import { PortfolioChatbot } from "@/components/PortfolioChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasaan Ahmad — Full-Stack Developer & AI Solutions",
  description:
    "Personal portfolio of Hasaan Ahmad — Computer Science Student, Full-Stack Developer, and AI Solutions Engineer.",
  keywords: [
    "Hasaan Ahmad",
    "Portfolio",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "AWS",
    "Machine Learning",
    "TensorFlow",
    "RAG Chatbot",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-full bg-bg text-fg selection:bg-accent selection:text-black">
        <SmoothScroll>
          <Nav />
          {children}
          <PortfolioChatbot />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}