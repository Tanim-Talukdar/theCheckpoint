
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Packages & Memberships",
    href: "/packagesmemberships",
  },
  {
    name: "Gaming",
    href: "/gaming",
  },
  {
    name: "Restaurant",
    href: "/restaurant",
  },
  {
    name: "Gym",
    href: "/gym",
  },
  {
    name: "Contact",
    href: "/contact",
  },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#07101c]/80 shadow-2xl backdrop-blur-xl">

        {/* =====================================================
            DESKTOP / TOP BAR
        ====================================================== */}

        <div className="flex h-[68px] items-center justify-between px-5 sm:px-7">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="group flex items-center gap-3"
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
    flex h-10 w-10 items-center justify-center
    overflow-hidden
    rounded-lg
    shadow-lg shadow-blue-600/10
  "
>
  <Image
    src="/logo.png"
    alt="Cirmatch Logo"
    width={40}
    height={40}
    className="h-full w-full object-cover"
  />
</motion.div>

            <div className="leading-none">
              <h1 className="text-[15px] font-black tracking-[0.08em] text-white">
                THE CHECKPOINT
              </h1>

              <p className="mt-1 text-[7px] font-medium tracking-[0.3em] text-slate-500">
                GAMING · DINING · FITNESS
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  group relative
                  rounded-lg
                  px-4 py-2.5
                  text-sm font-medium
                  text-slate-400
                  transition duration-200
                  hover:text-white
                "
              >
                {/* Hover background */}

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute inset-0 -z-10
                    rounded-lg
                    bg-white/5
                  "
                />

                {link.name}

                {/* Blue underline */}

                <motion.span
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileHover={{
                    width: 16,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-blue-500
                  "
                />
              </Link>
            ))}
          </div>

          {/* =================================================
              DESKTOP RIGHT
          ================================================== */}

          <div className="hidden items-center gap-5 lg:flex">

            {/* About */}

            <motion.div
              whileHover={{
                y: -1,
              }}
            >
              <Link
                href="#about"
                className="
                  text-sm font-medium
                  text-slate-400
                  transition
                  hover:text-white
                "
              >
                About
              </Link>
            </motion.div>

            {/* Book Now */}

            <motion.div
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                href="#booking"
                className="
                  group
                  flex items-center gap-2
                  rounded-xl
                  bg-blue-600
                  px-5 py-3
                  text-xs font-bold
                  tracking-wide
                  text-white
                  shadow-lg shadow-blue-600/10
                  transition duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)]
                "
              >
                BOOK NOW

                <motion.span
                  className="inline-flex"
                  whileHover={{
                    x: 3,
                    y: -3,
                  }}
                >
                  <FiArrowUpRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            type="button"
            onClick={() => setOpen(!open)}
            whileTap={{
              scale: 0.88,
            }}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-lg
              border border-white/10
              bg-white/[0.03]
              text-white
              transition
              hover:bg-white/[0.06]
              lg:hidden
            "
            aria-label="Toggle navigation menu"
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
                  transition={{
                    duration: 0.2,
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
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiMenu size={22} />
                </motion.span>
              )}

            </AnimatePresence>
          </motion.button>

        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

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
                lg:hidden
              "
            >

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-col"
              >

                {/* Navigation Links */}

                {links.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -15,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="
                        group
                        flex items-center
                        rounded-lg
                        px-3 py-3
                        text-sm font-medium
                        text-slate-300
                        transition
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      {link.name}

                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -4,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="ml-auto"
                      >
                        <FiArrowUpRight size={14} />
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

                {/* About */}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -15,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Link
                    href="#about"
                    onClick={() => setOpen(false)}
                    className="
                      group
                      flex items-center
                      rounded-lg
                      px-3 py-3
                      text-sm font-medium
                      text-slate-300
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    About

                    <motion.span
                      initial={{
                        opacity: 0,
                      }}
                      whileHover={{
                        opacity: 1,
                      }}
                      className="ml-auto"
                    >
                      <FiArrowUpRight size={14} />
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Mobile Book Button */}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <motion.div
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    <Link
                      href="#booking"
                      onClick={() => setOpen(false)}
                      className="
                        group
                        mt-3
                        flex items-center
                        justify-center gap-2
                        rounded-xl
                        bg-blue-600
                        px-5 py-3
                        text-sm font-bold
                        text-white
                        shadow-lg shadow-blue-600/10
                        transition
                        hover:bg-blue-500
                      "
                    >
                      BOOK NOW

                      <motion.span
                        whileHover={{
                          x: 3,
                          y: -3,
                        }}
                      >
                        <FiArrowUpRight size={17} />
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}

