"use client";

const courses = [
  {
    level: "N5",
    title: "Japanese Beginner",
    description:
      "Build a strong foundation in Japanese with Hiragana, Katakana, basic grammar and everyday conversation.",
    topics: ["Hiragana & Katakana", "Basic Grammar", "Conversation"],
  },
  {
    level: "N4",
    title: "Japanese Elementary",
    description:
      "Improve your grammar, vocabulary and speaking ability for everyday Japanese communication.",
    topics: ["Grammar", "Vocabulary", "Speaking"],
  },
  {
    level: "N3",
    title: "Japanese Intermediate",
    description:
      "Develop practical Japanese skills for study, work and more confident communication.",
    topics: ["Reading", "Listening", "Conversation"],
  },
  {
    level: "N2",
    title: "Japanese Advanced",
    description:
      "Prepare for advanced Japanese communication and the JLPT N2 examination.",
    topics: ["Advanced Grammar", "Reading", "JLPT"],
  },
];

export default function Courses() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#006A4E] shadow-sm">
            Our Courses
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-gray-800 sm:text-5xl">
            Learn Japanese with a
            <span className="block bg-gradient-to-r from-[#BC002D] via-gray-700 to-[#006A4E] bg-clip-text text-transparent">
              clear learning path.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500">
            Structured Japanese language courses designed for students
            preparing for JLPT, education, work and life in Japan.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map((course, index) => (
            <div
              key={course.level}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]"
            >

              {/* Top glow */}
              <div
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl ${
                  index % 2 === 0
                    ? "bg-[#BC002D]/10"
                    : "bg-[#006A4E]/10"
                }`}
              />

              <div className="relative">

                {/* Level */}
                <div className="flex items-center justify-between">

                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black ${
                      index % 2 === 0
                        ? "bg-[#BC002D]/10 text-[#BC002D]"
                        : "bg-[#006A4E]/10 text-[#006A4E]"
                    }`}
                  >
                    {course.level}
                  </span>

                  <span className="text-xs font-semibold text-gray-300">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-800">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {course.description}
                </p>

                <div className="mt-6 space-y-2">

                  {course.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-xs font-medium text-gray-500"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#006A4E]" />
                      {topic}
                    </div>
                  ))}

                </div>

                <a
                  href="/courses"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gray-700 transition-all group-hover:gap-3 group-hover:text-[#BC002D]"
                >
                  View course
                  <span>→</span>
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}