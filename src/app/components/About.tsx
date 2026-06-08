import { FileCode } from "lucide-react";

const milestones = [
  { year: "2021", role: "Started CS Engineering", company: "College" },
  { year: "2022", role: "First Flutter App Shipped", company: "Personal" },
  { year: "2023", role: "Flutter Development Intern", company: "TechOptima" },
  { year: "2024", role: "MedTek EHR + AI System", company: "Personal" },
  { year: "2025", role: "Mobile Engineering Lead", company: "Stifund" },
];

export function About() {
  return (
    <section id="about" className="py-12 border-b border-[#F0EDE6]/10 font-mono">
      {/* File Header Comment */}
      <div className="text-[12px] text-[#605E5A] mb-8">
        <span className="code-comment">{"/**"}</span><br />
        <span className="code-comment">{" * @file About.rs"}</span><br />
        <span className="code-comment">{" * @desc Rust struct definition for developer background & milestones"}</span><br />
        <span className="code-comment">{" */"}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left Column: Rust Struct Bio */}
        <div className="lg:col-span-7 border border-[#F0EDE6]/10 p-6 md:p-8 bg-[#070707] flex flex-col justify-between">
          <div>
            {/* File Title Tab with breadcrumb */}
            <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]/50 pb-4 border-b border-[#F0EDE6]/5 mb-6 select-none">
              <span className="flex items-center gap-2 font-mono">
                <span className="text-[#A1A1AA]/30 hidden sm:inline">workspace &gt; src &gt; domain &gt;</span>
                <span className="flex items-center gap-1 font-bold text-[#FF4500] uppercase tracking-[0.05em]">
                  <FileCode size={11} />
                  about.rs
                </span>
              </span>
              <span className="font-mono text-[9px] bg-[#FF4500]/10 text-[#FF4500] px-1.5 py-0.5 rounded-sm">RUST</span>
            </div>

            {/* Rust Editor Output */}
            <div className="text-[12px] md:text-[13px] leading-[1.8] select-text font-mono border border-[#F0EDE6]/5 bg-[#050505] p-4 rounded-sm relative group/editor overflow-x-auto">
              
              {/* Line 1 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">1</span>
                <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                <div>
                  <span className="text-[#569CD6]">struct</span> <span className="text-[#4EC9B0]">Engineer</span> <span className="text-[#F0EDE6]">{"{"}</span>
                </div>
              </div>

              {/* Line 2 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">2</span>
                <span className="w-2.5 inline-block"></span>
                <div className="pl-6">
                  <span className="text-[#9CDCFE]">name</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#569CD6]">&apos;static</span> <span className="text-[#569CD6]">str</span><span className="text-[#F0EDE6]">,</span>
                </div>
              </div>

              {/* Line 3 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">3</span>
                <span className="w-2.5 inline-block"></span>
                <div className="pl-6">
                  <span className="text-[#9CDCFE]">role</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#569CD6]">&apos;static</span> <span className="text-[#569CD6]">str</span><span className="text-[#F0EDE6]">,</span>
                </div>
              </div>

              {/* Line 4 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">4</span>
                <span className="w-2.5 inline-block"></span>
                <div className="pl-6">
                  <span className="text-[#9CDCFE]">location</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#569CD6]">&apos;static</span> <span className="text-[#569CD6]">str</span><span className="text-[#F0EDE6]">,</span>
                </div>
              </div>

              {/* Line 5 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">5</span>
                <span className="w-2.5 inline-block"></span>
                <div className="pl-6">
                  <span className="text-[#9CDCFE]">available</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#569CD6]">bool</span><span className="text-[#F0EDE6]">,</span>
                </div>
              </div>

              {/* Line 6 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">6</span>
                <span className="w-2.5 inline-block"></span>
                <span className="text-[#F0EDE6] opacity-60">{"}"}</span>
              </div>

              {/* Line 7 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">7</span>
                <span className="w-2.5 inline-block"></span>
                <span></span>
              </div>

              {/* Line 8 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">8</span>
                <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                <div>
                  <span className="text-[#569CD6]">impl</span> <span className="text-[#4EC9B0]">Engineer</span> <span className="text-[#F0EDE6]">{"{"}</span>
                </div>
              </div>

              {/* Line 9 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">9</span>
                <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                <div className="pl-6">
                  <span className="text-[#569CD6]">fn</span> <span className="text-[#DCDCAA]">bio</span>() <span className="text-[#F0EDE6]">{"->"}</span> <span className="text-[#569CD6]">&apos;static</span> <span className="text-[#569CD6]">str</span> <span className="text-[#F0EDE6]">{"{"}</span>
                </div>
              </div>

              {/* Line 10 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">10</span>
                <span className="w-2.5 inline-block"></span>
                <div className="pl-12 text-[#ff8f66] max-w-[45ch] italic">
                  &quot;I write code that thinks. I build apps that matter. I ship mobile front-ends at the intersection of clean UX and AI systems.&quot;
                </div>
              </div>

              {/* Line 11 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">11</span>
                <span className="w-2.5 inline-block"></span>
                <div className="pl-6">
                  <span className="text-[#F0EDE6]">{"}"}</span>
                </div>
              </div>

              {/* Line 12 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">12</span>
                <span className="w-2.5 inline-block"></span>
                <span className="text-[#F0EDE6]">{"}"}</span>
              </div>

            </div>
          </div>

          <div className="border-t border-[#F0EDE6]/5 pt-6 mt-8 flex flex-wrap gap-4 text-[12px]">
            <span className="text-[#A1A1AA]/70">
              <span className="text-[#FF4500]">//</span> Hyderabad · Remote · Hybrid
            </span>
          </div>
        </div>

        {/* Right Column: Milestones Panel */}
        <div className="lg:col-span-5 border border-[#F0EDE6]/10 p-6 bg-[#070707] flex flex-col justify-between">
          <div>
            {/* File Title Tab with breadcrumb */}
            <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]/50 pb-4 border-b border-[#F0EDE6]/5 mb-6 select-none">
              <span className="flex items-center gap-2 font-mono">
                <span className="text-[#A1A1AA]/30 hidden sm:inline">workspace &gt; src &gt; domain &gt;</span>
                <span className="flex items-center gap-1 font-bold text-[#FF4500] uppercase tracking-[0.05em]">
                  <FileCode size={11} />
                  history.rs
                </span>
              </span>
              <span className="font-mono text-[9px] bg-[#FF4500]/10 text-[#FF4500] px-1.5 py-0.5 rounded-sm">RUST</span>
            </div>

            {/* Rust Enum Output */}
            <div className="text-[12px] md:text-[13px] leading-[1.8] select-text font-mono border border-[#F0EDE6]/5 bg-[#050505] p-4 rounded-sm relative group/editor overflow-x-auto">
              
              {/* Line 1 */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">1</span>
                <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                <div>
                  <span className="text-[#569CD6]">enum</span> <span className="text-[#4EC9B0]">Timeline</span> <span className="text-[#F0EDE6]">{"{"}</span>
                </div>
              </div>

              {/* Milestones enumeration */}
              {milestones.map((m, idx) => {
                const baseLine = 2 + idx * 4;
                return (
                  <div key={m.year}>
                    {/* Enum Entry */}
                    <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                      <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{baseLine}</span>
                      <span className="text-[#A1A1AA]/30 select-none mr-1 cursor-pointer hover:text-[#FF4500]">▾</span>
                      <div className="pl-6">
                        <span className="text-[#DCDCAA]">Year{m.year}</span> <span className="text-[#F0EDE6]">{"{"}</span>
                      </div>
                    </div>

                    {/* Enum Role field */}
                    <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                      <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{baseLine + 1}</span>
                      <span className="w-2.5 inline-block"></span>
                      <div className="pl-12">
                        <span className="text-[#9CDCFE]">role</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#E2C08D]">&quot;{m.role}&quot;</span><span className="text-[#F0EDE6]">,</span>
                      </div>
                    </div>

                    {/* Enum Org field */}
                    <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                      <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{baseLine + 2}</span>
                      <span className="w-2.5 inline-block"></span>
                      <div className="pl-12">
                        <span className="text-[#9CDCFE]">org</span><span className="text-[#F0EDE6]">:</span> <span className="text-[#E2C08D]">&quot;{m.company}&quot;</span>
                      </div>
                    </div>

                    {/* Enum entry end */}
                    <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                      <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{baseLine + 3}</span>
                      <span className="w-2.5 inline-block"></span>
                      <div className="pl-6">
                        <span className="text-[#F0EDE6]">{"},"}</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Enum End */}
              <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
                <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">{2 + milestones.length * 4}</span>
                <span className="w-2.5 inline-block"></span>
                <span className="text-[#F0EDE6] opacity-60">{"}"}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}