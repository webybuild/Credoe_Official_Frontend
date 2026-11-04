"use client";

const GOLD = "#F4A019";

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 sm:h-7 sm:w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactCTASection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[12px] bg-[#020D19] text-white shadow-[0_8px_24px_rgba(2,13,25,0.14)] sm:rounded-[14px]">
        {/* Navy background and warm gold glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 100% 52%, rgba(190,111,35,0.20) 0%, rgba(2,13,25,0) 26%), linear-gradient(110deg, #020D19 0%, #03101F 60%, #080F19 100%)",
          }}
        />

        {/* Decorative concentric rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[145px] top-[43%] h-[310px] w-[310px] -translate-y-1/2 rounded-full border border-[#F4A019]/10 sm:-right-[180px] sm:top-1/2 sm:h-[550px] sm:w-[550px] sm:border-[#F4A019]/15 lg:-right-[120px] lg:h-[640px] lg:w-[640px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[115px] top-[43%] h-[250px] w-[250px] -translate-y-1/2 rounded-full border border-[#F4A019]/15 sm:-right-[125px] sm:top-1/2 sm:h-[450px] sm:w-[450px] sm:border-[#F4A019]/25 lg:-right-[60px] lg:h-[520px] lg:w-[520px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[85px] top-[43%] h-[190px] w-[190px] -translate-y-1/2 rounded-full border border-[#F4A019]/15 sm:-right-[70px] sm:top-1/2 sm:h-[350px] sm:w-[350px] sm:border-[#F4A019]/25 lg:right-0 lg:h-[400px] lg:w-[400px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[55px] top-[43%] h-[130px] w-[130px] -translate-y-1/2 rounded-full border border-[#F4A019]/15 sm:-right-[20px] sm:top-1/2 sm:h-[250px] sm:w-[250px] sm:border-[#F4A019]/20 lg:right-[40px] lg:h-[290px] lg:w-[290px]"
        />

        {/* Small gold light in the rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[11%] top-[43%] z-10 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#F4A019] shadow-[0_0_12px_4px_rgba(244,160,25,0.28)] sm:right-[9.8%] sm:top-1/2 sm:h-[8px] sm:w-[8px]"
        />

        {/* Main content */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-7 px-5 py-8 sm:min-h-[340px] sm:gap-10 sm:px-10 sm:py-12 lg:min-h-[408px] lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:px-16 lg:py-14 xl:px-24">
          {/* Left text */}
          <div className="relative z-10 max-w-[600px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span
                className="h-[2px] w-8 shrink-0 sm:w-10"
                style={{ backgroundColor: GOLD }}
              />

              <p
                className="text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[13px] sm:tracking-[0.06em] md:text-[16px]"
                style={{ color: GOLD }}
              >
                Ready to Get Started?
              </p>
            </div>

            {/* Responsive heading */}
            <h2 className="mt-5 max-w-full font-heading text-[31px] font-medium leading-[1.12] tracking-[-0.035em] text-white sm:mt-5 sm:text-[46px] lg:text-[50px] xl:text-[54px]">
              {/* Mobile heading */}
              <span className="block sm:hidden">
                Let’s Build a
                <br />
                Stronger Future
                <br />
                <span style={{ color: GOLD }}>Together.</span>
              </span>

              {/* Desktop heading */}
              <span className="hidden sm:block">
                <span>Let’s Build a Stronger</span>
                <br />
                <span>
                  Future <span style={{ color: GOLD }}>Together.</span>
                </span>
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[470px] text-[13px] leading-[1.8] text-white/85 sm:mt-6 sm:max-w-[570px] sm:text-[16px] sm:leading-[1.8] md:text-[18px]">
              Partner with Credoe Talent Solutions and turn your talent strategy
              into a competitive advantage.
            </p>
          </div>

          {/* Divider and contact link */}
          <div className="relative z-10 flex min-h-0 items-center border-t border-white/15 pt-6 sm:min-h-[150px] sm:pt-8 lg:min-h-[240px] lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-[72px]">
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full py-2 pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A019] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020D19] sm:gap-6"
              aria-label="Contact Credoe Talent Solutions"
            >
              {/* Arrow circle */}
              <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#F4A019] text-[#F4A019] transition-all duration-300 group-hover:bg-[#F4A019] group-hover:text-[#020D19] sm:h-[66px] sm:w-[66px] lg:h-[74px] lg:w-[74px]">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </span>

              {/* CTA text */}
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-[#F4A019] sm:text-[16px] lg:text-[18px]">
                Let’s Connect
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
