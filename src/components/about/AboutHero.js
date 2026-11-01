import Link from "next/link";

const GOLD = "#F4A51C";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[500px] overflow-hidden bg-[#061426] text-white sm:min-h-[530px] lg:min-h-[550px]">
      {/* Background image and overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-[center_55%] sm:bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 13, 27, 0.97) 0%,
              rgba(3, 13, 27, 0.91) 32%,
              rgba(3, 13, 27, 0.76) 52%,
              rgba(3, 13, 27, 0.30) 78%,
              rgba(3, 13, 27, 0.18) 100%
            ),
            linear-gradient(
              0deg,
              rgba(3, 13, 27, 0.40),
              transparent 50%
            ),
            url("/images/aboutHeaderBg.png")
          `,
        }}
      />

      {/* Decorative gold rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      >
        <div className="absolute -right-[190px] top-[40px] h-[440px] w-[440px] rounded-full border border-[#D99B27]/35 sm:-right-[130px] sm:h-[540px] sm:w-[540px]" />

        <div className="absolute -right-[110px] top-[100px] h-[320px] w-[320px] rounded-full border border-[#D99B27]/20 sm:-right-[40px] sm:h-[420px] sm:w-[420px]" />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#03101E]/50 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[500px] max-w-[1450px] items-start px-5 pb-12 pt-[145px] sm:min-h-[530px] sm:px-8 sm:pt-[150px] lg:min-h-[550px] lg:px-12 lg:pt-[155px]">
        <div className="w-full max-w-[800px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-3 text-sm sm:mb-7"
          >
            <Link
              href="/"
              className="inline-flex cursor-pointer text-white/75 transition-colors hover:text-[#F4A51C]"
            >
              Home
            </Link>

            <span aria-hidden="true" className="text-white/40">
              /
            </span>

            <span aria-current="page" className="font-medium text-[#F4A51C]">
              About
            </span>
          </nav>

          {/* Eyebrow */}
          {/* <div className="mb-5 flex items-center gap-4">
            <span
              className="h-[3px] w-11 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F4A51C] sm:text-[13px]">
              About Credoe Talent Solutions
            </span>
          </div> */}

          {/* Main heading */}
          <h1 className="font-heading max-w-[800px] text-[40px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[52px] lg:text-[62px] xl:text-[66px]">
            Beyond Executive
            <br />
            Search. <span style={{ color: GOLD }}>Building</span>
            <br />
            <span style={{ color: GOLD }}>Organizational Readiness.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[580px] text-[14px] leading-[1.75] text-white/85 sm:text-[16px]">
            Helping organizations attract, integrate, and retain exceptional
            leaders.
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#D99B27]/50 to-transparent" />
    </section>
  );
}
