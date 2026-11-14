import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { About } from "@/components/About";
import { AWSCertifications } from "@/components/AWSCertifications";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Contact } from "@/components/Contact";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll initialVisible>
        <Hero />
      </RevealOnScroll>

      {/* Stack Principal — Carrossel de ponta a ponta da página */}
      <Skills />

      {/* Como posso ajudar */}
      <RevealOnScroll>
        <Services />
      </RevealOnScroll>

      {/* Cases de projetos */}
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>

      {/* Histórico e entregas */}
      <RevealOnScroll>
        <Results />
      </RevealOnScroll>

      {/* Sobre mim */}
      <About />

      {/* AWS Certifications */}
      <RevealOnScroll>
        <AWSCertifications />
      </RevealOnScroll>

      {/* Experiência profissional */}
      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>

      {/* Quer uma opinião técnica */}
      <RevealOnScroll>
        <LeadMagnet />
      </RevealOnScroll>

      {/* Entre em contato */}
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </>
  );
}
