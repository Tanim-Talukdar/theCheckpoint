"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiSearch,
  FiMonitor,
  FiCpu,
  FiHeadphones,
  FiCrosshair,
  FiRadio,
  FiZap,
  FiClock,
  FiUsers,
  FiCheckCircle,
  FiXCircle,
  FiChevronDown,
  FiMessageCircle,
  FiShoppingCart,
} from "react-icons/fi";

/* =========================================================
   WHATSAPP
========================================================= */

// IMPORTANT:
// Put your WhatsApp number here.
// Bangladesh example: 8801XXXXXXXXX
// Do NOT use +, spaces or -
const WHATSAPP_NUMBER = "8801XXXXXXXXX";

/* =========================================================
   PRICING DATA
========================================================= */

const pricing = [
  {
    name: "PS5 & PS5 PRO",
    icon: FiMonitor,
    description: "Premium console gaming experience.",
    players: ["1 Player", "2 Players", "3 Players", "4 Players"],
    thirty: [200, 300, 400, 500],
    hour: [300, 400, 500, 600],
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1800&q=90",
    accent: "CONSOLE",
  },

  {
    name: "NINTENDO SWITCH 2",
    icon: FiRadio,
    description: "Party gaming and multiplayer fun.",
    players: ["1 Player", "2 Players", "3 Players", "4 Players"],
    thirty: [200, 250, 300, 350],
    hour: [300, 350, 400, 450],
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1800&q=90",
    accent: "CONSOLE",
  },

  {
    name: "GAMING PC",
    icon: FiCpu,
    description: "Competitive PC gaming setups.",
    players: ["1 Player", "2 Players"],
    thirty: [200, 250],
    hour: [300, 350],
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1800&q=90",
    accent: "PC",
  },

  {
    name: "RACING SIMULATOR",
    icon: FiCrosshair,
    description: "Feel every corner. Chase every lap.",
    players: ["Solo"],
    thirty: [300],
    hour: [500],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1800&q=90",
    accent: "SIMULATION",
  },

  {
    name: "VR",
    icon: FiHeadphones,
    description: "Step inside another world.",
    players: ["Solo"],
    thirty: [150],
    hour: [250],
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1800&q=90",
    accent: "IMMERSIVE",
  },

  {
    name: "POOL TABLE",
    icon: FiRadio,
    description: "Classic competition with your squad.",
    players: ["Players"],
    thirty: [200],
    hour: [300],
    image:
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=1800&q=90",
    accent: "SPORT",
  },

  {
    name: "TABLE TENNIS",
    icon: FiZap,
    description: "Fast rallies. Faster reactions.",
    players: ["2 Players", "4 Players"],
    thirty: [100, 150],
    hour: [200, 250],
    image:
      "https://images.unsplash.com/photo-1554224311-beee415c15a3?auto=format&fit=crop&w=1800&q=90",
    accent: "SPORT",
  },

  {
    name: "BOARD GAMES",
    icon: FiUsers,
    description: "Board games, carrom and foosball.",
    players: ["Players"],
    thirty: [150],
    hour: [250],
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1800&q=90",
    accent: "SOCIAL",
  },
];

/* =========================================================
   GAME DATA
========================================================= */

const games = [
  // PS5
  { name: "A Way Out", platform: "PS5", available: true },
  {
    name: "Assassin's Creed IV: Black Flag Resynced",
    platform: "PS5",
    available: true,
  },
  {
    name: "Assassin's Creed Shadows",
    platform: "PS5",
    available: true,
  },
  { name: "Astro Bot", platform: "PS5", available: false },
  {
    name: "Avatar: Frontiers of Pandora",
    platform: "PS5",
    available: true,
  },
  { name: "Black Myth: Wukong", platform: "PS5", available: true },
  { name: "Borderlands 4", platform: "PS5", available: true },
  {
    name: "Call of Duty: Black Ops II Remake",
    platform: "PS5",
    available: true,
  },
  { name: "Call of Duty: Black Ops 4", platform: "PS5", available: true },
  { name: "Cricket 26", platform: "PS5", available: true },
  { name: "Cyphead", platform: "PS5", available: true },
  { name: "Cyberpunk 2077", platform: "PS5", available: true },
  { name: "Demon Slayer", platform: "PS5", available: true },
  { name: "Devil May Cry 5", platform: "PS5", available: true },
  { name: "Doom Eternal", platform: "PS5", available: true },
  { name: "Doom (2016)", platform: "PS5", available: true },
  { name: "EA FC 26", platform: "PS5", available: true },
  { name: "Fall Guys", platform: "PS5", available: true },
  { name: "Far Cry 6", platform: "PS5", available: true },
  { name: "Fortnite", platform: "PS5", available: true },
  { name: "Ghost of Tsushima", platform: "PS5", available: false },
  { name: "God of War Ragnarok", platform: "PS5", available: true },
  { name: "God of War (2018)", platform: "PS5", available: true },
  { name: "Gran Turismo 7", platform: "PS5", available: true },
  { name: "Grand Theft Auto V", platform: "PS5", available: true },
  { name: "Grand Theft Auto VI", platform: "PS5", available: false },
  {
    name: "Horizon Zero Dawn Remaster",
    platform: "PS5",
    available: true,
  },
  {
    name: "The House of the Dead: Remake",
    platform: "PS5",
    available: true,
  },
  { name: "Injustice 2", platform: "PS5", available: true },
  { name: "Invincible VS", platform: "PS5", available: true },
  { name: "Jump Force", platform: "PS5", available: true },
  { name: "The Last of Us Part II", platform: "PS5", available: true },
  { name: "The Last of Us Part I", platform: "PS5", available: true },
  { name: "Mafia: The Old Country", platform: "PS5", available: true },
  { name: "Mafia III Remaster", platform: "PS5", available: true },
  { name: "Mafia II Remaster", platform: "PS5", available: true },
  { name: "Mafia Remaster", platform: "PS5", available: true },
  {
    name: "Marvel's Spider-Man: Miles Morales",
    platform: "PS5",
    available: true,
  },
  {
    name: "Marvel's Spider-Man",
    platform: "PS5",
    available: true,
  },
  { name: "Metro Exodus", platform: "PS5", available: true },
  { name: "Metro Redux", platform: "PS5", available: true },
  { name: "Metro: Last Light", platform: "PS5", available: true },
  { name: "Mortal Kombat 1", platform: "PS5", available: true },
  { name: "Mortal Kombat 11", platform: "PS5", available: true },
  {
    name: "Naruto x Boruto: Ultimate Ninja Storm Connections",
    platform: "PS5",
    available: true,
  },
  { name: "NBA 2K26", platform: "PS5", available: true },
  { name: "Need for Speed Heat", platform: "PS5", available: true },
  { name: "Ninja Gaiden 3", platform: "PS5", available: true },
  { name: "Ninja Gaiden", platform: "PS5", available: true },
  { name: "Outlast 2", platform: "PS5", available: true },
  { name: "Outlast", platform: "PS5", available: true },
  { name: "Persona 5", platform: "PS5", available: true },
  { name: "The Quarry", platform: "PS5", available: true },
  { name: "Ratchet & Clank", platform: "PS5", available: true },
  { name: "Red Dead Redemption 2", platform: "PS5", available: true },
  { name: "Resident Evil Requiem", platform: "PS5", available: true },
  { name: "Resident Evil Village", platform: "PS5", available: true },
  { name: "Resident Evil 3", platform: "PS5", available: true },
  {
    name: "Resident Evil 7: Biohazard",
    platform: "PS5",
    available: true,
  },
  { name: "Rocket League", platform: "PS5", available: true },
  { name: "Split Fiction", platform: "PS5", available: true },
  { name: "Stray", platform: "PS5", available: true },
  { name: "Subnautica", platform: "PS5", available: true },
  { name: "Superhot", platform: "PS5", available: true },
  { name: "Superliminal", platform: "PS5", available: true },
  { name: "Tekken 8", platform: "PS5", available: true },
  {
    name: "Uncharted: The Nathan Drake Collection",
    platform: "PS5",
    available: true,
  },
  { name: "Watch Dogs: Legion", platform: "PS5", available: true },
  {
    name: "The Witcher 3: Wild Hunt",
    platform: "PS5",
    available: true,
  },
  {
    name: "Wolfenstein II: The New Colossus",
    platform: "PS5",
    available: true,
  },
  { name: "WWE 2K26", platform: "PS5", available: true },
  {
    name: "Yakuza: Like a Dragon - Infinite Wealth",
    platform: "PS5",
    available: true,
  },
  { name: "Yakuza: Like a Dragon", platform: "PS5", available: true },
  {
    name: "Yakuza 6: The Song of Life",
    platform: "PS5",
    available: true,
  },
  { name: "Yakuza 0", platform: "PS5", available: true },

  // SWITCH
  {
    name: "The Legend of Zelda: Breath of the Wild",
    platform: "Switch 2",
    available: true,
  },
  { name: "Mario Kart World", platform: "Switch 2", available: true },
  { name: "Green Hell", platform: "Switch 2", available: true },
  { name: "Brotato", platform: "Switch 2", available: true },
  {
    name: "Hotline Miami Collection",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "Prince of Persia: The Lost Crown",
    platform: "Switch 2",
    available: true,
  },
  { name: "LIMBO", platform: "Switch 2", available: true },
  { name: "INSIDE", platform: "Switch 2", available: true },
  { name: "WHAT THE GOLF?", platform: "Switch 2", available: true },
  {
    name: "This War of Mine: Complete Edition",
    platform: "Switch 2",
    available: true,
  },
  { name: "Terraria", platform: "Switch 2", available: true },
  {
    name: "The Sker Hero Slayer",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "Mario Kart 8 Deluxe",
    platform: "Switch 2",
    available: true,
  },
  { name: "FIFA 23", platform: "Switch 2", available: true },
  {
    name: "The House of the Dead: Remake",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "Scribblenauts Mega Pack",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "Mortal Kombat 11 Ultimate",
    platform: "Switch 2",
    available: true,
  },
  { name: "51 Worldwide Games", platform: "Switch 2", available: true },
  {
    name: "Super Smash Bros. Ultimate",
    platform: "Switch 2",
    available: true,
  },
  { name: "Brawlhalla", platform: "Switch 2", available: true },
  {
    name: "Immortals Fenyx Rising",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "Assassin's Creed: The Rebel Collection",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "BioShock Remastered",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "BioShock 2 Remastered",
    platform: "Switch 2",
    available: true,
  },
  {
    name: "BioShock Infinite: The Complete Edition",
    platform: "Switch 2",
    available: true,
  },

  // PC
  { name: "Resident Evil 2", platform: "PC", available: true },
  { name: "Borderlands 2", platform: "PC", available: true },
  { name: "Dispatch", platform: "PC", available: true },
  {
    name: "Shadow of the Tomb Raider",
    platform: "PC",
    available: true,
  },
  { name: "Life Is Strange", platform: "PC", available: true },
  {
    name: "The Elder Scrolls V: Skyrim",
    platform: "PC",
    available: true,
  },
  { name: "No Man's Sky", platform: "PC", available: true },
  { name: "The Forest", platform: "PC", available: true },
  { name: "Stfu", platform: "PC", available: true },
  {
    name: "Sleeping Dogs: Definitive Edition",
    platform: "PC",
    available: true,
  },
  { name: "Elden Ring", platform: "PC", available: true },
  { name: "Geometry Dash", platform: "PC", available: true },
  { name: "BioShock Infinite", platform: "PC", available: true },
  { name: "Death Stranding", platform: "PC", available: true },
  { name: "Portal", platform: "PC", available: true },
  { name: "Portal 2", platform: "PC", available: true },
  { name: "Tomb Raider", platform: "PC", available: true },
  { name: "Valorant", platform: "PC", available: true },

  // BOARD
  {
    name: "Ludo",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Uno",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Chess",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Jenga",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Tic Tac Toe",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Monopoly",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Scrabble",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Darts",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Snake and Ladder",
    platform: "Board & Table",
    available: true,
  },
  {
    name: "Cards Against Humanity",
    platform: "Board & Table",
    available: true,
  },
];

/* =========================================================
   WHATSAPP BOOKING
========================================================= */

function openWhatsApp({
  packageName,
  players,
  duration,
  price,
}) {
  const message = `Hello The Checkpoint! 🎮

I want to book a gaming session.

🎮 Package: ${packageName}
👥 Players: ${players}
⏱️ Duration: ${duration}
💰 Price: ৳${price}

Please let me know the available time slots.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================================
   PAGE
========================================================= */

export default function GamingPage() {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPlatform =
        platform === "All" || game.platform === platform;

      const matchesAvailability =
        availability === "All" ||
        (availability === "Available" && game.available) ||
        (availability === "In Use" && !game.available);

      return (
        matchesSearch &&
        matchesPlatform &&
        matchesAvailability
      );
    });
  }, [search, platform, availability]);

  const visibleGames = showAll
    ? filteredGames
    : filteredGames.slice(0, 30);

  return (
    <main className="bg-[#030712] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden">

        <div className="absolute inset-0">

          <motion.img
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            src="/view7.webp"
            alt="Premium gaming setup"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/75 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/20" />

        </div>

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[-150px]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-10">

          <div className="max-w-4xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="mb-7 flex items-center gap-3"
            >

              <span className="h-px w-10 bg-blue-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-400">
                The Checkpoint / Gaming
              </span>

            </motion.div>

            <div className="overflow-hidden">

              <motion.h1
                initial={{
                  y: 120,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(5rem,14vw,13rem)]
                  font-black
                  leading-[0.75]
                  tracking-[-0.08em]
                "
              >
                PLAY
                <br />

                <span className="text-blue-500">
                  WITHOUT
                </span>

                <br />

                LIMITS.
              </motion.h1>

            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="
                mt-9
                max-w-xl
                text-sm
                leading-7
                text-white/55
                sm:text-base
              "
            >
              Premium gaming rooms, high-performance PCs,
              next-generation consoles and immersive experiences.
              Pick your setup. Pick your game. Own the moment.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >

              <Link
                href="#pricing"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-4
                  text-xs
                  font-black
                  tracking-wide
                  transition
                  hover:bg-blue-500
                  hover:shadow-[0_0_40px_rgba(37,99,235,.3)]
                "
              >
                VIEW PRICING

                <FiArrowUpRight
                  size={15}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </Link>

              <Link
                href="#games"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/15
                  bg-white/5
                  px-6
                  py-4
                  text-xs
                  font-bold
                  backdrop-blur-md
                  transition
                  hover:bg-white/10
                "
              >
                EXPLORE GAMES
              </Link>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="
                mt-14
                flex
                flex-wrap
                gap-8
                border-t
                border-white/10
                pt-6
              "
            >

              <HeroStat
                icon={FiMonitor}
                number="130+"
                label="GAMES"
              />

              <HeroStat
                icon={FiZap}
                number="8"
                label="EXPERIENCES"
              />

              <HeroStat
                icon={FiHeadphones}
                number="PREMIUM"
                label="SETUPS"
              />

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
    MENU / PRICING IMAGES
====================================================== */}

<section id="gamingmenu" className="relative overflow-hidden border-t border-white/10 bg-[#030712] py-28 sm:py-36">

  <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

    {/* HEADER */}

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
    >

      <div className="mb-5 flex items-center gap-3">

        <span className="h-px w-10 bg-blue-500" />

        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
          Pricing & Menu
        </span>

      </div>

      <h2
        className="
          text-5xl
          font-black
          leading-[0.85]
          tracking-[-0.06em]
          sm:text-7xl
          lg:text-8xl
        "
      >
        CHECK THE
        <br />

        <span className="text-white/25">
          MENU.
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-7 text-white/35">
        Check our latest pricing, food and drinks menu before
        your visit.
      </p>

    </motion.div>


    {/* MENU IMAGES */}

    <div className="mt-14 grid gap-6 lg:grid-cols-2">

      {/* IMAGE 1 */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#080E19]
        "
      >

        <div className="relative aspect-[3/4] overflow-hidden">

          <img
            src="/gaming/princing.jpeg"
            alt="Gaming pricing menu"
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          {/* LABEL */}

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Gaming
            </p>

            <h3 className="mt-2 text-3xl font-black tracking-[-0.04em]">
              PRICING MENU
            </h3>

            <p className="mt-2 text-xs text-white/40">
              Gaming packages, player rates and session pricing.
            </p>

          </div>

        </div>

      </motion.div>


      {/* IMAGE 2 */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          delay: 0.1,
          duration: 0.7,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#080E19]
        "
      >

        <div className="relative aspect-[3/4] overflow-hidden">

          <img
            src="/gaming/gamingmenu.jpeg"
            alt="Food and drinks menu"
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          {/* LABEL */}

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Gaming
            </p>

            <h3 className="mt-2 text-3xl font-black tracking-[-0.04em]">
              List of your Fantasy
            </h3>

            <p className="mt-2 text-xs text-white/40">
              Grab something to eat or drink while you play.
            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

      {/* =====================================================
          PRICING
      ====================================================== */}

      <section
        id="pricing"
        className="relative scroll-mt-20 overflow-hidden py-28 sm:py-36"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-blue-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  Choose Your Setup
                </span>

              </div>

              <h2
                className="
                  text-5xl
                  font-black
                  leading-[0.85]
                  tracking-[-0.06em]
                  sm:text-7xl
                  lg:text-8xl
                "
              >
                PLAY YOUR
                <br />

                <span className="text-white/25">
                  WAY.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Select a package, choose your player count
              and book directly through WhatsApp.
            </p>

          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {pricing.map((item, index) => (
              <PricingCard
                key={item.name}
                item={item}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          GAME LIBRARY
      ====================================================== */}

      <section
        id="games"
        className="
          relative
          scroll-mt-20
          overflow-hidden
          border-t
          border-white/10
          bg-[#050A14]
          py-28
          sm:py-36
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/[0.06]
            blur-[150px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-blue-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  Game Library
                </span>

              </div>

              <h2
                className="
                  text-5xl
                  font-black
                  leading-[0.85]
                  tracking-[-0.06em]
                  sm:text-7xl
                  lg:text-8xl
                "
              >
                FIND YOUR
                <br />

                <span className="text-blue-500">
                  GAME.
                </span>
              </h2>

            </div>

            <div className="flex items-center gap-3 text-sm text-slate-500">

              <span className="text-blue-400">
                {games.length}
              </span>

              games in our library

            </div>

          </motion.div>

          {/* SEARCH */}

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
            transition={{
              delay: 0.15,
            }}
            className="mt-14"
          >

            <div className="flex flex-col gap-3 lg:flex-row">

              <div className="relative flex-1">

                <FiSearch
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-white/30
                  "
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search a game..."
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    pl-13
                    pr-5
                    text-sm
                    text-white
                    outline-none
                    transition
                    placeholder:text-white/25
                    focus:border-blue-500/50
                    focus:bg-white/[0.05]
                  "
                />

              </div>

              <div className="relative">

                <select
                  value={platform}
                  onChange={(e) =>
                    setPlatform(e.target.value)
                  }
                  className="
                    h-14
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0a101c]
                    px-5
                    pr-12
                    text-sm
                    text-white
                    outline-none
                    lg:w-48
                  "
                >

                  <option value="All">
                    All Platforms
                  </option>

                  <option value="PS5">
                    PS5
                  </option>

                  <option value="Switch 2">
                    Nintendo Switch 2
                  </option>

                  <option value="PC">
                    PC
                  </option>

                  <option value="Board & Table">
                    Board & Table
                  </option>

                </select>

                <FiChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-white/40
                  "
                />

              </div>

              <div className="relative">

                <select
                  value={availability}
                  onChange={(e) =>
                    setAvailability(e.target.value)
                  }
                  className="
                    h-14
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0a101c]
                    px-5
                    pr-12
                    text-sm
                    text-white
                    outline-none
                    lg:w-48
                  "
                >

                  <option value="All">
                    All Status
                  </option>

                  <option value="Available">
                    Available
                  </option>

                  <option value="In Use">
                    Currently In Use
                  </option>

                </select>

                <FiChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-white/40
                  "
                />

              </div>

            </div>

          </motion.div>

          {/* RESULTS */}

          <div
            className="
              mt-10
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#080E19]
            "
          >

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                border-b
                border-white/10
                px-5
                py-4
                sm:px-7
              "
            >

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                {filteredGames.length} RESULTS
              </span>

              <div className="flex items-center gap-5">

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-bold
                    tracking-wide
                    text-white/40
                  "
                >

                  <span className="h-2 w-2 rounded-full bg-blue-500" />

                  AVAILABLE

                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-bold
                    tracking-wide
                    text-white/40
                  "
                >

                  <span className="h-2 w-2 rounded-full bg-white/20" />

                  IN USE

                </span>

              </div>

            </div>

            <AnimatePresence mode="popLayout">

              {visibleGames.length > 0 ? (

                <motion.div
                  layout
                  className="grid sm:grid-cols-2 lg:grid-cols-3"
                >

                  {visibleGames.map((game, index) => (

                    <GameItem
                      key={`${game.platform}-${game.name}`}
                      game={game}
                      index={index}
                    />

                  ))}

                </motion.div>

              ) : (

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="
                    flex
                    min-h-[300px]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                  "
                >

                  <FiSearch
                    size={30}
                    className="mb-5 text-white/20"
                  />

                  <h3 className="text-xl font-black">
                    GAME NOT FOUND
                  </h3>

                  <p className="mt-2 text-sm text-white/30">
                    Try another title or platform.
                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {filteredGames.length > 30 && (

            <div className="mt-8 flex justify-center">

              <button
                onClick={() =>
                  setShowAll(!showAll)
                }
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-4
                  text-xs
                  font-bold
                  tracking-wide
                  transition
                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.05]
                "
              >

                {showAll
                  ? "SHOW LESS"
                  : "SHOW ALL GAMES"}

                <FiChevronDown
                  size={15}
                  className={`
                    transition-transform
                    ${showAll ? "rotate-180" : ""}
                  `}
                />

              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section
        id="booking"
        className="relative scroll-mt-20 overflow-hidden py-32"
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#050A14]
            to-[#030712]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600
            blur-[150px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            px-6
            text-center
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-blue-400
              "
            >
              READY PLAYER?
            </p>

            <h2
              className="
                mt-5
                text-5xl
                font-black
                leading-[0.85]
                tracking-[-0.06em]
                sm:text-7xl
              "
            >
              YOUR NEXT
              <br />

              <span className="text-blue-500">
                SESSION STARTS HERE.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-lg
                text-sm
                leading-7
                text-white/40
              "
            >
              Choose your gaming setup above and
              book directly through WhatsApp.
            </p>

            <Link
              href="#pricing"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-600
                px-7
                py-4
                text-xs
                font-black
                tracking-wide
                transition
                hover:bg-blue-500
                hover:shadow-[0_0_50px_rgba(37,99,235,.3)]
              "
            >

              CHOOSE A PACKAGE

              <FiArrowUpRight
                size={16}
                className="
                  transition
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({
  icon: Icon,
  number,
  label,
}) {
  return (
    <div className="flex items-center gap-3">

      <Icon
        size={16}
        className="text-blue-500"
      />

      <div>

        <p className="text-sm font-black">
          {number}
        </p>

        <p
          className="
            text-[8px]
            font-bold
            tracking-[0.2em]
            text-white/30
          "
        >
          {label}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   PRICING CARD
========================================================= */

function PricingCard({
  item,
  index,
}) {
  const Icon = item.icon;

  const [selectedPlayer, setSelectedPlayer] =
    useState(0);

  const [selectedDuration, setSelectedDuration] =
    useState("hour");

  const price =
    selectedDuration === "hour"
      ? item.hour[selectedPlayer]
      : item.thirty[selectedPlayer];

  const duration =
    selectedDuration === "hour"
      ? "1 Hour"
      : "30 Minutes";

  const handleWhatsApp = () => {
    openWhatsApp({
      packageName: item.name,
      players: item.players[selectedPlayer],
      duration,
      price,
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.07,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-white/10
        bg-[#080E19]
      "
    >

      {/* IMAGE */}

      <div className="relative h-48 overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="
            h-full
            w-full
            object-cover
            opacity-60
            grayscale-[30%]
            transition
            duration-700
            group-hover:scale-110
            group-hover:opacity-80
            group-hover:grayscale-0
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080E19]
            to-transparent
          "
        />

        <div
          className="
            absolute
            left-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/15
            bg-black/30
            text-blue-400
            backdrop-blur-md
          "
        >
          <Icon size={18} />
        </div>

        <span
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-white/10
            bg-black/30
            px-3
            py-1.5
            text-[8px]
            font-bold
            tracking-[0.2em]
            text-white/50
            backdrop-blur-md
          "
        >
          {item.accent}
        </span>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <h3
          className="
            text-xl
            font-black
            tracking-[-0.03em]
          "
        >
          {item.name}
          <span className="text-blue-500">
            .
          </span>
        </h3>

        <p
          className="
            mt-2
            min-h-[40px]
            text-xs
            leading-5
            text-white/35
          "
        >
          {item.description}
        </p>

        {/* DURATION */}

        <div className="mt-6">

          <p
            className="
              mb-2
              text-[8px]
              font-bold
              tracking-[0.2em]
              text-white/25
            "
          >
            SELECT DURATION
          </p>

          <div className="grid grid-cols-2 gap-2">

            <button
              onClick={() =>
                setSelectedDuration("thirty")
              }
              className={`
                rounded-lg
                border
                px-3
                py-3
                text-left
                transition
                ${
                  selectedDuration === "thirty"
                    ? "border-blue-500/50 bg-blue-500/10"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                }
              `}
            >

              <p className="text-[8px] font-bold text-white/35">
                30 MIN
              </p>

              <p
                className={`
                  mt-1
                  text-sm
                  font-black
                  ${
                    selectedDuration === "thirty"
                      ? "text-blue-400"
                      : "text-white"
                  }
                `}
              >
                ৳{item.thirty[selectedPlayer]}
              </p>

            </button>

            <button
              onClick={() =>
                setSelectedDuration("hour")
              }
              className={`
                rounded-lg
                border
                px-3
                py-3
                text-left
                transition
                ${
                  selectedDuration === "hour"
                    ? "border-blue-500/50 bg-blue-500/10"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                }
              `}
            >

              <p className="text-[8px] font-bold text-white/35">
                1 HOUR
              </p>

              <p
                className={`
                  mt-1
                  text-sm
                  font-black
                  ${
                    selectedDuration === "hour"
                      ? "text-blue-400"
                      : "text-white"
                  }
                `}
              >
                ৳{item.hour[selectedPlayer]}
              </p>

            </button>

          </div>

        </div>

        {/* PLAYER */}

        {item.players.length > 1 && (

          <div className="mt-5">

            <p
              className="
                mb-2
                text-[8px]
                font-bold
                tracking-[0.2em]
                text-white/25
              "
            >
              SELECT PLAYERS
            </p>

            <div className="grid grid-cols-2 gap-1.5">

              {item.players.map(
                (player, i) => (

                  <button
                    key={player}
                    onClick={() =>
                      setSelectedPlayer(i)
                    }
                    className={`
                      rounded-lg
                      border
                      px-2
                      py-2
                      text-center
                      transition
                      ${
                        selectedPlayer === i
                          ? "border-blue-500/40 bg-blue-500/10"
                          : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                      }
                    `}
                  >

                    <p
                      className={`
                        text-[8px]
                        ${
                          selectedPlayer === i
                            ? "text-blue-400"
                            : "text-white/30"
                        }
                      `}
                    >
                      {player}
                    </p>

                    <p
                      className={`
                        mt-0.5
                        text-xs
                        font-black
                        ${
                          selectedPlayer === i
                            ? "text-white"
                            : "text-white/70"
                        }
                      `}
                    >
                      ৳
                      {selectedDuration ===
                      "hour"
                        ? item.hour[i]
                        : item.thirty[i]}
                    </p>

                  </button>

                )
              )}

            </div>

          </div>

        )}

        {/* SELECTED SUMMARY */}

        <div
          className="
            mt-5
            rounded-xl
            border
            border-blue-500/20
            bg-blue-500/[0.04]
            p-4
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/30">
                SELECTED
              </p>

              <p className="mt-1 text-xs font-bold text-white/80">
                {item.players[selectedPlayer]}
              </p>

              <p className="mt-0.5 text-[9px] text-white/30">
                {duration}
              </p>

            </div>

            <div className="text-right">

              <p className="text-[8px] uppercase tracking-[0.15em] text-white/30">
                TOTAL
              </p>

              <p className="text-xl font-black text-blue-400">
                ৳{price}
              </p>

            </div>

          </div>

        </div>

        {/* WHATSAPP BUTTON */}

        <button
          onClick={handleWhatsApp}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-4
            py-4
            text-xs
            font-black
            tracking-wide
            transition
            hover:bg-blue-500
            hover:shadow-[0_0_35px_rgba(37,99,235,.25)]
            active:scale-[0.98]
          "
        >

          <FiMessageCircle size={16} />

          BOOK VIA WHATSAPP

          <FiArrowUpRight size={14} />

        </button>

      </div>

    </motion.div>
  );
}

/* =========================================================
   GAME ITEM
========================================================= */

function GameItem({
  game,
  index,
}) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        delay: Math.min(
          index * 0.015,
          0.25
        ),
      }}
      className="
        group
        border-b
        border-white/5
        p-5
        transition
        hover:bg-blue-500/[0.04]
        sm:p-6
      "
    >

      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">

          <p
            className="
              text-sm
              font-bold
              leading-5
              text-white/80
              transition
              group-hover:text-white
            "
          >
            {game.name}
          </p>

          <p
            className="
              mt-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/25
            "
          >
            {game.platform}
          </p>

        </div>

        <div
          title={
            game.available
              ? "Currently available"
              : "Currently in use"
          }
          className={`
            mt-1
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            ${
              game.available
                ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                : "border-white/10 bg-white/[0.03] text-white/20"
            }
          `}
        >

          {game.available ? (
            <FiCheckCircle size={13} />
          ) : (
            <FiXCircle size={13} />
          )}

        </div>

      </div>

    </motion.div>
  );
}