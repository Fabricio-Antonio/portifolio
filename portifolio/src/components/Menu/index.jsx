import  { React } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StyledMenu } from './style'

export const Menu = () => (
    <>
        <StyledMenu>
        <ul>
                <Image src= '/images/logo2.png' width={150} height={100} alt="..."/>
                <li>
                    <Link href='/'>
                        INÍCIO
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        PROJETOS
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        SOBRE
                    </Link>              
                </li>
            </ul>
        </StyledMenu>
    </>
);

export default Menu