"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

// Leaflet must only load in the browser
const LocationMap = dynamic(() => import("../LocationMap"), {
  ssr: false,
});

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Gaming", href: "#gaming" },
  { name: "Restaurant", href: "#restaurant" },
  { name: "Fitness", href: "#fitness" },
  { name: "Packages", href: "#packages" },
];

const services = [
  { name: "Gaming Lounge", href: "#gaming" },
  { name: "Restaurant & Cafe", href: "#restaurant" },
  { name: "Gym", href: "#packages" },
  { name: "Swimming Pool", href: "#packages" },
  { name: "Steam Bath", href: "#packages" },
  { name: "Membership", href: "#packages" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.08] bg-[#050A14] text-white"
    >
      {/* ================= TOP CTA ================= */}
      <section className="border-b border-white/[0.08]">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-start
            justify-between
            gap-8
            px-6
            py-16
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:py-20
          "
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              The Checkpoint · Bashundhara
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              READY TO
              <span className="text-blue-500"> CHECK IN?</span>
            </h2>
          </div>

          <a
            href="tel:+8801844240483"
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              rounded-xl
              bg-blue-600
              px-6
              py-4
              text-sm
              font-bold
              transition
              duration-300
              hover:bg-blue-500
            "
          >
            Contact Us

            <FiArrowUpRight
              size={18}
              className="
                transition
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.6fr]">
          {/* ================= BRAND ================= */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="The Checkpoint home"
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-600
                "
              >
                <span className="text-xl font-black italic">C</span>
              </div>

              <div>
                <h3 className="text-lg font-black tracking-[0.08em]">
                  THE CHECKPOINT
                </h3>

                <p className="mt-1 text-[8px] tracking-[0.3em] text-slate-500">
                  GAMING · DINING · FITNESS
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              The Checkpoint is a premium gaming, dining and fitness
              destination in Bashundhara R/A, Dhaka.
            </p>

            {/* ================= SOCIALS ================= */}
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                href="https://www.instagram.com/checkpoint_bd"
                label="The Checkpoint on Instagram"
              >
                <FiInstagram size={17} />
              </SocialIcon>

              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61591601052508"
                label="The Checkpoint on Facebook"
              >
                <FiFacebook size={17} />
              </SocialIcon>

              <SocialIcon
                href="#"
                label="The Checkpoint on YouTube"
              >
                <FiYoutube size={17} />
              </SocialIcon>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav aria-label="Main navigation">
            <h4 className="text-sm font-bold">NAVIGATION</h4>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-white
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= SERVICES ================= */}
          <nav aria-label="The Checkpoint services">
            <h4 className="text-sm font-bold">EXPERIENCES</h4>

            <ul className="mt-6 space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-white
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= FIND US ================= */}
          <div>
            <h4 className="text-sm font-bold">FIND US</h4>

            {/* ================= MAP ================= */}
            <a
              href="https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open The Checkpoint location in Google Maps"
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl transition duration-300 group-hover:ring-2 group-hover:ring-blue-500/40">
                <LocationMap />
              </div>
            </a>

            {/* ================= ADDRESS ================= */}
            <address className="mt-5 not-italic">
              <a
                href="https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to The Checkpoint"
                className="group block"
              >
                <ContactItem
                  icon={<FiMapPin size={17} />}
                  text="Bashundhara R/A, Block C, Road 2, House 1/F, Dhaka, Bangladesh 1229"
                />
              </a>
            </address>

            {/* ================= PHONE ================= */}
            <div className="mt-4">
              <a
                href="tel:+8801844240483"
                className="block transition hover:text-white"
              >
                <ContactItem
                  icon={<FiPhone size={17} />}
                  text="+880 1844-240483"
                />
              </a>
            </div>

            {/* ================= GOOGLE MAPS ================= */}
            <a
              href="https://maps.app.goo.gl/NV7X1epSC8Ry3wXC6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-blue-500
                transition
                hover:text-blue-400
              "
            >
              Get directions

              <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/[0.08]">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-6
            py-6
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} The Checkpoint. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="
                text-xs
                text-slate-600
                transition
                hover:text-slate-400
              "
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="
                text-xs
                text-slate-600
                transition
                hover:text-slate-400
              "
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= SOCIAL ICON ================= */

function SocialIcon({ href, children, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http") ? "noopener noreferrer" : undefined
      }
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        border
        border-white/10
        bg-white/[0.03]
        text-slate-400
        transition
        duration-300
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:text-blue-400
      "
    >
      {children}
    </a>
  );
}

/* ================= CONTACT ITEM ================= */

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-500/10
          text-blue-500
        "
      >
        {icon}
      </div>

      <span className="pt-1 text-sm leading-6 text-slate-500">
        {text}
      </span>
    </div>
  );
}