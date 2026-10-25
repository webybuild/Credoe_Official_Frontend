"use client";

const GOLD = "#F4A019";

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
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
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[14px] bg-[#020D19] text-white shadow-[0_5px_14px_rgba(2,13,25,0.12)]">
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
          className="pointer-events-none absolute -right-[215px] top-1/2 h-[470px] w-[470px] -translate-y-1/2 rounded-full border border-[#F4A019]/15 sm:-right-[180px] sm:h-[550px] sm:w-[550px] lg:-right-[120px] lg:h-[640px] lg:w-[640px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[160px] top-1/2 h-[370px] w-[370px] -translate-y-1/2 rounded-full border border-[#F4A019]/25 sm:-right-[125px] sm:h-[450px] sm:w-[450px] lg:-right-[60px] lg:h-[520px] lg:w-[520px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[105px] top-1/2 h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#F4A019]/25 sm:-right-[70px] sm:h-[350px] sm:w-[350px] lg:right-0 lg:h-[400px] lg:w-[400px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[55px] top-1/2 h-[170px] w-[170px] -translate-y-1/2 rounded-full border border-[#F4A019]/20 sm:-right-[20px] sm:h-[250px] sm:w-[250px] lg:right-[40px] lg:h-[290px] lg:w-[290px]"
        />

        {/* Small gold light in the rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[9.8%] top-1/2 z-10 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#F4A019] shadow-[0_0_12px_4px_rgba(244,160,25,0.28)]"
        />

        {/* Main content */}
        <div className="relative z-10 grid min-h-[340px] grid-cols-1 items-center gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:min-h-[408px] lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:px-16 lg:py-14 xl:px-24">
          {/* Left text */}
          <div className="max-w-[600px]">
            <div className="flex items-center gap-4">
              <span
                className="h-[2px] w-10 shrink-0"
                style={{ backgroundColor: GOLD }}
              />

              <p
                className="text-[13px] font-medium uppercase tracking-[0.06em] sm:text-[16px]"
                style={{ color: GOLD }}
              >
                Ready to Get Started?
              </p>
            </div>

            {/* Static text prevents server/client text mismatches */}
            <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.13] tracking-[-0.035em] text-white sm:text-[46px] lg:text-[50px] xl:text-[54px]">
              <span>Let’s Build a Stronger</span>
              <br className="hidden sm:block" />
              <span>
                {"Future—"}
                <span style={{ color: GOLD }}>Together.</span>
              </span>
            </h2>

            <p className="mt-6 max-w-[570px] text-[16px] leading-[1.8] text-white/90 sm:text-[18px]">
              Partner with Creode Talent Solutions and turn your talent strategy
              into a competitive advantage.
            </p>
          </div>

          {/* Divider and contact link */}
          <div className="flex min-h-[150px] items-center border-t border-white/15 pt-8 lg:min-h-[240px] lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-[72px]">
            <a
              href="/contact"
              className="group inline-flex items-center gap-5 rounded-full py-2 pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A019] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020D19] sm:gap-6"
              aria-label="Contact Creode Talent Solutions"
            >
              <span className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#F4A019] text-[#F4A019] transition-all duration-300 group-hover:bg-[#F4A019] group-hover:text-[#020D19] sm:h-[74px] sm:w-[74px]">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </span>

              <span className="text-[16px] font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-300 group-hover:text-[#F4A019] sm:text-[18px]">
                Let’s Connect
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
