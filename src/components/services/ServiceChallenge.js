"use client";

const GOLD = "#F4A019";

export default function ServiceChallenge({
  sectionNumber,
  eyebrow,
  title,
  highlight,
  description,
  cards = [],
}) {
  const cardLayouts = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-7",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#F8F7F3] py-16 text-[#07172B] sm:py-20 lg:py-24">
      {/* Background detailing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[240px] -top-[250px] -z-10 h-[720px] w-[720px] rounded-full border border-[#D99B27]/15"
      >
        <div className="absolute inset-[15%] rounded-full border border-[#D99B27]/15" />
        <div className="absolute inset-[30%] rounded-full border border-[#D99B27]/10" />
      </div>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Editorial introduction */}
        <div className="relative mb-12 lg:mb-[68px]">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-[2px] w-10" style={{ backgroundColor: GOLD }} />

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

          {/* Heading and description */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <h2 className="max-w-[780px] font-heading text-[39px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[64px]">
              {title}
              <span className="mt-1 block" style={{ color: GOLD }}>
                {highlight}
              </span>
            </h2>

            {description && (
              <div className="relative max-w-[480px] lg:justify-self-end lg:pb-2">
                <div className="absolute -left-5 top-1 hidden h-[calc(100%-8px)] w-px bg-[#D99B27]/40 lg:block" />

                <span
                  className="mb-5 block h-[3px] w-12 lg:hidden"
                  style={{ backgroundColor: GOLD }}
                />

                <p className="text-[15px] leading-[1.9] text-[#667085] sm:text-[16px] lg:text-[17px]">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Premium challenge collection */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {cards.map((card, index) => (
            <article
              key={card.number || index}
              className={[
                "group relative isolate min-h-[420px] overflow-hidden rounded-[5px] bg-[#03101E]",
                "shadow-[0_15px_45px_rgba(3,16,30,0.09)]",
                "transition-all duration-500 hover:shadow-[0_22px_55px_rgba(3,16,30,0.17)]",
                "sm:min-h-[450px] lg:min-h-[440px]",
                cardLayouts[index] || "lg:col-span-6",
              ].join(" ")}
            >
              {/* Full-bleed image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.06]"
                style={{
                  backgroundImage: `url("${card.image}")`,
                }}
              />

              {/* Cinematic overlays */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020D18]/15 via-[#020D18]/10 to-[#020D18]/95"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020D18]/35 via-transparent to-transparent"
              />

              {/* Fine border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 border border-white/15 transition-all duration-500 group-hover:inset-4 group-hover:border-[#F4A019]/45"
              />

              {/* Top metadata */}
              <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-9 sm:right-9 sm:top-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75">
                  Leadership challenge
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-px w-5 bg-[#F4A019]" />
                  <span className="text-[11px] tracking-[0.16em] text-white/65">
                    {card.number}
                  </span>
                </span>
              </div>

              {/* Main content */}
              <div className="absolute inset-x-0 bottom-0 px-7 pb-9 pt-24 sm:px-9 sm:pb-10">
                {/* Large background number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[125px] right-7 font-heading text-[120px] font-light leading-none tracking-[-0.08em] text-white/[0.12] sm:right-9 sm:text-[150px]"
                >
                  {card.number}
                </span>

                <div className="relative z-10 max-w-[520px]">
                  {/* Gold detail */}
                  <span
                    className="mb-5 block h-[2px] w-12 transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: GOLD }}
                  />

                  <h3 className="max-w-[450px] font-heading text-[25px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[32px]">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-[450px] text-[14px] leading-[1.85] text-white/75 sm:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom gold edge */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 group-hover:w-full"
                style={{ backgroundColor: GOLD }}
              />
            </article>
          ))}
        </div>

        {/* Section footer */}
        <div className="mt-10 flex items-center justify-between border-t border-[#D99B27]/20 pt-6 sm:mt-14 sm:pt-7">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8991A0] sm:text-[11px]">
            Understanding the challenges
          </span>

          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D99B27]/50" />
            <span
              className="h-2 w-2 rotate-45"
              style={{ backgroundColor: GOLD }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
