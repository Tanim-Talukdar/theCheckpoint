"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const footerLinks = {
  Explore: [
    {
      name: "Japanese Courses",
      href: "/courses",
    },
    {
      name: "Visa Processing",
      href: "/visaprocessing",
    },
  ],

  Academy: [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Success Stories",
      href: "/success-stories",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">

      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#BC002D]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#006A4E]/10 blur-[120px]" />


      {/* =========================================
          MAIN FOOTER
      ========================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">


          {/* =====================================
              BRAND
          ====================================== */}

          <div className="max-w-sm">

            <a
              href="/"
              className="group inline-flex items-center gap-3"
            >

              {/* Logo */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white
                  p-1.5
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >

                <img
                  src="/dhaka-foreign-academy.webp"
                  alt="Dhaka Foreign Academy"
                  className="h-full w-full object-contain"
                />

              </div>


              {/* Name */}

              <div>

                <h2 className="text-base font-extrabold tracking-tight text-white">
                  Dhaka Foreign Academy
                </h2>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Language & Education
                </p>

              </div>

            </a>


            <p className="mt-6 text-sm leading-7 text-white/45">
              Japanese language coaching and Japan-focused guidance
              for students and professionals in Bangladesh.
            </p>


            {/* Bangladesh → Japan */}

            <div className="mt-6 flex items-center gap-3">

              <span className="text-xl">
                🇧🇩
              </span>

              <div className="h-px w-8 bg-white/15" />

              <span className="text-xl">
                🇯🇵
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                Bangladesh → Japan
              </span>

            </div>


            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-2">

              {/* Facebook */}

              <a
                href="https://facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/45
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:bg-blue-500/10
                  hover:text-blue-400
                "
              >
                <FaFacebookF />
              </a>


              {/* Instagram */}

              <a
                href="https://instagram.com/YOUR_ACCOUNT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/45
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-pink-400/30
                  hover:bg-pink-500/10
                  hover:text-pink-400
                "
              >
                <FaInstagram />
              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/45
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-400/30
                  hover:bg-green-500/10
                  hover:text-green-400
                "
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>


          {/* =====================================
              EXPLORE
          ====================================== */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">

              {footerLinks.Explore.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white/40
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-white
                  "
                >

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#BC002D]
                      opacity-0
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  />

                  {link.name}

                </a>

              ))}

            </div>

          </div>


          {/* =====================================
              ACADEMY
          ====================================== */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Academy
            </h3>

            <div className="mt-5 space-y-3">

              {footerLinks.Academy.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white/40
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-white
                  "
                >

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#006A4E]
                      opacity-0
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  />

                  {link.name}

                </a>

              ))}

            </div>

          </div>


          {/* =====================================
              CONTACT
          ====================================== */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/40">
              Have questions about courses, JLPT, visa processing
              or studying in Japan? Our team is here to help.
            </p>


            {/* Phone */}

            <a
              href="tel:+880 1632-78705"
              className="
                group
                mt-5
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-3.5
                transition-all
                duration-300
                hover:border-[#BC002D]/30
                hover:bg-[#BC002D]/5
              "
            >

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#BC002D]/10
                  text-[#BC002D]
                "
              >
                <FaPhone className="text-xs" />
              </span>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-wider text-white/25">
                  Call Us
                </p>

                <p className="mt-0.5 text-sm font-bold text-white/75">
                  +880 1632-78705
                </p>

              </div>

            </a>


            {/* Email */}

            <a
              href="mailto:info@example.com"
              className="
                group
                mt-2
                flex
                items-center
                gap-3
                rounded-xl
                p-2
                text-sm
                text-white/40
                transition-colors
                hover:text-white
              "
            >

              <FaEnvelope className="text-xs text-white/30" />

              info@example.com

            </a>


            {/* Location */}

            <div className="mt-2 flex items-center gap-3 px-2 text-sm text-white/40">

              <FaMapMarkerAlt className="text-xs text-white/30" />

              Paris Road, Mirpur 11,Dhaka,Bangladesh

            </div>

          </div>

        </div>


        {/* =========================================
            DIVIDER
        ========================================== */}

        <div className="my-12 h-px bg-white/10" />


        {/* =========================================
            BOTTOM
        ========================================== */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Dhaka Foreign Academy.
            All rights reserved.
          </p>


          <div className="flex flex-wrap items-center gap-5">

            <a
              href="/privacy"
              className="text-xs text-white/25 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-white/25 transition-colors hover:text-white/60"
            >
              Terms
            </a>


            {/* Back to top */}

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-white/40
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Back to top"
            >
              <FaArrowUp className="text-xs" />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}