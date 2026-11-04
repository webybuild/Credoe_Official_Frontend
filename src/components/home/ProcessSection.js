"use client";

const GOLD = "#F4A019";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your organization, goals, and talent challenges.",
    icon: "discover",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We craft a customized talent strategy tailored to your unique needs.",
    icon: "strategize",
  },
  {
    number: "03",
    title: "Deliver",
    description: "We identify and present top talent that drives real impact.",
    icon: "deliver",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We partner with you beyond placement to ensure long-term success.",
    icon: "support",
  },
];

function ProcessIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 64 64"
      className="h-9 w-9 sm:h-10 sm:w-10"
      aria-hidden="true"
      {...common}
    >
      {type === "discover" && (
        <>
          <rect x="8" y="10" width="21" height="15" rx="2" />
          <path d="M14 25v5l5-5" />
          <rect x="35" y="10" width="21" height="15" rx="2" />
          <path d="M48 25v5l-5-5" />
          <path d="M14 17h3m5 0h2m16 0h3m5 0h2" />
          <circle cx="20" cy="39" r="5" />
          <circle cx="32" cy="37" r="5" />
          <circle cx="44" cy="39" r="5" />
          <path d="M10 53c0-6 4-9 10-9m24 0c6 0 10 3 10 9v2H10z" />
          <path d="M22 55v-3m20 3v-3" />
          <path d="M23 48c1-5 4-7 9-7s8 2 9 7" />
        </>
      )}

      {type === "strategize" && (
        <>
          <circle cx="28" cy="27" r="18" />
          <circle cx="28" cy="21" r="5" />
          <path d="M18 36c1-7 5-10 10-10s9 3 10 10" />
          <path d="m41 41 12 12" />
          <circle cx="43" cy="43" r="7" />
          <path d="m48 48 7 7" />
        </>
      )}

      {type === "deliver" && (
        <>
          <circle cx="32" cy="15" r="6" />
          <circle cx="17" cy="23" r="5" />
          <circle cx="47" cy="23" r="5" />
          <path d="M21 40c0-9 4-14 11-14s11 5 11 14" />
          <path d="M6 43c0-7 4-11 11-11 4 0 7 2 9 5" />
          <path d="M58 43c0-7-4-11-11-11-4 0-7 2-9 5" />
          <path d="M12 44h40v11H12z" />
          <path d="M27 44v11m10-11v11" />
          <path d="m10 12 3 2 4-1-2 4 1 4-4-2-4 2 1-4-2-4z" />
          <path d="m47 5 2 3 4 1-3 3-1 4-3-3-4 1 2-4-1-4z" />
        </>
      )}

      {type === "support" && (
        <>
          <path d="m7 23 9-11 13 8-8 13z" />
          <path d="m57 23-9-11-13 8 8 13z" />
          <path d="m19 29 9 10c2 2 5-1 3-3l-5-6" />
          <path d="m26 30 12 13c2 2 6-1 4-4l-9-11" />
          <path d="m34 29 10 10c2 2 5-1 3-3l-8-10" />
          <path d="m41 27 7 7c3 2 6-2 3-4L39 19" />
          <path d="m20 34-5 6c-2 3 2 6 4 3l5-5" />
          <path d="m27 39-5 6c-2 3 2 5 4 3l6-6" />
          <path d="m34 43-4 5c-2 2 2 5 4 2l5-5" />
        </>
      )}
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 53h47" />
      <path d="M13 53V39h10v14" />
      <path d="M28 53V30h10v23" />
      <path d="M43 53V20h10v33" />
      <path d="m11 30 14-12 11 5L53 8" />
      <path d="M43 8h10v10" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="our-process"
      className="relative overflow-hidden bg-[#FAF9F6] text-[#07172B]"
    >
      {/* Subtle decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#F4A019]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 h-[300px] w-[300px] rounded-full border border-[#F4A019]/10"
      />

      <div className="relative mx-auto max-w-[1450px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[76px]">
        {/* Section heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end lg:gap-12">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#F4A019]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#B77A19] sm:text-xs">
                Our Proven Approach
              </p>
            </div>

            <h2 className="mt-4 font-heading text-[34px] font-medium leading-[1.12] tracking-[-0.035em] text-[#07172B] sm:text-[43px] lg:text-[50px]">
              Strategic Thinking.
              <br className="hidden sm:block" />
              Measurable <span className="text-[#D99522]">Results.</span>
            </h2>

            <div className="mt-5 h-[2px] w-12 bg-[#F4A019]" />
          </div>

          <p className="max-w-[440px] text-[14px] leading-[1.8] text-[#5D6875] sm:text-[15px] lg:mb-1">
            Our consultative, data-driven approach ensures we deliver the right
            talent and solutions aligned with your goals.
          </p>
        </div>

        {/* Four-step process */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="group relative min-w-0 rounded-xl border border-[#E9E5DC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E6C58C] hover:shadow-[0_12px_35px_rgba(7,23,43,0.07)] sm:p-6 lg:p-5 xl:p-6"
            >
              {/* Card top row */}
              <div className="flex items-start justify-between">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#FBF4E8] text-[#C88B26] transition-colors duration-300 group-hover:bg-[#F8EBD4]">
                  <ProcessIcon type={step.icon} />
                </div>

                <span className="font-heading text-[27px] font-medium leading-none text-[#E6D9C2] transition-colors duration-300 group-hover:text-[#DDAA55]">
                  {step.number}
                </span>
              </div>

              {/* Card content */}
              <div className="mt-6">
                <h3 className="font-heading text-[22px] font-semibold tracking-[-0.02em] text-[#07172B] sm:text-[23px]">
                  {step.title}
                </h3>

                <div className="mt-3 h-[2px] w-8 bg-[#F4A019] transition-all duration-300 group-hover:w-12" />

                <p className="mt-4 max-w-[280px] text-[13px] leading-[1.8] text-[#68727E] sm:text-[14px]">
                  {step.description}
                </p>
              </div>

              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#F4A019]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-6 sm:right-6" />
            </article>
          ))}
        </div>

        {/* Compact call to action */}
        <div className="mt-7 flex flex-col gap-5 rounded-xl border border-[#E9E1D3] bg-[#F5F0E7] px-5 py-6 sm:px-7 lg:mt-8 lg:flex-row lg:items-center lg:justify-between lg:px-9 lg:py-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#E5C58E] bg-white text-[#C88B26] sm:h-[62px] sm:w-[62px]">
              <GrowthIcon />
            </div>

            <div>
              <h3 className="font-heading text-[20px] font-medium leading-tight tracking-[-0.02em] text-[#07172B] sm:text-[23px]">
                Let’s Build What’s Next Together.
              </h3>

              <p className="mt-1.5 max-w-[580px] text-[12px] leading-[1.7] text-[#68727E] sm:text-[13px]">
                Partner with Credoe Talent Solutions to transform your talent
                strategy into a competitive advantage.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4 lg:flex-col lg:items-end">
            <a
              href="/contact"
              className="group inline-flex min-h-[48px] w-full items-center justify-between gap-6 rounded-md bg-[#07172B] px-5 text-[12px] font-bold uppercase tracking-[0.09em] text-white transition-colors duration-300 hover:bg-[#F4A019] sm:w-auto"
            >
              <span>Let’s Connect</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </a>

            <p className="flex items-center gap-1.5 text-[11px] text-[#737C85]">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                <path d="m11 15 1 1 2-3" />
              </svg>
              Your information is always confidential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
