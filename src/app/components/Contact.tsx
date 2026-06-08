import { FileCode, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 border-b border-[#F0EDE6]/10 font-mono">
      {/* File Header Comment */}
      <div className="text-[12px] text-[#605E5A] mb-8">
        <span className="code-comment">{"/**"}</span><br />
        <span className="code-comment">{" * @file Contact.sh"}</span><br />
        <span className="code-comment">{" * @desc Contact parameters & script connection details"}</span><br />
        <span className="code-comment">{" */"}</span>
      </div>

      {/* Editor Panel */}
      <div className="border border-[#F0EDE6]/10 p-6 md:p-8 bg-[#070707] flex flex-col justify-between">
        
        {/* File Title Tab with breadcrumb */}
        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]/50 pb-4 border-b border-[#F0EDE6]/5 mb-6 select-none">
          <span className="flex items-center gap-2 font-mono">
            <span className="text-[#A1A1AA]/30 hidden sm:inline">workspace &gt; scripts &gt;</span>
            <span className="flex items-center gap-1 font-bold text-[#FF4500] uppercase tracking-[0.05em]">
              <FileCode size={11} />
              contact.sh
            </span>
          </span>
          <span className="font-mono text-[9px] bg-[#FF4500]/10 text-[#FF4500] px-1.5 py-0.5 rounded-sm">BASH</span>
        </div>

        {/* Bash Script representation */}
        <div className="text-[12px] md:text-[13px] leading-[1.8] select-text font-mono border border-[#F0EDE6]/5 bg-[#050505] p-4 rounded-sm relative group/editor overflow-x-auto">
          
          {/* Line 1 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">1</span>
            <span className="text-[#605E5A]">#!/bin/bash</span>
          </div>

          {/* Line 2 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">2</span>
            <div>
              <span className="text-[#9CDCFE]">EMAIL</span><span className="text-[#F0EDE6]">=</span><span className="text-[#ff8f66]">&quot;hello@koushik.dev&quot;</span>
            </div>
          </div>

          {/* Line 3 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">3</span>
            <div>
              <span className="text-[#9CDCFE]">GITHUB</span><span className="text-[#F0EDE6]">=</span><span className="text-[#ff8f66]">&quot;https://github.com/koushik-ahmed&quot;</span>
            </div>
          </div>

          {/* Line 4 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">4</span>
            <div>
              <span className="text-[#9CDCFE]">LINKEDIN</span><span className="text-[#F0EDE6]">=</span><span className="text-[#ff8f66]">&quot;https://linkedin.com/in/koushik-ahmed&quot;</span>
            </div>
          </div>

          {/* Line 5 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">5</span>
            <span className="text-[#605E5A]"># Execute request mail stream</span>
          </div>

          {/* Line 6 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">6</span>
            <a 
              href="mailto:hello@koushik.dev"
              className="flex items-center gap-1.5 text-[#FF4500] hover:text-[#ff8f66] font-bold group/link"
            >
              <span>curl -X SEND mailto:$EMAIL</span>
              <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Line 7 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">7</span>
            <a 
              href="https://github.com/koushik-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#F0EDE6] transition-colors"
            >
              open $GITHUB
            </a>
          </div>

          {/* Line 8 */}
          <div className="flex gap-4 group/line hover:bg-[#F0EDE6]/5 px-2 py-0.5 rounded-sm transition-colors items-center">
            <span className="text-[#605E5A] select-none text-right w-5 inline-block text-[10px]">8</span>
            <a 
              href="https://linkedin.com/in/koushik-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#F0EDE6] transition-colors"
            >
              open $LINKEDIN
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#F0EDE6]/5 text-[11px] text-[#A1A1AA]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Koushik Ahmed. All rights reserved.</span>
          <span>SYS STATUS: DISCONNECTED</span>
        </div>
      </div>
    </section>
  );
}