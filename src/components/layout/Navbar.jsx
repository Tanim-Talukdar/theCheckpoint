"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },

  {
    name: "Visa Processing",
    href: "/visaprocessing",
  },

  {
    name: "Success Story",
    href: "/gallery",
  },

  // NO ITEMS = NO DROPDOWN
  {
    name: "About",
    href: "/about",
  },

  // NO ITEMS = NO DROPDOWN
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-4 sm:px-6 sm:pt-5">
      <nav
        className="
          relative mx-auto max-w-7xl
          rounded-[2.8rem]
          border border-white/70
          bg-white/45
          px-3 py-2.5
          shadow-[0_12px_45px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.95)]
          backdrop-blur-[35px]
          backdrop-saturate-150
          sm:px-4 sm:py-3
        "
      >
        {/* Top glass highlight */}
        <div className="pointer-events-none absolute left-10 right-10 top-0 h-px rounded-full bg-white" />

        {/* Left glass half-circle */}
        <div
          className="
            pointer-events-none
            absolute -left-[1px] top-1/2
            h-12 w-6 -translate-y-1/2
            rounded-r-full
            border border-l-0 border-white/70
            bg-white/25
            shadow-[inset_-5px_0_12px_rgba(255,255,255,0.4)]
            backdrop-blur-xl
          "
        />

        <div className="relative flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="
              group flex items-center gap-3
              rounded-2xl px-2 py-1
              transition-all duration-300
              hover:bg-white/30
            "
          >
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                overflow-hidden
                rounded-2xl
                border border-white/80
                bg-white/50
                p-1
                shadow-[0_5px_18px_rgba(0,0,0,0.05)]
                backdrop-blur-xl
                transition-all duration-500
                group-hover:scale-105
                group-hover:rotate-1
              "
            >
              <img
                src="/dhaka-foreign-academy.webp"
                alt="Dhaka Foreign Academy"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden leading-none sm:flex sm:flex-col">
              <span className="text-[17px] font-bold tracking-[-0.03em] text-gray-700">
                Dhaka Foreign Academy
              </span>

              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gray-400">
                Language & Education
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP ================= */}

          <div className="hidden items-center gap-1 lg:flex">

            {menus.map((menu) => {
              const hasItems =
                Array.isArray(menu.items) && menu.items.length > 0;

              const active = isActive(menu.href);

              {/* NORMAL LINK */}

              if (!hasItems) {
                return (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    className={`
                      group relative

                      rounded-2xl

                      px-4 py-2.5

                      text-sm
                      font-medium

                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            bg-gradient-to-r
                            from-[#BC002D]/12
                            via-white/70
                            to-[#006A4E]/12

                            text-gray-950

                            shadow-[0_5px_20px_rgba(0,0,0,0.07)]
                          `
                          : `
                            text-gray-600
                            hover:bg-gradient-to-r
                            hover:from-[#BC002D]/10
                            hover:via-white/60
                            hover:to-[#006A4E]/10
                            hover:text-gray-950
                            hover:-translate-y-[1px]
                          `
                      }
                    `}
                  >
                    {/* Active indicator */}

                    {active && (
                      <span
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-[2px]
                          w-5
                          -translate-x-1/2

                          rounded-full

                          bg-gradient-to-r
                          from-[#BC002D]
                          via-gray-500
                          to-[#006A4E]

                          shadow-[0_0_8px_rgba(0,106,78,0.35)]
                        "
                      />
                    )}

                    {menu.name}
                  </Link>
                );
              }

              {/* DROPDOWN */}

              return (
                <div
                  key={menu.name}
                  className="group relative"
                >
                  <Link
                    href={menu.href}
                    className={`
                      relative

                      flex
                      items-center
                      gap-1.5

                      rounded-2xl

                      px-3.5 py-2.5

                      text-sm
                      font-medium

                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            bg-gradient-to-r
                            from-[#BC002D]/12
                            via-white/70
                            to-[#006A4E]/12

                            text-gray-950

                            shadow-[0_5px_20px_rgba(0,0,0,0.07)]
                          `
                          : `
                            text-gray-600

                            hover:-translate-y-[1px]

                            hover:bg-gradient-to-r
                            hover:from-[#BC002D]/10
                            hover:via-white/60
                            hover:to-[#006A4E]/10

                            hover:text-gray-950

                            hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                          `
                      }
                    `}
                  >
                    {menu.name}

                    <svg
                      className="
                        h-3.5 w-3.5
                        text-gray-400
                        transition-all
                        duration-300
                        group-hover:rotate-180
                        group-hover:text-[#006A4E]
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>

                    {/* Active underline */}

                    {active && (
                      <span
                        className="
                          absolute
                          bottom-1
                          left-1/2

                          h-[2px]
                          w-5

                          -translate-x-1/2

                          rounded-full

                          bg-gradient-to-r
                          from-[#BC002D]
                          via-gray-500
                          to-[#006A4E]

                          shadow-[0_0_8px_rgba(188,0,45,0.25)]
                        "
                      />
                    )}
                  </Link>

                  {/* DROPDOWN */}

                  <div
                    className="
                      invisible

                      absolute
                      left-1/2
                      top-full

                      mt-2
                      w-52

                      -translate-x-1/2
                      translate-y-2

                      rounded-[1.5rem]

                      border border-white/70

                      bg-white/60

                      p-2

                      opacity-0

                      shadow-[0_20px_60px_rgba(0,0,0,0.10)]

                      backdrop-blur-[30px]
                      backdrop-saturate-150

                      transition-all
                      duration-200

                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {menu.items.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="
                          group/item
                          relative
                          block

                          overflow-hidden

                          rounded-xl

                          px-4 py-2.5

                          text-sm
                          font-medium
                          text-gray-600

                          transition-all
                          duration-300

                          hover:translate-x-1

                          hover:bg-gradient-to-r
                          hover:from-[#BC002D]/8
                          hover:via-white/60
                          hover:to-[#006A4E]/8

                          hover:text-gray-900
                        "
                      >
                        {/* Hover indicator */}

                        <span
                          className={`
                            absolute
                            left-1.5
                            top-1/2

                            h-1.5
                            w-1.5

                            -translate-y-1/2
                            scale-0

                            rounded-full

                            transition-transform
                            duration-300

                            group-hover/item:scale-100

                            ${
                              index % 2 === 0
                                ? "bg-[#BC002D]"
                                : "bg-[#006A4E]"
                            }
                          `}
                        />

                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= MOBILE ================= */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              flex h-11 w-11
              items-center justify-center

              rounded-full

              border border-white/80

              bg-white/45

              shadow-[0_5px_20px_rgba(0,0,0,0.06)]

              backdrop-blur-2xl

              transition-all duration-300

              hover:scale-105
              hover:bg-white/70

              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <span className="text-xl text-gray-700">
                ×
              </span>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-gray-500" />
                <span className="h-0.5 w-5 rounded-full bg-gray-700" />
                <span className="h-0.5 w-5 rounded-full bg-gray-500" />
              </div>
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {mobileOpen && (
          <div
            className="
              mt-3

              rounded-[1.7rem]

              border border-white/70

              bg-white/60

              p-2

              shadow-[0_15px_50px_rgba(0,0,0,0.08)]

              backdrop-blur-[30px]

              lg:hidden
            "
          >
            {menus.map((menu) => {
              const hasItems =
                Array.isArray(menu.items) && menu.items.length > 0;

              const active = isActive(menu.href);

              if (!hasItems) {
                return (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      block
                      rounded-xl
                      px-4 py-3

                      text-sm
                      font-medium

                      transition-all
                      duration-300

                      ${
                        active
                          ? "bg-gradient-to-r from-[#BC002D]/10 via-white/70 to-[#006A4E]/10 text-gray-950 shadow-sm"
                          : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
                      }
                    `}
                  >
                    {menu.name}
                  </Link>
                );
              }

              return (
                <details
                  key={menu.name}
                  className="group"
                >
                  <div className="flex items-center">

                    <Link
                      href={menu.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        flex-1
                        rounded-xl
                        px-4 py-3

                        text-sm
                        font-medium

                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-gradient-to-r from-[#BC002D]/10 via-white/70 to-[#006A4E]/10 text-gray-950"
                            : "text-gray-600 hover:bg-white/60"
                        }
                      `}
                    >
                      {menu.name}
                    </Link>

                    <summary
                      className="
                        flex
                        cursor-pointer
                        list-none

                        items-center
                        justify-center

                        rounded-xl

                        px-4 py-3

                        text-gray-400

                        transition-all

                        hover:bg-white/60
                      "
                    >
                      <svg
                        className="
                          h-4 w-4

                          transition-transform
                          duration-300

                          group-open:rotate-180
                        "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </summary>
                  </div>

                  <div className="px-3 pb-2">
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="
                          block

                          rounded-xl

                          px-4 py-2.5

                          text-sm
                          text-gray-500

                          transition-all
                          duration-300

                          hover:translate-x-1
                          hover:bg-white/60
                          hover:text-gray-900
                        "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}