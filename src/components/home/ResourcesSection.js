"use client";

import { useState } from "react";

const GOLD = "#D98616";

const categories = [
  "All",
  "Articles",
  "Guides",
  "Whitepapers",
  "Videos",
  "Podcasts",
];

const resources = [
  {
    id: 1,
    category: "Articles",
    label: "ARTICLE",
    date: "May 14, 2024",
    title: "The Future of Leadership: 5 Shifts Every CEO Must Embrace",
    description: "Explore the key leadership shifts shaping the next decade.",
    image: "/images/blogCardOne.png",
    icon: "article",
    href: "/resources/future-of-leadership",
  },
  {
    id: 2,
    category: "Guides",
    label: "GUIDE",
    date: "Apr 28, 2024",
    title: "A Leader’s Guide to Building High-Performing Teams",
    description:
      "Proven strategies to build collaboration, drive performance, and achieve results.",
    image: "/images/blogCardTwo.png",
    icon: "guide",
    href: "/resources/high-performing-teams",
  },
  {
    id: 3,
    category: "Videos",
    label: "VIDEO",
    date: "Apr 18, 2024",
    title: "How to Attract and Retain Top Executive Talent",
    description:
      "Founder insights on what top talent looks for and how to win them.",
    image: "/images/cardThreeImg.png",
    icon: "video",
    href: "/resources/executive-talent",
  },
  {
    id: 4,
    category: "Podcasts",
    label: "PODCAST",
    date: "May 02, 2024",
    title: "Talent Conversations with Industry Leaders",
    description: "Real conversations on leadership, talent, and what’s next.",
    image: "/images/cardFourImg.png",
    icon: "podcast",
    href: "/resources/talent-conversations",
  },
];

function ResourceIcon({ type, className = "h-7 w-7" }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      {...shared}
    >
      {type === "article" && (
        <>
          <path d="M8 4h11l6 6v18H8z" />
          <path d="M19 4v7h6M12 16h9M12 20h9M12 24h6" />
        </>
      )}

      {type === "guide" && (
        <>
          <path d="M3 6c5-2 10-1 13 2v20c-3-3-8-4-13-2z" />
          <path d="M29 6c-5-2-10-1-13 2v20c3-3 8-4 13-2z" />
          <path d="M8 11c2 0 4 .5 5 1.5M8 16c2 0 4 .5 5 1.5M24 11c-2 0-4 .5-5 1.5M24 16c-2 0-4 .5-5 1.5" />
        </>
      )}

      {type === "video" && (
        <>
          <circle cx="16" cy="16" r="13" />
          <path d="m13 10 9 6-9 6z" />
        </>
      )}

      {type === "podcast" && (
        <>
          <rect x="11" y="4" width="10" height="17" rx="5" />
          <path d="M6 15v2a10 10 0 0 0 20 0v-2M16 27v3M11 30h10" />
        </>
      )}

      {type === "email" && (
        <>
          <rect x="3" y="6" width="26" height="20" rx="1.5" />
          <path d="m4 8 12 10L28 8" />
        </>
      )}
    </svg>
  );
}

function ArrowIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function ResourceCard({ resource }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#EDEDED] bg-white shadow-[0_3px_12px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
      {/* Resource image */}
      <a
        href={resource.href}
        aria-label={`Read ${resource.title}`}
        className="relative block h-[174px] shrink-0 overflow-hidden bg-[#071321] sm:h-[180px]"
      >
        <img
          src={resource.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061321]/25 to-transparent" />
      </a>

      {/* Overlapping category icon */}
      <div className="relative z-10 -mt-10 ml-5 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-white/70 bg-[#061525] text-[#F4A019] shadow-md">
        <ResourceIcon type={resource.icon} className="h-8 w-8" />
      </div>

      {/* Resource content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#C9790A]">
          {resource.label}
        </p>

        <p className="mt-3 text-[13px] text-[#536075]">{resource.date}</p>

        <h3 className="mt-2 min-h-[68px] font-heading text-[20px] font-semibold leading-[1.22] tracking-[-0.02em] text-[#0B1930] sm:text-[21px]">
          {resource.title}
        </h3>

        <p className="mt-4 min-h-[48px] text-[13px] leading-[1.7] text-[#18253A] sm:text-[14px]">
          {resource.description}
        </p>

        <a
          href={resource.href}
          aria-label={`Explore ${resource.title}`}
          className="mt-auto inline-flex w-fit items-center pt-3 text-[#D98616] transition-transform duration-300 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98616]"
        >
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API or provider here.
    setSubscribed(true);
  }

  return (
    <section
      id="resources"
      className="relative overflow-hidden bg-white py-14 text-[#0B1930] sm:py-16 lg:py-[52px]"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.04em] text-[#C9790A] sm:text-[16px]">
                Resources
              </p>

              <span className="h-px w-9 bg-[#D98616]" />
            </div>

            <h2 className="mt-4 max-w-[730px] font-heading text-[39px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0B1930] sm:text-[48px] lg:text-[58px]">
              Insights to Drive
              <br />
              Leadership <span className="text-[#D98616]">Forward.</span>
            </h2>

            <p className="mt-5 max-w-[650px] text-[15px] leading-[1.8] text-[#18253A] sm:text-[17px]">
              Practical insights, expert perspectives, and proven strategies to
              help you attract, develop, and retain exceptional talent.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-l-0 border-[#D98616]/70 pl-0 sm:pl-6 lg:min-h-[160px] lg:justify-center lg:border-l lg:pl-16">
            <p className="max-w-[460px] text-[15px] leading-[1.8] text-[#18253A] sm:text-[17px]">
              Stay informed with the latest trends, research, and expert advice
              on leadership and talent strategy.
            </p>

            <a
              href="/resources"
              className="group inline-flex min-h-[52px] w-fit items-center justify-between gap-5 rounded-md border border-[#D98616] px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#0B1930] transition duration-300 hover:bg-[#D98616] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98616] sm:min-w-[280px] sm:text-[14px]"
            >
              View All Resources
              <span className="text-[#D98616] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        {/* Category filters */}
        <div
          className="mt-7 flex gap-7 overflow-x-auto pb-0 sm:gap-9 lg:mt-8 lg:gap-10"
          role="tablist"
          aria-label="Filter resources by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 pb-3 text-[15px] transition-colors sm:text-[17px] ${
                  isActive
                    ? "font-medium text-[#C9790A]"
                    : "text-[#0B1930] hover:text-[#C9790A]"
                }`}
              >
                {category}

                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D98616]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Resource cards */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {/* Newsletter banner */}
        <div className="mt-8 rounded-lg border border-[#E9E9E9] bg-[#FDFDFC] px-5 py-6 sm:px-8 lg:mt-7 lg:px-9 lg:py-5">
          <div className="grid items-center gap-5 lg:grid-cols-[80px_minmax(0,1fr)_300px] lg:gap-5">
            <div className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#D98616] text-[#D98616] lg:mx-0">
              <ResourceIcon type="email" className="h-9 w-9" />
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-heading text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#0B1930] sm:text-[28px]">
                Get expert insights, straight to your inbox.
              </h3>

              <p className="mt-2 text-[14px] leading-relaxed text-[#18253A] sm:text-[16px]">
                Subscribe to our newsletter and never miss an update.
              </p>

              {subscribed && (
                <p
                  className="mt-2 text-sm font-medium text-green-700"
                  role="status"
                >
                  Thanks for subscribing! The form still needs to be connected
                  to your newsletter service to save your email.
                </p>
              )}
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row lg:justify-end"
            >
              <label htmlFor="resource-newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="resource-newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                placeholder="Your email address"
                required
                className="min-h-[48px] min-w-0 flex-1 rounded-md border border-[#E5E7EB] bg-white px-4 text-sm text-[#0B1930] outline-none placeholder:text-[#7B8493] focus:border-[#D98616] focus:ring-2 focus:ring-[#D98616]/20 lg:hidden"
              />

              <button
                type="submit"
                className="group flex min-h-[52px] w-full items-center justify-between gap-3 rounded-md bg-[#D98616] px-5 text-[#07111D] transition duration-300 hover:bg-[#F0A32E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98616] focus-visible:ring-offset-2 sm:min-w-[245px]"
              >
                <span className="flex-1 text-center text-[13px] font-bold uppercase tracking-wide">
                  Subscribe Now
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
