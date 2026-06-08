import { useRef, useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const skillGroups = [
  {
    category: "Core Engineering",
    icon: "⚙️",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
    skills: [
      { name: "Kotlin", level: 98 },
      { name: "Android SDK", level: 97 },
      { name: "Flutter", level: 92 },
      { name: "Dart", level: 90 },
      { name: "Java", level: 85 },
      { name: "Jetpack Compose", level: 94 },
      { name: "MVVM / Clean Architecture", level: 95 },
      { name: "Room / SQLite", level: 90 },
      { name: "Hive / Isar", level: 88 },
      { name: "Coroutines & Flow", level: 93 },
    ],
  },
  {
    category: "AI & Infrastructure",
    icon: "🤖",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    skills: [
      { name: "TensorFlow Lite", level: 93 },
      { name: "ML Kit", level: 95 },
      { name: "PyTorch", level: 80 },
      { name: "Python", level: 82 },
      { name: "FastAPI", level: 78 },
      { name: "OpenAI API", level: 88 },
      { name: "Whisper", level: 85 },
      { name: "LangChain", level: 75 },
      { name: "Firebase ML", level: 90 },
      { name: "Vertex AI", level: 72 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    skills: [
      { name: "Firebase", level: 95 },
      { name: "Git / GitHub", level: 97 },
      { name: "Android Studio", level: 98 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions", level: 82 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Play Console", level: 92 },
      { name: "Crashlytics", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1.5">
        <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#334155" }}>{name}</span>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color }}>
          {level}%
        </span>
      </div>
      <div
        className="rounded-full overflow-hidden"
        style={{ height: "5px", background: "#F1F5F9" }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: "9999px",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: `${Math.random() * 0.4}s`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ group }: { group: typeof skillGroups[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-6"
      style={{
        background: "white",
        border: `1.5px solid ${group.border}`,
        boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: group.bg, border: `1px solid ${group.border}` }}
        >
          {group.icon}
        </div>
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A" }}>{group.category}</h3>
          <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{group.skills.length} skills</p>
        </div>
      </div>

      {/* Skill bars */}
      <div>
        {group.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={group.color}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

const techLogos = [
  { name: "Android", icon: "🤖" },
  { name: "Flutter", icon: "🐦" },
  { name: "Kotlin", icon: "🟣" },
  { name: "Python", icon: "🐍" },
  { name: "Firebase", icon: "🔥" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Docker", icon: "🐳" },
  { name: "GitHub", icon: "🐙" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Figma", icon: "🎨" },
];

export function Skills() {
  return (
    <section id="stack" className="py-24" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Tech Stack"
          title="My Engineering"
          titleHighlight="Arsenal"
          subtitle="Carefully selected tools and technologies that power my development workflow, from mobile apps to production AI systems."
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>

        {/* Logo strip */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.04), rgba(139,92,246,0.04))",
            border: "1.5px solid rgba(99,102,241,0.1)",
          }}
        >
          <p className="text-center mb-5" style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: "white",
                  border: "1.5px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span style={{ fontSize: "1rem" }}>{tech.icon}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#334155" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
