import  { React } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StyledMenu } from './style';
import logo from '../../../public/img/logo.png'

export const Menu = () => (
    <>
        <StyledMenu>
            <ul>
                <li>
                    <Image src= {logo} width={60} height={40} alt="..."/>
                </li>
                <li>
                    <Link href='#projects'>
                        PROJETOS
                    </Link>
                </li>
                <li>
                    <Link href='#habilit'>
                        HABILIDADES
                    </Link>              
                </li>
                <li>
                    <Link href='#about'>
                        SOBRE
                    </Link>              
                </li>
            </ul>
        </StyledMenu>
    </>
);

export default Menu