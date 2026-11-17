"use client";

const GOLD = "#F5A623";

const industries = [
  "Manufacturing",
  "Technology",
  "Healthcare",
  "Financial Services",
  "Professional Services",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/coming-soon" },
  { label: "Contact", href: "/contact" },
];

// Keep this list static so the server and client render identical links.
const socialLinks = [
  {
    type: "linkedin",
    href: "https://www.linkedin.com/in/andre-dyer/",
    label: "LinkedIn",
  },
];

function FooterIcon({ type, className = "h-5 w-5 sm:h-6 sm:w-6" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...common}
    >
      {type === "phone" && (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
      )}

      {type === "email" && (
        <>
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}

      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[17px] w-[17px] sm:h-5 sm:w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8V21H3.3zM9.5 9.5h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[17px] w-[17px] sm:h-5 sm:w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return null;
}

function SectionHeading({ children }) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.015em] text-white sm:text-[16px]">
        {children}
      </h3>
      <span
        className="mt-3 block h-[2px] w-[35px] sm:mt-4"
        style={{ backgroundColor: GOLD }}
      />
    </div>
  );
}

function DiamondMarker() {
  return (
    <span
      aria-hidden="true"
      className="h-[7px] w-[7px] shrink-0 rotate-45 rounded-[1px]"
      style={{
        backgroundColor: GOLD,
        boxShadow: "0 0 12px rgba(245,166,35,0.35)",
      }}
    />
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#020D19] text-white">
      {/* Subtle navy gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(10,32,53,0.28), transparent 65%), linear-gradient(180deg, #061321 0%, #020D19 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-4 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-12 lg:px-11 lg:pt-14">
        {/* Industries We Serve */}
        <section className="relative overflow-hidden border border-white/[0.12] bg-[#071827] px-4 py-4 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
          {/* Decorative background lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-[320px] w-[320px] rounded-full blur-[100px]"
            style={{
              background: "rgba(245,166,35,0.08)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-[25%] h-[260px] w-[420px] rounded-full blur-[100px]"
            style={{
              background: "rgba(25,75,110,0.16)",
            }}
          />

          <div className="relative">
            {/* Section heading */}
            <div className="flex flex-col gap-2.5 sm:gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-[680px]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <DiamondMarker />

                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[12px] sm:tracking-[0.22em]"
                    style={{ color: GOLD }}
                  >
                    Industries We Serve
                  </p>
                </div>

                <h2 className="mt-2.5 max-w-[680px] font-heading text-[27px] font-medium leading-[1.12] tracking-[-0.025em] text-white sm:mt-4 sm:text-[42px] lg:text-[48px] xl:text-[52px]">
                  Leadership that moves
                  <span className="block text-[#F5A623]">
                    industries forward.
                  </span>
                </h2>
              </div>

              <p className="max-w-[390px] text-[12px] leading-[1.65] text-white/65 sm:text-[15px] sm:leading-[1.9] lg:mb-2 lg:text-[16px]">
                Every industry has its own challenges. We connect organizations
                with exceptional leaders who understand their landscape and know
                how to create lasting impact.
              </p>
            </div>

            {/* Industry cards */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5 lg:gap-4">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className={`group relative flex min-h-[64px] items-center justify-start overflow-hidden border border-white/[0.12] bg-white/[0.035] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-[#F5A623]/60 hover:bg-[#F5A623]/[0.07] sm:min-h-[88px] sm:justify-center sm:p-5 lg:min-h-[96px] lg:p-5 xl:p-6 ${
                    index === industries.length - 1
                      ? "col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  {/* Top gold accent */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: GOLD }}
                  />

                  {/* Subtle corner glow */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: GOLD }}
                  />

                  <div className="relative flex w-full items-center gap-2 sm:gap-3">
                    <DiamondMarker />

                    <h3 className="font-heading text-[14px] font-medium leading-[1.25] text-white transition-colors duration-300 group-hover:text-[#F5A623] sm:max-w-[210px] sm:text-[20px] sm:leading-[1.3] lg:text-[18px] xl:text-[20px]">
                      {industry}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main footer columns */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10 lg:mt-[104px] lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.25fr] lg:gap-0">
          {/* Brand column */}
          <div className="border-b border-white/10 pb-8 sm:col-span-2 lg:col-span-1 lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8">
            <a
              href="/"
              aria-label="Credoe Talent Solutions home"
              className="inline-block"
            >
              <img
                src="/logos/logo.png"
                alt="Credoe Talent Solutions"
                className="h-auto w-[190px] max-w-full object-contain object-left sm:w-[220px] lg:w-[245px]"
              />
            </a>

            <p className="mt-5 max-w-[300px] text-[13px] leading-[1.85] text-white/75 sm:mt-8 sm:text-[15px] sm:text-white/85">
              Connecting exceptional talent with extraordinary organizations to
              drive meaningful impact.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:border-r lg:border-white/15 lg:px-8">
            <SectionHeading>Quick Links</SectionHeading>

            <ul className="mt-5 sm:mt-7">
              {quickLinks.map((link) => (
                <li
                  key={link.label}
                  className="border-b border-white/[0.08] last:border-b-0"
                >
                  <a
                    href={link.href}
                    className="group flex min-h-[42px] items-center justify-between gap-3 text-[13px] text-white/90 transition-colors hover:text-[#F5A623] sm:min-h-[45px] sm:text-[15px]"
                  >
                    {link.label}

                    <span
                      className="text-[19px] leading-none transition-transform group-hover:translate-x-1 sm:text-[22px]"
                      style={{ color: GOLD }}
                    >
                      ›
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:border-r lg:border-white/15 lg:px-8">
            <SectionHeading>Contact</SectionHeading>

            <div className="mt-5 sm:mt-7">
              <a
                href="tel:+16788660962"
                className="flex items-center gap-3 border-b border-white/10 pb-4 text-[13px] text-white/90 transition-colors hover:text-[#F5A623] sm:gap-4 sm:pb-5 sm:text-[15px]"
              >
                <span className="shrink-0 text-[#F5A623]">
                  <FooterIcon type="phone" />
                </span>
                <span>(678) 866-0962</span>
              </a>

              <a
                href="mailto:adyer@credoetalent.com"
                className="flex items-center gap-3 border-b border-white/10 py-4 text-[12px] text-white/90 transition-colors hover:text-[#F5A623] sm:gap-4 sm:py-5 sm:text-[14px] xl:text-[15px]"
              >
                <span className="shrink-0 text-[#F5A623]">
                  <FooterIcon type="email" />
                </span>
                <span className="break-all">adyer@credoetalent.com</span>
              </a>

              <div className="flex items-start gap-3 py-4 text-[13px] leading-[1.6] text-white/90 sm:gap-4 sm:py-5 sm:text-[15px]">
                <span className="mt-0.5 shrink-0 text-[#F5A623]">
                  <FooterIcon type="location" />
                </span>
                <span>730 Peachtree Street NE, #570 Atlanta, GA 30308</span>
              </div>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="lg:pl-10">
            <SectionHeading>Stay Connected</SectionHeading>

            <p className="mt-5 max-w-[290px] text-[13px] leading-[1.8] text-white/75 sm:mt-7 sm:text-[15px] sm:text-white/85">
              Follow Credoe Talent for leadership insights, company updates, and
              perspectives from our team.
            </p>

            {/* Social media links */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.type}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="group inline-flex min-h-[46px] items-center gap-3 rounded-[5px] border border-[#F5A623]/50 px-4 text-[12px] font-semibold text-white transition-all duration-300 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#020D19] sm:min-h-[50px] sm:px-5 sm:text-[13px]"
                >
                  <SocialIcon type={social.type} />
                  <span>LinkedIn</span>
                  <span className="text-[16px] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}

              {/* Instagram coming soon */}
              <div
                aria-label="Instagram coming soon"
                className="inline-flex min-h-[46px] items-center gap-3 rounded-[5px] border border-white/15 px-4 text-[12px] font-semibold text-white/65 sm:min-h-[50px] sm:px-5 sm:text-[13px]"
              >
                <SocialIcon type="instagram" />

                <span>Instagram</span>

                <span className="rounded-full border border-[#F5A623]/35 bg-[#F5A623]/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#F5A623]">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-9 border-t border-white/10 pt-5 sm:mt-14 sm:pt-8 lg:mt-14">
          <div className="flex flex-col gap-4 text-[12px] text-white/75 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:text-[14px] sm:text-white/90">
            <p>© 2026 Credoe Talent Solutions. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-[#F5A623]"
              >
                Privacy Policy
              </a>

              <span
                className="hidden h-[19px] w-px sm:block"
                style={{ backgroundColor: GOLD }}
              />

              <a
                href="/terms-of-service"
                className="transition-colors hover:text-[#F5A623]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fine rule */}
        <div className="mt-7 h-px bg-white/[0.07] sm:mt-8" />
      </div>
    </footer>
  );
}
