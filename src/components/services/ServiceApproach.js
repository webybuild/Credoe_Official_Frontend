"use client";

import Link from "next/link";

const GOLD = "#F4A019";

function StepIcon({ index }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const iconIndex =
    Number.isInteger(index) && index >= 0 && index <= 3 ? index : 0;

  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true" {...common}>
      {/* 01. DISCOVERY: Focus and insight */}
      {iconIndex === 0 && (
        <>
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="9" />
          <circle cx="24" cy="24" r="3" />
          <path d="M24 5v4M24 39v4M5 24h4M39 24h4" />
        </>
      )}

      {/* 02. ENGAGEMENT: Connection and alignment */}
      {iconIndex === 1 && (
        <>
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="15" r="3.5" />
          <circle cx="14" cy="30" r="3.5" />
          <circle cx="34" cy="30" r="3.5" />
          <path d="m22 18-6 9M26 18l6 9M18 30h12" />
        </>
      )}

      {/* 03. EVALUATION: Structure and precision */}
      {iconIndex === 2 && (
        <>
          <rect x="9" y="9" width="30" height="30" rx="3" />
          <path d="M16 17h16M16 24h10" />
          <path d="m16 31 4 4 9-9" />
        </>
      )}

      {/* 04. PARTNERSHIP: Continuity and trust */}
      {iconIndex === 3 && (
        <>
          <circle cx="24" cy="24" r="15" />
          <path d="m13 25 7-7 7 7-7 7-7-7Z" />
          <path d="m21 25 7-7 7 7-7 7-7-7Z" />
        </>
      )}
    </svg>
  );
}

export default function ServiceApproach({
  sectionNumber,
  eyebrow,
  title,
  highlight,
  description,
  cards = [],
  ctaLabel,
  ctaHref,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07172B] py-20 text-white sm:py-24 lg:py-28">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 -top-64 -z-10 h-[750px] w-[750px] rounded-full border border-white/[0.055]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 -z-10 h-[500px] w-[500px] rounded-full border border-[#F4A019]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#F4A019]/[0.035] blur-[100px]"
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28">
          {/* LEFT: Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Eyebrow */}
            <div className="mb-9 flex items-center gap-4">
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

              <span className="h-9 w-px bg-[#F4A019]/30" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.23em] text-white/55 sm:text-[13px]">
                {eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] font-heading text-[42px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[52px] lg:text-[58px] xl:text-[64px]">
              {title}
              <span className="mt-2 block" style={{ color: GOLD }}>
                {highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[490px] text-[15px] leading-[1.95] text-white/60 sm:text-[16px] lg:text-[17px]">
              {description}
            </p>

            {/* Decorative line */}
            <div className="mt-9 flex items-center gap-3">
              <span
                className="h-[2px] w-14"
                style={{ backgroundColor: GOLD }}
              />
              <span className="h-[2px] w-5 bg-white/20" />
              <span className="h-[2px] w-2 bg-white/10" />
            </div>

            {/* CTA */}
            {ctaHref && ctaLabel && (
              <Link
                href={ctaHref}
                className="group mt-9 inline-flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.19em] text-white/75 transition-colors duration-300 hover:text-[#F4A019] sm:text-[12px]"
              >
                <span>{ctaLabel}</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F4A019]/50 text-[#F4A019] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#F4A019] group-hover:text-[#07172B]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )}

            {/* Small signature */}
            <div className="mt-14 hidden border-t border-white/10 pt-5 sm:block lg:mt-20">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                A considered approach to exceptional leadership
              </span>
            </div>
          </div>

          {/* RIGHT: Process timeline */}
          <div className="relative">
            <div className="space-y-4 sm:space-y-5">
              {cards.map((card, index) => (
                <article
                  key={card.number || index}
                  className="group relative grid grid-cols-[52px_1fr] gap-4 sm:grid-cols-[64px_1fr] sm:gap-6"
                >
                  {/* Connecting line between circles */}
                  {index < cards.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[25px] top-[52px] z-0 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-[#F4A019]/70 via-white/15 to-[#F4A019]/20 sm:left-[31px] sm:top-[59px] sm:h-[calc(100%+1.25rem)]"
                    />
                  )}

                  {/* Timeline marker */}
                  <div className="relative z-10 flex justify-center pt-7">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#F4A019]/35 bg-[#07172B] text-[#F4A019] transition-all duration-500 group-hover:border-[#F4A019] group-hover:bg-[#F4A019] group-hover:text-[#07172B] sm:h-[62px] sm:w-[62px]">
                      <span className="font-heading text-[14px] font-medium tracking-wide">
                        {card.number || String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Process content */}
                  <div className="relative overflow-hidden border border-white/[0.09] bg-white/[0.035] px-5 py-6 transition-all duration-500 group-hover:border-[#F4A019]/30 group-hover:bg-white/[0.065] sm:px-8 sm:py-8">
                    {/* Hover accent */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: GOLD }}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F4A019]/75 sm:text-[10px]">
                          {card.label || `PHASE ${index + 1}`}
                        </span>

                        <h3 className="mt-3 font-heading text-[22px] font-medium leading-tight text-white sm:text-[26px]">
                          {card.title}
                        </h3>
                      </div>

                      {/* Unified geometric icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#F4A019]/20 text-[#F4A019] transition-all duration-500 group-hover:border-[#F4A019]/60 group-hover:bg-[#F4A019]/10 sm:h-14 sm:w-14">
                        <StepIcon index={index} />
                      </div>
                    </div>

                    <p className="mt-4 max-w-[510px] text-[13px] leading-[1.85] text-white/55 sm:text-[14px] sm:leading-[1.9]">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom signature */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 lg:mt-20">
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
            Insight. Precision. Partnership.
          </span>

          <span className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#F4A019]/50" />
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
