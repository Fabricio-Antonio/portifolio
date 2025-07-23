import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full bg-backgroundblack">
            <div className="flex flex-col items-center w-full h-auto mt-6">
                <div className=" flex justify-around w-full mt-6 mb-6 ">
                    <Link href="#top" aria-label="Link para seção de inicial do site" className="w-14 h-6 lg:h-0">
                        <Avatar className="w-14 mt-10 lg:mt-5 lg:w-32 lg:h-20">
                            <AvatarImage src="/logo.png" alt="logo" />
                        </Avatar>
                        
                    </Link>
                    <div className="flex flex-col gap-3 text-backgroundwhite font-semibold">
                    <Link href="#habilidades">
                            <span className="hover:text-background">Habilidades</span>
                        </Link>
                        <Link href="#projetos">
                            <span className="hover:text-background">Projetos</span>
                        </Link>
                        <Link href="#sobre">
                            <span className="hover:text-background">Sobre</span>
                        </Link>
                        <Link href="#certificados">
                            <span className="hover:text-background">Certificados</span>
                        </Link>
                    </div>
                </div>

                <Separator className="w-11/12 bg-backgroundwhite" />
                <div className="flex gap-3 mt-5 text-backgroundwhite text-xl">
                    <Link href="https://github.com/Fabricio-Antonio" target="_blank" rel="noopener noreferrer"><SiGithub/></Link>
                    <Link href="https://www.linkedin.com/in/fabricio-ss/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></Link>
                    <Link href="https://www.instagram.com/fabricio.ss.dev/" target="_blank" rel="noopener noreferrer"><SiInstagram /></Link>
                    <Link href="https://api.whatsapp.com/send?phone=5581983587510&text=Oi%2C%20Fabr%C3%ADcio.%20Eu%20vi%20seu%20portif%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho%2C%20gostaria%20de%20conversar%20contigo." target="_blank" rel="noopener noreferrer"><SiWhatsapp /></Link>
                </div>

                <div className="text-white px-8 py-4 text-sm">
                    © {currentYear} Copyright{" "}
                    <span className="font-semibold text-background pl-1">
                        Fabrício Santos
                    </span>
                </div>
            </div>
        </div>
    )
}