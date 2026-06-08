import { useEffect, useRef, useState } from "react";

interface SystemVisualizerProps {
  scrollProgress?: number; // continuously driven by parent scroll (0.0 to 1.0)
  stage?: number;          // static stage fallback (1 to 5)
}

export function SystemVisualizer({ scrollProgress, stage }: SystemVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageInfo, setStageInfo] = useState({ title: "", code: "", desc: "" });

  // Map scrollProgress (0 to 1) cumulatively across 4 stages
  let p1 = 0.0;
  let p2 = 0.0;
  let p3 = 0.0;
  let p4 = 0.0;

  let activeStage = 1;
  let activeProgress = 0.0;

  if (scrollProgress !== undefined) {
    if (scrollProgress >= 1.0) {
      activeStage = 4;
      activeProgress = 1.0;
    } else {
      activeStage = Math.min(4, Math.floor(scrollProgress * 4) + 1);
      const stagePct = (scrollProgress % 0.25) / 0.25;
      activeProgress = 0.3 + 0.7 * stagePct;
    }

    const progressStage1 = Math.min(1.0, Math.max(0.0, scrollProgress / 0.25));
    const progressStage2 = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.25) / 0.25));
    const progressStage3 = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.50) / 0.25));
    const progressStage4 = Math.min(1.0, Math.max(0.0, (scrollProgress - 0.75) / 0.25));

    p1 = progressStage1 > 0 ? (progressStage1 < 1.0 ? 0.3 + 0.7 * progressStage1 : 1.0) : 0.0;
    p2 = progressStage2 > 0 ? (progressStage2 < 1.0 ? 0.3 + 0.7 * progressStage2 : 1.0) : 0.0;
    p3 = progressStage3 > 0 ? (progressStage3 < 1.0 ? 0.3 + 0.7 * progressStage3 : 1.0) : 0.0;
    p4 = progressStage4 > 0 ? (progressStage4 < 1.0 ? 0.3 + 0.7 * progressStage4 : 1.0) : 0.0;
  } else {
    activeStage = stage || 1;
    activeProgress = 1.0;
    p1 = activeStage >= 1 ? 1.0 : 0.0;
    p2 = activeStage >= 2 ? 1.0 : 0.0;
    p3 = activeStage >= 3 ? 1.0 : 0.0;
    p4 = activeStage >= 4 ? 1.0 : 0.0;
  }

  const p = activeProgress;

  // Refs to allow the draw loop to access latest values without restarting the animation loop
  const pRef = useRef(activeProgress);
  const activeStageRef = useRef(activeStage);
  const p1Ref = useRef(p1);
  const p2Ref = useRef(p2);
  const p3Ref = useRef(p3);
  const p4Ref = useRef(p4);

  pRef.current = activeProgress;
  activeStageRef.current = activeStage;
  p1Ref.current = p1;
  p2Ref.current = p2;
  p3Ref.current = p3;
  p4Ref.current = p4;

  useEffect(() => {
    if (activeStage === 1) {
      setStageInfo({
        title: "INSTRUCTION_PIPELINE & CPU_DIE",
        code: "SYS-HW.001.0",
        desc: "Base hardware layer: registers, ALU cores, and clock bus layout grid.",
      });
    } else if (activeStage === 2) {
      setStageInfo({
        title: "K8S_MICROSERVICES & BACKEND_RACKS",
        code: "SYS-SVC.102.4",
        desc: "API gateway routing requests to auth, analytics, and db clusters.",
      });
    } else if (activeStage === 3) {
      setStageInfo({
        title: "MODULE_DEPENDENCY_GRAPH",
        code: "SYS-DEP.033.9",
        desc: "SDK packages, runtime modules, and system library trees compiling.",
      });
    } else if (activeStage === 4) {
      setStageInfo({
        title: "NEURAL_NETWORK & TF_LITE_MODEL",
        code: "SYS-ML.048.2",
        desc: "On-device intelligence: feed-forward weight matrices and training curves.",
      });
    } else {
      setStageInfo({
        title: "CLOUD_MAP & INTERNET_ENDPOINTS",
        code: "SYS-NET.099.9",
        desc: "Production topology map.",
      });
    }
  }, [activeStage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const draw = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      if (width === 0 || height === 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const p = pRef.current;
      const activeStage = activeStageRef.current;
      const p1 = p1Ref.current;
      const p2 = p2Ref.current;
      const p3 = p3Ref.current;
      const p4 = p4Ref.current;

      // Setup bold vector theme colors (brighter & classic CAD style)
      const signalColor = "#FF5500"; // classic glowing orange-red
      const secondaryColor = "#FFE0B2"; // warm accent cream
      const greenColor = "#22C55E"; // green operational accents
      const bgLineColor = "rgba(255, 85, 0, 0.05)"; // subtle grid lines

      // Clean background grid (no glow)
      ctx.shadowBlur = 0;
      ctx.strokeStyle = bgLineColor;
      ctx.lineWidth = 0.8;
      const gridSize = 20;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Maintain a uniform coordinate center so the isometric ground diamond and transition compile in one stationary place
      const stageCenterX = 60;
      const stageCenterY = 90;
      const stageCenterZ = 25;

      // Projection metrics - dynamically bound scale to guarantee the entire grid fits with margin on all viewports
      const scale = Math.min((width - 44) / 260, (height - 44) / 200);
      const cx = width / 2;
      const cy = height / 2;
      const cos30 = Math.cos(Math.PI / 6);
      const sin30 = Math.sin(Math.PI / 6);

      const project = (X: number, Y: number, Z: number): { x: number; y: number } => {
        const xOffset = X - stageCenterX;
        const yOffset = Y - stageCenterY;
        const zOffset = (Z - stageCenterZ) * 0.72; // compress z-axis slightly to fit taller profiles

        const rx = (xOffset - yOffset) * cos30;
        const ry = (xOffset + yOffset) * sin30 - zOffset;

        return {
          x: cx + rx * scale,
          y: cy + ry * scale,
        };
      };

      const t = frame * 0.008;

      // Draw ground grid boundaries with a constant subtle opacity so grid boundary is always visible
      // Double stroke CAD border for high-end blueprint aesthetic
      const p00 = project(0, 0, 0);
      const p10 = project(120, 0, 0);
      const p11 = project(120, 180, 0);
      const p01 = project(0, 180, 0);

      ctx.strokeStyle = "rgba(240, 237, 230, 0.22)";
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.moveTo(p00.x, p00.y);
      ctx.lineTo(p10.x, p10.y);
      ctx.lineTo(p11.x, p11.y);
      ctx.lineTo(p01.x, p01.y);
      ctx.closePath();
      ctx.stroke();

      const p00_in = project(3, 3, 0);
      const p10_in = project(117, 3, 0);
      const p11_in = project(117, 177, 0);
      const p01_in = project(3, 177, 0);

      ctx.strokeStyle = "rgba(240, 237, 230, 0.06)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(p00_in.x, p00_in.y);
      ctx.lineTo(p10_in.x, p10_in.y);
      ctx.lineTo(p11_in.x, p11_in.y);
      ctx.lineTo(p01_in.x, p01_in.y);
      ctx.closePath();
      ctx.stroke();

      // ----------------------------------------------------
      // DRAW BY ACTIVE STAGE
      // ----------------------------------------------------
      // ----------------------------------------------------
      // DRAW STAGE 1: CPU Die & Logic Blocks (driven by p1)
      // ----------------------------------------------------
      if (p1 > 0.01) {
        const drawBlock = (x: number, y: number, w: number, l: number, h: number, label: string) => {
          const blockProgress = Math.min(1, Math.max(0, (p1 - 0.05) / 0.5));
          if (blockProgress <= 0.01) return;

          const currentHeight = h * blockProgress;

          const c0 = project(x, y, 0);
          const c1 = project(x + w, y, 0);
          const c2 = project(x + w, y + l, 0);
          const c3 = project(x, y + l, 0);

          const t0 = project(x, y, currentHeight);
          const t1 = project(x + w, y, currentHeight);
          const t2 = project(x + w, y + l, currentHeight);
          const t3 = project(x, y + l, currentHeight);

          ctx.lineWidth = 2.0;
          ctx.shadowColor = "rgba(255, 85, 0, 0.25)";
          ctx.shadowBlur = 4;
          ctx.strokeStyle = `rgba(240, 237, 230, ${0.45 * blockProgress})`;
          ctx.fillStyle = `rgba(255, 85, 0, ${0.03 * blockProgress})`;

          ctx.beginPath();
          ctx.moveTo(c0.x, c0.y); ctx.lineTo(c1.x, c1.y); ctx.lineTo(c2.x, c2.y); ctx.lineTo(c3.x, c3.y);
          ctx.closePath(); ctx.fill(); ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(t0.x, t0.y); ctx.lineTo(t1.x, t1.y); ctx.lineTo(t2.x, t2.y); ctx.lineTo(t3.x, t3.y);
          ctx.closePath(); ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(c0.x, c0.y); ctx.lineTo(t0.x, t0.y);
          ctx.moveTo(c1.x, c1.y); ctx.lineTo(t1.x, t1.y);
          ctx.moveTo(c2.x, c2.y); ctx.lineTo(t2.x, t2.y);
          ctx.moveTo(c3.x, c3.y); ctx.lineTo(t3.x, t3.y);
          ctx.stroke();

          if (blockProgress > 0.4) {
            ctx.shadowBlur = 0;
            ctx.strokeStyle = `rgba(240, 237, 230, ${0.2 * blockProgress})`;
            ctx.lineWidth = 1;
            for (let i = 1; i < 4; i++) {
              const l0 = project(x + (w * i) / 4, y, currentHeight / 2);
              const l1 = project(x + (w * i) / 4, y + l, currentHeight / 2);
              ctx.beginPath();
              ctx.moveTo(l0.x, l0.y); ctx.lineTo(l1.x, l1.y); ctx.stroke();
            }
          }

          if (blockProgress > 0.7) {
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(240, 237, 230, ${0.75 * blockProgress})`;
            ctx.font = "bold 8px monospace";
            const center = project(x + w / 2, y + l / 2, currentHeight);
            ctx.fillText(label, center.x - 16, center.y + 3);
          }
        };

        drawBlock(10, 10, 45, 45, 8, "ALU_0");
        drawBlock(65, 10, 45, 45, 8, "L1_CACHE");
        drawBlock(10, 65, 45, 45, 8, "REGS");
        drawBlock(65, 65, 45, 45, 8, "CTRL");

        const busProgress = Math.min(1, Math.max(0, (p1 - 0.4) / 0.4));
        if (busProgress > 0.01) {
          ctx.strokeStyle = `rgba(255, 85, 0, ${0.8 * busProgress})`;
          ctx.lineWidth = 2.2;
          ctx.shadowColor = "rgba(255, 85, 0, 0.45)";
          ctx.shadowBlur = 5;

          const drawBusLine = (x0: number, y0: number, x1: number, y1: number) => {
            const sPt = project(x0, y0, 3);
            const dx = x0 + (x1 - x0) * busProgress;
            const dy = y0 + (y1 - y0) * busProgress;
            const ePt = project(dx, dy, 3);

            ctx.beginPath();
            ctx.moveTo(sPt.x, sPt.y); ctx.lineTo(ePt.x, ePt.y); ctx.stroke();
          };

          drawBusLine(32, 55, 32, 65);
          drawBusLine(87, 55, 87, 65);
          drawBusLine(55, 32, 65, 32);

          const busPulse = (frame % 80) / 80;
          const ptX = 55 + 10 * busPulse;
          const pt = project(ptX, 32, 3);
          ctx.fillStyle = signalColor;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ----------------------------------------------------
      // STAGE 2: Microservices & Server Racks (driven by p2)
      // ----------------------------------------------------
      if (p2 > 0.01) {
        const drawServerRack = (x: number, y: number, name: string) => {
          const w = 24;
          const l = 24;
          const h = 50;

          const rackProgress = Math.min(1, Math.max(0, (p2 - 0.15) / 0.45));
          if (rackProgress <= 0.01) return;

          const currentHeight = h * rackProgress;

          const base0 = project(x, y, 0);
          const base1 = project(x + w, y, 0);
          const base2 = project(x + w, y + l, 0);
          const base3 = project(x, y + l, 0);

          const top0 = project(x, y, currentHeight);
          const top1 = project(x + w, y, currentHeight);
          const top2 = project(x + w, y + l, currentHeight);
          const top3 = project(x, y + l, currentHeight);

          ctx.shadowBlur = 0;
          ctx.lineWidth = 2.0;
          ctx.strokeStyle = `rgba(240, 237, 230, ${0.4 * rackProgress})`;
          ctx.fillStyle = `rgba(10, 10, 10, ${0.85 * rackProgress})`;

          ctx.beginPath();
          ctx.moveTo(base0.x, base0.y); ctx.lineTo(base1.x, base1.y); ctx.lineTo(base2.x, base2.y); ctx.lineTo(base3.x, base3.y);
          ctx.closePath(); ctx.fill(); ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(top0.x, top0.y); ctx.lineTo(top1.x, top1.y); ctx.lineTo(top2.x, top2.y); ctx.lineTo(top3.x, top3.y);
          ctx.closePath(); ctx.fill(); ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(base0.x, base0.y); ctx.lineTo(top0.x, top0.y);
          ctx.moveTo(base1.x, base1.y); ctx.lineTo(top1.x, top1.y);
          ctx.moveTo(base2.x, base2.y); ctx.lineTo(top2.x, top2.y);
          ctx.moveTo(base3.x, base3.y); ctx.lineTo(top3.x, top3.y);
          ctx.stroke();

          if (rackProgress > 0.3) {
            ctx.strokeStyle = `rgba(240, 237, 230, ${0.5 * rackProgress})`;
            ctx.lineWidth = 1.2;
            for (let sh = 6; sh < currentHeight - 6; sh += 9) {
              const sL0 = project(x, y + l, sh);
              const sR0 = project(x + w, y + l, sh);
              const sL1 = project(x, y + l, sh + 5);
              const sR1 = project(x + w, y + l, sh + 5);

              ctx.beginPath();
              ctx.moveTo(sL0.x, sL0.y); ctx.lineTo(sR0.x, sR0.y); ctx.lineTo(sR1.x, sR1.y); ctx.lineTo(sL1.x, sL1.y);
              ctx.closePath(); ctx.stroke();

              const activeLed = (frame + sh) % 60 < 20;
              ctx.shadowColor = activeLed ? "rgba(255, 85, 0, 0.6)" : "rgba(34, 197, 94, 0.6)";
              ctx.shadowBlur = 4;
              ctx.fillStyle = activeLed ? signalColor : greenColor;
              const ledPt = project(x + w * 0.15, y + l, sh + 2.5);
              ctx.beginPath();
              ctx.arc(ledPt.x, ledPt.y, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          if (rackProgress > 0.8) {
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(226, 192, 141, 0.95)`;
            ctx.font = "bold 8px monospace";
            const labelPt = project(x, y + l, currentHeight + 8);
            ctx.fillText(name, labelPt.x, labelPt.y);
          }
        };

        drawServerRack(10, 130, "API_GATEWAY");
        drawServerRack(48, 130, "AUTH_SVC");
        drawServerRack(86, 130, "DB_CLUSTER");

        const cableProgress = Math.min(1, Math.max(0, (p2 - 0.6) / 0.35));
        if (cableProgress > 0.01) {
          ctx.strokeStyle = `rgba(255, 85, 0, ${0.5 * cableProgress})`;
          ctx.lineWidth = 2.2;
          ctx.shadowColor = "rgba(255, 85, 0, 0.4)";
          ctx.shadowBlur = 4;

          const drawCable = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) => {
            const start = project(x0, y0, z0);
            const dx = x0 + (x1 - x0) * cableProgress;
            const dy = y0 + (y1 - y0) * cableProgress;
            const dz = z0 + (z1 - z0) * cableProgress;
            const end = project(dx, dy, dz);

            ctx.beginPath();
            ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
          };

          // Cables connect from top surfaces of Stage 1 REGS (32, 110, 8) and CTRL (87, 110, 8)
          drawCable(32, 110, 8, 22, 130, 10);
          drawCable(87, 110, 8, 98, 130, 10);

          ctx.strokeStyle = `rgba(34, 197, 94, ${0.55 * cableProgress})`;
          drawCable(34, 142, 25, 48, 142, 25);
          drawCable(72, 142, 25, 86, 142, 25);

          // Flow label annotations next to the connection lines
          if (cableProgress > 0.5) {
            ctx.fillStyle = `rgba(240, 237, 230, ${0.6 * cableProgress})`;
            ctx.font = "bold 6.5px monospace";
            const pt1 = project(32, 110, 8);
            const pt2 = project(87, 110, 8);
            ctx.fillText("NET_IN", pt1.x - 22, pt1.y - 4);
            ctx.fillText("DB_SYNC", pt2.x + 6, pt2.y - 4);
          }

          const netPulse = (t * 2.5) % 1;
          const npX = 34 + 14 * netPulse;
          const np = project(npX, 142, 25);
          ctx.fillStyle = greenColor;
          ctx.shadowColor = "rgba(34, 197, 94, 0.6)";
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.arc(np.x, np.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ----------------------------------------------------
      // STAGE 3: Modular Dependency Tree (driven by p3)
      // ----------------------------------------------------
      if (p3 > 0.01) {
        const rootNode = { x: 60, y: 90, z: 90 };
        const dependencies = [
          { x: 15, y: 40, z: 75, name: "flutter_core" },
          { x: 15, y: 140, z: 75, name: "android_sdk" },
          { x: 105, y: 40, z: 75, name: "tflite_ops" },
          { x: 105, y: 140, z: 75, name: "postgres_driver" },
          { x: 60, y: 175, z: 75, name: "ws_router" },
        ];

        const treeProgress = Math.min(1, Math.max(0, (p3 - 0.05) / 0.9));
        if (treeProgress > 0.01) {
          const rPt = project(rootNode.x, rootNode.y, rootNode.z * treeProgress);

          ctx.lineWidth = 2.0;
          dependencies.forEach((dep) => {
            const dPt = project(dep.x, dep.y, dep.z * treeProgress);
            ctx.strokeStyle = `rgba(255, 85, 0, ${0.55 * treeProgress})`;
            ctx.shadowColor = "rgba(255, 85, 0, 0.35)";
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(rPt.x, rPt.y); ctx.lineTo(dPt.x, dPt.y); ctx.stroke();

            // Dependency Nodes
            ctx.shadowBlur = 0;
            ctx.fillStyle = "#0A0A0A";
            ctx.strokeStyle = `rgba(226, 192, 141, ${0.9 * treeProgress})`;
            ctx.beginPath();
            ctx.rect(dPt.x - 3.5, dPt.y - 3.5, 7, 7); ctx.fill(); ctx.stroke();

            // Text Label
            if (treeProgress > 0.7) {
              ctx.fillStyle = `rgba(240, 237, 230, ${0.85 * treeProgress})`;
              ctx.font = "bold 7px monospace";
              ctx.fillText(dep.name, dPt.x + 8, dPt.y + 2.5);
            }
          });

          // Root Node
          ctx.fillStyle = "#0A0A0A";
          ctx.strokeStyle = `rgba(255, 85, 0, ${treeProgress})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = "rgba(255, 85, 0, 0.5)";
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.arc(rPt.x, rPt.y, 4.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

          // Connect Top of Server Racks to Dependency Nodes
          const drawInterStageCable = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) => {
            const start = project(x0, y0, z0);
            const dx = x0 + (x1 - x0) * treeProgress;
            const dy = y0 + (y1 - y0) * treeProgress;
            const dz = z0 + (z1 - z0) * treeProgress;
            const end = project(dx, dy, dz);

            ctx.beginPath();
            ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
          };

          ctx.strokeStyle = `rgba(255, 85, 0, ${0.45 * treeProgress})`;
          ctx.lineWidth = 2.0;
          ctx.shadowBlur = 4;
          drawInterStageCable(22, 142, 50, 15, 140, 75); // API_GATEWAY -> android_sdk
          drawInterStageCable(98, 142, 50, 105, 140, 75); // DB_CLUSTER -> postgres_driver
        }
      }

      // ----------------------------------------------------
      // STAGE 4: Neural Network Model (driven by p4)
      // ----------------------------------------------------
      if (p4 > 0.01) {
        const inputNodes = [20, 40, 60, 80];
        const hiddenNodes = [15, 32, 50, 67, 85];
        const outputNodes = [30, 50, 70];

        const inX = 15;
        const inY = 150;
        const hidX = 60;
        const hidY = 90;
        const outX = 105;
        const outY = 30;

        const netProgress = Math.min(1, Math.max(0, (p4 - 0.05) / 0.95));

        if (netProgress > 0.01) {
          ctx.lineWidth = 0.8;
          ctx.strokeStyle = `rgba(240, 237, 230, ${0.12 * netProgress})`;
          ctx.shadowBlur = 0;

          // Connections Input -> Hidden (fine background mesh)
          inputNodes.forEach((inZ) => {
            const inPt = project(inX, inY, inZ);
            hiddenNodes.forEach((hidZ) => {
              const hidPt = project(hidX, hidY, hidZ);
              ctx.beginPath();
              ctx.moveTo(inPt.x, inPt.y); ctx.lineTo(hidPt.x, hidPt.y); ctx.stroke();
            });
          });

          // Connections Hidden -> Output (highlighted telemetry weight lanes)
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = `rgba(255, 85, 0, ${0.45 * netProgress})`;
          ctx.shadowColor = "rgba(255, 85, 0, 0.15)";
          ctx.shadowBlur = 2;
          hiddenNodes.forEach((hidZ) => {
            const hidPt = project(hidX, hidY, hidZ);
            outputNodes.forEach((outZ) => {
              const outPt = project(outX, outY, outZ);
              ctx.beginPath();
              ctx.moveTo(hidPt.x, hidPt.y); ctx.lineTo(outPt.x, outPt.y); ctx.stroke();
            });
          });

          // Draw Nodes
          const drawNetNode = (x: number, y: number, z: number, color: string) => {
            const pt = project(x, y, z);
            ctx.fillStyle = "#0A0A0A";
            ctx.strokeStyle = color;
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          };

          inputNodes.forEach((z) => drawNetNode(inX, inY, z, `rgba(161, 161, 170, ${0.85 * netProgress})`));
          hiddenNodes.forEach((z) => drawNetNode(hidX, hidY, z, `rgba(226, 192, 141, ${0.85 * netProgress})`));
          outputNodes.forEach((z) => drawNetNode(outX, outY, z, `rgba(255, 85, 0, ${netProgress})`));

          // Connect Dependency Nodes to Neural Inputs/Outputs
          const drawNeuralCable = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) => {
            const start = project(x0, y0, z0);
            const dx = x0 + (x1 - x0) * netProgress;
            const dy = y0 + (y1 - y0) * netProgress;
            const dz = z0 + (z1 - z0) * netProgress;
            const end = project(dx, dy, dz);

            ctx.beginPath();
            ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
          };

          ctx.strokeStyle = `rgba(255, 85, 0, ${0.45 * netProgress})`;
          ctx.lineWidth = 2.0;
          ctx.shadowBlur = 4;
          drawNeuralCable(15, 140, 75, 15, 150, 40); // android_sdk -> neural input node
          drawNeuralCable(105, 40, 75, 105, 30, 50); // tflite_ops -> neural output node

          // Loss curve
          if (netProgress > 0.5) {
            ctx.shadowBlur = 0;
            const curveProgress = (netProgress - 0.5) / 0.5;

            // Draw a small transparent green monitor panel at the output side (Z=10)
            const drawChartPanel = (x: number, y: number, z: number, w: number, h: number) => {
              const c0 = project(x, y, z);
              const c1 = project(x + w, y, z);
              const c2 = project(x + w, y + h, z);
              const c3 = project(x, y + h, z);

              ctx.strokeStyle = `rgba(34, 197, 94, ${0.15 * curveProgress})`;
              ctx.lineWidth = 1.0;
              ctx.beginPath();
              ctx.moveTo(c0.x, c0.y); ctx.lineTo(c1.x, c1.y); ctx.lineTo(c2.x, c2.y); ctx.lineTo(c3.x, c3.y);
              ctx.closePath();
              ctx.stroke();

              // Grid lines on panel
              for (let i = 1; i < 3; i++) {
                const l0 = project(x + (w * i) / 3, y, z);
                const l1 = project(x + (w * i) / 3, y + h, z);
                ctx.beginPath();
                ctx.moveTo(l0.x, l0.y); ctx.lineTo(l1.x, l1.y); ctx.stroke();
              }
            };
            drawChartPanel(95, 5, 10, 20, 20);

            const lossStart = project(outX, outY, 50); // center output node
            const lossEnd = project(115, 10, 10); // chart screen point
            const dx = lossStart.x + (lossEnd.x - lossStart.x) * curveProgress;
            const dy = lossStart.y + (lossEnd.y - lossStart.y) * curveProgress;

            ctx.strokeStyle = `rgba(34, 197, 94, ${0.75 * curveProgress})`;
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(lossStart.x, lossStart.y);
            ctx.lineTo(dx, dy);
            ctx.stroke();

            if (curveProgress > 0.8) {
              ctx.fillStyle = greenColor;
              ctx.font = "bold 6.5px monospace";
              ctx.fillText("LOSS: 0.042", lossEnd.x + 4, lossEnd.y + 2);
            }
          }
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-transparent flex flex-col justify-between overflow-hidden">
      {/* Main Drawing Area */}
      <div ref={containerRef} className="flex-1 w-full relative">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
      </div>

      {/* Floating Status HUD Overlay (Classic CAD specs pane) */}
      <div className="border border-[#F0EDE6]/10 grid grid-cols-[55px_1fr] bg-[#0A0A0A]/85 backdrop-blur-md font-mono text-[9px] select-none shrink-0 relative z-10 mx-2 mb-2 rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
        {/* Glowing Orange Logo container */}
        <div className="border-r border-[#F0EDE6]/10 flex items-center justify-center p-2.5">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FF5500]" fill="currentColor">
            <path d="M4 3h16v2.5H4zm0 6h12v2.5H4zm0 6h16v2.5H4z" />
          </svg>
        </div>

        {/* Dynamic debug log data */}
        <div className="flex flex-col p-1.5 justify-center leading-[1.3]">
          <div className="text-[#F0EDE6] font-bold text-[8.5px] truncate">
            {stageInfo.title}
          </div>
          <div className="text-[#A1A1AA]/80 flex justify-between gap-2 text-[7.5px] mt-0.5">
            <span>DWG: {stageInfo.code}</span>
            <span className="text-[#FF5500] font-bold">STATUS: COMPILING</span>
          </div>
          <div className="text-[#A1A1AA]/80 flex justify-between gap-2 text-[7.5px]">
            <span>SCALE: 1:1</span>
            <span>BUILD PROGRESS: {Math.floor(p * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
