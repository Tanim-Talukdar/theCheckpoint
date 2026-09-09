"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiX,
  FiMonitor,
  FiPlay,
  FiZap,
  FiTarget,
  FiMapPin,
} from "react-icons/fi";

const gamingExperiences = [
  { icon: FiMonitor, name: "Gaming PC" },
  { icon: FiPlay, name: "PS5" },
  { icon: FiZap, name: "VR Gaming" },
  { icon: FiTarget, name: "Racing Simulator" },
  { icon: FiTarget, name: "Pool Table" },
  { icon: FiTarget, name: "Table Tennis" },
  { icon: FiTarget, name: "Board Games" },
];

const menuImages = [
  {
    src: "/gaming/gamingmenu.jpeg",
    alt: "The Checkpoint gaming menu and available games in Bashundhara Dhaka",
    label: "GAME MENU",
  },
  {
    src: "/gaming/princing.jpeg",
    alt: "The Checkpoint gaming prices and session rates in Bashundhara Dhaka",
    label: "PRICING",
  },
];

export default function Gaming() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section
        id="gaming"
        aria-labelledby="gaming-title"
        className="relative overflow-hidden bg-[#050A14] py-20 text-white sm:py-28"
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute right-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.08] blur-[140px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* ================= HEADER ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">
                Gaming Zone
              </span>
            </div>

            <h2
              id="gaming-title"
              className="text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl"
            >
              PLAY
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Gaming PC, PS5, VR, racing simulator and more at The Checkpoint
              in Bashundhara, Dhaka.
            </p>
          </motion.div>

          {/* ================= EXPERIENCES ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {gamingExperiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="
                    flex items-center gap-2
                    rounded-lg
                    border border-white/10
                    bg-white/[0.04]
                    px-3 py-2
                    text-[10px]
                    font-semibold
                    text-white/75
                  "
                >
                  <Icon
                    size={13}
                    className="text-blue-400"
                  />

                  {item.name}
                </div>
              );
            })}
          </motion.div>

          {/* ================= MENU ================= */}

          <div className="mt-10">

            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-400">
                  Gaming Menu
                </p>

                <h3 className="mt-1 text-xl font-black sm:text-2xl">
                  Games & Pricing
                </h3>
              </div>

              <span className="hidden text-[9px] uppercase tracking-widest text-white/35 sm:block">
                Tap to enlarge
              </span>
            </div>

            {/* MENU IMAGES */}

            <div className="grid gap-4 sm:grid-cols-2">

              {menuImages.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-[#0A101C]
                    text-left
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                  aria-label={`View ${image.label}`}
                >

                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="
                      block
                      w-full
                      object-contain
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  {/* Bottom label */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      flex
                      items-center
                      justify-between
                      bg-gradient-to-t
                      from-black/90
                      to-transparent
                      px-5
                      pb-4
                      pt-10
                    "
                  >
                    <span className="text-[10px] font-black tracking-[0.2em]">
                      {image.label}
                    </span>

                    <span
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-lg
                        bg-white
                        text-black
                        transition
                        group-hover:bg-blue-500
                        group-hover:text-white
                      "
                    >
                      <FiArrowUpRight size={14} />
                    </span>
                  </div>

                </motion.button>
              ))}

            </div>
          </div>

          {/* ================= LOCATION ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              mt-5
              flex
              items-center
              justify-between
              gap-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-4
              sm:p-5
            "
          >
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FiMapPin size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  Location
                </p>

                <p className="mt-1 truncate text-xs font-semibold text-white/80 sm:text-sm">
                  Bashundhara R/A, Block C, Road 2
                </p>
              </div>

            </div>

            <a
              href="https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                shrink-0
                items-center
                gap-2
                rounded-lg
                border border-blue-500/20
                bg-blue-500/10
                px-3 py-2
                text-[9px]
                font-bold
                uppercase
                tracking-wider
                text-blue-300
                transition
                hover:bg-blue-500/20
              "
            >
              Maps
              <FiArrowUpRight size={13} />
            </a>

          </motion.div>

        </div>
      </section>

      {/* ================= IMAGE POPUP ================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-md
            "
            onClick={() => setSelectedImage(null)}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gaming menu"
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
                border border-white/15
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              <FiX size={20} />
            </button>

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                max-h-[92vh]
                max-w-6xl
                overflow-hidden
                rounded-xl
                bg-[#080D18]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="
                  max-h-[92vh]
                  w-auto
                  max-w-full
                  object-contain
                "
              />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}