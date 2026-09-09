
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiX,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const services = [
  {
    title: "GYM",
    image: "/gym/gym3.jpeg",
  },
  {
    title: "SWIMMING",
    image: "/swimmingpool/swimmingpool.jpeg",
  },
  {
    title: "FITNESS",
    image: "/gym/gym.jpeg",
  },
];

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6";

const PHONE_NUMBER = "+8801844240483";

export default function Packages() {
  const [showPackage, setShowPackage] = useState(false);

  return (
    <section
      id="packages"
      className="
        relative
        overflow-hidden
        bg-[#030712]
        py-20
        text-white
        sm:py-28
      "
    >
      {/* ================= GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/[0.07]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ================= HEADER ================= */}

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
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            justify-between
            gap-5
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "
              >
                The Checkpoint Fitness
              </span>
            </div>

            <h2
              className="
                text-[clamp(4rem,15vw,8rem)]
                font-black
                leading-[0.75]
                tracking-[-0.07em]
              "
            >
              FITNESS
              <span className="text-blue-500">.</span>
            </h2>
          </div>

          <p
            className="
              max-w-xs
              text-sm
              leading-6
              text-white/40
              sm:text-right
            "
          >
            Train.
            <br />
            Swim.
            <br />
            Recover.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:mt-16
            lg:min-h-[680px]
            lg:grid-cols-[0.52fr_1.48fr]
            lg:items-stretch
          "
        >
          {/* ================= LEFT SERVICES ================= */}

          <div
            className="
              grid
              grid-cols-3
              gap-3
              lg:grid-cols-1
              lg:grid-rows-3
            "
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  min-h-32
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#07101D]
                  sm:min-h-40
                  lg:min-h-0
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-full
                    min-h-32
                    w-full
                    sm:min-h-40
                    lg:min-h-0
                  "
                >
                  <img
                    src={service.image}
                    alt={`${service.title} - The Checkpoint`}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* DARK GRADIENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* TITLE */}

                  <div
                    className="
                      absolute
                      bottom-3
                      left-3
                      sm:bottom-4
                      sm:left-4
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        font-black
                        tracking-[0.2em]
                        text-white
                        sm:text-xs
                      "
                    >
                      {service.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT PACKAGE IMAGE ================= */}

          <motion.button
            type="button"
            onClick={() => setShowPackage(true)}
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              relative
              min-h-[500px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#07101D]
              text-left
              sm:min-h-[620px]
              lg:min-h-[680px]
            "
          >
            {/* PACKAGE IMAGE */}

            <img
              src="/packeges.jpg"
              alt="The Checkpoint fitness packages and membership pricing"
              loading="lazy"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
                transition
                duration-700
                group-hover:scale-[1.02]
              "
            />

            {/* BACKGROUND */}

            <div
              className="
                absolute
                inset-0
                -z-10
                bg-[#07101D]
              "
            />

            {/* OPEN ICON */}

            <div
              className="
                absolute
                right-5
                top-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/50
                text-white
                backdrop-blur-md
                transition
                duration-300
                group-hover:border-blue-400
                group-hover:bg-blue-600
              "
            >
              <FiArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>

        {/* ================= SERVICE TAGS ================= */}

        <motion.div
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
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {[
            "GYM",
            "SWIMMING",
            "STEAM BATH",
            "MEMBERSHIP",
          ].map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white/45
              "
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* ================= LOCATION ================= */}

        <motion.div
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
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* LOCATION */}

          <div className="flex items-center gap-3">
            <FiMapPin
              size={16}
              className="text-blue-400"
            />

            <div>
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >
                LOCATION
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  font-semibold
                  text-white/70
                "
              >
                Bashundhara R/A, Dhaka
              </p>
            </div>
          </div>

          {/* ACTIONS */}

          <div className="flex gap-2">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-2.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white/60
                transition
                hover:border-blue-500/40
                hover:text-white
              "
            >
              <FiMapPin size={12} />
              MAP
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-2.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white/60
                transition
                hover:border-blue-500/40
                hover:text-white
              "
            >
              <FiPhone size={12} />
              CALL
            </a>
          </div>
        </motion.div>
      </div>

      {/* ================= PACKAGE POPUP ================= */}

      <AnimatePresence>
        {showPackage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setShowPackage(false)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-md
              sm:p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[95vh]
                max-w-5xl
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-[#030712]
                shadow-2xl
              "
            >
              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setShowPackage(false)}
                aria-label="Close package"
                className="
                  absolute
                  right-3
                  top-3
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/70
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-black
                "
              >
                <FiX size={19} />
              </button>

              {/* IMAGE */}

              <div className="max-h-[95vh] overflow-auto">
                <img
                  src="/packeges.jpg"
                  alt="The Checkpoint fitness packages"
                  className="
                    block
                    h-auto
                    max-h-[95vh]
                    w-auto
                    max-w-full
                    object-contain
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
