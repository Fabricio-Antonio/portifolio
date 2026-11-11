import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { About } from "@/components/About";
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

      {/* Os serviços que ofereço */}
      <RevealOnScroll>
        <Services />
      </RevealOnScroll>

      {/* Resultados */}
      <RevealOnScroll>
        <Results />
      </RevealOnScroll>

      {/* Sobre mim */}
      <RevealOnScroll>
        <About />
      </RevealOnScroll>

      {/* Cases de projetos */}
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>

      {/* Experiência profissional */}
      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>

      {/* Olhar técnico gratuito */}
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
