"use client";

import Image from "next/image";
import Link from "next/link";

const IMAGE = "/images/leadership-cta-chess.png";

export default function ServiceCTA({
  eyebrow = "LET'S MOVE FORWARD",
  title = "Ready to find",
  highlight = "the right leaders?",
  description = "Partner with Credoe to access exceptional talent, build future-ready leadership, and drive lasting impact.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF9F6] text-[#07172B]">
      {/* Desktop layout */}
      <div className="relative mx-auto hidden min-h-[490px] max-w-[1920px] items-center lg:flex xl:min-h-[530px]">
        {/* Right-side image, completely visible */}
        <div className="absolute inset-y-0 right-0 w-[57%]">
          <Image
            src={IMAGE}
            alt="Gold chess king symbolizing strategic leadership"
            fill
            sizes="57vw"
            className="object-cover object-[62%_center]"
          />

          {/* Only a narrow transition at the image boundary */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#FAF9F6] to-transparent"
          />

          {/* Subtle gold decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-52 h-[650px] w-[650px] rounded-full border border-[#F4A019]/30"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-32 h-[430px] w-[430px] rounded-full border border-[#F4A019]/25"
          />
        </div>

        {/* Left content */}
        <div className="relative z-10 w-[55%] py-16 pl-[6.8%] pr-8 xl:py-20">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-5">
            <span className="h-[2px] w-12 bg-[#F4A019]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#78849B]">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[590px] font-heading text-[46px] font-medium leading-[1.08] tracking-[-0.035em] xl:text-[56px]">
            {title}
            <span className="mt-1 block">
              {highlight.split(" ").map((word, index, words) => (
                <span
                  key={`${word}-${index}`}
                  className={
                    index === words.length - 1
                      ? "text-[#F4A019]"
                      : "text-[#07172B]"
                  }
                >
                  {word}
                  {index !== words.length - 1 ? " " : ""}
                </span>
              ))}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[510px] text-[15px] leading-[1.8] text-[#78849B] xl:text-[16px]">
            {description}
          </p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              href={buttonHref}
              className="group inline-flex min-h-[54px] items-center gap-5 rounded-full border border-[#F4A019] bg-[#07172B] px-7 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#F4A019] hover:text-[#07172B]"
            >
              <span>{buttonText}</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M4 12h15M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile and tablet layout */}
      <div className="lg:hidden">
        {/* Text content */}
        <div className="px-5 pb-9 pt-12 sm:px-8 sm:pb-11 sm:pt-14">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#F4A019]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#78849B]">
              {eyebrow}
            </span>
          </div>

          <h2 className="max-w-[540px] font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.035em] text-[#07172B] sm:text-[48px]">
            {title}
            <span className="mt-1 block">
              {highlight.split(" ").map((word, index, words) => (
                <span
                  key={`${word}-${index}`}
                  className={
                    index === words.length - 1
                      ? "text-[#F4A019]"
                      : "text-[#07172B]"
                  }
                >
                  {word}
                  {index !== words.length - 1 ? " " : ""}
                </span>
              ))}
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[14px] leading-[1.8] text-[#78849B] sm:text-[15px]">
            {description}
          </p>

          <div className="mt-7">
            <Link
              href={buttonHref}
              className="group inline-flex min-h-[52px] items-center gap-4 rounded-full border border-[#F4A019] bg-[#07172B] px-6 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#F4A019] hover:text-[#07172B]"
            >
              <span>{buttonText}</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M4 12h15M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[240px] w-full sm:h-[330px]">
          <Image
            src={IMAGE}
            alt="Gold chess king symbolizing strategic leadership"
            fill
            sizes="100vw"
            className="object-cover object-[65%_center]"
          />
        </div>
      </div>
    </section>
  );
}
