import { ArrowDown, FileCode } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-120px)] flex flex-col justify-center py-12 border-b border-[#F0EDE6]/10">
      
      {/* File Header Comment */}
      <div className="text-[12px] text-[#605E5A] mb-8 font-mono">
        <span className="code-comment">{"/**"}</span><br />
        <span className="code-comment">{" * @file Hero.md"}</span><br />
        <span className="code-comment">{" * @desc Main landing and engineering overview"}</span><br />
        <span className="code-comment">{" */"}</span>
      </div>

      {/* Markdown Editor Style Info (Full Width) */}
      <div className="w-full border border-[#F0EDE6]/10 p-6 md:p-8 bg-[#070707] relative overflow-hidden min-h-[400px] flex flex-col justify-between">
        
        <div>
          {/* Top Info Bar */}
          <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]/50 pb-4 border-b border-[#F0EDE6]/5 mb-6 font-mono">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-[0.05em]">
              <FileCode size={12} className="text-[#FF4500]" />
              Markdown Editor
            </span>
            <span>UTF-8</span>
          </div>

          {/* Simulated Editor Lines */}
          <div className="font-mono text-[13px] md:text-[14px] leading-[1.8]">
            <div className="flex gap-4">
              <span className="text-[#605E5A] select-none text-right w-4">1</span>
              <span className="text-[#FF4500] font-semibold"># building android & ai applications</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[#605E5A] select-none text-right w-4">2</span>
              <span className="text-[#A1A1AA] italic">{"> Flutter specialist shipping intelligent mobile experiences"}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[#605E5A] select-none text-right w-4">3</span>
              <span className="text-[#605E5A]"></span>
            </div>
            <div className="flex gap-4">
              <span className="text-[#605E5A] select-none text-right w-4">4</span>
              <span className="text-[#F0EDE6]">
                <span className="text-[#FF4500]">-</span> <span className="font-bold text-[#E2C08D]">Status:</span> Available · Hyderabad / Remote
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-[#605E5A] select-none text-right w-4">5</span>
              <span className="text-[#F0EDE6]">
                <span className="text-[#FF4500]">-</span> <span className="font-bold text-[#E2C08D]">Focus:</span> Offline EHR Systems & On-device ML
              </span>
            </div>
            
            <div className="mt-8 pl-8 border-l border-[#FF4500]/20 max-w-[55ch]">
              <p className="text-[13px] text-[#A1A1AA] leading-[1.6] font-light">
                Engineering fluid mobile front-ends backed by structured Python ML models and real-time database architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#F0EDE6]/5 font-mono">
          <a 
            href="#projects" 
            className="bg-[#FF4500]/10 border border-[#FF4500]/30 hover:bg-[#FF4500]/20 hover:border-[#FF4500]/50 text-[#FF4500] text-[12px] font-bold px-5 py-2.5 transition-all"
          >
            $ view-projects
          </a>
          <a 
            href="#" 
            className="text-[#A1A1AA] hover:text-[#F0EDE6] text-[12px] flex items-center gap-2 px-4 py-2.5 transition-colors"
          >
            <ArrowDown size={14} />
            get-cv.sh
          </a>
        </div>
      </div>
    </section>
  );
}