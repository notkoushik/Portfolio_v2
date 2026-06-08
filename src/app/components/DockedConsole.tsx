import React, { useState, useEffect, useRef } from "react";
import { Terminal, CornerDownLeft } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export function DockedConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "[SYSTEM]: Terminal loaded. Type 'help' or click links to execute tasks.", type: "system" },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Listen to external compilation events
  useEffect(() => {
    const handleLogEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const text = customEvent.detail.text;
        const type = customEvent.detail.type || "output";

        if (text && text.startsWith("[RUN]")) {
          // Trigger the streaming compile log sequence
          let delay = 0;
          const streamLines: TerminalLine[] = [
            { text: "[RUN]: Starting workspace compliance validation...", type: "system" },
            { text: "  ▸ parsing workspace folders tree: Flutter SDK, Android SDK 34, TF-Lite ops", type: "output" },
            { text: "  ▸ checking dependencies (Rust core: about.rs, Shell config: contact.sh)", type: "output" },
            { text: "  ▸ checking coordinate geometry for isometric visualizer: OK (stationary, 120x180 grid)", type: "output" },
            { text: "  ▸ bundling production bundle packages (built in 1.12s) with zero errors", type: "output" },
            { text: "[SUCCESS] compliance validation OK. Status: live & stable.", type: "system" },
            { text: "[INFO] local webserver listening at http://localhost:5173/", type: "output" }
          ];

          streamLines.forEach((line) => {
            setTimeout(() => {
              setHistory((prev) => [...prev, line]);
            }, delay);
            delay += 200 + Math.random() * 200; // realistic step delays
          });
        } else {
          setHistory((prev) => [
            ...prev,
            { text: text, type: type }
          ]);
        }
      }
    };
    window.addEventListener("terminal-log", handleLogEvent);
    return () => window.removeEventListener("terminal-log", handleLogEvent);
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    const newHistory = [...history, { text: `devpulse:~$ ${input}`, type: "input" as const }];

    switch (command) {
      case "help":
        newHistory.push(
          { text: "commands: clear | about | projects | socials", type: "system" }
        );
        break;
      case "about":
        newHistory.push({
          text: "Koushik Ahmed — Android & AI Engineer shipping high-performance mobile systems.",
          type: "output",
        });
        break;
      case "projects":
        newHistory.push({
          text: "Active files: DevPulse, MedTek EHR, Trace, Seamless Travel.",
          type: "output",
        });
        break;
      case "socials":
        newHistory.push({
          text: "GitHub: github.com/koushik-ahmed | LinkedIn: linkedin.com/in/koushik-ahmed",
          type: "output",
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({
          text: `err: '${command}' not found. type 'help'.`,
          type: "error",
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div 
      className="h-[120px] bg-[#070707] border-t border-[#F0EDE6]/10 font-mono text-[12px] flex flex-col justify-between shrink-0 select-text relative"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Console log outputs */}
      <div className="flex-1 overflow-y-auto px-6 py-3 space-y-1.5 scrollbar-none scroll-smooth">
        {history.map((line, idx) => (
          <div 
            key={idx} 
            className={
              line.type === "input" 
                ? "text-[#F0EDE6]" 
                : line.type === "error" 
                ? "text-red-400 font-bold" 
                : line.type === "system" 
                ? "text-[#FF4500]" 
                : "text-[#A1A1AA]"
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input bar */}
      <form 
        onSubmit={handleCommandSubmit} 
        className="h-8 border-t border-[#F0EDE6]/5 bg-[#0A0A0A] px-6 flex items-center gap-2"
      >
        <span className="text-[#FF4500] shrink-0 text-[11px]">devpulse:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-[#F0EDE6] p-0 font-mono text-[11px] focus:ring-0 focus:outline-none"
          placeholder="type help..."
        />
        <button type="submit" className="text-[#A1A1AA]/30 hover:text-[#FF4500] transition-colors p-0.5">
          <CornerDownLeft size={12} />
        </button>
      </form>
    </div>
  );
}
