"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaClipboardCheck,
  FaComments,
  FaFileAlt,
  FaGraduationCap,
  FaPassport,
  FaPlaneDeparture,
  FaUserCheck,
  FaBriefcase,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";


/* =========================================================
   VISA TYPES
========================================================= */

const visaTypes = [
  {
    icon: <FaGraduationCap />,
    title: "Student Visa",
    japanese: "留学ビザ",
    description:
      "For students planning to study at Japanese language schools, colleges or universities.",
    points: [
      "School admission guidance",
      "Document preparation",
      "COE support",
    ],
    accent: "red",
  },
  {
    icon: <FaBriefcase />,
    title: "Work Visa",
    japanese: "就労ビザ",
    description:
      "For eligible professionals who have secured employment with a company in Japan.",
    points: [
      "Work visa guidance",
      "Document support",
      "Application guidance",
    ],
    accent: "green",
  },
  {
    icon: <FaUserCheck />,
    title: "Specified Skilled Worker",
    japanese: "特定技能",
    description:
      "For eligible workers seeking employment in designated industries in Japan.",
    points: [
      "Eligibility guidance",
      "Document support",
      "Application guidance",
    ],
    accent: "red",
  },
  {
    icon: <FaUsers />,
    title: "TITP",
    japanese: "技能実習",
    description:
      "Guidance for candidates pursuing opportunities through the Technical Intern Training pathway.",
    points: [
      "Process guidance",
      "Document preparation",
      "Pre-departure support",
    ],
    accent: "green",
  },
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Initial Consultation",
    text: "We understand your education, experience, Japanese level and future goals.",
  },
  {
    number: "02",
    icon: <FaClipboardCheck />,
    title: "Eligibility Check",
    text: "We review your profile and explain the pathway that may suit your situation.",
  },
  {
    number: "03",
    icon: <FaFileAlt />,
    title: "Document Preparation",
    text: "We guide you through the required documents and help organize your application.",
  },
  {
    number: "04",
    icon: <FaPassport />,
    title: "Application & COE",
    text: "We provide guidance throughout the application and Certificate of Eligibility process.",
  },
  {
    number: "05",
    icon: <FaPlaneDeparture />,
    title: "Visa & Departure",
    text: "After approval, we guide you through the final visa steps and preparation for Japan.",
  },
];


/* =========================================================
   HELP
========================================================= */

const helpItems = [
  {
    icon: <FaFileAlt />,
    title: "Document Guidance",
    text: "Understand what documents are required and how they should be prepared.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Application Support",
    text: "Get guidance throughout the application process so important steps are not missed.",
  },
  {
    icon: <FaPassport />,
    title: "COE Guidance",
    text: "Understand the Certificate of Eligibility process and the documents involved.",
  },
  {
    icon: <FaComments />,
    title: "Interview Preparation",
    text: "Prepare for questions and communicate your study or career purpose clearly.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Study Path Guidance",
    text: "Understand possible study pathways based on your educational background and goals.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Japan Preparation",
    text: "Get practical guidance before departure so you can prepare for life in Japan.",
  },
];


/* =========================================================
   RESULTS
========================================================= */

const achievements = [
  {
    number: "01",
    title: "Student Guidance",
    text: "Helping students understand their options for studying in Japan.",
  },
  {
    number: "02",
    title: "Application Support",
    text: "Supporting candidates through document preparation and application stages.",
  },
  {
    number: "03",
    title: "Japan Preparation",
    text: "Preparing candidates for the transition from Bangladesh to Japan.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "Can you guarantee my visa will be approved?",
    answer:
      "No. Visa approval is ultimately decided by the relevant Japanese authorities. We provide guidance and support to help you prepare a proper application.",
  },
  {
    question: "Which Japanese visa should I apply for?",
    answer:
      "It depends on your purpose in Japan, such as study, employment or another eligible activity. We can review your situation and explain the relevant pathway.",
  },
  {
    question: "Do I need Japanese language skills for a Japan visa?",
    answer:
      "Requirements vary depending on the visa, school, employer and individual circumstances. Some pathways may have specific Japanese-language requirements.",
  },
  {
    question: "Can I apply for a Student Visa after HSC?",
    answer:
      "Students who have completed HSC may be eligible for study pathways in Japan, depending on the school, course, academic background and other requirements.",
  },
  {
    question: "What is a COE?",
    answer:
      "COE stands for Certificate of Eligibility. It is an immigration document commonly involved in long-term visa applications for Japan.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Processing time varies depending on the visa type, institution, immigration office, documents and individual circumstances. We can explain the expected stages during consultation.",
  },
  {
    question: "What happens if my visa application is refused?",
    answer:
      "The appropriate next step depends on the reason and circumstances of the refusal. We can help you understand the situation and discuss possible options.",
  },
  {
    question: "Can I work while studying in Japan?",
    answer:
      "International students may be able to work part-time under the applicable Japanese immigration rules and with the required permission. The permitted conditions should be confirmed before working.",
  },
];


/* =========================================================
   ANIMATION
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
      staggerChildren: 0.12,
    },
  },
};


/* =========================================================
   PAGE
========================================================= */

export default function VisaProcessing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-gray-900">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-20">

        {/* Glows */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-32
            top-0
            h-72
            w-72
            rounded-full
            bg-[#BC002D]/10
            blur-[110px]
          "
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
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
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">


            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >

              {/* Route */}

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-9 w-12 items-center justify-center rounded-lg bg-[#006A4E] text-xl">
                  🇧🇩
                </div>

                <span className="font-bold text-gray-300">
                  →
                </span>

                <div className="flex h-9 w-12 items-center justify-center rounded-lg bg-white text-xl shadow-sm ring-1 ring-gray-100">
                  🇯🇵
                </div>

                <span className="ml-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  Visa Processing
                </span>

              </div>


              <h1 className="
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-6xl
              ">
                Your path to Japan

                <span className="
                  block
                  bg-gradient-to-r
                  from-[#BC002D]
                  via-gray-700
                  to-[#006A4E]
                  bg-clip-text
                  text-transparent
                ">
                  starts here.
                </span>
              </h1>


              <p className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-gray-500
                sm:text-base
              ">
                Get clear guidance for your Japan visa journey —
                from choosing the right pathway to preparing documents,
                application support and pre-departure guidance.
              </p>


              {/* Buttons */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

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
                  Get Visa Guidance

                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </motion.a>


                <motion.a
                  href="#visa-types"
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
                  }}
                >
                  Explore Visa Types
                </motion.a>

              </div>


              {/* Trust */}

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">

                <Trust text="Document Guidance" />

                <Trust text="COE Support" />

                <Trust text="Application Guidance" />

              </div>

            </motion.div>


            {/* RIGHT VISUAL */}

            <motion.div
              className="relative hidden lg:flex justify-center"
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
              }}
            >

              <div className="relative flex h-[390px] w-[390px] items-center justify-center">

                {/* Rings */}

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
                    h-64
                    w-64
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

                  <div className="text-6xl">
                    🛂
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Japan Visa
                  </p>

                  <p className="mt-2 text-xl font-black">
                    ビザサポート
                  </p>

                </motion.div>


                {/* Floating cards */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-20
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
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    Support
                  </p>

                  <p className="mt-1 text-sm font-black text-[#BC002D]">
                    COE
                  </p>
                </motion.div>


                <motion.div
                  className="
                    absolute
                    bottom-14
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
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                  }}
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    Destination
                  </p>

                  <p className="mt-1 text-sm font-black text-[#006A4E]">
                    Japan 🇯🇵
                  </p>
                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISA TYPES
      ===================================================== */}

      <section
        id="visa-types"
        className="px-5 py-14 sm:px-8 lg:py-20"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Visa Pathways"
            title="Choose your pathway"
            text="Different goals require different visa pathways. Understand the options before starting your application."
          />


          <motion.div
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {visaTypes.map((visa) => (
              <VisaCard
                key={visa.title}
                visa={visa}
              />
            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE HELP WITH
      ===================================================== */}

      <section className="bg-white px-5 py-14 sm:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Our Support"
            title="What we help with"
            text="We guide you through the important stages of your Japan visa journey."
          />


          <motion.div
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {helpItems.map((item) => (
              <HelpCard
                key={item.title}
                item={item}
              />
            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="px-5 py-14 sm:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="How It Works"
            title="Our visa process"
            text="A clear step-by-step journey from your first consultation to preparing for Japan."
          />


          <div className="relative mt-12">

            {/* Desktop line */}

            <div className="
              absolute
              left-[10%]
              right-[10%]
              top-8
              hidden
              h-px
              bg-gray-200
              lg:block
            " />


            <motion.div
              className="grid gap-8 lg:grid-cols-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >

              {processSteps.map((step) => (
                <ProcessStep
                  key={step.number}
                  step={step}
                />
              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE'VE DONE
      ===================================================== */}

      <section className="px-5 py-14 sm:px-8 lg:py-20">

        <div className="
          mx-auto
          max-w-7xl
          rounded-[2rem]
          border
          border-gray-200/70
          bg-white
          p-6
          shadow-[0_15px_50px_rgba(0,0,0,0.04)]
          sm:p-9
        ">

          <SectionHeading
            eyebrow="Our Work"
            title="What we've done"
            text="Our role is to make the journey clearer, more organized and easier to understand for candidates."
          />


          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {achievements.map((item) => (
              <Achievement
                key={item.number}
                item={item}
              />
            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-gray-950 px-5 py-14 text-white sm:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#25D366]">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Guidance that keeps things clear.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/50">
                Visa applications can feel complicated. Our goal is to
                make each stage easier to understand and help you prepare
                carefully.
              </p>

            </motion.div>


            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <DarkFeature
                title="Clear Communication"
                text="Understand what you need and what happens next."
              />

              <DarkFeature
                title="Personal Guidance"
                text="Advice based on your individual goals and pathway."
              />

              <DarkFeature
                title="Organized Process"
                text="Work through important documents and stages systematically."
              />

              <DarkFeature
                title="Pre-Departure Support"
                text="Prepare for your next step after visa approval."
              />

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="px-5 py-14 sm:px-8 lg:py-20">

        <div className="mx-auto max-w-4xl">

          <SectionHeading
            eyebrow="FAQ"
            title="Common visa questions"
            text="Some of the questions candidates ask before starting their Japan visa journey."
          />


          <div className="mt-8 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
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
                    delay: index * 0.04,
                  }}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200/70
                    bg-white
                  "
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                    "
                  >

                    <span className="text-sm font-bold text-gray-900">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      className="shrink-0 text-gray-400"
                    >
                      <FaChevronDown className="text-xs" />
                    </motion.span>

                  </button>


                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >

                        <p className="
                          border-t
                          border-gray-100
                          px-5
                          pb-5
                          pt-4
                          text-sm
                          leading-6
                          text-gray-500
                        ">
                          {faq.answer}
                        </p>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <section className="px-5 pb-8 sm:px-8">

        <motion.div
          className="
            mx-auto
            max-w-5xl
            rounded-2xl
            border
            border-amber-200
            bg-amber-50
            px-5
            py-5
            sm:px-7
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
            Important Information
          </p>

          <p className="mt-2 text-xs leading-5 text-amber-800/80">
            Visa requirements, immigration procedures and processing
            decisions may change. Visa approval is determined by the
            relevant Japanese authorities. Our service provides guidance
            and application support and does not guarantee visa approval.
          </p>

        </motion.div>

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
            py-11
            text-center
            sm:px-10
            sm:py-14
          "
          initial={{
            opacity: 0,
            scale: 0.97,
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
          }}
        >

          {/* Glows */}

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
            }}
          />

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
            }}
          />


          <div className="relative">

            <div className="flex items-center justify-center gap-3">

              <span className="text-xl">
                🇧🇩
              </span>

              <span className="text-white/30">
                →
              </span>

              <span className="text-xl">
                🇯🇵
              </span>

            </div>


            <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Ready to start your Japan journey?
            </h2>


            <p className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-6
              text-white/45
            ">
              Tell us about your goal and we'll help you understand
              the next step.
            </p>


            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <motion.a
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-gray-900
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

                <FaArrowRight className="text-xs" />

              </motion.a>


              <motion.a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
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
                WhatsApp

              </motion.a>

            </div>

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
        text-gray-900
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
   TRUST
========================================================= */

function Trust({ text }) {
  return (
    <motion.div
      className="flex items-center gap-2 text-xs text-gray-500"
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.6,
      }}
    >

      <span className="
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-[#006A4E]/10
        text-[#006A4E]
      ">
        <FaCheck className="text-[7px]" />
      </span>

      {text}

    </motion.div>
  );
}


/* =========================================================
   VISA CARD
========================================================= */

function VisaCard({ visa }) {

  const red = visa.accent === "red";

  const soft = red
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
      }}
    >

      <motion.div
        className={`absolute left-0 top-0 h-1 ${
          red ? "bg-[#BC002D]" : "bg-[#006A4E]"
        }`}
        initial={{
          width: 0,
        }}
        whileHover={{
          width: "100%",
        }}
      />


      <motion.div
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          ${soft}
        `}
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
      >
        {visa.icon}
      </motion.div>


      <p className="mt-4 text-xs text-gray-400">
        {visa.japanese}
      </p>


      <h3 className="mt-1 text-lg font-black">
        {visa.title}
      </h3>


      <p className="
        mt-3
        text-xs
        leading-5
        text-gray-500
      ">
        {visa.description}
      </p>


      <div className="mt-4 space-y-2">

        {visa.points.map((point) => (

          <div
            key={point}
            className="flex items-center gap-2 text-xs text-gray-500"
          >

            <span className={`
              flex
              h-4
              w-4
              shrink-0
              items-center
              justify-center
              rounded-full
              ${soft}
            `}>
              <FaCheck className="text-[6px]" />
            </span>

            {point}

          </div>

        ))}

      </div>

    </motion.article>
  );
}


/* =========================================================
   HELP CARD
========================================================= */

function HelpCard({ item }) {

  return (
    <motion.div
      variants={fadeUp}
      className="
        group
        rounded-2xl
        border
        border-gray-200/70
        bg-[#fafafa]
        p-5
        transition-shadow
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]
      "
      whileHover={{
        y: -5,
      }}
    >

      <motion.div
        className="
          flex
          h-10
          w-10
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
        {item.icon}
      </motion.div>


      <h3 className="mt-4 text-sm font-bold">
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

    </motion.div>
  );
}


/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({ step }) {

  return (
    <motion.div
      variants={fadeUp}
      className="relative text-center"
    >

      <motion.div
        className="
          relative
          z-10
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-gray-200
          bg-white
          text-[#BC002D]
          shadow-sm
        "
        whileHover={{
          y: -5,
          rotate: 3,
        }}
      >
        {step.icon}
      </motion.div>


      <span className="
        mt-4
        block
        text-[9px]
        font-black
        uppercase
        tracking-[0.18em]
        text-gray-300
      ">
        Step {step.number}
      </span>


      <h3 className="mt-2 text-sm font-black">
        {step.title}
      </h3>


      <p className="
        mx-auto
        mt-2
        max-w-[190px]
        text-xs
        leading-5
        text-gray-500
      ">
        {step.text}
      </p>

    </motion.div>
  );
}


/* =========================================================
   ACHIEVEMENT
========================================================= */

function Achievement({ item }) {

  return (
    <motion.div
      variants={fadeUp}
      className="
        rounded-2xl
        border
        border-gray-100
        bg-[#fafafa]
        p-5
      "
      whileHover={{
        y: -5,
      }}
    >

      <span className="
        text-3xl
        font-black
        text-[#BC002D]/15
      ">
        {item.number}
      </span>

      <h3 className="mt-2 text-sm font-black">
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

    </motion.div>
  );
}


/* =========================================================
   DARK FEATURE
========================================================= */

function DarkFeature({ title, text }) {

  return (
    <motion.div
      variants={fadeUp}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
      "
      whileHover={{
        y: -4,
        backgroundColor: "rgba(255,255,255,0.08)",
      }}
    >

      <div className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        bg-[#006A4E]/20
        text-[#25D366]
      ">
        <FaCheck className="text-xs" />
      </div>

      <h3 className="mt-4 text-sm font-bold text-white">
        {title}
      </h3>

      <p className="
        mt-2
        text-xs
        leading-5
        text-white/40
      ">
        {text}
      </p>

    </motion.div>
  );
}