interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, titleHighlight, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center animate-fadeIn" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 ${centered ? "" : ""}`}
        style={{
          background: "rgba(255, 69, 0, 0.08)",
          border: "1px solid rgba(255, 69, 0, 0.2)",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "linear-gradient(135deg, #FF4500, #ff8f66)" }}
        />
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#FF4500", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {eyebrow}
        </span>
      </div>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          color: "#F0EDE6",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
        }}
      >
        {title}{" "}
        {titleHighlight && (
          <span
            style={{
              background: "linear-gradient(135deg, #FF4500, #ff8f66)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl ${centered ? "mx-auto" : ""}`}
          style={{ fontSize: "1.02rem", color: "#A1A1AA", lineHeight: 1.7 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
