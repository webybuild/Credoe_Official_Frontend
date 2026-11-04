import Image from "next/image";

const features = [
  {
    title: "Holistic Perspective",
    description:
      "We evaluate the full organizational context, not just the individual candidate.",
    type: "users",
    gold: false,
  },
  {
    title: "Strategy-Driven",
    description:
      "We align talent decisions with your business goals and long-term objectives.",
    type: "target",
    gold: true,
  },
  {
    title: "Built for Lasting Impact",
    description:
      "We help create the conditions for successful executive integration and long-term retention.",
    type: "chart",
    gold: false,
  },
];

function FeatureIcon({ type }) {
  if (type === "users") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
      >
        <circle cx="32" cy="19" r="9" />
        <circle cx="13" cy="25" r="7" />
        <circle cx="51" cy="25" r="7" />
        <path d="M17 49c0-9 6-15 15-15s15 6 15 15v4H17z" />
        <path d="M3 49c0-8 4-13 11-13 3 0 5 1 7 3-3 3-5 7-5 12H3z" />
        <path d="M61 49c0-8-4-13-11-13-3 0-5 1-7 3 3 3 5 7 5 12h13z" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
      >
        <circle cx="29" cy="35" r="23" />
        <circle cx="29" cy="35" r="15" />
        <circle cx="29" cy="35" r="6" />
        <path d="M29 35L52 12" />
        <path d="M43 11h11v11" />
        <path d="M49 5h9" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="square"
      strokeLinejoin="round"
      className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
    >
      <path d="M8 54h49" />
      <path d="M14 48V34h9v14" fill="currentColor" />
      <path d="M29 48V25h9v23" fill="currentColor" />
      <path d="M44 48V14h9v34" fill="currentColor" />
      <path d="M12 23l12-7 12 1 15-10" />
      <path d="M44 7h7v7" />
    </svg>
  );
}

function PhilosophyVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[720px] sm:h-[480px] lg:mx-0 lg:h-[510px] xl:h-[530px]">
      {/* Boardroom image */}
      <div className="absolute right-0 top-0 h-[245px] w-[88%] overflow-hidden rounded-[18px] sm:h-[340px] sm:w-[84%] sm:rounded-[22px] lg:h-[410px] xl:h-[430px]">
        <Image
          src="/images/office-sunset.png"
          alt="Modern executive boardroom overlooking a city skyline at sunset"
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 75vw, 50vw"
          className="object-cover object-center transition-transform duration-700"
        />
      </div>

      {/* Image overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-[245px] w-[88%] rounded-[18px] bg-gradient-to-t from-[#06182F]/20 to-transparent sm:h-[340px] sm:w-[84%] sm:rounded-[22px] lg:h-[410px] xl:h-[430px]" />

      {/* Quote card */}
      <div className="absolute bottom-0 left-0 z-10 flex min-h-[255px] w-[94%] items-center overflow-hidden rounded-[18px] border border-white/15 bg-[#06182F]/90 px-6 py-8 shadow-[0_18px_45px_rgba(3,16,30,0.18)] backdrop-blur-xl sm:bottom-[15px] sm:min-h-[310px] sm:w-[84%] sm:rounded-[20px] sm:px-8 sm:py-10 lg:bottom-[20px] lg:min-h-[340px] lg:w-[80%] lg:px-10 xl:bottom-[25px] xl:min-h-[370px] xl:px-11">
        {/* Quote mark */}
        <span className="pointer-events-none absolute right-5 top-[-5px] font-serif text-[100px] font-bold leading-none text-white/[0.045] sm:right-8 sm:text-[140px]">
          ”
        </span>

        {/* Gold decorative rings */}
        <div className="pointer-events-none absolute -bottom-[130px] right-[-30px] h-[260px] w-[260px] rounded-full border border-[#DCA02E]/20" />
        <div className="pointer-events-none absolute -bottom-[100px] right-[-5px] h-[210px] w-[210px] rounded-full border border-[#DCA02E]/15" />

        {/* Quote content */}
        <div className="relative z-10 max-w-[470px]">
          <span className="mb-5 block h-[4px] w-[45px] rounded-sm bg-[#E2A52F] sm:mb-6 sm:h-[5px] sm:w-[55px] lg:mb-7" />

          <p className="font-serif text-[22px] italic leading-[1.45] text-white sm:text-[27px] lg:text-[31px] xl:text-[34px]">
            True hiring success demands{" "}
            <span className="text-[#E2A52F]">organizational readiness</span>,
            not just candidate readiness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative isolate overflow-hidden bg-[#FCFBF9] px-5 py-14 sm:px-8 sm:py-16 lg:px-[7.6%] lg:py-20"
    >
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[350px] top-[100px] h-[600px] w-[600px] rounded-full border border-[#E2A52F]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] top-[150px] h-[500px] w-[500px] rounded-full border border-[#E2A52F]/15"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Main content and visual */}
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
          {/* LEFT: Philosophy content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4 sm:mb-6 sm:gap-5">
              <span className="h-[4px] w-[44px] shrink-0 rounded-sm bg-[#DDA32F] sm:h-[5px] sm:w-[54px] lg:w-[58px]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C98B19] sm:text-[11px] lg:text-[12px]">
                Our Core Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[36px] font-bold leading-[1.08] tracking-[-1px] text-[#091B32] sm:text-[46px] sm:tracking-[-1.5px] lg:text-[52px] xl:text-[58px]">
              Beyond Qualified
              <span className="block text-[#DCA02E]">Candidates.</span>
            </h2>

            {/* Description */}
            <div className="mt-5 max-w-[690px] space-y-4 text-[14px] leading-[1.75] text-[#505663] sm:mt-6 sm:space-y-5 sm:text-[15px] lg:mt-7 lg:text-[16px] xl:text-[17px]">
              <p>
                At CREDOE Talent Solutions, we believe successful hiring goes
                beyond identifying qualified candidates. It requires ensuring
                the organization is fully positioned to attract, integrate, and
                retain high-impact talent.
              </p>

              <p>
                Our approach recognizes that even exceptional leaders need the
                right environment, aligned expectations, organizational
                infrastructure, and cultural support to succeed. We look beyond
                the candidate profile to understand whether the organization is
                prepared to support its next executive hire.
              </p>
            </div>
          </div>

          {/* RIGHT: Image and quote */}
          <div className="relative z-10 w-full">
            <PhilosophyVisual />
          </div>
        </div>

        {/* Feature row */}
        <div className="mt-10 grid grid-cols-1 gap-7 border-t border-[#E5E3DF] pt-8 sm:mt-12 sm:gap-8 sm:pt-10 md:grid-cols-3 md:gap-0 lg:mt-12 lg:pt-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start gap-4 sm:gap-5 lg:gap-5 ${
                index === 1
                  ? "md:border-l md:border-r md:border-[#D9D9D9] md:px-5 lg:px-7 xl:px-10"
                  : index === 2
                    ? "md:pl-5 lg:pl-7 xl:pl-10"
                    : "md:pr-5 lg:pr-7 xl:pr-10"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full sm:h-[74px] sm:w-[74px] lg:h-[78px] lg:w-[78px] ${
                  feature.gold
                    ? "bg-[#E0A32F] text-[#071B33]"
                    : "bg-[#071B33] text-[#E0A32F]"
                }`}
              >
                <FeatureIcon type={feature.type} />
              </div>

              {/* Text */}
              <div className="min-w-0 pt-1">
                <h3 className="font-serif text-[18px] font-bold leading-[1.25] tracking-[-0.3px] text-[#091B32] sm:text-[19px] lg:text-[20px] xl:text-[21px]">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[310px] text-[13px] leading-[1.7] text-[#505663] sm:text-[14px] lg:text-[14px] xl:text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
