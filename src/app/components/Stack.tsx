import { motion } from "motion/react";
import { FileCode } from "lucide-react";

const stacks = [
  {
    category: "core_engineering",
    skills: [
      "Flutter & Dart",
      "Android SDK",
      "Kotlin & Java",
      "Jetpack Compose",
      "Swift (iOS)",
      "C++ & C",
    ]
  },
  {
    category: "intelligence",
    skills: [
      "Python 3",
      "TensorFlow Lite",
      "Computer Vision",
      "PyTorch",
      "OpenAI API",
      "Core ML",
    ]
  },
  {
    category: "systems",
    skills: [
      "Firebase / GCP",
      "PostgreSQL",
      "Supabase",
      "Node.js",
      "Docker",
      "GitHub Actions",
    ]
  }
];

export function Stack() {
  return (
    <section id="stack" className="py-12 border-b border-[#F0EDE6]/10 font-mono">
      {/* File Header Comment */}
      <div className="text-[12px] text-[#605E5A] mb-8">
        <span className="code-comment">{"/**"}</span><br />
        <span className="code-comment">{" * @file Stack.yaml"}</span><br />
        <span className="code-comment">{" * @desc Technology integrations & tool arsenal configuration"}</span><br />
        <span className="code-comment">{" */"}</span>
      </div>

      {/* Editor Panel */}
      <div className="border border-[#F0EDE6]/10 p-6 md:p-8 bg-[#070707] flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]/50 pb-4 border-b border-[#F0EDE6]/5 mb-6">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-[0.05em]">
            <FileCode size={12} className="text-[#FF4500]" />
            Stack.yaml
          </span>
          <span>YAML</span>
        </div>

        {/* YAML code simulation */}
        <div className="text-[13px] md:text-[14px] leading-[1.8] grid grid-cols-1 md:grid-cols-12 gap-8">
          {stacks.map((stack, idx) => (
            <motion.div 
              key={stack.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="md:col-span-4"
            >
              {/* Category key */}
              <div className="mb-2">
                <span className="text-[#FF4500] font-bold">{stack.category}:</span>
              </div>
              
              {/* Skills list values */}
              <ul className="flex flex-col gap-1 border-l border-[#F0EDE6]/5 pl-4 ml-1">
                {stack.skills.map((skill, i) => (
                  <li key={skill} className="flex gap-2 group hover:text-[#FF4500] transition-colors">
                    <span className="text-[#FF4500]/50">-</span>
                    <span className="text-[#E2C08D]">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#F0EDE6]/5 text-[11px] text-[#A1A1AA]/50 flex items-center justify-between">
          <span># Active plugins loaded successfully</span>
          <span>Config OK</span>
        </div>
      </div>
    </section>
  );
}