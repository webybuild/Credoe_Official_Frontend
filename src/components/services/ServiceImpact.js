"use client";

const GOLD = "#F4A019";

function ImpactIcon({ index }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const iconIndex =
    Number.isInteger(index) && index >= 0 && index <= 3 ? index : 0;

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
      aria-hidden="true"
      focusable="false"
      {...common}
    >
      {iconIndex === 0 && (
        <>
          <circle cx="24" cy="24" r="18" opacity="0.55" />
          <circle cx="24" cy="24" r="13" opacity="0.35" />
          <path d="M12 32h5V25h5v-7h5v-5h5" />
          <path d="m27 13 5 0v5" />
          <path d="m12 36 9-9 6-2 9-11" />
          <path d="M31 14h5v5" />
        </>
      )}

      {iconIndex === 1 && (
        <>
          <circle cx="24" cy="24" r="18" opacity="0.55" />
          <circle cx="24" cy="17" r="4" />
          <circle cx="14" cy="27" r="3.5" />
          <circle cx="34" cy="27" r="3.5" />
          <path d="M17 36v-2a7 7 0 0 1 14 0v2" />
          <path d="M7 36v-2a7 7 0 0 1 6-7" />
          <path d="M41 36v-2a7 7 0 0 0-6-7" />
          <path d="M18 23l3-2M30 21l3 2" opacity="0.7" />
        </>
      )}

      {iconIndex === 2 && (
        <>
          <circle cx="24" cy="24" r="18" opacity="0.55" />
          <circle cx="24" cy="24" r="12" opacity="0.4" />
          <path d="M24 15v18M15 24h18" />
          <path d="m18 18 12 12M30 18 18 30" opacity="0.45" />
          <circle cx="24" cy="24" r="4" />
          <path d="M24 6v3M24 39v3M6 24h3M39 24h3" />
        </>
      )}

      {iconIndex === 3 && (
        <>
          <circle cx="24" cy="24" r="18" opacity="0.55" />
          <path d="M24 10 36 15v8c0 7-5 12-12 16-7-4-12-9-12-16v-8l12-5Z" />
          <path d="m18 24 4 4 8-9" />
          <path d="M24 14v-1M16 18l-2 2" opacity="0.55" />
        </>
      )}
    </svg>
  );
}

export default function ServiceImpact({
  sectionNumber,
  eyebrow,
  title,
  highlight,
  description,
  metrics = [],
  outcomes = [],
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF9F6] py-12 text-[#07172B] sm:py-16 lg:py-[76px]">
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-64 -z-10 h-[600px] w-[600px] rounded-full border border-[#D99B27]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-40 -z-10 h-[400px] w-[400px] rounded-full border border-[#D99B27]/10"
      />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-9 sm:gap-11 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16 xl:gap-20">
          {/* LEFT: Impact statement and metrics */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span
                className="h-[2px] w-8 shrink-0 sm:w-10"
                style={{ backgroundColor: GOLD }}
              />

              <span
                className="shrink-0 font-heading text-[14px] font-medium sm:text-[15px]"
                style={{ color: GOLD }}
              >
                {sectionNumber}
              </span>

              <span className="h-7 w-px shrink-0 bg-[#D99B27]/30 sm:h-8" />

              <span className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#788194] sm:text-[11px] sm:tracking-[0.22em]">
                {eyebrow}
              </span>
            </div>

            {/* Main heading */}
            <h2 className="max-w-[620px] font-heading text-[clamp(34px,8vw,39px)] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[55px]">
              {title}

              <span className="mt-1 block" style={{ color: GOLD }}>
                {highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[540px] text-[13px] leading-[1.8] text-[#6F7B91] sm:mt-5 sm:text-[15px] sm:leading-[1.85]">
              {description}
            </p>

            {/* Metrics */}
            <div className="mt-7 grid grid-cols-2 border-l border-t border-[#D99B27]/20 sm:mt-9">
              {metrics.map((metric, index) => (
                <div
                  key={metric.value || index}
                  className="relative flex min-w-0 flex-col justify-start border-b border-r border-[#D99B27]/20 px-3 py-4 sm:min-h-[130px] sm:px-6 sm:py-6"
                >
                  <span
                    className="break-words font-heading text-[clamp(24px,7vw,38px)] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[46px]"
                    style={{ color: GOLD }}
                  >
                    {metric.value}
                  </span>

                  <p className="mt-2 max-w-[190px] break-words text-[9px] font-semibold uppercase leading-[1.55] tracking-[0.055em] text-[#758096] sm:mt-3 sm:text-[11px] sm:leading-[1.6] sm:tracking-[0.09em]">
                    {metric.label}
                  </p>

                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-5 w-[2px]"
                    style={{ backgroundColor: GOLD }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Organizational outcomes */}
          <div className="relative min-w-0 overflow-hidden rounded-[8px] bg-[#07172B] px-4 py-5 text-white shadow-[0_18px_50px_rgba(7,23,43,0.10)] sm:px-8 sm:py-8 lg:px-9 lg:py-9">
            {/* Panel decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full border border-white/[0.07]"
            />

            {/* Panel heading */}
            <div className="relative mb-4 border-b border-white/10 pb-4 sm:mb-5 sm:pb-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F4A019] sm:tracking-[0.22em]">
                Beyond the placement
              </span>

              <h3 className="mt-2 font-heading text-[21px] font-medium sm:text-[26px]">
                The impact that lasts.
              </h3>
            </div>

            {/* Outcomes */}
            <div className="relative">
              {outcomes.map((outcome, index) => (
                <article
                  key={outcome.number || index}
                  className="group flex min-w-0 items-start gap-3 border-b border-white/10 py-4 last:border-b-0 sm:items-center sm:gap-5 sm:py-[18px]"
                >
                  {/* Icon */}
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#F4A019]/30 bg-white/[0.035] text-[#F4A019] transition-all duration-300 group-hover:bg-[#F4A019] group-hover:text-[#07172B] sm:h-[54px] sm:w-[54px]">
                    <ImpactIcon index={index} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="font-heading text-[16px] font-semibold leading-tight text-white sm:text-[19px]">
                        {outcome.title}
                      </h4>

                      <span className="text-[8px] tracking-[0.15em] text-white/30 sm:text-[9px]">
                        {outcome.number}
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] leading-[1.65] text-white/55 sm:max-w-[390px] sm:text-[13px] sm:leading-[1.7]">
                      {outcome.description}
                    </p>
                  </div>

                  {/* Gold marker */}
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#F4A019]/70 transition-transform duration-300 group-hover:rotate-90 sm:mt-0"
                  />
                </article>
              ))}
            </div>

            {/* Panel footer */}
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 sm:pt-5">
              <span className="h-[2px] w-8 shrink-0 bg-[#F4A019]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/40 sm:text-[9px] sm:tracking-[0.19em]">
                Stronger leadership. Enduring value.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
