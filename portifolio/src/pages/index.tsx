import Head from "next/head"
import { Menu } from "../components/Menu/index"
import { StyledSection } from "@/components/Section/style"
import { StyledSection2 } from "@/components/Section2/style"
import { TypeAnimation } from 'react-type-animation';
import Typed from "react-typed"
import Image from "next/image";
import eu from '../../public/img/eu.jpeg'
import code from '../../public/img/code.png'



export default function Home() {
  return (
    <>
    <Head>
      <title>Fabrício Santos</title>
      <meta name='keywords' content="Desenvolvedor, front-end, Reactjs, Fabrício, Fabrício Santos"></meta>
      <meta name="description" content="Desenvolvedor front-end"></meta>
    </Head>

      <Menu/>
      <StyledSection>
        <div>
        <h1>Eu sou Fabrício 🖖😁<br/>
        <Typed
      strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        </h1>
        <p>
          Olá, seja bem-vido(a) ao meu site! 
          <br />
          <br/>
          Sou estudante de programação. Estou me graduando em 
          <br/>
          Análise e Desenvolvimento de Sistemas, estou no 3º período,
          <br/>
          
          com previsão de conclusão no 1º período de 2024. 👨‍🎓
          <br />
          <br />
          Contudo não me restrinjo apenas
          <br />
          ao conhecimento adiquirido no âmbito académico,
          <br />
          sempre procuro me atualizar e me aprimorar
          <br />
          também por meio de videos, cursos, comunidades,
          <br />
          e sites. ✍️📚
        </p>
        </div>
        <div className="flex flex-wrap rounded-full">
        <Image src={eu} height={200}width={200} alt="..."/>
        </div>
      </StyledSection>
      <StyledSection2>
        <Image src={code} width={150} height={100} alt="..." />
      </StyledSection2>
    </>
  )
}