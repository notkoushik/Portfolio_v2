import { Home, Folder, Briefcase, Wrench, Edit3 } from "lucide-react";

export function TopNav() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#888] rounded-[24px] px-8 py-4 flex items-center gap-10 z-[100] shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/5 transition-all">
      <a href="#hero" className="hover:text-white transition-colors duration-200"><Home size={20} strokeWidth={2.5} /></a>
      <a href="#projects" className="hover:text-white transition-colors duration-200"><Folder size={20} strokeWidth={2.5} /></a>
      <a href="#" className="hover:text-white transition-colors duration-200"><Briefcase size={20} strokeWidth={2.5} /></a>
      <a href="#stack" className="hover:text-white transition-colors duration-200"><Wrench size={20} strokeWidth={2.5} /></a>
      <a href="#contact" className="hover:text-white transition-colors duration-200"><Edit3 size={20} strokeWidth={2.5} /></a>
    </nav>
  );
}