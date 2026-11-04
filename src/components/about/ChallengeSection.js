import Image from "next/image";

const challenges = [
  {
    number: "01",
    title: "Misaligned Leadership Expectations",
    description:
      "When stakeholders lack a unified vision for the role, the new leader faces conflicting priorities from day one, making success nearly impossible.",
    image: "/images/executive-challenges.png",
    icon: "leadership",
  },
  {
    number: "02",
    title: "Unprepared Organizational Infrastructure",
    description:
      "Without the necessary systems, support teams, and defined role structures in place, executive talent cannot execute effectively.",
    image: "/images/organizational-infrastructure.png",
    icon: "infrastructure",
  },
  {
    number: "03",
    title: "Cultural Gaps that Inhibit Integration",
    description:
      "Hidden cultural barriers and resistance to change often prevent high-impact leaders from navigating the organization successfully.",
    image: "/images/leadership-culture.png",
    icon: "culture",
  },
];

function ChallengeIcon({ type }) {
  if (type === "leadership") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-7 w-7 sm:h-8 sm:w-8"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="18" r="4" />
        <circle cx="38" cy="18" r="4" />
        <path d="M14 36v-4c0-6 4-10 10-10s10 4 10 10v4H14Z" />
        <path d="M3 35v-3c0-5 3-8 8-8 2 0 4 1 5 2M45 35v-3c0-5-3-8-8-8-2 0-4 1-5 2" />
      </svg>
    );
  }

  if (type === "infrastructure") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-7 w-7 sm:h-8 sm:w-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="19" y="4" width="10" height="9" rx="1" />
        <rect x="4" y="34" width="10" height="9" rx="1" />
        <rect x="19" y="34" width="10" height="9" rx="1" />
        <rect x="34" y="34" width="10" height="9" rx="1" />
        <path d="M24 13v10M9 34v-6h30v6M24 23v5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className="h-7 w-7 sm:h-8 sm:w-8"
    >
      <circle cx="24" cy="13" r="7" />
      <circle cx="10" cy="18" r="5" />
      <circle cx="38" cy="18" r="5" />
      <path d="M11 39c0-9 5-15 13-15s13 6 13 15H11Z" />
      <path d="M1 37c0-7 3-11 9-11 3 0 5 1 7 3-3 3-4 6-4 10H1v-2ZM47 37c0-7-3-11-9-11-3 0-5 1-7 3 3 3 4 6 4 10h12v-2Z" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
    >
      <path d="M8 54h49" />
      <path d="M14 48V37h9v11M29 48V29h9v19M44 48V18h9v30" />
      <path d="m12 29 13-8 11 2 17-15" />
      <path d="M43 8h10v10" />
    </svg>
  );
}

export default function ChallengeSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FCFBF9] px-5 py-14 sm:px-8 sm:py-16 lg:px-[7%] lg:py-20">
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[330px] top-[120px] h-[500px] w-[500px] rounded-full border border-[#DDA32F]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[285px] top-[165px] h-[410px] w-[410px] rounded-full border border-[#DDA32F]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[300px] top-[-160px] h-[650px] w-[650px] rounded-full border border-[#DDA32F]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] top-[-110px] h-[550px] w-[550px] rounded-full border border-[#DDA32F]/15"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-9 flex flex-col justify-between gap-6 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-[1000px]">
            <div className="mb-4 flex items-center gap-4 sm:mb-5 sm:gap-5">
              <span className="h-[4px] w-[42px] shrink-0 rounded-full bg-[#DDA32F] sm:h-[5px] sm:w-[54px]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C98B19] sm:text-[11px] lg:text-[12px]">
                The Challenge
              </span>
            </div>

            <h2 className="font-serif text-[36px] font-bold leading-[1.1] tracking-[-1px] text-[#091B32] sm:text-[46px] sm:tracking-[-1.5px] lg:text-[54px]">
              Why Most Executive Hires{" "}
              <span className="text-[#D99B28]">Struggle.</span>
            </h2>

            <p className="mt-4 max-w-[850px] text-[14px] leading-[1.75] text-[#27364B] sm:text-[15px] lg:text-[16px]">
              Even the most qualified candidates can fail if the environment
              isn&apos;t primed for their success.
            </p>
          </div>

          <div className="max-w-[390px] border-l-2 border-[#DDA32F] py-1 pl-5 text-[13px] leading-[1.75] text-[#858B98] sm:pl-6 sm:text-[14px] lg:mb-1">
            Successful executive integration depends on more than individual
            capability. Organizations must create the conditions that allow new
            leaders to perform, align, and contribute effectively.
          </div>
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <article
              key={challenge.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-[13px] border border-[#E9E8E5] bg-white shadow-[0_5px_18px_rgba(9,27,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(9,27,50,0.12)]"
            >
              {/* Card image */}
              <div className="relative h-[180px] overflow-hidden sm:h-[200px] lg:h-[210px]">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/30 to-transparent" />
              </div>

              {/* Icon overlapping image and content */}
              <div className="absolute left-5 top-[150px] z-10 flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-[#F0A018] bg-[#071A30] text-[#F0A018] shadow-lg sm:left-7 sm:top-[168px] sm:h-[74px] sm:w-[74px]">
                <ChallengeIcon type={challenge.icon} />
              </div>

              {/* Card content */}
              <div className="relative flex flex-1 flex-col px-5 pb-6 pt-12 sm:px-7 sm:pb-7 sm:pt-12">
                {/* Number */}
                <span className="absolute right-5 top-5 font-serif text-[32px] font-bold leading-none text-[#E7E8EB] sm:right-7 sm:text-[38px]">
                  {challenge.number}
                </span>

                {/* Title */}
                <h3 className="relative z-[1] max-w-[88%] font-serif text-[19px] font-bold leading-[1.25] text-[#091B32] sm:text-[21px] lg:text-[22px]">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[14px] leading-[1.75] text-[#596273] sm:mt-4 sm:text-[15px] lg:text-[15px]">
                  {challenge.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement banner */}
        <div className="relative mt-8 overflow-hidden rounded-[12px] bg-[#04152A] px-6 py-7 text-white shadow-[0_8px_24px_rgba(3,16,30,0.12)] sm:mt-9 sm:px-9 sm:py-8 lg:mt-8 lg:px-12 lg:py-8">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -bottom-[130px] right-[-25px] h-[270px] w-[270px] rounded-full border border-[#DDA32F]/25" />
          <div className="pointer-events-none absolute -bottom-[105px] right-0 h-[220px] w-[220px] rounded-full border border-[#DDA32F]/20" />
          <div className="pointer-events-none absolute -bottom-[80px] right-[25px] h-[170px] w-[170px] rounded-full border border-[#DDA32F]/15" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0">
            {/* Icon */}
            <div className="flex shrink-0 items-center justify-center lg:w-[130px] lg:border-r lg:border-white/20 lg:pr-8 xl:w-[145px] xl:pr-9">
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-[#F0A018] text-[#F0A018] sm:h-[86px] sm:w-[86px] lg:h-[90px] lg:w-[90px]">
                <ImpactIcon />
              </div>
            </div>

            {/* Main statement */}
            <div className="lg:flex-1 lg:px-9 xl:px-12">
              <p className="max-w-[760px] font-serif text-[24px] leading-[1.35] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
                The right leader needs the right environment to deliver the{" "}
                <span className="font-bold text-[#F0A018]">right results.</span>
              </p>
            </div>

            {/* Supporting message */}
            <div className="border-t border-white/20 pt-5 sm:pt-6 lg:w-[300px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:w-[340px] xl:pl-10">
              <span className="mb-3 block h-[4px] w-[45px] rounded-full bg-[#F0A018] sm:mb-4 sm:w-[50px]" />

              <p className="text-[10px] font-medium uppercase leading-[1.9] tracking-[0.15em] text-white/70 sm:text-[11px] lg:text-[12px]">
                Organizational Readiness
                <br />
                Creates Executive Success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
