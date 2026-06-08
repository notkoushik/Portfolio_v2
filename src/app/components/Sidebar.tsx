import { Dribbble, Twitter, Instagram, Youtube, Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[380px] shrink-0">
      <div className="sticky top-24 bg-white text-[#111] p-10 rounded-[32px] flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
        
        {/* Dotted curve background top left */}
        <svg className="absolute top-0 left-0 w-32 h-32 text-[#FF5B22] opacity-50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 C40 20 80 60 80 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Dotted curve background bottom left */}
        <svg className="absolute bottom-32 left-0 w-48 h-48 text-[#FF5B22] opacity-50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 C50 80 80 50 80 0" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Portrait container */}
        <div className="w-[240px] h-[300px] bg-[#FF5B22] rounded-[24px] mb-8 relative z-10 overflow-hidden shadow-inner">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1606822054436-39923d8f55c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHNvZnR3YXJlJTIwZW5naW5lZXIlMjBibGFjayUyMG1hbnxlbnwxfHx8fDE3Nzc1NDQ3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Portrait" 
            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale" 
          />
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight mb-6 relative z-10">
          Koushik Ahmed
        </h2>

        {/* Floating fire icon */}
        <div className="w-10 h-10 bg-[#FF5B22] rounded-full flex items-center justify-center text-white mb-6 relative z-10 shadow-lg border-4 border-white">
          <Flame size={20} fill="currentColor" />
        </div>

        <p className="text-[#666] text-sm leading-relaxed mb-10 max-w-[260px] relative z-10 font-medium">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <div className="flex items-center gap-6 text-[#FF5B22] relative z-10">
          <a href="#" className="hover:text-black transition-colors"><Dribbble size={22} /></a>
          <a href="#" className="hover:text-black transition-colors"><Twitter size={22} /></a>
          <a href="#" className="hover:text-black transition-colors"><Instagram size={22} /></a>
          <a href="#" className="hover:text-black transition-colors"><Youtube size={22} /></a>
        </div>

      </div>
    </aside>
  );
}