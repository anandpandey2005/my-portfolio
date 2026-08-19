"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon, CornerDownLeft, Minimize2 } from "lucide-react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState<string>("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "welcome",
      output: (
        <div className="text-emerald-400">
          <div>=======================================================================</div>
          <div>  ANAND PANDEY — DEVELOPER CLI TERMINAL v2.4</div>
          <div>  Type &apos;help&apos; to view available commands.</div>
          <div>=======================================================================</div>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="text-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
            <div><strong className="text-amber-400">help</strong> — List available CLI commands</div>
            <div><strong className="text-amber-400">bio</strong> — View developer dossier bio</div>
            <div><strong className="text-amber-400">skills</strong> — View technical arsenal & proficiency</div>
            <div><strong className="text-amber-400">contact</strong> — View contact links & email</div>
            <div><strong className="text-amber-400">github</strong> — Open Anand&apos;s GitHub profile</div>
            <div><strong className="text-amber-400">quote</strong> — Print developer guiding motto</div>
            <div><strong className="text-amber-400">clear</strong> — Clear terminal screen</div>
          </div>
        );
        break;

      case "bio":
      case "cat bio.txt":
        output = (
          <div className="text-zinc-300 text-xs leading-relaxed">
            <p className="text-emerald-400 font-bold">ANAND PANDEY — FULL STACK DEVELOPER</p>
            <p>Passionate software craftsman based in Badarpur, Delhi, IN.</p>
            <p>Specialized in clean code principles, modular React frontends, and scalable Node.js microservices.</p>
          </div>
        );
        break;

      case "skills":
      case "ls skills":
        output = (
          <div className="text-zinc-300 text-xs font-mono space-y-1">
            <div>[LANGUAGES] C++ (72%), JavaScript (92%), TypeScript (78%)</div>
            <div>[FRONTEND]  React (88%), HTML5/CSS3 (95%), TailwindCSS (82%), Redux (75%)</div>
            <div>[BACKEND]   Node.js (85%), Express (85%), Axios (90%)</div>
            <div>[DATABASE]  MongoDB (80%), MySQL (70%)</div>
            <div>[TOOLS]     Git (88%), NPM (90%)</div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-zinc-300 text-xs font-mono space-y-1">
            <div>🌐 Portfolio: https://anandpandey2005.vercel.app</div>
            <div>🐙 GitHub:    https://github.com/anandpandey2005</div>
            <div>📍 Location:  Badarpur, Delhi, IN</div>
            <div>✉️ Email:     anandpandey2005@gmail.com</div>
          </div>
        );
        break;

      case "github":
        window.open("https://github.com/anandpandey2005", "_blank");
        output = <div className="text-emerald-400">Opening GitHub profile in new tab...</div>;
        break;

      case "portfolio":
        window.open("https://anandpandey2005.vercel.app", "_blank");
        output = <div className="text-emerald-400">Opening Portfolio in new tab...</div>;
        break;

      case "quote":
        output = (
          <div className="text-amber-300 font-serif italic text-sm py-1">
            &quot;Build with logic, design with passion.&quot; — Anand Pandey
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-red-400 text-xs">
            Command not recognized: &apos;{cmd}&apos;. Type &apos;help&apos; for available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-950 text-zinc-100 border-2 border-emerald-500 rounded-sm shadow-2xl overflow-hidden font-mono flex flex-col h-[480px]">
        {/* Terminal Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between select-none">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
            <TerminalIcon className="w-4 h-4" />
            <span>anand@pandey-gazette:~ $ (CLI ENGINE)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-xs hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-red-400 hover:text-red-300 p-1 rounded-xs hover:bg-red-950/50 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              {log.command !== "welcome" && (
                <div className="flex items-center gap-2 text-zinc-400 font-bold">
                  <span className="text-emerald-400">anand@pandey-gazette:~$</span>
                  <span>{log.command}</span>
                </div>
              )}
              <div>{log.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="bg-zinc-900 border-t border-zinc-800 px-4 py-2 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'bio', 'skills', 'contact', 'clear')..."
            className="flex-1 bg-transparent text-xs text-emerald-300 font-mono focus:outline-none placeholder:text-zinc-600"
            autoFocus
          />
          <button type="submit" className="text-zinc-400 hover:text-emerald-400">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
