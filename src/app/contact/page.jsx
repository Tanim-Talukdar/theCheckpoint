"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaQuestionCircle,
  FaWhatsapp,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Our Academy",
    text: "Find us in Mirpur 11, Dhaka",
    value: "Rising Sun Complex, Benaroshi Polli, Paris Road, Mirpur-10, Dhaka-1216",
    href: "#contact-form",
    color: "location",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp-1",
    text: "Message us directly",
    value: "+880 1632-78705",
    href: "https://wa.me/880163278705",
    color: "green",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp-2",
    text: "Message us directly",
    value: "+880 1919-248151",
    href: "https://wa.me/8801919248151",
    color: "green",
  },
  {
    icon: <FaPhone />,
    title: "Call Us-1",
    text: "Speak with our team",
    value: "+880 1632-78705",
    href: "tel:+880163278705",
    color: "red",
  },
  {
    icon: <FaPhone />,
    title: "Call Us-2",
    text: "Speak with our team",
    value: "+880 1919-248151",
    href: "tel:+8801919248151",
    color: "red",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "Send us your questions",
    value: "dhakaforeignacademy@gmail.com",
    href: "mailto:dhakaforeignacademy@gmail.com",
    color: "green",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    text: "When you can visit",
    value: "Sat – Thu · 10AM – 8PM",
    href: "#contact-form",
    color: "red",
  },
];

const faqs = [
  {
    question:
      "Can I join Japanese classes if I am a complete beginner?",
    answer:
      "Yes. Our beginner learning path is designed for students starting Japanese from the basics.",
  },
  {
    question: "Which JLPT level should I prepare for?",
    answer:
      "It depends on your current Japanese level, previous study and target. Our team can help you understand which level is suitable.",
  },
  {
    question:
      "Do you provide guidance for students planning to go to Japan?",
    answer:
      "Yes. We provide information and guidance related to Japanese preparation, study planning and Japan-related pathways.",
  },
  {
    question: "Can I contact you before enrolling?",
    answer:
      "Of course. You can contact us first and discuss your current level, goals and the course that may suit you.",
  },
  {
    question: "How can I contact the academy directly?",
    answer:
      "You can call us, send a WhatsApp message or use the contact form on this page.",
  },
];

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:pb-16">

        {/* Red glow */}

        <motion.div
          className="pointer-events-none absolute -left-32 -top-20 h-72 w-72 rounded-full bg-[#BC002D]/10 blur-[110px]"
          animate={{
            x: [0, 25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Green glow */}

        <motion.div
          className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#006A4E]/10 blur-[110px]"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

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
            duration: 0.7,
          }}
          className="relative mx-auto max-w-7xl text-center"
        >

          {/* Bangladesh → Japan */}

          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm">

            <span className="text-base">
              🇧🇩
            </span>

            <span className="text-gray-300">
              →
            </span>

            <span className="text-base">
              🇯🇵
            </span>

            <span className="ml-1 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Contact Us
            </span>

          </div>

          {/* Heading */}

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.05em] text-gray-900 sm:text-5xl lg:text-6xl">

            Let&apos;s talk about your

            <span className="block bg-gradient-to-r from-[#BC002D] via-gray-700 to-[#006A4E] bg-clip-text text-transparent">
              Japanese journey.
            </span>

          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Have questions about Japanese classes, JLPT preparation,
            Japan study plans or visa processing? Our team is here
            to help you understand your next step.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          CONTACT OPTIONS
      ===================================================== */}

      <section className="px-5 pb-12 sm:px-8 lg:pb-16">

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {contactItems.map((item, index) => (
            <ContactCard
              key={index}
              {...item}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          FORM + INFORMATION
      ===================================================== */}

      <section
        id="contact-form"
        className="px-5 py-12 sm:px-8 lg:py-20"
      >

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#BC002D]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Tell us what you need.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
              Whether you are starting Japanese from zero or already
              preparing for JLPT, tell us about your goal and we will
              help you find the right direction.
            </p>


            {/* Support list */}

            <div className="mt-7 space-y-4">

              <SupportItem text="Course and level guidance" />

              <SupportItem text="JLPT preparation information" />

              <SupportItem text="Japan study guidance" />

              <SupportItem text="Visa processing information" />

              <SupportItem text="Career and Japan-related guidance" />

            </div>


            {/* Location */}

            <div className="mt-8 rounded-2xl border border-gray-200/70 bg-white p-5">

              <div className="flex items-start gap-3">

                <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl bg-[#BC002D]/8 text-[#BC002D]">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="text-lg font-black">
                    Visit Our Office
                  </p>

                  <p className="mt-1 text- leading-5 text-gray-500">
                    Rising Sun Complex, Benaroshi Polli, Paris Road, Mirpur-10, Dhaka-1216
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* RIGHT FORM */}

          <motion.div
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
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-[2rem] border border-gray-200/70 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.04)] sm:p-8"
          >

            <div className="mb-6">

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006A4E]">
                Send A Message
              </p>

              <h3 className="mt-2 text-2xl font-black">
                How can we help?
              </h3>

            </div>


            <form className="space-y-4">

              {/* Name */}

              <div>

                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#006A4E]/40 focus:bg-white focus:ring-4 focus:ring-[#006A4E]/5"
                />

              </div>


              {/* Phone + Email */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-1.5 block text-xs font-bold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+880..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#006A4E]/40 focus:bg-white focus:ring-4 focus:ring-[#006A4E]/5"
                  />

                </div>


                <div>

                  <label className="mb-1.5 block text-xs font-bold text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#006A4E]/40 focus:bg-white focus:ring-4 focus:ring-[#006A4E]/5"
                  />

                </div>

              </div>


              {/* Interest */}

              <div>

                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  I am interested in
                </label>

                <select
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 outline-none transition-all focus:border-[#006A4E]/40 focus:bg-white focus:ring-4 focus:ring-[#006A4E]/5"
                >

                  <option value="" disabled>
                    Select an option
                  </option>

                  <option>
                    Japanese Language Coaching
                  </option>

                  <option>
                    JLPT Preparation
                  </option>

                  <option>
                    Japan Study Guidance
                  </option>

                  <option>
                    Visa Processing
                  </option>

                  <option>
                    Career Preparation
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>


              {/* Message */}

              <div>

                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your goal or question..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#006A4E]/40 focus:bg-white focus:ring-4 focus:ring-[#006A4E]/5"
                />

              </div>


              {/* Submit */}

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#006A4E]"
              >

                Send Message

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />

              </motion.button>

            </form>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">

        <div className="mx-auto max-w-4xl">

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
            className="text-center"
          >

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#006A4E]/10 text-[#006A4E]">
              <FaQuestionCircle />
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#006A4E]">
              Before You Contact Us
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Common questions
            </h2>

          </motion.div>


          <div className="mt-8 space-y-3">

            {faqs.map((faq, index) => (
              <Faq
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-16 pt-10 sm:px-8 lg:pb-20">

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
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gray-950 px-6 py-12 text-center sm:px-10 sm:py-14"
        >

          {/* Red glow */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#BC002D]/20 blur-[90px]" />

          {/* Green glow */}

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#006A4E]/20 blur-[90px]" />

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
              Your next step can start today.
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/45">
              Tell us your goal and let us help you find the right
              path for learning Japanese and preparing for Japan.
            </p>

            <motion.a
              href="https://wa.me/880163278705"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900"
            >

              <FaWhatsapp className="text-[#25D366]" />

              Message on WhatsApp

            </motion.a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}


/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon,
  title,
  text,
  value,
  href,
  color,
}) {

  const isLocation = color === "location";
  const isGreen = color === "green";


  /* =====================================================
     SPECIAL LOCATION CARD
  ===================================================== */

  if (isLocation) {
    return (
      <motion.a
        href={href}
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
group 
relative 
overflow-hidden 
rounded-[1.75rem] 
border 
border-[#006A4E]/20 
bg-gradient-to-br 
from-[#006A4E] 
via-[#2F6F5E] 
to-[#e97070] 
p-6 
shadow-[0_15px_45px_rgba(0,106,78,0.14)] 
sm:col-span-2 
lg:col-span-2
        "
      >

        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-48
            w-48
            rounded-full
            bg-white/10
            blur-[60px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-10
            h-40
            w-40
            rounded-full
            bg-[#BC002D]/15
            blur-[60px]
          "
        />


        {/* Content */}

        <div className="relative flex h-full flex-col justify-between">

          <div>

            {/* Icon */}

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-white/10
                text-xl
                text-white
                shadow-lg
                backdrop-blur-sm
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {icon}
            </div>


            {/* Label */}

            <p
              className="
                mt-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/50
              "
            >
              Our Location
            </p>


            {/* Title */}

            <h3
              className="
                mt-1
                text-xl
                font-black
                tracking-tight
                text-white
              "
            >
              {title}
            </h3>


            {/* Description */}

            <p
              className="
                mt-2
                max-w-md
                text-sm
                leading-6
                text-white/60
              "
            >
              {text}
            </p>

          </div>


          {/* Address */}

          <div
            className="
              
              mt-7
              rounded-2xl
              border
              border-white/10
              bg-black/10
              px-4
              py-3.5
              backdrop-blur-sm
            "
          >

            <p
              className="
                text-sm
                font-bold
                leading-5
                text-white/85
              "
            >
              {value}
            </p>

          </div>

        </div>

      </motion.a>
    );
  }


  /* =====================================================
     NORMAL CONTACT CARD
  ===================================================== */

  const iconClass = isGreen
    ? `
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      bg-[#006A4E]/10
      text-[#006A4E]
    `
    : `
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      bg-[#BC002D]/10
      text-[#BC002D]
    `;


  return (
    <motion.a
      href={href}
      target={
        href.startsWith("https://")
          ? "_blank"
          : undefined
      }
      rel={
        href.startsWith("https://")
          ? "noopener noreferrer"
          : undefined
      }
      whileHover={{
        y: -5,
      }}
      className="
        group
        rounded-2xl
        border
        border-gray-200/70
        bg-white
        p-5
        shadow-[0_6px_25px_rgba(0,0,0,0.025)]
        transition-shadow
        duration-300
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]
      "
    >

      <div className={iconClass}>
        {icon}
      </div>

      <p className="mt-4 text-sm font-black">
        {title}
      </p>

      <p className="mt-1 text-xs text-gray-400">
        {text}
      </p>

      <p
        className="
          mt-3
          truncate
          text-xs
          font-bold
          text-gray-600
          transition-colors
          group-hover:text-[#006A4E]
        "
      >
        {value}
      </p>

    </motion.a>
  );
}


/* =========================================================
   SUPPORT ITEM
========================================================= */

function SupportItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-600">

      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#006A4E]/10 text-[#006A4E]">

        <FaCheck className="text-[7px]" />

      </span>

      <span>
        {text}
      </span>

    </div>
  );
}


/* =========================================================
   FAQ
========================================================= */

function Faq({
  question,
  answer,
}) {
  return (
    <details className="group rounded-2xl border border-gray-200/70 bg-[#fafafa] px-5 py-4">

      <summary className="cursor-pointer list-none pr-5 text-sm font-bold text-gray-800 outline-none">

        {question}

        <span className="float-right text-lg font-normal text-gray-400 transition-transform duration-300 group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-3 max-w-3xl text-xs leading-6 text-gray-500">
        {answer}
      </p>

    </details>
  );
}