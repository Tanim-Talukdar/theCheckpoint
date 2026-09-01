
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  FiArrowLeft,
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

/* =========================================================
   MAP
   ========================================================= */

const LocationMap = dynamic(
  () => import("@/components/LocationMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[260px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#050A14]">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />

          <span className="text-[9px] font-bold tracking-[0.2em] text-white/30">
            LOADING MAP
          </span>
        </div>
      </div>
    ),
  }
);

/* =========================================================
   WHATSAPP NUMBER
   ========================================================= */

const WHATSAPP_NUMBER = "8801844240483";

/* =========================================================
   GOOGLE MAPS
   ========================================================= */

const GOOGLE_MAPS_LINK =
  "https://maps.app.goo.gl/E39BMbkKWRL7FBty7";

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/checkpoint_bd",

  facebook:
    "https://www.facebook.com/profile.php?id=61591601052508",

  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

/* =========================================================
   ANIMATION
   ========================================================= */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
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

/* =========================================================
   CONTACT INFORMATION
   ========================================================= */

const contactInfo = [
  {
    icon: FiPhone,
    title: "CALL US",
    value: "+880 1844-240483",
    description: "For bookings & general inquiries",
  },

  {
    icon: FiMail,
    title: "EMAIL",
    value: "hello@thecheckpoint.com",
    description: "We'll get back to you shortly",
  },

  {
    icon: FiMapPin,
    title: "LOCATION",
    value:
      "Bashundhara R/A, Block C, Road 2, House 1/f, Dhaka, Bangladesh 1229",
    description: "Visit The Checkpoint",
  },

  {
    icon: FiClock,
    title: "OPENING HOURS",
    value: "11:00 AM — 12:00 PM",
    description: "Open every day",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =======================================================
     WHATSAPP SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello The Checkpoint! 👋

I would like to get in touch.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Interested In:
${form.interest}

MESSAGE

${form.message}

Sent from The Checkpoint website.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  /* =======================================================
     GOOGLE MAPS
  ======================================================= */

  const handleDirections = () => {
    window.open(
      GOOGLE_MAPS_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0">

        {/* Blue glow */}

        <div className="absolute left-[-200px] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        {/* Bottom glow */}

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[150px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-10">

        {/* ===================================================
            BACK TO HOME
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
          >
            <FiArrowLeft
              size={15}
              className="transition duration-300 group-hover:-translate-x-1"
            />

            Back to home
          </Link>
        </motion.div>

        {/* ===================================================
            HERO
        =================================================== */}

        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end"
        >

          {/* LEFT */}

          <div>

            <motion.div
              variants={item}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                Get in touch
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-5xl text-6xl font-black leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]"
            >
              LET&apos;S

              <br />

              <span className="text-white/25">
                TALK.
              </span>
            </motion.h1>

          </div>

          {/* RIGHT */}

          <motion.div variants={item}>

            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Planning your next gaming session? Interested in a membership?
              Want to book the restaurant, gym or another experience?
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Send us a message and our team will help you get everything
              sorted.
            </p>

          </motion.div>

        </motion.section>

        {/* ===================================================
            CONTACT INFORMATION
        =================================================== */}

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-20 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >

          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.div
                key={contact.title}
                variants={item}
                className={`
                  group
                  border-white/10
                  p-7
                  transition-all
                  duration-500
                  hover:bg-blue-500/[0.035]

                  ${
                    index !== contactInfo.length - 1
                      ? "border-b sm:border-r lg:border-b-0"
                      : ""
                  }

                  ${
                    index === 1
                      ? "sm:border-r-0 lg:border-r"
                      : ""
                  }
                `}
              >

                {/* Icon */}

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400 transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={18} />
                </div>

                {/* Title */}

                <p className="mt-7 text-[9px] font-bold tracking-[0.25em] text-white/30">
                  {contact.title}
                </p>

                {/* Value */}

                <p className="mt-2 text-sm font-bold text-white">
                  {contact.value}
                </p>

                {/* Description */}

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {contact.description}
                </p>

              </motion.div>
            );
          })}

        </motion.section>

        {/* ===================================================
            FORM + LOCATION
        =================================================== */}

        <section className="mt-20 grid gap-5 lg:grid-cols-[1fr_0.65fr]">

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
            }}
            className="rounded-[2rem] border border-white/10 bg-[#080F1C]/80 p-7 sm:p-10"
          >

            {/* FORM HEADER */}

            <div className="mb-10">

              <div className="mb-4 flex items-center gap-3">

                <FiMessageCircle
                  size={16}
                  className="text-blue-500"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-400">
                  Send a message
                </span>

              </div>

              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                HOW CAN WE

                <br />

                <span className="text-white/30">
                  HELP YOU?
                </span>
              </h2>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME + PHONE */}

              <div className="grid gap-5 sm:grid-cols-2">

                <Input
                  label="YOUR NAME"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  type="text"
                  required
                />

                <Input
                  label="PHONE NUMBER"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+880..."
                  type="tel"
                  required
                />

              </div>

              {/* EMAIL */}

              <Input
                label="EMAIL ADDRESS"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                type="email"
                required
              />

              {/* INTEREST */}

              <div>

                <label
                  htmlFor="interest"
                  className="mb-2 block text-[9px] font-bold tracking-[0.2em] text-white/40"
                >
                  WHAT ARE YOU INTERESTED IN?
                </label>

                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-[#050A14]
                    px-4
                    py-4
                    text-sm
                    text-white
                    outline-none
                    transition
                    focus:border-blue-500/50
                  "
                >

                  <option
                    value=""
                    disabled
                  >
                    Select an option
                  </option>

                  <option value="Gaming Session">
                    Gaming Session
                  </option>

                  <option value="Gaming Membership">
                    Gaming Membership
                  </option>

                  <option value="Gym Membership">
                    Gym Membership
                  </option>

                  <option value="Swimming Pool">
                    Swimming Pool
                  </option>

                  <option value="Restaurant">
                    Restaurant
                  </option>

                  <option value="Events">
                    Events
                  </option>

                  <option value="Movie Theater">
                    Movie Theater
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-[9px] font-bold tracking-[0.2em] text-white/40"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us what you need..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border border-white/10
                    bg-[#050A14]
                    px-4
                    py-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition
                    focus:border-blue-500/50
                    focus:bg-blue-500/[0.02]
                  "
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-4
                  text-xs
                  font-black
                  tracking-[0.1em]
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
                "
              >

                SEND VIA WHATSAPP

                <FiSend
                  size={15}
                  className="transition duration-300 group-hover:translate-x-1"
                />

              </button>

              {/* NOTE */}

              <p className="text-center text-[9px] leading-5 text-white/20">
                You&apos;ll be redirected to WhatsApp with your message
                automatically prepared.
              </p>

            </form>

          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex flex-col gap-5"
          >

            {/* =================================================
                LOCATION CARD
            ================================================= */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080F1C] p-5 sm:p-6">

              {/* Glow */}

              <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full bg-blue-600/10 blur-[70px]" />

              <div className="relative">

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <FiMapPin size={18} />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/20">
                    LOCATION
                  </span>

                </div>

                {/* Heading */}

                <h3 className="mt-8 text-3xl font-black tracking-[-0.04em]">
                  COME

                  <br />

                  <span className="text-blue-500">
                    FIND US.
                  </span>
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                  The Checkpoint — Bangladesh&apos;s premium gaming lounge,
                  restaurant and fitness destination.
                </p>

                {/* =================================================
                    CLICKABLE MAP
                ================================================= */}

                <div className="group/map relative mt-6 overflow-hidden rounded-2xl">

                  <LocationMap />

                  {/* Clickable overlay */}

                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open The Checkpoint location in Google Maps"
                    className="
                      absolute
                      inset-0
                      z-10
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition-all
                      duration-300
                      hover:bg-black/30
                    "
                  >

                    <span
                      className="
                        translate-y-2
                        rounded-xl
                        border
                        border-white/20
                        bg-black/70
                        px-4
                        py-3
                        text-[9px]
                        font-black
                        tracking-[0.15em]
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover/map:translate-y-0
                        group-hover/map:opacity-100
                      "
                    >
                      OPEN IN GOOGLE MAPS
                      <span className="ml-2">↗</span>
                    </span>

                  </a>

                </div>

                {/* Address */}

                <div className="mt-5 flex gap-3">

                  <FiMapPin
                    size={14}
                    className="mt-1 shrink-0 text-blue-500"
                  />

                  <p className="text-xs leading-5 text-white/40">
                    Bashundhara R/A, Block C,
                    <br />
                    Road 2, House 1/f,
                    <br />
                    Dhaka, Bangladesh 1229
                  </p>

                </div>

                {/* Directions */}

                <button
                  type="button"
                  onClick={handleDirections}
                  className="
                    group/map
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-white/50
                    transition
                    hover:text-white
                  "
                >

                  GET DIRECTIONS

                  <FiArrowUpRight
                    size={13}
                    className="
                      transition
                      group-hover/map:-translate-y-0.5
                      group-hover/map:translate-x-0.5
                    "
                  />

                </button>

              </div>
            </div>

            {/* =================================================
                SOCIAL
            ================================================= */}

            <div className="rounded-[2rem] border border-white/10 bg-[#080F1C] p-7 sm:p-8">

              <p className="text-[9px] font-bold tracking-[0.25em] text-white/30">
                FOLLOW THE CHECKPOINT
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">

                {/* INSTAGRAM */}

                <SocialButton
                  icon={FiInstagram}
                  label="INSTAGRAM"
                  href={SOCIAL_LINKS.instagram}
                />

                {/* FACEBOOK */}

                <SocialButton
                  icon={FiFacebook}
                  label="FACEBOOK"
                  href={SOCIAL_LINKS.facebook}
                />

                {/* WHATSAPP */}

                <SocialButton
                  icon={FiPhone}
                  label="WHATSAPP"
                  href={SOCIAL_LINKS.whatsapp}
                />

              </div>

            </div>

          </motion.div>

        </section>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
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
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-blue-500/20 bg-blue-600 p-8 sm:p-12"
        >

          {/* Glow */}

          <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-white/10 blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            {/* Text */}

            <div>

              <p className="text-[9px] font-bold tracking-[0.3em] text-white/60">
                READY TO PLAY?
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                BOOK YOUR

                <br />

                EXPERIENCE.
              </h2>

            </div>

            {/* Button */}

            <Link
              href="/booking"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-white
                px-7
                py-4
                text-xs
                font-black
                text-black
                transition-all
                duration-300
                hover:bg-[#030712]
                hover:text-white
              "
            >

              BOOK NOW

              <FiArrowUpRight
                size={16}
                className="
                  transition
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

            </Link>

          </div>

        </motion.section>

      </div>
    </main>
  );
}

/* =========================================================
   INPUT COMPONENT
   ========================================================= */

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-[9px] font-bold tracking-[0.2em] text-white/40"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-xl
          border border-white/10
          bg-[#050A14]
          px-4
          py-4
          text-sm
          text-white
          outline-none
          placeholder:text-white/20
          transition
          focus:border-blue-500/50
          focus:bg-blue-500/[0.02]
        "
      />

    </div>
  );
}

/* =========================================================
   SOCIAL BUTTON
   ========================================================= */

function SocialButton({
  icon: Icon,
  label,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-4
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:bg-blue-500/[0.05]
      "
    >

      <div className="flex items-center gap-3">

        <Icon
          size={16}
          className="text-white/50 transition group-hover:text-blue-400"
        />

        <span className="text-[9px] font-bold tracking-[0.15em] text-white/50 group-hover:text-white">
          {label}
        </span>

      </div>

      <FiArrowUpRight
        size={13}
        className="
          text-white/20
          transition
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-blue-400
        "
      />

    </a>
  );
}
