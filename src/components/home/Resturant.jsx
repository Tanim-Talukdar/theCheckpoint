"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCoffee,
  FiX,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const menuImages = [
  {
    src: "/resturants/menufood.jpeg",
    title: "FOOD MENU",
  },
  {
    src: "/resturants/menudrinks.jpeg",
    title: "DRINKS MENU",
  },
];

const highlights = [
  "FOOD",
  "DRINKS",
  "CAFE",
  "HANGOUT",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Restaurant() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <section
      id="restaurant"
      className="
        relative
        overflow-hidden
        bg-[#030712]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/[0.08]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/[0.04]
          blur-[120px]
        "
      />

      {/* Top line */}

      <div className="h-px bg-blue-500/25" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-10
        "
      >

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
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
                The Checkpoint Kitchen
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
              EAT
              <span className="text-blue-500">.</span>
            </h2>

          </div>

          <p
            className="
              max-w-xs
              text-sm
              leading-6
              text-white/45
              sm:text-right
            "
          >
            Good food.
            <br />
            Good drinks.
            <br />
            Good vibes.
          </p>
        </motion.div>

        {/* =================================================
            MENU
        ================================================== */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:mt-16
            sm:grid-cols-2
          "
        >

          {menuImages.map((menu, index) => (
            <motion.button
              key={menu.src}
              type="button"
              onClick={() => setSelectedMenu(menu)}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#07101D]
                text-left
              "
            >

              {/* Image */}

              <div className="relative aspect-[4/5] overflow-hidden">

                <motion.img
                  src={menu.src}
                  alt={`${menu.title} - The Checkpoint Bashundhara`}
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/10
                    to-transparent
                  "
                />

                {/* Open icon */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    text-white
                    backdrop-blur-md
                    transition
                    duration-300
                    group-hover:border-blue-400
                    group-hover:bg-blue-600
                  "
                >
                  <FiArrowUpRight size={17} />
                </div>

                {/* Bottom */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-7
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.3em]
                      text-blue-300
                    "
                  >
                    THE CHECKPOINT
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-black
                      tracking-[-0.04em]
                      sm:text-3xl
                    "
                  >
                    {menu.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-white/50
                    "
                  >
                    Tap to view
                  </p>
                </div>

              </div>
            </motion.button>
          ))}

        </div>

        {/* =================================================
            TAGS
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {highlights.map((item) => (
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

        {/* =================================================
            LOCATION / CONTACT
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="
            mt-12
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

          <div className="flex gap-2">

            <a
              href="https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6"
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
              href="tel:+8801844240483"
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

      {/* =====================================================
          MENU MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedMenu && (
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
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-md
            "
            onClick={() => setSelectedMenu(null)}
          >

            {/* Modal */}

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
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[94vh]
                max-w-5xl
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-[#030712]
                shadow-2xl
              "
            >

              {/* Close */}

              <button
                type="button"
                onClick={() => setSelectedMenu(null)}
                aria-label="Close menu"
                className="
                  absolute
                  right-4
                  top-4
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/60
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/10
                "
              >
                <FiX size={19} />
              </button>

              {/* Menu image */}

              <div className="max-h-[94vh] overflow-auto">
                <img
                  src={selectedMenu.src}
                  alt={selectedMenu.title}
                  className="
                    block
                    h-auto
                    max-h-[94vh]
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