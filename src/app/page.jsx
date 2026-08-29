
import Features from "@/components/home/Features";
import Gaming from "@/components/home/Gaming";

import Hero from "@/components/home/Hero";
import Resturant from "@/components/home/Resturant";
import Gym from "@/components/home/Gym";



export default function Home() {
  return (
    <>


      <main>
        <Hero />
        <Features />
        <Gaming />

        <Resturant/>

        <Gym />


      </main>

    </>
  );
}