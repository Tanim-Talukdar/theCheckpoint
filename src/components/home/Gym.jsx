
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaBolt,
  FaTrophy,
  FaArrowUpRightFromSquare,
  FaCheck,
} from "react-icons/fa6";

const stats = [
  {
    value: "20+",
    label: "Premium Equipment",
    icon: FaDumbbell,
  },
  {
    value: "5K+",
    label: "Sq. Ft. Training Zone",
    icon: FaTrophy,
  },
  {
    value: "24/7",
    label: "Peak Performance",
    icon: FaBolt,
  },
];

const features = [
  "Premium fitness equipment",
  "Modern training environment",
  "Dedicated workout zones",
];

export default function GymSection() {
  return (
    <section
      id="gym"
      className="relative overflow-hidden bg-[#030712] py-28 text-white"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-blue-500" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400">
              The Fitness Zone
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Level Up
            <br />

            <span className="text-blue-500">
              Your Fitness.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
            Your performance doesn't stop at the screen. Train harder,
            build strength and stay at your peak with a premium fitness
            experience built for the next level.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              <Image
                src="/gym.jpg"
                alt="The Checkpoint Premium Gym"
                width={1200}
                height={800}
                priority={false}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Image Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />

              {/* Blue Overlay */}

              <div className="absolute inset-0 bg-blue-950/10 mix-blend-overlay transition duration-500 group-hover:bg-blue-900/20" />

              {/* Image Text */}

              <div className="absolute bottom-7 left-7">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400">
                  TRAIN DIFFERENT
                </p>

                <p className="mt-2 text-2xl font-black uppercase tracking-tight">
                  Built For Performance
                </p>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              className="absolute -bottom-8 -right-3 rounded-2xl border border-blue-400/20 bg-[#07111f]/90 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:-right-6"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <FaBolt
                    size={21}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-2xl font-black">
                    100%
                  </p>

                  <p className="text-xs text-slate-400">
                    Performance Focused
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Decorative Border */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="pointer-events-none absolute -bottom-3 -left-3 -z-0 h-full w-full rounded-[2rem] border border-blue-500/10"
            />
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Description */}

            <p className="text-lg leading-8 text-slate-300">
              A modern training environment designed for people
              who don't settle for average.
            </p>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div className="mt-8 space-y-3">

              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.5,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10">
                    <FaCheck
                      size={10}
                      className="text-blue-400"
                    />
                  </div>

                  <span className="text-sm text-slate-300">
                    {feature}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-10 space-y-3">

              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
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
                    }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.05]"
                  >
                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-blue-500/10 p-3 transition duration-300 group-hover:bg-blue-500/20">
                        <Icon
                          size={20}
                          className="text-blue-400"
                        />
                      </div>

                      <span className="text-sm font-medium text-slate-300">
                        {stat.label}
                      </span>

                    </div>

                    <span className="text-xl font-black text-white">
                      {stat.value}
                    </span>
                  </motion.div>
                );
              })}

            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.a
              href="#booking"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Explore The Gym

              <FaArrowUpRightFromSquare
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-28 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              Game • Eat • Train • Repeat
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
              The Checkpoint Bangladesh
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

