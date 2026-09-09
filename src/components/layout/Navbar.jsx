
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiFilm,
  FiActivity,
  FiDroplet,
} from "react-icons/fi";

const links = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "Gaming",
    href: "/#gaming",
  },
  {
    name: "Restaurant",
    href: "/#restaurant",
  },
  {
    name: "Gym",
    href: "/#packages",
    icon: FiActivity,
  },
  {
    name: "Swimming Pool",
    href: "/#packages",
    icon: FiDroplet,
  },
  {
    name: "Membership & Packages",
    href: "/#packages",
  },
  {
    name: "Movie",
    href: "/movie",
    icon: FiFilm,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className="
          mx-auto max-w-7xl
          rounded-2xl
          border border-white/10
          bg-[#07101c]/80
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* ================= MAIN BAR ================= */}

        <div className="flex h-[68px] items-center justify-between px-5 sm:px-7">
          
          {/* LOGO */}

          <a
            href="/#home"
            onClick={handleNavClick}
            className="group flex shrink-0 items-center gap-3"
            aria-label="The Checkpoint Home"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -4,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
              className="
                flex h-10 w-10
                items-center justify-center
                overflow-hidden
                rounded-lg
                shadow-lg
                shadow-blue-600/10
              "
            >
              <Image
                src="/logo.png"
                alt="The Checkpoint Logo"
                width={40}
                height={40}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div className="leading-none">
              <span className="block text-[15px] font-black tracking-[0.08em] text-white">
                THE CHECKPOINT
              </span>

              <span className="mt-1 block text-[7px] font-medium tracking-[0.3em] text-slate-500">
                GAMING · DINING · FITNESS
              </span>
            </div>
          </a>

          {/* ================= DESKTOP NAV ================= */}

          <div className="hidden items-center gap-1 xl:flex">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group relative
                    flex items-center
                    rounded-lg
                    px-2.5 py-2.5
                    text-[13px] font-medium
                    text-slate-400
                    transition duration-200
                    hover:text-white
                  "
                >
                  {/* Hover background */}

                  <span
                    className="
                      absolute inset-0 -z-10
                      scale-90
                      rounded-lg
                      bg-white/5
                      opacity-0
                      transition duration-200
                      group-hover:scale-100
                      group-hover:opacity-100
                    "
                  />

                  {/* Icon */}

                  {Icon && (
                    <Icon
                      size={13}
                      className="
                        mr-1.5
                        text-blue-400
                        transition
                        group-hover:text-blue-300
                      "
                    />
                  )}

                  {link.name}

                  {/* Bottom indicator */}

                  <span
                    className="
                      absolute
                      bottom-1.5
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-blue-500
                      opacity-0
                      transition-all duration-300
                      group-hover:w-4
                      group-hover:opacity-100
                    "
                  />
                </a>
              );
            })}
          </div>

          {/* ================= SINGLE CONTACT BUTTON ================= */}

          <div className="hidden xl:flex">
            <a
              href="/#contact"
              className="
                group flex items-center gap-2
                rounded-xl
                bg-blue-600
                px-5 py-3
                text-xs font-bold
                tracking-wide
                text-white
                shadow-lg
                shadow-blue-600/10
                transition duration-300
                hover:bg-blue-500
              "
            >
              CONTACT US

              <FiArrowUpRight
                size={16}
                className="
                  transition duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <motion.button
            type="button"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.88 }}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-lg
              border border-white/10
              bg-white/[0.03]
              text-white
              transition
              hover:bg-white/[0.06]
              xl:hidden
            "
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                >
                  <FiX size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                >
                  <FiMenu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                border-t border-white/10
                px-5 pb-5 pt-3
                xl:hidden
              "
            >
              <div className="flex flex-col">
                
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={handleNavClick}
                        className="
                          group flex items-center
                          rounded-lg
                          px-3 py-3
                          text-sm font-medium
                          text-slate-300
                          transition
                          hover:bg-white/5
                          hover:text-white
                        "
                      >
                        {/* Left Icon */}

                        {Icon && (
                          <Icon
                            size={15}
                            className="
                              mr-3
                              text-blue-400
                            "
                          />
                        )}

                        {link.name}

                        {/* Right Icon */}

                        <FiArrowUpRight
                          size={14}
                          className="
                            ml-auto
                            text-white/20
                            transition
                            group-hover:text-blue-400
                          "
                        />
                      </a>
                    </motion.div>
                  );
                })}

                {/* MOBILE CONTACT BUTTON */}

                <a
                  href="/#contact"
                  onClick={handleNavClick}
                  className="
                    group mt-3
                    flex items-center
                    justify-center gap-2
                    rounded-xl
                    bg-blue-600
                    px-5 py-3
                    text-sm font-bold
                    text-white
                    shadow-lg
                    shadow-blue-600/10
                    transition
                    hover:bg-blue-500
                  "
                >
                  CONTACT US

                  <FiArrowUpRight
                    size={17}
                    className="
                      transition
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
