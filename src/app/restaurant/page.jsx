
"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCoffee,
  FiMapPin,
  FiPhone,
  FiClock,
  FiChevronDown,
  FiCheck,
  FiUsers,
  FiStar,
  FiZap,
} from "react-icons/fi";


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "8801844240483";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}


/* =========================================================
   PAGE
========================================================= */

export default function RestaurantPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02050a] text-white">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[72vh] overflow-hidden">

        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2400&q=90"
          alt="The Checkpoint Restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02050a] via-[#02050a]/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02050a] to-transparent" />


        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />


        {/* Content */}

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-32 sm:px-8 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-4xl"
          >

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[9px] font-black uppercase tracking-[0.35em] text-blue-400">
                THE CHECKPOINT RESTAURANT
              </span>

            </div>


            <h1 className="text-6xl font-black leading-[0.82] tracking-[-0.08em] sm:text-8xl lg:text-[8.5rem]">

              EAT.
              <br />

              <span className="text-blue-500">
                RECHARGE.
              </span>

            </h1>


            <p className="mt-7 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
              Good food, cold drinks and a place to relax between
              games, workouts and everything in between.
            </p>


            <div className="mt-8 flex flex-wrap gap-3">

              {/* MENU BUTTON */}

              <a
                href="#menu"
                className="group flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-[10px] font-black transition hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.3)]"
              >

                VIEW MENU

                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">

                  <FiArrowUpRight
                    size={14}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </span>

              </a>


              {/* WHATSAPP */}

              <a
                href={whatsappLink(
                  "Hi, I’m interested in The Checkpoint Restaurant. I’d like to know more about the menu and reservations."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-[10px] font-black backdrop-blur-xl transition hover:bg-white/10"
              >
                CONTACT US
              </a>

            </div>

          </motion.div>

        </div>


        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-[8px] font-black tracking-[0.3em] text-white/25 lg:flex"
        >

          EXPLORE

          <FiChevronDown size={15} />

        </motion.div>

      </section>



      {/* =====================================================
          QUICK INFO
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#030711]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">

          <InfoStat
            icon={<FiCoffee />}
            value="FOOD"
            label="FRESHLY SERVED"
          />

          <InfoStat
            icon={<FiZap />}
            value="DRINKS"
            label="REFRESH & RECHARGE"
          />

          <InfoStat
            icon={<FiUsers />}
            value="GROUPS"
            label="FRIENDLY SPACE"
          />

          <InfoStat
            icon={<FiClock />}
            value="DAILY"
            label="OPEN FOR YOU"
          />

        </div>

      </section>



      {/* =====================================================
          MENU — MAIN FOCUS
      ===================================================== */}

      <section
        id="menu"
        className="scroll-mt-24 border-b border-white/10 bg-[#050912] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">


          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[9px] font-black tracking-[0.3em] text-blue-400">
                THE MENU
              </span>

            </div>


            <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

              <h2 className="text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-7xl">

                PICK YOUR
                <br />

                <span className="text-blue-500">
                  FUEL.
                </span>

              </h2>


              <p className="max-w-md text-xs leading-6 text-white/30">
                Whether you're here before the game, between matches
                or just hanging out with friends, we've got something
                for you.
              </p>

            </div>

          </motion.div>



          {/* Menu */}

          <div className="mt-10 grid gap-5 lg:grid-cols-2">


            <MenuCard
              number="01"
              title="FOOD"
              subtitle="GOOD FOOD. GOOD GAMES."
              image="/resturants/menufood.jpeg"
              message="Hi, I’m interested in the food menu at The Checkpoint Restaurant. I’d like to know more about the available items."
            />


            <MenuCard
              number="02"
              title="DRINKS"
              subtitle="REFRESH. RECHARGE. REPEAT."
              image="/resturants/menudrinks.jpeg"
              message="Hi, I’m interested in the drinks menu at The Checkpoint Restaurant. I’d like to know more about the available drinks."
            />

          </div>


          {/* Menu note */}

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">

            <FiCheck className="shrink-0 text-blue-500" />

            <p className="text-[10px] leading-5 text-white/30">
              Menu items and availability may vary. Contact us for
              current availability and group reservations.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          RESTAURANT EXPERIENCE
      ===================================================== */}

      <section className="relative overflow-hidden py-24 sm:py-32">

        <div className="pointer-events-none absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">


            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="text-[9px] font-black tracking-[0.3em] text-blue-400">
                MORE THAN FOOD
              </span>


              <h2 className="mt-5 text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-6xl">

                STAY.
                <br />

                <span className="text-white/25">
                  EAT.
                </span>

                <br />

                ENJOY.

              </h2>


              <p className="mt-7 max-w-sm text-sm leading-7 text-white/35">
                The restaurant is part of the complete Checkpoint
                experience. Grab a meal after training, get drinks
                with your squad or simply sit back and relax.
              </p>


              <a
                href={whatsappLink(
                  "Hi, I’d like to make a group reservation at The Checkpoint Restaurant."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[9px] font-black transition hover:border-blue-500/30 hover:bg-blue-600"
              >

                GROUP RESERVATION

                <FiArrowUpRight size={13} />

              </a>

            </motion.div>



            {/* Right */}

            <div className="grid gap-4 sm:grid-cols-2">

              <ExperienceCard
                icon={<FiCoffee />}
                title="FOOD & DRINKS"
                text="Grab something delicious before or after your activity."
              />

              <ExperienceCard
                icon={<FiUsers />}
                title="WITH YOUR SQUAD"
                text="A comfortable place to hang out with friends."
              />

              <ExperienceCard
                icon={<FiStar />}
                title="CASUAL VIBES"
                text="Relaxed atmosphere without the usual rush."
              />

              <ExperienceCard
                icon={<FiZap />}
                title="THE CHECKPOINT"
                text="Gaming, fitness, swimming and food in one destination."
              />

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          LOCATION / CONTACT
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#050912] py-20">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-4 md:grid-cols-3">


            <ContactCard
              icon={<FiMapPin />}
              title="LOCATION"
              text="THE CHECKPOINT"
            />


            <ContactCard
              icon={<FiClock />}
              title="OPENING"
              text="OPEN DAILY"
            />


            <ContactCard
              icon={<FiPhone />}
              title="CONTACT"
              text="+880 1844-240483"
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden py-28 text-center">

        <div className="absolute inset-0 bg-blue-600/[0.04]" />


        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-3xl px-6"
        >

          <p className="text-[9px] font-black tracking-[0.3em] text-blue-400">
            HUNGRY?
          </p>


          <h2 className="mt-5 text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-7xl">

            COME HUNGRY.
            <br />

            <span className="text-blue-500">
              LEAVE HAPPY.
            </span>

          </h2>


          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/30">
            Check the menu above or contact us directly for
            availability, reservations and group bookings.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-[9px] font-black text-black transition hover:bg-blue-500 hover:text-white"
            >

              VIEW MENU

              <FiArrowUpRight size={14} />

            </a>


            <a
              href={whatsappLink(
                "Hi, I’d like to contact The Checkpoint Restaurant. Please send me the current menu and information."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-[9px] font-black transition hover:bg-blue-500"
            >

              WHATSAPP US

              <FiArrowUpRight size={14} />

            </a>

          </div>


          <p className="mt-5 text-[9px] font-bold tracking-[0.2em] text-white/20">
            +880 1844-240483
          </p>

        </motion.div>

      </section>

    </main>
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
   MENU CARD
========================================================= */

function MenuCard({
  number,
  title,
  subtitle,
  image,
  message,
}) {

  return (
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
        amount: 0.15,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080e18]"
    >

      {/* Number */}

      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[8px] font-black tracking-[0.2em] backdrop-blur-xl">
        {number}
      </div>


      {/* Image */}

      <div className="relative overflow-hidden p-2">

        <div className="relative overflow-hidden rounded-[1.35rem]">

          <img
            src={image}
            alt={`${title} menu`}
            className="w-full object-contain transition duration-700 group-hover:scale-[1.025]"
          />


          {/* Hover overlay */}

          <div className="pointer-events-none absolute inset-0 bg-blue-600/0 transition duration-500 group-hover:bg-blue-600/[0.05]" />

        </div>

      </div>


      {/* Bottom */}

      <div className="flex items-center justify-between gap-5 px-6 pb-6 pt-3 sm:px-7 sm:pb-7">

        <div>

          <p className="text-[8px] font-black tracking-[0.3em] text-blue-400">
            {subtitle}
          </p>

          <h3 className="mt-2 text-3xl font-black tracking-[-0.04em]">
            {title}
            <span className="text-blue-500">.</span>
          </h3>

        </div>


        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask about ${title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-600"
        >

          <FiArrowUpRight
            size={17}
            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

        </a>

      </div>

    </motion.div>
  );
}



/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  icon,
  title,
  text,
}) {

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
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



/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon,
  title,
  text,
}) {

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
    >

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
        {icon}
      </div>


      <div>

        <p className="text-[8px] font-black tracking-[0.25em] text-blue-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-bold text-white/70">
          {text}
        </p>

      </div>

    </motion.div>
  );
}

