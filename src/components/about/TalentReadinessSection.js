import Image from "next/image";

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
    className: "h-7 w-7 sm:h-8 sm:w-8",
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
    <article className="group relative flex h-full w-[84vw] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-[#EAEAEA] bg-white shadow-[0_5px_18px_rgba(3,16,30,0.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(3,16,30,0.10)] sm:w-auto sm:max-w-none sm:shrink">
      {/* Card image */}
      <div className="relative h-[175px] overflow-hidden sm:h-[180px] xl:h-[150px] 2xl:h-[165px]">
        <Image
          src={pillar.image}
          alt={pillar.title}
          fill
          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/25 to-transparent" />
      </div>

      {/* Floating icon */}
      <div className="relative z-10 -mt-8 ml-5 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border-2 border-[#E2A32F] bg-[#06182F] text-[#F4A51C] shadow-md sm:ml-6 sm:h-[66px] sm:w-[66px]">
        <PillarIcon type={pillar.icon} />
      </div>

      {/* Card content */}
      <div className="relative flex flex-1 flex-col px-5 pb-6 pt-3 sm:px-6">
        {/* Number */}
        <span className="absolute right-5 top-2 font-serif text-[31px] font-bold leading-none text-[#E8E8EB] sm:right-6 sm:text-[34px]">
          {pillar.number}
        </span>

        {/* Title */}
        <h3 className="relative z-10 min-h-[50px] max-w-[88%] pr-1 font-serif text-[18px] font-bold leading-[1.25] text-[#091B32] sm:text-[19px]">
          {pillar.title}
        </h3>

        <span className="mb-3 mt-3 block h-[3px] w-8 shrink-0 rounded-full bg-[#E2A32F]" />

        {/* Description */}
        <p className="text-[13px] leading-[1.7] text-[#505663] sm:text-[14px]">
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
      className="relative isolate overflow-hidden bg-[#FCFBF9] px-5 py-14 sm:px-8 sm:py-16 lg:px-[5%] lg:py-20"
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

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section introduction */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-12">
          {/* Introduction content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[4px] w-[46px] shrink-0 rounded-full bg-[#DDA32F] sm:w-12" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C98B19] sm:text-[11px] lg:text-[12px]">
                Our Methodology
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[36px] font-bold leading-[1.1] tracking-[-1px] text-[#091B32] sm:text-[44px] sm:tracking-[-1.3px] lg:text-[48px] xl:text-[54px]">
              The Talent Readiness
              <span className="block text-[#DCA02E]">
                Assessment<sup className="text-[0.48em]">TM</sup> Framework.
              </span>
            </h2>

            {/* Subheading */}
            <p className="mt-4 text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.14em] text-[#89909E] sm:text-[11px] sm:tracking-[0.18em] lg:text-[12px]">
              Five Critical Pillars of Organizational Readiness
            </p>

            {/* Description */}
            <p className="mt-5 max-w-[760px] text-[14px] leading-[1.75] text-[#626B7A] sm:text-[15px] lg:text-[16px]">
              The Talent Readiness Assessment framework focuses on the
              organizational conditions that influence executive hiring success.
              It examines five critical areas to understand whether an
              organization is positioned to attract, integrate, and support
              high-impact talent.
            </p>
          </div>

          {/* Main banner image */}
          <div className="relative min-h-[190px] overflow-hidden rounded-xl sm:min-h-[230px] lg:min-h-[250px]">
            <Image
              src="/images/talent-readiness-banner.png"
              alt="Executive boardroom prepared for strategic leadership discussions"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/20 to-transparent" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -left-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[#E2A32F]/40" />

            <div className="pointer-events-none absolute -left-1 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-[#E2A32F]/30" />
          </div>
        </div>

        {/* Five pillar cards */}
        <div className="mt-10 sm:mt-10 lg:mt-10">
          {/* Mobile carousel heading */}
          <div className="mb-4 flex items-center justify-between sm:hidden">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#091B32]">
              Explore the Five Pillars
            </span>

            <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#89909E]">
              Swipe to explore
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10h13M11 5l5 5-5 5" />
              </svg>
            </span>
          </div>

          {/* Mobile horizontal carousel, tablet and desktop grid */}
          <div
            aria-label="Five pillars of the Talent Readiness Assessment"
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 2xl:grid-cols-5"
          >
            {pillars.map((pillar) => (
              <PillarCard key={pillar.number} pillar={pillar} />
            ))}
          </div>
        </div>

        {/* Bottom statement banner */}
        <div className="relative mt-8 overflow-hidden rounded-xl bg-[#04162B] px-6 py-7 text-white shadow-[0_12px_30px_rgba(3,16,30,0.12)] sm:mt-9 sm:px-9 sm:py-8 lg:mt-10 lg:px-12">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -bottom-[125px] right-[-20px] h-[260px] w-[260px] rounded-full border border-[#DCA02E]/20" />

          <div className="pointer-events-none absolute -bottom-[95px] right-[5px] h-[210px] w-[210px] rounded-full border border-[#DCA02E]/15" />

          <div className="pointer-events-none absolute -bottom-[65px] right-[35px] h-[150px] w-[150px] rounded-full border border-[#DCA02E]/10" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[100px_1fr_280px] lg:gap-7 xl:grid-cols-[120px_1fr_330px] xl:gap-8">
            {/* Statement icon */}
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-[#E2A32F] text-[#E2A32F] sm:h-[84px] sm:w-[84px] lg:h-[88px] lg:w-[88px]">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
              >
                <rect x="10" y="8" width="28" height="35" rx="2" />
                <path d="M18 8V4h12v4M16 19l3 3 5-6M27 20h6M16 30l3 3 5-6M27 31h6" />
              </svg>
            </div>

            {/* Main statement */}
            <div className="border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0 xl:pl-8">
              <p className="font-serif text-[23px] leading-[1.4] sm:text-[27px] lg:text-[28px] xl:text-[30px]">
                A more prepared organization attracts stronger talent and
                achieves{" "}
                <span className="font-bold text-[#E2A32F]">
                  better results.
                </span>
              </p>
            </div>

            {/* Supporting label */}
            <div className="border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0 xl:pl-8">
              <span className="mb-3 block h-[4px] w-12 rounded-full bg-[#E2A32F] sm:mb-4" />

              <p className="text-[10px] font-medium uppercase leading-[1.9] tracking-[0.14em] text-white/75 sm:text-[11px] lg:text-[12px]">
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
