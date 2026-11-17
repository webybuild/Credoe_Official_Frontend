import Image from "next/image";
import Link from "next/link";

const GOLD = "#F5A623";

function CredentialIcon({ type }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: GOLD,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    experience: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    leadership: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="1" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    community: (
      <>
        <path d="m2 9 10-6 10 6-10 6L2 9Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 9v6" />
        <path d="M12 15v6" />
      </>
    ),
  };

  return (
    <svg {...common} aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

const credentials = [
  {
    type: "experience",
    title: "20+",
    subtitle: "Years of Experience",
    description:
      "Across executive search, talent acquisition, and human resources.",
  },
  {
    type: "leadership",
    title: "Former Leadership",
    subtitle: "Executive Experience",
    description: "Senior leadership roles at Deloitte, Accenture, and HCA.",
  },
  {
    type: "community",
    title: "Community Service",
    subtitle: "Leadership & Service",
    description:
      "Middle Tennessee State University Advisory Board Member, Jones College of Business, and Trustee of the MTSU Foundation.",
  },
];

export default function AboutFounder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#FFFFFF] py-14 sm:py-16 lg:py-20"
    >
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[210px] top-[-90px] h-[380px] w-[380px] rounded-full border border-[#F5A623]/10 sm:-right-[180px] sm:h-[520px] sm:w-[520px] lg:-right-[140px] lg:h-[650px] lg:w-[650px]"
      >
        <div className="absolute inset-[12%] rounded-full border border-[#F5A623]/10" />
        <div className="absolute inset-[24%] rounded-full border border-[#F5A623]/10" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        {/* Founder main layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:gap-16">
          {/* Founder portrait */}
          <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-0 lg:max-w-[560px]">
            {/* Gold decorative outline */}
            <div
              aria-hidden="true"
              className="absolute -left-2 -top-2 z-10 h-[34%] w-[42%] rounded-tl-xl border-l-2 border-t-2 border-[#F5A623] sm:-left-3 sm:-top-3 lg:-left-4 lg:-top-4"
            />

            {/* Portrait image */}
            <div className="relative aspect-[4/4.35] overflow-hidden rounded-xl bg-[#E9E9E9] shadow-[0_18px_55px_rgba(3,16,30,0.12)]">
              <Image
                src="/images/founderaboutImg.png"
                alt="Andre Dyer, Founder of Credoe Talent Solutions"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 540px"
                className="object-cover object-[center_22%]"
              />

              {/* Image bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061426]/25 to-transparent" />
            </div>

            {/* Signature card */}
            <div className="absolute -bottom-5 right-2 z-20 flex min-h-[94px] w-[210px] flex-col items-center justify-center rounded-lg border border-white/20 bg-[#031426] px-4 py-3 shadow-xl sm:-right-4 sm:bottom-7 sm:min-h-[105px] sm:w-[235px] sm:px-5 sm:py-4 lg:-right-6 lg:w-[255px]">
              <Image
                src="/images/AndreSign.png"
                alt="Andre Dyer signature"
                width={380}
                height={100}
                sizes="220px"
                className="h-[38px] w-full max-w-[175px] object-contain sm:h-[44px] sm:max-w-[190px]"
              />

              <div className="mt-2 flex items-center gap-2 sm:gap-3">
                <span className="h-px w-5 bg-[#F5A623] sm:w-6" />

                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white sm:text-[10px] sm:tracking-[0.2em]">
                  Founder & CEO
                </span>

                <span className="h-px w-5 bg-[#F5A623] sm:w-6" />
              </div>
            </div>
          </div>

          {/* Founder biography */}
          <div className="relative pt-5 lg:pt-0">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] shrink-0 rotate-45 rounded-[1px] bg-[#F5A623]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5A623] sm:text-[11px] sm:tracking-[0.2em] lg:text-xs">
                Leadership & Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[36px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#0C1F43] sm:text-[46px] lg:text-[50px] xl:text-[54px]">
              Meet <span className="text-[#F5A623]">Andre Dyer.</span>
            </h2>

            {/* Designation */}
            <p className="mt-3 text-[10px] font-semibold uppercase leading-[1.8] tracking-[0.12em] text-[#778195] sm:mt-4 sm:text-[11px] sm:tracking-[0.16em] lg:text-xs lg:tracking-[0.19em]">
              Executive Talent Advisor
              <span className="mx-2 text-[#F5A623] sm:mx-3">|</span>
              Founder, Credoe Talent Solutions
            </p>

            {/* Biography */}
            <div className="mt-5 space-y-2.5 text-[14px] leading-[1.65] text-[#596273] sm:mt-6 sm:space-y-3 sm:text-[15px] lg:text-[15px] lg:leading-[1.7] xl:text-base">
              <p>
                Andre Dyer is an executive talent advisor and Founder of Credoe
                Talent Solutions, a boutique executive search and talent
                advisory firm partnering with CEOs, boards, and senior
                leadership teams to build high impact executive and senior level
                talent.
              </p>

              <p>
                With more than two decades of experience across executive
                search, talent acquisition, and human resources, Andre brings a
                practical, business focused perspective to leadership and
                workforce discussions.
              </p>

              <p>
                He previously held senior leadership roles at Deloitte and
                Accenture and currently serves on advisory boards at Middle
                Tennessee State University and as a Trustee with the MTSU
                Foundation.
              </p>

              <p>
                Andre is known for guiding thoughtful, engaging conversations
                that connect leadership decisions to real business outcomes.
              </p>

              <p>
                Discover Andre’s commitment to community service, leadership,
                and making a meaningful impact beyond the workplace.
              </p>

              {/* Featured MTSU article CTA */}
              <Link
                href="https://mtsunews.com/2025/04/24/heart-of-a-champion/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Andre Dyer's Heart of a Champion feature in MTSU News"
                className="group mt-4 inline-flex min-h-[42px] items-center gap-3 rounded-md border border-[#F5A623] bg-gradient-to-r from-[#F5A623] to-[#F5A623] px-5 py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#061426] shadow-[0_5px_16px_rgba(245,166,35,0.20)] transition-all duration-300 hover:-translate-y-0.5 lg:-translate-y-4 hover:border-[#061426] hover:from-[#061426] hover:to-[#102943] hover:text-[#F5A623] hover:shadow-[0_9px_22px_rgba(3,20,38,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2"
              >
                <span>Read Andre's MTSU Feature</span>

                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#061426]/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#F5A623]/15"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Three credentials panel */}
        <div className="relative z-10 mt-10 rounded-xl border border-[#F5A623]/15 bg-[#031426] px-5 py-7 text-white shadow-[0_20px_55px_rgba(3,16,30,0.13)] sm:mt-12 sm:px-7 sm:py-8 lg:mt-6 lg:ml-8 lg:mr-0 lg:px-6 lg:py-9 xl:mt-7 xl:px-10">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-8 lg:grid-cols-3 lg:gap-0">
            {credentials.map((item, index) => (
              <div
                key={item.type}
                className={`flex min-w-0 items-start gap-4 sm:gap-5 lg:px-5 xl:px-8 ${
                  index !== credentials.length - 1
                    ? "lg:border-r lg:border-white/15"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#F5A623] sm:h-[58px] sm:w-[58px]">
                  <CredentialIcon type={item.type} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="font-heading text-[18px] font-semibold leading-[1.3] text-white sm:text-[20px]">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-1 text-[9px] font-medium uppercase leading-relaxed tracking-[0.13em] text-[#F5A623] sm:text-[10px] sm:tracking-[0.16em]">
                      {item.subtitle}
                    </p>
                  )}

                  <div className="my-3 h-[2px] w-8 bg-[#F5A623]" />

                  <p className="text-[12px] leading-[1.7] text-white/75 sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
