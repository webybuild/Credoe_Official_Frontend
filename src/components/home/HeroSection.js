import Image from "next/image";

const stats = [
  { number: "500+", label: "Successful Placements", icon: "people" },
  { number: "100+", label: "Companies Served", icon: "compass" },
  { number: "18+", label: "Years of Experience", icon: "building" },
  { number: "Proven", label: "Track Record", icon: "chart" },
  {
    number: "Trusted By",
    label: "Organizations Across Industries",
    icon: "shield",
  },
];

function StatIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10 shrink-0 text-[#F5A623] sm:h-12 sm:w-12"
      aria-hidden="true"
      {...common}
    >
      {type === "people" && (
        <>
          <circle cx="24" cy="13" r="6" />
          <circle cx="10" cy="19" r="4.5" />
          <circle cx="38" cy="19" r="4.5" />
          <path d="M13 39v-5c0-7 5-11 11-11s11 4 11 11v5z" />
          <path d="M3 38v-4c0-5 3-8 8-8m34 12v-4c0-5-3-8-8-8" />
        </>
      )}

      {type === "compass" && (
        <>
          <circle cx="24" cy="24" r="21" />
          <path d="m31 13-5 13-13 9 5-13z" />
        </>
      )}

      {type === "building" && (
        <path d="M5 43h38M10 43V12h28v31M17 19h4m6 0h4m-14 8h4m6 0h4m-14 8h4m6 0h4M20 12V5h8v7" />
      )}

      {type === "chart" && (
        <>
          <path d="M5 5v38h39" />
          <path d="m8 32 10-9 8 5 13-17" />
          <path d="m31 11 8 0 0 8" />
        </>
      )}

      {type === "shield" && (
        <>
          <path d="M24 3 42 10v13c0 11-7 18-18 22C13 41 6 34 6 23V10z" />
          <path d="m15 24 6 6 12-13" />
        </>
      )}
    </svg>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[740px] overflow-hidden lg:h-[min(780px,84vh)] lg:min-h-[680px]">
        {/* Background image */}
        <Image
          src="/images/bg-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#05070B]/95 via-[#071020]/80 to-[#100D0B]/60" />
        <div className="absolute inset-0 -z-10 bg-[#050A18]/20" />

        {/* Gold decorative circles */}
        <div className="pointer-events-none absolute -right-[120px] top-[108px] -z-10 h-[700px] w-[700px] rounded-full border border-[#F5A623]/35 sm:-right-[60px] lg:right-[-50px] lg:top-[108px] lg:h-[700px] lg:w-[700px]" />

        <div className="pointer-events-none absolute -right-[50px] top-[178px] -z-10 h-[560px] w-[560px] rounded-full border border-[#F5A623]/25 sm:right-[10px] lg:right-[20px] lg:top-[178px] lg:h-[560px] lg:w-[560px]" />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[740px] max-w-[1800px] items-center px-6 pb-20 pt-36 sm:px-10 lg:h-full lg:min-h-0 lg:px-16 lg:pb-12 lg:pt-28">
          {/* Left content */}
          <div className="relative z-20 w-full max-w-[600px] lg:w-[52%] lg:pb-4">
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-[#F5A623] sm:text-sm">
              <span className="h-px w-8 shrink-0 bg-[#F5A623]" />
              Right Talent. Real Leaders. Remarkable Results.
            </p>

            <h1 className="max-w-[610px] font-serif text-[39px] font-semibold leading-[1.12] tracking-[0.01em] sm:text-5xl lg:text-[52px] xl:text-[54px]">
              Connecting Exceptional Talent with{" "}
              <span className="text-[#F5A623]">Extraordinary</span>{" "}
              Organizations.
            </h1>

            <div className="mt-6 h-px w-20 bg-[#F5A623]/80" />

            <p className="mt-5 max-w-[465px] text-sm leading-7 tracking-[0.025em] text-gray-200 sm:text-base sm:leading-[30px]">
              Credoe Talent Solutions delivers executive search and talent
              acquisition solutions that build high impact teams and drive long
              term success.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/services"
                className="group inline-flex min-h-[60px] items-center justify-center gap-6 rounded-md bg-[#F5A623] px-7 text-sm font-bold text-black transition-colors duration-300 hover:bg-white sm:text-base"
              >
                OUR SERVICES
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/about"
                className="group inline-flex min-h-[60px] items-center justify-center gap-4 rounded-md border border-white/65 px-7 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#F5A623] hover:text-[#F5A623] sm:text-base"
              >
                ABOUT CREDOE
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Desktop founder portrait */}
          <div className="pointer-events-none absolute -bottom-28 -right-16 z-10 hidden h-full w-[50%] lg:block">
            <Image
              src="/images/AndreDyer2026.png"
              alt="Credoe Talent founder"
              fill
              priority
              sizes="(min-width: 1024px) 68vw, 0px"
              className="object-contain object-bottom lg:object-right"
            />
          </div>

          {/* Mobile and tablet founder portrait */}
          <div className="pointer-events-none absolute bottom-0 right-[-60px] z-0 h-[360px] w-[290px] opacity-25 sm:right-0 sm:h-[440px] sm:w-[350px] lg:hidden">
            <Image
              src="/images/AndreDyer2026.png"
              alt=""
              fill
              sizes="350px"
              className="object-contain object-bottom"
            />
          </div>

          {/* Founder signature */}
          <div className="pointer-events-none absolute bottom-0 right-7 z-20 hidden w-[280px] sm:block lg:bottom-8 lg:right-8 xl:right-0">
            {/* Your tuned diagonal gradient */}
            <div
              className="absolute -inset-x-29 -inset-y-31 -z-10 blur-2xl"
              style={{
                background:
                  "linear-gradient(125deg, #00000000 5%, #050a18d1 40%, #050a18d1 65%, #000000 100%)",
              }}
            />

            <Image
              src="/images/AndreSign.png"
              alt="Andre Dyer signature"
              width={500}
              height={580}
              className="h-auto w-full object-contain"
            />

            <div className="mt-2 h-px w-[40%] bg-[#F5A623]/60" />

            <div className="mt-2 text-left text-sm tracking-[0.12em] text-white sm:text-base">
              FOUNDER &amp; CEO
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS BAR */}
      <section className="relative z-20 border-t border-white/10 bg-[#050A18]">
        <div className="mx-auto grid max-w-[1800px] grid-cols-2 gap-y-8 px-6 py-7 sm:px-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 lg:px-16 lg:py-7">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
              <StatIcon type={stat.icon} />

              <div className="min-w-0">
                <h2 className="font-heading text-[25px] leading-tight text-white sm:text-[30px] lg:text-[29px] xl:text-[31px]">
                  {stat.number}
                </h2>

                <p className="mt-1 text-[10px] leading-4 tracking-wide text-gray-300 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
