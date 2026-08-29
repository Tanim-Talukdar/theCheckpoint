"use client";

import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiActivity,
  FiDroplet,
  FiWind,
  FiFilm,
  FiPhone,
} from "react-icons/fi";

/* =========================================================
   ONLINE IMAGES
========================================================= */

const images = {
  gym:
    "https://www.lacupulaandorra.com/assets/hero-fitness-T_z8XnPI.jpg",

  pool:
    "https://clubmetropolitan.com/wp-content/uploads/2022/05/CABECERA.jpg",

  steam:
    "https://ssaqua.in/images/luxury-steam-room-design.webp",

  cinema:
    "https://mkbbespokeaudio.com/cdn/shop/articles/Private_Cinema.png?v=1777037012&width=500",
};


/* =========================================================
   MEMBERSHIP DATA
========================================================= */

const packages = [
  {
    category: "FITNESS",
    title: "GYM ONLY",
    icon: FiActivity,
    image: images.gym,
    description:
      "Full access to our premium gym facilities and equipment.",
    options: [
      {
        name: "Day Pass",
        price: "500",
      },
      {
        name: "Monthly Membership",
        price: "4,000",
      },
    ],
  },

  {
    category: "AQUATIC",
    title: "SWIMMING POOL ONLY",
    icon: FiDroplet,
    image: images.pool,
    description:
      "Enjoy access to our swimming pool for fitness and recreation.",
    options: [
      {
        name: "Day Pass",
        price: "500",
      },
      {
        name: "Monthly Membership",
        price: "4,000",
      },
    ],
  },

  {
    category: "COMBO",
    title: "GYM + SWIMMING POOL",
    icon: FiActivity,
    image: images.gym,
    featured: true,
    description:
      "The complete fitness experience with gym and swimming pool access.",
    options: [
      {
        name: "Day Pass",
        price: "700",
      },
      {
        name: "Monthly Membership",
        price: "6,000",
      },
    ],
  },

  {
    category: "RELAX",
    title: "STEAM BATH",
    icon: FiWind,
    image: images.steam,
    description:
      "Relax and recover with a premium steam bath experience.",
    options: [
      {
        name: "15 min Session",
        price: "300",
      },
    ],
  },
];


const moviePackages = [
  {
    name: "1 Ticket",
    price: "250",
  },
  {
    name: "Private Viewing",
    description: "50 seats + movie of choice",
    price: "5,000",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function MembershipPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden">

        {/* Background Image */}

        <div className="absolute inset-0">

          <img
            src={images.gym}
            alt="Premium fitness facility"
            className="h-full w-full object-cover object-center"
          />

          {/* Cinematic overlays */}

          <div className="absolute inset-0 bg-[#030712]/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/75 to-[#030712]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40" />

        </div>


        {/* Blue glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.12] blur-[150px]" />


        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />


        {/* Hero Content */}

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-6 pb-24 pt-36 sm:px-8 lg:px-10">

          {/* Label */}

          <div className="mb-7 flex items-center gap-3">

            <span className="h-px w-10 bg-blue-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              The Checkpoint
            </span>

          </div>


          {/* Heading */}

          <h1
            className="
              max-w-6xl
              text-6xl
              font-black
              leading-[0.82]
              tracking-[-0.07em]
              sm:text-8xl
              lg:text-[9rem]
            "
          >
            MEMBERSHIP
            <br />

            <span className="text-blue-500">
              PACKAGES.
            </span>
          </h1>


          {/* Description */}

          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Train. Swim. Relax. Experience more at The Checkpoint.
              Choose the membership that fits your lifestyle and
              start your next level.
            </p>


            <div className="flex items-center gap-3 text-xs text-white/40">

              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />

              PREMIUM MEMBERSHIP

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MEMBERSHIP PACKAGES
      ===================================================== */}

      <section className="px-6 pb-28 pt-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-blue-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  Choose Your Access
                </span>

              </div>

              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                MEMBERSHIP
                <span className="text-blue-500"> PLANS.</span>
              </h2>

            </div>


            <p className="max-w-sm text-sm leading-6 text-white/30">
              Flexible access designed for training,
              recreation, recovery and entertainment.
            </p>

          </div>


          {/* Cards */}

          <div className="grid gap-5 md:grid-cols-2">

            {packages.map((item) => (
              <MembershipCard
                key={item.title}
                item={item}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MEMBERSHIP INFORMATION
      ===================================================== */}

      <section className="px-6 pb-28 sm:px-8 lg:px-10">

        <div
          className="
            mx-auto
            max-w-7xl
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.025]
          "
        >

          <div className="flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <FiCheck size={18} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  Membership Information
                </span>

              </div>


              <div className="space-y-3 text-sm text-white/45">

                <p>
                  * Day passes are for single entry only.
                </p>

                <p>
                  * Monthly passes are valid for one entry per day.
                </p>

              </div>

            </div>


            <Link
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-blue-600
                px-6
                py-4
                text-xs
                font-black
                tracking-wide
                transition
                duration-300
                hover:bg-blue-500
                hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
              "
            >
              CONTACT US

              <FiArrowUpRight
                size={16}
                className="
                  transition
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MOVIE THEATER
      ===================================================== */}

      <section className="px-6 pb-32 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-10">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                Entertainment
              </span>

            </div>

            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              MOVIE
              <span className="text-blue-500"> THEATER.</span>
            </h2>

          </div>


          {/* Cinema */}

          <div
            className="
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-[#080F1C]
            "
          >

            {/* Cinema Image */}

            <div className="relative h-[320px] overflow-hidden sm:h-[430px]">

              <img
                src={images.cinema}
                alt="Luxury private cinema"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />


              {/* Overlay */}

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080F1C] via-transparent to-black/10" />


              {/* Cinema info */}

              <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/20 text-blue-400 backdrop-blur-md">
                  <FiFilm size={22} />
                </div>

                <h3 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  MOVIE THEATER
                </h3>

                <p className="mt-2 text-xs text-white/45">
                  Private & regular viewing
                </p>

              </div>

            </div>


            {/* Movie Packages */}

            <div className="divide-y divide-white/10">

              {moviePackages.map((item) => (

                <div
                  key={item.name}
                  className="
                    group
                    flex
                    flex-col
                    gap-6
                    p-6
                    transition
                    duration-300
                    hover:bg-blue-500/[0.035]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:p-8
                  "
                >

                  <div>

                    <h4 className="text-base font-bold">
                      {item.name}
                    </h4>

                    {item.description && (
                      <p className="mt-2 text-xs text-white/30">
                        {item.description}
                      </p>
                    )}

                  </div>


                  <div className="flex items-center justify-between gap-8 sm:justify-end">

                    <div className="whitespace-nowrap">

                      <span className="text-2xl font-black">
                        {item.price}
                      </span>

                      <span className="ml-2 text-[10px] font-bold text-white/30">
                        BDT
                      </span>

                    </div>


                    <Link
                      href={`/contact?package=${encodeURIComponent(
                        `Movie Theater - ${item.name}`
                      )}`}
                      className="
                        flex
                        h-10
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/10
                        px-4
                        text-[10px]
                        font-bold
                        tracking-wide
                        text-white/60
                        transition
                        hover:border-blue-500/40
                        hover:bg-blue-500
                        hover:text-white
                      "
                    >
                      INQUIRE

                      <FiArrowUpRight size={13} />

                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 bg-[#050A14] px-6 py-28 sm:px-8 lg:px-10">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[120px]" />


        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Ready to level up?
          </p>


          <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">

            YOUR NEXT
            <br />

            <span className="text-blue-500">
              LEVEL STARTS HERE.
            </span>

          </h2>


          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/40">
            Want to become a member? Contact our team and
            we'll help you choose the right package.
          </p>


          <Link
            href="/contact"
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-white
              px-7
              py-4
              text-xs
              font-black
              text-black
              transition
              duration-300
              hover:bg-blue-500
              hover:text-white
              hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
            "
          >

            <FiPhone size={15} />

            CONTACT THE CHECKPOINT

            <FiArrowUpRight
              size={15}
              className="
                transition
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   MEMBERSHIP CARD
========================================================= */

function MembershipCard({ item }) {

  const Icon = item.icon;

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        ${
          item.featured
            ? "border-blue-500/40 bg-blue-500/[0.055]"
            : "border-white/10 bg-[#080F1C]"
        }
        transition
        duration-500
        hover:-translate-y-1.5
        hover:border-blue-500/30
      `}
    >

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className={`
          relative
          overflow-hidden
          ${
            item.featured
              ? "h-64 sm:h-72"
              : "h-52 sm:h-60"
          }
        `}
      >

        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />


        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080F1C] via-transparent to-black/10" />


        {/* Featured badge */}

        {item.featured && (
          <div
            className="
              absolute
              right-5
              top-5
              rounded-full
              bg-blue-500
              px-4
              py-2
              text-[8px]
              font-black
              tracking-[0.2em]
              text-white
              shadow-[0_0_30px_rgba(37,99,235,0.4)]
            "
          >
            BEST VALUE
          </div>
        )}


        {/* Category */}

        <div className="absolute bottom-5 left-6">

          <span
            className="
              rounded-full
              border
              border-white/15
              bg-black/30
              px-3
              py-1.5
              text-[8px]
              font-bold
              tracking-[0.2em]
              text-white/80
              backdrop-blur-md
            "
          >
            {item.category}
          </span>

        </div>

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative p-7 sm:p-9">

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-56
            w-56
            rounded-full
            bg-blue-500/[0.08]
            blur-[80px]
            transition
            duration-700
            group-hover:bg-blue-500/[0.15]
          "
        />


        {/* Icon */}

        <div
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-blue-500/20
            bg-blue-500/10
            text-blue-400
            transition
            duration-500
            group-hover:scale-110
            group-hover:bg-blue-500
            group-hover:text-white
          "
        >
          <Icon size={21} />
        </div>


        {/* Category */}

        <p className="relative mt-7 text-[9px] font-bold tracking-[0.3em] text-blue-400">
          {item.category}
        </p>


        {/* Title */}

        <h3 className="relative mt-2 max-w-md text-3xl font-black tracking-[-0.04em] sm:text-4xl">
          {item.title}
          <span className="text-blue-500">.</span>
        </h3>


        {/* Description */}

        <p className="relative mt-4 max-w-md text-sm leading-6 text-white/35">
          {item.description}
        </p>


        {/* Pricing */}

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">

          {item.options.map((option) => (

            <div
              key={option.name}
              className="
                flex
                flex-col
                gap-4
                border-b
                border-white/10
                p-5
                last:border-b-0
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>

                <p className="text-sm font-bold">
                  {option.name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wide text-white/25">
                  Single package
                </p>

              </div>


              <div className="flex items-center justify-between gap-5">

                <div className="whitespace-nowrap">

                  <span className="text-2xl font-black">
                    {option.price}
                  </span>

                  <span className="ml-1 text-[9px] font-bold text-white/30">
                    BDT
                  </span>

                </div>


                <Link
                  href={`/contact?package=${encodeURIComponent(
                    `${item.title} - ${option.name}`
                  )}`}
                  className="
                    flex
                    h-9
                    items-center
                    gap-2
                    rounded-lg
                    bg-white/[0.06]
                    px-3
                    text-[9px]
                    font-bold
                    tracking-wide
                    text-white/60
                    transition
                    duration-300
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  BUY

                  <FiArrowUpRight
                    size={12}
                    className="
                      transition
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </article>
  );
}