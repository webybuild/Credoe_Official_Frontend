import Link from "next/link";

const GOLD = "#F4A019";

function DecorativeRings() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-[-70px] -z-10 h-[520px] w-[520px] rounded-full border border-[#F4A019]/25 sm:-right-28 sm:top-[-90px] sm:h-[650px] sm:w-[650px]"
    >
      <div className="absolute inset-[10%] rounded-full border border-[#F4A019]/20" />
      <div className="absolute inset-[20%] rounded-full border border-[#F4A019]/15" />
      <div className="absolute inset-[30%] rounded-full border border-[#F4A019]/10" />
    </div>
  );
}

export default function ContactHero() {
  return (
    <section className="relative isolate min-h-[500px] overflow-hidden bg-[#03101E] text-white sm:min-h-[530px] lg:min-h-[550px]">
      {/* Skyline background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[center_55%] sm:bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 16, 30, 0.97) 0%,
              rgba(3, 16, 30, 0.84) 34%,
              rgba(3, 16, 30, 0.48) 68%,
              rgba(3, 16, 30, 0.40) 100%
            ),
            url("/images/bg-hero.png")
          `,
        }}
      />

      {/* Bottom contrast overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#03101E]/15 via-transparent to-[#03101E]/40"
      />

      <DecorativeRings />

      {/* Hero content, aligned with About Hero */}
      <div className="relative z-20 mx-auto flex min-h-[500px] max-w-[1450px] items-start px-5 pb-12 pt-[145px] sm:min-h-[530px] sm:px-8 sm:pb-14 sm:pt-[150px] lg:min-h-[550px] lg:px-12 lg:pt-[155px]">
        <div className="w-full max-w-[650px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-3 text-sm sm:mb-7"
          >
            <Link
              href="/"
              className="text-white/75 transition-colors hover:text-white"
            >
              Home
            </Link>

            <span aria-hidden="true" className="text-white/40">
              /
            </span>

            <span
              aria-current="page"
              className="font-medium"
              style={{ color: GOLD }}
            >
              Contact
            </span>
          </nav>

          {/* Heading */}
          <h1 className="font-heading text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[54px] lg:text-[68px]">
            Let&apos;s Start a
            <span className="block" style={{ color: GOLD }}>
              Conversation.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-white/85 sm:text-[17px] sm:leading-8">
            Tell us what you&apos;re building. We&apos;ll help you
            <br className="hidden sm:block" />
            find the leaders who move it forward.
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4A019]/50 to-transparent" />
    </section>
  );
}
