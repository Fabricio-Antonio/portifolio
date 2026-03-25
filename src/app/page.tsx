import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { AvailabilityBanner } from "@/components/AvailabilityBanner";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { LeadMagnet } from "@/components/LeadMagnet";

export default function Home() {
  return (
    <>
      <Hero />
      <AvailabilityBanner />
      <Services />
      <Results />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <LeadMagnet />
      <Contact />
    </>
  );
}
