const GOLD = "#E2A32F";

const pillars = [
  {
    number: "01",
    title: "Leadership Alignment & Clarity",
    description:
      "Ensures stakeholders are unified in vision, goals, and expectations for new talent.",
    image: "/images/leadership-alignment.png",
    icon: "users",
  },
  {
    number: "02",
    title: "Organizational Infrastructure",
    description:
      "Assesses systems, reporting structures, and role definitions to support a new hire.",
    image: "/images/organizational-infrastructure.png",
    icon: "structure",
  },
  {
    number: "03",
    title: "Culture & Leadership Environment",
    description:
      "Examines internal culture and management style for talent success and fit.",
    image: "/images/culture-leadership-environment.png",
    icon: "users",
  },
  {
    number: "04",
    title: "Talent Value Proposition",
    description:
      "Analyzes market competitiveness and the organization's ability to attract top talent.",
    image: "/images/talent-value-proposition.png",
    icon: "chart",
  },
  {
    number: "05",
    title: "Adaptability to Diverse Talent",
    description:
      "Measures flexibility to integrate diverse backgrounds and professional approaches.",
    image: "/images/adaptability-diverse-talent.png",
    icon: "globe",
  },
];

function PillarIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-8 w-8",
  };

  if (type === "users") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <circle cx="24" cy="13" r="5" />
        <circle cx="10" cy="18" r="4" />
        <circle cx="38" cy="18" r="4" />
        <path d="M14 37c0-7 4-12 10-12s10 5 10 12v2H14z" />
        <path d="M3 37c0-6 3-10 8-10 2 0 4 1 5 2" />
        <path d="M45 37c0-6-3-10-8-10-2 0-4 1-5 2" />
      </svg>
    );
  }

  if (type === "structure") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <rect x="19" y="4" width="10" height="9" rx="1" />
        <rect x="4" y="34" width="10" height="9" rx="1" />
        <rect x="19" y="34" width="10" height="9" rx="1" />
        <rect x="34" y="34" width="10" height="9" rx="1" />
        <path d="M24 13v9M9 34v-6h30v6M24 22v6" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <path d="M5 42h39" />
        <path d="M10 37V28h7v9M22 37V20h7v17M34 37V12h7v25" />
        <path d="M8 20l11-8 9 2L41 3" />
        <path d="M33 3h8v8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" {...common}>
      <circle cx="24" cy="24" r="19" />
      <path d="M5 24h38M24 5c6 6 9 12 9 19s-3 13-9 19M24 5c-6 6-9 12-9 19s3 13 9 19M8 14h32M8 34h32" />
    </svg>
  );
}

function PillarCard({ pillar }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#EAEAEA] bg-white shadow-[0_5px_18px_rgba(3,16,30,0.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(3,16,30,0.10)]">
      {/* Card image */}
      <div className="relative h-[145px] overflow-hidden sm:h-[155px] lg:h-[135px] xl:h-[150px]">
        <img
          src={pillar.image}
          alt={pillar.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/25 to-transparent" />
      </div>

      {/* Floating icon */}
      <div className="relative z-10 -mt-9 ml-5 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-2 border-[#E2A32F] bg-[#06182F] text-[#F4A51C] shadow-md">
        <PillarIcon type={pillar.icon} />
      </div>

      {/* Card content */}
      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-2">
        <span className="absolute right-5 top-1 font-serif text-[34px] font-bold leading-none text-[#E8E8EB]">
          {pillar.number}
        </span>

        <h3 className="relative z-10 min-h-[52px] max-w-[90%] pr-1 font-serif text-[19px] font-bold leading-[1.2] text-[#091B32]">
          {pillar.title}
        </h3>

        <span className="mb-3 mt-3 block h-[3px] w-8 rounded-full bg-[#E2A32F]" />

        <p className="text-[14px] leading-[1.65] text-[#505663]">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}

export default function TalentReadinessSection() {
  return (
    <section
      id="methodology"
      className="relative isolate overflow-hidden bg-[#FCFBF9] px-5 py-14 sm:px-8 sm:py-16 lg:px-[5%] lg:py-[72px]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[270px] top-[60px] -z-10 h-[420px] w-[420px] rounded-full border border-[#E2A32F]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[220px] top-[110px] -z-10 h-[320px] w-[320px] rounded-full border border-[#E2A32F]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[300px] top-[150px] -z-10 h-[550px] w-[550px] rounded-full border border-[#E2A32F]/15"
      />

      <div className="mx-auto max-w-[1600px]">
        {/* Section introduction */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[4px] w-12 rounded-full bg-[#DDA32F]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C98B19] sm:text-[14px]">
                Our Methodology
              </span>
            </div>

            <h2 className="font-serif text-[36px] font-bold leading-[1.08] tracking-[-1px] text-[#091B32] sm:text-[44px] lg:text-[48px] xl:text-[54px]">
              The Talent Readiness
              <span className="block text-[#DCA02E]">
                Assessment<sup className="text-[0.48em]">TM</sup> Framework.
              </span>
            </h2>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#89909E] sm:text-[13px] sm:tracking-[0.2em]">
              Five Critical Pillars of Organizational Readiness
            </p>

            <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-[#626B7A] sm:text-[16px]">
              The Talent Readiness Assessment framework focuses on the
              organizational conditions that influence executive hiring success.
              It examines five critical areas to understand whether an
              organization is positioned to attract, integrate, and support
              high-impact talent.
            </p>
          </div>

          {/* Main banner image */}
          <div className="relative min-h-[190px] overflow-hidden rounded-xl sm:min-h-[230px] lg:min-h-[250px]">
            <img
              src="/images/talent-readiness-banner.png"
              alt="Executive boardroom prepared for strategic leadership discussions"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/20 to-transparent" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -left-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[#E2A32F]/40" />
            <div className="pointer-events-none absolute -left-1 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-[#E2A32F]/30" />
          </div>
        </div>

        {/* Five pillar cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.number} pillar={pillar} />
          ))}
        </div>

        {/* Bottom statement banner */}
        <div className="relative mt-6 overflow-hidden rounded-xl bg-[#04162B] px-6 py-7 text-white shadow-[0_12px_30px_rgba(3,16,30,0.12)] sm:px-9 sm:py-8 lg:px-12">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -bottom-[125px] right-[-20px] h-[260px] w-[260px] rounded-full border border-[#DCA02E]/20" />
          <div className="pointer-events-none absolute -bottom-[95px] right-[5px] h-[210px] w-[210px] rounded-full border border-[#DCA02E]/15" />
          <div className="pointer-events-none absolute -bottom-[65px] right-[35px] h-[150px] w-[150px] rounded-full border border-[#DCA02E]/10" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[120px_1fr_330px] lg:gap-8">
            {/* Statement icon */}
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-[#E2A32F] text-[#E2A32F]">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-11 w-11"
              >
                <rect x="10" y="8" width="28" height="35" rx="2" />
                <path d="M18 8V4h12v4M16 19l3 3 5-6M27 20h6M16 30l3 3 5-6M27 31h6" />
              </svg>
            </div>

            {/* Main statement */}
            <div className="border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-serif text-[25px] leading-[1.35] sm:text-[29px] lg:text-[30px]">
                A more prepared organization attracts stronger talent and
                achieves{" "}
                <span className="font-bold text-[#E2A32F]">
                  better results.
                </span>
              </p>
            </div>

            {/* Supporting label */}
            <div className="border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <span className="mb-4 block h-[4px] w-12 rounded-full bg-[#E2A32F]" />
              <p className="text-[11px] font-medium uppercase leading-[1.9] tracking-[0.14em] text-white/75 sm:text-[12px]">
                Organizational Readiness
                <br />
                Leads to Lasting Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
