import Head from "next/head"
import { Menu } from "../components/Menu/index"
import { StyledSection } from "@/components/Section/style"
import Typed from "react-typed";

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
        <h1>Eu sou Fabrício <br/>
        <Typed
            strings={['Dev Front-End React ⚛️💻']}
            typeSpeed={90}
            backSpeed={50}
            loop
            /> 
        </h1>
        <p>
          
          <br/>
          programação. Estou me graduando em Análise e
          <br/>
          
          Desenvolvimento de Sistemas, estou no 3º período,
          <br/>
          
          com previsão de conclusão no 1º período de 2024. 👨‍🎓
        </p>
      </StyledSection>
    </>
  )
}