"use client";

import { useEffect, useRef, useState } from "react";

const GOLD = "#F4A019";

const testimonials = [
  {
    quote:
      "Andre invests in people. He took the time to truly understand me, and he does the same with every company he works with, from its culture to what each role requires. When I was deciding between two opportunities, he helped me see which one was the right fit. That trust has lasted long after the search, and he's still the first person I turn to for career advice.",
    name: "L. Raymond",
    role: "Enterprise Marketing & AI, Digital Executive",
    company: "Formerly at Prudential and Bank of America",
    logo: "prudential",
    logoImages: ["/images/prudential.jpeg", "/images/bankofamerica.jpeg"],
  },
  {
    quote:
      "Andre Dyer is an exceptional recruiting partner who combines deep business insight, thoughtful candidate assessment, and genuine commitment to identifying leaders who align with organizational culture, strengthen teams, and deliver lasting business impact.",
    name: "J. Meraz",
    role: "VP, Finance & Accounting",
    company: "W.C. Bradley Co.",
    logo: "wcbradley",
    logoImages: ["/images/bradley.jpeg"],
  },
  {
    quote:
      "The professionalism, dedication, and strategic approach of Credoe Talent Solutions sets them apart. They are a trusted partner in our leadership journey.",
    name: "Jennifer Lee",
    role: "Senior Vice President, Talent Management",
    company: "PNC Bank",
    logo: "pnc",
  },
  {
    quote:
      "Credoe brought a thoughtful, strategic approach to our talent needs. Their understanding of leadership and culture made a meaningful difference.",
    name: "Michael Roberts",
    role: "Executive Leadership",
    company: "Johnson & Johnson",
    logo: "jnj",
  },
  {
    quote:
      "The quality of candidates and the care taken throughout the process made Credoe a valuable partner for our organization.",
    name: "Sarah Williams",
    role: "Talent Acquisition Leader",
    company: "AbbVie",
    logo: "abbvie",
  },
];

const trustedCompanies = [
  { name: "Microsoft", logo: "microsoft" },
  { name: "Johnson & Johnson", logo: "jnj" },
  { name: "Verizon", logo: "verizon" },
  { name: "PNC", logo: "pnc" },
  { name: "AbbVie", logo: "abbvie" },
  { name: "Caterpillar", logo: "caterpillar" },
];

function MicrosoftMark() {
  return (
    <span
      aria-hidden="true"
      className="inline-grid h-7 w-7 shrink-0 grid-cols-2 grid-rows-2 gap-[2px]"
    >
      <span className="bg-[#F25022]" />
      <span className="bg-[#7FBA00]" />
      <span className="bg-[#00A4EF]" />
      <span className="bg-[#F4A019]" />
    </span>
  );
}

function CompanyLogo({ type, compact = false }) {
  const textSize = compact ? "text-[19px]" : "text-[24px]";

  if (type === "microsoft") {
    return (
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        <MicrosoftMark />
        <span
          className={`${
            compact ? "text-[14px]" : "text-[22px]"
          } font-medium tracking-tight text-[#5E6674]`}
        >
          Microsoft
        </span>
      </span>
    );
  }

  if (type === "verizon") {
    return (
      <span
        className={`${textSize} whitespace-nowrap font-extrabold tracking-[-0.07em] text-[#080E20]`}
      >
        verizon<span className="text-[#E82127]">✓</span>
      </span>
    );
  }

  if (type === "pnc") {
    return (
      <span className="inline-flex items-center gap-1 whitespace-nowrap">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F36C21] text-[16px] font-bold text-white">
          ◈
        </span>
        <span
          className={`${textSize} font-serif tracking-tight text-[#07519C]`}
        >
          PNC
        </span>
      </span>
    );
  }

  if (type === "jnj") {
    return (
      <span
        className={`${
          compact ? "text-[15px]" : "text-[19px]"
        } max-w-[145px] text-center font-serif font-bold leading-[0.95] text-[#E31837]`}
      >
        Johnson &amp;
        <br />
        Johnson
      </span>
    );
  }

  if (type === "abbvie") {
    return (
      <span
        className={`${textSize} whitespace-nowrap font-medium tracking-[-0.06em] text-[#071E5B]`}
      >
        abbVie
      </span>
    );
  }

  return (
    <span
      className={`${
        compact ? "text-[13px]" : "text-[18px]"
      } whitespace-nowrap font-black uppercase tracking-[-0.06em] text-[#111827]`}
    >
      <span style={{ color: GOLD }}>▲</span>
      CATERPILLAR
      <sup className="text-[8px]">®</sup>
    </span>
  );
}

function TestimonialBrandLogo({ testimonial, compact = false }) {
  if (testimonial.logoImages?.length) {
    return (
      <span
        className={`flex items-center justify-center ${
          compact ? "gap-1" : "gap-2"
        }`}
        aria-label={`${testimonial.company} logos`}
      >
        {testimonial.logoImages.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className={
              compact
                ? "h-5 max-w-[38px] object-contain"
                : "h-7 max-w-[54px] object-contain"
            }
          />
        ))}
      </span>
    );
  }

  if (testimonial.logo === "microsoft") {
    return <MicrosoftMark />;
  }

  return <CompanyLogo type={testimonial.logo} compact />;
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 44 36"
      fill="currentColor"
      aria-hidden="true"
      className="h-8 w-10 shrink-0"
      style={{ color: GOLD }}
    >
      <path d="M3 17C3 7 9 2 19 1v7c-5 1-7 4-7 8h7v17H2V18zm23 0C26 7 32 2 42 1v7c-5 1-7 4-7 8h7v17H25V18z" />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="M5 12h14m-6-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 11v5m0-8h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TestimonialCard({ testimonial, onViewFull }) {
  return (
    <article className="flex h-full min-h-[350px] flex-col rounded-[14px] border border-[#E9E9E9] bg-white p-6 shadow-[0_3px_16px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <QuoteIcon />

        <button
          type="button"
          onClick={() => onViewFull(testimonial)}
          aria-label={`Read full testimonial from ${testimonial.name}`}
          title="Read full testimonial"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E7E7E7] text-[#536176] transition duration-200 hover:border-[#F4B400] hover:bg-[#FFF8E5] hover:text-[#9B7000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        >
          <InfoIcon />
        </button>
      </div>

      <div className="mt-4 min-h-[90px]">
        <p className="line-clamp-3 overflow-hidden text-[15px] leading-[1.8] text-[#17243A] sm:text-[16px]">
          {testimonial.quote}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onViewFull(testimonial)}
        className="mt-2 w-fit text-left text-[12px] font-semibold transition-colors hover:underline"
        style={{ color: "#F4A019" }}
      >
        Read full testimonial
      </button>

      <div
        className="mb-5 mt-5 h-px w-[42px] shrink-0"
        style={{ backgroundColor: GOLD }}
      />

      <div className="mt-auto flex min-h-[72px] items-center gap-3">
        <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#EEEEEE] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          <TestimonialBrandLogo testimonial={testimonial} compact />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[14px] font-semibold text-[#111827]">
            {testimonial.name}
          </h3>

          <p
            className="mt-1 line-clamp-2 min-h-[32px] text-[12px] leading-4 text-[#354158]"
            title={testimonial.role}
          >
            {testimonial.role}
          </p>

          <p className="mt-1 text-[12px] leading-4 text-[#354158]">
            {testimonial.company}
          </p>
        </div>

        <div className="hidden min-w-[90px] shrink-0 items-center justify-center border-l border-[#D9DDE3] pl-3 md:flex">
          <TestimonialBrandLogo testimonial={testimonial} compact />
        </div>
      </div>
    </article>
  );
}

function TestimonialModal({ testimonial, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!testimonial || !modalRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return undefined;

    const animation = modalRef.current.animate(
      [
        { opacity: 0, transform: "translateY(12px) scale(0.98)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      {
        duration: 220,
        easing: "ease-out",
        fill: "both",
      },
    );

    return () => animation.cancel();
  }, [testimonial]);

  useEffect(() => {
    if (!testimonial) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#050A18]/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="testimonial-modal-title"
        className="relative my-auto w-full max-w-[600px] rounded-2xl bg-white p-6 shadow-2xl sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close testimonial"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E7E7] text-2xl text-[#536176] transition hover:bg-[#FFF8E5] hover:text-[#9B7000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="pr-10">
          <QuoteIcon />

          <p
            className="mt-5 text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: "#D98900" }}
          >
            Client Success Story
          </p>

          <h2
            id="testimonial-modal-title"
            className="mt-2 text-2xl font-semibold leading-tight text-[#0C1A32] sm:text-3xl"
          >
            What our client says
          </h2>
        </div>

        <p className="mt-6 whitespace-pre-line text-[15px] leading-8 text-[#354158] sm:text-base">
          {testimonial.quote}
        </p>

        <div className="my-7 h-px w-full bg-[#EAEAEA]" />

        <div className="flex items-center gap-4">
          <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#EEEEEE] bg-white p-1">
            <TestimonialBrandLogo testimonial={testimonial} compact />
          </div>

          <div className="min-w-0">
            <p className="font-semibold text-[#111827]">{testimonial.name}</p>

            <p className="mt-1 text-sm text-[#536176]">{testimonial.role}</p>

            <p className="mt-1 text-sm font-medium text-[#17243A]">
              {testimonial.company}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-lg px-5 py-3 text-sm font-semibold text-[#111827] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
          style={{ backgroundColor: GOLD }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ClientSuccessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const carouselTrackRef = useRef(null);

  useEffect(() => {
    if (isPaused || selectedTestimonial) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, selectedTestimonial]);

  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return undefined;

    const animation = track.animate(
      [
        { opacity: 0, transform: "translateX(44px)" },
        { opacity: 1, transform: "translateX(0)" },
      ],
      {
        duration: 650,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      },
    );

    return () => animation.cancel();
  }, [activeIndex]);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(activeIndex + offset) % testimonials.length],
  );

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#FCFCFB] text-[#0D1B32]"
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] top-[120px] -z-10 h-[550px] w-[550px] rounded-full border"
        style={{ borderColor: `${GOLD}26` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[240px] top-[180px] -z-10 h-[430px] w-[430px] rounded-full border"
        style={{ borderColor: `${GOLD}26` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[300px] top-0 -z-10 h-[650px] w-[650px] rounded-full border"
        style={{ borderColor: `${GOLD}33` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[230px] top-[60px] -z-10 h-[510px] w-[510px] rounded-full border"
        style={{ borderColor: `${GOLD}26` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[160px] top-[120px] -z-10 h-[370px] w-[370px] rounded-full border"
        style={{ borderColor: `${GOLD}26` }}
      />

      {/* Main testimonial content */}
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 lg:px-12 lg:pb-9 lg:pt-[50px]">
        <header className="mx-auto max-w-[900px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10" style={{ backgroundColor: GOLD }} />

            <p
              className="text-[13px] font-medium uppercase tracking-wide sm:text-[15px]"
              style={{ color: "#D98900" }}
            >
              Client Success Stories
            </p>

            <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
          </div>

          <h2 className="mt-4 font-heading text-[36px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#0C1A32] sm:text-[44px] lg:text-[52px]">
            What Leaders Say
            <br />
            About Working with <span style={{ color: "#D98900" }}>Credoe.</span>
          </h2>

          <div
            className="mx-auto mt-5 h-px w-[42px]"
            style={{ backgroundColor: GOLD }}
          />

          <p className="mx-auto mt-4 max-w-[800px] text-[15px] leading-[1.75] text-[#18253A] sm:text-[18px]">
            We partner with organizations to deliver exceptional talent and
            measurable impact.
            <br className="hidden sm:block" />
            Here’s what our clients have to say about their experience with us.
          </p>
        </header>

        {/* Carousel */}
        <div
          className="relative mt-8 sm:mt-10 lg:mt-9"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            key={activeIndex}
            ref={carouselTrackRef}
            className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6"
          >
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                onViewFull={setSelectedTestimonial}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9E9E9] bg-white text-[#536176] shadow-[0_3px_15px_rgba(0,0,0,0.08)] transition duration-300 hover:scale-105 hover:border-[#F4B400] hover:text-[#9B7000] sm:-left-5 sm:h-[54px] sm:w-[54px] lg:-left-6"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9E9E9] bg-white text-[#536176] shadow-[0_3px_15px_rgba(0,0,0,0.08)] transition duration-300 hover:scale-105 hover:border-[#F4B400] hover:text-[#9B7000] sm:-right-5 sm:h-[54px] sm:w-[54px] lg:-right-6"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-7 flex items-center justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-[11px] w-[11px] rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "scale-110"
                  : "bg-[#D6D7D9] hover:bg-[#B6B8BC]"
              }`}
              style={
                activeIndex === index ? { backgroundColor: GOLD } : undefined
              }
            />
          ))}
        </div>

        {/* View all */}
        <div className="mt-7 flex justify-center">
          <a
            href="/testimonials"
            className="group inline-flex min-h-[54px] items-center justify-center gap-4 rounded-[11px] border px-7 py-3 text-[13px] font-medium uppercase tracking-wide transition duration-300 hover:bg-[#F4B400] hover:text-[#111827] sm:px-8 sm:text-[14px]"
            style={{ borderColor: GOLD, color: "black" }}
          >
            View All Testimonials
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon direction="right" />
            </span>
          </a>
        </div>
      </div>

      {/* Trusted organizations */}
      <div className="border-t border-[#EAEAEA]">
        <div className="mx-auto max-w-[1450px] px-5 pb-10 pt-6 sm:px-8 sm:pb-12">
          <div className="flex items-center justify-center gap-5">
            <span
              className="hidden h-px w-16 sm:block"
              style={{ backgroundColor: `${GOLD}B3` }}
            />

            <h3
              className="text-center text-[12px] font-medium uppercase tracking-wide sm:text-[14px]"
              style={{ color: "#D98900" }}
            >
              Trusted by Leading Organizations
            </h3>

            <span
              className="hidden h-px w-16 sm:block"
              style={{ backgroundColor: `${GOLD}B3` }}
            />
          </div>

          <div className="mt-7 grid grid-cols-2 items-center gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
            {trustedCompanies.map((company, index) => (
              <div
                key={company.name}
                className={`flex min-h-[42px] items-center justify-center px-3 ${
                  index !== 0 ? "lg:border-l lg:border-[#D9DDE3]" : ""
                }`}
              >
                <CompanyLogo type={company.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full testimonial modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </section>
  );
}
