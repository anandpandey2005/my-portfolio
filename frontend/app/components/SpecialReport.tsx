"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Newspaper, Quote, GitCommit, Sparkles, Activity } from "lucide-react";

export default function SpecialReport() {
  const [activeCardTab, setActiveCardTab] = useState<"streak" | "graph" | "profile">("streak");

  return (
    <article id="special-report" className="border-2 border-current p-5 sm:p-6 flex flex-col gap-6 bg-black/5 dark:bg-white/5">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b-2 border-current pb-3">
        <div className="flex items-center gap-2">
          <Newspaper className="w-5 h-5" />
          <h2 className="font-serif-heading text-xl sm:text-2xl font-bold uppercase tracking-tight">
            ▌SPECIAL REPORT: THE DEVELOPER DOSSIER
          </h2>
        </div>
        <span className="font-mono-tech text-[10px] uppercase font-bold border border-current px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black">
          FRONT PAGE FEATURE
        </span>
      </div>

      {/* Headline & Subhead */}
      <div>
        <h3 className="font-serif-heading text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
          Full Stack Developer Quietly Assembles Formidable Tech Arsenal in Badarpur
        </h3>
        <p className="font-serif-heading italic text-sm mt-1 opacity-80 border-l-2 border-current pl-3 py-0.5">
          By Tech Chronicle Editorial Desk — Badarpur, Delhi
        </p>
      </div>

      {/* Main Article Body with Drop Cap */}
      <div className="font-sans-body text-sm leading-relaxed text-justify flex flex-col gap-4">
        <p className="drop-cap">
          <strong className="font-serif-heading uppercase">A</strong> passionate Full Stack Developer from Badarpur has quietly assembled a formidable arsenal of technologies — and is using them to build software that matters. Anand Pandey has distinguished himself not merely by the breadth of his technical competence, but by his unwavering commitment to <span className="font-bold underline decoration-2">clean code principles</span> and <span className="font-bold underline decoration-2">scalable architecture</span>.
        </p>

        <p>
          From crafting modular React frontends to engineering robust Node.js backends, Pandey treats every line of code as a deliberate act of craftsmanship. His stack spans the full spectrum — TypeScript for type safety, MongoDB and MySQL for data persistence, Redux for state management, and TailwindCSS for rapid, disciplined UI development.
        </p>

        {/* Pull Quote */}
        <blockquote className="my-2 p-4 border-y-2 border-current bg-black/5 dark:bg-white/10 italic font-serif-heading text-base sm:text-lg text-center relative">
          <Quote className="w-6 h-6 absolute top-2 left-2 opacity-20" />
          &ldquo;He approaches each project as a problem to be solved, not a task to be completed. The distinction matters enormously.&rdquo;
          <cite className="block not-italic font-mono-tech text-xs uppercase tracking-wider font-bold mt-2 opacity-80">
            — Senior Architectural Observer
          </cite>
        </blockquote>

        <p>
          Whether optimizing complex MongoDB database queries or refining component render performance, Pandey demonstrates an innate technical intuition paired with rigorous engineering discipline.
        </p>
      </div>

      <div className="news-divider-thick"></div>

      {/* GitHub Activity Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/30 pb-2">
          <h4 className="font-mono-tech text-xs uppercase font-bold tracking-widest flex items-center gap-1.5">
            <Activity className="w-4 h-4" /> ▌CONTRIBUTION ACTIVITY & METRICS
          </h4>
          <div className="flex gap-1 font-mono-tech text-[10px]">
            <button
              onClick={() => setActiveCardTab("streak")}
              className={`px-2 py-1 uppercase font-bold border transition-all cursor-pointer ${
                activeCardTab === "streak"
                  ? "bg-black text-white dark:bg-white dark:text-black border-current"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              Streak Stats
            </button>

            <button
              onClick={() => setActiveCardTab("graph")}
              className={`px-2 py-1 uppercase font-bold border transition-all cursor-pointer ${
                activeCardTab === "graph"
                  ? "bg-black text-white dark:bg-white dark:text-black border-current"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              Activity Graph
            </button>

            <button
              onClick={() => setActiveCardTab("profile")}
              className={`px-2 py-1 uppercase font-bold border transition-all cursor-pointer ${
                activeCardTab === "profile"
                  ? "bg-black text-white dark:bg-white dark:text-black border-current"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              Profile Card
            </button>
          </div>
        </div>

        {/* Dynamic Display Card */}
        <div className="border border-current p-4 bg-white/40 dark:bg-black/40 rounded-xs flex flex-col items-center justify-center min-h-[180px] overflow-x-auto w-full">
          {activeCardTab === "streak" && (
            <div className="w-full flex flex-col items-center gap-2">
              <span className="font-mono-tech text-xs opacity-75">
                GitHub Streak & Consistency Tracking
              </span>
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=anandpandey2005&theme=highcontrast&hide_border=true&background=f5f0e8&stroke=1a1a1a&ring=1a1a1a&fire=555555&currStreakNum=1a1a1a&sideNums=1a1a1a&currStreakLabel=555555&sideLabels=555555&dates=888888"
                alt="Anand Pandey GitHub Streak"
                width={650}
                height={240}
                className="w-full h-auto rounded-xs object-contain max-h-[300px]"
                unoptimized
              />
            </div>
          )}

          {activeCardTab === "graph" && (
            <div className="w-full flex flex-col items-center gap-2">
              <span className="font-mono-tech text-xs opacity-75">
                Commit Activity & Repository Contributions
              </span>
              <Image
                src="https://github-readme-activity-graph.vercel.app/graph?username=anandpandey2005&theme=github&hide_border=true&bg_color=f5f0e8&color=1a1a1a&line=555555&point=1a1a1a&area=true&area_color=cccccc"
                alt="Anand Pandey Commit Graph"
                width={750}
                height={280}
                className="w-full h-auto rounded-xs object-contain max-h-[320px]"
                unoptimized
              />
            </div>
          )}

          {activeCardTab === "profile" && (
            <div className="w-full flex flex-col items-center gap-2">
              <span className="font-mono-tech text-xs opacity-75">
                Full Profile Summary Card
              </span>
              <Image
                src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=anandpandey2005&theme=default"
                alt="Anand Pandey GitHub Profile Summary"
                width={650}
                height={240}
                className="w-full h-auto rounded-xs object-contain max-h-[300px]"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
