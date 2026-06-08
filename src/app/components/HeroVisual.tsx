import { useEffect, useRef } from "react";

const floatingBadges = [
  { label: "Kotlin", top: "10%", left: "4%", delay: 0 },
  { label: "Flutter", top: "8%", right: "6%", delay: 0.6 },
  { label: "TensorFlow", bottom: "24%", left: "2%", delay: 1.2 },
  { label: "PyTorch", top: "45%", right: "3%", delay: 0.3 },
];

const neuralDots = [
  { cx: 70, cy: 80 }, { cx: 160, cy: 50 }, { cx: 250, cy: 100 },
  { cx: 320, cy: 60 }, { cx: 380, cy: 140 }, { cx: 290, cy: 200 },
  { cx: 180, cy: 180 }, { cx: 80, cy: 200 }, { cx: 140, cy: 280 },
  { cx: 260, cy: 290 }, { cx: 360, cy: 270 }, { cx: 420, cy: 190 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [6, 7], [7, 0], [1, 6], [2, 6], [3, 5], [5, 9],
  [8, 9], [9, 10], [10, 11], [4, 11], [6, 9], [7, 8],
];

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = frame * 0.008;

      // Animated neural connections
      connections.forEach(([a, b], i) => {
        const da = neuralDots[a];
        const db = neuralDots[b];
        const alpha = 0.08 + 0.06 * Math.sin(t + i * 0.4);
        ctx.beginPath();
        ctx.moveTo(da.cx, da.cy);
        ctx.lineTo(db.cx, db.cy);
        ctx.strokeStyle = `rgba(240, 237, 230, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Animated neural dots
      neuralDots.forEach((dot, i) => {
        const pulse = 1 + 0.25 * Math.sin(t * 1.2 + i * 0.6);
        const r = 3 * pulse;
        const alpha = 0.3 + 0.2 * Math.sin(t + i);

        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${alpha})`;
        ctx.fill();
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none min-h-[340px]">
      
      {/* Abstract background vector line grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #F0EDE6 1px, transparent 1px), linear-gradient(to bottom, #F0EDE6 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Low-key background ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "360px",
          height: "360px",
          background: "radial-gradient(circle, rgba(255,69,0,0.04) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(30px)",
        }}
      />

      {/* Schematic canvas */}
      <canvas
        ref={canvasRef}
        width={500}
        height={360}
        className="absolute max-w-full opacity-80"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Elegant schematic device wireframe */}
      <div
        className="relative z-10 p-4"
        style={{
          width: "190px",
          borderRadius: "16px",
          background: "#070707",
          border: "1px solid rgba(240, 237, 230, 0.08)",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.6)",
          animation: "floatPhone 6s ease-in-out infinite",
        }}
      >
        {/* Device Header */}
        <div className="flex items-center justify-between border-b border-[#F0EDE6]/5 pb-3 mb-3">
          <span className="text-[9px] font-mono text-[#A1A1AA]/40 tracking-wider">DEV_BOARD // v1.0.4</span>
          <div className="w-2 h-2 rounded-full bg-[#22C55E]/60 animate-pulse" />
        </div>

        {/* Console layout preview */}
        <div className="h-[120px] border border-[#F0EDE6]/5 bg-[#050505] p-3 font-mono text-[9px] space-y-1.5 overflow-hidden">
          <div className="text-[#FF4500]">SYSTEM_READY</div>
          <div className="text-[#605E5A]">// pipeline monitoring</div>
          <div className="text-[#A1A1AA]">FPS: 60</div>
          <div className="text-[#A1A1AA]">LOAD: 0.12ms</div>
          <div className="text-[#22C55E]">STATUS: ONLINE</div>
        </div>

        {/* Footer info tag */}
        <div className="mt-3 pt-3 border-t border-[#F0EDE6]/5 flex items-center justify-between text-[9px] text-[#A1A1AA]/30">
          <span>PORT: 5173</span>
          <span>OK</span>
        </div>
      </div>

      {/* Elegant minimalist text badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.label}
          className="absolute z-20 font-mono text-[10px] text-[#A1A1AA] border border-[#F0EDE6]/10 px-2.5 py-1 bg-[#0A0A0A] rounded-sm select-none"
          style={{
            top: badge.top,
            left: (badge as any).left,
            right: (badge as any).right,
            bottom: badge.bottom,
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            animation: `float ${4 + badge.delay}s ease-in-out infinite`,
            animationDelay: `${badge.delay}s`,
            whiteSpace: "nowrap",
          }}
        >
          <span className="text-[#FF4500] mr-1.5">&gt;</span>
          <span>{badge.label}</span>
        </div>
      ))}

      {/* Minimal stats tag */}
      <div
        className="absolute z-20 rounded-md p-3 border border-[#F0EDE6]/10 bg-[#0A0A0A] text-left"
        style={{
          bottom: "6%",
          left: "6%",
          width: "110px",
          animation: "float 6s ease-in-out infinite",
          animationDelay: "0.4s",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontSize: "8px", color: "#605E5A", fontWeight: 600, letterSpacing: "0.05em" }}>
          SYS_CONF
        </div>
        <div className="text-[14px] font-bold text-[#F0EDE6] mt-0.5">98.4%</div>
        <div style={{ fontSize: "8px", color: "#22C55E", marginTop: "2px" }}>
          MODEL_STABLE
        </div>
      </div>

      <style>{`
        @keyframes floatPhone {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
