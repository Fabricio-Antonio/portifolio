"use client";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";

export default function SliderCertificates() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 1,
            spacing: 15,
        },
        breakpoints: {
            "(min-width: 425px)": {
                slides: { 
                    perView: 2, 
                    spacing: 15 
                },
            },
            "(min-width: 768px)": {
                slides: { 
                    perView: 3, 
                    spacing: 20 
                },
            },
            "(min-width: 1024px)": {
                slides: { 
                    perView: 4, 
                    spacing: 20 
                },
            },
        },
    })

    const certificates = [
        { id: 1, src: '/certificado 9.jpg', alt: 'Certificado 8' },
        { id: 2, src: '/certificado 8.png', alt: 'Certificado 8' },
        { id: 3, src: '/certificado 1.png', alt: 'Certificado 1' },
        { id: 4, src: '/certificado 2.png', alt: 'Certificado 2' },
        { id: 5, src: '/certificado 3.png', alt: 'Certificado 3' },
        { id: 6, src: '/certificado 4.png', alt: 'Certificado 4' },
        { id: 7, src: '/certificado 5.png', alt: 'Certificado 5' },
        { id: 8, src: '/certificado 6.png', alt: 'Certificado 6' },
        { id: 9, src: '/certificado 7.png', alt: 'Certificado 7' },
    ];

    return (
        <div className="w-full px-4 py-6">
            <div 
                ref={sliderRef} 
                className="keen-slider w-full overflow-hidden"
                style={{ 
                    height: 'auto',
                    maxWidth: '100%'
                }}
            >
                {certificates.map((cert) => (
                    <div 
                        key={cert.id}
                        className="keen-slider__slide flex justify-center items-center"
                    >
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-sm mx-auto">
                                    <div className="relative w-full h-48 sm:h-52 md:h-56">
                                        <Image 
                                            src={cert.src} 
                                            fill
                                            alt={cert.alt}
                                            className="object-cover rounded-t-2xl"
                                            sizes="(max-width: 425px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <Button 
                                            variant="outline" 
                                            className="w-full mt-3 text-xs py-2"
                                        >
                                            Ver Certificado
                                        </Button>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-auto">
                                <DialogHeader>
                                    <DialogDescription>
                                        Visualização completa do certificado
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex justify-center items-center p-4">
                                    <div className="relative w-full h-auto max-w-3xl">
                                        <Image 
                                            src={cert.src} 
                                            width={800}
                                            height={600}
                                            alt={cert.alt}
                                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                ))}
            </div>
        </div>
    )
}