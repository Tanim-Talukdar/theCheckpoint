
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "8801844240483";

const GOOGLE_MAPS_LINK =
  "https://maps.app.goo.gl/E39BMbkKWRL7FBty7";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/checkpoint_bd",
  facebook:
    "https://www.facebook.com/profile.php?id=61591601052508",
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello The Checkpoint! 👋

Name: ${form.name}
Phone: ${form.phone}

Message:
${form.message}

Sent from The Checkpoint website.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-20 text-white sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400">
                The Checkpoint · Bashundhara
              </span>
            </div>

            <h2 className="text-[clamp(4rem,15vw,8rem)] font-black leading-[0.75] tracking-[-0.07em]">
              TALK
              <span className="text-blue-500">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/40 sm:text-right">
            Questions?
            <br />
            Want to visit?
            <br />
            Just message us.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.8fr]">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-[#080F1C] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <FiMessageCircle
                size={17}
                className="text-blue-400"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                WhatsApp us
              </span>
            </div>

            <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              HOW CAN WE
              <br />
              <span className="text-white/30">
                HELP?
              </span>
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#050A14]
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/20
                  focus:border-blue-500/50
                "
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                type="tel"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#050A14]
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/20
                  focus:border-blue-500/50
                "
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={4}
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/10
                  bg-[#050A14]
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/20
                  focus:border-blue-500/50
                "
              />

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
                  transition
                  duration-300
                  hover:bg-blue-500
                "
              >
                SEND ON WHATSAPP

                <FiArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >

            {/* LOCATION */}

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open The Checkpoint in Google Maps"
              className="
                group
                rounded-[2rem]
                border
                border-white/10
                bg-[#080F1C]
                p-6
                transition
                duration-300
                hover:border-blue-500/30
                hover:bg-blue-500/[0.03]
                sm:p-8
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <FiMapPin size={18} />
                </div>

                <FiArrowUpRight
                  size={18}
                  className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </div>

              <p className="mt-7 text-[9px] font-bold tracking-[0.25em] text-white/30">
                FIND US
              </p>

              <h3 className="mt-2 text-2xl font-black">
                BASHUNDHARA R/A
              </h3>

              <address className="mt-3 not-italic text-sm leading-6 text-white/40">
                Block C, Road 2, House 1/F,
                <br />
                Dhaka, Bangladesh 1229
              </address>

              <p className="mt-5 text-[9px] font-bold tracking-[0.2em] text-blue-400">
                OPEN IN GOOGLE MAPS ↗
              </p>
            </a>

            {/* CONTACT */}

            <div className="grid grid-cols-2 gap-5">

              {/* PHONE */}

              <a
                href="tel:+8801844240483"
                className="
                  group
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#080F1C]
                  p-6
                  transition
                  hover:border-blue-500/30
                "
              >
                <FiPhone
                  size={18}
                  className="text-blue-400"
                />

                <p className="mt-5 text-[8px] font-bold tracking-[0.2em] text-white/30">
                  CALL
                </p>

                <p className="mt-2 text-sm font-bold text-white">
                  +880 1844-240483
                </p>
              </a>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#080F1C]
                  p-6
                  transition
                  hover:border-blue-500/30
                "
              >
                <FiMessageCircle
                  size={18}
                  className="text-blue-400"
                />

                <p className="mt-5 text-[8px] font-bold tracking-[0.2em] text-white/30">
                  WHATSAPP
                </p>

                <p className="mt-2 text-sm font-bold text-white">
                  Message us
                </p>
              </a>

            </div>

            {/* SOCIALS */}

            <div className="flex gap-3">

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Checkpoint Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#080F1C] text-white/40 transition hover:border-blue-500/30 hover:text-white"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Checkpoint Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#080F1C] text-white/40 transition hover:border-blue-500/30 hover:text-white"
              >
                <FiFacebook size={17} />
              </a>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

