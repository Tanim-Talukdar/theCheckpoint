"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

/* =========================================================
   SUCCESS STORIES
========================================================= */

const stories = [
  {
    name: "Student Success Story",
    level: "JLPT Preparation",
    result: "Successfully prepared for Japan",
    text:
      "Structured Japanese lessons, regular practice and personal guidance helped build confidence for the next step toward Japan.",
    image: "/students/images7.webp",
  },
  {
    name: "Student Journey",
    level: "Japanese Language",
    result: "Built confidence in Japanese",
    text:
      "Consistent classes and practical conversation training helped improve everyday Japanese communication.",
    image: "/students/images8.webp",
  },
  {
    name: "Student Achievement",
    level: "Japan Preparation",
    result: "Ready for the next step",
    text:
      "With structured preparation and continuous support, the student became more confident about their Japan journey.",
    image: "/students/images9.webp",
  },
];


/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    image: "/students/images1.webp",
    title: "Japanese Language Learning",
    category: "Learning",
  },
  {
    image: "/students/images4.webp",
    title: "Student Progress",
    category: "Success",
  },
  {
    image: "/students/images2.webp",
    title: "Japan Preparation",
    category: "Preparation",
  },
  {
    image: "/students/images5.webp",
    title: "Learning Together",
    category: "Classroom",
  },
  {
    image: "/students/images3.webp",
    title: "Japanese Practice",
    category: "Learning",
  },
  {
    image: "/students/images6.webp",
    title: "Student Achievement",
    category: "Success",
  },
];


/* =========================================================
   TESTIMONIALS
   Add as many students as you want.
   
   image is OPTIONAL:
   image: "/students/rahim.webp" -> shows photo
   image: ""                     -> shows icon
   no image property             -> shows icon
========================================================= */

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "JLPT N4 Student",
    image: "/students/rahim.webp",
    text:
      "The classes helped me understand Japanese from the basics and build confidence step by step.",
  },

  {
    name: "Karim Hasan",
    role: "Japan Aspirant",
    image: "",
    text:
      "The guidance helped me understand what I needed to prepare for my future plans in Japan.",
  },

  {
    name: "Student Name",
    role: "JLPT N5 Student",
    text:
      "The teachers explain everything clearly and the regular practice really helped my Japanese.",
  },

  {
    name: "Student Name",
    role: "JLPT N3 Student",
    image: "/students/student-4.webp",
    text:
      "The mock tests and regular lessons helped me prepare much better for the JLPT.",
  },

  {
    name: "Student Name",
    role: "Japanese Language Student",
    text:
      "I became much more comfortable with speaking Japanese after practicing regularly.",
  },

  {
    name: "Student Name",
    role: "JLPT N5 Student",
    image: "",
    text:
      "My Japanese learning journey became much easier with structured lessons and support.",
  },

  {
    name: "Student Name",
    role: "Japan Aspirant",
    text:
      "The team helped me understand the steps I needed to take toward Japan.",
  },

  {
    name: "Student Name",
    role: "JLPT N4 Student",
    image: "/students/student-5.webp",
    text:
      "The lessons are easy to follow and the regular speaking practice made a big difference.",
  },
];


/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


/* =========================================================
   PAGE
========================================================= */

export default function SuccessStoriesPage() {

  const [selectedImage, setSelectedImage] = useState(null);

  const [currentStory, setCurrentStory] = useState(0);

  /*
    Stores the exact testimonial card that was clicked.

    null = scrolling
    number = that card/row is paused
  */
  const [pausedCard, setPausedCard] = useState(null);


  const nextStory = () => {
    setCurrentStory((prev) =>
      prev === stories.length - 1 ? 0 : prev + 1
    );
  };


  const previousStory = () => {
    setCurrentStory((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };


  /*
    Clicking a testimonial:
    
    First click  -> pause
    Second click -> resume
  */

  const handleTestimonialClick = (id) => {

    if (pausedCard === id) {
      setPausedCard(null);
    } else {
      setPausedCard(id);
    }

  };


  return (

    <main className="
      min-h-screen
      overflow-hidden
      bg-[#fafafa]
      text-gray-900
    ">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="
        relative
        overflow-hidden
        px-5
        pb-14
        pt-32
        sm:px-8
        sm:pt-36
        lg:pb-20
      ">


        {/* Red glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-[#BC002D]/10
            blur-[110px]
          "
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* Green glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-32
            top-20
            h-72
            w-72
            rounded-full
            bg-[#006A4E]/10
            blur-[110px]
          "
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <motion.div
          className="relative mx-auto max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >


          {/* Bangladesh → Japan */}

          <div className="
            mb-6
            flex
            items-center
            gap-3
          ">

            <span className="
              flex
              h-8
              w-11
              items-center
              justify-center
              rounded-md
              bg-[#006A4E]
              text-lg
            ">
              🇧🇩
            </span>


            <span className="
              font-bold
              text-gray-300
            ">
              →
            </span>


            <span className="
              flex
              h-8
              w-11
              items-center
              justify-center
              rounded-md
              bg-white
              text-lg
              shadow-sm
              ring-1
              ring-gray-100
            ">
              🇯🇵
            </span>


            <span className="
              ml-1
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-gray-400
            ">
              Success Stories
            </span>

          </div>


          {/* Heading */}

          <h1 className="
            max-w-4xl
            text-4xl
            font-black
            leading-[1.05]
            tracking-[-0.045em]
            sm:text-5xl
            lg:text-6xl
          ">

            Real journeys.

            <span className="
              ml-2
              bg-gradient-to-r
              from-[#BC002D]
              via-gray-600
              to-[#006A4E]
              bg-clip-text
              text-transparent
            ">
              Real progress.
            </span>

          </h1>


          <p className="
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-gray-500
            sm:text-base
          ">
            Explore the journeys, achievements and experiences of
            students working toward their Japanese language and Japan
            goals.
          </p>

        </motion.div>

      </section>



      {/* =====================================================
          FEATURED SUCCESS STORY
      ===================================================== */}

      <section className="
        px-5
        pb-14
        sm:px-8
        lg:pb-20
      ">

        <div className="mx-auto max-w-7xl">


          <div className="mb-6">

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#BC002D]
            ">
              Featured Story
            </p>


            <h2 className="
              mt-2
              text-2xl
              font-black
              tracking-tight
              sm:text-3xl
            ">
              Student journeys that inspire
            </h2>

          </div>


          <div className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-gray-200/70
            bg-white
            shadow-[0_15px_50px_rgba(0,0,0,0.05)]
          ">


            <AnimatePresence mode="wait">

              <motion.div
                key={currentStory}
                className="grid lg:grid-cols-2"

                initial={{
                  opacity: 0,
                  x: 40,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                exit={{
                  opacity: 0,
                  x: -40,
                }}

                transition={{
                  duration: 0.45,
                }}
              >


                {/* Image */}

                <div className="
                  relative
                  h-[300px]
                  overflow-hidden
                  sm:h-[380px]
                  lg:h-[430px]
                ">

                  <motion.img
                    src={stories[currentStory].image}
                    alt={stories[currentStory].name}
                    className="
                      h-full
                      w-full
                      object-cover
                    "

                    initial={{
                      scale: 1.08,
                    }}

                    animate={{
                      scale: 1,
                    }}

                    transition={{
                      duration: 0.8,
                    }}
                  />


                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    to-transparent
                  " />


                  <div className="
                    absolute
                    bottom-5
                    left-5
                    rounded-xl
                    bg-white/90
                    px-4
                    py-3
                    backdrop-blur
                  ">

                    <p className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-400
                    ">
                      {stories[currentStory].level}
                    </p>


                    <p className="
                      mt-1
                      text-sm
                      font-black
                    ">
                      {stories[currentStory].result}
                    </p>

                  </div>

                </div>



                {/* Content */}

                <div className="
                  flex
                  flex-col
                  justify-center
                  p-7
                  sm:p-10
                ">

                  <div className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#006A4E]/10
                    text-[#006A4E]
                  ">
                    <FaUserGraduate />
                  </div>


                  <p className="
                    mt-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                  ">
                    {stories[currentStory].name}
                  </p>


                  <h3 className="
                    mt-2
                    text-2xl
                    font-black
                    tracking-tight
                  ">
                    {stories[currentStory].result}
                  </h3>


                  <p className="
                    mt-4
                    max-w-lg
                    text-sm
                    leading-6
                    text-gray-500
                  ">
                    {stories[currentStory].text}
                  </p>


                  <div className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  ">

                    <Tag text="Japanese Learning" />

                    <Tag text="Personal Guidance" />

                    <Tag text="Japan Goal" />

                  </div>


                  {/* Controls */}

                  <div className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  ">


                    <div className="flex gap-2">

                      {stories.map((_, index) => (

                        <button
                          key={index}
                          onClick={() => setCurrentStory(index)}
                          aria-label={`Story ${index + 1}`}

                          className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-300

                            ${
                              currentStory === index
                                ? "w-8 bg-[#BC002D]"
                                : "w-2 bg-gray-200"
                            }
                          `}
                        />

                      ))}

                    </div>


                    <div className="flex gap-2">

                      <StoryButton
                        onClick={previousStory}
                        icon={<FaChevronLeft />}
                      />

                      <StoryButton
                        onClick={nextStory}
                        icon={<FaChevronRight />}
                      />

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </section>



      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="
        bg-white
        px-5
        py-14
        sm:px-8
        lg:py-20
      ">

        <div className="mx-auto max-w-7xl">


          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the journey"
            text="A glimpse into learning, preparation and the experiences behind every journey."
          />


          <motion.div
            className="
              mt-8
              grid
              grid-cols-2
              gap-3
              md:grid-cols-3
            "

            variants={stagger}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
              amount: 0.1,
            }}
          >

            {gallery.map((item, index) => (

              <motion.button
                key={`${item.image}-${index}`}
                variants={fadeUp}

                onClick={() => setSelectedImage(item)}

                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  text-left

                  ${
                    index === 0 || index === 3
                      ? "h-[260px] sm:h-[340px]"
                      : "h-[200px] sm:h-[260px]"
                  }
                `}

                whileHover={{
                  y: -5,
                }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />


                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                " />


                <div className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  translate-y-3
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-y-0
                  group-hover:opacity-100
                ">

                  <p className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-white/60
                  ">
                    {item.category}
                  </p>


                  <p className="
                    mt-1
                    text-sm
                    font-bold
                    text-white
                  ">
                    {item.title}
                  </p>

                </div>

              </motion.button>

            ))}

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          WHAT STUDENTS SAY
      ===================================================== */}

      <section className="
        overflow-hidden
        px-5
        py-14
        sm:px-8
        lg:py-20
      ">

        <div className="mx-auto max-w-7xl">


          <SectionHeading
            eyebrow="Student Voices"
            title="What students say"
            text="Real experiences from learners working toward their goals."
          />


          {/* Small instruction */}

          <div className="
            mt-4
            flex
            items-center
            gap-2
            text-[10px]
            font-medium
            text-gray-400
          ">

            <span className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-gray-100
            ">
              ●
            </span>

            Click a review to pause and read

          </div>


          <div className="
            relative
            mt-6
            overflow-hidden
          ">


            {/* LEFT FADE */}

            <div className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-[#fafafa]
              to-transparent
              sm:w-24
            " />


            {/* RIGHT FADE */}

            <div className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-[#fafafa]
              to-transparent
              sm:w-24
            " />



            {/* =================================================
                ROW 1
            ================================================= */}

            <motion.div
              className="
                flex
                w-max
                gap-4
              "

              animate={{
                x: pausedCard?.startsWith("row1")
                  ? undefined
                  : ["0%", "-50%"],
              }}

              transition={{
                duration: Math.max(
                  testimonials.length * 6,
                  40
                ),
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...testimonials, ...testimonials].map(
                (item, index) => {

                  const id = `row1-${index}`;

                  return (

                    <TestimonialCard
                      key={id}
                      id={id}
                      item={item}
                      isPaused={pausedCard === id}
                      onClick={() =>
                        handleTestimonialClick(id)
                      }
                    />

                  );
                }
              )}

            </motion.div>



            {/* =================================================
                ROW 2
            ================================================= */}

            <motion.div
              className="
                mt-4
                flex
                w-max
                gap-4
              "

              animate={{
                x: pausedCard?.startsWith("row2")
                  ? undefined
                  : ["-50%", "0%"],
              }}

              transition={{
                duration: Math.max(
                  testimonials.length * 6.5,
                  43
                ),
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...testimonials, ...testimonials].map(
                (item, index) => {

                  const id = `row2-${index}`;

                  return (

                    <TestimonialCard
                      key={id}
                      id={id}
                      item={item}
                      isPaused={pausedCard === id}
                      onClick={() =>
                        handleTestimonialClick(id)
                      }
                    />

                  );
                }
              )}

            </motion.div>

          </div>

        </div>

      </section>



      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="
        px-5
        pb-16
        pt-5
        sm:px-8
        lg:pb-20
      ">

        <motion.div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[2.5rem]
            bg-gray-950
            px-6
            py-11
            text-center
            sm:px-10
            sm:py-14
          "

          initial={{
            opacity: 0,
            scale: 0.97,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}
        >

          <div className="
            pointer-events-none
            absolute
            -left-20
            -top-20
            h-52
            w-52
            rounded-full
            bg-[#BC002D]/20
            blur-[90px]
          " />


          <div className="
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            h-52
            w-52
            rounded-full
            bg-[#006A4E]/20
            blur-[90px]
          " />


          <div className="relative">

            <div className="
              flex
              items-center
              justify-center
              gap-3
            ">

              <span className="text-xl">
                🇧🇩
              </span>

              <span className="text-white/30">
                →
              </span>

              <span className="text-xl">
                🇯🇵
              </span>

            </div>


            <h2 className="
              mt-4
              text-2xl
              font-black
              tracking-tight
              text-white
              sm:text-3xl
            ">
              Your story could be next.
            </h2>


            <p className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-6
              text-white/45
            ">
              Start your Japanese learning and Japan journey
              with the right guidance.
            </p>


            <motion.a
              href="/contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-gray-900
              "

              whileHover={{
                y: -4,
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.97,
              }}
            >

              Start Your Journey

              <FaArrowRight className="text-xs" />

            </motion.a>

          </div>

        </motion.div>

      </section>



      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              p-5
              backdrop-blur-sm
            "

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={() => setSelectedImage(null)}
          >

            <motion.div
              className="
                relative
                max-h-[90vh]
                max-w-5xl
                overflow-hidden
                rounded-2xl
                bg-white
              "

              initial={{
                scale: 0.9,
                y: 20,
              }}

              animate={{
                scale: 1,
                y: 0,
              }}

              exit={{
                scale: 0.9,
                y: 20,
              }}

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="
                  max-h-[80vh]
                  w-auto
                  object-contain
                "
              />


              <div className="p-4">

                <p className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-gray-400
                ">
                  {selectedImage.category}
                </p>


                <p className="
                  mt-1
                  text-sm
                  font-black
                ">
                  {selectedImage.title}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}


/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  id,
  item,
  isPaused,
  onClick,
}) {

  return (

    <motion.button
      type="button"
      onClick={onClick}
      className={`
        group
        w-[290px]
        shrink-0
        cursor-pointer
        rounded-[1.5rem]
        border
        bg-white
        p-5
        text-left
        shadow-[0_6px_25px_rgba(0,0,0,0.025)]
        transition-all
        duration-300
        sm:w-[340px]

        ${
          isPaused
            ? "border-[#006A4E]/30 shadow-[0_10px_35px_rgba(0,106,78,0.10)]"
            : "border-gray-200/70"
        }
      `}

      whileHover={{
        y: -5,
      }}

      transition={{
        duration: 0.3,
      }}
    >

      {/* Pause indicator */}

      {isPaused && (

        <div className="
          absolute
          hidden
        " />

      )}


      {/* Quote */}

      <div className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        bg-[#BC002D]/8
        text-[#BC002D]
      ">

        <FaQuoteLeft className="text-sm" />

      </div>


      {/* Stars */}

      <div className="
        mt-4
        flex
        gap-1
        text-[#F5B400]
      ">

        {[1, 2, 3, 4, 5].map((star) => (

          <FaStar
            key={star}
            className="text-[10px]"
          />

        ))}

      </div>


      {/* Review */}

      <p className="
        mt-4
        min-h-[90px]
        text-sm
        leading-6
        text-gray-500
      ">
        "{item.text}"
      </p>


      {/* Student */}

      <div className="
        mt-5
        flex
        items-center
        gap-3
        border-t
        border-gray-100
        pt-4
      ">


        {/* OPTIONAL STUDENT IMAGE */}

        <div className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-[#006A4E]/10
          text-[#006A4E]
        ">

          {item.image ? (

            <img
              src={item.image}
              alt={item.name}
              className="
                h-full
                w-full
                object-cover
              "
            />

          ) : (

            <FaUserGraduate className="text-sm" />

          )}

        </div>


        {/* Student information */}

        <div className="min-w-0">

          <p className="
            truncate
            text-sm
            font-black
            text-gray-900
          ">
            {item.name}
          </p>


          <p className="
            mt-0.5
            truncate
            text-[9px]
            font-bold
            uppercase
            tracking-wider
            text-gray-400
          ">
            {item.role}
          </p>

        </div>


        {/* Paused label */}

        {isPaused && (

          <span className="
            ml-auto
            shrink-0
            rounded-full
            bg-[#006A4E]/10
            px-2
            py-1
            text-[8px]
            font-bold
            uppercase
            tracking-wider
            text-[#006A4E]
          ">
            Paused
          </span>

        )}

      </div>

    </motion.button>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
}) {

  return (

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >

      <p className="
        text-xs
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#BC002D]
      ">
        {eyebrow}
      </p>


      <h2 className="
        mt-2
        text-2xl
        font-black
        tracking-tight
        sm:text-3xl
      ">
        {title}
      </h2>


      <p className="
        mt-2
        max-w-xl
        text-sm
        leading-6
        text-gray-500
      ">
        {text}
      </p>

    </motion.div>
  );
}


/* =========================================================
   TAG
========================================================= */

function Tag({ text }) {

  return (

    <span className="
      rounded-full
      bg-gray-100
      px-3
      py-1.5
      text-[9px]
      font-bold
      text-gray-500
    ">
      {text}
    </span>

  );
}


/* =========================================================
   STORY BUTTON
========================================================= */

function StoryButton({
  onClick,
  icon,
}) {

  return (

    <motion.button
      onClick={onClick}
      aria-label="Change story"

      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        text-gray-500
      "

      whileHover={{
        y: -2,
      }}

      whileTap={{
        scale: 0.9,
      }}
    >
      {icon}
    </motion.button>

  );
}