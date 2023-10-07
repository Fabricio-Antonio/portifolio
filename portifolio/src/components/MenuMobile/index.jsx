import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Image from 'next/image';
import logo from '../../../public/img/logo.png'
import Link from 'next/link';


function MenuMobile() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='test'>
      <Navbar color="faded" light className='Navbar'>
        <Image src= {logo} width={60} height={40} alt="..."/>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <ul>
                <li>
                    <NavLink href='#projects'>
                        PROJETOS
                    </NavLink>
                </li>
                <li>
                    <NavLink href='#habilit'>
                        HABILIDADES
                    </NavLink>              
                </li>
                <li>
                    <NavLink href='#about'>
                        SOBRE
                    </NavLink>              
                </li>
            </ul>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuMobile;