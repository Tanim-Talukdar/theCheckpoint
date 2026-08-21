"use client";

const levels = [
  {
    level: "N5",
    title: "Foundation",
    text: "Learn basic Japanese and everyday expressions.",
    color: "red",
  },
  {
    level: "N4",
    title: "Elementary",
    text: "Understand common conversations and simple texts.",
    color: "green",
  },
  {
    level: "N3",
    title: "Intermediate",
    text: "Handle everyday Japanese with greater confidence.",
    color: "red",
  },
  {
    level: "N2",
    title: "Advanced",
    text: "Understand complex Japanese used in study and work.",
    color: "green",
  },
  {
    level: "N1",
    title: "Expert",
    text: "Reach a high level of Japanese comprehension.",
    color: "red",
  },
];

export default function JLPTRoadmap() {
  return (
    <section className="relative overflow-hidden bg-gray-50/70 py-24 sm:py-28">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#BC002D]/5 blur-[100px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#006A4E]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <div className="max-w-2xl">

          <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BC002D]">
            JLPT Roadmap
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-gray-800 sm:text-5xl">
            Your journey from
            <span className="block text-[#006A4E]">
              N5 to N1.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
            Follow a structured path and progress step by step toward
            advanced Japanese proficiency.
          </p>

        </div>

        {/* Roadmap */}
        <div className="relative mt-16">

          {/* Desktop line */}
          <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-[#BC002D]/20 via-gray-300 to-[#006A4E]/20 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

            {levels.map((item, index) => (

              <div
                key={item.level}
                className="group relative"
              >

                <div className="relative flex flex-col items-center rounded-[2rem] border border-white bg-white/70 p-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">

                  <div
                    className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-8 border-white text-xl font-black shadow-md ${
                      item.color === "red"
                        ? "bg-[#BC002D]/10 text-[#BC002D]"
                        : "bg-[#006A4E]/10 text-[#006A4E]"
                    }`}
                  >
                    {item.level}
                  </div>

                  <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>

      </div>
    </section>
  );
}