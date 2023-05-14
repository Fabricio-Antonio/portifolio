import Head from "next/head"
import { Menu } from "../components/Menu/index"
import { StyledSection } from "@/components/Section/style"
import Typical from 'react-typical';

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
        <h1>Eu sou Fabrício, {''}
          <Typical
          loop={Infinity}
          steps={[
            'dev Front-end React. ⚛️👨‍💻',
            1000,
            'amante de tecnologia',
            1000]}
            />
           dev Front-end React. ⚛️👨‍💻</h1>
        <p>Eu sou Fabrício, jovem iniciante na área de 
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