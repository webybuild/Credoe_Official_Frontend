import Link from "next/link";

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="19" />
      <path d="M24 13v12l8 5" />
      <path d="M18 3h12" />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      )}
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 2 2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2Z" />
      <path d="m19 15 1.2 3.8L24 20l-3.8 1.2L19 25" />
    </svg>
  );
}

export default function ComingSoonPage() {
  return (
    <main className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#020D19] px-5 py-24 text-white sm:px-8">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, rgba(20,49,72,0.72) 0%, rgba(6,19,33,0.5) 38%, transparent 72%), linear-gradient(145deg, #071827 0%, #020D19 65%, #010912 100%)",
        }}
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[220px] top-[-100px] -z-10 h-[540px] w-[540px] rounded-full border border-[#F4A019]/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[160px] top-[-40px] -z-10 h-[420px] w-[420px] rounded-full border border-[#F4A019]/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[220px] bottom-[-180px] -z-10 h-[600px] w-[600px] rounded-full border border-[#F4A019]/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[150px] bottom-[-110px] -z-10 h-[440px] w-[440px] rounded-full border border-[#F4A019]/[0.06]"
      />

      {/* Subtle decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-[900px] text-center">
        {/* Brand label */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-9 bg-[#F4A019]/70 sm:w-14" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F4A019] sm:text-[12px] sm:tracking-[0.35em]">
            Credoe Talent Solutions
          </span>

          <span className="h-px w-9 bg-[#F4A019]/70 sm:w-14" />
        </div>

        {/* Icon container */}
        <div className="relative mx-auto mb-10 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-[#F4A019]/30 bg-[#F4A019]/[0.06] shadow-[0_0_70px_rgba(244,160,25,0.08)]">
          <div className="absolute inset-[9px] rounded-full border border-[#F4A019]/15" />

          <span className="text-[#F4A019]">
            <ClockIcon />
          </span>

          <span className="absolute right-1 top-2 h-2 w-2 rounded-full bg-[#F4A019] shadow-[0_0_12px_rgba(244,160,25,0.8)]" />
        </div>

        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="h-[5px] w-[5px] rounded-full bg-[#F4A019]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F4A019] sm:text-[12px] sm:tracking-[0.32em]">
            Something Exceptional Is in the Making
          </p>
          <span className="h-[5px] w-[5px] rounded-full bg-[#F4A019]" />
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-[58px] font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-7xl md:text-[92px]">
          Coming
          <span className="mt-2 block text-[#F4A019]">
            Soon<span className="text-white">.</span>
          </span>
        </h1>

        {/* Gold divider */}
        <div className="mx-auto mt-9 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#F4A019]/30 sm:w-16" />
          <span className="text-[#F4A019]">
            <SparkleIcon />
          </span>
          <span className="h-px w-10 bg-[#F4A019]/30 sm:w-16" />
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-[590px] text-[14px] leading-[2] text-white/65 sm:text-[16px] sm:leading-[2.1]">
          We are thoughtfully crafting something special. This page is currently
          under development, and we look forward to sharing it with you soon.
          Thank you for your patience.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-[3px] bg-[#F4A019] px-9 text-[12px] font-semibold uppercase tracking-[0.13em] text-[#020D19] shadow-[0_8px_30px_rgba(244,160,25,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB83E] hover:shadow-[0_12px_35px_rgba(244,160,25,0.2)] sm:w-auto"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <ArrowIcon direction="left" />
            </span>
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-[3px] border border-white/20 bg-white/[0.02] px-9 text-[12px] font-semibold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F4A019]/70 hover:bg-[#F4A019]/[0.06] hover:text-[#F4A019] sm:w-auto"
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* Bottom brand statement */}
        <div className="mt-20">
          <span className="mx-auto mb-5 block h-px w-12 bg-white/15" />

          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/35 sm:text-[10px] sm:tracking-[0.3em]">
            Building Better Leadership. Creating Lasting Impact.
          </p>
        </div>
      </div>
    </main>
  );
}
