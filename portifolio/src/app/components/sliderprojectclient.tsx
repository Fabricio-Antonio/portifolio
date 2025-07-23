"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function GridClients() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                <div className="bg-backgroundwhite border border-gray-200 rounded-2xl shadow-lg flex flex-col transition-transform hover:scale-105">
                    <Image
                        src='/rotas4me.png'
                        width={400}
                        height={220}
                        alt="projeto rotas4me"
                        className="rounded-t-2xl object-cover w-full h-[220px] border-b"
                    />
                    <div className="flex-1 flex flex-col items-center justify-between p-4">
                        <h3 className="text-backgroundblack font-bold text-xl mb-2 text-center">Startup - Rotas4Me</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                        </p>
                        <div className="flex gap-3 w-full justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                        Saiba mais
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Rotas4Me</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            React Native, TypeScript, Expo <br /><br />
                                            <strong>Rotas4Me</strong> é uma plataforma de mobilidade urbana inteligente focada na <strong>segurança de mulheres</strong> em ambientes urbanos. Mais que um app, é um ecossistema colaborativo criado para empoderar, proteger e transformar a experiência de circular pelas cidades.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-center mt-4">
                                        <Link href="https://youtu.be/TQDn3RTcNbs?si=O3tKWTMq7JL6H_qa" target="_blank">
                                            <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-40">
                                                Assistir apresentação
                                            </Button>
                                        </Link>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <Link href="https://www.rotas4me.com" target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                    Visitar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-backgroundwhite border border-gray-200 rounded-2xl shadow-lg flex flex-col transition-transform hover:scale-105">
                    <Image
                        src='/spe2.jpeg'
                        width={400}
                        height={220}
                        alt="projeto sistema painel eletrônico"
                        className="rounded-t-2xl object-cover w-full h-[220px] border-b"
                    />
                    <div className="flex-1 flex flex-col items-center justify-between p-4">
                        <h3 className="text-backgroundblack font-bold text-xl mb-2 text-center">Sistema de Painel Eletrônico</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                        </p>
                        <div className="flex gap-3 w-full justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                        Saiba mais
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Sistema de Panel Eletrônico</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            ReactJS, Next.js, TailwindCSS, API REST, Insomnia.<br /><br />
                                            Desenvolvi <strong>sistema fechado e robusto</strong> de painel eletrônico para Câmara Municipal da minha cidade natal para exibição em tempo real de votações e pautas legislativas, que atendeu a uma necessidade crucial para a câmara, melhorando a comunicação e transparência dos processos legislativos. <strong>95%</strong> dos usuários relataram <strong>aumento na clareza e agilidade</strong> no acompanhamento das sessões legislativas.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-center mt-4">
                                        <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank">
                                            <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-40">
                                                Solicitar projeto
                                            </Button>
                                        </Link>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>

                <div className="bg-backgroundwhite border border-gray-200 rounded-2xl shadow-lg flex flex-col transition-transform hover:scale-105">
                    <Image
                        src='/TrayOpen.png'
                        width={400}
                        height={220}
                        alt="projeto trayopen"
                        className="rounded-t-2xl object-cover w-full h-[220px] border-b"
                    />
                    <div className="flex-1 flex flex-col items-center justify-between p-4">
                        <h3 className="text-backgroundblack font-bold text-xl mb-2 text-center">TrayOpen</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                        </p>
                        <div className="flex gap-3 w-full justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                        Saiba mais
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Aplicação desktop - TrayOpen</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            Electron, JavaScript <br /><br />
                                            TrayOpen é uma ferramenta <strong>open-source</strong> criada para elevar a produtividade de desenvolvedores. Funciona como um <strong>gerenciador inteligente de projetos</strong>, acessível direto pela bandeja do sistema, permitindo abrir múltiplos repositórios com um clique. Ideal para quem lida com diversos projetos diariamente, o TrayOpen elimina a fricção na rotina de desenvolvimento e acelera o foco no que importa: <strong>codar com eficiência.</strong>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-center mt-4">
                                        <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank">
                                            <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-40">
                                                Solicitar projeto
                                            </Button>
                                        </Link>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <Link href="https://github.com/Fabricio-Antonio/TrayOpen/releases/tag/v1.5.0" target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                    Baixar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-backgroundwhite border border-gray-200 rounded-2xl shadow-lg flex flex-col transition-transform hover:scale-105">
                    <Image
                        src='/Junior.png'
                        width={400}
                        height={220}
                        alt="projeto portifólio filmmaker"
                        className="rounded-t-2xl object-cover w-full h-[220px] border-b"
                    />
                    <div className="flex-1 flex flex-col items-center justify-between p-4">
                        <h3 className="text-backgroundblack font-bold text-xl mb-2 text-center">Site portifólio - Filmmaker</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                        </p>
                        <div className="flex gap-3 w-full justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                        Saiba mais
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Site portifólio - Filmmaker</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            ReactJS, TypeScript, TailwindCSS <br /><br />
                                            Esse projeto é um site portifólio onde o cliente pôde não só exibir uma coleção de trabalhos, mas também é um convite para explorar sua jornada profissional e criativa.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-center mt-4">
                                        <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank">
                                            <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-40">
                                                Solicitar projeto
                                            </Button>
                                        </Link>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <Link href="https://site-junior-ribeiro.vercel.app/" target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                    Visitar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-backgroundwhite border border-gray-200 rounded-2xl shadow-lg flex flex-col transition-transform hover:scale-105">
                    <Image
                        src='/mermake.png'
                        width={400}
                        height={220}
                        alt="projeto e-commerce mermake"
                        className="rounded-t-2xl object-cover w-full h-[220px] border-b"
                    />
                    <div className="flex-1 flex flex-col items-center justify-between p-4">
                        <h3 className="text-backgroundblack font-bold text-xl mb-2 text-center">E-commerce - Mermake Santiago</h3>
                        <p className="text-gray-600 text-sm mb-4 text-center">
                        </p>
                        <div className="flex gap-3 w-full justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                        Saiba mais
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>E-commerce - Mermake Santiago</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            ReactJS, TypeScript, TailwindCSS <br /><br />
                                            Já imaginou seu negócio na mão do seu cliente, a venda a um toque de distância? Um E-commerce desempenha um papel significativo na modernização do comércio, proporcionando conveniência aos consumidores e criando oportunidades de negócios para empreendedores e empresas de todos os tamanhos. Eficiente e personalizado, atendendo às demandas assim possibilitando que você alcance um público mais amplo.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-center mt-4">
                                        <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank">
                                            <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-40">
                                                Solicitar projeto
                                            </Button>
                                        </Link>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <Link href="https://mermake-santiago-store.vercel.app/" target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite w-28">
                                    Visitar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}