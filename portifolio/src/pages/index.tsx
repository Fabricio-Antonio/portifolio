import Head from "next/head"
import { Menu } from "../components/Menu/index"


export default function Home() {
  return (
    <>
    <Head>
      <title>Fabrício Santos</title>
      <meta name='keywords' content="Desenvolvedor, front-end, Reactjs, Fabrício, Fabrício Santos"></meta>
      <meta name="description" content="Desenvolvedor front-end"></meta>
    </Head>
      <Menu/>
      <h1>test</h1>
    </>
  )
}