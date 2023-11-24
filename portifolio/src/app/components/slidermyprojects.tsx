"use client";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function SliderM() {
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
            <div ref={sliderRef} className="keen-slider flex overflow-auto object-cover overflow-y-hidden ">
                <div className="keen-slider__slide h-[300px] rounded-xl bg-backgroundwhite">
                    <Image src='/quiz.png' width={400} height={400} alt="projeto pokedex" />
                    <h3 className="text-backgroundblack font-semibold text-lg my-2">Quiz pokémon</h3>
                    <div className="flex justify-center gap-1 lg:gap-5">
                        <div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite">Saiba mais</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl ">
                                    <DialogHeader>
                                        <DialogTitle>Quiz pokémon</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            HTML, CSS, JavaScript <br /><br />
                                            Esse foi um dos meus primeiros projetos, nesse projeto é construído jogo no estilo quiz temático de pokémon, esse projeto foi constutuído com finalidade acadêmica com objetivo de praticar a lógica de programação
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
                                            <Link href="https://quiz-pokemon-nine.vercel.app/"  target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Visitar
                                                </Button>
                                            </Link>
                                            <Link href="https://github.com/Fabricio-Antonio/Quiz-pokemon"  target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Código
                                                </Button>
                                            </Link>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div>
                            <Link href="https://github.com/Fabricio-Antonio/Quiz-pokemon"  target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                    Código
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide h-[300px] rounded-xl bg-backgroundwhite">
                    <Image src='/pokedex.png' width={400} height={400} alt="projeto pokedex" />
                    <h3 className="text-backgroundblack font-semibold text-lg my-2">Pokédex</h3>
                    <div className="flex justify-center gap-1 lg:gap-5">
                        <div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite">Saiba mais</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Pokédex</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            HTML, CSS, JavaScript <br /><br />
                                            Esse foi um dos meus primeiros projetos, nesse projeto é feito uma consultan utilizando PokéAPI que retornará: nome, número, e imagem do pokémon. É possível também realizar consulta de um monstro exécífico através do seu nome ou número.
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
                                            <Link href="https://pokedex-rosy-xi.vercel.app/"  target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Visitar
                                                </Button>
                                            </Link>
                                            <Link href="https://github.com/Fabricio-Antonio/Pokedex"  target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Código
                                                </Button>
                                            </Link>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div>
                            <Link href="https://github.com/Fabricio-Antonio/Pokedex" target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                    Código
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide h-[300px] rounded-xl bg-backgroundwhite">
                    <Image src='/site.png' width={400} height={400} alt="projeto pokedex" />
                    <h3 className="text-backgroundblack font-semibold text-lg my-2">Meu site</h3>
                    <div className="flex justify-center gap-1 lg:gap-5">
                        <div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="rounded-xl border-none hover:bg-backgroundblack hover:text-backgroundwhite">Saiba mais</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-xl ">
                                    <DialogHeader>
                                        <DialogTitle>Meu site</DialogTitle>
                                        <DialogDescription>
                                            <span className="uppercase font-semibold">tecnologias</span> <br />
                                            TypeScript, ReactJS, TailwindCSS <br /><br />
                                            Quando concebi esse projeto eu já tinha praticado bastante criando outro projetos fictícios  e também aprendido outras tecnologias.
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
                                            <Link href="#" target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Visitar
                                                </Button>
                                            </Link>
                                            <Link href="#" target="_blank">
                                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                                    Código
                                                </Button>
                                            </Link>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div>
                            <Link href="" target="_blank">
                                <Button className="bg-background rounded-xl hover:bg-backgroundblack hover:text-backgroundwhite">
                                    Código
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}