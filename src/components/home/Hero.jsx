"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const slides = [
  {
    image: "/students/images1.webp",
    result: "Successfully prepared for Japan",
    text: "Complete Japanese language preparation with speaking practice, guidance and structured coaching.",
  },
  {
    image: "/students/images2.webp",
    result: "Built confidence in Japanese",
    text: "Regular classes and practical conversation training help students communicate with confidence.",
  },
  {
    image: "/students/images3.webp",
    result: "Ready for the next journey",
    text: "Prepare for education, career and new opportunities in Japan with proper language support.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="
        relative
        min-h-[850px]
        overflow-hidden
        bg-transparent
        pt-44
        pb-20
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#BC002D]/8
            blur-[110px]
          "
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-28
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#006A4E]/8
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-gray-100/70
            blur-[110px]
          "
        />

      </div>


      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
        "
      >

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >


          {/* =======================================
              LEFT CONTENT
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >

            {/* Country badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200/80
                bg-white/55
                px-4
                py-2
                shadow-sm
                backdrop-blur-xl
              "
            >

              <span>🇧🇩</span>

              <span className="text-xs font-semibold text-gray-500">
                Bangladesh
              </span>

              <span className="h-4 w-px bg-gray-300" />

              <span>🇯🇵</span>

              <span className="text-xs font-semibold text-gray-500">
                Japan
              </span>

            </motion.div>


            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl
                font-black
                leading-[1.05]
                tracking-[-0.045em]
                text-gray-800
                sm:text-6xl
                lg:text-7xl
              "
            >

              Learn Japanese.

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#BC002D]
                  via-gray-700
                  to-[#006A4E]
                  bg-clip-text
                  text-transparent
                "
              >
                Build your future.
              </span>

            </motion.h1>


            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-gray-500
                sm:text-lg
              "
            >
              Professional Japanese language coaching for students and
              professionals in Bangladesh preparing for education, work and
              opportunities in Japan.
            </motion.p>


            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >

              <motion.a
                href="/contact"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-[#006A4E]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(0,106,78,0.18)]
                "
              >

                Contact Us

                <motion.span
                  whileHover={{ x: 4 }}
                  className="text-lg"
                >
                  →
                </motion.span>

              </motion.a>


              <motion.a
                href="/courses"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white/55
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-gray-700
                  shadow-sm
                  backdrop-blur-xl
                "
              >
                Explore Courses
              </motion.a>

            </motion.div>


            {/* =====================================
                CONTACT BAR
            ====================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              className="
                mt-7
                inline-flex
                max-w-full
                flex-wrap
                items-center
                gap-1
                rounded-2xl
                border
                border-white/70
                bg-white/35
                p-1.5
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                backdrop-blur-2xl
              "
            >

              {/* WhatsApp */}

              <SocialButton
                href="https://wa.me/880163278705"
                icon={<FiMessageCircle />}
                label="WhatsApp"
                color="green"
              />

              <span className="h-5 w-px bg-gray-200/70" />

              {/* Instagram */}

              <SocialButton
                href="https://instagram.com/YOUR_ACCOUNT"
                icon={<FiInstagram />}
                label="Instagram"
                color="red"
              />

              <span className="h-5 w-px bg-gray-200/70" />

              {/* Facebook */}

              <SocialButton
                href="https://facebook.com/YOUR_PAGE"
                icon={<FiFacebook />}
                label="Facebook"
                color="blue"
              />

              <span className="h-5 w-px bg-gray-200/70" />

              {/* Phone */}

              <motion.a
                href="tel:+880 1632-78705"
                whileHover={{ scale: 1.03 }}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2
                  text-sm
                  font-semibold
                  text-gray-600
                  transition-colors
                  hover:bg-gray-900/5
                  hover:text-gray-900
                "
              >

                <span
                  className="
                    flex
                    h-9
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gray-900/5
                    text-gray-700
                  "
                >
                  <FiPhone className="h-5 w-5" />
                </span>

                <span className="text-sm font-bold">
                  +880163278705
                </span>

              </motion.a>

            </motion.div>


            {/* =====================================
                STATS
            ====================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                mt-10
                grid
                max-w-xl
                grid-cols-3
                divide-x
                divide-gray-200
              "
            >

              <Stat
                value="500+"
                label="Students"
              />

              <Stat
                value="N5–N4"
                label="JLPT Levels"
              />

              <Stat
                value="95%"
                label="Satisfaction"
              />

            </motion.div>

          </motion.div>


          {/* =======================================
              RIGHT — SUCCESS SLIDER
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >

            {/* Green glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-10
                -top-10
                h-72
                w-72
                rounded-full
                bg-[#006A4E]/8
                blur-[90px]
              "
            />


            {/* Red glow */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-10
                -left-10
                h-60
                w-60
                rounded-full
                bg-[#BC002D]/7
                blur-[90px]
              "
            />


            {/* Main card */}

            <motion.div
              whileHover={{
                y: -6,
                rotateX: 1,
                rotateY: -1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/80
                bg-white/30
                p-3
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                backdrop-blur-2xl
              "
            >

              <div
                className="
                  relative
                  h-[470px]
                  overflow-hidden
                  rounded-[2rem]
                  bg-gray-100
                "
              >

                {/* =================================
                    SMOOTH IMAGE CROSSFADE
                ================================== */}

                <AnimatePresence mode="sync">

                  <motion.img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.result}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      opacity: {
                        duration: 1.2,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 6,
                        ease: "easeOut",
                      },
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </AnimatePresence>


                {/* Image gradient */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-60
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />


                {/* =================================
                    SLIDE CONTENT
                ================================== */}

                <AnimatePresence mode="wait">

                  <motion.div
                    key={currentSlide}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                      text-white
                    "
                  >

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/70
                      "
                    >
                      Student Success
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {slide.result}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/75">
                      {slide.text}
                    </p>

                  </motion.div>

                </AnimatePresence>

              </div>


              {/* Slider indicators */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-3
                  pt-4
                "
              >

                <div className="flex gap-1.5">

                  {slides.map((_, index) => (

                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      animate={{
                        width:
                          currentSlide === index ? 32 : 6,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className={`
                        h-1.5
                        rounded-full
                        ${
                          currentSlide === index
                            ? "bg-[#BC002D]"
                            : "bg-gray-300"
                        }
                      `}
                    />

                  ))}

                </div>


                <div className="text-xs font-medium text-gray-400">

                  {String(currentSlide + 1).padStart(2, "0")}

                  <span className="mx-1 text-gray-300">
                    /
                  </span>

                  {String(slides.length).padStart(2, "0")}

                </div>

              </div>

            </motion.div>


            {/* =====================================
                FLOATING CONTACT CARD
            ====================================== */}

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: [0, -4, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                  delay: 0.9,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                y: -8,
              }}
              className="
                absolute
                -bottom-7
                -left-5
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/80
                bg-white/65
                px-5
                py-3.5
                shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                backdrop-blur-2xl
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#BC002D]/10
                  text-[#BC002D]
                "
              >
                <FiPhone className="h-6 w-6" />
              </div>

              <div>

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-gray-400
                  "
                >
                  Need information?
                </p>

                <p className="mt-0.5 text-base font-bold text-gray-700">
                  Talk to our team
                </p>

              </div>

            </motion.a>


            {/* =====================================
                JAPAN BADGE
            ====================================== */}

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-5
                -top-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-white
                bg-white/65
                text-2xl
                shadow-lg
                backdrop-blur-xl
              "
            >
              🇯🇵
            </motion.div>

          </motion.div>

        </div>

      </div>


      {/* =========================================
          BOTTOM SERVICES
      ========================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          mx-auto
          mt-20
          max-w-7xl
          px-5
          sm:px-8
        "
      >

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3
            border-t
            border-gray-100
            pt-6
            text-xs
            font-medium
            text-gray-400
          "
        >

          <span>
            Japanese Language Coaching
          </span>

          <span className="h-1 w-1 rounded-full bg-[#BC002D]" />

          <span>
            JLPT Preparation
          </span>

          <span className="h-1 w-1 rounded-full bg-[#006A4E]" />

          <span>
            Japan Study Guidance
          </span>

          <span className="h-1 w-1 rounded-full bg-gray-300" />

          <span>
            Visa Processing
          </span>

        </div>

      </motion.div>

    </section>
  );
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  href,
  icon,
  label,
  color,
}) {
  const colors = {
    green: {
      hover: "hover:bg-[#006A4E]/10 hover:text-[#006A4E]",
      icon: "bg-[#006A4E]/10 text-[#006A4E]",
    },

    red: {
      hover: "hover:bg-[#BC002D]/10 hover:text-[#BC002D]",
      icon: "bg-[#BC002D]/10 text-[#BC002D]",
    },

    blue: {
      hover: "hover:bg-blue-500/10 hover:text-blue-600",
      icon: "bg-blue-500/10 text-blue-600",
    },
  };

  const theme = colors[color];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`
        group
        flex
        items-center
        gap-2.5
        rounded-xl
        px-3
        py-2
        text-sm
        font-semibold
        text-gray-600
        transition-colors
        ${theme.hover}
      `}
    >

      <span
        className={`
          flex
          h-9
          w-8
          shrink-0
          items-center
          justify-center
          rounded-xl
          transition-transform
          duration-300
          group-hover:scale-110
          ${theme.icon}
        `}
      >
        {icon}
      </span>

      <span className="text-sm font-semibold">
        {label}
      </span>

    </motion.a>
  );
}


/* =========================================================
   STAT
========================================================= */

function Stat({ value, label }) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="cursor-default"
    >

      <p className="text-2xl font-black text-gray-800">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-400">
        {label}
      </p>

    </motion.div>
  );
}