"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

const menuItems = [
  { title: "HOME", path: "/" },
  { title: "ABOUT", path: "/about" },
  { title: "RESOURCES", path: "/resources" },
  { title: "CONTACT", path: "/contact" },
];

const services = [
  {
    title: "Executive Search",
    description: "Finding exceptional leaders who move organizations forward.",
    path: "/services/executive-search",
    number: "01",
  },
  {
    title: "Talent Advisory",
    description: "Building stronger talent strategies for lasting success.",
    path: "/services/talent-advisory",
    number: "02",
  },
  {
    title: "Succession Planning",
    description:
      "Preparing future leaders and strengthening leadership continuity.",
    path: "/services/succession-planning",
    number: "03",
  },
  {
    title: "Executive & Leadership Career Coaching",
    description:
      "Empowering leaders to grow, perform, and lead with confidence.",
    path: "/services/leadership-coaching",
    number: "04",
  },
];

export default function UserNav() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const servicesDropdownRef = useRef(null);

  // Smart sticky navigation: hide while scrolling down, show while scrolling up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(0, window.scrollY);
        const previousScrollY = lastScrollY.current;
        const scrollDifference = currentScrollY - previousScrollY;

        setIsScrolled(currentScrollY > 30);

        // Always show navigation at the top of the page
        if (currentScrollY <= 30) {
          setIsVisible(true);
        }
        // Avoid reacting to tiny trackpad or touch scroll movements
        else if (Math.abs(scrollDifference) > 5) {
          if (scrollDifference > 0) {
            // Scrolling down
            setIsVisible(false);
            setServicesOpen(false);
          } else {
            // Scrolling up
            setIsVisible(true);
          }
        }

        lastScrollY.current = currentScrollY;
        ticking = false;
      });
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close navigation when the route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIsVisible(true);
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isServiceActive = services.some(
    (service) =>
      pathname === service.path || pathname.startsWith(`${service.path}/`),
  );

  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  // Close desktop dropdown when keyboard focus leaves its area
  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setServicesOpen(false);
    }
  };

  // Close dropdown with Escape
  const handleDropdownKeyDown = (event) => {
    if (event.key === "Escape") {
      setServicesOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      } ${
        isScrolled
          ? "border-b border-white/10 bg-[#07172B]/95 shadow-[0_6px_25px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1800px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-16 ${
          isScrolled ? "py-2.5 lg:py-3" : "py-4 lg:py-6"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Credoe Talent home"
          className="relative z-50 block shrink-0"
        >
          <Image
            src="/logos/logo.png"
            alt="Credoe Talent Solutions"
            width={350}
            height={120}
            priority
            className={`h-auto transition-all duration-300 ${
              isScrolled
                ? "w-[135px] sm:w-[150px] lg:w-[165px]"
                : "w-[155px] sm:w-[175px] lg:w-[190px]"
            }`}
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:flex 2xl:gap-9">
          <div className="flex items-center gap-5 2xl:gap-9">
            {menuItems.slice(0, 2).map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-2 py-3 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#F5A623]"
                      : "text-white hover:text-[#F5A623]"
                  }`}
                >
                  {item.title}

                  <span
                    className={`absolute bottom-1 left-2 right-2 h-0.5 origin-left bg-[#F5A623] transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Services dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onBlur={handleDropdownBlur}
              onKeyDown={handleDropdownKeyDown}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`relative flex cursor-pointer items-center gap-2 px-2 py-3 text-sm font-medium transition-colors duration-200 ${
                  isServiceActive || servicesOpen
                    ? "text-[#F5A623]"
                    : "text-white hover:text-[#F5A623]"
                }`}
              >
                SERVICES
                <FaChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-2 right-2 h-0.5 origin-left bg-[#F5A623] transition-transform duration-200 ${
                    isServiceActive || servicesOpen
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute left-1/2 top-full z-50 w-[390px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-3 opacity-0"
                }`}
              >
                <div className="overflow-hidden border border-[#F5A623]/20 bg-[#08172D] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  {/* Dropdown heading */}
                  <div className="border-b border-white/10 px-6 py-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
                      Our Expertise
                    </span>

                    <p className="mt-2 font-heading text-xl text-white">
                      Strategic Talent Solutions
                    </p>
                  </div>

                  {/* Service links */}
                  <div className="p-2">
                    {services.map((service) => {
                      const active = isActive(service.path);

                      return (
                        <Link
                          key={service.path}
                          href={service.path}
                          onClick={() => setServicesOpen(false)}
                          className={`group/item flex items-center gap-4 px-4 py-4 transition-colors duration-200 ${
                            active ? "bg-[#F5A623]/10" : "hover:bg-white/[0.06]"
                          }`}
                        >
                          <span className="font-heading text-sm text-[#F5A623]/70">
                            {service.number}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span
                              className={`block text-[13px] font-semibold transition-colors ${
                                active
                                  ? "text-[#F5A623]"
                                  : "text-white group-hover/item:text-[#F5A623]"
                              }`}
                            >
                              {service.title}
                            </span>

                            <span className="mt-1 block text-[11px] leading-relaxed text-white/45">
                              {service.description}
                            </span>
                          </span>

                          <FaArrowRight
                            className={`h-3 w-3 shrink-0 transition-all duration-200 ${
                              active
                                ? "translate-x-0 text-[#F5A623]"
                                : "-translate-x-2 text-white/30 opacity-0 group-hover/item:translate-x-0 group-hover/item:text-[#F5A623] group-hover/item:opacity-100"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom detail */}
                  <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Credoe Talent Solutions
                    </span>

                    <span className="h-[2px] w-8 bg-[#F5A623]" />
                  </div>
                </div>
              </div>
            </div>

            {menuItems.slice(2).map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-2 py-3 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#F5A623]"
                      : "text-white hover:text-[#F5A623]"
                  }`}
                >
                  {item.title}

                  <span
                    className={`absolute bottom-1 left-2 right-2 h-0.5 origin-left bg-[#F5A623] transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Contact button */}
          <Link
            href="/contact"
            className={`ml-3 inline-flex items-center justify-center rounded-md bg-[#F5A623] text-sm font-bold text-black transition-all duration-300 hover:bg-white ${
              isScrolled ? "min-h-[42px] px-5" : "min-h-[50px] px-7"
            }`}
          >
            LET'S CONNECT
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition-all duration-300 xl:hidden"
        >
          {menuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`absolute inset-x-0 top-0 z-40 bg-[#080D19] px-6 pb-8 pt-24 shadow-2xl transition-all duration-300 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-lg flex-col">
          {menuItems.slice(0, 2).map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium tracking-wider transition-colors ${
                  active ? "text-[#F5A623]" : "text-white hover:text-[#F5A623]"
                }`}
              >
                {item.title}
                <FaArrowRight className="-rotate-45 text-white/50" />
              </Link>
            );
          })}

          {/* Mobile services accordion */}
          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              className={`flex w-full items-center justify-between py-4 text-sm font-medium tracking-wider transition-colors ${
                isServiceActive || servicesOpen
                  ? "text-[#F5A623]"
                  : "text-white"
              }`}
            >
              SERVICES
              <FaChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180 text-[#F5A623]" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                servicesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-1 pb-4 pl-3">
                  {services.map((service) => {
                    const active = isActive(service.path);

                    return (
                      <Link
                        key={service.path}
                        href={service.path}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 border-l-2 py-3 pl-4 text-[13px] transition-colors ${
                          active
                            ? "border-[#F5A623] bg-[#F5A623]/[0.06] text-[#F5A623]"
                            : "border-white/10 text-white/70 hover:border-[#F5A623] hover:text-[#F5A623]"
                        }`}
                      >
                        <span className="text-[10px] text-[#F5A623]/60">
                          {service.number}
                        </span>

                        {service.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {menuItems.slice(2).map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium tracking-wider transition-colors ${
                  active ? "text-[#F5A623]" : "text-white hover:text-[#F5A623]"
                }`}
              >
                {item.title}
                <FaArrowRight className="-rotate-45 text-white/50" />
              </Link>
            );
          })}

          {/* Mobile contact button */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 flex min-h-[48px] items-center justify-center gap-3 rounded-md bg-[#F5A623] px-6 text-sm font-bold text-black transition-colors hover:bg-white"
          >
            LET'S CONNECT
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
