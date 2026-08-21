"use client";

import {
  LuLanguages,
  LuBookOpen,
  LuGraduationCap,
  LuFileCheck,
  LuBriefcaseBusiness,
  LuCompass,
  LuArrowUpRight,
} from "react-icons/lu";

const services = [
  {
    number: "01",
    icon: LuLanguages,
    title: "Japanese Language Coaching",
    description:
      "Build practical Japanese skills through structured lessons, speaking practice, and personalized guidance.",
  },
  {
    number: "02",
    icon: LuBookOpen,
    title: "JLPT Preparation",
    description:
      "Prepare for N5 to N1 with focused grammar, vocabulary, listening, reading, mock tests, and exam strategies.",
  },
  {
    number: "03",
    icon: LuGraduationCap,
    title: "Japan Study Guidance",
    description:
      "Get guidance on schools, universities, scholarships, applications, and planning your study journey in Japan.",
  },
  {
    number: "04",
    icon: LuFileCheck,
    title: "Visa Processing Support",
    description:
      "Get step-by-step support with documentation, application preparation, and the Japan visa process.",
  },
  {
    number: "05",
    icon: LuBriefcaseBusiness,
    title: "Career Preparation",
    description:
      "Develop workplace Japanese, interview skills, professional communication, and career readiness.",
  },
  {
    number: "06",
    icon: LuCompass,
    title: "Japan Career Guidance",
    description:
      "Discover suitable career paths in Japan and understand the skills and qualifications needed to move forward.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            What We Offer
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Everything You Need for Your
            <span className="block text-red-600">
              Japan Journey
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            From learning Japanese to studying and building your career in
            Japan, we provide guidance at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-sm font-semibold text-gray-200 transition-colors duration-300 group-hover:text-red-100">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* Learn More */}
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-red-600">
                  Learn More
                  <LuArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <button className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600">
            Explore All Services
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}