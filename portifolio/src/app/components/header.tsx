import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Home, MenuIcon, FolderGit2, Code2, User2, LibraryBig } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="bg-backgroundblack w-full flex justify-between lg:hidden">
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
                                <Link href="#inicio" className="w-full bg-background text-center mt-3 rounded-xl hover:bg-backgroundwhite hover:text-background">
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
                <div>
                    
                </div>
                <Avatar className="w-14 m-3">
                    <AvatarImage src="/logo.png" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
            </div>
            <div className="bg-backgroundblack text-backgroundwhite w-full h-16 hidden lg:flex justify-around ">
            <div>
                <Avatar className="w-14 flex mt-3">
                    <AvatarImage src="/logo.png" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
            </div>
                <NavigationMenu>
                    <NavigationMenuList className=" flex gap-8">
                        <Link href="#inicio" legacyBehavior passHref>
                            <NavigationMenuItem className="bg-background cursor-pointer flex gap-1 p-2 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                <Home />
                                <NavigationMenuLink>
                                    Iníco
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuItem className="bg-background cursor-pointer flex gap-1 p-2 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                <Code2 />

                                <NavigationMenuLink>
                                    Habilidades
                                </NavigationMenuLink>

                            </NavigationMenuItem>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuItem className="bg-background cursor-pointer flex gap-1 p-2 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                <FolderGit2 />
                                <NavigationMenuLink>
                                    Projetos
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuItem className="bg-background cursor-pointer flex gap-1 p-2 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                <User2 />

                                <NavigationMenuLink>
                                    Sobre
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuItem className="bg-background cursor-pointer flex gap-1 p-2 rounded-xl hover:bg-backgroundwhite hover:text-background">
                                <LibraryBig />
                                <NavigationMenuLink>
                                    Certificados
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </Link>
                    </NavigationMenuList>

                </NavigationMenu>

            </div >

        </>
    )
}