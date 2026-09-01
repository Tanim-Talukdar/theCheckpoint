"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCoffee,
  FiClock,
  FiUsers,
  FiStar,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiCoffee,
    number: "01",
    title: "GOOD FOOD",
    text: "The perfect fuel before, during or after your gaming session.",
  },
  {
    icon: FiUsers,
    number: "02",
    title: "GOOD COMPANY",
    text: "Bring your squad, friends or family and enjoy the atmosphere.",
  },
  {
    icon: FiClock,
    number: "03",
    title: "STAY A WHILE",
    text: "Eat, talk, relax and enjoy your time at The Checkpoint.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Restaurant() {
  return (
    <section
      id="restaurant"
      className="
        relative
        overflow-hidden
        bg-[#030712]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/[0.08]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/[0.04]
          blur-[120px]
        "
      />

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div className="h-px bg-blue-500/30" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-36 lg:px-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            gap-10
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >

          {/* LEFT */}

          <motion.div variants={fadeUp}>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "
              >
                The Checkpoint Kitchen
              </span>

            </div>

            <h2
              className="
                max-w-4xl
                text-5xl
                font-black
                leading-[0.82]
                tracking-[-0.06em]
                sm:text-7xl
                lg:text-8xl
              "
            >
              COME
              <br />

              <span className="text-white/20">
                HUNGRY.
              </span>
            </h2>

          </motion.div>

          {/* RIGHT */}

          <motion.div variants={fadeUp}>

            <div className="mb-4 flex items-center gap-2 text-blue-400">

              <FiCoffee size={15} />

              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.25em]
                "
              >
                FOOD · DRINKS · VIBES
              </span>

            </div>

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-white/45
                sm:text-base
              "
            >
              The game might be the reason you came in.
              Great food is the reason you stay.
            </p>

          </motion.div>

        </motion.div>

        {/* =================================================
            MAIN SHOWCASE
        ================================================= */}

        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[0.62fr_1.38fr]
          "
        >

          {/* ===============================================
              LEFT PANEL
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[540px]
              flex-col
              justify-between
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-[#07101D]
              p-8
              sm:p-10
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-blue-600/15
                blur-[90px]
              "
            />

            {/* Content */}

            <div className="relative">

              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  shadow-[0_0_35px_rgba(37,99,235,0.25)]
                "
              >
                <FiCoffee size={21} />
              </motion.div>

              <p
                className="
                  mt-12
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  text-blue-400
                "
              >
                MORE THAN A MEAL
              </p>

              <h3
                className="
                  mt-4
                  text-4xl
                  font-black
                  leading-[0.86]
                  tracking-[-0.05em]
                  sm:text-5xl
                "
              >
                EAT.
                <br />
                CHILL.
                <br />
                REPEAT.
              </h3>

              <p
                className="
                  mt-8
                  max-w-sm
                  text-sm
                  leading-7
                  text-white/40
                "
              >
                From quick bites between matches to long
                evenings with your people — the kitchen is
                part of the experience.
              </p>

            </div>

            {/* Bottom */}

            <div className="relative">

              <div className="mb-6 h-px bg-white/10" />

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.25em]
                      text-white/25
                    "
                  >
                    THE CHECKPOINT
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/60">
                    Your table is waiting.
                  </p>

                </div>

                <Link
                  href="#menu"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    transition
                    duration-300
                    hover:border-blue-500
                    hover:bg-blue-600
                  "
                >
                  <FiArrowUpRight
                    size={17}
                    className="
                      transition
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>

              </div>

            </div>

          </motion.div>

          {/* ===============================================
              IMAGE
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[540px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
            "
          >

            <motion.img
              initial={{
                scale: 1.12,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
              }}
              src="/view8.jpeg"
              alt="Restaurant dining experience"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/30
                to-black/10
              "
            />

            {/* Blue tint */}

            <div
              className="
                absolute
                inset-0
                bg-blue-900/10
                mix-blend-multiply
                transition
                duration-700
                group-hover:bg-blue-700/5
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
                delay: 0.5,
              }}
              className="
                absolute
                left-7
                top-7
              "
            >

              <div
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.25em]
                    text-white
                  "
                >
                  THE CHECKPOINT KITCHEN
                </span>

              </div>

            </motion.div>

            {/* Floating badge */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
                absolute
                right-7
                top-7
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-black/30
                px-4
                py-2
                backdrop-blur-md
                sm:flex
              "
            >

              <FiStar
                size={13}
                className="text-blue-400"
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-wider
                  text-white
                "
              >
                GOOD VIBES
              </span>

            </motion.div>

            {/* Image content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-7
                sm:p-10
              "
            >

              <p
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  text-blue-300
                "
              >
                COME HUNGRY
              </p>

              <h3
                className="
                  mt-3
                  max-w-xl
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                "
              >
                MADE FOR
                <br />
                THE MOMENT.
              </h3>

              <Link
                href="/restaurant#menu"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-white
                  px-5
                  py-3
                  text-[10px]
                  font-black
                  tracking-wide
                  text-black
                  transition
                  duration-300
                  hover:bg-blue-500
                  hover:text-white
                "
              >
                VIEW THE MENU

                <FiArrowUpRight
                  size={14}
                  className="
                    transition
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

            </div>

          </motion.div>

        </div>

        {/* =================================================
            HIGHLIGHTS
        ================================================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mt-5
            grid
            border-y
            border-white/10
            sm:grid-cols-3
          "
        >

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  border-b
                  border-white/10
                  p-7
                  transition
                  duration-300
                  hover:bg-white/[0.02]
                  sm:border-b-0
                  sm:border-r
                  last:border-r-0
                "
              >

                <div className="flex items-center justify-between">

                  <Icon
                    size={19}
                    className="
                      text-blue-500
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-[0.2em]
                      text-white/20
                    "
                  >
                    {item.number}
                  </span>

                </div>

                <h4 className="mt-7 text-sm font-black tracking-wide">
                  {item.title}
                </h4>

                <p
                  className="
                    mt-3
                    max-w-xs
                    text-xs
                    leading-6
                    text-white/35
                  "
                >
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </motion.div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
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
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-6
            sm:flex-row
            sm:items-center
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-[0_0_25px_rgba(37,99,235,0.2)]
              "
            >
              <FiStar size={15} />
            </div>

            <div>

              <p
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.25em]
                  text-white/25
                "
              >
                THE CHECKPOINT
              </p>

              <p className="mt-1 text-sm font-bold text-white/80">
                Your table. Your squad. Your moment.
              </p>

            </div>

          </div>

          <Link
            href="#booking"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-xs
              font-black
              text-blue-400
              transition
              hover:text-blue-300
            "
          >
            BOOK A TABLE

            <FiArrowUpRight
              size={16}
              className="
                transition
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </Link>

        </motion.div>

      </div>
    </section>
  );
}