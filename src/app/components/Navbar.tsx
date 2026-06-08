import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex items-center gap-2.5 text-none shrink-0 group"
    >
      <div className="w-8 h-8 rounded-lg bg-[#FF4500]/10 border-[1.5px] border-[#FF4500]/40 flex items-center justify-center text-sm font-mono font-bold text-[#FF4500] shadow-[0_0_14px_rgba(255,69,0,0.2)] group-hover:scale-105 transition-transform shrink-0">
        <span className="opacity-60 text-[10px] mr-[1px]">&lt;</span>
        K
        <span className="opacity-60 text-[10px] ml-[1px]">/&gt;</span>
      </div>
      <span className="text-sm font-display font-bold text-[#F0EDE6]/90 tracking-[-0.04em] leading-none group-hover:text-[#F0EDE6] transition-colors">
        Koushik
        <span className="text-[#FF4500]">.</span>
      </span>
    </a>
  );
}

function AvailableDot() {
  return (
    <span className="relative inline-flex w-2 h-2 shrink-0">
      <span className="absolute inset-0 rounded-full bg-[#4ade80]/50 animate-ping" />
      <span className="rounded-full w-2 h-2 bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
    </span>
  );
}

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["projects", "stack", "about", "contact"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes navSlideDown { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes mobileSlideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes menuItemIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>

      {/* Desktop navbar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-[100] justify-center pointer-events-none">
        <header
          className="pointer-events-auto flex items-center justify-between w-full px-8 py-4"
          style={{
            background: "rgba(10, 10, 10, 0.6)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            animation: mounted ? "navSlideDown 600ms cubic-bezier(0.16,1,0.3,1) forwards" : "none",
            opacity: mounted ? 1 : 0,
            transition: "background 350ms ease, border-bottom 350ms ease",
          }}
        >
          <Logo />

          <nav className="flex items-center gap-[2px] absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => onClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-mono font-bold tracking-tight transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF4500]/15 border border-[#FF4500]/20 text-[#FF4500]"
                      : "text-[#F0EDE6]/40 hover:text-[#F0EDE6]/80 hover:bg-[#F0EDE6]/5 border border-transparent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={(e) => onClick(e, "#contact")}
            className="inline-flex items-center gap-2 bg-[#FF4500] text-[#0A0A0A] text-[13px] font-mono font-bold px-[18px] py-2 rounded-full tracking-tight shadow-[0_2px_14px_rgba(255,69,0,0.38)] hover:shadow-[0_4px_24px_rgba(255,69,0,0.6)] hover:-translate-y-[1px] transition-all whitespace-nowrap shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF87]" />
            Hire Me
          </a>
        </header>
      </div>

      {/* Mobile header */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-[100]"
        style={{
          animation: mounted ? "mobileSlideDown 450ms cubic-bezier(0.16,1,0.3,1) forwards" : "none",
          opacity: mounted ? 1 : 0,
        }}
      >
        <div
          className="transition-all duration-300"
          style={{
            background: "rgba(10, 10, 10, 0.6)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex items-center justify-between p-4">
            <Logo />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0 transition-all ${
                menuOpen ? "bg-[#FF4500]/15 border border-[#FF4500]/25 text-[#FF4500]" : "bg-[#F0EDE6]/5 border border-[#F0EDE6]/10 text-[#F0EDE6]/70"
              }`}
            >
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-[#F0EDE6]/5 p-[12px_12px_16px] flex flex-col gap-1 bg-[#0A0A0A]/90 backdrop-blur-md">
              {navItems.map((item, i) => {
                const isActive = active === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => onClick(e, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[15px] font-mono font-bold tracking-tight transition-all ${
                      isActive
                        ? "bg-[#FF4500]/10 border border-[#FF4500]/15 text-[#FF4500]"
                        : "border border-transparent text-[#F0EDE6]/50 hover:text-[#F0EDE6] hover:bg-[#F0EDE6]/5"
                    }`}
                    style={{ animation: `menuItemIn 300ms cubic-bezier(0.16,1,0.3,1) ${i * 40}ms both` }}
                  >
                    {item.label}
                    <span className={`text-[11px] ${isActive ? "text-[#FF4500]/90" : "text-[#F0EDE6]/20"}`}>↗</span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => onClick(e, "#contact")}
                className="mt-2 flex items-center justify-center gap-2 bg-[#FF4500] text-[#0A0A0A] py-3 px-5 rounded-full text-sm font-mono font-bold tracking-tight shadow-[0_4px_20px_rgba(255,69,0,0.42)]"
                style={{ animation: `menuItemIn 300ms cubic-bezier(0.16,1,0.3,1) ${navItems.length * 40}ms both` }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00FF87]" />
                Hire Me
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}