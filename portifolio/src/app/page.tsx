"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import List from "./components/list";
import SliderMyProjcts from "./components/slidermyprojects";
import SliderClients from "./components/sliderprojectclient";

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <div className="lg:flex lg:justify-center">
          <div>
            <h1
              className="text-backgroundwhite font-semibold text-2xl mt-12 text-center lg:text-5xl lg:font-bold lg:mt-24"
            >Eu sou Fabrício Santos <br className="lg:hidden" /> 🖖😁<br />
              <TypeAnimation
                sequence={[
                  'Dev. Front-End',
                  1000,
                  'Dev. React ⚛️',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style
                ={{ fontSize: '1em', display: 'inline-block' }}
              />
            </h1>
            <div className="w-full p-10 ">
              <div className="bg-backgroundwhite rounded-xl w-full justify-center">
                <code>
                  <p className="px-3 py-5">
                    • 🧑‍🎓 Estou no 4º perído de Análise e Desenvolvimento de Sistemas. <br />
                    <br />
                    • 👨‍💻 Já tive contato com: Python, JavaScript, TypeScript, e Java. <br />
                    <br />
                    • 🧠 Atualmente focado em TypeScript e ReactJS. <br />
                    <br />
                    • 💼 Atualmente atuando como freelancer.
                  </p>
                </code>
              </div>
            </div>
            <div className="flex justify-center gap-10 text-2xl mb-10">
              <Link href="https://github.com/Fabricio-Antonio" target="_blank" rel="noopener noreferrer"><SiGithub /></Link>
              <Link href="https://www.linkedin.com/in/fabricio-ss/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></Link>
              <Link href="https://www.instagram.com/fabricio.ss.dev/" target="_blank" rel="noopener noreferrer"><SiInstagram /></Link>
              <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank" rel="noopener noreferrer"><SiWhatsapp /></Link>
            </div>
          </div>
          <div className="w-full flex justify-center lg:w-[300px] lg:h-[200px] lg:justify-center lg:mt-44">
            <Image src='/eu.jpeg' width={200} height={200} alt="Fabrício Santos"
              className="rounded-full border-4 border-backgroundwhite"
            />
          </div>
        </div>
      </section>
      <section className="bg-backgroundwhite mt-10 mb-5">
        <div className="lg:flex">
          <div className="hidden lg:flex justify-center w-full">
            <Image src="/code.png" width={580} height={250} alt="code" />
          </div>
          <div>
            <div className="pt-10 flex justify-center lg:justify-start">
              <Separator className="bg-backgroundblack w-52 h-3 border-4 border-backgroundwhite rounded-xl mb-10" />
            </div>
            <h2 className="text-xl font-bold text-center -mt-5 lg:text-left lg:ml-1 lg:text-3xl uppercase">Habilidades</h2>
            <p className="px-5 text-center lg:text-left lg:text-xl">
              Me esforço para estar em constante
              desenvolvimento e alinhado ao máximo
              as necessidades do mercado e dos meus clientes,
              sempre aprendendo novas tecnologias. <br />
              Aqui estão algumas das minhas <i>hard skills</i>.</p>
            <div className="w-full hidden lg:flex justify-center mt-5">
              <List />
            </div>
          </div>
          <div className="flex lg:hidden justify-center mt-5">
            <List />
          </div>
          <div className="flex lg:hidden justify-center">
            <Image src="/code.png" width={250} height={250} alt="code" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full text-center mt-10">
        <h2 className="text-backgroundwhite text-xl font-semibold uppercase lg:text-3xl  mt-5 mb-2">Projetos de clientes 🚀</h2>
        <SliderClients />
        <h2 className="text-backgroundwhite text-xl font-semibold uppercase lg:text-3xl mt-5 mb-2">Projetos pessoais 💡</h2>
        <SliderMyProjcts />
        <p className="mt-5 lg:hidden">Arraste para o lado ➞</p>
        </div>
      </section>
    </main >
  )
}