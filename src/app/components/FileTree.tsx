import { Folder, FileText, ChevronDown, Terminal } from "lucide-react";

interface FileTreeProps {
  activeSection: string;
  onFileClick: (sectionId: string) => void;
}

const files = [
  { name: "Hero.md", id: "hero", type: "markdown" },
  { name: "Projects.json", id: "projects", type: "json" },
  { name: "Stack.yaml", id: "stack", type: "yaml" },
  { name: "About.rs", id: "about", type: "rust" },
  { name: "Contact.sh", id: "contact", type: "shell" },
];

export function FileTree({ activeSection, onFileClick }: FileTreeProps) {
  return (
    <div className="text-[13px] font-mono text-[#A1A1AA] select-none h-full flex flex-col justify-between p-6">
      <div>
        {/* Workspace Title */}
        <div className="flex items-center gap-2 text-[#F0EDE6]/80 font-bold uppercase tracking-[0.1em] text-[11px] mb-8 pb-4 border-b border-[#F0EDE6]/10">
          <Terminal size={14} className="text-[#FF4500]" />
          <span>Explorer: Portfolio</span>
        </div>

        {/* Tree Root */}
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-[#F0EDE6] font-semibold">
            <ChevronDown size={14} className="text-[#F0EDE6]/50" />
            <Folder size={15} className="text-[#FF4500]" />
            <span>portfolio-v2</span>
          </div>

          <div className="pl-4 space-y-3">
            <div className="flex items-center gap-1.5 text-[#F0EDE6]/80 font-medium">
              <ChevronDown size={14} className="text-[#F0EDE6]/30" />
              <Folder size={15} className="text-[#FF4500]/70" />
              <span>src</span>
            </div>

            <div className="pl-4 space-y-3">
              <div className="flex items-center gap-1.5 text-[#F0EDE6]/70 font-medium">
                <ChevronDown size={14} className="text-[#F0EDE6]/20" />
                <Folder size={15} className="text-[#FF4500]/50" />
                <span>components</span>
              </div>

              {/* Files */}
              <div className="pl-4 flex flex-col gap-1.5 border-l border-[#F0EDE6]/5 ml-2">
                {files.map((file) => {
                  const isActive = activeSection === file.id;
                  return (
                    <button
                      key={file.id}
                      onClick={() => onFileClick(file.id)}
                      className={`flex items-center gap-2 w-full text-left py-1.5 px-2.5 rounded-md transition-all duration-200 group relative ${
                        isActive
                          ? "text-[#FF4500] bg-[#FF4500]/10 border-l-2 border-[#FF4500]"
                          : "hover:text-[#F0EDE6] hover:bg-[#F0EDE6]/5 border-l-2 border-transparent"
                      }`}
                    >
                      <FileText
                        size={14}
                        className={isActive ? "text-[#FF4500]" : "text-[#A1A1AA] group-hover:text-[#F0EDE6]"}
                      />
                      <span>{file.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Info */}
      <div className="border-t border-[#F0EDE6]/5 pt-4 text-[11px] text-[#A1A1AA]/50 space-y-1">
        <div>STATUS: ONLINE</div>
        <div>PORT: 5173</div>
        <div>SYS: DEVPULSE_OS</div>
      </div>
    </div>
  );
}
