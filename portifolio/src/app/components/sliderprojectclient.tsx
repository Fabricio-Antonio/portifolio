"use client";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function SliderClients() {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 425px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 4, spacing: 10 },
            },
        },
        slides: { perView: 1, spacing: 10 },
    })
    return (
        <>
            <div ref={sliderRef} className="keen-slider flex overflow-auto object-cover overflow-y-hidden justify-center">
                <div className="keen-slider__slide h-[300px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/junior.png' width={400} height={400} alt="projeto pokedex" />
                    <h3 className="text-backgroundblack font-semibold text-lg my-2">Site portifólio - Filmmeker</h3>
                    <div className="flex justify-center gap-1 lg:gap-5">
                        <div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite">Saiba mais</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl ">
                                    <DialogHeader>
                                        <DialogTitle>Site portifólio - Filmmeker</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            ReactJS, TypeScript, TailwindCSS <br /><br />
                                            Esse projeto de um site portifólio onde o cliente pôde não só exibir uma coleção de trabalhos, mas também é um convite para explorar sua jornada profissional e criativa.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                            </div>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <div className="flex justify-center gap-3">
                                            <Link href="https://site-junior-ribeiro.vercel.app/"  target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Visitar
                                                </Button>
                                            </Link>
                                            <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo."  target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Solicitar projeto
                                                </Button>
                                            </Link>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div>
                            <Link href="https://site-junior-ribeiro.vercel.app/"  target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                    Visitar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}