"use client";

const GOLD = "#F4A019";

function ProcessIcon({ type }) {
  const iconType = String(type || "")
    .toLowerCase()
    .trim();

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {(iconType === "discovery" || iconType === "discover") && (
        <>
          <circle cx="21" cy="21" r="11" />
          <path d="m29 29 9 9" />
          <path d="M17 21a4 4 0 0 1 4-4" />
        </>
      )}

      {(iconType === "engagement" || iconType === "engage") && (
        <>
          <circle cx="24" cy="13" r="5" />
          <circle cx="11" cy="21" r="4" />
          <circle cx="37" cy="21" r="4" />
          <path d="M14 39v-5a10 10 0 0 1 20 0v5" />
          <path d="M3 38v-4a8 8 0 0 1 7-8" />
          <path d="M45 38v-4a8 8 0 0 0-7-8" />
        </>
      )}

      {(iconType === "evaluation" || iconType === "assess") && (
        <>
          <rect x="9" y="6" width="25" height="35" rx="2" />
          <path d="M15 15h13M15 22h10M15 29h6" />
          <circle cx="32" cy="30" r="7" />
          <path d="m37 35 6 6" />
        </>
      )}

      {(iconType === "transition" || iconType === "integrate") && (
        <>
          <path d="m5 18 10-7 9 5 6-2 13 10-9 10-7-4-5 3-7-5-5 1-5-11Z" />
          <path d="m15 12 8 8a4 4 0 0 0 6-1l2-3" />
          <path d="m18 30 4 4a3 3 0 0 0 4-1" />
          <path d="m25 33 3 3a3 3 0 0 0 4-1" />
        </>
      )}

      {(iconType === "growth" ||
        iconType === "partner" ||
        iconType === "partnership") && (
        <>
          <path d="M7 37V25h8v12M20 37V17h8v20M33 37V9h8v28" />
          <path d="m7 18 11-7 8 2 13-9" />
          <path d="M32 4h7v7" />
          <path d="M5 42h39" />
        </>
      )}

      {![
        "discovery",
        "discover",
        "engagement",
        "engage",
        "evaluation",
        "assess",
        "transition",
        "integrate",
        "growth",
        "partner",
        "partnership",
      ].includes(iconType) && (
        <>
          <circle cx="21" cy="21" r="11" />
          <path d="m29 29 9 9" />
          <path d="M17 21a4 4 0 0 1 4-4" />
        </>
      )}
    </svg>
  );
}

export default function ServiceProcess({
  sectionNumber,
  eyebrow,
  title,
  highlight,
  description,
  supportingLabel,
  supportingDescription,
  steps = [],
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF9F6] py-20 text-[#07172B] sm:py-24 lg:py-28">
      {/* Background detailing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[420px] -top-[420px] -z-10 h-[850px] w-[850px] rounded-full border border-[#D99B27]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] -top-[300px] -z-10 h-[610px] w-[610px] rounded-full border border-[#D99B27]/10"
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section heading */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span
                className="h-[2px] w-10"
                style={{ backgroundColor: GOLD }}
              />

              <span
                className="font-heading text-[16px] font-medium"
                style={{ color: GOLD }}
              >
                {sectionNumber}
              </span>

              <span className="h-9 w-px bg-[#D99B27]/30" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#788194] sm:text-[13px]">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-[850px] font-heading text-[39px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[52px] lg:text-[62px]">
              {title}
              <span className="mt-1 block" style={{ color: GOLD }}>
                {highlight}
              </span>
            </h2>

            <p className="mt-6 max-w-[690px] text-[15px] leading-[1.85] text-[#667085] sm:text-[16px] lg:text-[17px]">
              {description}
            </p>
          </div>

          {/* Supporting statement */}
          <div className="relative max-w-[460px] border-l-[2px] border-[#F4A019] py-2 pl-6 lg:mb-2 lg:justify-self-end lg:pl-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#788194] sm:text-[11px]">
              {supportingLabel}
            </span>

            <p className="mt-4 text-[14px] leading-[1.9] text-[#667085] sm:text-[15px]">
              {supportingDescription}
            </p>
          </div>
        </div>

        {/* Process stages */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5">
            {steps.map((step, index) => (
              <article
                key={step.number || index}
                className="group relative flex h-full min-h-[390px] flex-col border border-[#D99B27]/15 bg-white/55 px-5 pb-7 pt-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D99B27]/45 hover:bg-white hover:shadow-[0_16px_40px_rgba(7,23,43,0.06)] sm:min-h-[410px] lg:min-h-[440px] lg:px-5 lg:pb-8 xl:px-6"
              >
                {/* Number row */}
                <div className="flex h-[64px] shrink-0 items-start justify-between">
                  <span className="font-heading text-[46px] font-medium leading-none tracking-[-0.045em] text-[#E8B96F]/65 transition-colors duration-500 group-hover:text-[#F4A019] sm:text-[50px]">
                    {step.number || String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="pt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B0A18B]">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(steps.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Icon rail */}
                <div className="relative mb-8 flex h-[76px] shrink-0 items-center">
                  {/* Connecting line */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 right-[-20px] top-1/2 hidden h-px -translate-y-1/2 bg-[#D99B27]/30 lg:block xl:right-[-25px]"
                  />

                  {/* Icon container */}
                  <div className="relative z-10 flex h-[62px] w-[62px] items-center justify-center border border-[#D99B27]/35 bg-[#FAF9F6] text-[#C88B28] transition-all duration-500 group-hover:border-[#F4A019] group-hover:bg-[#F4A019] group-hover:text-white">
                    <ProcessIcon type={step.icon} />

                    <span
                      aria-hidden="true"
                      className="absolute -right-[4px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full border-2 border-[#FAF9F6] bg-[#F4A019] lg:block"
                    />
                  </div>

                  {/* Mobile and tablet connector */}
                  <div
                    aria-hidden="true"
                    className="ml-4 h-px flex-1 bg-[#D99B27]/25 lg:hidden"
                  />

                  <span
                    aria-hidden="true"
                    className="ml-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#F4A019]/70 lg:hidden"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B78A48] sm:text-[10px]">
                    {step.category}
                  </span>

                  {/* Fixed title area keeps all descriptions aligned */}
                  <h3 className="mt-3 min-h-[58px] font-heading text-[21px] font-semibold leading-[1.22] tracking-[-0.02em] text-[#07172B] sm:text-[22px]">
                    {step.title}
                  </h3>

                  <span
                    className="mb-5 mt-4 block h-[2px] w-9 shrink-0 transition-all duration-500 group-hover:w-14"
                    style={{ backgroundColor: GOLD }}
                  />

                  <p className="flex-1 text-[13px] leading-[1.85] text-[#788194] sm:text-[14px]">
                    {step.description}
                  </p>

                  {/* Consistent footer position */}
                  <div className="mt-7 flex shrink-0 items-center gap-3 border-t border-[#D99B27]/15 pt-5">
                    <span className="h-px w-5 bg-[#D99B27]/50" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#9299A6]">
                      Step {step.number || String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom signature */}
        <div className="mt-10 flex items-center gap-5 border-t border-[#D99B27]/20 pt-6 sm:mt-14">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9299A6]">
            From first insight to lasting impact
          </span>

          <span className="h-px flex-1 bg-[#D99B27]/20" />

          <span
            className="h-2 w-2 rotate-45"
            style={{ backgroundColor: GOLD }}
          />
        </div>
      </div>
    </section>
  );
}
