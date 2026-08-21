"use client";

import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#BC002D]/6 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#006A4E]/7 blur-[110px]" />

      {/* Main Card */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[2.8rem]

          border
          border-gray-200/70

          bg-gray-900

          px-6
          py-12

          shadow-[0_30px_80px_rgba(0,0,0,0.13)]

          sm:px-10
          sm:py-14

          lg:px-16
          lg:py-16
        "
      >

        {/* Decorative Glows */}

        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#BC002D]/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#006A4E]/20 blur-[110px]" />

        {/* Content */}

        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_420px]">

          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div>

            {/* Bangladesh → Japan */}

            <div className="flex items-center gap-3">

              <span className="text-xl">
                🇧🇩
              </span>

              <span className="h-px w-8 bg-white/20" />

              <span className="text-xl">
                🇯🇵
              </span>

              <span className="ml-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Bangladesh → Japan
              </span>

            </div>

            <h2
              className="
                mt-6
                max-w-3xl

                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.045em]

                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Ready to start your

              <span
                className="
                  block

                  bg-gradient-to-r
                  from-[#BC002D]
                  via-white
                  to-[#006A4E]

                  bg-clip-text
                  text-transparent
                "
              >
                Japan journey?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Get information about Japanese language courses,
              JLPT preparation, Japan study guidance and career
              opportunities.
            </p>

            {/* Main CTA */}

            <a
              href="/contact"
              className="
                group
                mt-8

                inline-flex
                items-center
                gap-3

                rounded-2xl

                bg-white

                px-6
                py-3.5

                text-sm
                font-bold
                text-gray-900

                shadow-[0_10px_30px_rgba(255,255,255,0.08)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-gray-100
              "
            >
              Contact Our Team

              <FaArrowRight
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>

          </div>


          {/* =====================================
              CONTACT CARD
          ====================================== */}

          <div
            className="
              rounded-[2rem]

              border
              border-white/10

              bg-white/[0.06]

              p-4

              shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]

              backdrop-blur-2xl
            "
          >

            {/* Phone — Highlight */}

            <a
              href="tel:+880 1632-78705"
              className="
                group
                block

                rounded-[1.5rem]

                border
                border-white/10

                bg-white/[0.07]

                p-5

                transition-all
                duration-300

                hover:-translate-y-1

                hover:border-[#BC002D]/30

                hover:bg-white/[0.1]
              "
            >

              <div className="flex items-center gap-4">

                {/* Phone Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0

                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#BC002D]

                    text-white

                    shadow-[0_8px_25px_rgba(188,0,45,0.25)]

                    transition-transform
                    duration-300

                    group-hover:scale-105
                  "
                >
                  <FaPhone />
                </div>

                <div className="min-w-0">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Call Us
                  </p>

                  <p className="mt-1 truncate text-xl font-black tracking-tight text-white">
                    +880 1632-78705
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Tap to call our team
                  </p>

                </div>

              </div>

            </a>


            {/* =================================
                SOCIAL CONTACTS
            ================================== */}

            <div className="mt-3 grid grid-cols-3 gap-2">

              {/* WhatsApp */}

              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  flex
                  flex-col
                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-2
                  py-4

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:border-[#006A4E]/40

                  hover:bg-[#006A4E]/10
                "
              >

                <FaWhatsapp
                  className="
                    text-xl
                    text-[#25D366]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

                <span className="mt-2 text-[11px] font-bold text-white/60">
                  WhatsApp
                </span>

              </a>


              {/* Facebook */}

              <a
                href="https://facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  flex
                  flex-col
                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-2
                  py-4

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:border-blue-400/30

                  hover:bg-blue-500/10
                "
              >

                <FaFacebookF
                  className="
                    text-xl
                    text-blue-400

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

                <span className="mt-2 text-[11px] font-bold text-white/60">
                  Facebook
                </span>

              </a>


              {/* Instagram */}

              <a
                href="https://instagram.com/YOUR_ACCOUNT"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  flex
                  flex-col
                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-2
                  py-4

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:border-[#BC002D]/30

                  hover:bg-[#BC002D]/10
                "
              >

                <FaInstagram
                  className="
                    text-xl
                    text-pink-400

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

                <span className="mt-2 text-[11px] font-bold text-white/60">
                  Instagram
                </span>

              </a>

            </div>


            {/* Small information */}

            <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-3 py-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#006A4E]" />

              <span className="text-[10px] font-medium text-white/35">
                We are happy to answer your questions
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}