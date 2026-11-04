import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#061426] text-white sm:min-h-[700px] lg:min-h-[620px] xl:min-h-[640px]">
      {/* Responsive background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[62%] lg:max-w-[1050px]"
      >
        <Image
          src="/images/bg-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1023px) calc(100vw - 16px), (max-width: 1693px) 62vw, 1050px"
          className="object-cover object-center lg:object-[center_35%]"
        />
      </div>

      {/* MOBILE: Full-section navy overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,20,38,0.62)_0%,rgba(6,20,38,0.72)_35%,rgba(6,20,38,0.88)_70%,#061426_100%)] lg:hidden"
      />

      {/* MOBILE: Additional image contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_25%,transparent_0%,rgba(6,20,38,0.30)_85%)] lg:hidden"
      />

      {/* DESKTOP: Image blending */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-[linear-gradient(90deg,#061426_0%,#061426_24%,rgba(6,20,38,0.96)_36%,rgba(6,20,38,0.76)_52%,rgba(6,20,38,0.28)_76%,rgba(6,20,38,0.12)_100%)] lg:block"
      />

      {/* DESKTOP: Top and bottom image shading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-[linear-gradient(180deg,rgba(6,20,38,0.42)_0%,transparent_25%,transparent_72%,rgba(6,20,38,0.62)_100%)] lg:block"
      />

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_45%,rgba(24,49,75,0.38),transparent_55%)]" />

        <div className="absolute -left-[250px] top-[100px] h-[500px] w-[500px] rounded-full border border-white/[0.035]" />

        <div className="absolute -left-[190px] top-[160px] h-[380px] w-[380px] rounded-full border border-[#F4A019]/[0.08]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1600px] items-center px-5 pb-12 pt-28 sm:min-h-[700px] sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[620px] lg:px-12 lg:pb-16 lg:pt-32 xl:min-h-[640px]">
        <div className="relative w-full max-w-[790px] lg:w-[62%]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.12em] text-white/60 sm:mb-9 sm:text-[11px] lg:mb-10 lg:text-[12px]"
          >
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#F4A019]"
            >
              Home
            </Link>

            <span className="text-white/30">/</span>

            <span aria-current="page" className="font-semibold text-[#F4A019]">
              Contact
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4 sm:mb-6">
            <span className="h-[2px] w-10 shrink-0 bg-[#F4A019] sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F4A019] sm:text-[11px] sm:tracking-[0.25em] lg:text-[12px]">
              Get in Touch
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading max-w-[760px] text-[36px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[52px] xl:text-[58px] 2xl:text-[62px]">
            <span className="block">Let&apos;s Start a</span>

            <span className="mt-1 block text-[#F4A019]">Conversation.</span>
          </h1>

          {/* Gold accent */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F4A019]" />
            <span className="h-px w-14 bg-white/25" />
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[570px] text-[13px] leading-[1.8] text-white/85 sm:text-[14px] sm:leading-[1.9] lg:text-[15px]">
            Tell us what you&apos;re building. We&apos;ll help you find the
            leaders who move it forward.
          </p>

          {/* Brand detail */}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4A019] shadow-[0_0_10px_rgba(244,160,25,0.5)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/55 sm:text-[10px]">
              Credoe Talent Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#F4A019]/45 to-transparent" />
    </section>
  );
}
