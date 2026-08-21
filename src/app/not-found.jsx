"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaHome,
  FaGraduationCap,
  FaGlobeAsia,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf9f6] text-[#151515]">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-red-50 blur-3xl"
        />

        {/* Floating Japanese red circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[10%] top-[15%] hidden h-24 w-24 rounded-full border border-red-200 md:block"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[15%] left-[8%] hidden h-16 w-16 rounded-full border border-green-200 md:block"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">

        <div className="mx-auto w-full max-w-4xl text-center">

          {/* Flags */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            {/* Japan */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="flex h-14 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="h-7 w-7 rounded-full bg-[#bc002d]" />
            </motion.div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl font-semibold text-gray-400"
            >
              →
            </motion.div>

            {/* Bangladesh */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="relative flex h-14 w-20 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-[#006a4e] shadow-sm"
            >
              <div className="h-7 w-7 translate-x-[-3px] rounded-full bg-[#f42a41]" />
            </motion.div>
          </motion.div>

          {/* Small brand label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm"
          >
            <FaGraduationCap />
            Japan • Language • Career
          </motion.div>

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-gradient-to-r from-[#111] via-[#333] to-[#bc002d] bg-clip-text text-[110px] font-black leading-none tracking-tight text-transparent sm:text-[150px]"
          >
            404
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Your Journey Has Taken
            <span className="text-[#bc002d]"> an Unexpected Turn.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg"
          >
            The page you are looking for could not be found.
            But your journey toward Japan does not end here.
            Let us guide you back to the right path.
          </motion.p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mx-auto mt-8 max-w-lg border-l-2 border-[#bc002d] bg-white/70 px-6 py-4 text-left shadow-sm"
          >
            <p className="text-sm font-medium italic text-gray-700">
              「道は続く — The journey continues.」
            </p>

            <p className="mt-1 text-xs text-gray-400">
              From Bangladesh to Japan, one step at a time.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >

            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl bg-[#bc002d] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-[#9f0026]"
            >
              <FaHome className="transition-transform group-hover:-translate-y-0.5" />
              Return Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
            >
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </motion.div>

          {/* Bottom brand message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400"
          >
            <FaGlobeAsia />
            <span>Building Bridges Between Bangladesh & Japan</span>
          </motion.div>

        </div>
      </div>
    </main>
  );
}