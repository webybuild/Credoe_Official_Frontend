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
      <svg viewBox="0 0 64 64" fill="currentColor" className="h-11 w-11">
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
        className="h-11 w-11"
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
      className="h-11 w-11"
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
    <div className="relative mx-auto h-[440px] w-full max-w-[720px] sm:h-[510px] lg:h-[530px] lg:mx-0">
      {/* Boardroom image */}
      <div className="absolute right-0 top-0 h-[280px] w-[82%] overflow-hidden rounded-[22px] sm:h-[390px] lg:h-[430px]">
        <img
          src="/images/office-sunset.png"
          alt="Modern executive boardroom overlooking a city skyline at sunset"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Image overlay for depth */}
      <div className="absolute right-0 top-0 h-[280px] w-[82%] rounded-[22px] bg-gradient-to-t from-[#06182F]/20 to-transparent sm:h-[390px] lg:h-[430px]" />

      {/* Quote card */}
      <div className="absolute bottom-0 left-0 z-10 flex min-h-[285px] w-[88%] items-center overflow-hidden rounded-[20px] border border-white/15 bg-[#06182F]/65 px-7 py-9 shadow-[0_18px_45px_rgba(3,16,30,0.18)] backdrop-blur-xl sm:bottom-[20px] sm:min-h-[350px] sm:w-[82%] sm:px-10 sm:py-12 lg:bottom-[25px] lg:min-h-[370px] lg:w-[79%] lg:px-11">
        {/* Quote mark */}
        <span className="absolute right-6 top-[-8px] font-serif text-[125px] font-bold leading-none text-white/[0.045] sm:right-8 sm:text-[150px]">
          ”
        </span>

        {/* Gold decorative rings */}
        <div className="pointer-events-none absolute -bottom-[130px] right-[-30px] h-[260px] w-[260px] rounded-full border border-[#DCA02E]/20" />
        <div className="pointer-events-none absolute -bottom-[100px] right-[-5px] h-[210px] w-[210px] rounded-full border border-[#DCA02E]/15" />

        {/* Quote content */}
        <div className="relative z-10 max-w-[470px]">
          <span className="mb-7 block h-[5px] w-[55px] rounded-sm bg-[#E2A52F]" />

          <p className="font-serif text-[25px] italic leading-[1.45] text-white sm:text-[31px] lg:text-[34px]">
            True hiring success demands{" "}
            <span className="text-[#E2A52F]">organizational readiness</span>{" "}
            &#8212; not just candidate readiness.
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
      className="relative overflow-hidden bg-[#FCFBF9] px-5 py-16 sm:px-8 sm:py-20 lg:px-[7.6%] lg:py-20"
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -left-[350px] top-[100px] h-[600px] w-[600px] rounded-full border border-[#E2A52F]/20" />
      <div className="pointer-events-none absolute -left-[300px] top-[150px] h-[500px] w-[500px] rounded-full border border-[#E2A52F]/15" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Main content and visual */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT: Philosophy content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-5">
              <span className="h-[5px] w-[58px] rounded-sm bg-[#DDA32F]" />

              <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#C98B19] sm:text-[15px]">
                Our Core Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[46px] font-bold leading-[1.04] tracking-[-1.5px] text-[#091B32] sm:text-[58px] xl:text-[72px]">
              Beyond Qualified
              <span className="block text-[#DCA02E]">Candidates.</span>
            </h2>

            {/* Description */}
            <div className="mt-7 max-w-[690px] space-y-5 text-[16px] leading-[1.7] text-[#505663] sm:text-[17px] xl:text-[19px]">
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

        {/* Feature row, independent from the visual composition */}
        <div className="mt-12 grid grid-cols-1 gap-9 border-t border-[#E5E3DF] pt-10 md:grid-cols-3 md:gap-0 lg:mt-10 lg:pt-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start gap-5 sm:gap-6 ${
                index === 1
                  ? "md:border-l md:border-r md:border-[#D9D9D9] md:px-7 lg:px-10"
                  : index === 2
                    ? "md:pl-7 lg:pl-10"
                    : "md:pr-7 lg:pr-10"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full sm:h-[88px] sm:w-[88px] ${
                  feature.gold
                    ? "bg-[#E0A32F] text-[#071B33]"
                    : "bg-[#071B33] text-[#E0A32F]"
                }`}
              >
                <FeatureIcon type={feature.type} />
              </div>

              {/* Text */}
              <div className="pt-1">
                <h3 className="text-[19px] font-bold leading-tight tracking-[-0.4px] text-[#091B32] sm:text-[21px] xl:text-[23px]">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[310px] text-[15px] leading-[1.75] text-[#505663] sm:text-[16px] xl:text-[17px]">
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
