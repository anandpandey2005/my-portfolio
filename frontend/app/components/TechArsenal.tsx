"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, Layers } from "lucide-react";

interface TechItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "tools";
  badgeUrl: string;
  description: string;
  experience: string;
  color: string;
}

const TECH_ITEMS: TechItem[] = [
  // Languages
  {
    name: "C++",
    category: "languages",
    badgeUrl: "https://img.shields.io/badge/-C++-000000?style=flat-square&logo=cplusplus&logoColor=white",
    description: "High-performance object-oriented programming, data structures & algorithms.",
    experience: "Core Logic",
    color: "#00599C",
  },
  {
    name: "JavaScript",
    category: "languages",
    badgeUrl: "https://img.shields.io/badge/-JavaScript-000000?style=flat-square&logo=javascript&logoColor=white",
    description: "ES6+, async programming, closures, event loop & DOM manipulation.",
    experience: "Expert",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "languages",
    badgeUrl: "https://img.shields.io/badge/-TypeScript-000000?style=flat-square&logo=typescript&logoColor=white",
    description: "Strict typing, generics, interfaces & enterprise application safety.",
    experience: "Proficient",
    color: "#3178C6",
  },

  // Frontend
  {
    name: "React",
    category: "frontend",
    badgeUrl: "https://img.shields.io/badge/-React-000000?style=flat-square&logo=react&logoColor=white",
    description: "Hooks, custom hooks, Virtual DOM optimization & component architecture.",
    experience: "Advanced",
    color: "#61DAFB",
  },
  {
    name: "HTML5",
    category: "frontend",
    badgeUrl: "https://img.shields.io/badge/-HTML5-000000?style=flat-square&logo=html5&logoColor=white",
    description: "Semantic markup, accessibility (a11y), SEO optimization.",
    experience: "Master",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: "frontend",
    badgeUrl: "https://img.shields.io/badge/-CSS3-000000?style=flat-square&logo=css3&logoColor=white",
    description: "Flexbox, Grid, keyframe animations, CSS variables & responsive layout.",
    experience: "Master",
    color: "#1572B6",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    badgeUrl: "https://img.shields.io/badge/-TailwindCSS-000000?style=flat-square&logo=tailwind-css&logoColor=white",
    description: "Utility-first design, custom themes, dark mode & responsive UI.",
    experience: "Advanced",
    color: "#06B6D4",
  },
  {
    name: "Redux",
    category: "frontend",
    badgeUrl: "https://img.shields.io/badge/-Redux-000000?style=flat-square&logo=redux&logoColor=white",
    description: "Global state management, Redux Toolkit (RTK) & middleware.",
    experience: "Proficient",
    color: "#764ABC",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    badgeUrl: "https://img.shields.io/badge/-Node.js-000000?style=flat-square&logo=node.js&logoColor=white",
    description: "Event-driven non-blocking I/O, REST APIs & server runtime.",
    experience: "Advanced",
    color: "#339933",
  },
  {
    name: "Express",
    category: "backend",
    badgeUrl: "https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white",
    description: "Web application framework, routing, middleware & REST API construction.",
    experience: "Advanced",
    color: "#000000",
  },
  {
    name: "Axios",
    category: "backend",
    badgeUrl: "https://img.shields.io/badge/-Axios-000000?style=flat-square&logo=axios&logoColor=white",
    description: "HTTP client, interceptors, request/response transformation.",
    experience: "Proficient",
    color: "#5A29E4",
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    badgeUrl: "https://img.shields.io/badge/-MongoDB-000000?style=flat-square&logo=mongodb&logoColor=white",
    description: "NoSQL document storage, Mongoose ORM, aggregation pipelines.",
    experience: "Advanced",
    color: "#47A248",
  },
  {
    name: "MySQL",
    category: "databases",
    badgeUrl: "https://img.shields.io/badge/-MySQL-000000?style=flat-square&logo=mysql&logoColor=white",
    description: "Relational database schema, SQL queries, indexing & joins.",
    experience: "Proficient",
    color: "#4479A1",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    badgeUrl: "https://img.shields.io/badge/-Git-000000?style=flat-square&logo=git&logoColor=white",
    description: "Version control, branching strategies, rebase & commit discipline.",
    experience: "Advanced",
    color: "#F05032",
  },
  {
    name: "NPM",
    category: "tools",
    badgeUrl: "https://img.shields.io/badge/-npm-000000?style=flat-square&logo=npm&logoColor=white",
    description: "Package management, dependency resolution, build scripts.",
    experience: "Proficient",
    color: "#CB3837",
  },
];

export default function TechArsenal() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<TechItem | null>(null);

  const categories = [
    { id: "all", label: "ALL TECH" },
    { id: "languages", label: "LANGUAGES" },
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
    { id: "databases", label: "DATABASES" },
    { id: "tools", label: "TOOLS" },
  ];

  const filteredItems =
    activeTab === "all"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div id="tech-arsenal" className="border-2 border-current p-4 sm:p-5 flex flex-col gap-4 bg-black/5 dark:bg-white/5">
      <div className="flex items-center justify-between border-b border-current pb-2">
        <h2 className="font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
          <Cpu className="w-4 h-4" /> ▌TECH ARSENAL
        </h2>
        <span className="text-[10px] font-mono-tech border border-current px-1.5 py-0.5 uppercase">
          15+ TECHNOLOGIES
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-current/20 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-2 py-1 text-[11px] font-mono-tech font-bold uppercase transition-all cursor-pointer border ${activeTab === cat.id
                ? "bg-black text-white dark:bg-white dark:text-black border-current"
                : "border-transparent opacity-70 hover:opacity-100 hover:border-current/40"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Badges Grid (Max-Height Scroll Container to prevent layout overflow) */}
      <div className="max-h-[360px] sm:max-h-[400px] overflow-y-auto pr-1 flex flex-col gap-2.5 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-1">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedItem(item)}
              className={`p-2.5 border border-current/30 rounded-xs flex flex-col justify-between gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-current hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-xs ${
                selectedItem?.name === item.name ? "ring-2 ring-current font-bold bg-amber-500/10 dark:bg-amber-400/10" : ""
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 min-w-0">
                <span className="font-mono-tech text-xs font-bold truncate max-w-[120px] sm:max-w-none">{item.name}</span>
                <span className="text-[9px] font-mono-tech opacity-75 border border-current/40 px-1 py-0.5 whitespace-nowrap shrink-0">
                  {item.experience}
                </span>
              </div>

              <div className="relative h-6 w-full flex items-center">
                <Image
                  src={item.badgeUrl}
                  alt={item.name}
                  width={90}
                  height={20}
                  className="h-5 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Selected Tech Info Box */}
      {selectedItem && (
        <div className="border border-current p-3 bg-black/10 dark:bg-white/10 rounded-xs mt-1 text-xs font-mono-tech flex flex-col gap-1 animate-fadeIn">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5 text-sm">
              <Layers className="w-3.5 h-3.5" /> {selectedItem.name}
            </span>
            <span className="uppercase text-[10px] px-1.5 py-0.5 border border-current bg-black text-white dark:bg-white dark:text-black">
              {selectedItem.category}
            </span>
          </div>
          <p className="opacity-90 font-sans-body leading-relaxed mt-1 text-xs">
            {selectedItem.description}
          </p>
        </div>
      )}
    </div>
  );
}
