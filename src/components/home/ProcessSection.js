"use client";

const GOLD = "#F4A019";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: (
      <>
        We learn about your
        <br className="hidden xl:block" /> organization, goals, and
        <br className="hidden xl:block" /> talent challenges.
      </>
    ),
    icon: "discover",
  },
  {
    number: "02",
    title: "Strategize",
    description: (
      <>
        We craft a customized
        <br className="hidden xl:block" /> talent strategy tailored
        <br className="hidden xl:block" /> to your unique needs.
      </>
    ),
    icon: "strategize",
  },
  {
    number: "03",
    title: "Deliver",
    description: (
      <>
        We identify and present
        <br className="hidden xl:block" /> top talent that drives
        <br className="hidden xl:block" /> real impact.
      </>
    ),
    icon: "deliver",
  },
  {
    number: "04",
    title: "Support",
    description: (
      <>
        We partner with you beyond
        <br className="hidden xl:block" /> placement to ensure
        <br className="hidden xl:block" /> long-term success.
      </>
    ),
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
      className="h-11 w-11 sm:h-12 sm:w-12"
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
          <path d="m27 39-5 6c-2 3 2 6 4 3l6-6" />
          <path d="m34 43-4 5c-2 3 2 5 4 2l5-5" />
        </>
      )}
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-14 w-14 sm:h-[68px] sm:w-[68px]"
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
      className="h-6 w-6"
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

function StepArrow() {
  return (
    <div
      className="flex w-[74px] items-center text-[#F4A019]"
      aria-hidden="true"
    >
      <span className="flex-1 border-t border-dashed border-[#F4A019]/80" />
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="our-process"
      className="relative isolate overflow-hidden bg-[#020D19] text-white"
    >
      {/* Background image: anchored to the top, with controlled height */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[510px] bg-cover bg-no-repeat sm:h-[560px] lg:h-[620px]"
        style={{
          backgroundImage: "url('/images/ProcessBg.png')",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark overlay blends the image into the process area */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#020D19]/10 via-[#020D19]/35 to-[#020D19] sm:via-[#020D19]/30"
      />

      {/* Decorative gold rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] top-[170px] -z-10 h-[550px] w-[550px] rounded-full border border-[#F4A019]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[280px] top-[-100px] -z-10 h-[600px] w-[600px] rounded-full border border-[#F4A019]/20"
      />

      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-[68px]">
        {/* Hero heading */}
        <div className="min-h-[350px] sm:min-h-[380px] lg:min-h-[450px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-6" style={{ backgroundColor: GOLD }} />

            <p
              className="text-[13px] font-medium uppercase tracking-[0.06em] sm:text-[16px]"
              style={{ color: GOLD }}
            >
              Our Proven Approach
            </p>
          </div>

          <h2 className="mt-5 max-w-[680px] font-heading text-[38px] font-medium leading-[1.12] tracking-[-0.035em] text-white sm:text-[52px] lg:text-[64px]">
            Strategic Thinking.
            <br />
            Measurable <span style={{ color: GOLD }}>Results.</span>
          </h2>

          <div
            className="mt-7 h-[2px] w-[57px]"
            style={{ backgroundColor: GOLD }}
          />

          <p className="mt-7 max-w-[540px] text-[16px] leading-[1.8] text-white/90 sm:text-[19px]">
            Our consultative, data-driven approach ensures we deliver the right
            talent and solutions aligned with your goals.
          </p>
        </div>

        {/* Four-step process */}
        <div className="rounded-xl bg-[#031321]/80 px-5 py-7 backdrop-blur-[2px] sm:px-7 sm:py-8 lg:px-5 lg:py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative min-w-0 ${
                  index !== 0
                    ? "lg:border-l lg:border-white/15 lg:pl-7 xl:pl-8"
                    : "lg:pr-7 xl:pr-8"
                } ${index < 2 ? "sm:pb-2 lg:pb-0" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-white/55 text-[#F4A019] transition duration-300 hover:border-[#F4A019] hover:bg-[#F4A019]/10 sm:h-[82px] sm:w-[82px]">
                    <ProcessIcon type={step.icon} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[21px] font-semibold leading-none sm:text-[23px]"
                      style={{ color: GOLD }}
                    >
                      {step.number}
                    </p>

                    <h3 className="mt-3 text-[21px] font-semibold leading-tight text-white sm:text-[24px]">
                      {step.title}
                    </h3>

                    <div
                      className="mt-3 h-px w-10"
                      style={{ backgroundColor: GOLD }}
                    />
                  </div>
                </div>

                <p className="mt-5 max-w-[290px] text-[15px] leading-[1.8] text-white/95 sm:pl-2 sm:text-[17px]">
                  {step.description}
                </p>

                {/* Arrow is centered on the column boundary */}
                {index < processSteps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-[42px] z-20 hidden translate-x-1/2 xl:block">
                    <StepArrow />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom call-to-action */}
        <div className="mt-8 rounded-xl border border-white/25 bg-[#061426]/90 p-6 backdrop-blur-sm sm:p-8 lg:mt-9 lg:px-10 lg:py-8">
          <div className="grid items-center gap-7 lg:grid-cols-[150px_minmax(0,1fr)_1px_360px] lg:gap-8">
            {/* Growth illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full border border-[#F4A019]/20">
                <div className="absolute inset-[12px] rounded-full border border-[#F4A019]/35" />
                <div className="absolute inset-[22px] rounded-full border border-[#F4A019]/60" />
                <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-[#F4A019] text-[#F4A019]">
                  <GrowthIcon />
                </div>
              </div>
            </div>

            {/* CTA text */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-[27px] font-medium leading-tight tracking-[-0.02em] text-white sm:text-[32px]">
                Let’s Build What’s Next Together.
              </h3>

              <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.8] text-white/90 sm:text-[17px] lg:mx-0">
                Partner with Creode Talent Solutions to transform your talent
                strategy into a competitive advantage.
              </p>
            </div>

            <div className="hidden h-[120px] w-px bg-white/20 lg:block" />

            {/* CTA button and confidentiality note */}
            <div className="flex flex-col items-center gap-4 lg:items-stretch">
              <a
                href="/contact"
                className="group flex min-h-[64px] w-full max-w-[340px] items-center justify-between overflow-hidden rounded-lg bg-[#D98B25] text-[#07111D] transition duration-300 hover:bg-[#F4A019] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A019] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061426]"
              >
                <span className="flex-1 px-5 text-center text-[15px] font-bold uppercase sm:text-[17px]">
                  Let’s Connect
                </span>

                <span className="flex h-[64px] w-[66px] shrink-0 items-center justify-center bg-black/5 transition duration-300 group-hover:bg-black/10">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </span>
              </a>

              <p className="flex items-center justify-center gap-2 text-center text-[12px] text-white/85 sm:text-[14px] lg:justify-start">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] shrink-0"
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
      </div>
    </section>
  );
}
