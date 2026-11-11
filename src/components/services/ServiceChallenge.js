"use client";

const GOLD = "#F4A019";

const cardLayouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

/* -------------------------------------------------------
   SHARED VISUAL PRIMITIVES
------------------------------------------------------- */

function Ring({ className = "", gold = false }) {
  return (
    <div
      className={`absolute rounded-full border ${
        gold ? "border-[#F4A019]/25" : "border-white/[0.09]"
      } ${className}`}
    />
  );
}

function Node({ className = "", gold = false }) {
  return (
    <span
      className={`absolute h-3 w-3 rounded-full border ${
        gold
          ? "border-[#F4A019] bg-[#F4A019]/20 shadow-[0_0_18px_#F4A01955]"
          : "border-white/30 bg-[#10243A]"
      } ${className}`}
    >
      <span
        className={`absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          gold ? "bg-[#F4A019]" : "bg-white/50"
        }`}
      />
    </span>
  );
}

function Guide({ className = "", gold = false }) {
  return (
    <span
      className={`absolute h-px ${
        gold ? "bg-[#F4A019]/40" : "bg-white/15"
      } ${className}`}
    />
  );
}

function ArchitectureGrid({ size = "48px" }) {
  return (
    <div
      className="absolute inset-0 opacity-[0.075]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: `${size} ${size}`,
        maskImage: "linear-gradient(to bottom left, black, transparent 78%)",
      }}
    />
  );
}

/* -------------------------------------------------------
   EXECUTIVE SEARCH VISUALS
------------------------------------------------------- */

// 01. Rising Expectations
function ExecutiveGrowth() {
  return (
    <>
      <Ring className="-right-12 top-[8%] h-[340px] w-[340px]" />
      <Ring className="right-[5%] top-[20%] h-[250px] w-[250px]" gold />
      <Ring className="right-[20%] top-[34%] h-[125px] w-[125px]" />

      <svg
        className="absolute right-[4%] top-[9%] h-[65%] w-[65%] opacity-80 transition-transform duration-1000 group-hover:translate-x-2 group-hover:-translate-y-2"
        viewBox="0 0 500 300"
        fill="none"
      >
        <path
          d="M20 255 L125 215 L215 175 L305 105 L470 20"
          stroke="#F4A019"
          strokeOpacity=".55"
          strokeWidth="1.3"
        />
        <path
          d="M20 270 L125 230 L215 190 L305 120 L470 35"
          stroke="white"
          strokeOpacity=".13"
        />
        <path
          d="M125 215 L125 250 M215 175 L215 220 M305 105 L305 155"
          stroke="white"
          strokeOpacity=".18"
        />
        <circle cx="215" cy="175" r="5" fill="#F4A019" />
        <circle cx="305" cy="105" r="5" fill="#F4A019" />
        <circle cx="470" cy="20" r="6" fill="#F4A019" />
      </svg>

      <Node gold className="right-[28%] top-[29%]" />
      <Node className="right-[17%] top-[48%]" />
      <ArchitectureGrid />
    </>
  );
}

// 02. Talent Scarcity
function ExecutiveScarcity() {
  return (
    <>
      <div className="absolute right-[17%] top-[12%] h-[245px] w-[245px] rotate-[-13deg] border border-white/[0.10] transition-transform duration-700 group-hover:rotate-[-8deg]" />
      <div className="absolute right-[21%] top-[19%] h-[195px] w-[195px] rotate-[-13deg] border border-[#F4A019]/20" />

      <svg
        className="absolute right-[12%] top-[17%] h-[60%] w-[55%]"
        viewBox="0 0 320 260"
        fill="none"
      >
        <path
          d="M45 35 H275 L220 115 H100 Z"
          stroke="white"
          strokeOpacity=".20"
        />
        <path
          d="M100 115 H220 L185 220 H135 Z"
          stroke="#F4A019"
          strokeOpacity=".55"
        />
        <path
          d="M45 35 L135 220 M275 35 L185 220"
          stroke="white"
          strokeOpacity=".12"
        />
        {[75, 125, 175, 225].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy="65"
            r="5"
            fill={i === 1 ? "#F4A019" : "#8493A5"}
            fillOpacity=".75"
          />
        ))}
        <circle cx="160" cy="165" r="6" fill="#F4A019" />
        <circle cx="160" cy="205" r="4" fill="#F4A019" />
      </svg>

      <div className="absolute right-[20%] top-[26%] flex items-end gap-3 opacity-70">
        <div className="h-16 w-5 border border-white/20" />
        <div className="h-24 w-5 border border-[#F4A019]/40 bg-[#F4A019]/10" />
        <div className="h-12 w-5 border border-white/20" />
      </div>

      <ArchitectureGrid size="38px" />
    </>
  );
}

// 03. Greater Complexity
function ExecutiveComplexity() {
  return (
    <>
      <Ring className="right-[3%] top-[9%] h-[330px] w-[330px]" />
      <Ring className="right-[10%] top-[20%] h-[230px] w-[230px]" gold />
      <Ring className="right-[24%] top-[33%] h-[110px] w-[110px]" />

      <svg
        className="absolute right-[4%] top-[15%] h-[62%] w-[65%] opacity-80 transition-transform duration-1000 group-hover:scale-105"
        viewBox="0 0 450 280"
        fill="none"
      >
        <path
          d="M15 220 L125 135 L220 180 L350 45 L435 100"
          stroke="#F4A019"
          strokeOpacity=".5"
        />
        <path
          d="M25 65 L125 135 L250 70 L435 190"
          stroke="white"
          strokeOpacity=".18"
        />
        <path
          d="M125 135 L175 260 L300 210 L350 45"
          stroke="white"
          strokeOpacity=".16"
        />
        <path
          d="M220 180 L435 100 M250 70 L300 210"
          stroke="#F4A019"
          strokeOpacity=".25"
        />
        {[
          [125, 135],
          [220, 180],
          [350, 45],
          [250, 70],
          [300, 210],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 1 ? 6 : 4}
            fill={i === 1 ? "#F4A019" : "#A5B3C3"}
          />
        ))}
      </svg>

      <ArchitectureGrid size="44px" />
    </>
  );
}

// 04. Higher Stakes
function ExecutiveStakes() {
  return (
    <>
      <Ring className="-right-16 top-[10%] h-[350px] w-[350px]" />
      <Ring className="right-[4%] top-[22%] h-[245px] w-[245px]" gold />

      <div className="absolute right-[22%] top-[23%] h-[175px] w-[175px] rotate-45 border border-[#F4A019]/35 transition-transform duration-700 group-hover:rotate-[55deg]">
        <div className="absolute inset-5 border border-white/15" />
        <div className="absolute inset-10 border border-[#F4A019]/20" />
      </div>

      <div className="absolute right-[34%] top-[36%] flex h-16 w-16 items-center justify-center rounded-full border border-[#F4A019]/45 bg-[#F4A019]/[0.04]">
        <div className="h-6 w-6 rotate-45 border border-[#F4A019]/70" />
      </div>

      <Guide className="right-[12%] top-[50%] w-[55%] rotate-[-25deg]" gold />
      <Guide className="right-[14%] top-[57%] w-[48%] rotate-[22deg]" />
      <Node gold className="right-[22%] top-[24%]" />
      <Node className="right-[37%] top-[53%]" />
      <ArchitectureGrid />
    </>
  );
}

/* -------------------------------------------------------
   TALENT ADVISORY VISUALS
------------------------------------------------------- */

// 01. Misaligned Leadership Expectations
function AdvisoryAlignment() {
  return (
    <>
      <Ring className="-right-12 top-[8%] h-[350px] w-[350px]" />
      <Ring className="right-[8%] top-[20%] h-[245px] w-[245px]" />
      <Ring className="right-[21%] top-[32%] h-[135px] w-[135px]" gold />

      <div className="absolute right-[30%] top-[34%] h-14 w-14 rounded-full border border-[#F4A019]/50 transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-2">
        <div className="absolute inset-3 rounded-full border border-[#F4A019]/30" />
      </div>

      <div className="absolute right-[21%] top-[25%] h-14 w-14 rounded-full border border-white/20 transition-all duration-700 group-hover:-translate-x-3 group-hover:-translate-y-2">
        <div className="absolute inset-3 rounded-full border border-white/20" />
      </div>

      <Guide className="right-[16%] top-[37%] w-[45%] rotate-[-25deg]" gold />
      <Guide className="right-[19%] top-[48%] w-[42%] rotate-[18deg]" />
      <Node gold className="right-[36%] top-[24%]" />
      <Node className="right-[17%] top-[46%]" />
      <ArchitectureGrid />
    </>
  );
}

// 02. Organizational Readiness Gaps
function AdvisoryReadiness() {
  return (
    <>
      <div className="absolute right-[15%] top-[14%] h-[225px] w-[230px] rotate-[-11deg] border border-white/[0.10] transition-transform duration-700 group-hover:rotate-[-6deg]">
        <div className="absolute inset-5 border border-white/[0.08]" />
        <div className="absolute inset-10 border border-[#F4A019]/20" />
      </div>

      <div className="absolute right-[21%] top-[26%] flex h-[180px] items-end gap-3">
        <div className="h-[40%] w-7 border border-white/20 bg-white/[0.03]" />
        <div className="h-[68%] w-7 border border-[#F4A019]/35 bg-[#F4A019]/10" />
        <div className="h-[95%] w-7 border border-white/20 bg-white/[0.03]" />
        <div className="h-[54%] w-7 border border-white/20 bg-white/[0.03]" />
      </div>

      <Guide className="right-[12%] top-[72%] w-[55%]" />
      <Guide className="right-[17%] top-[77%] w-[44%]" gold />

      <div className="absolute right-[14%] top-[20%] flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F4A019]" />
        <span className="text-[8px] tracking-[0.2em] text-white/40">
          STRUCTURE / READINESS
        </span>
      </div>

      <ArchitectureGrid size="38px" />
    </>
  );
}

// 03. Talent Attraction Challenges
function AdvisoryAttraction() {
  return (
    <>
      <Ring className="-right-5 top-[12%] h-[330px] w-[330px]" />
      <Ring className="right-[9%] top-[22%] h-[230px] w-[230px]" gold />
      <Ring className="right-[23%] top-[36%] h-[115px] w-[115px]" />

      <svg
        className="absolute right-[5%] top-[16%] h-[60%] w-[65%] transition-transform duration-1000 group-hover:scale-105"
        viewBox="0 0 440 280"
        fill="none"
      >
        <path
          d="M20 225 L155 135 L275 55 L415 15"
          stroke="#F4A019"
          strokeOpacity=".55"
        />
        <path
          d="M20 225 L155 135 L300 175 L415 205"
          stroke="white"
          strokeOpacity=".16"
        />
        <path
          d="M155 135 L275 55 M155 135 L330 95"
          stroke="white"
          strokeOpacity=".13"
        />
        <circle cx="155" cy="135" r="7" stroke="#F4A019" />
        <circle cx="275" cy="55" r="5" fill="#F4A019" />
        <circle cx="330" cy="95" r="4" fill="white" fillOpacity=".5" />
        <circle cx="415" cy="15" r="5" fill="#F4A019" />
      </svg>

      <div className="absolute right-[12%] top-[18%] flex items-center gap-2">
        <span className="h-px w-5 bg-[#F4A019]" />
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
          Reach / Connect
        </span>
      </div>

      <Node gold className="right-[37%] top-[26%]" />
      <Node className="right-[15%] top-[40%]" />
      <ArchitectureGrid size="44px" />
    </>
  );
}

// 04. Retention and Integration Risks
function AdvisoryRetention() {
  return (
    <>
      <svg
        className="absolute right-[4%] top-[8%] h-[70%] w-[65%] opacity-85 transition-transform duration-1000 group-hover:scale-105"
        viewBox="0 0 500 340"
        fill="none"
      >
        <path
          d="M250 45 L120 125 L65 245 M250 45 L365 125 L435 245 M120 125 L250 205 L365 125 M250 205 L165 295 M250 205 L340 295"
          stroke="white"
          strokeOpacity=".19"
        />
        <path
          d="M250 45 L250 205 L340 295 M120 125 L365 125"
          stroke="#F4A019"
          strokeOpacity=".4"
        />
        {[
          [250, 45],
          [120, 125],
          [365, 125],
          [65, 245],
          [435, 245],
          [250, 205],
          [165, 295],
          [340, 295],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={i === 5 ? 18 : 10}
              fill={i === 5 ? "#F4A019" : "#10243A"}
              fillOpacity={i === 5 ? ".12" : "1"}
              stroke={i === 5 ? "#F4A019" : "white"}
              strokeOpacity={i === 5 ? ".7" : ".3"}
            />
            <circle
              cx={cx}
              cy={cy}
              r="3"
              fill={i === 5 ? "#F4A019" : "white"}
              fillOpacity=".75"
            />
          </g>
        ))}
      </svg>

      <Ring className="-right-20 top-[8%] h-[340px] w-[340px]" />
      <Ring className="right-[5%] top-[20%] h-[235px] w-[235px]" gold />

      <div className="absolute right-[13%] top-[18%] flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F4A019]" />
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
          Connected / Evolving
        </span>
      </div>

      <ArchitectureGrid />
    </>
  );
}

/* -------------------------------------------------------
   SUCCESSION PLANNING VISUALS
------------------------------------------------------- */

// 01. Unprepared Successors
function SuccessionReadiness() {
  return (
    <>
      <Ring className="-right-12 top-[8%] h-[330px] w-[330px]" />
      <Ring className="right-[7%] top-[21%] h-[230px] w-[230px]" gold />

      <svg
        className="absolute right-[6%] top-[12%] h-[67%] w-[65%]"
        viewBox="0 0 440 300"
        fill="none"
      >
        <path
          d="M35 250 L125 250 L125 195 L215 195 L215 130 L305 130 L305 65 L405 65"
          stroke="#F4A019"
          strokeOpacity=".6"
          strokeWidth="1.5"
        />
        <path
          d="M35 265 L125 265 L125 210 L215 210 L215 145 L305 145 L305 80 L405 80"
          stroke="white"
          strokeOpacity=".18"
        />
        <circle cx="125" cy="195" r="5" fill="#F4A019" />
        <circle cx="215" cy="130" r="5" fill="#F4A019" />
        <circle cx="305" cy="65" r="5" fill="#F4A019" />
      </svg>

      <div className="absolute right-[18%] top-[24%] flex items-end gap-2 opacity-65">
        <div className="h-10 w-6 border border-white/20" />
        <div className="h-16 w-6 border border-white/20" />
        <div className="h-24 w-6 border border-[#F4A019]/40 bg-[#F4A019]/10" />
      </div>

      <ArchitectureGrid />
    </>
  );
}

// 02. Leadership Dependency
function SuccessionDependency() {
  return (
    <>
      <Ring className="-right-10 top-[10%] h-[320px] w-[320px]" />
      <Ring className="right-[7%] top-[22%] h-[220px] w-[220px]" gold />

      <svg
        className="absolute right-[5%] top-[12%] h-[65%] w-[65%]"
        viewBox="0 0 440 300"
        fill="none"
      >
        <path
          d="M220 55 L100 145 M220 55 L340 145 M220 55 L220 245 M100 145 L220 245 L340 145"
          stroke="white"
          strokeOpacity=".23"
        />
        <path
          d="M220 55 L220 245 M100 145 L340 145"
          stroke="#F4A019"
          strokeOpacity=".4"
        />
        {[
          [220, 55],
          [100, 145],
          [340, 145],
          [220, 245],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={i === 0 ? 17 : 10}
              fill="#10243A"
              stroke={i === 0 ? "#F4A019" : "white"}
              strokeOpacity=".55"
            />
            <circle cx={cx} cy={cy} r="3" fill="#F4A019" />
          </g>
        ))}
      </svg>

      <div className="absolute right-[18%] top-[19%] text-[8px] uppercase tracking-[0.2em] text-white/40">
        Critical dependency
      </div>

      <ArchitectureGrid size="42px" />
    </>
  );
}

// 03. Limited Leadership Visibility
function SuccessionVisibility() {
  return (
    <>
      <Ring className="-right-8 top-[8%] h-[350px] w-[350px]" />
      <Ring className="right-[8%] top-[20%] h-[250px] w-[250px]" gold />
      <Ring className="right-[22%] top-[35%] h-[130px] w-[130px]" />

      <svg
        className="absolute right-[4%] top-[15%] h-[62%] w-[66%]"
        viewBox="0 0 450 280"
        fill="none"
      >
        <path
          d="M25 220 L150 130 L270 65 L420 20"
          stroke="#F4A019"
          strokeOpacity=".5"
        />
        <path
          d="M25 220 L150 130 L295 165 L420 215"
          stroke="white"
          strokeOpacity=".17"
        />
        <path
          d="M150 130 L295 165 L345 65"
          stroke="white"
          strokeOpacity=".18"
        />
        {[
          [150, 130],
          [270, 65],
          [295, 165],
          [345, 65],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill={i === 0 ? "#F4A019" : "#9BA9B8"}
          />
        ))}
      </svg>

      <div className="absolute right-[12%] top-[19%] flex items-center gap-2">
        <span className="h-px w-5 bg-[#F4A019]" />
        <span className="text-[8px] tracking-[0.2em] text-white/45">
          Visibility / Insight
        </span>
      </div>

      <ArchitectureGrid size="44px" />
    </>
  );
}

// 04. Disruptive Leadership Transitions
function SuccessionTransition() {
  return (
    <>
      <Ring className="-right-16 top-[9%] h-[340px] w-[340px]" />
      <Ring className="right-[7%] top-[22%] h-[225px] w-[225px]" gold />

      <svg
        className="absolute right-[4%] top-[12%] h-[67%] w-[67%] transition-transform duration-1000 group-hover:translate-x-2"
        viewBox="0 0 480 300"
        fill="none"
      >
        <path
          d="M30 155 H155 L210 90 H330 L390 155 H455"
          stroke="white"
          strokeOpacity=".22"
          strokeWidth="1.5"
        />
        <path
          d="M30 175 H155 L210 110 H330 L390 175 H455"
          stroke="#F4A019"
          strokeOpacity=".55"
          strokeWidth="1.5"
        />
        <path
          d="M155 155 L155 175 M330 90 L330 110"
          stroke="white"
          strokeOpacity=".3"
        />
        <circle cx="30" cy="165" r="6" fill="#F4A019" />
        <circle cx="210" cy="100" r="7" fill="#F4A019" />
        <circle cx="455" cy="165" r="6" fill="#F4A019" />
      </svg>

      <div className="absolute right-[17%] top-[28%] h-20 w-20 rotate-45 border border-white/15" />
      <div className="absolute right-[20%] top-[33%] h-12 w-12 rotate-45 border border-[#F4A019]/35" />

      <ArchitectureGrid />
    </>
  );
}

/* -------------------------------------------------------
   EXECUTIVE & LEADERSHIP CAREER COACHING VISUALS
------------------------------------------------------- */

// 01. Leadership Effectiveness Gaps
function CoachingEffectiveness() {
  return (
    <>
      <Ring className="-right-10 top-[10%] h-[340px] w-[340px]" />
      <Ring className="right-[7%] top-[22%] h-[230px] w-[230px]" gold />

      <svg
        className="absolute right-[6%] top-[13%] h-[66%] w-[65%]"
        viewBox="0 0 440 300"
        fill="none"
      >
        <path
          d="M30 230 L115 175 L205 175 L285 100 L405 100"
          stroke="white"
          strokeOpacity=".18"
        />
        <path
          d="M30 250 L115 195 L205 195 L285 120 L405 120"
          stroke="#F4A019"
          strokeOpacity=".55"
        />
        <path
          d="M115 175 V195 M205 175 V195 M285 100 V120"
          stroke="white"
          strokeOpacity=".2"
        />
        <circle cx="205" cy="185" r="12" stroke="#F4A019" strokeOpacity=".7" />
        <circle cx="205" cy="185" r="4" fill="#F4A019" />
      </svg>

      <div className="absolute right-[15%] top-[20%] flex flex-col gap-3">
        <span className="h-1 w-16 bg-white/15" />
        <span className="h-1 w-12 bg-[#F4A019]/40" />
        <span className="h-1 w-20 bg-white/10" />
      </div>

      <ArchitectureGrid />
    </>
  );
}

// 02. Career Direction Uncertainty
function CoachingDirection() {
  return (
    <>
      <Ring className="-right-10 top-[8%] h-[340px] w-[340px]" />
      <Ring className="right-[8%] top-[21%] h-[235px] w-[235px]" gold />

      <svg
        className="absolute right-[6%] top-[12%] h-[67%] w-[65%] transition-transform duration-1000 group-hover:rotate-3"
        viewBox="0 0 440 300"
        fill="none"
      >
        <circle cx="230" cy="145" r="100" stroke="white" strokeOpacity=".16" />
        <circle cx="230" cy="145" r="65" stroke="#F4A019" strokeOpacity=".35" />
        <circle cx="230" cy="145" r="25" stroke="white" strokeOpacity=".3" />
        <path
          d="M230 25 V265 M110 145 H350"
          stroke="white"
          strokeOpacity=".2"
        />
        <path
          d="M230 45 L252 145 L230 245 L208 145 Z"
          stroke="#F4A019"
          strokeOpacity=".7"
          fill="#F4A019"
          fillOpacity=".04"
        />
        <path d="M230 145 L340 55" stroke="#F4A019" strokeWidth="1.5" />
        <circle cx="230" cy="145" r="5" fill="#F4A019" />
      </svg>

      <div className="absolute right-[14%] top-[18%] text-[8px] uppercase tracking-[0.2em] text-white/40">
        Direction / Focus
      </div>

      <ArchitectureGrid size="42px" />
    </>
  );
}

// 03. Challenges Navigating Change
function CoachingChange() {
  return (
    <>
      <Ring className="-right-10 top-[8%] h-[340px] w-[340px]" />
      <Ring className="right-[7%] top-[22%] h-[230px] w-[230px]" gold />

      <svg
        className="absolute right-[4%] top-[13%] h-[65%] w-[68%] transition-transform duration-1000 group-hover:translate-x-2"
        viewBox="0 0 460 300"
        fill="none"
      >
        <path
          d="M25 240 H120 L185 170 L250 170 L320 90 L430 90"
          stroke="#F4A019"
          strokeOpacity=".55"
          strokeWidth="1.5"
        />
        <path
          d="M120 240 L185 110 L250 110 L320 190 L430 190"
          stroke="white"
          strokeOpacity=".19"
        />
        <path
          d="M185 110 L185 170 M250 110 L250 170 M320 90 L320 190"
          stroke="white"
          strokeOpacity=".17"
        />
        <circle cx="185" cy="170" r="7" fill="#F4A019" />
        <circle cx="320" cy="90" r="5" fill="#F4A019" />
        <circle cx="320" cy="190" r="5" fill="white" fillOpacity=".45" />
      </svg>

      <div className="absolute right-[14%] top-[19%] flex items-center gap-2">
        <span className="h-px w-5 bg-[#F4A019]" />
        <span className="text-[8px] tracking-[0.2em] text-white/40">
          Adapt / Evolve
        </span>
      </div>

      <ArchitectureGrid size="44px" />
    </>
  );
}

// 04. Untapped Leadership Potential
function CoachingPotential() {
  return (
    <>
      <Ring className="-right-16 top-[7%] h-[360px] w-[360px]" />
      <Ring className="right-[4%] top-[18%] h-[270px] w-[270px]" gold />
      <Ring className="right-[17%] top-[31%] h-[155px] w-[155px]" />

      <svg
        className="absolute right-[5%] top-[11%] h-[68%] w-[65%]"
        viewBox="0 0 440 300"
        fill="none"
      >
        <path
          d="M35 250 L120 210 L195 160 L275 100 L405 25"
          stroke="#F4A019"
          strokeOpacity=".6"
          strokeWidth="1.5"
        />
        <path
          d="M35 265 L120 225 L195 175 L275 115 L405 40"
          stroke="white"
          strokeOpacity=".18"
        />
        <path
          d="M120 210 L120 250 M195 160 L195 210 M275 100 L275 155"
          stroke="white"
          strokeOpacity=".2"
        />
        {[120, 195, 275, 405].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={[210, 160, 100, 25][i]}
            r="5"
            fill="#F4A019"
            fillOpacity=".8"
          />
        ))}
      </svg>

      <div className="absolute right-[16%] top-[23%] h-20 w-20 rounded-full border border-[#F4A019]/25 bg-[#F4A019]/[0.03] transition-transform duration-700 group-hover:scale-110">
        <div className="absolute inset-5 rounded-full border border-[#F4A019]/40" />
        <div className="absolute inset-9 rounded-full bg-[#F4A019]/30" />
      </div>

      <ArchitectureGrid />
    </>
  );
}

/* -------------------------------------------------------
   EXECUTIVE TALENT MAPPING & BENCHMARKING VISUALS
------------------------------------------------------- */

// 01. Executive Talent Mapping
function TalentMappingLandscape() {
  return (
    <>
      <Ring className="-right-16 top-[6%] h-[360px] w-[360px]" />
      <Ring className="right-[6%] top-[18%] h-[255px] w-[255px]" gold />
      <Ring className="right-[21%] top-[33%] h-[125px] w-[125px]" />

      <svg
        className="absolute right-[3%] top-[9%] h-[72%] w-[72%] opacity-85 transition-transform duration-1000 group-hover:scale-105"
        viewBox="0 0 480 320"
        fill="none"
      >
        <path
          d="M240 48 L115 118 L55 230 M240 48 L365 118 L425 230 M115 118 L240 185 L365 118 M240 185 L155 275 M240 185 L325 275"
          stroke="white"
          strokeOpacity=".22"
        />
        <path
          d="M240 48 L240 185 M115 118 L365 118 M240 185 L325 275"
          stroke="#F4A019"
          strokeOpacity=".55"
          strokeWidth="1.3"
        />
        {[
          [240, 48],
          [115, 118],
          [365, 118],
          [55, 230],
          [425, 230],
          [240, 185],
          [155, 275],
          [325, 275],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={i === 5 ? 15 : 9}
              fill={i === 5 ? "#F4A019" : "#10243A"}
              fillOpacity={i === 5 ? ".15" : "1"}
              stroke={i === 5 ? "#F4A019" : "white"}
              strokeOpacity={i === 5 ? ".8" : ".35"}
            />
            <circle
              cx={cx}
              cy={cy}
              r="3"
              fill={i === 5 ? "#F4A019" : "#A5B3C3"}
            />
          </g>
        ))}
        <circle cx="240" cy="48" r="20" stroke="#F4A019" strokeOpacity=".25" />
      </svg>

      <div className="absolute right-[13%] top-[18%] flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F4A019]" />
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
          Executive / Network
        </span>
      </div>

      <Node gold className="right-[31%] top-[39%]" />
      <ArchitectureGrid />
    </>
  );
}

// 02. Leadership Benchmarking
function TalentBenchmarking() {
  return (
    <>
      <Ring className="-right-12 top-[8%] h-[350px] w-[350px]" />
      <Ring className="right-[8%] top-[20%] h-[245px] w-[245px]" gold />

      <svg
        className="absolute right-[4%] top-[10%] h-[73%] w-[72%] opacity-85 transition-transform duration-1000 group-hover:translate-y-[-5px]"
        viewBox="0 0 460 320"
        fill="none"
      >
        <path
          d="M35 250 H430 M35 185 H430 M35 120 H430 M35 55 H430"
          stroke="white"
          strokeOpacity=".12"
          strokeDasharray="4 7"
        />
        <path
          d="M75 250 V145 H125 V250 M155 250 V95 H205 V250 M235 250 V165 H285 V250"
          stroke="white"
          strokeOpacity=".35"
          strokeWidth="1.2"
          fill="white"
          fillOpacity=".025"
        />
        <path
          d="M315 250 V75 H365 V250 M395 250 V115 H445 V250"
          stroke="#F4A019"
          strokeOpacity=".65"
          strokeWidth="1.3"
          fill="#F4A019"
          fillOpacity=".07"
        />
        <path
          d="M100 145 H340 M180 95 H340 M260 165 H340"
          stroke="#F4A019"
          strokeOpacity=".45"
          strokeDasharray="3 5"
        />
        <circle cx="100" cy="145" r="5" fill="white" fillOpacity=".65" />
        <circle cx="180" cy="95" r="5" fill="#F4A019" />
        <circle cx="260" cy="165" r="5" fill="white" fillOpacity=".65" />
        <circle cx="340" cy="75" r="6" fill="#F4A019" />
      </svg>

      <div className="absolute right-[12%] top-[19%] flex items-center gap-2">
        <span className="h-px w-5 bg-[#F4A019]" />
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
          Internal / External
        </span>
      </div>

      <ArchitectureGrid size="40px" />
    </>
  );
}

// 03. Market & Competitive Intelligence
function TalentMarketIntelligence() {
  return (
    <>
      <Ring className="-right-12 top-[7%] h-[350px] w-[350px]" />
      <Ring className="right-[7%] top-[20%] h-[250px] w-[250px]" gold />
      <Ring className="right-[22%] top-[35%] h-[120px] w-[120px]" />

      <svg
        className="absolute right-[3%] top-[10%] h-[72%] w-[72%] opacity-85 transition-transform duration-1000 group-hover:rotate-2"
        viewBox="0 0 480 320"
        fill="none"
      >
        <path
          d="M65 215 L150 105 L255 155 L365 65 L430 190"
          stroke="white"
          strokeOpacity=".22"
        />
        <path
          d="M65 215 L150 105 L255 155 L365 65"
          stroke="#F4A019"
          strokeOpacity=".6"
          strokeWidth="1.4"
        />
        <path
          d="M150 105 L170 260 L300 245 L430 190 M255 155 L300 245 M365 65 L390 145"
          stroke="white"
          strokeOpacity=".2"
        />
        {[
          [65, 215],
          [150, 105],
          [255, 155],
          [365, 65],
          [430, 190],
          [170, 260],
          [300, 245],
          [390, 145],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={i === 2 ? 8 : 5}
              fill={i === 2 || i === 3 ? "#F4A019" : "#10243A"}
              stroke={i === 2 || i === 3 ? "#F4A019" : "white"}
              strokeOpacity=".65"
            />
            {i === 2 && (
              <circle
                cx={cx}
                cy={cy}
                r="17"
                stroke="#F4A019"
                strokeOpacity=".3"
              />
            )}
          </g>
        ))}
        <path
          d="M255 155 L330 110 L390 145"
          stroke="#F4A019"
          strokeOpacity=".35"
          strokeDasharray="3 5"
        />
      </svg>

      <div className="absolute right-[12%] top-[17%] flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F4A019]" />
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
          Market / Intelligence
        </span>
      </div>

      <Node gold className="right-[37%] top-[42%]" />
      <ArchitectureGrid size="42px" />
    </>
  );
}

// 04. Succession & Pipeline Development
function TalentPipeline() {
  return (
    <>
      <Ring className="-right-16 top-[8%] h-[350px] w-[350px]" />
      <Ring className="right-[5%] top-[20%] h-[250px] w-[250px]" gold />

      <svg
        className="absolute right-[3%] top-[10%] h-[73%] w-[75%] opacity-85 transition-transform duration-1000 group-hover:translate-x-2"
        viewBox="0 0 500 320"
        fill="none"
      >
        <path
          d="M45 240 H130 L190 175 H275 L340 105 H455"
          stroke="white"
          strokeOpacity=".22"
          strokeWidth="1.5"
        />
        <path
          d="M45 260 H130 L190 195 H275 L340 125 H455"
          stroke="#F4A019"
          strokeOpacity=".65"
          strokeWidth="1.5"
        />
        <path
          d="M130 240 V260 M190 175 V195 M275 175 V195 M340 105 V125"
          stroke="white"
          strokeOpacity=".2"
        />
        {[
          [45, 250],
          [130, 250],
          [190, 185],
          [275, 185],
          [340, 115],
          [455, 115],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={i === 4 ? 11 : 6}
              fill={i === 4 ? "#F4A019" : "#10243A"}
              fillOpacity={i === 4 ? ".2" : "1"}
              stroke={i === 4 ? "#F4A019" : "white"}
              strokeOpacity={i === 4 ? ".85" : ".4"}
            />
            <circle cx={cx} cy={cy} r="2.5" fill="#F4A019" />
          </g>
        ))}
        <circle cx="340" cy="115" r="23" stroke="#F4A019" strokeOpacity=".3" />
        <path
          d="M340 77 V55 M302 115 H280 M378 115 H400"
          stroke="#F4A019"
          strokeOpacity=".3"
        />
      </svg>

      <div className="absolute right-[12%] top-[18%] flex items-center gap-2">
        <span className="h-px w-5 bg-[#F4A019]" />
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
          Pipeline / Readiness
        </span>
      </div>

      <ArchitectureGrid />
    </>
  );
}

/* -------------------------------------------------------
   VISUAL REGISTRY
   Each card receives its own visual key from its data.
------------------------------------------------------- */

const visualRegistry = {
  // Executive Search
  "executive-growth": ExecutiveGrowth,
  "executive-scarcity": ExecutiveScarcity,
  "executive-complexity": ExecutiveComplexity,
  "executive-stakes": ExecutiveStakes,

  // Talent Advisory
  "advisory-alignment": AdvisoryAlignment,
  "advisory-readiness": AdvisoryReadiness,
  "advisory-attraction": AdvisoryAttraction,
  "advisory-retention": AdvisoryRetention,

  // Succession Planning
  "succession-readiness": SuccessionReadiness,
  "succession-dependency": SuccessionDependency,
  "succession-visibility": SuccessionVisibility,
  "succession-transition": SuccessionTransition,

  // Executive Talent Mapping & Benchmarking
  "mapping-landscape": TalentMappingLandscape,
  "mapping-benchmarking": TalentBenchmarking,
  "mapping-intelligence": TalentMarketIntelligence,
  "mapping-pipeline": TalentPipeline,

  // Executive & Leadership Career Coaching
  "coaching-effectiveness": CoachingEffectiveness,
  "coaching-direction": CoachingDirection,
  "coaching-change": CoachingChange,
  "coaching-potential": CoachingPotential,
};

function ChallengeVisual({ visual }) {
  const Artwork = visualRegistry[visual];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Common visual atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10243A] via-[#071727] to-[#020B15]" />

      <div className="absolute -right-20 -top-32 h-[380px] w-[380px] rounded-full bg-[#F4A019]/[0.035] blur-[100px] transition-transform duration-1000 group-hover:scale-125" />

      {/* Card-specific artwork */}
      {Artwork ? (
        <Artwork />
      ) : (
        <>
          <Ring className="-right-12 top-[8%] h-[340px] w-[340px]" />
          <Ring className="right-[8%] top-[20%] h-[230px] w-[230px]" gold />
          <Node gold className="right-[27%] top-[32%]" />
          <ArchitectureGrid />
        </>
      )}

      {/* Shared atmospheric finish */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03101E]/10 to-[#03101E]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03101E]/30 via-transparent to-[#03101E]/20" />
    </div>
  );
}

/* -------------------------------------------------------
   MAIN SERVICE CHALLENGE COMPONENT
------------------------------------------------------- */

export default function ServiceChallenge({
  sectionNumber,
  eyebrow,
  title,
  highlight,
  description,
  cards = [],
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8F7F3] py-16 text-[#07172B] sm:py-20 lg:py-24">
      {/* Background detailing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[240px] -top-[250px] -z-10 h-[720px] w-[720px] rounded-full border border-[#D99B27]/15"
      >
        <div className="absolute inset-[15%] rounded-full border border-[#D99B27]/15" />
        <div className="absolute inset-[30%] rounded-full border border-[#D99B27]/10" />
      </div>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Editorial introduction */}
        <div className="relative mb-12 lg:mb-[68px]">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-[2px] w-10" style={{ backgroundColor: GOLD }} />

            <span
              className="font-heading text-[16px] font-medium"
              style={{ color: GOLD }}
            >
              {sectionNumber}
            </span>

            <span className="h-9 w-px bg-[#D99B27]/30" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#788194] sm:text-[13px]">
              {eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <h2 className="max-w-[780px] font-heading text-[39px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[64px]">
              {title}
              <span className="mt-1 block" style={{ color: GOLD }}>
                {highlight}
              </span>
            </h2>

            {description && (
              <div className="relative max-w-[480px] lg:justify-self-end lg:pb-2">
                <div className="absolute -left-5 top-1 hidden h-[calc(100%-8px)] w-px bg-[#D99B27]/40 lg:block" />

                <span
                  className="mb-5 block h-[3px] w-12 lg:hidden"
                  style={{ backgroundColor: GOLD }}
                />

                <p className="text-[15px] leading-[1.9] text-[#667085] sm:text-[16px] lg:text-[17px]">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Premium challenge collection */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {cards.map((card, index) => (
            <article
              key={card.number || index}
              className={[
                "group relative isolate min-h-[420px] overflow-hidden rounded-[5px] bg-[#03101E]",
                "shadow-[0_15px_45px_rgba(3,16,30,0.09)]",
                "transition-all duration-500 hover:shadow-[0_22px_55px_rgba(3,16,30,0.17)]",
                "sm:min-h-[450px] lg:min-h-[440px]",
                cardLayouts[index] || "lg:col-span-6",
              ].join(" ")}
            >
              {/* Card-specific geometry */}
              <ChallengeVisual visual={card.visual} />

              {/* Fine border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 border border-white/15 transition-all duration-500 group-hover:inset-4 group-hover:border-[#F4A019]/45"
              />

              {/* Top metadata */}
              <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-9 sm:right-9 sm:top-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75">
                  {eyebrow || "The Challenge"}
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-px w-5 bg-[#F4A019]" />
                  <span className="text-[11px] tracking-[0.16em] text-white/65">
                    {card.number}
                  </span>
                </span>
              </div>

              {/* Main content */}
              <div className="absolute inset-x-0 bottom-0 px-7 pb-9 pt-24 sm:px-9 sm:pb-10">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[125px] right-7 font-heading text-[120px] font-light leading-none tracking-[-0.08em] text-white/[0.12] sm:right-9 sm:text-[150px]"
                >
                  {card.number}
                </span>

                <div className="relative z-10 max-w-[520px]">
                  <span
                    className="mb-5 block h-[2px] w-12 transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: GOLD }}
                  />

                  <h3 className="max-w-[450px] font-heading text-[25px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[32px]">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-[450px] text-[14px] leading-[1.85] text-white/75 sm:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom gold edge */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 group-hover:w-full"
                style={{ backgroundColor: GOLD }}
              />
            </article>
          ))}
        </div>

        {/* Section footer */}
        <div className="mt-10 flex items-center justify-between border-t border-[#D99B27]/20 pt-6 sm:mt-14 sm:pt-7">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8991A0] sm:text-[11px]">
            Understanding the challenges
          </span>

          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D99B27]/50" />
            <span
              className="h-2 w-2 rotate-45"
              style={{ backgroundColor: GOLD }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
