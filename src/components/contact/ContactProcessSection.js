const GOLD = "#F4A019";

const processSteps = [
  {
    number: "01",
    title: "Share Your Goals",
    description:
      "Tell us about your organization, leadership needs, and what success looks like.",
    icon: "message",
  },
  {
    number: "02",
    title: "Meet Our Team",
    description:
      "We'll schedule a conversation to understand your needs in depth and explore opportunities to partner.",
    icon: "team",
  },
  {
    number: "03",
    title: "Build Your Strategy",
    description:
      "Together, we'll outline a tailored approach to help you find and secure the right leadership talent for what's next.",
    icon: "document",
  },
];

function ProcessIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {type === "message" && (
        <>
          <path d="M5 4.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6l-4.5 3v-3H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5" />
        </>
      )}

      {type === "team" && (
        <>
          <circle cx="9" cy="8" r="3" fill="currentColor" />
          <circle cx="17" cy="9" r="2.5" fill="currentColor" />
          <path d="M3 19v-1.5a6 6 0 0 1 12 0V19Z" fill="currentColor" />
          <path d="M15 14a5 5 0 0 1 6 4.5V19h-4" />
        </>
      )}

      {type === "document" && (
        <>
          <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
          <path d="M8.5 7h7M8.5 11h7M8.5 15h7" />
        </>
      )}
    </svg>
  );
}

function DecorativeRings() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[250px] -top-[240px] h-[400px] w-[400px] rounded-full border border-[#F4A019]/20"
      >
        <div className="absolute inset-[12%] rounded-full border border-[#F4A019]/15" />
        <div className="absolute inset-[24%] rounded-full border border-[#F4A019]/10" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[300px] -right-[200px] h-[450px] w-[450px] rounded-full border border-[#F4A019]/15"
      >
        <div className="absolute inset-[12%] rounded-full border border-[#F4A019]/10" />
      </div>
    </>
  );
}

export default function ContactProcessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03101E] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-[60px]">
      <DecorativeRings />

      <div className="relative mx-auto max-w-[1120px]">
        {/* Section heading */}
        <header className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#F4A019]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[11px]">
              Our Process
            </p>

            <span className="h-px w-6 bg-[#F4A019]" />
          </div>

          <h2 className="font-heading text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-[36px]">
            What Happens Next?
          </h2>

          <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">
            We keep things simple, focused, and impactful.
          </p>
        </header>

        {/* Three process steps */}
        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5 lg:mt-10 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative grid grid-cols-[48px_1fr] items-start gap-x-3 sm:grid-cols-[48px_1fr] sm:gap-x-3"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F4A019] text-[#F4A019]">
                <ProcessIcon type={step.icon} />
              </div>

              {/* Step content */}
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span
                    className="font-heading text-[26px] font-semibold leading-none sm:text-[28px]"
                    style={{ color: GOLD }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-2 font-heading text-[14px] font-semibold leading-snug text-white sm:text-[15px]">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[260px] text-[11px] leading-[1.65] text-white/70 sm:text-xs">
                  {step.description}
                </p>
              </div>

              {/* Gold arrow between steps */}
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-[68px] hidden text-xl font-light sm:block lg:-right-2"
                  style={{ color: GOLD }}
                >
                  →
                </span>
              )}

              {/* Mobile separator */}
              {index < processSteps.length - 1 && (
                <div className="col-span-2 mt-5 h-px bg-white/10 sm:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
