import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabrício Santos',
  description: 'Eu sou Fabrício Santos, um Dev apaixonado por transformar ideias em experiências digitais que deixam uma marca duradoura. Em meu laboratório de bits e bytes, eu não apenas programo; eu crio performances digitais que contam histórias e desencadeiam emoções.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
