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
    <footer
      className="
        relative
        overflow-hidden
        bg-[#071b18]
        text-white
      "
    >

      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Emerald glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#006A4E]/35
            blur-[150px]
          "
        />

        {/* Red glow */}

        <div
          className="
            absolute
            right-[-180px]
            top-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#BC002D]/20
            blur-[150px]
          "
        />

        {/* Deep green glow */}

        <div
          className="
            absolute
            bottom-[-200px]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#008f6b]/15
            blur-[160px]
          "
        />

        {/* Navy glow */}

        <div
          className="
            absolute
            bottom-0
            right-[15%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#102a43]/30
            blur-[130px]
          "
        />

      </div>


      {/* =========================================
          TOP ACCENT
      ========================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-[#BC002D]
          via-[#f5f5f0]
          to-[#006A4E]
        "
      />


      {/* =========================================
          MAIN FOOTER
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          pb-8
          pt-16
          sm:px-8
          sm:pt-20
        "
      >

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]
          "
        >

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
                  bg-[#f8f7f1]
                  p-1.5
                  shadow-[0_8px_30px_rgba(0,0,0,0.2)]
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

                <h2
                  className="
                    text-base
                    font-extrabold
                    tracking-tight
                    text-[#f8f7f1]
                  "
                >
                  Dhaka Foreign Academy
                </h2>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#d8e4df]/45
                  "
                >
                  Language & Education
                </p>

              </div>

            </a>


            <p
              className="
                mt-6
                text-sm
                leading-7
                text-[#d8e4df]/60
              "
            >
              Japanese language coaching and Japan-focused guidance
              for students and professionals in Bangladesh.
            </p>


            {/* Bangladesh → Japan */}

            <div className="mt-6 flex items-center gap-3">

              <span className="text-xl">
                🇧🇩
              </span>

              <div
                className="
                  h-px
                  w-8
                  bg-gradient-to-r
                  from-[#BC002D]
                  to-white/20
                "
              />

              <span className="text-xl">
                🇯🇵
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#d8e4df]/40
                "
              >
                Bangladesh → Japan
              </span>

            </div>


            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-2">

              {/* Facebook */}

              <a
                href="https://www.facebook.com/profile.php?id=100094932286301"
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
                  bg-white/[0.05]
                  text-white/55
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
                  bg-white/[0.05]
                  text-white/55
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
                href="https://wa.me/88001919248151"
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
                  bg-white/[0.05]
                  text-white/55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-300/30
                  hover:bg-green-400/10
                  hover:text-green-300
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

            <h3
              className="
                text-sm
                font-bold
                text-[#f8f7f1]
              "
            >
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
                    text-[#d8e4df]/50
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-[#f8f7f1]
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

            <h3
              className="
                text-sm
                font-bold
                text-[#f8f7f1]
              "
            >
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
                    text-[#d8e4df]/50
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-[#f8f7f1]
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

            <h3
              className="
                text-sm
                font-bold
                text-[#f8f7f1]
              "
            >
              Get in touch
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-6
                text-[#d8e4df]/55
              "
            >
              Have questions about courses, JLPT, visa processing
              or studying in Japan? Our team is here to help.
            </p>


            {/* PHONE 1 */}

            <a
              href="tel:+880163278705"
              className="
                group
                mt-5
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-r
                from-[#BC002D]/10
                to-white/[0.03]
                p-3.5
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#BC002D]/30
                hover:bg-[#BC002D]/15
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
                  bg-[#BC002D]/15
                  text-[#ff6680]
                "
              >
                <FaPhone className="text-xs" />
              </span>

              <div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white/30
                  "
                >
                  Call Us
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-bold
                    text-white/80
                  "
                >
                  +880 1632-78705
                </p>

              </div>

            </a>


            {/* PHONE 2 */}

            <a
              href="tel:+8801919248151"
              className="
                group
                mt-2
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-r
                from-[#006A4E]/20
                to-white/[0.03]
                p-3.5
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#008f6b]/40
                hover:bg-[#006A4E]/30
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
                  bg-[#006A4E]/35
                  text-green-300
                "
              >
                <FaPhone className="text-xs" />
              </span>

              <div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white/30
                  "
                >
                  WhatsApp / Phone
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-bold
                    text-white/80
                  "
                >
                  +880 1919-248151
                </p>

              </div>

            </a>


            {/* EMAIL 1 */}

            <a
              href="mailto:info@example.com"
              className="
                group
                mt-3
                flex
                items-center
                gap-3
                rounded-xl
                p-2
                text-sm
                text-[#d8e4df]/50
                transition-colors
                hover:text-white
              "
            >

              <FaEnvelope
                className="
                  text-xs
                  text-[#d8e4df]/35
                "
              />

              <span>
                dhakaforeignacademy@gmail.com
              </span>

            </a>





            {/* LOCATION */}

            <div
              className="
                mt-2
                flex
                items-start
                gap-3
                px-2
                text-sm
                leading-6
                text-[#d8e4df]/50
              "
            >

              <FaMapMarkerAlt
                className="
                  mt-1
                  shrink-0
                  text-xs
                  text-[#d8e4df]/35
                "
              />

              <span>
                Rising Sun Complex, Benaroshi Polli, Paris Road, Mirpur-10, Dhaka-1216
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            DIVIDER
        ========================================== */}

        <div
          className="
            my-12
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />


        {/* =========================================
            BOTTOM
        ========================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-xs text-[#d8e4df]/30">
            © {new Date().getFullYear()} Dhaka Foreign Academy.
            All rights reserved.
          </p>


          <div className="flex flex-wrap items-center gap-5">

            <a
              href="/privacy"
              className="
                text-xs
                text-[#d8e4df]/30
                transition-colors
                hover:text-white/70
              "
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="
                text-xs
                text-[#d8e4df]/30
                transition-colors
                hover:text-white/70
              "
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
                bg-white/[0.05]
                text-white/45
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
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