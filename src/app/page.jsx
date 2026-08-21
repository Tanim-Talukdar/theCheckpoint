import Courses from "@/components/home/Courses";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import JLPTRoadmap from "@/components/home/JLPTRoadmap";
import SuccessStories from "@/components/home/SuccessStories";



export default function Home() {
  return (
    <>


      <main>
        <Hero />

        <Courses />

        <JLPTRoadmap />

        <SuccessStories />

        <CTA/>
      </main>

    </>
  );
}