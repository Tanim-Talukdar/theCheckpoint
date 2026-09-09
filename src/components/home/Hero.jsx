"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
  FiPhone,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "8801844240483";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/checkpoint_bd",
  facebook:
    "https://www.facebook.com/profile.php?id=61591601052508",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6";

const PHONE_NUMBER = "+880 1844-240483";

/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
  {
    image: "/view7.webp",
    eyebrow: "01 / GAMING",
    title: "PLAY",
    accent: "HARD.",
    description:
      "Premium gaming PCs, PS5, VR and racing simulator experiences.",
    features: ["Gaming PC", "PS5", "VR", "Racing"],
  },

  {
    image: "/view6.jpeg",
    eyebrow: "02 / DINING",
    title: "EAT",
    accent: "CHILL.",
    description:
      "Food, drinks and entertainment in a premium space.",
    features: ["Restaurant", "Cafe", "Movie"],
  },

  {
    image: "/view11.jpg",
    eyebrow: "03 / FITNESS",
    title: "TRAIN",
    accent: "STRONG.",
    description:
      "Modern fitness facilities built for an active lifestyle.",
    features: ["Gym", "Swimming", "Fitness"],
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 1.08,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  exit: {
    opacity: 0,
    scale: 1.04,
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const [active, setActive] = useState(0);

  const slide = slides[active];

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     CONTROLS
  ======================================================= */

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <section
      id="home"
      aria-labelledby="checkpoint-hero-title"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#030712]
        text-white
      "
    >
      {/* =====================================================
          SEO H1
      ====================================================== */}

      <h1
        id="checkpoint-hero-title"
        className="sr-only"
      >
        The Checkpoint Bashundhara Dhaka — Gaming, Restaurant,
        Gym and Entertainment Destination
      </h1>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              opacity: {
                duration: 1.2,
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
              alt={`The Checkpoint ${
                slide.eyebrow.split(" / ")[1].toLowerCase()
              } in Bashundhara, Dhaka`}
              width={1920}
              height={1080}
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
              className="
                h-full
                w-full
                object-cover
              "
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left readability */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#02050b]
            via-[#02050b]/75
            to-transparent
          "
        />

        {/* Bottom readability */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[60%]
            bg-gradient-to-t
            from-[#030712]
            via-[#030712]/70
            to-transparent
          "
        />

        {/* Atmosphere */}
        <div className="absolute inset-0 bg-blue-950/10" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1600px]
          items-center
          px-5
          pb-8
          pt-24
          sm:px-8
          sm:pt-28
          lg:px-14
        "
      >
        <div className="w-full">

          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="
              mb-8
              flex
              items-center
              gap-3
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-blue-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-blue-500
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white/80
              "
            >
              The Checkpoint
            </span>

            <span className="h-px w-6 bg-white/20" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/50
              "
            >
              Bashundhara
            </span>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              grid
              items-end
              gap-10
              lg:grid-cols-[1fr_390px]
              lg:gap-12
            "
          >

            {/* =================================================
                LEFT
            ================================================== */}

            <motion.div
              key={`content-${active}`}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
            >

              {/* Category */}

              <motion.div
                variants={textVariants}
                className="
                  mb-3
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  text-blue-400
                  sm:text-xs
                "
              >
                {slide.eyebrow}
              </motion.div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <motion.div variants={textVariants}>
                <div
                  aria-hidden="true"
                  className="
                    text-[clamp(4.5rem,22vw,8rem)]
                    font-black
                    leading-[0.72]
                    tracking-[-0.075em]
                    sm:text-[clamp(6rem,15vw,14rem)]
                  "
                >
                  {slide.title}

                  <span className="text-blue-500">
                    .
                  </span>
                </div>

                <div
                  className="
                    mt-4
                    text-[clamp(1.2rem,4vw,2.8rem)]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[-0.03em]
                    text-white/35
                  "
                >
                  {slide.accent}
                </div>
              </motion.div>

              {/* =================================================
                  SHORT DESCRIPTION
              ================================================== */}

              <motion.div
                variants={textVariants}
                className="
                  mt-5
                  max-w-lg
                  sm:mt-7
                "
              >
                <p
                  className="
                    text-sm
                    leading-6
                    text-white/75
                    sm:text-base
                    sm:leading-7
                  "
                >
                  Gaming, dining, fitness and entertainment
                  in Bashundhara.
                </p>

                {/* Desktop only */}
                <p
                  className="
                    mt-2
                    hidden
                    text-sm
                    leading-6
                    text-white/50
                    lg:block
                  "
                >
                  {slide.description}
                </p>
              </motion.div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <motion.div
                variants={textVariants}
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {slide.features.map((feature) => (
                  <span
                    key={feature}
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-black/25
                      px-3
                      py-1.5
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      text-white/65
                      backdrop-blur-md
                    "
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>

              {/* =================================================
                  CTA
              ================================================== */}

              <motion.div
                variants={textVariants}
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2.5
                "
              >
                <Link
                  href="#contact"
                  aria-label="Contact The Checkpoint"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3.5
                    text-[10px]
                    font-black
                    tracking-[0.1em]
                    text-white
                    transition
                    hover:bg-blue-500
                    sm:px-6
                  "
                >
                  CONTACT US

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-md
                      bg-white/10
                    "
                  >
                    <FiArrowUpRight size={14} />
                  </span>
                </Link>

                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-black/25
                    px-5
                    py-3.5
                    text-[10px]
                    font-bold
                    tracking-[0.08em]
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/10
                  "
                >
                  <FiMessageCircle size={15} />
                  WHATSAPP
                </a>
              </motion.div>

              {/* =================================================
                  SOCIAL
              ================================================== */}

              <motion.div
                variants={textVariants}
                className="
                  mt-5
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  Follow
                </span>

                <span className="h-px w-4 bg-white/15" />

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/15
                    bg-black/20
                    text-white/65
                    backdrop-blur-md
                    transition
                    hover:text-white
                  "
                >
                  <FiInstagram size={14} />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/15
                    bg-black/20
                    text-white/65
                    backdrop-blur-md
                    transition
                    hover:text-white
                  "
                >
                  <FiFacebook size={14} />
                </a>
              </motion.div>
            </motion.div>

            {/* =================================================
                DESKTOP CONTACT
            ================================================== */}

            <DesktopContactPanel />
          </div>

          {/* =================================================
              MOBILE CONTACT
          ================================================== */}

          <MobileContactPanel />

          {/* =================================================
              SLIDER CONTROLS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="
              mt-10
              flex
              items-end
              justify-between
              border-t
              border-white/10
              pt-4
              sm:mt-14
              sm:pt-5
            "
          >
            {/* Slide selectors */}

            <div
              className="
                flex
                gap-4
                sm:gap-8
              "
              role="tablist"
              aria-label="The Checkpoint experiences"
            >
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show ${item.eyebrow}`}
                  onClick={() => setActive(index)}
                  className="group text-left"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`
                        text-[9px]
                        font-bold
                        tracking-[0.2em]
                        ${
                          index === active
                            ? "text-blue-400"
                            : "text-white/35"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`
                        hidden
                        text-[9px]
                        font-bold
                        tracking-[0.2em]
                        sm:block
                        ${
                          index === active
                            ? "text-white"
                            : "text-white/30"
                        }
                      `}
                    >
                      {item.eyebrow.split(" / ")[1]}
                    </span>
                  </div>

                  <div
                    className="
                      relative
                      h-[2px]
                      w-10
                      overflow-hidden
                      bg-white/15
                      sm:w-28
                    "
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
                        className="
                          absolute
                          inset-y-0
                          left-0
                          bg-blue-500
                        "
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Arrows */}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous experience"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/25
                  text-white/60
                  backdrop-blur-md
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <FiChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next experience"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/25
                  text-white/60
                  backdrop-blur-md
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <FiChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative corners */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          hidden
          h-36
          w-36
          border-b
          border-r
          border-blue-500/20
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-32
          hidden
          h-28
          w-28
          border-l
          border-t
          border-blue-500/15
          lg:block
        "
      />
    </section>
  );
}

/* =========================================================
   DESKTOP CONTACT PANEL
========================================================= */

function DesktopContactPanel() {
  return (
    <motion.aside
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      className="hidden lg:block"
      aria-label="The Checkpoint contact information"
    >
      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-black/30
          p-7
          backdrop-blur-md
        "
      >
        <ContactHeader />

        <ContactAddress />

        <ContactActions />

        <div className="my-6 h-px bg-white/10" />

        <ContactPhone />

        <ContactWhatsApp />

        <div
          className="
            mt-7
            border-t
            border-white/10
            pt-6
          "
        >
          <p
            className="
              text-lg
              font-bold
              leading-tight
              text-white
            "
          >
            Gaming.
            <br />
            Dining.
            <br />
            Fitness.
            <br />

            <span className="text-blue-400">
              Entertainment.
            </span>
          </p>
        </div>
      </div>
    </motion.aside>
  );
}

/* =========================================================
   MOBILE CONTACT
========================================================= */

function MobileContactPanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="
        mt-8
        lg:hidden
      "
    >
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-black/30
          backdrop-blur-md
        "
      >
        {/* Location */}

        <div className="flex items-center gap-3 p-4">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-blue-500/10
              text-blue-400
            "
          >
            <FiMapPin size={17} />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-400
              "
            >
              LOCATION
            </p>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                font-semibold
                text-white
              "
            >
              Bashundhara R/A, Dhaka
            </p>
          </div>
        </div>

        {/* Actions */}

        <div
          className="
            grid
            grid-cols-3
            border-t
            border-white/10
          "
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-1.5
              border-r
              border-white/10
              py-3
              text-[8px]
              font-bold
              tracking-[0.1em]
              text-white/65
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <FiMapPin size={12} />
            MAP
          </a>

          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="
              flex
              items-center
              justify-center
              gap-1.5
              border-r
              border-white/10
              py-3
              text-[8px]
              font-bold
              tracking-[0.1em]
              text-white/65
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <FiPhone size={12} />
            CALL
          </a>

          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-1.5
              py-3
              text-[8px]
              font-bold
              tracking-[0.1em]
              text-white/65
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <FiMessageCircle size={12} />
            CHAT
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONTACT HEADER
========================================================= */

function ContactHeader() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-blue-500/15
          text-blue-400
        "
      >
        <FiMapPin size={18} />
      </div>

      <div>
        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-blue-400
          "
        >
          Visit Us
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          The Checkpoint
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   ADDRESS
========================================================= */

function ContactAddress() {
  return (
    <address
      className="
        mt-5
        not-italic
        text-sm
        leading-6
        text-white/70
      "
    >
      <strong className="font-semibold text-white">
        Bashundhara R/A
      </strong>
      <br />
      Block C, Road 2
      <br />
      House 1/F
      <br />
      Dhaka, Bangladesh 1229
    </address>
  );
}

/* =========================================================
   MAP
========================================================= */

function ContactActions() {
  return (
    <a
      href={GOOGLE_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-5
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        border
        border-blue-500/25
        bg-blue-500/10
        px-4
        py-3
        text-[10px]
        font-bold
        uppercase
        tracking-[0.12em]
        text-blue-300
        transition
        hover:bg-blue-500/20
      "
    >
      Open in Google Maps

      <FiArrowUpRight size={14} />
    </a>
  );
}

/* =========================================================
   PHONE
========================================================= */

function ContactPhone() {
  return (
    <a
      href={`tel:${WHATSAPP_NUMBER}`}
      className="
        flex
        items-center
        gap-3
        text-sm
        text-white/70
        transition
        hover:text-white
      "
    >
      <FiPhone
        size={15}
        className="text-blue-400"
      />

      <span>
        <span
          className="
            block
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          Call Us
        </span>

        <span
          className="
            mt-1
            block
            font-semibold
            text-white/90
          "
        >
          {PHONE_NUMBER}
        </span>
      </span>
    </a>
  );
}

/* =========================================================
   WHATSAPP
========================================================= */

function ContactWhatsApp() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-4
        flex
        items-center
        gap-3
        text-sm
        text-white/70
        transition
        hover:text-white
      "
    >
      <FiMessageCircle
        size={15}
        className="text-blue-400"
      />

      <span>
        <span
          className="
            block
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          WhatsApp
        </span>

        <span
          className="
            mt-1
            block
            font-semibold
            text-white/90
          "
        >
          Chat with us
        </span>
      </span>
    </a>
  );
}