// Custom dark-UI mockups — no stock photos
const SIGNAL = "#FF4500";

const wrap: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
};

export function DevPulseMockup() {
  return (
    <div style={{ ...wrap, background: "linear-gradient(160deg, #0E1320 0%, #161B27 100%)" }}>
      <div
        style={{
          width: "82%",
          height: "82%",
          borderRadius: 10,
          background: "#0A0E18",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#8B90A0", letterSpacing: "0.1em", textTransform: "uppercase" }}>DevPulse</div>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 6, height: 6, borderRadius: 3, background: i === 0 ? SIGNAL : "rgba(255,255,255,0.1)" }} />)}
          </div>
        </div>

        {/* Big stat */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 2, padding: 10, borderRadius: 6, background: "rgba(37,99,255,0.1)", border: "1px solid rgba(37,99,255,0.2)" }}>
            <div style={{ fontSize: 8, color: SIGNAL, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Streak</div>
            <div className="tabular" style={{ fontSize: 22, fontWeight: 700, color: SIGNAL, lineHeight: 1, marginTop: 4 }}>342</div>
          </div>
          <div style={{ flex: 1, padding: 10, borderRadius: 6, background: "rgba(255,255,255,0.03)" }}>
            <div style={{ fontSize: 8, color: "#8B90A0", textTransform: "uppercase", fontWeight: 600 }}>Repos</div>
            <div className="tabular" style={{ fontSize: 18, fontWeight: 700, color: "#F0EDE6", marginTop: 4 }}>12</div>
          </div>
          <div style={{ flex: 1, padding: 10, borderRadius: 6, background: "rgba(255,255,255,0.03)" }}>
            <div style={{ fontSize: 8, color: "#8B90A0", textTransform: "uppercase", fontWeight: 600 }}>PRs</div>
            <div className="tabular" style={{ fontSize: 18, fontWeight: 700, color: "#F0EDE6", marginTop: 4 }}>48</div>
          </div>
        </div>

        {/* Chart */}
        <div style={{ flex: 1, padding: 8, borderRadius: 6, background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "flex-end", gap: 3 }}>
          {[30, 55, 40, 70, 45, 85, 60, 90, 50, 75, 65, 95, 70, 80].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? SIGNAL : `rgba(37,99,255,${0.15 + (h / 200)})`, borderRadius: 1 }} />
          ))}
        </div>

        {/* Contribution grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(20, 1fr)", gap: 2 }}>
          {Array.from({ length: 60 }).map((_, i) => {
            const lvl = (i * 7) % 5;
            return <div key={i} style={{ aspectRatio: "1", borderRadius: 1, background: lvl === 0 ? "rgba(255,255,255,0.04)" : `rgba(37,99,255,${0.12 + lvl * 0.18})` }} />;
          })}
        </div>
      </div>
    </div>
  );
}

export function MedTekMockup() {
  return (
    <div style={{ ...wrap, background: "#161B27" }}>
      <div
        style={{
          width: 152,
          height: "92%",
          borderRadius: 22,
          background: "#0F1117",
          padding: 5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ width: "100%", height: "100%", borderRadius: 18, background: "#FAFAF9", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px 4px", fontSize: 8, fontWeight: 600, color: "#0C0C0E" }}>
            <span className="tabular">9:41</span>
            <span style={{ width: 28, height: 8, borderRadius: 4, background: "#0C0C0E" }} />
            <span style={{ display: "flex", gap: 2 }}>
              <span style={{ width: 4, height: 4, borderRadius: 2, background: "#0C0C0E" }} />
              <span style={{ width: 4, height: 4, borderRadius: 2, background: "#0C0C0E" }} />
            </span>
          </div>

          {/* Header */}
          <div style={{ padding: "8px 14px 10px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 7, fontWeight: 600, color: "#A0A0A0", letterSpacing: "0.1em", textTransform: "uppercase" }}>MedTek</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#0C0C0E", marginTop: 2 }}>Patients</div>
          </div>

          {/* List */}
          <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
            {[
              { n: "Aarav Reddy", s: "Diabetes · Today", a: true },
              { n: "Priya Iyer", s: "Routine · Tue" },
              { n: "Vihaan Rao", s: "Acute · Mon" },
              { n: "Saanvi Mehta", s: "Cardiac · 12 Mar" },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 6px", borderRadius: 6, background: p.a ? "rgba(37,99,255,0.08)" : "transparent" }}>
                <div style={{ width: 18, height: 18, borderRadius: 9, background: "#ECEAE6", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: "#0C0C0E" }}>{p.n}</div>
                  <div style={{ fontSize: 6.5, color: "#A0A0A0", marginTop: 1 }}>{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Face Auth overlay */}
          <div style={{ margin: "0 8px 8px", padding: 8, borderRadius: 8, background: SIGNAL, color: "#fff" }}>
            <div style={{ fontSize: 7, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.8 }}>Face Auth</div>
            <div style={{ fontSize: 9, fontWeight: 600, marginTop: 2 }}>Verify identity →</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TraceMockup() {
  return (
    <div style={{ ...wrap, background: "linear-gradient(160deg, #0F1117 0%, #0E1812 100%)" }}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" style={{ maxWidth: 220 }}>
        {/* Outer ring track */}
        <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
        {/* Progress arc — green */}
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="#22C55E"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${(2 * Math.PI * 68) * 0.72} ${2 * Math.PI * 68}`}
          transform="rotate(-90 100 100)"
        />
        {/* Inner ring */}
        <circle cx="100" cy="100" r="48" fill="none" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
        <text x="100" y="92" textAnchor="middle" fill="#8B90A0" fontSize="9" fontWeight="600" letterSpacing="2" fontFamily="Geist, sans-serif">CO₂ THIS WEEK</text>
        <text x="100" y="118" textAnchor="middle" fill="#F0EDE6" fontSize="32" fontWeight="700" fontFamily="Geist, sans-serif">7.2<tspan fill="#8B90A0" fontSize="14"> kg</tspan></text>
        <text x="100" y="138" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="600" fontFamily="Geist, sans-serif">↓ 23% vs avg</text>
      </svg>
      {/* Day labels */}
      <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex", justifyContent: "space-around", padding: "0 24px", fontSize: 9, color: "#4A5066", fontWeight: 600 }}>
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} style={{ color: i < 5 ? "#22C55E" : "#4A5066" }}>{d}</span>
        ))}
      </div>
    </div>
  );
}

export function SeamlessMockup() {
  return (
    <div style={{ ...wrap, background: "#0A0E18" }}>
      <div style={{ position: "relative", width: 200, height: "85%", borderRadius: 18, background: "#0F1117", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", padding: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, fontWeight: 600, color: "#F0EDE6" }}>
          <span className="tabular">9:41</span>
          <span style={{ color: SIGNAL }}>● Scanning</span>
        </div>
        <div style={{ fontSize: 9, color: "#8B90A0", marginTop: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Passport</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#F0EDE6", marginTop: 2 }}>Biometric Scan</div>

        {/* Face frame */}
        <div style={{ position: "relative", marginTop: 14, height: 140, borderRadius: 10, background: "rgba(37,99,255,0.04)", border: "1px solid rgba(37,99,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {/* Corner brackets */}
          {[
            { top: 8, left: 8, br: "0 0 0 2px" },
            { top: 8, right: 8 },
            { bottom: 8, left: 8 },
            { bottom: 8, right: 8 },
          ].map((c, i) => (
            <div key={i} style={{ position: "absolute", width: 14, height: 14, borderColor: SIGNAL, borderStyle: "solid", borderWidth: i === 0 ? "2px 0 0 2px" : i === 1 ? "2px 2px 0 0" : i === 2 ? "0 0 2px 2px" : "0 2px 2px 0", ...c }} />
          ))}
          {/* Face silhouette */}
          <svg width="64" height="80" viewBox="0 0 64 80">
            <ellipse cx="32" cy="32" rx="20" ry="24" fill="none" stroke="rgba(37,99,255,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M14 64 Q32 54 50 64 L50 80 L14 80 Z" fill="none" stroke="rgba(37,99,255,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          {/* Scan line */}
          <div style={{ position: "absolute", left: 12, right: 12, top: "60%", height: 1, background: SIGNAL, boxShadow: `0 0 8px ${SIGNAL}` }} />
        </div>

        <div style={{ marginTop: 12, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 7, color: "#8B90A0", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>NFC Read</div>
            <div className="font-mono" style={{ fontSize: 10, color: "#F0EDE6", marginTop: 1 }}>JPEG2000 ✓</div>
          </div>
          <div className="tabular" style={{ fontSize: 14, fontWeight: 700, color: SIGNAL }}>2.4s</div>
        </div>
      </div>
    </div>
  );
}
