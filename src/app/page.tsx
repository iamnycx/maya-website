import About from "@/components/sections/about";
import Alone from "@/components/sections/alone";
import Background from "@/components/sections/background";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Office from "@/components/sections/office";
import Specialties from "@/components/sections/specialties";
import Who from "@/components/sections/who";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Alone />
      <Who />
      <Office />
      <FAQ />
      <Background />
      <CTA />
    </>
  );
}
