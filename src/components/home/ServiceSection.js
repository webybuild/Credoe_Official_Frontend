import Image from "next/image";
import Link from "next/link";

const coreSolutions = [
  {
    title: "Executive Search",
    category: "Leadership Recruitment",
    href: "/services/executive-search",
    description:
      "We identify and secure transformational leaders who align with your vision and accelerate success.",
    image: "/images/cardOneImg.png",
    alt: "Executive chess strategy",
    number: "01",
  },
  {
    title: "Talent Advisory",
    category: "Talent Strategy",
    href: "/services/talent-advisory",
    description:
      "Custom strategies to attract, engage, and retain top talent across every level of your organization.",
    image: "/images/cardTwoImg.png",
    alt: "Business professionals collaborating",
    number: "02",
  },
  {
    title: "Succession Planning",
    category: "Leadership Continuity",
    href: "/services/succession-planning",
    description:
      "Build strong leadership pipelines and future-ready teams to ensure business continuity.",
    image: "/images/cardThreeImg.png",
    alt: "Modern bridge representing future growth",
    number: "03",
  },
  {
    title: "Executive and Leadership Career Coaching",
    category: "Leadership Development",
    href: "/services/leadership-coaching",
    description:
      "Empower leaders to unlock potential, enhance performance, and lead with confidence.",
    image: "/images/cardFourImg.png",
    alt: "Executive and Leadership Career Coaching",
    number: "04",
  },
  {
    title: "Executive Talent Mapping & Benchmarking",
    category: "Market Intelligence",
    href: "/services/executive-talent-mapping",
    description:
      "Gain visibility into the executive talent market, benchmark leadership capabilities, and build stronger future leadership pipelines.",
    image: "/images/cardFiveImg.png",
    alt: "Executive talent mapping and leadership benchmarking",
    number: "05",
  },
];

const emergingSolutions = [
  {
    title: "Interview Prep Platform",
    description:
      "A premium platform for candidates to access expert-led interview preparation and land their next leadership role.",
    icon: "/icons/student-boy-icon.svg",
  },
  {
    title: "Organizational Assessment Tool",
    description:
      "Evaluate your organization's readiness to attract and retain the level of talent you aspire to achieve.",
    icon: "/icons/surveys-icon.svg",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 12H32M22 2L32 12L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Gold icon with explicit dimensions
function GoldIcon({ src, size = 42 }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="object-contain"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        filter:
          "brightness(0) saturate(100%) invert(63%) sepia(99%) saturate(1623%) hue-rotate(2deg) brightness(103%) contrast(103%)",
      }}
    />
  );
}

/* =========================================================
   CORE SOLUTION CARD
   Refined image-and-content layout
========================================================= */

function SolutionCard({ solution }) {
  return (
    <Link
      href={solution.href}
      aria-label={`Learn more about ${solution.title}`}
      className="group relative flex h-full min-h-[320px] min-w-0 flex-col overflow-hidden rounded-xl border border-[#D9D5CC] bg-[#071426] shadow-[0_12px_35px_rgba(6,20,38,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D99A26]/60 hover:shadow-[0_22px_50px_rgba(6,20,38,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-4 sm:min-h-[330px] lg:min-h-[320px]"
    >
      {/* Image area */}
      <div className="relative h-[165px] w-full shrink-0 overflow-hidden sm:h-[180px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[43%]">
        <Image
          src={solution.image}
          alt={solution.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 43vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#071426] lg:via-[#071426]/35 lg:to-transparent" />

        {/* Subtle image shading */}
        <div className="absolute inset-0 bg-[#071426]/[0.04] transition-colors duration-500 group-hover:bg-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col p-6 sm:p-7 lg:w-[76%] lg:p-7 xl:p-8">
        {/* Category and mobile number */}
        <div className="flex items-start justify-between gap-3">
          <span className="pt-1 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#F5A623]">
            {solution.category}
          </span>

          <span className="shrink-0 font-heading text-[32px] font-medium leading-none text-white/75 lg:hidden">
            {solution.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 max-w-[420px] font-heading text-[22px] font-medium leading-[1.2] text-white transition-colors duration-300 group-hover:text-[#F5B94F] sm:text-[24px] lg:mt-5 xl:text-[26px]">
          {solution.title}
        </h3>

        {/* Gold accent */}
        <span className="mt-4 h-px w-10 bg-[#F5A623] transition-all duration-500 group-hover:w-16" />

        {/* Description */}
        <p className="mt-4 max-w-[480px] text-[12px] leading-[1.85] tracking-[0.01em] text-white/65 sm:text-[13px]">
          {solution.description}
        </p>

        {/* Explore link */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F5A623] transition-colors duration-300 group-hover:text-white">
            Explore Solution
          </span>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D99A26]/60 transition-all duration-300 group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#071426]">
            <ArrowIcon className="h-4 w-5 text-[#F5A623] transition-all duration-300 group-hover:text-[#071426] group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>

      {/* Desktop number */}
      <span className="absolute right-5 top-5 z-10 hidden font-heading text-[38px] font-medium leading-none text-white/75 lg:block">
        {solution.number}
      </span>

      {/* Subtle gold corner accent */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5A623] transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}

/* =========================================================
   EMERGING SOLUTION CARD
   Original design preserved
========================================================= */

function EmergingSolutionCard({ solution }) {
  return (
    <Link
      href="/coming-soon"
      className="group flex min-w-0 items-center gap-5 rounded-lg border border-[#DCD7CC] bg-white p-5 shadow-[0_5px_25px_rgba(6,20,38,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7AE47]/70 hover:shadow-[0_15px_35px_rgba(6,20,38,0.09)] sm:gap-6 sm:p-7"
    >
      {/* Icon */}
      <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#071426] transition-colors duration-300 group-hover:bg-[#10243B] sm:h-[76px] sm:w-[76px]">
        <GoldIcon src={solution.icon} size={43} />
      </div>

      {/* Divider */}
      <div className="h-[75px] w-px shrink-0 bg-gradient-to-b from-transparent via-[#D99A26] to-transparent" />

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-heading text-[18px] font-medium leading-snug text-[#071426] sm:text-[20px]">
            {solution.title}
          </h3>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5AD48]/50 bg-[#F5A623]/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#A66B0C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D99A26]" />
            Coming Soon
          </span>
        </div>

        <p className="mt-2 text-[12px] leading-[1.85] tracking-[0.015em] text-[#646464] sm:text-[13px]">
          {solution.description}
        </p>
      </div>

      {/* Arrow */}
      <ArrowIcon className="hidden h-6 w-7 shrink-0 text-[#D99A26] transition-transform duration-300 group-hover:translate-x-2 sm:block" />
    </Link>
  );
}

/* =========================================================
   MAIN SERVICE SECTION
========================================================= */

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F7F3] px-5 py-20 text-[#071426] sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-[5%]"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full border border-[#D99A26]/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-36 h-[350px] w-[350px] rounded-full border border-[#D99A26]/[0.08]"
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B47A19] sm:text-xs">
                Our Solutions
              </span>

              <span className="h-px w-14 bg-[#D99A26]" />
            </div>

            <h2 className="max-w-[760px] font-heading text-[36px] font-medium leading-[1.17] tracking-[-0.025em] text-[#071426] sm:text-[46px] lg:text-[50px] xl:text-[55px]">
              Strategic Talent Solutions.
              <br />
              Measurable <span className="text-[#C58A25]">Impact.</span>
            </h2>
          </div>

          <div className="relative border-l border-[#D99A26] py-2 pl-6 sm:pl-8 lg:mb-2 lg:ml-4 lg:pl-9">
            <p className="max-w-[490px] text-[14px] leading-[1.9] tracking-[0.015em] text-[#62666C] sm:text-[15px] lg:text-[16px]">
              We partner with organizations to attract, develop, and retain
              exceptional talent that drives growth and builds lasting
              competitive advantage.
            </p>
          </div>
        </div>

        {/* Core solutions */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A66B0C] sm:text-xs">
                Core Solutions
              </h3>

              <span className="h-px w-10 bg-[#D99A26]/60" />
            </div>

            <span className="text-[10px] font-medium tracking-[0.12em] text-[#92918B]">
              01 / 05
            </span>
          </div>

          {/* Five-card layout */}
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 xl:gap-7">
            {coreSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`min-w-0 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <SolutionCard solution={solution} />
              </div>
            ))}
          </div>
        </div>

        {/* Emerging solutions, unchanged */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-7 flex items-center gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A66B0C] sm:text-xs">
              Emerging Solutions
            </h3>

            <span className="h-px w-10 bg-[#D99A26]/60" />
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
            {emergingSolutions.map((solution) => (
              <EmergingSolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
        </div>

        {/* Consultation banner, unchanged */}
        <div className="relative mt-16 overflow-hidden rounded-lg border border-[#D99A26]/30 bg-[#071426] px-6 py-9 shadow-[0_20px_60px_rgba(6,20,38,0.12)] sm:mt-20 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Decorative gold circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-64 h-[500px] w-[500px] rounded-full border border-[#D99A26]/25"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-52 h-[400px] w-[400px] rounded-full border border-[#D99A26]/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-[-150px] h-[300px] w-[300px] rounded-full border border-[#D99A26]/15"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {/* Banner message */}
            <div className="flex items-center gap-5 sm:gap-7">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#D99A26] bg-white/[0.03] sm:h-[82px] sm:w-[82px]">
                <GoldIcon src="/icons/schedule-calendar-icon.svg" size={45} />
              </div>

              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
                  Let's Connect
                </span>

                <h3 className="mt-2 font-heading text-[24px] font-medium leading-tight text-white sm:text-[30px] lg:text-[34px]">
                  Let’s Build What’s Next.
                </h3>

                <p className="mt-3 max-w-[440px] text-[12px] leading-[1.85] tracking-[0.015em] text-white/60 sm:text-[13px]">
                  Schedule a confidential consultation and discover how we can
                  help you achieve your talent goals.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/schedule-consultation"
              className="group inline-flex min-h-[54px] w-full shrink-0 items-center justify-center gap-5 rounded-sm bg-[#F5A623] px-7 py-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#071426] transition-all duration-300 hover:bg-white sm:w-fit sm:px-9 sm:text-xs lg:min-w-[285px]"
            >
              Schedule a Consultation
              <ArrowIcon className="h-5 w-7 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
