import Link from "next/link";

const GOLD = "#F4A019";

export default function ServiceHero({
  serviceName,
  title,
  highlight,
  description,
  backgroundImage,
}) {
  return (
    <section className="relative isolate min-h-[480px] overflow-hidden bg-[#061426] text-white sm:min-h-[500px] lg:min-h-[510px]">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_45%,rgba(24,49,75,0.55),transparent_55%)]" />

        <div className="absolute -left-32 top-16 h-[360px] w-[360px] rounded-full border border-white/[0.035]" />

        <div className="absolute -left-20 top-28 h-[260px] w-[260px] rounded-full border border-[#F4A019]/[0.08]" />
      </div>

      {/* Right-side image */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-full w-[48%] overflow-hidden max-sm:w-[58%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />

        <div className="absolute inset-0 bg-[#061426]/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061426] via-[#061426]/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/40 via-transparent to-[#061426]/20" />

        <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#061426] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[480px] max-w-[1600px] items-center px-5 pb-10 pt-28 sm:min-h-[500px] sm:px-8 sm:pb-12 sm:pt-32 lg:min-h-[510px] lg:px-12 lg:pb-12 lg:pt-32">
        <div className="relative z-10 w-full max-w-[850px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-9 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.12em] text-white/50 sm:mb-10 sm:text-[12px]"
          >
            <Link href="/" className="transition-colors hover:text-[#F4A019]">
              Home
            </Link>

            <span className="text-white/25">/</span>

            <Link
              href="/#services"
              className="transition-colors hover:text-[#F4A019]"
            >
              Services
            </Link>

            <span className="text-white/25">/</span>

            <span aria-current="page" className="font-medium text-[#F4A019]">
              {serviceName}
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#F4A019]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F4A019] sm:text-[12px]">
              {serviceName}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading max-w-[760px] text-[36px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[54px] xl:text-[58px]">
            <span className="block">{title}</span>

            <span className="mt-1 block text-[#F4A019]">{highlight}</span>
          </h1>

          {/* Gold accent */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F4A019]" />
            <span className="h-px w-12 bg-white/20" />
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[570px] text-[13px] leading-[1.8] text-white/75 sm:text-[15px]">
            {description}
          </p>

          {/* Brand detail */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4A019]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.23em] text-white/40">
              Credoe Talent Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4A019]/45 to-transparent" />
    </section>
  );
}
