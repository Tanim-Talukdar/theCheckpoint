"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheck,
  FaComments,
  FaGraduationCap,
  FaLanguage,
  FaUsers,
  FaHeart,
  FaGlobeAsia,
} from "react-icons/fa";

/* =========================================================
   TEACHERS
========================================================= */

const teachers = [
  {
    name: "Teacher Name",
    role: "Japanese Language Instructor",
    experience: "Japanese Language Instructor",
    image: "/teachers/teacher-1.webp",
    description:
      "Focused on building strong Japanese fundamentals, practical communication and student confidence.",
  },
  {
    name: "Teacher Name",
    role: "JLPT Instructor",
    experience: "JLPT Preparation",
    image: "/teachers/teacher-2.webp",
    description:
      "Helps students prepare for JLPT through structured lessons, practice and exam-focused guidance.",
  },
  {
    name: "Teacher Name",
    role: "Japanese Language Teacher",
    experience: "Language & Conversation",
    image: "/teachers/teacher-3.webp",
    description:
      "Focuses on speaking practice, listening and helping students use Japanese naturally.",
  },
];

/* =========================================================
   CLASSROOM
========================================================= */

const classrooms = [
  {
    image: "/classroom/class-1.webp",
    title: "Interactive Classes",
    text: "Students learn through explanation, practice and regular interaction.",
  },
  {
    image: "/classroom/class-2.webp",
    title: "Speaking Practice",
    text: "Practical conversation helps students become comfortable using Japanese.",
  },
  {
    image: "/classroom/class-3.webp",
    title: "JLPT Preparation",
    text: "Structured preparation with exercises, revision and mock tests.",
  },
  {
    image: "/classroom/class-4.webp",
    title: "Student Support",
    text: "Students can ask questions and receive guidance throughout their journey.",
  },
];

/* =========================================================
   WHAT WE DO
========================================================= */

const work = [
  {
    icon: <FaLanguage />,
    title: "Japanese Language Coaching",
    text:
      "Build Japanese skills from the basics through structured lessons and regular practice.",
  },
  {
    icon: <FaBookOpen />,
    title: "JLPT Preparation",
    text:
      "Prepare for your target JLPT level with focused grammar, vocabulary, reading and listening practice.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Japan Study Guidance",
    text:
      "Understand study pathways and the preparation needed for your future plans in Japan.",
  },
  {
    icon: <FaComments />,
    title: "Communication Practice",
    text:
      "Develop practical speaking and listening skills for real-life communication.",
  },
];

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    icon: <FaUsers />,
    title: "Student First",
    text: "Every student's starting point and goal is different.",
  },
  {
    icon: <FaHeart />,
    title: "Supportive Learning",
    text: "We want students to learn Japanese with confidence, not pressure.",
  },
  {
    icon: <FaCheck />,
    title: "Structured Progress",
    text: "Clear lessons and regular practice help students move forward.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Japan Focused",
    text: "Language learning connects with bigger goals related to Japan.",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          pb-16
          pt-28
          sm:px-8
          sm:pb-20
          sm:pt-32
          lg:pb-24
        "
      >

        {/* Red glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-32
            -top-20
            h-80
            w-80
            rounded-full
            bg-[#BC002D]/10
            blur-[120px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Green glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-32
            top-20
            h-80
            w-80
            rounded-full
            bg-[#006A4E]/10
            blur-[120px]
          "
          animate={{
            x: [0, -25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Bangladesh → Japan */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm"
          >
            <span className="text-base">🇧🇩</span>

            <span className="text-gray-300">→</span>

            <span className="text-base">🇯🇵</span>

            <span className="ml-1 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Our Academy
            </span>
          </motion.div>

          {/* Hero content */}

          <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <h1
                className="
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-[-0.05em]
                  text-gray-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Helping students move

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-[#BC002D]
                    via-gray-700
                    to-[#006A4E]
                    bg-clip-text
                    text-transparent
                  "
                >
                  from Bangladesh to Japan.
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                "
              >
                We are a Japanese language coaching academy focused on
                practical learning, JLPT preparation and helping students
                build a clear path toward their goals in Japan.
              </p>

              {/* Buttons */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <motion.a
                  href="/courses"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gray-900
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-[#006A4E]
                  "
                >
                  Explore Our Courses

                  <FaArrowRight className="text-xs" />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-gray-700
                    transition-all
                    hover:border-[#BC002D]/30
                    hover:text-[#BC002D]
                  "
                >
                  Talk to Our Team
                </motion.a>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-md"
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-gray-200/70
                  bg-white
                  p-2
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                <img
                  src="/dhaka-foreign-academy.webp"
                  alt="Japanese language learning"
                  className="
                    h-[330px]
                    w-full
                    rounded-[1.6rem]
                    object-cover
                    sm:h-[390px]
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-x-2
                    bottom-2
                    rounded-b-[1.6rem]
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                    p-6
                    pt-20
                  "
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Our Mission
                  </p>

                  <p className="mt-1 text-lg font-black text-white">
                    Learn. Grow. Go further.
                  </p>
                </div>
              </div>

              {/* Floating card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-7
                  -left-3
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  px-4
                  py-3
                  shadow-[0_12px_35px_rgba(0,0,0,0.1)]
                  sm:-left-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#006A4E]/10
                      text-[#006A4E]
                    "
                  >
                    <FaGraduationCap />
                  </div>

                  <div>

                    <p className="text-xs font-black text-gray-900">
                      Student Focused
                    </p>

                    <p className="mt-0.5 text-[9px] text-gray-400">
                      Language & Japan Guidance
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            lg:grid-cols-2
            lg:items-center
          "
        >

          <motion.div
            className="relative overflow-hidden rounded-[2rem]"
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
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <img
              src="/about/academy.webp"
              alt="Our Japanese language academy"
              className="
                h-[360px]
                w-full
                object-cover
                sm:h-[450px]
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
                rounded-2xl
                bg-white/90
                px-5
                py-4
                shadow-lg
                backdrop-blur
              "
            >

              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                Our Purpose
              </p>

              <p className="mt-1 text-sm font-black">
                Language → Confidence → Opportunity
              </p>

            </div>

          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#BC002D]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              More than just a Japanese class.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Learning a language is not only about memorising vocabulary
              and grammar. It is about developing the confidence to
              communicate and preparing yourself for the opportunities
              that language can create.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Our approach combines Japanese language coaching, JLPT
              preparation, practical communication and Japan-focused
              guidance so students can understand where they are going
              and what they need to do next.
            </p>

            <div className="mt-6 space-y-3">

              <CheckItem text="Structured Japanese language lessons" />

              <CheckItem text="Regular speaking and listening practice" />

              <CheckItem text="JLPT-focused preparation" />

              <CheckItem text="Guidance for students planning Japan" />

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TEACHERS
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Our Teachers"
            title="Meet the people behind your learning"
            text="Supportive instructors helping students build Japanese step by step."
          />

          <motion.div
            className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >

            {teachers.map((teacher, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                className="
                  group
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-gray-200/70
                  bg-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.03)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)]
                "
              >

                <div className="relative h-[320px] overflow-hidden bg-gray-100">

                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-gradient-to-t
                    from-black/60
                    to-transparent
                  " />

                  <div className="absolute bottom-5 left-5">

                    <p className="text-lg font-black text-white">
                      {teacher.name}
                    </p>

                    <p className="
                      mt-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-white/70
                    ">
                      {teacher.role}
                    </p>

                  </div>

                </div>

                <div className="p-5">

                  <div className="
                    inline-flex
                    rounded-full
                    bg-[#006A4E]/8
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#006A4E]
                  ">
                    {teacher.experience}
                  </div>

                  <p className="
                    mt-4
                    text-sm
                    leading-6
                    text-gray-500
                  ">
                    {teacher.description}
                  </p>

                </div>

              </motion.article>
            ))}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="What We Do"
            title="What happens beyond the classroom"
            text="Our work goes beyond teaching Japanese vocabulary and grammar."
          />

          <motion.div
            className="
              mt-9
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >

            {work.map((item, index) => (
              <WorkCard
                key={index}
                item={item}
              />
            ))}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CLASSROOM
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Inside Our Classes"
            title="Learning happens through practice"
            text="See how we create an environment where students can learn, practise and improve."
          />

          <motion.div
            className="
              mt-9
              grid
              grid-cols-2
              gap-3
              md:grid-cols-4
            "
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >

            {classrooms.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    sm:h-[340px]
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                " />

                <div className="
                  absolute
                  bottom-5
                  left-4
                  right-4
                ">

                  <h3 className="text-sm font-black text-white sm:text-base">
                    {item.title}
                  </h3>

                  <p className="
                    mt-1.5
                    hidden
                    text-xs
                    leading-5
                    text-white/70
                    sm:block
                  ">
                    {item.text}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TEACHING VALUES
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="
            grid
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
          ">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#006A4E]
              ">
                Our Approach
              </p>

              <h2 className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                sm:text-4xl
              ">
                A simple approach to better learning.
              </h2>

              <p className="
                mt-5
                text-sm
                leading-7
                text-gray-500
              ">
                We believe students learn better when they understand
                why they are learning something and how it connects
                to their goals.
              </p>

            </motion.div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              {values.map((item, index) => (
                <ValueCard
                  key={index}
                  item={item}
                />
              ))}

            </motion.div>

          </div>

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
            py-12
            text-center
            sm:px-10
            sm:py-14
          "
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
        >

          <div className="
            pointer-events-none
            absolute
            -left-20
            -top-20
            h-52
            w-52
            rounded-full
            bg-[#BC002D]/20
            blur-[90px]
          " />

          <div className="
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            h-52
            w-52
            rounded-full
            bg-[#006A4E]/20
            blur-[90px]
          " />

          <div className="relative">

            <div className="flex items-center justify-center gap-3">
              <span className="text-xl">🇧🇩</span>

              <span className="text-white/30">
                →
              </span>

              <span className="text-xl">🇯🇵</span>
            </div>

            <h2 className="
              mt-4
              text-2xl
              font-black
              tracking-tight
              text-white
              sm:text-3xl
            ">
              Ready to start your Japanese journey?
            </h2>

            <p className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-6
              text-white/45
            ">
              Talk to our team about Japanese classes, JLPT
              preparation or your plans for Japan.
            </p>

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
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-gray-900
              "
            >
              Talk to Our Team

              <FaArrowRight className="text-xs" />
            </motion.a>

          </div>
        </motion.div>

      </section>

    </main>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >

      <p className="
        text-xs
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#BC002D]
      ">
        {eyebrow}
      </p>

      <h2 className="
        mt-2
        text-2xl
        font-black
        tracking-tight
        sm:text-3xl
      ">
        {title}
      </h2>

      <p className="
        mt-2
        max-w-xl
        text-sm
        leading-6
        text-gray-500
      ">
        {text}
      </p>

    </motion.div>
  );
}

/* =========================================================
   CHECK ITEM
========================================================= */

function CheckItem({ text }) {
  return (
    <div className="
      flex
      items-center
      gap-3
      text-sm
      text-gray-600
    ">

      <span className="
        flex
        h-5
        w-5
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#006A4E]/10
        text-[#006A4E]
      ">
        <FaCheck className="text-[7px]" />
      </span>

      {text}

    </div>
  );
}

/* =========================================================
   WORK CARD
========================================================= */

function WorkCard({ item }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -6,
      }}
      className="
        rounded-[1.5rem]
        border
        border-gray-200/70
        bg-[#fafafa]
        p-5
        transition-shadow
        duration-300
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
      "
    >

      <div className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-[#BC002D]/8
        text-[#BC002D]
      ">
        {item.icon}
      </div>

      <h3 className="mt-5 text-sm font-black">
        {item.title}
      </h3>

      <p className="
        mt-2
        text-xs
        leading-5
        text-gray-500
      ">
        {item.text}
      </p>

    </motion.article>
  );
}

/* =========================================================
   VALUE CARD
========================================================= */

function ValueCard({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -4,
      }}
      className="
        rounded-2xl
        border
        border-gray-200/70
        bg-[#fafafa]
        p-5
      "
    >

      <div className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        bg-[#006A4E]/10
        text-[#006A4E]
      ">
        {item.icon}
      </div>

      <h3 className="mt-4 text-sm font-black">
        {item.title}
      </h3>

      <p className="
        mt-1.5
        text-xs
        leading-5
        text-gray-500
      ">
        {item.text}
      </p>

    </motion.div>
  );
}