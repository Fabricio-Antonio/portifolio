"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <div className="lg:flex lg:justify-center">
          <div>
            <h1
              className="text-backgroundwhite font-semibold text-2xl mt-12 text-center lg:text-5xl lg:font-bold lg:mt-24"
            >Eu sou Fabrício Santos <br className="lg:hidden"/> 🖖😁<br />
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
              <a href="https://github.com/Fabricio-Antonio" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
              <a href="https://www.linkedin.com/in/fabricio-ss/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
              <a href="https://www.instagram.com/fabricio.ss.dev/" target="_blank" rel="noopener noreferrer"><SiInstagram /></a>
              <a href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank" rel="noopener noreferrer"><SiWhatsapp /></a>
            </div>
          </div>
          <div className="w-full flex justify-center lg:w-[300px] lg:h-[200px] lg:justify-center lg:mt-44">
            <Image src='/eu.jpeg' width={200} height={200} alt="Fabrício Santos"
              className="rounded-full border-4 border-backgroundwhite"
            />
          </div>
        </div>
      </section>
      <section className="bg-backgroundwhite">
        <p>test</p>
      </section>
    </main >
  )
}
