import { Code2, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-10"
      style={{ background: "#0F172A", borderTop: "1px solid rgba(99,102,241,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 group"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
            >
              <Code2 size={16} color="white" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "white", letterSpacing: "-0.02em" }}>
              Arjun<span style={{ color: "#8B5CF6" }}>.</span>dev
            </span>
          </button>

          {/* Copyright */}
          <div className="flex items-center gap-1.5" style={{ fontSize: "0.8rem", color: "#64748B" }}>
            <span>© {year} Arjun Reddy</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} color="#EF4444" fill="#EF4444" /> and lots of
              <span style={{ color: "#8B5CF6", fontWeight: 600 }}>Kotlin</span>
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-5">
            {["About", "Projects", "Stack", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ fontSize: "0.8rem", color: "#64748B", fontWeight: 500, textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A78BFA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
