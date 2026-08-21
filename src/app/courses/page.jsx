"use client";

import {
  FaArrowRight,
  FaBookOpen,
  FaCheck,
  FaComments,
  FaGraduationCap,
  FaLanguage,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";


const courses = [
  {
    level: "N5",
    title: "Japanese Foundation",
    japanese: "日本語 初級",
    description:
      "Start from zero and build the Japanese basics you need for everyday communication.",
    focus: ["Hiragana & Katakana", "Basic Grammar", "Conversation"],
    accent: "red",
  },
  {
    level: "N4",
    title: "Japanese Development",
    japanese: "日本語 中級",
    description:
      "Strengthen your Japanese with better grammar, vocabulary, listening and speaking.",
    focus: ["Grammar", "Vocabulary", "Speaking"],
    accent: "green",
  },
  {
    level: "N3",
    title: "JLPT Preparation",
    japanese: "JLPT 対策",
    description:
      "Focused preparation for the JLPT with structured lessons, practice and mock tests.",
    focus: ["Reading", "Listening", "Mock Tests"],
    accent: "red",
  },
  {
    level: "N2+",
    title: "Advanced Japanese",
    japanese: "日本語 上級",
    description:
      "Develop advanced Japanese skills for academic, professional and Japan-related goals.",
    focus: ["Advanced Grammar", "Kanji", "Communication"],
    accent: "green",
  },
];


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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


const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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


export default function CoursesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-gray-900">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pt-36">

        {/* Background glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-[#BC002D]/10
            blur-[110px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <motion.div
          className="
            pointer-events-none
            absolute
            -right-32
            top-20
            h-72
            w-72
            rounded-full
            bg-[#006A4E]/10
            blur-[110px]
          "
          animate={{
            x: [0, -25, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">


            {/* =================================================
                HERO LEFT
            ================================================= */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >

              {/* Bangladesh → Japan */}

              <motion.div
                className="mb-6 flex items-center gap-3"
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >

                <motion.div
                  className="
                    flex
                    h-9
                    w-12
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#006A4E]
                    text-xl
                    shadow-sm
                  "
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🇧🇩
                </motion.div>


                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-sm
                    font-bold
                    text-gray-400
                  "
                >
                  →
                </div>


                <motion.div
                  className="
                    flex
                    h-9
                    w-12
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-xl
                    shadow-sm
                    ring-1
                    ring-gray-100
                  "
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🇯🇵
                </motion.div>


                <span
                  className="
                    ml-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                  "
                >
                  Bangladesh to Japan
                </span>

              </motion.div>


              {/* Heading */}

              <motion.h1
                className="
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-gray-900
                  sm:text-5xl
                  lg:text-6xl
                "
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                Learn Japanese.

                <motion.span
                  className="
                    block
                    bg-gradient-to-r
                    from-[#BC002D]
                    via-gray-700
                    to-[#006A4E]
                    bg-clip-text
                    text-transparent
                  "
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35,
                  }}
                >
                  Prepare for Japan.
                </motion.span>

              </motion.h1>


              {/* Description */}

              <motion.p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-6
                  text-gray-500
                  sm:text-base
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                }}
              >
                Japanese language coaching for learners preparing for
                JLPT, higher studies, work and their future in Japan.
              </motion.p>


              {/* CTA */}

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                }}
              >

                <motion.a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#BC002D]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(188,0,45,0.15)]
                  "
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  Start Your Journey

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <FaArrowRight className="text-xs" />
                  </motion.span>

                </motion.a>


                <motion.a
                  href="#courses"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-gray-700
                  "
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  Explore Courses
                </motion.a>

              </motion.div>


              {/* Trust points */}

              <motion.div
                className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >

                <TrustPoint text="N5 – N2+" />

                <TrustPoint text="JLPT Preparation" />

                <TrustPoint text="Japan Guidance" />

              </motion.div>

            </motion.div>


            {/* =================================================
                HERO RIGHT
            ================================================= */}

            <motion.div
              className="relative hidden lg:block"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >

              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-[370px]
                  w-[370px]
                  items-center
                  justify-center
                "
              >

                {/* Outer ring */}

                <motion.div
                  className="
                    absolute
                    inset-5
                    rounded-full
                    border
                    border-[#BC002D]/10
                  "
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />


                {/* Inner ring */}

                <motion.div
                  className="
                    absolute
                    inset-14
                    rounded-full
                    border
                    border-[#006A4E]/10
                  "
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />


                {/* Main card */}

                <motion.div
                  className="
                    relative
                    flex
                    h-60
                    w-60
                    flex-col
                    items-center
                    justify-center
                    rounded-[2.5rem]
                    border
                    border-gray-100
                    bg-white
                    shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                  "
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <motion.div
                    className="text-6xl"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🇯🇵
                  </motion.div>


                  <p
                    className="
                      mt-4
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-gray-400
                    "
                  >
                    Japanese Language
                  </p>


                  <p
                    className="
                      mt-2
                      text-2xl
                      font-black
                      text-gray-900
                    "
                  >
                    日本語
                  </p>

                </motion.div>


                {/* N5 card */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-16
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    px-4
                    py-3
                    shadow-[0_12px_35px_rgba(0,0,0,0.07)]
                  "
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-400
                    "
                  >
                    Start
                  </p>

                  <p className="mt-1 text-sm font-black text-[#BC002D]">
                    N5
                  </p>

                </motion.div>


                {/* JLPT card */}

                <motion.div
                  className="
                    absolute
                    bottom-12
                    right-0
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    px-4
                    py-3
                    shadow-[0_12px_35px_rgba(0,0,0,0.07)]
                  "
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-400
                    "
                  >
                    Preparation
                  </p>

                  <p className="mt-1 text-sm font-black text-[#006A4E]">
                    JLPT
                  </p>

                </motion.div>


                {/* Bangladesh → Japan */}

                <motion.div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-100
                    bg-white
                    px-3
                    py-2
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  "
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <span className="text-sm">
                    🇧🇩
                  </span>

                  <span className="text-[10px] font-bold text-gray-300">
                    →
                  </span>

                  <span className="text-sm">
                    🇯🇵
                  </span>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING PATHS
      ===================================================== */}

      <section
        id="courses"
        className="px-5 pb-12 sm:px-8 lg:pb-16"
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            className="mb-6 flex items-end justify-between gap-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#BC002D]
                "
              >
                Learning Paths
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-black
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                Choose your path
              </h2>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                Start from your current level and build the Japanese
                skills you need for your future goals.
              </p>

            </div>


            <motion.a
              href="/contact"
              className="
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-2.5
                text-xs
                font-bold
                text-gray-600
                sm:flex
              "
              whileHover={{
                y: -3,
              }}
            >
              Need guidance?

              <FaArrowRight className="text-[10px]" />

            </motion.a>

          </motion.div>


          {/* Course cards */}

          <motion.div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {courses.map((course) => (
              <CourseCard
                key={course.title}
                course={course}
              />
            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PERSONAL GUIDANCE
      ===================================================== */}

      <section className="px-5 py-12 sm:px-8 lg:py-16">

        <motion.div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            border
            border-gray-200/70
            bg-white
            px-6
            py-8
            shadow-[0_15px_50px_rgba(0,0,0,0.04)]
            sm:px-9
            sm:py-10
          "
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Green glow */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-[#006A4E]/10
              blur-[80px]
            "
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          <div
            className="
              relative
              grid
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >

            <div>

              <div className="flex items-center gap-2">

                <motion.span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#006A4E]/10
                    text-[#006A4E]
                  "
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <FaComments />
                </motion.span>

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#006A4E]
                  "
                >
                  Personal Guidance
                </span>

              </div>


              <h2
                className="
                  mt-4
                  text-2xl
                  font-black
                  tracking-tight
                  sm:text-3xl
                "
              >
                Your goal comes first.
              </h2>


              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                Everyone starts from a different place. Tell us your
                current Japanese level and what you want to achieve,
                and our team can help you understand the right path.
              </p>

            </div>


            <motion.a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gray-900
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
              "
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Talk to Our Team

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <FaArrowRight />
              </motion.span>

            </motion.a>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="px-5 py-12 sm:px-8 lg:py-16">

        <div className="mx-auto max-w-7xl">

          <motion.div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <MiniFeature
              icon={<FaLanguage />}
              title="Practical Japanese"
              text="Learn language you can actually use."
            />

            <MiniFeature
              icon={<FaBookOpen />}
              title="JLPT Focus"
              text="Structured preparation for your target level."
            />

            <MiniFeature
              icon={<FaGraduationCap />}
              title="Japan Guidance"
              text="Understand your options for Japan."
            />

            <MiniFeature
              icon={<FaComments />}
              title="Direct Support"
              text="Talk with our team when you need help."
            />

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-16 pt-8 sm:px-8 lg:pb-20">

        <motion.div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[2.5rem]
            bg-gray-950
            px-6
            py-10
            text-center
            sm:px-10
            sm:py-12
          "
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Red glow */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-52
              w-52
              rounded-full
              bg-[#BC002D]/20
              blur-[90px]
            "
            animate={{
              x: [0, 25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* Green glow */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-20
              h-52
              w-52
              rounded-full
              bg-[#006A4E]/20
              blur-[90px]
            "
            animate={{
              x: [0, -25, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          <div className="relative">

            {/* Flags */}

            <motion.div
              className="flex items-center justify-center gap-3"
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
                duration: 0.5,
              }}
            >

              <span
                className="
                  flex
                  h-8
                  w-11
                  items-center
                  justify-center
                  rounded-md
                  bg-[#006A4E]
                  text-lg
                  shadow-sm
                "
              >
                🇧🇩
              </span>

              <span className="text-sm font-bold text-white/30">
                →
              </span>

              <span
                className="
                  flex
                  h-8
                  w-11
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  text-lg
                  shadow-sm
                "
              >
                🇯🇵
              </span>

            </motion.div>


            <h2
              className="
                mt-4
                text-2xl
                font-black
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              Let's plan your Japanese journey.
            </h2>


            <p
              className="
                mx-auto
                mt-3
                max-w-lg
                text-sm
                leading-6
                text-white/45
              "
            >
              Have questions about classes, JLPT or preparing
              for Japan? Our team is ready to help.
            </p>


            {/* CTA */}

            <motion.div
              className="
                mt-6
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
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
                duration: 0.6,
                delay: 0.2,
              }}
            >

              <motion.a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-gray-900
                "
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Talk to Our Team

                <FaArrowRight className="text-xs" />

              </motion.a>


              <motion.a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                "
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <FaWhatsapp className="text-[#25D366]" />

                WhatsApp
              </motion.a>

            </motion.div>


            {/* Phone */}

            <motion.a
              href="tel:+880 1632-78705"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-white/35
              "
              whileHover={{
                color: "#ffffff",
              }}
            >
              <FaPhone className="text-[10px]" />

              +880 1632-78705
            </motion.a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}


/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({ text }) {

  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-2 text-xs text-gray-500"
    >

      <span
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[#006A4E]/10
          text-[#006A4E]
        "
      >
        <FaCheck className="text-[7px]" />
      </span>

      {text}

    </motion.div>
  );
}


/* =========================================================
   COURSE CARD
========================================================= */

function CourseCard({ course }) {

  const isRed = course.accent === "red";

  const accent = isRed
    ? "#BC002D"
    : "#006A4E";

  const soft = isRed
    ? "bg-[#BC002D]/7 text-[#BC002D]"
    : "bg-[#006A4E]/7 text-[#006A4E]";


  return (
    <motion.article
      variants={fadeUp}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-gray-200/70
        bg-white
        p-5
        shadow-[0_6px_25px_rgba(0,0,0,0.025)]
      "
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
    >

      {/* Top line */}

      <motion.div
        style={{
          backgroundColor: accent,
        }}
        className="
          absolute
          left-0
          top-0
          h-1
        "
        initial={{
          width: 0,
        }}
        whileHover={{
          width: "100%",
        }}
      />


      {/* Level */}

      <span
        className={`
          inline-flex
          rounded-full
          px-2.5
          py-1
          text-[9px]
          font-black
          uppercase
          tracking-[0.15em]
          ${soft}
        `}
      >
        {course.level}
      </span>


      {/* Japanese */}

      <p className="mt-3 text-xs text-gray-400">
        {course.japanese}
      </p>


      {/* Title */}

      <h3
        className="
          mt-1.5
          text-lg
          font-black
          tracking-tight
          text-gray-900
        "
      >
        {course.title}
      </h3>


      {/* Description */}

      <p
        className="
          mt-3
          text-xs
          leading-5
          text-gray-500
        "
      >
        {course.description}
      </p>


      {/* Focus */}

      <div className="mt-4 space-y-1.5">

        {course.focus.map((item, index) => (

          <motion.div
            key={item}
            className="
              flex
              items-center
              gap-2
              text-xs
              text-gray-500
            "
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
              delay: index * 0.08,
            }}
          >

            <span
              className={`
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
                rounded-full
                ${soft}
              `}
            >
              <FaCheck className="text-[6px]" />
            </span>

            {item}

          </motion.div>

        ))}

      </div>


      {/* Bottom */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-gray-100
          pt-4
        "
      >

        <span className="text-[10px] text-gray-400">
          Ask our team
        </span>


        <motion.a
          href="/contact"
          className="
            flex
            items-center
            gap-1.5
            text-[11px]
            font-bold
            text-gray-700
            transition-colors
            hover:text-[#006A4E]
          "
          whileHover={{
            x: 3,
          }}
        >
          Explore

          <FaArrowRight className="text-[9px]" />

        </motion.a>

      </div>

    </motion.article>
  );
}


/* =========================================================
   MINI FEATURE
========================================================= */

function MiniFeature({ icon, title, text }) {

  return (
    <motion.div
      variants={fadeUp}
      className="
        group
        rounded-2xl
        border
        border-gray-200/70
        bg-white
        p-5
      "
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
    >

      <motion.div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-gray-100
          text-gray-600
          transition-colors
          duration-300
          group-hover:bg-[#006A4E]/10
          group-hover:text-[#006A4E]
        "
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
      >
        {icon}
      </motion.div>


      <h3 className="mt-4 text-sm font-bold text-gray-900">
        {title}
      </h3>


      <p className="mt-1.5 text-xs leading-5 text-gray-400">
        {text}
      </p>

    </motion.div>
  );
}