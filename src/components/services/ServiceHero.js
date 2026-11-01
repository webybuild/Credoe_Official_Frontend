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
    <section className="relative isolate min-h-[560px] overflow-hidden bg-[#03101E] text-white sm:min-h-[620px] lg:min-h-[680px]">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[center_55%] sm:bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 13, 27, 0.98) 0%,
              rgba(3, 13, 27, 0.94) 28%,
              rgba(3, 13, 27, 0.78) 47%,
              rgba(3, 13, 27, 0.30) 72%,
              rgba(3, 13, 27, 0.12) 100%
            ),
            linear-gradient(
              0deg,
              rgba(3, 13, 27, 0.35),
              transparent 50%
            ),
            url("${backgroundImage}")
          `,
        }}
      />

      {/* Gold decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-[145px] -top-[130px] h-[300px] w-[300px] rounded-full border border-[#F4A019]/15 sm:h-[360px] sm:w-[360px]" />

        <div className="absolute -left-[105px] -top-[90px] h-[220px] w-[220px] rounded-full border border-[#F4A019]/10 sm:h-[280px] sm:w-[280px]" />

        <div className="absolute -bottom-[180px] -left-[100px] h-[340px] w-[340px] rounded-full border border-[#F4A019]/15 sm:h-[420px] sm:w-[420px]" />

        <div className="absolute -bottom-[130px] -left-[55px] h-[250px] w-[250px] rounded-full border border-[#F4A019]/10 sm:h-[330px] sm:w-[330px]" />
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-[560px] max-w-[1600px] items-center px-5 pb-14 pt-32 sm:min-h-[620px] sm:px-8 sm:pb-16 sm:pt-36 lg:min-h-[680px] lg:px-12 lg:pb-20 lg:pt-36">
        <div className="w-full max-w-[1050px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-3 text-[12px] tracking-[0.12em] text-white/55 sm:mb-14 sm:text-[13px]"
          >
            <Link href="/" className="transition-colors hover:text-[#F4A019]">
              Home
            </Link>

            <span aria-hidden="true" className="text-white/35">
              /
            </span>

            <Link
              href="/#services"
              className="transition-colors hover:text-[#F4A019]"
            >
              Services
            </Link>

            <span aria-hidden="true" className="text-white/35">
              /
            </span>

            <span
              aria-current="page"
              className="font-medium"
              style={{ color: GOLD }}
            >
              {serviceName}
            </span>
          </nav>

          {/* Section label */}
          <div className="mb-5 flex items-center gap-5">
            <span
              className="h-[3px] w-14 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F4A019] sm:text-[13px]">
              {serviceName}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading max-w-[1050px] text-[38px] font-semibold leading-[1.12] tracking-[-0.025em] sm:text-[50px] sm:leading-[1.1] lg:text-[66px] xl:text-[72px]">
            <span className="block">{title}</span>

            <span className="block" style={{ color: GOLD }}>
              {highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[650px] text-[15px] leading-[1.8] text-white/85 sm:mt-8 sm:text-[17px] sm:leading-[1.9]">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4A019]/50 to-transparent" />
    </section>
  );
}
