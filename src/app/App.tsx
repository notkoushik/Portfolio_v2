import { useState, useEffect, useRef } from "react";
import "../styles/fonts.css";
import { FileTree } from "./components/FileTree";
import { BootScreen } from "./components/BootScreen";
import { DockedConsole } from "./components/DockedConsole";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Play, RotateCcw } from "lucide-react";

const tabs = [
  { label: "Hero.md", id: "hero" },
  { label: "Projects.json", id: "projects" },
  { label: "Stack.yaml", id: "stack" },
  { label: "About.rs", id: "about" },
  { label: "Contact.sh", id: "contact" },
];

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mainScrollRef = useRef<HTMLDivElement>(null);

  // Auto-detect active section on scroll
  useEffect(() => {
    if (!isBooted) return;

    const observerOptions = {
      root: mainScrollRef.current,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.05,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const ids = ["hero", "projects", "stack", "about", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isBooted]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  if (!isBooted) {
    return <BootScreen onBootComplete={() => setIsBooted(true)} />;
  }

  return (
    <div className="bg-[#0A0A0A] text-[#F0EDE6] min-h-screen relative select-text overflow-hidden flex flex-col md:flex-row">
      
      {/* 1. SIDEBAR - FILE EXPLORER */}
      <aside className="w-full md:w-[260px] border-b md:border-b-0 md:border-r border-[#F0EDE6]/10 h-auto md:h-screen sticky top-0 shrink-0 bg-[#070707] z-30">
        <FileTree activeSection={activeSection} onFileClick={scrollToSection} />
      </aside>

      {/* 2. MAIN WORKSPACE CONTAINER */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Editor Title Bar / Tab Bar */}
        <header className="h-11 bg-[#0A0A0A] border-b border-[#F0EDE6]/10 flex items-center justify-between px-4 sticky top-0 z-20 select-none">
          {/* Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth">
            {tabs.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`h-11 px-4 flex items-center gap-2 text-[12px] font-mono border-r border-[#F0EDE6]/10 transition-colors shrink-0 ${
                    isActive 
                      ? "bg-[#0F0F0F] text-[#FF4500] font-bold border-t-2 border-t-[#FF4500]" 
                      : "text-[#A1A1AA] hover:text-[#F0EDE6]"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Editor Action Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="text-[#A1A1AA] hover:text-[#FF4500] transition-colors p-1"
              title="Reset Viewport"
            >
              <RotateCcw size={14} />
            </button>
            <button 
              className="flex items-center gap-1 bg-[#FF4500]/10 border border-[#FF4500]/30 hover:bg-[#FF4500]/20 hover:border-[#FF4500]/50 text-[#FF4500] px-2 py-1 rounded text-[11px] font-mono font-bold transition-all"
              title="Run Build Process"
              onClick={() => {
                const event = new CustomEvent("terminal-log", {
                  detail: { text: "[RUN]: Starting workspace compliance validation...", type: "system" }
                });
                window.dispatchEvent(event);
              }}
            >
              <Play size={10} fill="currentColor" />
              <span>RUN</span>
            </button>
          </div>
        </header>

        {/* Scrollable Document Area (Active Tab Mounted Only - Full-Width) */}
        <main 
          ref={mainScrollRef}
          className="flex-1 overflow-y-auto px-6 md:px-12 py-8 bg-[#0A0A0A] scroll-smooth"
          style={{ scrollPaddingTop: "44px" }}
        >
          <div className="w-full relative pl-4 md:pl-8 border-l border-[#F0EDE6]/5 pb-48">
            <Hero />
            <Projects />
            <Stack />
            <About />
            <Contact />
          </div>
        </main>

        {/* 3. PERMANENTLY DOCKED BOTTOM CONSOLE */}
        <DockedConsole />
      </div>

      {/* Subtle Matrix Noise Overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[999] opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
