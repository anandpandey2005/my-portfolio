"use client";

import React, { useState, useEffect } from "react";
import { FolderGit2, Star, GitFork, ExternalLink, Search, Code, RefreshCw, Pin } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const PINNED_REPO_NAMES = [
  "apex_class",
  "jeevo",
  "mailer",
  "directplay",
  "my-portfolio",
  "website_template_showcase",
];

export default function LiveProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ALL");
  const [showPinnedOnly, setShowPinnedOnly] = useState<boolean>(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users/anandpandey2005/repos?sort=updated&per_page=100");
        if (res.ok) {
          const data: Repository[] = await res.json();
          setRepos(data);
        } else {
          setFallbackRepos();
        }
      } catch (err) {
        console.error("Failed to fetch GitHub repos", err);
        setFallbackRepos();
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const setFallbackRepos = () => {
    setRepos([
      {
        id: 1,
        name: "my-portfolio",
        description: "Special Edition Tech Gazette & Interactive Developer Dossier built with Next.js, Tailwind CSS & TypeScript.",
        html_url: "https://github.com/anandpandey2005/my-portfolio",
        stargazers_count: 5,
        forks_count: 1,
        language: "TypeScript",
        topics: ["nextjs", "tailwindcss", "portfolio", "react"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 2,
        name: "apex_class",
        description: "Production-ready Academy Management System featuring Admin & Student Portals, RBAC, Fee Management, PDF Receipts & Attendance Analytics.",
        html_url: "https://github.com/anandpandey2005/apex_class",
        stargazers_count: 4,
        forks_count: 1,
        language: "TypeScript",
        topics: ["nextjs", "react", "typescript", "express"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 3,
        name: "jeevo",
        description: "A blood coordination platform built to reduce delay between urgent need, donor response, and hospital action.",
        html_url: "https://github.com/anandpandey2005/jeevo",
        stargazers_count: 3,
        forks_count: 0,
        language: "JavaScript",
        topics: ["react", "express", "mongodb"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 4,
        name: "Mailer",
        description: "Parse PDF & Excel files, extract email addresses, and send personalized campaigns using custom templates in seconds.",
        html_url: "https://github.com/anandpandey2005/Mailer",
        stargazers_count: 3,
        forks_count: 0,
        language: "TypeScript",
        topics: ["nextjs", "nodemailer", "exceljs"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 5,
        name: "directPlay",
        description: "A lightweight, responsive web-based live stream and video player designed for seamless multi-channel streaming.",
        html_url: "https://github.com/anandpandey2005/directPlay",
        stargazers_count: 2,
        forks_count: 1,
        language: "HTML",
        topics: ["streaming", "hls", "video-player"],
        updated_at: new Date().toISOString(),
      },
    ]);
  };

  const isRepoPinned = (name: string) => PINNED_REPO_NAMES.includes(name.toLowerCase());

  const languages = ["ALL", ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean))) as string[]];

  const filteredRepos = repos.filter((repo) => {
    const isPinned = isRepoPinned(repo.name);
    if (showPinnedOnly && !isPinned) return false;

    const matchesSearch =
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLang = selectedLanguage === "ALL" || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    const aPinned = isRepoPinned(a.name);
    const bPinned = isRepoPinned(b.name);

    if (aPinned && !bPinned) return -1;
    if (!aPinned && bPinned) return 1;
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  const pinnedCount = repos.filter((r) => isRepoPinned(r.name)).length;

  return (
    <div id="live-projects" className="w-full border-2 border-current p-5 sm:p-6 flex flex-col gap-5 bg-black/5 dark:bg-white/5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-current pb-3 gap-2">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-5 h-5" />
          <h2 className="font-serif-heading text-xl sm:text-2xl font-bold uppercase tracking-tight">
            ▌PUBLIC REPOSITORY ARCHIVE ({repos.length})
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-tech text-[10px] uppercase font-bold border border-current px-2 py-0.5 bg-amber-500 text-black border-amber-600 flex items-center gap-1">
            <Pin className="w-2.5 h-2.5 fill-current" /> {pinnedCount} PINNED ON TOP
          </span>
          <span className="font-mono-tech text-[10px] uppercase font-bold border border-current px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black hidden sm:inline-block">
            LIVE GITHUB API SYNC
          </span>
        </div>
      </div>

      {/* Controls: Search, Pinned Toggle & Language Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between font-mono-tech text-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-2.5 opacity-60" />
          <input
            type="text"
            placeholder="Search repositories by name or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/60 dark:bg-black/60 border border-current pl-9 pr-3 py-2 text-xs font-mono-tech rounded-xs focus:outline-none focus:ring-1 focus:ring-current"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {/* Pinned Filter Toggle */}
          <button
            onClick={() => setShowPinnedOnly(!showPinnedOnly)}
            className={`px-2.5 py-1 text-[10px] uppercase font-bold border transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
              showPinnedOnly
                ? "bg-amber-500 text-black border-amber-600 font-extrabold shadow-xs"
                : "border-current/40 opacity-80 hover:opacity-100 hover:border-current"
            }`}
          >
            <Pin className="w-3 h-3 fill-current" />
            {showPinnedOnly ? "PINNED ONLY" : "PINNED"}
          </button>

          <span className="opacity-70 text-[11px] font-bold ml-1 mr-1 shrink-0">LANG:</span>
          {languages.slice(0, 6).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-2 py-1 text-[10px] uppercase font-bold border transition-all cursor-pointer shrink-0 ${
                selectedLanguage === lang
                  ? "bg-black text-white dark:bg-white dark:text-black border-current"
                  : "border-transparent opacity-70 hover:opacity-100 border-current/20"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repos Grid */}
      {loading ? (
        <div className="py-12 text-center font-mono-tech text-xs flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4 animate-spin" /> FETCHING LIVE REPOSITORIES FROM GITHUB...
        </div>
      ) : sortedRepos.length === 0 ? (
        <div className="py-8 text-center font-mono-tech text-xs opacity-75 border border-dashed border-current/40 p-4">
          No repositories found matching &quot;{searchTerm}&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {sortedRepos.map((repo) => {
            const pinned = isRepoPinned(repo.name);
            return (
              <div
                key={repo.id}
                className={`border p-4 rounded-xs flex flex-col justify-between gap-3 transition-all group relative ${
                  pinned
                    ? "border-amber-500/70 dark:border-amber-400/60 bg-amber-500/5 dark:bg-amber-400/5 shadow-xs hover:border-amber-500"
                    : "border-current/40 bg-white/30 dark:bg-black/30 hover:border-current hover:shadow-md"
                }`}
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      {pinned && (
                        <span className="inline-flex items-center gap-1 font-mono-tech text-[9px] uppercase font-bold text-amber-700 dark:text-amber-300 tracking-wider">
                          <Pin className="w-2.5 h-2.5 fill-current" /> PINNED REPOSITORY
                        </span>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif-heading text-lg font-bold hover:underline flex items-center gap-1.5 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-300"
                      >
                        <Code className="w-4 h-4 shrink-0 text-current opacity-75" />
                        {repo.name}
                      </a>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border border-current/40 rounded-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shrink-0"
                      title="View on GitHub"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="font-sans-body text-xs opacity-85 line-clamp-2 leading-relaxed">
                    {repo.description || "Scalable software project crafted with clean code principles."}
                  </p>
                </div>

                {/* Repo Footer Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] pt-2 border-t border-dashed border-current/30 opacity-90">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        {repo.language}
                      </span>
                    )}

                    <span className="flex items-center gap-1" title="Stars">
                      <Star className="w-3 h-3 fill-current opacity-80" />
                      {repo.stargazers_count}
                    </span>

                    <span className="flex items-center gap-1" title="Forks">
                      <GitFork className="w-3 h-3 opacity-80" />
                      {repo.forks_count}
                    </span>
                  </div>

                  <span className="text-[10px] opacity-60">
                    {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

