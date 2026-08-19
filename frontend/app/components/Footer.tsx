"use client";

import React from "react";
import Image from "next/image";
import { Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="connect" className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 mt-12 mb-8 select-none font-mono-tech">
      <div className="news-divider-thick mb-6"></div>

      <div className="flex flex-col items-center gap-6 text-center">
        {/* Monospace Decorative Banner */}
        <pre className="text-[10px] sm:text-xs font-bold leading-tight select-none opacity-90 overflow-x-auto w-full text-center">
          {`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Portfolio ↗ anandpandey2005.vercel.app      GitHub ↗ anandpandey2005
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          "BUILDING WITH LOGIC — DESIGNING WITH PASSION"
                   ALL BUGS RESERVED © 2025-2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}
        </pre>

        {/* Social Connect Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://anandpandey2005.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-xs font-bold rounded-xs border border-current hover:opacity-85 transition-all"
          >
            <Globe className="w-4 h-4" /> Portfolio Site
          </a>

          <a
            href="https://github.com/anandpandey2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-xs font-bold rounded-xs border border-current hover:opacity-85 transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg> GitHub Profile
          </a>

          <a
            href="https://linkedin.com/in/anandpandey2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-xs font-bold rounded-xs border border-current hover:opacity-85 transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg> LinkedIn
          </a>
        </div>

        {/* Readers Count Badge */}
        <div className="flex flex-col items-center gap-2 pt-2">
          <Image
            src="https://komarev.com/ghpvc/?username=anandpandey2005&color=000000&style=flat-square&label=READERS+THIS+EDITION"
            alt="Profile Readers Count"
            width={200}
            height={28}
            className="h-6 w-auto object-contain"
            unoptimized
          />
          <p className="text-[11px] opacity-75">
            Badarpur, Delhi, IN • Crafting Scalable Web Applications
          </p>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs font-bold border border-current px-3 py-1.5 rounded-xs hover:bg-black/10 dark:hover:bg-white/10 transition-colors mt-2 cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" /> BACK TO TOP
        </button>
      </div>
    </footer>
  );
}
