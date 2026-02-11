import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { AvailabilityBanner } from "@/components/AvailabilityBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AvailabilityBanner />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
