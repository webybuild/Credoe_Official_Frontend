"use client";

import { useState } from "react";

const GOLD = "#F4A019";

const industries = [
  { name: "Manufacturing", icon: "manufacturing" },
  { name: "Technology", icon: "technology" },
  { name: "Healthcare", icon: "healthcare" },
  { name: "Financial Services", icon: "finance" },
  { name: "Professional Services", icon: "professional" },
  { name: "Nonprofit", icon: "nonprofit" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Executive Search", href: "/services/executive-search" },
  { label: "Talent Advisory", href: "/services/talent-acquisition" },
  { label: "Market Intelligence", href: "/services/market-intelligence" },
  { label: "Leadership Advisory", href: "/services/leadership-advisory" },
  { label: "Interim Solutions", href: "/services/interim-solutions" },
];

function IndustryIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 sm:h-[54px] sm:w-[54px]"
      aria-hidden="true"
      {...common}
    >
      {type === "manufacturing" && (
        <>
          <path d="M5 52V33l13 8V30l13 9V24l14 9v19z" />
          <path d="M5 52h48" />
          <path d="M20 52V42h8v10M37 52V42h8v10" />
          <path d="M25 25V11l10-5v19" />
          <path d="M35 11l8-4 8 4v13" />
          <path d="M39 12l9 2 6-4" />
          <path d="M49 10l7 2-1-8-6 2" />
        </>
      )}

      {type === "technology" && (
        <>
          <rect x="5" y="8" width="54" height="37" rx="3" />
          <path d="M5 38h54" />
          <path d="M32 45v9M21 55h22" />
          <path d="M13 15h38" />
        </>
      )}

      {type === "healthcare" && (
        <>
          <path d="M32 55 9 32C-1 20 8 7 20 8c6 0 10 4 12 9 3-5 7-9 14-9 12 0 19 13 9 24z" />
          <path d="M9 31h12l5-12 8 25 6-16 4 6h11" />
        </>
      )}

      {type === "finance" && (
        <>
          <path d="M5 22 32 7l27 15z" />
          <path d="M8 55h48M5 60h54" />
          <path d="M12 25v26M24 25v26M40 25v26M52 25v26" />
          <circle cx="32" cy="17" r="2" />
        </>
      )}

      {type === "professional" && (
        <>
          <circle cx="32" cy="13" r="8" />
          <circle cx="14" cy="25" r="6" />
          <circle cx="50" cy="25" r="6" />
          <circle cx="20" cy="39" r="7" />
          <circle cx="44" cy="39" r="7" />
          <path d="M19 31c0-7 5-11 13-11s13 4 13 11" />
          <path d="M7 42c0-6 4-9 10-9M47 33c7 0 10 3 10 9" />
          <path d="M8 54c0-8 5-12 12-12m8 12c0-9 5-13 12-13s12 4 12 13z" />
        </>
      )}

      {type === "nonprofit" && (
        <>
          <path d="M32 29 17 15C8 7 17-1 25 6l7 7 7-7c8-7 17 1 8 9z" />
          <path d="M12 28 5 35l8 15 10 7h18l10-7 8-15-7-7-12 13-8-5-8 5z" />
          <path d="M12 28 23 39M52 28 41 39" />
          <path d="M24 43l8 6 8-6" />
        </>
      )}
    </svg>
  );
}

function FooterIcon({ type, className = "h-6 w-6" }) {
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
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8V21H3.3zM9.5 9.5h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5z" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.9 5.8 22H2.6l7.3-8.4L1.8 2h6.5l4.4 6.6zM17.8 19.8h1.7L7.3 4.1H5.5z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6z" />
    </svg>
  );
}

function SectionHeading({ children }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold uppercase tracking-[0.015em] text-white sm:text-[16px]">
        {children}
      </h3>
      <span className="mt-4 block h-[2px] w-[35px] bg-[#F4A019]" />
    </div>
  );
}

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (!email.trim()) return;

    // Connect your newsletter API or provider here.
    setSubscribed(true);
  }

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

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-10 sm:px-8 sm:pt-12 lg:px-11 lg:pt-14">
        {/* Industries strip */}
        <div className="grid overflow-hidden rounded-[4px] border border-white/10 bg-[#071321]/60 lg:grid-cols-[1.35fr_repeat(6,minmax(0,1fr))]">
          <div className="px-6 py-6 sm:px-8 lg:flex lg:min-h-[148px] lg:flex-col lg:justify-center lg:px-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[30px] shrink-0 bg-[#F4A019]" />
              <h2 className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.025em] text-[#F4A019] sm:text-[15px]">
                Industries We Serve
              </h2>
            </div>

            <p className="mt-4 max-w-[260px] text-[14px] leading-[1.7] text-white/90 sm:text-[15px]">
              From startups to enterprise, we help organizations in diverse
              industries thrive.
            </p>
          </div>

          {industries.map((industry, index) => (
            <a
              key={industry.name}
              href={`/industries/${industry.name.toLowerCase().replaceAll(" ", "-")}`}
              className={`flex min-h-[128px] flex-col items-center justify-center gap-3 border-t border-white/10 px-3 py-5 text-center transition-colors hover:bg-white/[0.04] sm:min-h-[140px] lg:border-l lg:border-t-0 lg:border-white/10 lg:px-2 ${
                index === 0 ? "lg:border-l-white/10" : ""
              }`}
            >
              <span className="text-white transition-colors duration-300 group-hover:text-[#F4A019]">
                <IndustryIcon type={industry.icon} />
              </span>

              <span className="text-[13px] leading-tight text-white/95 sm:text-[14px]">
                {industry.name}
              </span>
            </a>
          ))}
        </div>

        {/* Main footer columns */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-[104px] lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr_1.25fr] lg:gap-0">
          {/* Brand column */}
          <div className="border-white/15 sm:col-span-2 lg:col-span-1 lg:border-r lg:pr-8">
            <a
              href="/"
              aria-label="Credoe Talent Solutions home"
              className="inline-block"
            >
              <img
                src="/logos/logo.png"
                alt="Credoe Talent Solutions"
                className="h-auto w-[245px] max-w-full object-contain object-left"
              />
            </a>

            <p className="mt-8 max-w-[300px] text-[15px] leading-[1.95] text-white/85">
              Connecting exceptional talent with extraordinary organizations to
              drive meaningful impact.
            </p>

            <div className="mt-8 flex items-center gap-6">
              {[
                {
                  type: "linkedin",
                  href: "https://www.linkedin.com/",
                  label: "LinkedIn",
                },
                { type: "x", href: "https://x.com/", label: "X" },
                {
                  type: "youtube",
                  href: "https://www.youtube.com/",
                  label: "YouTube",
                },
              ].map((social) => (
                <a
                  key={social.type}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#F4A019]/60 text-white transition-colors hover:bg-[#F4A019] hover:text-[#020D19]"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:border-r lg:border-white/15 lg:px-8">
            <SectionHeading>Quick Links</SectionHeading>

            <ul className="mt-7">
              {quickLinks.map((link) => (
                <li
                  key={link.label}
                  className="border-b border-white/[0.08] last:border-b-0"
                >
                  <a
                    href={link.href}
                    className="group flex min-h-[45px] items-center justify-between gap-3 text-[14px] text-white/95 transition-colors hover:text-[#F4A019] sm:text-[15px]"
                  >
                    {link.label}
                    <span className="text-[25px] leading-none text-[#F4A019] transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:border-r lg:border-white/15 lg:px-8">
            <SectionHeading>Our Services</SectionHeading>

            <ul className="mt-7 space-y-[15px]">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-[14px] leading-relaxed text-white/95 transition-colors hover:text-[#F4A019] sm:text-[15px]"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:border-r lg:border-white/15 lg:px-8">
            <SectionHeading>Contact</SectionHeading>

            <div className="mt-7">
              <a
                href="tel:+16087922125"
                className="flex items-center gap-4 border-b border-white/10 pb-5 text-[14px] text-white/95 transition-colors hover:text-[#F4A019] sm:text-[15px]"
              >
                <span className="shrink-0 text-[#F4A019]">
                  <FooterIcon type="phone" />
                </span>
                <span>(608) 792-2125</span>
              </a>

              <a
                href="mailto:andre@credoetalent.com"
                className="flex items-center gap-4 border-b border-white/10 py-5 text-[13px] text-white/95 transition-colors hover:text-[#F4A019] sm:text-[14px] xl:text-[15px]"
              >
                <span className="shrink-0 text-[#F4A019]">
                  <FooterIcon type="email" />
                </span>
                <span className="break-all">andre@credoetalent.com</span>
              </a>

              <div className="flex items-center gap-4 py-5 text-[14px] text-white/95 sm:text-[15px]">
                <span className="shrink-0 text-[#F4A019]">
                  <FooterIcon type="location" />
                </span>
                <span>Menomonee Falls, WI</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-10">
            <SectionHeading>Stay Connected</SectionHeading>

            <p className="mt-7 max-w-[290px] text-[14px] leading-[1.8] text-white/85 sm:text-[15px]">
              Subscribe to our newsletter for insights and industry updates.
            </p>

            <form onSubmit={handleSubscribe} className="mt-7 max-w-[360px]">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Your email address
              </label>

              <div className="flex min-h-[52px] overflow-hidden rounded-[5px] border border-white/15 bg-[#081523] focus-within:border-[#F4A019]">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 text-[14px] text-white outline-none placeholder:text-white/65"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex w-[58px] shrink-0 items-center justify-center bg-[#F4A019] text-[#071321] transition-colors hover:bg-[#FFB83E]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>

              {subscribed && (
                <p role="status" className="mt-3 text-sm text-[#F4A019]">
                  Thanks for subscribing. Connect this form to your newsletter
                  service to save the address.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14 sm:pt-8 lg:mt-14">
          <div className="flex flex-col gap-5 text-[13px] text-white/90 sm:flex-row sm:items-center sm:justify-between sm:text-[14px]">
            <p>© 2026 Credoe Talent Solutions. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-8">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-[#F4A019]"
              >
                Privacy Policy
              </a>

              <span className="hidden h-[19px] w-px bg-[#F4A019] sm:block" />

              <a
                href="/terms-of-service"
                className="transition-colors hover:text-[#F4A019]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fine rule */}
        <div className="mt-8 h-px bg-white/[0.07]" />
      </div>
    </footer>
  );
}
