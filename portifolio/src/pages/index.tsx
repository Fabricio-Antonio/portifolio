import Head from "next/head";
import { Menu } from "../components/Menu/index";
import { StyledSection } from "@/components/Section/style";
import { StyledSection2 } from "@/components/Section2/style";
import { TypeAnimation } from 'react-type-animation';
import Code from '../components/Code/style';
import Image from "next/image";
import eu from '../../public/img/eu.jpeg';
import code from '../../public/img/code.png';
import Line from '../components/Line/style'



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
        <h1>Eu sou Fabrício 🖖😁<br/>
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
             • 🎯 Em busca da minha primeira oportunidade profissional
          </Code>
        </div>
        <div className="flex flex-wrap rounded-full">
        <Image src={eu} height={200}width={200} alt="..."/>
        </div>
      </StyledSection>
      <StyledSection2>
        <div className="my-6">
        <Image src={code} width={500} height={500} alt="..." />
        </div>
        <Line/>
      </StyledSection2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 id="projects">Projetos</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}