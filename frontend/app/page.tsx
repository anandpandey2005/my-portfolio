"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import TechArsenal from "./components/TechArsenal";
import SpecialReport from "./components/SpecialReport";
import LiveProjects from "./components/LiveProjects";
import SkillsIndex from "./components/SkillsIndex";
import Footer from "./components/Footer";
import TerminalModal from "./components/TerminalModal";

export default function Home() {
  const [theme, setTheme] = useState<"newsprint" | "dark" | "modern">("modern");
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.className = `theme-${theme} min-h-full flex flex-col font-sans transition-colors duration-300`;
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-300 selection:text-black dark:selection:bg-emerald-400 dark:selection:text-black">
      {/* Header & Masthead */}
      <Header
        theme={theme}
        setTheme={setTheme}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full max-w-full px-4 sm:px-6 lg:px-10 xl:px-12 flex-1 flex flex-col gap-8">
        {/* Top 3-Column Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start w-full">
          {/* Left Column (3 spans = 25% width on desktop) */}
          <section className="lg:col-span-3 flex flex-col gap-6 w-full">
            <ProfileCard />
            <TechArsenal />
          </section>

          {/* Center Column (6 spans = 50% width on desktop) */}
          <section className="lg:col-span-6 flex flex-col gap-6 w-full">
            <SpecialReport />
          </section>

          {/* Right Column (3 spans = 25% width on desktop) */}
          <section className="lg:col-span-3 flex flex-col gap-6 w-full">
            <SkillsIndex />
          </section>
        </div>

        {/* Full-Width Project Archive Row (100% w-full spanning all 12 columns) */}
        <section className="w-full">
          <LiveProjects />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Terminal Drawer / Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
