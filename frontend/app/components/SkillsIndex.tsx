"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BarChart3, PieChart, Bus, Radio, Navigation, CheckCircle } from "lucide-react";

interface SkillItem {
  name: string;
  percentage: number;
  asciiBar: string;
  description: string;
}

const SKILLS: SkillItem[] = [
  {
    name: "JavaScript",
    percentage: 95,
    asciiBar: "████████████ 95%",
    description: "Deep knowledge of asynchronous patterns, ESNext syntax, event loops & DOM performance.",
  },
  {
    name: "React",
    percentage: 94,
    asciiBar: "████████████ 94%",
    description: "Component lifecycle, state management, custom hooks, Server Components & Vite/Next.js.",
  },
  {
    name: "Node.js",
    percentage: 93,
    asciiBar: "███████████░ 93%",
    description: "REST API engineering, Express routing, authentication, middleware & microservices.",
  },
  {
    name: "TailwindCSS",
    percentage: 93,
    asciiBar: "███████████░ 93%",
    description: "Utility architecture, responsive dynamic design systems, micro-animations & dark themes.",
  },
  {
    name: "TypeScript",
    percentage: 92,
    asciiBar: "███████████░ 92%",
    description: "Type inference, interfaces, generics, discriminated unions & strict compiler flags.",
  },
  {
    name: "MongoDB",
    percentage: 91,
    asciiBar: "██████████░░ 91%",
    description: "Document modeling, indexing strategies, aggregation frameworks & Mongoose ORM.",
  },
  {
    name: "C++",
    percentage: 90,
    asciiBar: "██████████░░ 90%",
    description: "Data Structures & Algorithms, memory management, pointers & algorithmic problem solving.",
  },
  {
    name: "MySQL",
    percentage: 90,
    asciiBar: "██████████░░ 90%",
    description: "Relational database design, normalized schemas, complex joins & SQL queries.",
  },
];

export default function SkillsIndex() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <div id="skills-index" className="border-2 border-current p-4 sm:p-5 flex flex-col gap-4 bg-black/5 dark:bg-white/5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-current pb-2">
        <h2 className="font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4" /> ▌SKILLS INDEX & PROFICIENCY
        </h2>
        <span className="text-[10px] font-mono-tech border border-current px-1.5 py-0.5 uppercase bg-emerald-500 text-black border-emerald-600 font-bold">
          AUDITED 90%+
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-4">
        {/* Skills List with Progress Bars */}
        <div className="flex flex-col gap-2.5">
          <div className="text-[11px] font-mono-tech opacity-75 border-b border-dashed border-current/30 pb-1">
            ── Proficiency Audit Report (90% — 95%) ──
          </div>

          <div className="flex flex-col gap-2">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className="flex flex-col gap-0.5 cursor-pointer group p-1 rounded-xs transition-colors hover:bg-black/10 dark:hover:bg-white/10"
              >
                <div className="flex justify-between items-center text-xs font-mono-tech">
                  <span className="font-bold group-hover:underline flex items-center gap-1">
                    {skill.name}
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 text-[11px]">{skill.percentage}%</span>
                </div>

                {/* Custom Bar Visual */}
                <div className="w-full h-3 bg-black/10 dark:bg-white/10 border border-current/60 p-0.5 relative rounded-xs overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 dark:bg-emerald-400 transition-all duration-700 ease-out rounded-2xs"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Skill Popover Detail */}
        {selectedSkill && (
          <div className="border border-current p-2.5 bg-black/10 dark:bg-white/10 text-xs font-mono-tech rounded-xs animate-fadeIn">
            <div className="font-bold flex items-center justify-between">
              <span>{selectedSkill.name} ANALYSIS</span>
              <span className="text-emerald-700 dark:text-emerald-400">{selectedSkill.percentage}% SCORE</span>
            </div>
            <p className="font-sans-body opacity-90 mt-1 text-[11px] leading-relaxed">
              {selectedSkill.description}
            </p>
          </div>
        )}

        <div className="news-divider-thin"></div>

        {/* Activity Repos Per Language */}
        <div className="flex flex-col gap-1.5">
          <div className="font-mono-tech text-xs uppercase font-bold flex items-center gap-1.5">
            <PieChart className="w-3.5 h-3.5" /> ▌LANGUAGE DISTRIBUTION
          </div>
          <div className="border border-current p-1.5 bg-white/40 dark:bg-black/40 flex justify-center">
            <Image
              src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=anandpandey2005&theme=default"
              alt="Anand Pandey Repos Per Language"
              width={320}
              height={140}
              className="w-full max-w-[260px] h-auto object-contain"
              unoptimized
            />
          </div>
        </div>

        <div className="news-divider-thin"></div>

        {/* System Route & Status Ticker */}
        <div className="flex flex-col gap-1.5 font-mono-tech text-xs">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Bus className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" /> ▌SYSTEM ROUTE DISPATCH
            </span>
            <span className="text-[9px] uppercase px-1.5 py-0.5 border border-current bg-black/10 dark:bg-white/10 font-bold flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 animate-pulse text-emerald-600 dark:text-emerald-400" /> LIVE TICKER
            </span>
          </div>

          <div className="border-2 border-current p-2.5 rounded-xs flex flex-col gap-1.5 bg-black/5 dark:bg-black/40 text-current shadow-xs">
            <div className="flex items-center justify-between border-b border-current/30 pb-1 text-[10px]">
              <span className="font-bold flex items-center gap-1 text-amber-700 dark:text-amber-300">
                <Navigation className="w-3 h-3" /> ROUTE #2026-EXPRESS
              </span>
              <span className="font-bold opacity-80 uppercase tracking-wider text-[9px]">[ FULL STACK PIPELINE ]</span>
            </div>

            <div className="overflow-hidden relative text-[10px] py-1 bg-black/10 dark:bg-black/60 px-2 rounded-xs border border-current/30">
              <div className="animate-ticker whitespace-nowrap tracking-wider font-bold">
                <span className="mx-3 text-amber-800 dark:text-amber-300">
                  🚀 DESTINATION: FULL-STACK & FREELANCE ENGINEER
                </span>
                <span className="mx-3 text-emerald-700 dark:text-emerald-400">
                  ⚡ ACTIVE STACK: NEXT.JS 15 + REACT 19 + TYPESCRIPT + NODE.JS
                </span>
                <span className="mx-3 text-blue-700 dark:text-blue-300">
                  ✅ AVAILABILITY: OPEN FOR CONTRACT & FREELANCE PROJECTS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 text-[9px] pt-0.5">
              <div className="flex items-center gap-1 font-bold">
                <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> STATUS: OPERATIONAL
              </div>
              <div className="flex items-center gap-1 font-bold">
                <CheckCircle className="w-3 h-3 text-amber-600 dark:text-amber-400" /> SPEED: 100% QUALITY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


