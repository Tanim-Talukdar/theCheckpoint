
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMonitor,
  FiCpu,
  FiHeadphones,
  FiCrosshair,
} from "react-icons/fi";

const gamingFeatures = [
  {
    icon: FiMonitor,
    title: "HIGH-END PC",
    text: "Powerful setups built for competitive gaming.",
  },
  {
    icon: FiCpu,
    title: "NEXT-GEN CONSOLE",
    text: "Experience your favorite titles on the latest consoles.",
  },
  {
    icon: FiCrosshair,
    title: "ESPORTS",
    text: "Compete, challenge and prove your skill.",
  },
  {
    icon: FiHeadphones,
    title: "IMMERSIVE SETUP",
    text: "Premium peripherals and immersive audio.",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Gaming() {
  return (
    <section
      id="gaming"
      className="relative overflow-hidden bg-[#050A14] py-28 text-white sm:py-36"
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/[0.08]
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >

          <div>

            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 40,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="h-px bg-blue-500"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                Gaming Zone
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
            >
              ENTER
              <br />

              <span className="text-blue-500">
                THE ARENA.
              </span>
            </motion.h2>

          </div>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="max-w-md text-sm leading-7 text-slate-500 sm:text-base"
          >
            This isn't just somewhere to play.
            It's a space built around the experience —
            powerful hardware, competitive setups and
            an atmosphere made for gamers.
          </motion.p>

        </motion.div>

        {/* =====================================================
            MAIN SHOWCASE
        ====================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">

          {/* =================================================
              MAIN VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-[#0A101C]
            "
          >

            {/* Image */}

            <motion.img
              src="/view4.webp"
              alt="Gaming setup"
              initial={{
                scale: 1.12,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute inset-0
                h-full w-full
                object-cover
                opacity-70
                group-hover:opacity-80
              "
            />

            {/* Dark overlay */}

            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
            " />

            {/* Blue hover glow */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                absolute inset-0
                bg-blue-600/[0.08]
              "
            />

            {/* Top label */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              className="absolute left-7 top-7 flex items-center gap-3"
            >

              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex h-2 w-2
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_15px_rgba(59,130,246,0.8)]
                "
              />

              <span className="text-[9px] font-bold tracking-[0.3em] text-white/60">
                GAMING EXPERIENCE
              </span>

            </motion.div>

            {/* Bottom content */}

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
                className="text-[10px] font-bold tracking-[0.25em] text-blue-400"
              >
                BUILT FOR GAMERS
              </motion.p>

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="
                  mt-3
                  max-w-xl
                  text-4xl
                  font-black
                  tracking-[-0.04em]
                  sm:text-6xl
                "
              >
                YOUR GAME.
                <br />
                YOUR RULES.
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                Whether you're grinding ranked, playing with friends
                or discovering your next favorite game, we've built
                the environment around you.
              </motion.p>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-block"
                >
                  <Link
                    href="/gaming#gamingmenu"
                    className="
                      group/btn
                      mt-7
                      inline-flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-white
                      px-5 py-3
                      text-xs
                      font-black
                      text-black
                      transition
                      hover:bg-blue-500
                      hover:text-white
                    "
                  >
                    BOOK A GAMING SESSION

                    <motion.span
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                    >
                      <FiArrowUpRight size={15} />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>

            </div>

          </motion.div>

          {/* =================================================
              SIDE STATS
          ================================================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid grid-cols-2 gap-4 lg:grid-cols-1"
          >

            <Stat
              number="01"
              title="PREMIUM"
              text="Gaming environment"
            />

            <Stat
              number="02"
              title="COMPETITIVE"
              text="Built for esports"
            />

            <Stat
              number="03"
              title="SOCIAL"
              text="Play with your squad"
            />

            <Stat
              number="∞"
              title="EXPERIENCES"
              text="One place to play"
            />

          </motion.div>

        </div>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-5
            grid
            border-t border-white/10
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {gamingFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  border-b
                  border-white/10
                  p-7
                  transition
                  hover:bg-blue-500/[0.03]
                  sm:border-r
                  lg:border-b-0
                "
              >

                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="inline-flex"
                >
                  <Icon
                    size={20}
                    className="
                      text-blue-500
                      transition
                      group-hover:text-blue-400
                    "
                  />
                </motion.div>

                <h4 className="mt-7 text-sm font-black tracking-wide">
                  {feature.title}
                </h4>

                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {feature.text}
                </p>

                {/* Small hover line */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: 28,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mt-5 h-[2px] bg-blue-500"
                />

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   STAT
========================================================= */

function Stat({ number, title, text }) {
  return (
    <motion.div
      variants={slideRight}
      whileHover={{
        y: -5,
        x: -3,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group
        flex
        flex-col
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        p-6
        transition
        duration-300
        hover:border-blue-500/30
        hover:bg-blue-500/[0.04]
        lg:p-7
      "
    >

      {/* Number */}

      <motion.span
        whileHover={{
          x: 4,
        }}
        className="
          text-xs
          font-bold
          tracking-[0.2em]
          text-blue-500
        "
      >
        {number}
      </motion.span>

      <div className="mt-8">

        <h4 className="text-xl font-black">
          {title}
        </h4>

        <p className="mt-2 text-xs text-slate-600">
          {text}
        </p>

      </div>

    </motion.div>
  );
}
