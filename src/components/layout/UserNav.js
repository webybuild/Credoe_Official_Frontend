"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

const menuItems = [
  { title: "HOME", path: "/" },
  { title: "ABOUT", path: "/about" },
  { title: "SERVICES", path: "/services" },
  { title: "RESOURCES", path: "/resources" },
  { title: "CONTACT", path: "/contact" },
];

export default function UserNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-5 py-5 sm:px-8 lg:px-16 lg:py-8">
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
            className="h-auto w-[155px] sm:w-[175px] lg:w-[190px]"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:flex 2xl:gap-9">
          <div className="flex items-center gap-5 2xl:gap-9">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.path !== "/" && pathname.startsWith(`${item.path}/`));

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-2 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#F5A623]"
                      : "text-white hover:text-[#F5A623]"
                  }`}
                >
                  {item.title}

                  <span
                    className={`absolute bottom-1 left-2 right-2 h-0.5 bg-[#F5A623] transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="ml-3 inline-flex min-h-[54px] items-center justify-center rounded-md bg-[#F5A623] px-7 text-sm font-bold text-black transition-colors duration-200 hover:bg-white"
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
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white xl:hidden"
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
          {menuItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(`${item.path}/`));

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium tracking-wider transition-colors ${
                  isActive
                    ? "text-[#F5A623]"
                    : "text-white hover:text-[#F5A623]"
                }`}
              >
                {item.title}
                <FaArrowRight
                  className={`-rotate-45 ${
                    isActive ? "text-[#F5A623]" : "text-white/50"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 flex min-h-[52px] items-center justify-center gap-3 rounded-md bg-[#F5A623] px-6 text-sm font-bold text-black transition-colors hover:bg-white"
          >
            LET'S CONNECT
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
