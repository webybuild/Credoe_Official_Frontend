"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GOLD = "#F5A623";
const SLIDE_DURATION = 6500;

const defaultTestimonials = [
  {
    quote:
      "Andre Dyer of Credo Talent Solutions is an exceptional recruiting partner. His ability to attract top talent, understand business needs, and build lasting relationships has strengthened WC Bradley’s talent acquisition efforts. His professionalism, responsiveness, and commitment to excellence are unmatched.",
    name: "A. Fair",
    role: "Sr. HR. Director, Talent, L&D",
    company: "W.C. Bradley",
  },
  {
    quote:
      "Andre invests in people. He took the time to truly understand me, and he does the same with every company he works with, from its culture to what each role requires. When I was deciding between two opportunities, he helped me see which one was the right fit. That trust has lasted long after the search, and he's still the first person I turn to for career advice.",
    name: "L. Raymond",
    role: "Enterprise Marketing & AI, Digital Executive",
    company: "Formerly Prudential, Bank of America",
  },
  {
    quote:
      "Andre Dyer is an exceptional recruiting partner who combines deep business insight, thoughtful candidate assessment, and genuine commitment to identifying leaders who align with organizational culture, strengthen teams, and deliver lasting business impact.",
    name: "J. Meraz",
    role: "VP, Finance & Accounting",
    company: "W.C. Bradley",
  },
];

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-[18px] w-[18px] ${
        direction === "left" ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 12h14m-6-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 60 48"
      fill="currentColor"
      aria-hidden="true"
      className="h-7 w-9 sm:h-10 sm:w-12"
      style={{ color: GOLD }}
    >
      <path d="M4 23C4 9 12 2 27 0v9C19 11 15 16 15 23h12v25H3V24zm32 0C36 9 44 2 59 0v9c-8 2-12 7-12 14h12v25H35V24z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="block h-3.5 w-3.5 shrink-0"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 11v5M12 8h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Full testimonial modal */
function TestimonialModal({ testimonial, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-y-auto bg-[#020914]/80 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="testimonial-modal-title"
        className="relative my-auto w-full max-w-[680px] cursor-auto overflow-hidden rounded-xl border border-white/10 bg-[#081B30] shadow-[0_25px_100px_rgba(0,0,0,0.5)] sm:rounded-2xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#F5A623]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.06]"
        />

        {/* Modal header */}
        <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8 sm:py-6">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 shrink-0 bg-[#F5A623]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F5A623] sm:text-[10px]">
                Client Testimonial
              </span>
            </div>

            <h2
              id="testimonial-modal-title"
              className="mt-2 font-heading text-[20px] font-medium text-white sm:text-[27px]"
            >
              A Client Perspective
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close testimonial"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#061426] sm:h-10 sm:w-10 font-[var(--font-button)]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Full testimonial content */}
        <div className="relative max-h-[65vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-9">
          <QuoteMark />

          <blockquote className="mt-4 sm:mt-5">
            <p className="font-heading text-[17px] font-medium leading-[1.65] tracking-[-0.015em] text-white sm:text-[23px] sm:leading-[1.7]">
              “{testimonial.quote}”
            </p>
          </blockquote>

          <div className="mt-6 h-px w-12 bg-[#F5A623] sm:mt-7" />

          {/* Client details */}
          <div className="mt-5 sm:mt-6">
            <p className="font-heading text-[21px] font-semibold leading-tight tracking-[-0.02em] text-[#F5A623] sm:text-[28px]">
              {testimonial.company}
            </p>

            <div className="mt-4">
              <h3 className="font-heading text-[18px] font-medium text-white sm:text-[21px]">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-[11px] leading-relaxed text-white/65 sm:text-[12px]">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="relative flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-8">
          <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-white/35 sm:text-[9px]">
            Credoe Talent Solutions
          </span>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F5A623] transition-colors hover:text-white sm:text-[11px] font-[var(--font-button)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function AnimatedTestimonial({ testimonial, slideDirection, onReadFull }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;

    if (!element || typeof element.animate !== "function") return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const startX = slideDirection === "previous" ? -24 : 24;

    const animation = element.animate(
      [
        {
          opacity: 0,
          transform: `translate3d(${startX}px, 8px, 0)`,
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        },
      ],
      {
        duration: 550,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      },
    );

    return () => animation.cancel();
  }, [testimonial, slideDirection]);

  return (
    <div
      ref={contentRef}
      className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto] items-center gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:grid-rows-1 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-14"
    >
      {/* Main testimonial */}
      <div className="flex min-h-0 min-w-0 flex-col justify-center">
        <QuoteMark />

        <blockquote className="mt-3 sm:mt-4">
          <p className="line-clamp-4 font-heading text-[15px] font-medium leading-[1.5] tracking-[-0.015em] text-white sm:line-clamp-3 sm:text-[19px] sm:leading-[1.5] lg:text-[22px] xl:text-[24px]">
            “{testimonial.quote}”
          </p>
        </blockquote>

        <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-4">
          <span className="h-[2px] w-7 shrink-0 bg-[#F5A623] sm:w-12" />

          <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-white/45 sm:text-[10px] sm:tracking-[0.24em]">
            A Client Perspective
          </span>

          <button
            type="button"
            onClick={onReadFull}
            aria-label="Read full testimonial"
            title="Read full testimonial"
            className="group inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#F5A623]/60 bg-[#F5A623]/[0.10] px-3 text-[9px] font-bold uppercase leading-none tracking-[0.11em] text-[#F5A623] shadow-[0_2px_8px_rgba(245,166,35,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#061426] hover:shadow-[0_4px_12px_rgba(245,166,35,0.16)] sm:h-9 sm:gap-2 sm:px-3.5 sm:text-[10px] font-[var(--font-button)]"
          >
            <InfoIcon />
            <span className="block leading-none">Read Full</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="block h-3.5 w-3.5 shrink-0"
            >
              <path
                d="M5 12h14m-6-5 6 5-6 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Client identity */}
      <aside className="relative flex min-h-[125px] min-w-0 flex-col justify-center gap-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-4 sm:min-h-[150px] sm:gap-5 sm:p-5 lg:min-h-[220px] lg:justify-between lg:rounded-xl lg:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#F5A623]/20"
        />

        {/* Company name */}
        <div className="relative min-w-0 border-b border-white/10 pb-3 sm:pb-4 lg:pb-5">
          <div className="mb-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#F5A623] sm:text-[9px] sm:tracking-[0.2em]">
            Client Recognition
          </div>

          <p className="break-words font-heading text-[19px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#F5A623] sm:text-[25px] lg:text-[28px]">
            {testimonial.company}
          </p>
        </div>

        {/* Client details */}
        <div className="relative min-w-0 lg:mt-5">
          <h3 className="line-clamp-2 font-heading text-[18px] font-medium leading-tight text-white sm:text-[23px] lg:text-[25px]">
            {testimonial.name}
          </h3>

          <p className="mt-1.5 line-clamp-2 break-words text-[10px] leading-[1.6] text-white/65 sm:text-[12px] sm:leading-5">
            {testimonial.role}
          </p>

          <div className="mt-3 h-px w-8 bg-[#F5A623] lg:mt-4 lg:w-10" />
        </div>
      </aside>
    </div>
  );
}

export default function ClientSuccessSection({
  testimonials: testimonialItems = defaultTestimonials,
}) {
  const testimonials = Array.isArray(testimonialItems)
    ? testimonialItems.filter((item) => item && item.quote && item.name)
    : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const progressRef = useRef(null);

  const totalTestimonials = testimonials.length;

  // Keep the active index valid if CMS content changes.
  useEffect(() => {
    setActiveIndex((current) =>
      totalTestimonials === 0 ? 0 : current % totalTestimonials,
    );
  }, [totalTestimonials]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const next = useCallback(() => {
    if (totalTestimonials <= 1) return;

    setSlideDirection("next");
    setActiveIndex((current) => (current + 1) % totalTestimonials);
  }, [totalTestimonials]);

  const previous = useCallback(() => {
    if (totalTestimonials <= 1) return;

    setSlideDirection("previous");
    setActiveIndex(
      (current) => (current - 1 + totalTestimonials) % totalTestimonials,
    );
  }, [totalTestimonials]);

  // Automatically change testimonials every 6.5 seconds.
  // Hovering over the section does not pause the slider.
  useEffect(() => {
    if (isModalOpen || totalTestimonials <= 1) {
      return undefined;
    }

    const timer = setTimeout(next, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, isModalOpen, next, totalTestimonials]);

  // Animated progress indicator.
  useEffect(() => {
    const bar = progressRef.current;

    if (!bar || typeof bar.animate !== "function") return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      bar.style.transform = "scaleX(1)";
      return undefined;
    }

    const animation = bar.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      {
        duration: SLIDE_DURATION,
        easing: "linear",
        fill: "forwards",
      },
    );

    if (isModalOpen) {
      animation.pause();
    }

    return () => animation.cancel();
  }, [activeIndex, isModalOpen]);

  if (totalTestimonials === 0) return null;

  const activeTestimonial = testimonials[activeIndex] || testimonials[0];

  return (
    <>
      <section
        id="testimonials"
        className="relative isolate overflow-hidden bg-[#061426] text-white"
      >
        {/* Background atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_45%,rgba(25,56,88,0.55),transparent_55%)]" />

          <div className="absolute -right-[220px] -top-[200px] h-[500px] w-[500px] rounded-full border border-white/[0.045] sm:h-[600px] sm:w-[600px]" />

          <div className="absolute -right-[150px] -top-[140px] h-[390px] w-[390px] rounded-full border border-[#F5A623]/[0.09] sm:h-[460px] sm:w-[460px]" />

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent" />
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-[1500px] px-6 pb-12 pt-12 sm:px-8 sm:pb-12 sm:pt-12 lg:px-12 lg:pb-14 lg:pt-14 xl:px-14 xl:pb-16 xl:pt-16">
          {/* Header */}
          <header className="mb-4 flex flex-col justify-between gap-4 sm:mb-5 sm:gap-5 lg:mb-5 lg:flex-row lg:items-end">
            <div className="max-w-[760px] min-w-0">
              {/* Section label */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="relative top-[-1px] h-[7px] w-[7px] shrink-0 rotate-45 rounded-[1px] bg-[#F5A623] shadow-[0_0_10px_rgba(245,166,35,0.25)]"
                />

                <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.2em] text-[#F5A623] sm:text-xs">
                  Client Success Stories
                </p>
              </div>

              <h2 className="mt-3 font-heading text-[29px] font-medium leading-[1.14] tracking-[-0.035em] text-white sm:mt-4 sm:text-[42px] lg:text-[52px] xl:text-[58px]">
                Trust is built
                <br />
                through <span className="text-[#F5A623]">results.</span>
              </h2>

              <p className="mt-2 max-w-[540px] text-[11px] leading-[1.75] text-white/60 sm:mt-3 sm:text-[14px] sm:leading-[1.8] lg:text-[15px]">
                We partner with organizations to deliver exceptional talent and
                measurable impact. Here’s what our clients have to say about
                their experience with us.
              </p>
            </div>

            {/* Top-right navigation */}
            <div className="flex shrink-0 items-center justify-between gap-4 lg:pb-2">
              <div className="flex items-end gap-2">
                <span className="w-[3ch] font-heading text-[34px] leading-none tabular-nums text-[#F5A623] sm:text-[42px]">
                  {formatNumber(activeIndex + 1)}
                </span>

                <div className="mb-1 min-w-0">
                  <div className="h-px w-8 bg-white/30" />

                  <p className="mt-1.5 whitespace-nowrap text-[8px] uppercase tracking-[0.15em] text-white/45 sm:text-[9px] sm:tracking-[0.18em]">
                    Of {formatNumber(totalTestimonials)} Stories
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  disabled={totalTestimonials <= 1}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#061426] disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10 font-[var(--font-button)]"
                >
                  <ArrowIcon direction="left" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  disabled={totalTestimonials <= 1}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#061426] disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10 font-[var(--font-button)]"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </header>

          {/* Featured testimonial */}
          <div className="relative h-[420px] border-y border-white/10 py-4 sm:h-[460px] sm:py-6 lg:h-[320px] lg:py-6 xl:h-[340px]">
            <AnimatedTestimonial
              key={activeTestimonial.name}
              testimonial={activeTestimonial}
              slideDirection={slideDirection}
              onReadFull={openModal}
            />
          </div>

          {/* Bottom progress and current position */}
          <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <span className="font-heading text-[14px] tabular-nums text-[#F5A623] sm:text-[17px]">
                {formatNumber(activeIndex + 1)}
              </span>

              <div className="h-px w-7 bg-white/20 sm:w-12" />

              <span className="font-heading text-[12px] tabular-nums text-white/45 sm:text-[15px]">
                {formatNumber(totalTestimonials)}
              </span>

              <span className="hidden text-[9px] uppercase tracking-[0.16em] text-white/35 sm:inline">
                Client stories
              </span>
            </div>

            <div className="flex h-[2px] w-10 shrink-0 overflow-hidden bg-white/15 sm:w-24 lg:w-28">
              <div
                ref={progressRef}
                className="h-full origin-left bg-[#F5A623]"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full testimonial modal */}
      {isModalOpen && (
        <TestimonialModal
          testimonial={activeTestimonial}
          onClose={closeModal}
        />
      )}
    </>
  );
}
