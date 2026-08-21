"use client";

import { useEffect, useState } from "react";

const stories = [
  {
    name: "Student Success",
    result: "Ready for Japan",
    text: "The structured classes and regular speaking practice helped me become much more confident in Japanese.",
    image: "/students/images4.webp",
    level: "JLPT Preparation",
  },
  {
    name: "Student Journey",
    result: "Improved Japanese",
    text: "The teachers explained everything clearly and made Japanese much easier to understand.",
    image: "/students/images5.webp",
    level: "Japanese Coaching",
  },
  {
    name: "Student Experience",
    result: "Built Confidence",
    text: "The practical conversation sessions helped me prepare for real communication in Japan.",
    image: "/students/images6.webp",
    level: "Speaking Practice",
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const story = stories[current];

  return (
    <section className="relative bg-white py-24 sm:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-[#BC002D]/7 blur-[80px]" />

            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-[#006A4E]/7 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/60 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.10)] backdrop-blur-xl">

              <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-gray-100">

                <img
                  key={story.image}
                  src={story.image}
                  alt={story.name}
                  className="h-full w-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {story.level}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {story.result}
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#006A4E] shadow-sm">
              Success Stories
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-gray-800 sm:text-5xl">
              Real learning.
              <span className="block text-[#BC002D]">
                Real progress.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              Our students prepare for their next step with structured
              learning, practical speaking and continuous guidance.
            </p>

            {/* Quote */}
            <div className="mt-8 rounded-[2rem] border border-gray-100 bg-gray-50/70 p-6">

              <div className="text-4xl leading-none text-[#BC002D]">
                “
              </div>

              <p className="mt-3 text-base leading-7 text-gray-600">
                {story.text}
              </p>

              <p className="mt-5 text-sm font-bold text-gray-800">
                {story.name}
              </p>

            </div>

            {/* Controls */}
            <div className="mt-7 flex items-center gap-3">

              {stories.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Story ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-9 bg-[#BC002D]"
                      : "w-2 bg-gray-300"
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}