import Head from "next/head";
import { Menu } from "../components/Menu/index";
import { StyledSection } from "@/components/Section/style";
import { StyledSection2 } from "@/components/Section2/style";
import { TypeAnimation } from 'react-type-animation';
import Code from '../components/Code/style';
import Image from "next/image";
import Links from '../components/Links/style';
import { SiGithub } from "react-icons/si";
import List from '../components/List/index';
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import eu from '../../public/img/eu.jpeg';
import code from '../../public/img/code.png';
import Line from '../components/Line/style';
import { CardProject } from "../components/CardProject/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';



export default function Home() {
  return (
    <>
    <Head>
      <title>Fabrício Santos</title>
      <meta name='keywords' content="Desenvolvedor, front-end, Reactjs, Fabrício, Fabrício Santos"></meta>
      <meta name="description" content="Desenvolvedor front-end"></meta>
    </Head>

    <Menu/>
      <StyledSection id="about">
        <div>
          <h1>Eu sou Fabrício Santos 🖖😁<br/>
            <TypeAnimation
              sequence={[
                'Dev. Front-End', // Types 'One'
                1000, // Waits 1s
                'Dev. React ⚛️', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                () => {
                  console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style
              ={{ fontSize: '1em', display: 'inline-block' }}
            />
          </h1>
          <Code>
            • 🧑‍🎓 Estou no 3º perído de Análise e Desenvolvimento de Sistemas. <br />
            <br />
            • 👨‍💻 Já tive contato com: Python, JavaScript, Java. <br />
            <br />
            • 🧠 Atualmente focado em JavaScript e ReactJS. <br />
            <br />
            • 🎯 Em busca da minha primeira oportunidade profissional.
          </Code>
          <Links>
          <a href="https://github.com/Fabricio-Antonio" target="_blank" rel="noopener noreferrer"><SiGithub/></a>
          <a href="https://www.linkedin.com/in/fabricio-ss/" target="_blank" rel="noopener noreferrer"><SiLinkedin/></a>
          <a href="https://www.instagram.com/fabricio.ss.dev/" target="_blank" rel="noopener noreferrer"><SiInstagram/></a>
          <a href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank" rel="noopener noreferrer"><SiWhatsapp/></a>
          </Links>
        </div>
        <div className="eu">
          <Image src={eu} height={200}width={200} alt="..."/>
        </div>
      </StyledSection>
      <StyledSection2>
        <div className="my-6">
          <Image src={code} width={500} height={500} alt="..." />
        </div>
        <div>
          <Line/>
          <h2 id="habilit">Caixa de ferramentas 🛠️</h2>
            <p>
              Me esforço para estar em constante <br />
              desenvolvimento e alinhado ao máximo <br />
              as necessidades do mercado.
            </p>
          <List />
        </div>
      </StyledSection2>
      <StyledSection >
        <div className="displayBlock">
          <h1 id="projects">Meus projetos 🚀</h1>
          <CardProject/>
        </div>
      </StyledSection>
  </>
  )
}