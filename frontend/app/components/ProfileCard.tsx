"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, Mail, Check, ExternalLink, Code } from "lucide-react";

export default function ProfileCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anandpandey2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-2 border-current p-4 sm:p-5 flex flex-col gap-5 bg-black/5 dark:bg-white/5 relative">
      {/* Editorial Header Badge */}
      <div className="flex items-center justify-between border-b border-current pb-2">
        <h2 className="font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
          <Code className="w-4 h-4" /> ▌PROFILE DOSSIER
        </h2>
        <span className="text-[10px] font-mono-tech border border-current px-1.5 py-0.5 uppercase">
          VERIFIED DEV
        </span>
      </div>

      {/* Profile Photo & ASCII Header Box */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative group">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xs overflow-hidden border-2 border-current shadow-md relative bg-stone-200 dark:bg-stone-800">
            <Image
              src="/anandpandey.webp"
              alt="Anand Pandey Profile Avatar"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 128px, 144px"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black text-white dark:bg-white dark:text-black font-mono-tech text-[10px] font-bold px-2 py-0.5 rounded-xs border border-current">
            AP
          </div>
        </div>

        <div>
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold uppercase tracking-tight">
            ANAND PANDEY
          </h3>
          <p className="font-mono-tech text-xs font-semibold opacity-85 uppercase tracking-wider mt-0.5">
            Full Stack Developer & Engineer
          </p>
          <p className="font-mono-tech text-[10px] opacity-75 mt-1 font-semibold">
            🎓 BCA — Guru Gobind Singh Indraprastha University (GGSIPU)
          </p>
        </div>
      </div>

      <div className="news-divider-thin"></div>

      {/* Contact Info Block */}
      <div className="flex flex-col gap-2.5 text-xs font-mono-tech">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-dashed border-current/30 pb-1.5">
          <span className="flex items-center gap-2 opacity-70 shrink-0">
            <Globe className="w-3.5 h-3.5" /> PORTFOLIO
          </span>
          <a
            href="https://anandpandey2005.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline flex items-center gap-1 min-w-0 max-w-full text-right truncate text-amber-700 dark:text-amber-400"
          >
            <span className="truncate">anandpandey2005.vercel.app</span>
            <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-dashed border-current/30 pb-1.5">
          <span className="flex items-center gap-2 opacity-70 shrink-0">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            GITHUB
          </span>
          <a
            href="https://github.com/anandpandey2005"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline flex items-center gap-1 min-w-0 max-w-full text-right truncate"
          >
            <span className="truncate">anandpandey2005</span>
            <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-dashed border-current/30 pb-1.5">
          <span className="flex items-center gap-2 opacity-70 shrink-0">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
            LINKEDIN
          </span>
          <a
            href="https://linkedin.com/in/anandpandey2005"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline flex items-center gap-1 min-w-0 max-w-full text-right truncate"
          >
            <span className="truncate">in/anandpandey2005</span>
            <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 mt-1">
        <button
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black py-2 px-3 font-mono-tech text-xs font-bold hover:opacity-90 transition-all border border-current cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" /> EMAIL COPIED!
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5" /> COPY DIRECT EMAIL
            </>
          )}
        </button>
      </div>
    </div>
  );
}
