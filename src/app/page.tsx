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
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll initialVisible>
        <Hero />
      </RevealOnScroll>
      <RevealOnScroll>
        <AvailabilityBanner />
      </RevealOnScroll>
      <RevealOnScroll>
        <Services />
      </RevealOnScroll>
      <RevealOnScroll>
        <Results />
      </RevealOnScroll>
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>
      <RevealOnScroll>
        <LeadMagnet />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </>
  );
}
