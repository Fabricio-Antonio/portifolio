"use client";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function SliderCertificates() {
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
            <div ref={sliderRef} className="keen-slider flex overflow-auto object-cover overflow-y-hidden">
                <div className="keen-slider__slide  h-[257px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/certificado 1.png' width={400} height={400} alt="projeto pokedex" />
                </div>
                <div className="keen-slider__slide h-[257px] rounded-xl bg-backgroundblack border-2 border-backgroundblack">
                    <Image src='/certificado 2.png' width={400} height={400} alt="projeto pokedex" />
                </div>
                <div className="keen-slider__slide h-[257px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/certificado 3.png' width={400} height={400} alt="projeto pokedex" />
                </div>
                <div className="keen-slider__slide h-[257px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/certificado 4.png' width={400} height={400} alt="projeto pokedex" />
                </div>
                <div className="keen-slider__slide h-[257px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/certificado 5.png' width={400} height={400} alt="projeto pokedex" />
                </div>
                <div className="keen-slider__slide h-[257px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/certificado 6.png' width={400} height={400} alt="projeto pokedex" />
                </div>
                <div className="keen-slider__slide h-[257px] rounded-xl bg-backgroundwhite border-2 border-backgroundblack">
                    <Image src='/certificado 7.png' width={400} height={400} alt="projeto pokedex" />
                </div>
            </div >
        </>
    )
}