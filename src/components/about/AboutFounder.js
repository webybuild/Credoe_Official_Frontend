const GOLD = "#F4A51C";

function CredentialIcon({ type }) {
  const common = {
    width: 30,
    height: 30,
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
    university: (
      <>
        <path d="m2 9 10-6 10 6-10 6L2 9Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 9v6" />
      </>
    ),
    trustee: (
      <>
        <path d="M3 21h18M4 18h16M5 18V9h14v9M3 9h18L12 3 3 9Z" />
        <path d="M9 12v4M12 12v4M15 12v4" />
      </>
    ),
  };

  return <svg {...common}>{icons[type]}</svg>;
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
    title: "Former Leadership Roles",
    subtitle: "",
    description: "Deloitte and Accenture.",
  },
  {
    type: "university",
    title: "Advisory Board Service",
    subtitle: "",
    description: "Middle Tennessee State University.",
  },
  {
    type: "trustee",
    title: "Trustee",
    subtitle: "",
    description: "MTSU Foundation.",
  },
];

export default function AboutFounder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#FAFAFA] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-100px] h-[500px] w-[500px] rounded-full border border-[#D99B27]/10 sm:-right-20 sm:h-[650px] sm:w-[650px]"
      >
        <div className="absolute inset-[12%] rounded-full border border-[#D99B27]/10" />
        <div className="absolute inset-[24%] rounded-full border border-[#D99B27]/10" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        {/* Founder main layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Founder portrait */}
          <div className="relative mx-auto w-full max-w-[580px] lg:mx-0">
            {/* Gold decorative outline */}
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-[34%] w-[42%] rounded-tl-xl border-l-2 border-t-2 border-[#F4A51C] sm:-left-4 sm:-top-4"
            />

            {/* Portrait image */}
            <div className="relative aspect-[4/4.35] overflow-hidden rounded-xl bg-[#E9E9E9] shadow-[0_18px_55px_rgba(3,16,30,0.12)]">
              <img
                src="/images/AndreDyer2026.png"
                alt="Andre Dyer, Founder of Credoe Talent Solutions"
                className="h-full w-full object-cover translate-y-[90px]"
              />

              {/* Image bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061426]/25 to-transparent" />
            </div>

            {/* Signature card */}
            <div className="absolute -bottom-4 right-3 flex min-h-[112px] w-[235px] flex-col items-center justify-center rounded-lg border border-white/20 bg-[#031426] px-5 py-4 shadow-xl sm:-right-7 sm:bottom-8 sm:w-[255px]">
              <img
                src="/images/AndreSign.png"
                alt="Andre Dyer signature"
                className="h-[48px] max-w-[190px] object-contain"
              />

              <div className="mt-2 flex items-center gap-3">
                <span className="h-px w-6 bg-[#F4A51C]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                  Founder & CEO
                </span>
                <span className="h-px w-6 bg-[#F4A51C]" />
              </div>
            </div>
          </div>

          {/* Founder biography */}
          <div className="relative pt-5 lg:pt-0">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[4px] w-12 rounded-full bg-[#F4A51C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C58A20] sm:text-[13px]">
                Leadership & Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[42px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#0C1F43] sm:text-[52px] lg:text-[60px]">
              Meet <span className="text-[#D99B27]">Andre Dyer.</span>
            </h2>

            {/* Designation */}
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#778195] sm:text-[13px] sm:tracking-[0.19em]">
              Executive Talent Advisor
              <span className="mx-3 text-[#D99B27]">|</span>
              Founder, Credoe Talent Solutions
            </p>

            {/* Biography */}
            <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-[#596273] sm:text-[16px] sm:leading-[1.8]">
              <p>
                Andre Dyer is an executive talent advisor and Founder of Credoe
                Talent Solutions, a boutique executive search and talent
                advisory firm partnering with CEOs, boards, and senior
                leadership teams to build high-impact executive and senior-level
                talent.
              </p>

              <p>
                With more than two decades of experience across executive
                search, talent acquisition, and human resources, Andre brings a
                practical, business-focused perspective to leadership and
                workforce discussions.
              </p>

              <p>
                He previously held senior leadership roles at Deloitte and
                Accenture and currently serves on advisory boards at Middle
                Tennessee State University and as a Trustee with the MTSU
                Foundation. Andre is known for guiding thoughtful, engaging
                conversations that connect leadership decisions to real business
                outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Credentials panel */}
        <div className="relative z-10 mt-16 rounded-xl bg-[#031426] px-6 py-8 text-white shadow-[0_15px_40px_rgba(3,16,30,0.15)] sm:mt-20 sm:px-8 lg:-mt-1 lg:ml-8 lg:mr-0 lg:px-8 lg:py-9">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {credentials.map((item, index) => (
              <div
                key={item.type}
                className={`flex gap-4 sm:px-5 lg:px-6 ${
                  index !== credentials.length - 1
                    ? "lg:border-r lg:border-white/15"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-[#F4A51C]">
                  <CredentialIcon type={item.type} />
                </div>

                {/* Text */}
                <div className="min-w-0 pt-1">
                  <h3 className="font-heading text-[17px] font-semibold leading-snug text-white sm:text-[19px]">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F4A51C]">
                      {item.subtitle}
                    </p>
                  )}

                  <div className="my-3 h-[2px] w-7 bg-[#F4A51C]" />

                  <p className="text-[12px] leading-[1.6] text-white/75 sm:text-[13px]">
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
