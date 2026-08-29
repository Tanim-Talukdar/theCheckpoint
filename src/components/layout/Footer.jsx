import Link from "next/link";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gaming", href: "#gaming" },
  { name: "Restaurant", href: "#restaurant" },
  { name: "Gym", href: "#gym" },
  { name: "Events", href: "#events" },
  { name: "About", href: "#about" },
];

const services = [
  { name: "Gaming Lounge", href: "#gaming" },
  { name: "Restaurant", href: "#restaurant" },
  { name: "Gym", href: "#gym" },
  { name: "Private Events", href: "#events" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050A14] text-white">

      {/* ================= TOP CTA ================= */}
      <section className="border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:py-20">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Your next experience starts here
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              READY TO
              <span className="text-blue-500"> CHECK IN?</span>
            </h2>
          </div>

          <Link
            href="#booking"
            className="
              group flex shrink-0 items-center gap-3
              rounded-xl bg-blue-600
              px-6 py-4
              text-sm font-bold
              transition duration-300
              hover:bg-blue-500
            "
          >
            BOOK YOUR EXPERIENCE

            <FiArrowUpRight
              size={18}
              className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

          {/* ================= BRAND ================= */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl font-black italic">
                  C
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black tracking-[0.08em]">
                  THE CHECKPOINT
                </h3>

                <p className="mt-1 text-[8px] tracking-[0.3em] text-slate-500">
                  GAMING · DINING · FITNESS
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              Bangladesh's premium destination for gaming, dining and
              fitness. Come to play, eat, train and make memories.
            </p>

            {/* SOCIALS */}
            <div className="mt-7 flex items-center gap-3">

              <SocialIcon
                href="#"
                label="Instagram"
              >
                <FiInstagram size={17} />
              </SocialIcon>

              <SocialIcon
                href="#"
                label="Facebook"
              >
                <FiFacebook size={17} />
              </SocialIcon>

              <SocialIcon
                href="#"
                label="YouTube"
              >
                <FiYoutube size={17} />
              </SocialIcon>

            </div>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div>
            <h4 className="text-sm font-bold">
              NAVIGATION
            </h4>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      text-sm text-slate-500
                      transition
                      hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h4 className="text-sm font-bold">
              EXPERIENCES
            </h4>

            <ul className="mt-6 space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      text-sm text-slate-500
                      transition
                      hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-sm font-bold">
              GET IN TOUCH
            </h4>

            <div className="mt-6 space-y-5">

              <ContactItem
                icon={<FiMapPin size={17} />}
                text="Dhaka, Bangladesh"
              />

              <ContactItem
                icon={<FiPhone size={17} />}
                text="+880 1XXX-XXXXXX"
              />

              <ContactItem
                icon={<FiMail size={17} />}
                text="hello@thecheckpoint.com"
              />

            </div>

            <Link
              href="#contact"
              className="
                mt-7 inline-flex items-center gap-2
                text-sm font-semibold text-blue-500
                transition hover:text-blue-400
              "
            >
              Contact us
              <FiArrowUpRight size={15} />
            </Link>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} The Checkpoint. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#privacy"
              className="text-xs text-slate-600 transition hover:text-slate-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="#terms"
              className="text-xs text-slate-600 transition hover:text-slate-400"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

/* ================= SOCIAL ICON ================= */

function SocialIcon({ href, children, label }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-lg
        border border-white/10
        bg-white/[0.03]
        text-slate-400
        transition duration-300
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:text-blue-400
      "
    >
      {children}
    </Link>
  );
}

/* ================= CONTACT ITEM ================= */

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
        {icon}
      </div>

      <span className="text-sm text-slate-500">
        {text}
      </span>

    </div>
  );
}