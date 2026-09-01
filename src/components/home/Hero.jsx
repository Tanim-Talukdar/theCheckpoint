
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

/* =========================================================
   HERO SLIDES
   ========================================================= */

const slides = [
  {
    image: "/view7.webp",
    alt: "The Checkpoint gaming zone in Dhaka with high-performance gaming PCs and racing simulator",
    eyebrow: "01 / GAMING",
    title: "PLAY",
    description:
      "Experience premium PC gaming, competitive setups and racing simulator experiences at The Checkpoint in Dhaka.",
  },

  {
    image: "/view6.jpeg",
    alt: "The Checkpoint premium entertainment and common area in Bashundhara Dhaka",
    eyebrow: "02 / EXPERIENCE",
    title: "EAT",
    description:
      "Relax, eat, enjoy cold drinks and spend time with friends in The Checkpoint's premium entertainment space.",
  },

  {
    image: "/view11.jpg",
    alt: "The Checkpoint gym and fitness facility in Bashundhara Dhaka",
    eyebrow: "03 / FITNESS",
    title: "TRAIN",
    description:
      "Train, build your strength and stay active at The Checkpoint gym in Bashundhara, Dhaka.",
  },
];

/* =========================================================
   ANIMATIONS
   ========================================================= */

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

/* =========================================================
   HERO
   ========================================================= */

export default function Hero() {
  const [active, setActive] = useState(0);

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  /* =======================================================
     SLIDER CONTROLS
  ======================================================= */

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section
      aria-labelledby="checkpoint-main-heading"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      {/* =====================================================
          SEO H1

          This is visually hidden but available to search engines
          and screen readers.

          The visual PLAY / EAT / TRAIN design remains unchanged.
      ====================================================== */}

      <h1
        id="checkpoint-main-heading"
        className="sr-only"
      >
        The Checkpoint — Premium Gaming, Entertainment and Lifestyle
        Destination in Dhaka
      </h1>

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
              alt={slide.alt}
              width={1920}
              height={1080}
              fetchPriority={active === 0 ? "high" : "auto"}
              loading={active === 0 ? "eager" : "lazy"}
              decoding="async"
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
        <div
          className="absolute inset-0 bg-black/55"
          aria-hidden="true"
        />

        {/* Blue tint */}
        <div
          className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"
          aria-hidden="true"
        />

        {/* Left gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent"
          aria-hidden="true"
        />

        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#030712] to-transparent"
          aria-hidden="true"
        />
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
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                Now Open
              </span>
            </div>

            <span
              className="h-px w-12 bg-white/20"
              aria-hidden="true"
            />

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">
              Bangladesh&apos;s Premium Gaming & Entertainment Destination
            </span>
          </motion.div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_380px]">

            {/* =================================================
                LEFT
            ================================================= */}

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

              {/* =================================================
                  VISUAL HERO TITLE

                  Kept exactly as your original design.
              ================================================= */}

              <motion.div
                variants={contentVariants}
                aria-hidden="true"
                className="text-[clamp(6rem,16vw,15rem)] font-black leading-[0.72] tracking-[-0.07em]"
              >
                {slide.title}
                <span className="text-blue-500">.</span>
              </motion.div>

              {/* =================================================
                  SEO DESCRIPTION
              ================================================= */}

              <motion.p
                variants={contentVariants}
                className="mt-10 max-w-lg text-sm leading-7 text-white/60 sm:text-base"
              >
                <strong className="font-semibold text-white/80">
                  The Checkpoint
                </strong>{" "}
                is a premium gaming and entertainment destination in
                Bashundhara, Dhaka, featuring a gaming zone, gaming lounge,
                VR zone, movie theater, card game zone, racing simulator,
                restaurant, gym and swimming pool.
              </motion.p>

              {/* =================================================
                  CTA
              ================================================= */}

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
                    href="/contact"
                    aria-label="Contact The Checkpoint in Dhaka"
                    className="group flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-xs font-black tracking-wide transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                  >
                    Contact Us

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
                  type="button"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  aria-label="Watch The Checkpoint experience"
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

                  Bashundhara, Dhaka
                </motion.div>

                <p className="mt-5 text-2xl font-bold leading-tight">
                  One place.
                  <br />

                  <span className="text-blue-400">
                    Everything you love.
                  </span>
                </p>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Gaming lounge, movie theater, VR zone, card games,
                  restaurant, gym and swimming pool — all in one premium
                  destination in Dhaka.
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

            <div
              className="flex gap-2 sm:gap-8"
              role="tablist"
              aria-label="The Checkpoint experiences"
            >
              {slides.map((item, index) => (
                <motion.button
                  key={item.eyebrow}
                  type="button"
                  role="tab"
                  onClick={() => setActive(index)}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  aria-label={`View ${item.eyebrow
                    .split(" / ")[1]
                    .toLowerCase()} experience`}
                  aria-selected={index === active}
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

                  <div
                    className="relative h-[2px] w-16 overflow-hidden bg-white/10 sm:w-28"
                    aria-hidden="true"
                  >
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
                type="button"
                onClick={previousSlide}
                whileHover={{
                  scale: 1.08,
                  x: -2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                aria-label="Previous The Checkpoint experience"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white"
              >
                <FiChevronLeft size={17} />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextSlide}
                whileHover={{
                  scale: 1.08,
                  x: 2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                aria-label="Next The Checkpoint experience"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white"
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
        aria-hidden="true"
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
        aria-hidden="true"
      />
    </section>
  );
}
