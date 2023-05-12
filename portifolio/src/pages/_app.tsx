import GlobalSyles from '@/styles/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>Fabrício Santos</title>
        <meta
         name='keywords'
         content="Desenvolvedor, front-end, Reactjs, Fabrício, Fabrício Santos"></meta>
        <meta
         name="description"
         content="Desenvolvedor front-end"></meta>
    </Head>
    <GlobalSyles/>
    <Component {...pageProps} />
  </>
  )
}
