const resourceAreas = [
  {
    number: "01",
    title: "Articles & Insights",
    description:
      "Thoughtful perspectives on executive leadership, talent, and organizational success.",
  },
  {
    number: "02",
    title: "Leadership Guides",
    description:
      "Practical resources to support better leadership decisions and stronger teams.",
  },
  {
    number: "03",
    title: "Videos & Conversations",
    description:
      "Expert perspectives and conversations on the challenges shaping today's workplace.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 10h13" />
      <path d="m10.5 4 6 6-6 6" />
    </svg>
  );
}

export default function ResourcesComingSoon() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] py-16 text-[#071426] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-9 bg-[#F4A019]" />
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A96812] sm:text-[15px]">
            Resources
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
          <div>
            <h2 className="font-heading text-[40px] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-[52px] lg:text-[62px]">
              Insights to Drive
              <br />
              Leadership <span className="text-[#D98616]">Forward.</span>
            </h2>
          </div>

          <p className="max-w-[540px] text-[14px] leading-[1.9] text-[#536075] sm:text-[16px] lg:pb-2">
            Explore perspectives, practical guidance, and ideas designed to help
            organizations attract, develop, and retain exceptional leadership
            talent.
          </p>
        </div>

        {/* Development status panel */}
        <div className="relative mt-12 overflow-hidden rounded-[10px] bg-[#071426] px-7 py-9 sm:px-10 sm:py-12 lg:mt-14 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l from-[#F4A019]/[0.07] to-transparent"
          />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#F4A019]/35 bg-[#F4A019]/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#F4A019]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#F4B34F]">
                  Resource Library · In Development
                </span>
              </div>

              <h3 className="mt-6 max-w-[650px] font-heading text-[30px] font-semibold leading-[1.18] tracking-[-0.025em] text-white sm:text-[38px] lg:text-[44px]">
                We're putting together something worth reading.
              </h3>

              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.9] text-white/60 sm:text-[15px]">
                Our resource library is currently under development. We're
                preparing original articles, leadership guides, and expert
                conversations to bring you meaningful perspectives on talent and
                leadership.
              </p>

              <p className="mt-5 text-[12px] font-medium tracking-wide text-[#F4A019]">
                Check back soon for new resources.
              </p>
            </div>

            {/* Status detail */}
            <div className="flex items-center gap-5 border-t border-white/15 pt-6 lg:min-w-[220px] lg:flex-col lg:items-start lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-[#F4A019]/45 text-[#F4A019]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 4h14v16H5z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/45">
                  What's ahead
                </p>
                <p className="mt-1 font-heading text-[20px] font-semibold text-white">
                  Knowledge. Perspective.
                </p>
                <p className="mt-1 text-[13px] text-white/50">
                  Made for leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resource categories */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {resourceAreas.map((item) => (
            <div
              key={item.number}
              className="rounded-[10px] bg-white px-6 py-7 sm:px-7 sm:py-9 lg:px-9"
            >
              <span className="text-[12px] font-semibold tracking-[0.12em] text-[#D98616]">
                {item.number}
              </span>

              <h3 className="mt-4 font-heading text-[22px] font-semibold text-[#071426] sm:text-[24px]">
                {item.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.85] text-[#536075] sm:text-[14px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[580px] text-[13px] leading-[1.8] text-[#647084]">
            In the meantime, discover how Credoe helps organizations make
            confident leadership and talent decisions.
          </p>

          <a
            href="/schedule-consultation"
            className="group inline-flex min-h-[48px] w-fit items-center gap-4 rounded-[4px] bg-[#071426] px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#F4A019] hover:text-[#071426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A019] focus-visible:ring-offset-2"
          >
            Schedule a Consultation
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
