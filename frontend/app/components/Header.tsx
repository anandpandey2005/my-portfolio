"use client";

import React from "react";
import { Terminal, Moon, Sun, Newspaper, Layers, Code, Cpu, Mail, Star } from "lucide-react";

interface HeaderProps {
  theme: "newsprint" | "dark" | "modern";
  setTheme: (t: "newsprint" | "dark" | "modern") => void;
  onOpenTerminal: () => void;
}

export default function Header({ theme, setTheme, onOpenTerminal }: HeaderProps) {
  const navItems = [
    { href: "#special-report", label: "Lead Story", icon: Newspaper },
    { href: "#tech-arsenal", label: "Tech Arsenal", icon: Cpu },
    { href: "#live-projects", label: "Repositories", icon: Code },
    { href: "#skills-index", label: "Skills Index", icon: Layers },
    { href: "#connect", label: "Connect", icon: Mail },
  ];

  return (
    <header className="w-full select-none mb-6">
      {/* Main Newspaper Masthead Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 pt-4 sm:pt-6">
        {/* Big Masthead Title */}
        <div className="text-center py-3 sm:py-4 relative my-1 sm:my-2">
          <div className="news-divider-thick mb-2 sm:mb-3"></div>
          <h1 className="font-serif-heading text-3xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-center leading-none">
            The Pandey Gazette
          </h1>
          <p className="font-serif-heading italic text-xs sm:text-base mt-2 opacity-80 tracking-wide">
            &quot;The Premier Journal of Scalable Architecture, Clean Code & Software Craftsmanship&quot;
          </p>
          <div className="news-divider-thick mt-2 sm:mt-3"></div>
        </div>

        {/* Navigation & Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 py-2.5 border-y-2 border-current text-xs font-mono-tech">
          {/* Nav Items (Scrollable & Responsive) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xs border border-current/30 hover:border-current bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/15 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5 group"
                >
                  <span className="opacity-60 text-[10px] font-mono-tech">{index + 1}.</span>
                  <Icon className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action & Theme Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t border-dashed border-current/30 pt-2 lg:pt-0 lg:border-t-0">
            {/* Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 bg-black text-white dark:bg-white dark:text-black px-2.5 sm:px-3 py-1.5 rounded-xs font-bold hover:opacity-85 transition-all text-xs cursor-pointer border border-current shrink-0"
              title="Open CLI Terminal Mode"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-[11px] sm:text-xs">CLI TERMINAL</span>
            </button>

            {/* Theme Selector */}
            <div className="flex items-center border border-current rounded-xs p-0.5 gap-0.5 sm:gap-1 bg-black/5 dark:bg-white/10 shrink-0">
              <button
                onClick={() => setTheme("newsprint")}
                className={`px-2 py-1 rounded-xs text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  theme === "newsprint"
                    ? "bg-amber-100 text-stone-900 shadow-xs border border-amber-300 font-extrabold"
                    : "opacity-60 hover:opacity-100"
                }`}
                title="Vintage Newsprint Theme"
              >
                <Newspaper className="w-3 h-3" />
                <span>PRINT</span>
              </button>

              <button
                onClick={() => setTheme("modern")}
                className={`px-2 py-1 rounded-xs text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  theme === "modern"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-300 font-extrabold"
                    : "opacity-60 hover:opacity-100"
                }`}
                title="Modern Clean Light Theme"
              >
                <Sun className="w-3 h-3 text-amber-500" />
                <span>LIGHT</span>
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`px-2 py-1 rounded-xs text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-800 text-emerald-400 shadow-xs border border-slate-700 font-extrabold"
                    : "opacity-60 hover:opacity-100"
                }`}
                title="Cyber Dark Theme"
              >
                <Moon className="w-3 h-3" />
                <span>DARK</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

