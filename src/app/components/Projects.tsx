import { useEffect, useRef, useState } from "react";
import { FileCode, Play } from "lucide-react";
import { SystemVisualizer } from "./SystemVisualizer";

const projects = [
  {
    id: "devpulse",
    name: "DevPulse",
    category: "DASHBOARD · REAL-TIME",
    description: "Real-time analytics dashboard for mobile CI/CD pipelines.",
    tech: ["FLUTTER", "FIREBASE", "DART"],
    badge: "Active Pipeline"
  },
  {
    id: "medtek",
    name: "MedTek EHR",
    category: "HEALTHCARE · AI",
    description: "Offline-first EHR with on-device pill detection model.",
    tech: ["FLUTTER", "TENSORFLOW LITE"],
    badge: "0.91 F1-Score"
  },
  {
    id: "trace",
    name: "Trace",
    category: "SUSTAINABILITY · DATA",
    description: "Carbon footprint tracking with predictive ML models.",
    tech: ["PYTHON", "POSTGRESQL", "FLUTTER"],
    badge: "ML Predictions"
  },
  {
    id: "seamless",
    name: "Seamless Travel",
    category: "SECURITY · BIOMETRICS",
    description: "NFC passport reader with facial matching authentication.",
    tech: ["KOTLIN", "NFC", "OPENAI"],
    badge: "<3s Auth Time"
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [projectsProgress, setProjectsProgress] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const parentRect = scrollContainer.getBoundingClientRect();

      // Calculate scroll position within the Projects section bounds
      // Starts at 0.0 when section top reaches viewport top,
      // and ends at 1.0 when section bottom reaches viewport bottom.
      const sectionScrollTop = -rect.top + parentRect.top;
      const sectionMaxScroll = rect.height - parentRect.height;
      
      if (sectionMaxScroll > 0) {
        const pVal = sectionScrollTop / sectionMaxScroll;
        setProjectsProgress(Math.min(1, Math.max(0, pVal)));
      }
    };

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-12 border-b border-[#F0EDE6]/10">
      {/* File Header Comment */}
      <div className="text-[12px] text-[#605E5A] mb-8 font-mono">
        <span className="code-comment">{"/**"}</span><br />
        <span className="code-comment">{" * @file Projects.json"}</span><br />
        <span className="code-comment">{" * @desc Selected engineering modules & architecture"}</span><br />
        <span className="code-comment">{" */"}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        
        {/* Left Column: Continuous Scroll of Project Files */}
        <div className="lg:col-span-7 flex flex-col">
          {projects.map((p, idx) => (
            <div 
              key={p.id}
              className="border border-[#F0EDE6]/10 p-6 md:p-8 bg-[#070707] flex flex-col justify-between font-mono mb-8 min-h-[380px] last:mb-0"
            >
              {/* File Title Tab with breadcrumb */}
              <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]/50 pb-4 border-b border-[#F0EDE6]/5 mb-6 select-none">
                <span className="flex items-center gap-2 font-mono">
                  <span className="text-[#A1A1AA]/30 hidden sm:inline">workspace &gt; src &gt; projects &gt;</span>
                  <span className="flex items-center gap-1 font-bold text-[#FF4500] uppercase tracking-[0.05em]">
                    <FileCode size={11} />
                    {p.id}.json
                  </span>
                </span>
                <span className="font-mono text-[9px] bg-[#FF4500]/10 text-[#FF4500] px-1.5 py-0.5 rounded-sm">JSON</span>
              </div>

              {/* JSON Editor Output */}
              <div className="text-[12px] md:text-[13px] leading-[1.8] flex-1 select-text mb-6 font-mono border border-[#F0EDE6]/5 bg-[#050505] p-4 rounded-sm relative group/editor overflow-x-auto">
                
                {/* Line 1 */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">1</span>
                  <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                  <span className="text-[#F0EDE6] opacity-60">{"{"}</span>
                </div>

                {/* Line 2 */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">2</span>
                  <span className="w-2.5 inline-block"></span>
                  <div className="pl-6">
                    <span className="text-[#FF4500]">"name"</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#FFE0B2]">"{p.name}"</span><span className="text-[#F0EDE6]">,</span>
                  </div>
                </div>

                {/* Line 3 */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">3</span>
                  <span className="w-2.5 inline-block"></span>
                  <div className="pl-6">
                    <span className="text-[#FF4500]">"category"</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#FFE0B2]">"{p.category}"</span><span className="text-[#F0EDE6]">,</span>
                  </div>
                </div>

                {/* Line 4 */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">4</span>
                  <span className="w-2.5 inline-block"></span>
                  <div className="pl-6">
                    <span className="text-[#FF4500]">"description"</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#FFE0B2]">"{p.description}"</span><span className="text-[#F0EDE6]">,</span>
                  </div>
                </div>

                {/* Line 5 */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">5</span>
                  <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                  <div className="pl-6">
                    <span className="text-[#FF4500]">"tech"</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#F0EDE6]">[</span>
                  </div>
                </div>

                {/* Array Elements */}
                {p.tech.map((t, i) => (
                  <div key={t} className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                    <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{6 + i}</span>
                    <span className="w-2.5 inline-block"></span>
                    <div className="pl-12">
                      <span className="text-[#E2C08D]">"{t}"</span>
                      {i < p.tech.length - 1 ? <span className="text-[#F0EDE6]">,</span> : ""}
                    </div>
                  </div>
                ))}

                {/* End of Array */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{6 + p.tech.length}</span>
                  <span className="w-2.5 inline-block"></span>
                  <div className="pl-6">
                    <span className="text-[#F0EDE6] opacity-60">]</span>
                  </div>
                </div>

                {/* End of JSON Object */}
                <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                  <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{7 + p.tech.length}</span>
                  <span className="w-2.5 inline-block"></span>
                  <span className="text-[#F0EDE6] opacity-60">{"}"}</span>
                </div>

              </div>

              {/* Project Footer Status */}
              <div className="mt-2 pt-4 border-t border-[#F0EDE6]/5 flex items-center justify-between text-[11px] text-[#A1A1AA]/50">
                <span>SYS CONFIG: {p.tech.join(" // ")}</span>
                {p.badge && (
                  <span className="text-[#FF4500] font-bold px-2 py-0.5 rounded bg-[#FF4500]/10 border border-[#FF4500]/20">
                    {p.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky 3D System visualizer */}
        <div className="lg:col-span-5 lg:sticky lg:top-4 flex flex-col justify-between overflow-hidden relative min-h-[350px] lg:h-[450px]">
          {/* Header Panel */}
          <div className="h-10 border-b border-[#F0EDE6]/10 px-0 flex items-center justify-between font-mono text-[11px] select-none">
            <span className="text-[#A1A1AA] flex items-center gap-2">
              <Play size={10} className="text-[#FF4500]" fill="currentColor" />
              <span>LIVE SYSTEM COMPILING: architecture.log</span>
            </span>
          </div>

          {/* Transparent Visualizer Wrapper */}
          <div className="flex-1 relative overflow-hidden bg-transparent min-h-[260px]">
            <SystemVisualizer scrollProgress={projectsProgress} />
          </div>
        </div>

      </div>
    </section>
  );
}