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
                <Link href='/'>
                <Image src= {logo} width={150} height={100} alt="..."/>
                    </Link>
                </li>
                <li>
                    <Link href='#projects'>
                        PROJETOS
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