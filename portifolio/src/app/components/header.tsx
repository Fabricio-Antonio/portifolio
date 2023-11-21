import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Home, MenuIcon, FolderGit2, Code2, User2, LibraryBig } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="bg-backgroundblack w-full">
                <Sheet>
                    <SheetTrigger className="py-3 px-3 ">
                        <MenuIcon className="text-backgroundwhite" />
                    </SheetTrigger>
                    <SheetContent className="bg-backgroundblack text-backgroundwhite">
                        <SheetHeader className="text-backgroundwhite font-extrabold">
                            <Avatar className="w-14">
                                <AvatarImage src="/logo.png" />
                                <AvatarFallback>FS</AvatarFallback>
                            </Avatar>
                            Menu
                        </SheetHeader>
                        <div className="flex flex-col items-center font-extrabold">
                            <SheetClose asChild>
                                <Link href="#" className="w-full bg-background text-center mt-3 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                    <Button>
                                        <Home className="mr-1" />
                                        Início
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#" className="w-full bg-background text-center mt-3 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                    <Button>

                                        <Code2 className="mr-1" />
                                        Habilidades
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#" className="w-full bg-background text-center mt-3 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                    <Button>
                                        <FolderGit2 className="mr-1" />
                                        Projetos
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#" className="w-full bg-background text-center mt-3 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                    <Button>
                                        <User2 className="mr-1" />
                                        Sobre
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#" className="w-full bg-background text-center mt-3 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                    <Button>
                                        <LibraryBig className="" />
                                        Certificados
                                    </Button>
                                </Link>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </>
    )
}