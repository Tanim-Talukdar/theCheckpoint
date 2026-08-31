
"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiDroplet,
  FiHeart,
  FiShield,
  FiUsers,
  FiWind,
  FiZap,
} from "react-icons/fi";

const packages = [
  {
    id: "gym",
    number: "01",
    icon: FiActivity,
    title: "GYM ONLY",
    subtitle: "STRENGTH & CONDITIONING",
    description:
      "Full access to our gym floor with premium equipment for strength, cardio and conditioning.",
    dayPrice: "500",
    monthlyPrice: "4,000",
    features: [
      "Full gym floor access",
      "Strength equipment",
      "Cardio equipment",
      "Single entry per day",
    ],
  },

  {
    id: "pool",
    number: "02",
    icon: FiDroplet,
    title: "SWIMMING POOL",
    subtitle: "AQUATIC FITNESS",
    description:
      "Access our swimming facility for fitness, endurance and active recovery.",
    dayPrice: "500",
    monthlyPrice: "4,000",
    features: [
      "Swimming pool access",
      "Single entry per day",
      "Swimming & fitness",
      "Changing facilities",
    ],
  },

  {
    id: "combo",
    number: "03",
    icon: FiZap,
    title: "GYM + POOL",
    subtitle: "COMPLETE FITNESS",
    description:
      "Our complete package gives you access to both the gym and swimming pool.",
    dayPrice: "700",
    monthlyPrice: "6,000",
    featured: true,
    features: [
      "Full gym access",
      "Swimming pool access",
      "Strength & cardio equipment",
      "Single entry per day",
    ],
  },

  {
    id: "steam",
    number: "04",
    icon: FiWind,
    title: "STEAM BATH",
    subtitle: "RECOVERY SESSION",
    description:
      "Relax and recover after training with a dedicated steam bath session.",
    dayPrice: "300",
    monthlyPrice: null,
    features: [
      "15 minute session",
      "Recovery facility",
      "Post-workout cooldown",
      "Relaxation environment",
    ],
  },
];


/* =========================================================
   WHATSAPP
========================================================= */

function whatsappLink(message) {
  return `https://wa.me/8801844240483?text=${encodeURIComponent(
    message
  )}`;
}


/* =========================================================
   PAGE
========================================================= */

export default function GymPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02050a] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[72vh] overflow-hidden">

        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6 }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
          alt="The Checkpoint gym"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02050a] via-[#02050a]/75 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02050a] to-transparent" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-32 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[9px] font-black tracking-[0.35em] text-blue-400">
                THE CHECKPOINT FITNESS
              </span>

            </div>

            <h1 className="text-6xl font-black leading-[0.82] tracking-[-0.08em] sm:text-8xl lg:text-[8.5rem]">

              TRAIN
              <br />

              <span className="text-blue-500">
                HARDER.
              </span>

            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
              Premium gym, swimming and recovery facilities designed
              for serious training and everyday fitness.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {/* IMPORTANT:
                  This scrolls directly to pricing
              */}

              <a
                href="#pricing"
                className="group flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-[10px] font-black transition hover:bg-blue-500"
              >
                VIEW PRICING

                <FiArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={whatsappLink(
                  "Hi, I’m interested in The Checkpoint gym. Please send me the available packages and membership details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-[10px] font-black backdrop-blur-xl transition hover:bg-white/10"
              >
                WHATSAPP US
              </a>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          QUICK INFO
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#030711]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">

          <InfoStat
            icon={<FiActivity />}
            value="42+"
            label="EQUIPMENT"
          />

          <InfoStat
            icon={<FiDroplet />}
            value="01"
            label="SWIMMING POOL"
          />

          <InfoStat
            icon={<FiClock />}
            value="16 HR"
            label="DAILY ACCESS"
          />

          <InfoStat
            icon={<FiUsers />}
            value="250+"
            label="MEMBERS"
          />

        </div>

      </section>


      {/* =====================================================
          PRICING — IMPORTANT
      ===================================================== */}

      <section
        id="pricing"
        className="scroll-mt-24 border-b border-white/10 bg-[#050912] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[9px] font-black tracking-[0.3em] text-blue-400">
                MEMBERSHIP & PRICING
              </span>

            </div>

            <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

              <h2 className="text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-6xl">

                CHOOSE YOUR
                <br />

                <span className="text-blue-500">
                  PACKAGE.
                </span>

              </h2>

              <p className="max-w-md text-xs leading-6 text-white/35">
                Simple pricing with no complicated plans.
                Choose your package and contact us directly on WhatsApp.
              </p>

            </div>

          </motion.div>


          {/* PACKAGE GRID */}

          <div className="mt-10 grid gap-4 lg:grid-cols-2">

            {packages.map((item, index) => (
              <PackageCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}

          </div>


          {/* Note */}

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[10px] leading-5 text-white/30">

            <FiShield className="mt-0.5 shrink-0 text-blue-500" />

            <p>
              Day passes are for single entry only.
              Monthly memberships allow single entry per day.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="border-b border-white/10 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <span className="text-[9px] font-black tracking-[0.3em] text-blue-400">
                THE FACILITY
              </span>

              <h2 className="mt-5 text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-6xl">

                TRAIN.
                <br />

                <span className="text-white/25">
                  SWIM.
                </span>

                <br />

                RECOVER.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
                Everything you need for a complete fitness routine,
                all in one destination.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <Facility
                image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
                icon={<FiActivity />}
                title="GYM"
                text="Strength, cardio and conditioning."
              />

              <Facility
                image="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1200&q=85"
                icon={<FiDroplet />}
                title="POOL"
                text="Swimming and aquatic fitness."
              />

              <Facility
                image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
                icon={<FiWind />}
                title="STEAM"
                text="Recovery after training."
              />

              <div className="flex flex-col justify-between rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-6">

                <FiHeart className="text-blue-500" size={22} />

                <div>

                  <h3 className="text-xl font-black">
                    BUILT FOR
                    <br />
                    PROGRESS.
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-white/30">
                    A focused environment for people who want to
                    become stronger and healthier.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHECKPOINT
      ===================================================== */}

      <section className="bg-[#050912] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-5 md:grid-cols-3">

            <WhyCard
              icon={<FiZap />}
              title="PREMIUM EQUIPMENT"
              text="Train with quality equipment across strength and cardio areas."
            />

            <WhyCard
              icon={<FiDroplet />}
              title="MULTIPLE FACILITIES"
              text="Gym, swimming pool and recovery facilities in one place."
            />

            <WhyCard
              icon={<FiUsers />}
              title="FOCUSED ENVIRONMENT"
              text="A clean, energetic environment built around training."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-white/10 py-28 text-center">

        <div className="mx-auto max-w-3xl px-6">

          <span className="text-[9px] font-black tracking-[0.3em] text-blue-400">
            READY TO JOIN?
          </span>

          <h2 className="mt-5 text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-7xl">

            PICK YOUR
            <br />

            <span className="text-blue-500">
              PACKAGE.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/35">
            Choose your membership above or contact us directly
            through WhatsApp.
          </p>

          <a
            href={whatsappLink(
              "Hi, I’m interested in joining The Checkpoint gym. Please send me the membership packages and pricing."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-[9px] font-black transition hover:bg-blue-500"
          >
            CONTACT ON WHATSAPP

            <FiArrowUpRight size={14} />

          </a>

          <p className="mt-4 text-[9px] font-bold tracking-[0.2em] text-white/20">
            +880 1844-240483
          </p>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   PACKAGE CARD
========================================================= */

function PackageCard({ item, index }) {

  const Icon = item.icon;

  const message = item.monthlyPrice
    ? `Hi, I’m interested in the ${item.title} Monthly Membership (৳${item.monthlyPrice}). I’d like to know more about joining The Checkpoint.`
    : `Hi, I’m interested in the ${item.title} session (৳${item.dayPrice}). I’d like to know more about booking.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -5 }}
      className={`relative rounded-[1.5rem] border p-6 sm:p-7 ${
        item.featured
          ? "border-blue-500/40 bg-blue-500/[0.07]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >

      {item.featured && (
        <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-[7px] font-black tracking-[0.2em]">
          BEST VALUE
        </div>
      )}


      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
          <Icon size={20} />
        </div>

        <span className="text-[8px] font-black tracking-[0.2em] text-white/20">
          0{index + 1}
        </span>

      </div>


      <p className="mt-7 text-[8px] font-black tracking-[0.3em] text-blue-400">
        {item.subtitle}
      </p>

      <h3 className="mt-2 text-2xl font-black tracking-[-0.03em]">
        {item.title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-white/30">
        {item.description}
      </p>


      {/* PRICE */}

      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">

          <p className="text-[7px] font-black tracking-[0.2em] text-white/25">
            DAY PASS
          </p>

          <p className="mt-2 text-2xl font-black">
            ৳{item.dayPrice}
          </p>

        </div>


        <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-4">

          <p className="text-[7px] font-black tracking-[0.2em] text-blue-400">
            MONTHLY
          </p>

          {item.monthlyPrice ? (
            <p className="mt-2 text-2xl font-black">
              ৳{item.monthlyPrice}
            </p>
          ) : (
            <p className="mt-2 text-2xl font-black text-white/20">
              —
            </p>
          )}

        </div>

      </div>


      {/* FEATURES */}

      <div className="mt-6 grid gap-2">

        {item.features.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-2 text-[10px] text-white/40"
          >

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <FiCheck size={9} />
            </span>

            {feature}

          </div>

        ))}

      </div>


      {/* WHATSAPP */}

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-[9px] font-black transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.25)]"
      >

        GET THIS PACKAGE

        <FiArrowUpRight
          size={13}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </a>

    </motion.div>
  );
}


/* =========================================================
   INFO STAT
========================================================= */

function InfoStat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3 border-r border-white/10 px-5 py-5 last:border-0 sm:px-7">

      <div className="text-blue-500">
        {icon}
      </div>

      <div>

        <p className="text-sm font-black">
          {value}
        </p>

        <p className="text-[7px] font-bold tracking-[0.2em] text-white/25">
          {label}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   FACILITY
========================================================= */

function Facility({ image, icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/10"
    >

      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6">

        <div className="flex items-center gap-2 text-blue-400">

          {icon}

          <span className="text-[8px] font-black tracking-[0.25em]">
            FACILITY
          </span>

        </div>

        <h3 className="mt-3 text-2xl font-black">
          {title}
        </h3>

        <p className="mt-1 text-xs text-white/40">
          {text}
        </p>

      </div>

    </motion.div>
  );
}


/* =========================================================
   WHY CARD
========================================================= */

function WhyCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
    >

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
        {icon}
      </div>

      <h3 className="mt-7 text-sm font-black">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-white/30">
        {text}
      </p>

    </motion.div>
  );
}

