
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiPlay,
} from "react-icons/fi";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "01 / GAMING",
    title: "PLAY",
    description:
      "High-performance gaming. Competitive setups. Unforgettable sessions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "02 / DINING",
    title: "EAT",
    description:
      "Good food, cold drinks and the perfect place to recharge between games.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "03 / FITNESS",
    title: "TRAIN",
    description:
      "Push your limits. Build your strength. Level up outside the game.",
  },
];

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.08,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.04,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* =====================================================
          BACKGROUND SLIDER
      ====================================================== */}

      <div className="absolute inset-0">

        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 6,
                ease: "linear",
              },
            }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt=""
              initial={{
                scale: 1.04,
              }}
              animate={{
                scale: 1.1,
              }}
              transition={{
                duration: 6,
                ease: "linear",
              }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Blue tint */}
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />

        {/* Left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#030712] to-transparent" />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">

        <div className="w-full">

          {/* =================================================
              TOP LABEL
          ================================================= */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="mb-8 flex items-center gap-4"
          >

            <div className="flex items-center gap-3">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />

              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                Now Open
              </span>

            </div>

            <span className="h-px w-12 bg-white/20" />

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">
              Bangladesh's First Premium Gaming Lounge
            </span>

          </motion.div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_380px]">

            {/* LEFT */}

            <motion.div
              key={`content-${active}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >

              {/* Slide number */}

              <motion.div
                variants={contentVariants}
                className="mb-5 text-sm font-medium tracking-[0.3em] text-blue-400"
              >
                {slide.eyebrow}
              </motion.div>

              {/* BIG TITLE */}

              <motion.h1
                variants={contentVariants}
                className="text-[clamp(6rem,16vw,15rem)] font-black leading-[0.72] tracking-[-0.07em]"
              >
                {slide.title}
                <span className="text-blue-500">.</span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={contentVariants}
                className="mt-10 max-w-lg text-sm leading-7 text-white/60 sm:text-base"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}

              <motion.div
                variants={contentVariants}
                className="mt-8 flex flex-wrap gap-3"
              >

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="#booking"
                    className="group flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-xs font-black tracking-wide transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                  >
                    BOOK YOUR EXPERIENCE

                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">

                      <motion.span
                        whileHover={{
                          x: 3,
                          y: -3,
                        }}
                      >
                        <FiArrowUpRight size={14} />
                      </motion.span>

                    </span>
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-xs font-bold backdrop-blur-md transition"
                >

                  <motion.span
                    whileHover={{
                      rotate: 10,
                    }}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20"
                  >
                    <FiPlay size={10} />
                  </motion.span>

                  WATCH THE EXPERIENCE

                </motion.button>

              </motion.div>

            </motion.div>

            {/* =================================================
                RIGHT INFO
            ================================================= */}

            <motion.div
              key={`info-${active}`}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:block"
            >

              <div className="border-l border-white/20 pl-8">

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40"
                >
                  <FiMapPin size={13} />
                  Bangladesh
                </motion.div>

                <p className="mt-5 text-2xl font-bold leading-tight">
                  One place.
                  <br />

                  <span className="text-blue-400">
                    Everything you love.
                  </span>
                </p>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Gaming lounge, restaurant and gym —
                  built for people who want more from
                  their hangout.
                </p>

              </div>

            </motion.div>

          </div>

          {/* =================================================
              BOTTOM CONTROLS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="mt-20 flex items-end justify-between border-t border-white/15 pt-5"
          >

            {/* Experience selector */}

            <div className="flex gap-2 sm:gap-8">

              {slides.map((item, index) => (

                <motion.button
                  key={item.eyebrow}
                  onClick={() => setActive(index)}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group text-left"
                >

                  <div className="mb-2 flex items-center gap-2">

                    <span
                      className={`text-[9px] font-bold tracking-[0.2em] transition ${
                        index === active
                          ? "text-blue-400"
                          : "text-white/30 group-hover:text-white/60"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`hidden text-[9px] font-bold tracking-[0.2em] sm:block ${
                        index === active
                          ? "text-white"
                          : "text-white/30"
                      }`}
                    >
                      {item.eyebrow.split(" / ")[1]}
                    </span>

                  </div>

                  {/* Progress */}

                  <div className="relative h-[2px] w-16 overflow-hidden bg-white/10 sm:w-28">

                    {index === active && (
                      <motion.div
                        key={`progress-${active}`}
                        initial={{
                          width: "0%",
                        }}
                        animate={{
                          width: "100%",
                        }}
                        transition={{
                          duration: 6,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 left-0 bg-blue-500"
                      />
                    )}

                  </div>

                </motion.button>

              ))}

            </div>

            {/* Arrows */}

            <div className="flex gap-2">

              <motion.button
                onClick={previousSlide}
                whileHover={{
                  scale: 1.08,
                  x: -2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white"
                aria-label="Previous slide"
              >
                <FiChevronLeft size={17} />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                whileHover={{
                  scale: 1.08,
                  x: 2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white"
                aria-label="Next slide"
              >
                <FiChevronRight size={17} />
              </motion.button>

            </div>

          </motion.div>

        </div>

      </div>

      {/* =====================================================
          CORNER DETAILS
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-40 border-b border-r border-blue-500/30 lg:block"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="pointer-events-none absolute left-0 top-32 hidden h-32 w-32 border-l border-t border-blue-500/20 lg:block"
      />

    </section>
  );
}

