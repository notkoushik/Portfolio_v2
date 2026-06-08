import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Terminal, Play, CornerDownLeft } from "lucide-react";

interface BootScreenProps {
  onBootComplete: () => void;
}

export function BootScreen({ onBootComplete }: BootScreenProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [compilingStep, setCompilingStep] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Initial sequence
  useEffect(() => {
    const sequence = [
      "Connecting to Koushik Ahmed's core server...",
      "Resolving workspace package dependencies...",
      "System initialized. DevPulse OS loaded (v1.0.4).",
      "Ready to compile local environment on Port 5173.",
    ];

    sequence.forEach((line, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, `[SYSTEM]: ${line}`]);
      }, (idx + 1) * 600);
    });
  }, []);

  const startCompilation = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setLogs((prev) => [...prev, "portfolio-v2:~$ npm run dev", "[VITE]: > vite --host"]);

    const compileLogs = [
      "[VITE]: resolving configurations in vite.config.ts...",
      "[VITE]: compiling src/styles/fonts.css... done",
      "[VITE]: compiling src/app/components/Hero.md... done",
      "[VITE]: compiling src/app/components/Projects.json... done",
      "[VITE]: compiling src/app/components/Stack.yaml... done",
      "[VITE]: compiling src/app/components/About.rs... done",
      "[VITE]: compiling src/app/components/Contact.sh... done",
      "[VITE]: ✔ 5 packages loaded. compilation success in 720ms.",
      "[SYSTEM]: launching local dashboard interface...",
    ];

    compileLogs.forEach((line, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, line]);
        if (idx === compileLogs.length - 1) {
          setTimeout(() => {
            onBootComplete();
          }, 600);
        }
      }, (idx + 1) * 300);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (cmd === "npm run dev" || cmd === "dev.run" || cmd === "run") {
      startCompilation();
    } else {
      setLogs((prev) => [
        ...prev,
        `portfolio-v2:~$ ${input}`,
        `Command not recognized: '${input}'. Hint: Type 'npm run dev' to boot the server.`
      ]);
    }
    setInput("");
  };

  return (
    <div 
      className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center p-4 font-mono text-[13px] text-[#A1A1AA] select-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-[640px] border border-[#F0EDE6]/10 bg-[#070707] flex flex-col h-[400px] shadow-2xl relative">
        
        {/* Terminal Header */}
        <div className="h-10 border-b border-[#F0EDE6]/10 bg-[#0A0A0A] flex items-center justify-between px-4 select-none">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-[#FF4500]" />
            <span className="text-[#F0EDE6] font-bold text-[11px] uppercase tracking-wider">devpulse_console</span>
          </div>
          <span className="text-[#A1A1AA]/30 text-[10px]">localhost:5173</span>
        </div>

        {/* Scrollable logs area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          {logs.map((log, idx) => (
            <div 
              key={idx} 
              className={
                log.startsWith("[SYSTEM]") 
                  ? "text-[#FF4500]" 
                  : log.startsWith("[VITE]") 
                  ? "text-[#E2C08D]" 
                  : log.startsWith("portfolio-v2")
                  ? "text-[#F0EDE6]"
                  : "text-[#A1A1AA]"
              }
            >
              {log}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Console Prompt Input (only visible when not compiling) */}
        {!isCompiling && logs.length >= 4 && (
          <div className="p-6 border-t border-[#F0EDE6]/5 bg-[#0A0A0A]">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[#FF4500]">portfolio-v2:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-[#F0EDE6] p-0 font-mono focus:ring-0 focus:outline-none"
                placeholder="type 'npm run dev' to boot..."
                autoFocus
              />
              <button type="submit" className="text-[#A1A1AA]/50 hover:text-[#FF4500] p-1 transition-colors">
                <CornerDownLeft size={14} />
              </button>
            </form>

            {/* Clickable Quick Compile Helper */}
            <div className="mt-4 flex items-center justify-between text-[11px]">
              <span className="text-[#A1A1AA]/40">or click run to compiled automatically:</span>
              <button 
                type="button"
                onClick={startCompilation}
                className="flex items-center gap-1.5 bg-[#FF4500]/10 border border-[#FF4500]/30 hover:bg-[#FF4500]/20 hover:border-[#FF4500]/50 text-[#FF4500] px-3 py-1 rounded transition-all font-bold"
              >
                <Play size={10} fill="currentColor" />
                <span>$ npm run dev</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
