"use client";

const GOLD = "#F4A019";

function ImpactIcon({ type }) {
  const iconType = String(type || "")
    .toLowerCase()
    .trim();

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconType === "growth" && (
        <>
          <path d="M7 39h35" />
          <path d="M11 35V25h8v10M23 35V17h8v18M35 35V9h7v26" />
          <path d="m8 19 11-8 8 3L41 3" />
          <path d="M33 3h8v8" />
        </>
      )}

      {iconType === "teams" && (
        <>
          <circle cx="24" cy="12" r="6" />
          <circle cx="10" cy="20" r="4" />
          <circle cx="38" cy="20" r="4" />
          <path d="M12 39v-6a12 12 0 0 1 24 0v6" />
          <path d="M2 38v-5a8 8 0 0 1 7-8" />
          <path d="M46 38v-5a8 8 0 0 0-7-8" />
        </>
      )}

      {iconType === "future" && (
        <>
          <path d="M24 6a12 12 0 0 0-7 21.7c2 1.5 3 3.2 3 5.3h8c0-2.1 1-3.8 3-5.3A12 12 0 0 0 24 6Z" />
          <path d="M19 39h10M21 43h6" />
          <path d="M24 1V3M5 20h3M40 20h3M10 7l3 3M38 7l-3 3" />
        </>
      )}

      {iconType === "value" && (
        <>
          <path d="M10 10h28v12c0 10-6 16-14 21-8-5-14-11-14-21V10Z" />
          <path d="m24 15 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" />
        </>
      )}

      {!["growth", "teams", "future", "value"].includes(iconType) && (
        <>
          <circle cx="24" cy="12" r="6" />
          <circle cx="10" cy="20" r="4" />
          <circle cx="38" cy="20" r="4" />
          <path d="M12 39v-6a12 12 0 0 1 24 0v6" />
          <path d="M2 38v-5a8 8 0 0 1 7-8" />
          <path d="M46 38v-5a8 8 0 0 0-7-8" />
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
    <section className="relative isolate overflow-hidden bg-[#FAF9F6] py-14 text-[#07172B] sm:py-16 lg:py-[76px]">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-64 -z-10 h-[600px] w-[600px] rounded-full border border-[#D99B27]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-40 -z-10 h-[400px] w-[400px] rounded-full border border-[#D99B27]/10"
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16 xl:gap-20">
          {/* LEFT: Impact statement and metrics */}
          <div>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-[2px] w-10"
                style={{ backgroundColor: GOLD }}
              />

              <span
                className="font-heading text-[15px] font-medium"
                style={{ color: GOLD }}
              >
                {sectionNumber}
              </span>

              <span className="h-8 w-px bg-[#D99B27]/30" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#788194]">
                {eyebrow}
              </span>
            </div>

            {/* Main heading */}
            <h2 className="max-w-[620px] font-heading text-[39px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[55px]">
              {title}
              <span className="mt-1 block" style={{ color: GOLD }}>
                {highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-[540px] text-[14px] leading-[1.85] text-[#6F7B91] sm:text-[15px]">
              {description}
            </p>

            {/* Metrics */}
            <div className="mt-9 grid grid-cols-2 border-l border-t border-[#D99B27]/20">
              {metrics.map((metric, index) => (
                <div
                  key={metric.value || index}
                  className="relative min-h-[118px] border-b border-r border-[#D99B27]/20 px-4 py-5 sm:min-h-[130px] sm:px-6 sm:py-6"
                >
                  <span
                    className="font-heading text-[38px] font-medium leading-none tracking-[-0.04em] sm:text-[46px]"
                    style={{ color: GOLD }}
                  >
                    {metric.value}
                  </span>

                  <p className="mt-3 max-w-[190px] text-[10px] font-semibold uppercase leading-[1.6] tracking-[0.09em] text-[#758096] sm:text-[11px]">
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
          <div className="relative overflow-hidden rounded-[8px] bg-[#07172B] px-6 py-6 text-white shadow-[0_18px_50px_rgba(7,23,43,0.10)] sm:px-8 sm:py-8 lg:px-9 lg:py-9">
            {/* Panel decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full border border-white/[0.07]"
            />

            {/* Panel heading, no decorative button */}
            <div className="relative mb-5 border-b border-white/10 pb-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F4A019]">
                Beyond the placement
              </span>

              <h3 className="mt-2 font-heading text-[23px] font-medium sm:text-[26px]">
                The impact that lasts.
              </h3>
            </div>

            {/* Outcomes */}
            <div className="relative">
              {outcomes.map((outcome, index) => (
                <article
                  key={outcome.number || index}
                  className="group flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0 sm:gap-5 sm:py-[18px]"
                >
                  {/* Icon */}
                  <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#F4A019]/30 bg-white/[0.035] text-[#F4A019] transition-all duration-300 group-hover:bg-[#F4A019] group-hover:text-[#07172B] sm:h-[54px] sm:w-[54px]">
                    <ImpactIcon type={outcome.icon} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="font-heading text-[17px] font-semibold text-white sm:text-[19px]">
                        {outcome.title}
                      </h4>

                      <span className="text-[9px] tracking-[0.15em] text-white/30">
                        {outcome.number}
                      </span>
                    </div>

                    <p className="mt-1 max-w-[390px] text-[12px] leading-[1.7] text-white/55 sm:text-[13px]">
                      {outcome.description}
                    </p>
                  </div>

                  {/* Gold marker */}
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#F4A019]/70 transition-transform duration-300 group-hover:rotate-90"
                  />
                </article>
              ))}
            </div>

            {/* Panel footer */}
            <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="h-[2px] w-8 bg-[#F4A019]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.19em] text-white/40">
                Stronger leadership. Enduring value.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
