import Image from "next/image";

const coreSolutions = [
  {
    title: "Executive Search",
    description:
      "We identify and secure transformational leaders who align with your vision and accelerate success.",
    image: "/images/cardOneImg.png",
    icon: "/icons/find-professional-man-icon.svg",
    alt: "Executive chess strategy",
  },
  {
    title: "Talent Advisory",
    description:
      "Custom strategies to attract, engage, and retain top talent across every level of your organization.",
    image: "/images/cardTwoImg.png",
    icon: "/icons/business-team-icon.svg",
    alt: "Business professionals collaborating",
  },
  {
    title: "Succession Planning",
    description:
      "Build strong leadership pipelines and future-ready teams to ensure business continuity.",
    image: "/images/cardThreeImg.png",
    icon: "/icons/personal-development-icon.svg",
    alt: "Modern bridge representing future growth",
  },
  {
    title: "Executive Coaching",
    description:
      "Empower leaders to unlock potential, enhance performance, and lead with confidence.",
    image: "/images/cardFourImg.png",
    icon: "/icons/men-suit-tuxedo-icon.svg",
    alt: "Executive coaching discussion",
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

function SolutionCard({ solution }) {
  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Card image */}
      <div className="relative h-[150px] overflow-hidden sm:h-[165px] lg:h-[150px] xl:h-[165px]">
        <Image
          src={solution.image}
          alt={solution.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Overlapping icon */}
      <div className="absolute left-[18px] top-[105px] z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#F5A000] bg-black sm:top-[120px] lg:top-[108px] xl:top-[120px]">
        <Image
          src={solution.icon}
          alt=""
          width={42}
          height={42}
          className="h-10 w-10 object-contain"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(63%) sepia(99%) saturate(1623%) hue-rotate(2deg) brightness(103%) contrast(103%)",
          }}
        />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col px-[18px] pb-5 pt-[40px] sm:px-5 sm:pb-6">
        <h3 className="font-heading text-[19px] font-semibold leading-snug text-[#111111] sm:text-[20px]">
          {solution.title}
        </h3>

        <div className="mt-2 h-[2px] w-10 bg-[#F5A000] transition-all duration-300 group-hover:w-16" />

        <p className="mt-5 flex-1 text-[12px] leading-[1.8] tracking-[0.025em] text-[#252525] sm:text-[13px]">
          {solution.description}
        </p>

        <a
          href="/services"
          aria-label={`Learn more about ${solution.title}`}
          className="mt-4 inline-flex w-fit items-center text-[#F5A000] transition-transform duration-300 hover:translate-x-2"
        >
          <ArrowIcon className="h-6 w-9" />
        </a>
      </div>
    </article>
  );
}

function EmergingSolutionCard({ solution }) {
  return (
    <a
      href="/services"
      className="group flex min-w-0 items-center gap-4 rounded-xl border border-black/10 bg-white px-4 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:gap-5 sm:px-6 sm:py-5 lg:px-5 xl:px-6"
    >
      {/* Icon circle */}
      <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-black sm:h-[82px] sm:w-[82px]">
        <Image
          src={solution.icon}
          alt=""
          width={48}
          height={48}
          className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(63%) sepia(99%) saturate(1623%) hue-rotate(2deg) brightness(103%) contrast(103%)",
          }}
        />
      </div>

      {/* Divider */}
      <div className="h-[76px] w-[2px] shrink-0 bg-[#F5A000]/40" />

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-heading text-[17px] font-semibold leading-snug text-[#111111] sm:text-[19px]">
            {solution.title}
          </h3>

          <span className="inline-flex shrink-0 items-center rounded-full border border-[#F5A000]/70 px-3 py-[3px] text-[8px] font-medium uppercase tracking-wide text-[#E68A00]">
            Coming Soon
          </span>
        </div>

        <p className="mt-2 text-[11px] leading-[1.8] tracking-[0.02em] text-[#252525] sm:text-[12px]">
          {solution.description}
        </p>
      </div>

      {/* Arrow */}
      <ArrowIcon className="h-6 w-7 shrink-0 text-[#F5A000] transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="bg-[#F8F8F8] px-5 py-16 text-[#111111] sm:px-8 sm:py-20 lg:px-12 lg:py-20 xl:px-[5%]"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-wide text-[#E68A00] sm:text-sm">
                Our Solutions
              </span>
              <span className="h-[2px] w-[52px] bg-[#F5A000]" />
            </div>

            <h2 className="max-w-[680px] font-heading text-[34px] font-semibold leading-[1.15] tracking-[0.01em] text-black sm:text-[42px] lg:text-[42px] xl:text-[44px]">
              Strategic Talent Solutions.
              <br />
              Measurable <span className="text-[#D98900]">Impact.</span>
            </h2>
          </div>

          <div className="border-l-[3px] border-[#E89A00] py-2 pl-5 sm:pl-7 lg:ml-2 lg:pl-10">
            <p className="max-w-[510px] text-[15px] leading-[1.65] tracking-[0.035em] text-[#666666] sm:text-[16px] lg:text-[17px]">
              We partner with organizations to attract, develop, and retain
              exceptional talent that drives growth and builds lasting
              competitive advantage.
            </p>
          </div>
        </div>

        {/* Core solutions */}
        <div className="mt-7">
          <h3 className="mb-7 text-[13px] font-semibold uppercase tracking-wide text-[#E68A00] sm:text-sm">
            Core Solutions
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-8">
            {coreSolutions.map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
        </div>

        {/* Emerging solutions */}
        <div className="mt-7 sm:mt-8">
          <h3 className="mb-7 text-[13px] font-semibold uppercase tracking-wide text-[#E68A00] sm:text-sm">
            Emerging Solutions
          </h3>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            {emergingSolutions.map((solution) => (
              <EmergingSolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
        </div>

        {/* Consultation banner */}
        <div className="relative mt-12 overflow-hidden rounded-xl bg-black px-6 py-8 text-white shadow-md sm:mt-14 sm:px-10 sm:py-10 lg:mt-[60px] lg:px-14 lg:py-12">
          {/* Decorative gold circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[80px] -top-[300px] h-[550px] w-[550px] rounded-full border border-[#D99500]/50 sm:-right-[10px] lg:right-[20px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[30px] -top-[245px] h-[450px] w-[450px] rounded-full border border-[#D99500]/35 sm:right-[35px] lg:right-[75px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[20px] -top-[195px] h-[350px] w-[350px] rounded-full border border-[#D99500]/25 sm:right-[80px] lg:right-[130px]"
          />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Banner message */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#F5A000] sm:h-[84px] sm:w-[84px]">
                <Image
                  src="/icons/schedule-calendar-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(63%) sepia(99%) saturate(1623%) hue-rotate(2deg) brightness(103%) contrast(103%)",
                  }}
                />
              </div>

              <div className="min-w-0">
                <h3 className="font-heading text-[23px] font-semibold leading-tight sm:text-[27px]">
                  Let’s Build What’s Next.
                </h3>

                <p className="mt-2 max-w-[390px] text-[12px] leading-[1.8] tracking-[0.025em] text-gray-300 sm:text-[13px]">
                  Schedule a confidential consultation and discover how we can
                  help you achieve your talent goals.
                </p>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="/contact"
              className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-5 rounded-md bg-[#F5A623] px-6 py-4 text-center text-[12px] font-bold uppercase text-black transition-colors duration-300 hover:bg-white sm:px-8 sm:text-sm lg:min-w-[300px]"
            >
              Schedule a Consultation
              <ArrowIcon className="h-5 w-7 text-black transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
