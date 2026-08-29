
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMonitor,
  FiCoffee,
  FiActivity,
} from "react-icons/fi";

const features = [
  {
    number: "01",
    title: "GAMING",
    subtitle: "ENTER THE ARENA",
    description:
      "High-performance PCs, consoles, competitive setups and immersive gaming experiences.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=90",
    icon: FiMonitor,
    href: "/gaming",
  },
  {
    number: "02",
    title: "DINING",
    subtitle: "FUEL THE MOMENT",
    description:
      "Great food, drinks and a place to chill between every match.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=90",
    icon: FiCoffee,
    href: "/restaurant",
  },
  {
    number: "03",
    title: "FITNESS",
    subtitle: "LEVEL UP",
    description:
      "Train harder, get stronger and keep the grind going outside the game.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=90",
    icon: FiActivity,
    href: "/gym",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Features() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#030712] py-28 text-white sm:py-36"
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.04]
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >

          {/* LEFT */}

          <div>

            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
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
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="h-px bg-blue-500"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                The Checkpoint
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-4xl text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
            >
              PICK YOUR
              <br />

              <span className="text-white/30">
                EXPERIENCE.
              </span>
            </motion.h2>

          </div>

          {/* RIGHT */}

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-sm leading-7 text-slate-500"
          >
            Three experiences. One destination.
            Whatever you're here for, your next
            level starts at The Checkpoint.
          </motion.p>

        </motion.div>

        {/* =====================================================
            EXPERIENCE CARDS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-4 lg:grid-cols-[1.35fr_0.825fr_0.825fr]"
        >

          {features.map((feature) => (
            <ExperienceCard
              key={feature.number}
              feature={feature}
            />
          ))}

        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="h-[520px] sm:h-[580px]"
    >

      <Link
        href={feature.href}
        className="
          group
          relative
          block
          h-full
          overflow-hidden
          rounded-[1.75rem]
          border border-white/10
          bg-[#0A101C]
          shadow-xl
          shadow-black/20
        "
      >

        {/* =================================================
            IMAGE
        ================================================== */}

        <motion.img
          src={feature.image}
          alt={feature.title}
          initial={{
            scale: 1.05,
          }}
          whileHover={{
            scale: 1.12,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute inset-0
            h-full w-full
            object-cover
            grayscale-[30%]
            transition-all duration-700
            group-hover:grayscale-0
          "
        />

        {/* =================================================
            DARK OVERLAY
        ================================================== */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black
            via-black/40
            to-black/10
          "
        />

        {/* =================================================
            BLUE HOVER OVERLAY
        ================================================== */}

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
            bg-blue-600/20
          "
        />

        {/* =================================================
            TOP NUMBER
        ================================================== */}

        <div className="absolute left-6 top-6 flex items-center gap-3">

          <motion.span
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              text-[10px]
              font-bold
              tracking-[0.25em]
              text-white/50
            "
          >
            {feature.number}
          </motion.span>

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 32,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 0.4,
            }}
            className="h-px bg-white/20"
          />

        </div>

        {/* =================================================
            TOP RIGHT ARROW
        ================================================== */}

        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 45,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="
            absolute right-6 top-6
            flex h-11 w-11
            items-center justify-center
            rounded-full
            border border-white/20
            bg-black/20
            text-white/70
            backdrop-blur-md
            transition-all duration-500
            group-hover:border-blue-400/50
            group-hover:bg-blue-500
            group-hover:text-white
          "
        >
          <FiArrowUpRight size={18} />
        </motion.div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

          {/* Small category */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="mb-3 flex items-center gap-2"
          >

            <Icon
              size={13}
              className="text-blue-400"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              {feature.subtitle}
            </span>

          </motion.div>

          {/* Title */}

          <motion.h3
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
              duration: 0.6,
            }}
            className="
              text-4xl
              font-black
              tracking-[-0.04em]
              sm:text-5xl
            "
          >
            {feature.title}
            <span className="text-blue-500">
              .
            </span>
          </motion.h3>

          {/* Description */}

          <div
            className="
              grid
              grid-rows-[0fr]
              transition-all duration-500
              group-hover:grid-rows-[1fr]
            "
          >
            <div className="overflow-hidden">

              <p
                className="
                  max-w-md
                  pt-4
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                {feature.description}
              </p>

            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="
              mt-6
              flex items-center gap-2
              text-[10px]
              font-bold
              tracking-[0.2em]
              text-white/50
              transition
              group-hover:text-white
            "
          >
            EXPLORE

            <motion.span
              whileHover={{
                x: 4,
                y: -4,
              }}
            >
              <FiArrowUpRight size={13} />
            </motion.span>
          </motion.div>

        </div>

      </Link>

    </motion.div>
  );
}

